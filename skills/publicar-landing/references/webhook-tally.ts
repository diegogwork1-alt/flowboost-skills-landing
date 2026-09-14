import type { APIRoute } from 'astro';
import { db, recorta } from '../../lib/db';

export const prerender = false;

/**
 * Webhook de Tally. Mismo papel que el de Typeform, pero cambian tres cosas:
 *
 *   · la cabecera es `Tally-Signature` (no `Typeform-Signature`)
 *   · el cuerpo llega como { eventId, eventType, createdAt, data:{ fields:[...] } }
 *   · cada campo trae `key`, `label`, `type` y `value`, en vez del formato
 *     de Typeform con un tipo distinto por respuesta
 *
 * El secreto va en TALLY_WEBHOOK_SECRET. Sin él, 503: nunca aceptar a ciegas.
 */

const codificador = new TextEncoder();

async function hmacBase64(mensaje: string, secreto: string) {
  const clave = await crypto.subtle.importKey(
    'raw',
    codificador.encode(secreto),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const firma = await crypto.subtle.sign('HMAC', clave, codificador.encode(mensaje));
  return btoa(String.fromCharCode(...new Uint8Array(firma)));
}

function iguales(a: string, b: string) {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

/**
 * OJO: el ejemplo oficial de Tally firma `JSON.stringify(payload)`, es decir
 * el cuerpo REserializado, no los bytes originales. Según cómo lo envíen,
 * uno u otro puede no coincidir. Se prueban los dos: primero el cuerpo crudo
 * (lo correcto) y, si falla, el reserializado.
 */
async function firmaValida(crudo: string, cabecera: string | null, secreto: string) {
  if (!cabecera) return false;
  const recibido = cabecera.startsWith('sha256=') ? cabecera.slice(7) : cabecera;
  if (iguales(await hmacBase64(crudo, secreto), recibido)) return true;
  try {
    return iguales(await hmacBase64(JSON.stringify(JSON.parse(crudo)), secreto), recibido);
  } catch {
    return false;
  }
}

/** Los campos de Tally vienen con etiqueta legible: se indexan por ella. */
function aplanar(campos: unknown): Record<string, unknown> {
  if (!Array.isArray(campos)) return {};
  const salida: Record<string, unknown> = {};
  for (const c of campos as Record<string, any>[]) {
    const nombre: string = c?.label ?? c?.key ?? 'campo';
    salida[nombre] = c?.value ?? null;
  }
  return salida;
}

/** Busca nombre, email o teléfono por tipo de campo y, si no, por etiqueta. */
function adivina(campos: Record<string, any>[], tipos: string[], claves: string[]) {
  for (const c of campos) {
    if (tipos.includes(c?.type) && typeof c?.value === 'string') return c.value;
  }
  for (const c of campos) {
    const etiqueta = String(c?.label ?? '').toLowerCase();
    if (claves.some((k) => etiqueta.includes(k)) && typeof c?.value === 'string') return c.value;
  }
  return null;
}

export const POST: APIRoute = async ({ request }) => {
  const secreto = process.env['TALLY_WEBHOOK_SECRET'];
  if (!secreto) {
    console.error('[api/tally] falta TALLY_WEBHOOK_SECRET: se rechaza el webhook');
    return new Response('Webhook sin configurar', { status: 503 });
  }

  const crudo = await request.text();
  if (!(await firmaValida(crudo, request.headers.get('tally-signature'), secreto))) {
    return new Response('Firma no válida', { status: 401 });
  }

  try {
    const evento = JSON.parse(crudo) as Record<string, any>;
    if (evento?.eventType && evento.eventType !== 'FORM_RESPONSE') {
      return new Response(null, { status: 204 });
    }

    const datos = evento?.data ?? {};
    const campos: Record<string, any>[] = Array.isArray(datos.fields) ? datos.fields : [];

    // Los campos ocultos son campos normales marcados como tales en Tally.
    const utm: Record<string, unknown> = {};
    for (const c of campos) {
      const k = String(c?.label ?? c?.key ?? '').toLowerCase();
      if (k.startsWith('utm_') || k === 'fbclid' || k === 'gclid') utm[k] = c?.value ?? null;
    }

    const { sql } = db();
    await sql`
      INSERT INTO leads (enviado_en, formulario_id, respuesta_id, nombre, email, telefono, respuestas, utm, crudo)
      VALUES (
        ${datos.createdAt ?? evento.createdAt ?? null},
        ${recorta(datos.formId, 100)},
        ${recorta(datos.responseId ?? evento.eventId, 200) ?? crypto.randomUUID()},
        ${recorta(adivina(campos, ['INPUT_TEXT'], ['nombre', 'name']), 200)},
        ${recorta(adivina(campos, ['INPUT_EMAIL'], ['email', 'correo']), 200)},
        ${recorta(adivina(campos, ['INPUT_PHONE_NUMBER'], ['telefono', 'teléfono', 'phone', 'movil']), 50)},
        ${JSON.stringify(aplanar(campos))}::jsonb,
        ${JSON.stringify(utm)}::jsonb,
        ${crudo}::jsonb
      )
      ON CONFLICT (respuesta_id) DO NOTHING`;

    return new Response(null, { status: 204 });
  } catch (error) {
    // 500 a propósito: Tally reintenta y el lead no se pierde.
    console.error('[api/tally] no se pudo guardar el lead:', error);
    return new Response('Error al guardar', { status: 500 });
  }
};
