// Registro del consentimiento de cookies en Cloudflare D1.
//
// La landing es estática, pero Cloudflare Pages ejecuta lo que hay en
// /functions como funciones de servidor, sin adaptador ni SSR. Así queda la
// prueba del consentimiento fuera del navegador del visitante, que es lo que
// puede pedir la AEPD.
//
// Requisito en el proyecto de Pages: una base D1 enlazada con el nombre DB.
// Las tablas se crean solas en la primera petición.

interface Entorno {
  DB: D1Database;
}

const CLIENTE = 'Cliente14';
const ESTADOS = new Set(['aceptar', 'rechazar']);

const ESQUEMA = [
  `CREATE TABLE IF NOT EXISTS consentimientos (
     id TEXT PRIMARY KEY,
     cliente TEXT NOT NULL,
     creado_en TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
     estado TEXT NOT NULL,
     version_texto TEXT NOT NULL,
     pagina TEXT,
     pais TEXT,
     ip_hash TEXT,
     navegador TEXT
   )`,
  `CREATE INDEX IF NOT EXISTS consentimientos_cliente_fecha ON consentimientos (cliente, creado_en)`,
  // El texto exacto que vio el visitante, una sola vez por versión.
  `CREATE TABLE IF NOT EXISTS textos_consentimiento (
     hash TEXT PRIMARY KEY,
     texto TEXT NOT NULL,
     creado_en TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
   )`,
  // La sal del hash de la IP vive en la propia base: nadie tiene que manejar
  // un secreto a mano y no cambia entre despliegues.
  `CREATE TABLE IF NOT EXISTS ajustes (clave TEXT PRIMARY KEY, valor TEXT NOT NULL)`,
];

let esquemaListo = false;

async function sha256(texto: string): Promise<string> {
  const resumen = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(texto));
  return [...new Uint8Array(resumen)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function sal(db: D1Database): Promise<string> {
  const nueva = [...crypto.getRandomValues(new Uint8Array(24))].map((b) => b.toString(16).padStart(2, '0')).join('');
  await db.prepare(`INSERT OR IGNORE INTO ajustes (clave, valor) VALUES ('sal_ip', ?)`).bind(nueva).run();
  const fila = await db.prepare(`SELECT valor FROM ajustes WHERE clave = 'sal_ip'`).first<{ valor: string }>();
  return fila?.valor ?? nueva;
}

function recorta(valor: unknown, max: number): string | null {
  if (typeof valor !== 'string') return null;
  const limpio = valor.trim();
  return limpio ? limpio.slice(0, max) : null;
}

// Siempre 204: registrar no puede romper la landing. Por eso un 204 NO prueba
// que se haya guardado; eso se comprueba en la consola de D1.
const vacio = () => new Response(null, { status: 204 });

export const onRequestPost: PagesFunction<Entorno> = async ({ request, env }) => {
  try {
    // Solo desde la propia landing: evita que otra web llene la tabla.
    const origen = request.headers.get('origin');
    if (origen && new URL(origen).host !== new URL(request.url).host) return vacio();

    const cuerpo = (await request.json().catch(() => null)) as Record<string, unknown> | null;
    const estado = recorta(cuerpo?.['estado'], 20);
    const texto = recorta(cuerpo?.['texto'], 4000);
    if (!estado || !ESTADOS.has(estado) || !texto || !env.DB) return vacio();

    if (!esquemaListo) {
      await env.DB.batch(ESQUEMA.map((sql) => env.DB.prepare(sql)));
      esquemaListo = true;
    }

    const version = (await sha256(texto)).slice(0, 16);
    const ip = request.headers.get('cf-connecting-ip');
    const ipHash = ip ? await sha256(`${await sal(env.DB)}:${ip}`) : null;
    const pais = recorta((request as { cf?: { country?: string } }).cf?.country, 8);

    await env.DB.batch([
      env.DB.prepare(`INSERT OR IGNORE INTO textos_consentimiento (hash, texto) VALUES (?, ?)`).bind(version, texto),
      env.DB.prepare(
        `INSERT INTO consentimientos (id, cliente, estado, version_texto, pagina, pais, ip_hash, navegador)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      ).bind(
        crypto.randomUUID(),
        CLIENTE,
        estado,
        version,
        recorta(cuerpo?.['pagina'], 300),
        pais,
        ipHash,
        recorta(request.headers.get('user-agent'), 300),
      ),
    ]);
  } catch (e) {
    console.error('consentimiento', e);
  }
  return vacio();
};
