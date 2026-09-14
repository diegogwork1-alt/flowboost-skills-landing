import type { APIRoute } from 'astro';
import { db, recorta } from '../../lib/db';

export const prerender = false;

/**
 * Webhook de Typeform: cada respuesta enviada llega aquí y se guarda.
 *
 * La firma se comprueba SIEMPRE. Sin ella, cualquiera que conozca la URL
 * podría inventarse leads. Si falta el secreto en el entorno, el endpoint
 * se niega a funcionar en vez de aceptar cualquier cosa.
 */

const codificador = new TextEncoder();

async function firmaValida(cuerpo: string, cabecera: string | null, secreto: string) {
  if (!cabecera?.startsWith('sha256=')) return false;
  const clave = await crypto.subtle.importKey(
    'raw',
    codificador.encode(secreto),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const firma = await crypto.subtle.sign('HMAC', clave, codificador.encode(cuerpo));
  const esperado = btoa(String.fromCharCode(...new Uint8Array(firma)));
  const recibido = cabecera.slice('sha256='.length);
  // Comparación en tiempo constante: no filtra información por lo que tarda.
  if (esperado.length !== recibido.length) return false;
  let diferencia = 0;
  for (let i = 0; i < esperado.length; i++) {
    diferencia |= esperado.charCodeAt(i) ^ recibido.charCodeAt(i);
  }
  return diferencia === 0;
}

/** Typeform manda las respuestas como lista; se aplanan a algo legible. */
function aplanar(respuestas: unknown): Record<string, unknown> {
  if (!Array.isArray(respuestas)) return {};
  const salida: Record<string, unknown> = {};
  for (const r of respuestas as Record<string, any>[]) {
    const titulo: string = r?.field?.ref ?? r?.field?.id ?? 'campo';
    const tipo: string = r?.type ?? '';
    const valor =
      tipo === 'choice' ? (r.choice?.label ?? r.choice?.other)
      : tipo === 'choices' ? r.choices?.labels
      : r[tipo];
    salida[titulo] = valor ?? null;
  }
  return salida;
}

/** Busca el primer valor que parezca un nombre, un email o un teléfono. */
function adivina(respuestas: Record<string, any>[], tipos: string[], claves: string[]) {
  for (const r of respuestas) {
    const tipo: string = r?.type ?? '';
    const ref: string = (r?.field?.ref ?? '').toLowerCase();
    if (tipos.includes(tipo)) return typeof r[tipo] === 'string' ? r[tipo] : null;
    if (claves.some((c) => ref.includes(c)) && typeof r[tipo] === 'string') return r[tipo];
  }
  return null;
}

export const POST: APIRoute = async ({ request }) => {
  const secreto = process.env['TYPEFORM_WEBHOOK_SECRET'];
  if (!secreto) {
    console.error('[api/typeform] falta TYPEFORM_WEBHOOK_SECRET: se rechaza el webhook');
    return new Response('Webhook sin configurar', { status: 503 });
  }

  const cuerpo = await request.text();
  if (!(await firmaValida(cuerpo, request.headers.get('typeform-signature'), secreto))) {
    return new Response('Firma no válida', { status: 401 });
  }

  try {
    const evento = JSON.parse(cuerpo) as Record<string, any>;
    const respuesta = evento?.form_response ?? {};
    const respuestas: Record<string, any>[] = Array.isArray(respuesta.answers) ? respuesta.answers : [];
    const ocultos = (respuesta.hidden ?? {}) as Record<string, unknown>;

    const { sql } = db();
    await sql`
      INSERT INTO leads (enviado_en, formulario_id, respuesta_id, nombre, email, telefono, respuestas, utm, crudo)
      VALUES (
        ${respuesta.submitted_at ?? null},
        ${recorta(respuesta.form_id, 100)},
        ${recorta(respuesta.token ?? evento.event_id, 200) ?? crypto.randomUUID()},
        ${recorta(adivina(respuestas, [], ['nombre', 'name']), 200)},
        ${recorta(adivina(respuestas, ['email'], ['email', 'correo']), 200)},
        ${recorta(adivina(respuestas, ['phone_number'], ['telefono', 'phone', 'movil']), 50)},
        ${JSON.stringify(aplanar(respuestas))}::jsonb,
        ${JSON.stringify(ocultos)}::jsonb,
        ${cuerpo}::jsonb
      )
      ON CONFLICT (respuesta_id) DO NOTHING`;

    return new Response(null, { status: 204 });
  } catch (error) {
    // Se devuelve 500 a propósito: así Typeform reintenta y el lead no se pierde.
    console.error('[api/typeform] no se pudo guardar el lead:', error);
    return new Response('Error al guardar', { status: 500 });
  }
};
