# LEEME — `publicar-landing`

> Paquete **landing**. Esto es lo que hay que tener en cuenta **antes** de usar la skill.
> Las instrucciones de trabajo están en `SKILL.md`; esto son las condiciones y los límites.

## Qué hace

Publica una landing YA APROBADA en un subdominio del cliente, con panel de edición para cambiar textos e imágenes sin tocar código. Toma el HTML que generan las skills landing-b2b-index-html, landing-vsl-directa-index-html, landing-inmueble-copy-html, landing-vsl-directa, landing-b2b-alto-ticket o landing-conversion (y sus versiones copy+html), lo convierte en un proyecto Astro + Keystatic ESTÁTICO (sin SSR, sin adaptador), lo sube a GitHub y lo despliega en Cloudflare Pages con build automático en cada push.

**Qué NO hace:** NO genera copy ni maqueta: eso lo hacen las skills de landing. No usar para webs corporativas de varias páginas.

## Antes de empezar necesitás

- La landing **aprobada**, y el **DNS del cliente** — es el DNS quien decide el hosting, no hay uno fijo.

## Lo que NO se puede hacer

- ⛔ Teclear credenciales de hosting, DNS o WordPress. Las pone Dirección.

## Ojo con esto

- Incluye página de gracias, medición, aviso de cookies conforme al RGPD y base de datos de leads.
- Al terminar encadena con `montar-crm-cliente`.

## Accesos que toca

Google Drive del cliente (solo lectura salvo entregables), VPS por SSH, Tally (formulario).

## Reglas de la casa (valen para todas las skills)

- **Todo el texto para clientes en español de España** (tú/vosotros). Nunca voseo ni LATAM.
- **No se inventa nada**: cifras, testimonios, fechas, garantías o casos. Lo que falte se marca `[FALTA]` y se pide.
- **Las fechas salen del reloj del sistema** (`date +%d/%m/%Y`), nunca de memoria.
- **Los ficheros de un cliente van a `~/Desktop/CLIENTES/<cliente>/`**, nunca sueltos en Descargas.
- **El Drive del cliente es de SOLO LECTURA**, salvo los entregables en su subcarpeta correcta. No se mueve, borra ni renombra nada.
- **Nunca se sube un `.md` crudo al Drive del cliente**: se convierte a Google Doc.
- **Nunca se teclean contraseñas, claves de API ni tokens**, aunque te los den. Los pone Dirección.
- **Para avisar a Dirección se usa `avisar.py`** (`--nivel urgente|aviso|info`), no un mensaje suelto que nadie lee.

---

*Generado el 10-09-2026 desde el sistema de Flowboost. Se regenera con `gen_leeme.py`; no editar a mano.*
