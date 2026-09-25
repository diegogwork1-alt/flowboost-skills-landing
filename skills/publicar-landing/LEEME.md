# LEEME — `publicar-landing`

> Paquete **landing**. Esto es lo que hay que tener en cuenta **antes** de usar la skill.
> Las instrucciones de trabajo están en `SKILL.md`; esto son las condiciones y los límites.

## Qué hace

Publica una landing YA APROBADA en un subdominio del cliente, con panel de edición para cambiar textos e imágenes sin tocar código. Toma el HTML que generan las skills landing-b2b-index-html, landing-vsl-directa-index-html, landing-inmueble-copy-html, landing-vsl-directa, landing-b2b-alto-ticket o landing-conversion (y sus versiones copy+html), lo convierte en un proyecto Astro + Keystatic ESTÁTICO (sin SSR, sin adaptador), lo sube a GitHub y lo despliega en Cloudflare Pages con build automático en cada push.

**Qué NO hace:** NO genera copy ni maqueta: eso lo hacen las skills de landing. No usar para webs corporativas de varias páginas.

## Antes de empezar necesitas

- La landing **aprobada** y el **dominio del cliente**. El hosting es SIEMPRE Cloudflare Pages (cuenta `<correo-cuenta-de-trabajo>`, repos en GitHub `<usuario-github>`); del DNS solo hay que saber dónde se crea el CNAME (`dig +short NS`).
- Los IDs de medición del proyecto: GTM, píxel de Meta si va suelto, y **un proyecto de Microsoft Clarity por landing**.

## Lo que NO se puede hacer

- ⛔ Teclear credenciales de hosting, DNS o WordPress. Las pone Dirección.
- ⛔ **Desplegar en Netlify.** Al agotar los 300 créditos del plan gratis pausa TODAS las webs de la cuenta. Solo se entra para migrar sitios viejos fuera.
- ⛔ **Cargar GTM, el píxel o Clarity antes de que acepten las cookies**, aunque la documentación de Clarity diga que va en el `<head>`.
- ⛔ Tocar en el DNS del cliente cualquier registro que no sea el de la landing: su correo (MX) y su web siguen intactos.

## Ojo con esto

- Incluye página de gracias, medición (GTM, píxel y Clarity) y aviso de cookies conforme al RGPD. El registro de consentimientos va a Cloudflare D1 (FASE 9, validado): obligatorio, la AEPD puede pedir la prueba.
- **La landing es estática: el panel de Keystatic solo existe en local** (`npm run dev`). Un cambio no se publica hasta hacer `git push`.
- **Netlify tiene dos cuentas** (`<cuenta-de-trabajo>` y `Fb` de `<correo-direccion>`) y hay dos Chrome con sesiones distintas: la tabla está al principio de la skill.
- Al terminar encadena con `montar-crm-cliente`.

## Accesos que toca

Google Drive del cliente (solo lectura salvo entregables), Tally (formulario), Cloudflare Pages (cuenta <correo-cuenta-de-trabajo>), GitHub (<usuario-github>, push), DNS del cliente (solo los registros de la landing).

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

*Generado el 25-09-2026 desde el sistema de Flowboost. Se regenera con `gen_leeme.py`; no editar a mano.*
