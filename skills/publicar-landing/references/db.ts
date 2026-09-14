import { getDatabase } from '@netlify/database';

// Una sola conexión reutilizada. En local apunta al Postgres que levanta
// `netlify dev`; en producción, a la base de Netlify (Neon).
let cache: ReturnType<typeof getDatabase> | null = null;

export function db() {
  cache ??= getDatabase();
  return cache;
}

/** Recorta un texto para que un campo inesperadamente largo no reviente nada. */
export function recorta(valor: unknown, max = 500): string | null {
  if (typeof valor !== 'string') return null;
  const limpio = valor.trim();
  return limpio ? limpio.slice(0, max) : null;
}

/**
 * La IP no se guarda en claro: se guarda un hash con sal. Sirve para
 * demostrar un consentimiento concreto sin conservar el dato personal.
 */
export async function hashIp(ip: string | null | undefined): Promise<string | null> {
  if (!ip) return null;
  const sal = process.env['CONSENTIMIENTO_SAL'] ?? 'Cliente14';
  const datos = new TextEncoder().encode(`${sal}:${ip}`);
  const resumen = await crypto.subtle.digest('SHA-256', datos);
  return [...new Uint8Array(resumen)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Netlify pone el país del visitante en una cabecera. */
export function paisDe(request: Request): string | null {
  return recorta(request.headers.get('x-nf-geo-country') ?? request.headers.get('x-country'), 8);
}

export function ipDe(request: Request): string | null {
  const cabecera = request.headers.get('x-nf-client-connection-ip') ?? request.headers.get('x-forwarded-for');
  return cabecera ? (cabecera.split(',')[0] ?? '').trim() || null : null;
}
