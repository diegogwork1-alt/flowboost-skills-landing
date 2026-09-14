---
name: publicar-landing
description: Publica una landing YA APROBADA en un subdominio del cliente, con panel de edición para cambiar textos e imágenes sin tocar código. Toma el HTML que generan las skills landing-b2b-index-html, landing-vsl-directa-index-html, landing-inmueble-copy-html, landing-vsl-directa, landing-b2b-alto-ticket o landing-conversion (y sus versiones copy+html), lo convierte en un proyecto Astro + Keystatic ESTÁTICO (sin SSR, sin adaptador), lo sube a GitHub y lo despliega en Cloudflare Pages con build automático en cada push. Hosting único para todos los clientes: Pages acepta CNAME desde cualquier DNS, así que el hosting del cliente da igual. El panel de Keystatic corre en local y no se despliega (storage local), lo que elimina el GitHub App y los secretos. Incluye página de gracias, medición (GTM/píxel), aviso de cookies conforme al RGPD y registro de consentimientos en un Supabase compartido de agencia. Un subdominio por landing. NO genera copy ni maqueta: eso lo hacen las skills de landing. Usar cuando el usuario diga "publicá la landing", "subila al subdominio", "montala online" DESPUÉS de haber aprobado la maqueta, o cuando otra skill de landing la invoque al terminar. No usar para webs corporativas de varias páginas.
---

# Publicar landing en subdominio con panel de edición

Convertís una landing **ya aprobada** en un sitio desplegado con panel. No redactás copy ni rediseñás: lo que entra es el HTML aprobado; lo que sale es una URL funcionando, midiendo y legal.

## Regla de oro
**No se despliega nada sin el OK explícito del usuario sobre la maqueta.** Si la landing todavía no está aprobada, pará y devolvé el control a la skill de landing correspondiente.

---

## Cómo se ejecuta: piloto automático

Dirección no quiere ir contestando preguntas. **Decidí vos y avanzá.** Todo lo que sigue ya está resuelto y no se pregunta:

- Qué hosting usar → lo dice el `dig +short NS` (FASE 0.5).
- Cómo se llama el proyecto → kebab-case del cliente + ángulo (`Cliente14-metodo`).
- Qué es editable → titulares, subtítulos, bullets, textos de botón, quita-miedos, pasos, reseñas, FAQ, cifras, imágenes, IDs de medición, textos del aviso de cookies y todo el contenido de la página de gracias.
- Montar la página de gracias y la base de datos → **van de serie**, no son extras que se preguntan.
- Crear el repo, desplegar, crear los registros DNS, activar el SSL, quitar marcas de agua del hosting → **se hace, no se consulta**.
- Añadir un CNAME o un TXT en el DNS del cliente → **es aditivo, se hace** (ver FASE 0.5).

**Las únicas tres paradas legítimas:**

1. **El HTML aprobado no está claro o hay más de un candidato.** Preguntá cuál es y **no adivines**: el fichero más obvio del disco puede ser una versión vieja. Pedí que te lo peguen si hay duda.
2. **Falta un dato que no podés inventar**: ID de GTM o del píxel, un embed de vídeo, un teléfono. Se pide; nunca se rellena con un placeholder.
3. **Un secreto o un pago.** El `client_secret`, las contraseñas y comprar cosas no los tocás nunca (ver FASE 8).

Todo lo demás: adelante, y al final informás de lo hecho.

---

## PASO 0 — Datos que necesitás

1. **El HTML aprobado.** Si venís encadenada de otra skill, es el `index.html` ya ensamblado. Si lo buscás en disco, **confirmá que es el vigente**: buscá con `grep -rl --include="*.html" -i "<cliente>" ~/Desktop ~/Downloads` y si aparece más de uno, o el que hay tiene pinta de material de clase o de una carpeta que no es la del cliente, **preguntá**. Publicar la versión vieja obliga a rehacer la conversión entera.
2. **Nombre del proyecto** en kebab-case (`Cliente14-metodo`). Es el nombre del repo y del proyecto en el hosting.
3. **Subdominio** (`metodo.cliente.com`). NO preguntes dónde está el DNS: lo averiguás vos.
4. **Qué formulario usa la landing: Tally o Typeform.** No se pregunta, se mira en el HTML (`grep -oE "data-tf-live|data-tally-src"`). Cambia el embed, los campos ocultos y el webhook (FASE 9).
5. **ID de Google Tag Manager y/o del píxel de Meta**, si los hay (FASE 3).
6. **Favicon y logo** del cliente, si los tenés (FASE 4).

**Antes de convertir, revisa el HTML buscando placeholders sin rellenar:**

```bash
# El fichero es OBLIGATORIO: sin él, grep se queda leyendo stdin y cuelga el turno.
grep -nE '\{\{[A-Z0-9_]+\}\}|VIDEO_ID|SUBDOMINIO|TODO:|XXXX|LOREM|placeholder|Lorem ipsum' <fichero.html>
```
⛔ **`[A-Z0-9_]`, CON DÍGITOS.** El regex que había aquí era `[A-Z_]+` y **los placeholders de la casa
llevan número**: probado, de `{{H1_LINEA_1}}`, `{{FUD_1}}`, `{{VP_1_TITULO}}`, `{{URL_LOGO_PRENSA_1}}` y
`{{SUBDOMINIO}}` **solo cazaba el último**. O sea que el control que existe para que «un placeholder
jamás salga publicado» dejaba pasar cuatro de cada cinco, justo antes de publicar.

Cualquier hallazgo **bloquea esa sección** y se pregunta. Un placeholder jamás sale publicado.

---

## ⛔ FASE 0.5 — HOSTING: una sola ruta (11-09-2026)

**La landing es ESTÁTICA. No hay SSR, no hay adaptador, no hay decisión que tomar.**

Antes había un árbol de decisión según dónde estuviera el DNS del cliente. Ya no: existía porque los *Custom Domains* de Cloudflare Workers exigen la zona DNS dentro de Cloudflare, y eso solo importa si necesitás servidor. La landing no lo necesita.

| Pieza | Dónde corre |
|---|---|
| La landing | HTML estático |
| El formulario | iframe de Tally/Typeform, en el navegador |
| La medición (GTM/píxel) | navegador |
| El aviso de cookies | `localStorage` |
| Los leads | del formulario al CRM, no pasan por nosotros |
| **El panel de Keystatic** | **en local, `npm run dev`. No se despliega** |

**Hosting: Cloudflare Pages. Siempre, sea cual sea el hosting del cliente.** Pages acepta un CNAME desde cualquier DNS —Sered, IONOS, Hostinger, GoDaddy, cPanel de un hosting local, lo que sea—, y al no haber SSR no hace falta el adaptador que dejó de soportarlo.

Plan gratuito: **500 builds/mes, 100 proyectos, 100 dominios por proyecto**, sin medir ancho de banda.

### ⚠️ Por qué NO Netlify (comprobado 11-09-2026, no lo repitas)
Netlify pasó a **créditos: 300/mes en el plan gratis**, y **un despliegue de producción cuesta 15**. Son **20 despliegues al mes para TODAS las webs de la cuenta juntas** — y cada vez que alguien guarda en el panel, eso es un commit y un despliegue.

Pero lo grave no es el tope: **al agotar los créditos, Netlify PAUSA todas tus webs** y el visitante ve `Site not available`. En el plan gratis es un tope duro, no se pueden comprar más. Una landing de cliente con campañas activas se queda caída. Es descalificatorio para trabajo de cliente, no una molestia.

### ⚠️ Por qué NO Vercel (comprobado, no lo repitas)
**El plan gratis de Vercel (Hobby) es solo para uso NO comercial.** Su propia doc: *"the Hobby plan restricts users to non-commercial, personal use only"*. Una landing de cliente es uso comercial: haría falta Pro (20 $/mes por usuario).

### Lo único que hay que averiguar: dónde está el DNS
No es lo mismo el hosting que el DNS. Mandan los **nameservers**: un cliente puede tener la web en Sered y los NS en Cloudflare, y entonces el panel de Sered no sirve de nada.

```bash
dig +short NS <dominio-del-cliente>
```

Eso te dice **a qué panel pedir acceso** antes de pedirlo, y se consulta sin credenciales. Muchas veces ni hace falta acceso: le pasás el registro ya escrito y lo crea el cliente o su informático en dos minutos.

### 🚨 cPanel y Plesk crean un registro A que rompe el CNAME
Al dar de alta un subdominio, **cPanel y Plesk crean solos un registro `A`** apuntando a su servidor. Un `CNAME` **no puede convivir** con un `A` del mismo nombre — es cómo funciona el DNS, no un capricho del panel.

**Hay que borrar ese `A`** o el CNAME no resuelve nunca. Es el fallo que más tiempo hace perder, porque el panel muestra todo "correcto".

### Reglas sobre el DNS del cliente
- **NUNCA propongas mover los nameservers como primera opción.** Su correo (MX), su web y sus verificaciones (TXT) cuelgan de ahí: replicar mal un registro deja al cliente sin email. Es la última salida, y con su OK explícito.
- **Añadir un CNAME o un TXT nuevo NO es mover el DNS.** Es aditivo: no toca el MX ni la web existente. Eso se hace sin dramatizar.
- **COMPRAR UN DOMINIO NUEVO NO ES OPCIÓN. NUNCA.** No lo propongas, ni como plan B. La landing siempre cuelga de un subdominio del dominio que el cliente ya tiene.
- Cómo explicarlo cuando haya dudas:
  > "Es un registro NUEVO para un subdominio que hoy no existe. No modifica ni borra nada: el correo (MX), la web y las verificaciones siguen intactos. Si algo saliera mal, se borra ese registro y todo queda como estaba."
- Si de verdad no hay acceso al panel del cliente, **la landing se queda en `<proyecto>.pages.dev`** y las campañas arrancan con ella. Provisional y avisado, pero **nunca se compra un dominio para resolverlo**.
- **Credenciales de cliente: no las manejás vos.** Le decís exactamente qué registro crear y verificás después que resuelve. El acceso lo usa Dirección o el cliente.

### 🚨 NO consultes el subdominio antes de crearlo
```bash
dig +short metodo.cliente.com    # ⛔ NO HAGAS ESTO ANTES DE CREAR EL REGISTRO
```
El SOA de muchos proveedores fija la **caché negativa en 86400 s (24 horas)**. Si preguntás por el subdominio antes de que exista, los resolvers guardan el "no existe" un día entero — el tuyo, y a veces el de la autoridad certificadora. Resultado: el certificado tarda o falla y parece un fallo de configuración cuando no lo es.

Comprobá el SOA para saber a qué te enfrentás **sin** preguntar por el subdominio:
```bash
dig +short SOA <dominio>   # el último número es el TTL de caché negativa
```

---

## FASE 1 — Montar el proyecto

Stack mínimo. **Sin Tailwind y sin Fontsource**: las skills de landing generan CSS plano con `!important` y traen sus propias fuentes en el bloque maestro. Meter Tailwind solo agrega bugs.

**Y sin adaptador.** No instales `@astrojs/netlify` ni `@astrojs/cloudflare`: la salida es estática.

```bash
npm create astro@latest <proyecto> -- --template minimal --install --no-git --skip-houston --yes
cd <proyecto>
npm install @keystatic/core @keystatic/astro @astrojs/react react react-dom @astrojs/sitemap zod
npm install -D @astrojs/check typescript
```

Versiones comprobadas ejecutando (11-09-2026): astro **7.3.2** · @keystatic/core **0.6.9** · @keystatic/astro **6.0.0** · @astrojs/react **6.0.5** · react **19.3.0**.

### `astro.config.mjs` — única versión

```js
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import sitemap from '@astrojs/sitemap';

// Keystatic SOLO en dev. En build sale HTML puro: sin rutas /api, sin
// runtime de React, sin adaptador. El panel se usa en local y commitea.
const isDev = process.argv.includes('dev');

export default defineConfig({
  // Mientras no exista el subdominio, apuntá a la URL REAL del hosting.
  // Un site: que no resuelve emite canonical y sitemap hacia la nada.
  site: 'https://<proyecto>.pages.dev',
  output: 'static',
  integrations: [...(isDev ? [react(), keystatic()] : []), sitemap()],
});
```

**Comprobado ejecutándolo (11-09-2026), no deducido:**
- `astro build` → `dist/` con **solo los `.html`**. Sin `/api`, sin `_worker.js`, sin entrypoints de servidor.
- `astro dev` → `/keystatic` responde **200** con el panel real, y la landing sigue sirviéndose.

### `keystatic.config.ts` — `local`, no `github`

```ts
storage: { kind: 'local' },
```

Con `local` el panel escribe **ficheros en disco** y vos hacés `git commit && git push`. Cloudflare Pages reconstruye sola.

Eso elimina el GitHub App, el `client_secret` y las tres claves de entorno: **toda la FASE 10 deja de hacer falta** salvo que un cliente concreto quiera editar él (ver esa fase).

`.gitignore` debe incluir `node_modules/`, `dist/`, `.astro/` y **`.env`**.

---

## FASE 2 — Convertir el HTML aprobado

1. **El bloque maestro va al `<head>` real.** Las skills lo entregan dentro del primer widget porque Elementor obliga; acá no. Fuentes, `preconnect` y `preload` van en el `<head>`.
2. **Añadí `body{margin:0}`.** El bloque maestro asume el reset de Elementor; en una página suelta, sin eso, descuadra.
3. **Un `BaseLayout.astro`** con `<head>`, SEO (title, description, canonical, OG, Twitter, JSON-LD) y `<slot />`.
4. **`index.astro`** con las secciones tal cual, sustituyendo cada texto editable por `{contenido.campo}`.
5. **El CSS se mantiene igual**, con sus `!important`. No lo "mejores": está validado en producción.
6. **Contenido en `src/content/landing/index.json`**, validado con Zod en `src/lib/content.ts`: si falta un campo obligatorio **falla el build, no la web**.

### Textos con formato
El copy trae `<mark>` (subrayado amarillo) y `<strong>`. Renderizalos con `set:html` y anotalo en la `description` del campo del panel. Los que no llevan formato van como `{texto}` normal.

### Imágenes: descargalas SIEMPRE
Las skills de landing referencian imágenes del WordPress o del Wix del cliente. **Bajalas al repo**: la landing no puede depender de un hosting que no controlás.
```bash
curl -sS -L -o "public/img/<nombre>" "<url-original>"
```
Comprobá al final: `grep -c "<dominio-del-cliente>" dist/index.html` → **0**.

### 🚨 Adoptá desde el principio la estructura de imágenes de Keystatic
`fields.image({ directory: 'public/img', publicPath: '/img/' })` **renombra y mueve cada imagen la primera vez que alguien guarda**, a una ruta derivada del campo:

```
public/img/hero/logo.png
public/img/hero/fondoDesktop.webp
public/img/galeria/imagenes/0/imagen.webp
public/img/pie/logo.png
```

Si no lo dejás así de entrada, el primer guardado del cliente genera un commit gigante moviendo ficheros. **Colocá las imágenes con esos nombres desde el primer commit.**

Efecto secundario útil: **un logo por campo**. El hero puede llevar el logo blanco y el pie el oscuro, y se cambian por separado.

### Ancho y alto reales
Toda `<img>` conserva `width` y `height` **con las medidas reales del archivo** (comprobalas con `sharp`), no copiadas de otra. Evita que la página salte al cargar. En la galería, hacelos campos del panel para que quien suba una foto nueva los rellene.

### 📎 Validación
`references/content-zod.ts` es el patrón completo: `textoOpcional` y `listaTextos` con `.default()` para que Keystatic pueda vaciar campos sin romper el build, y un error legible que dice **qué campo falta** en vez de un fallo críptico de TypeScript.

### `keystatic.config.ts`
```ts
import { config, fields, singleton } from '@keystatic/core';

// dev -> local (escribe en disco) · prod -> github (se edita online)
const repo = import.meta.env['PUBLIC_KEYSTATIC_GITHUB_REPO'] as string | undefined;

export default config({
  storage: repo ? { kind: 'github', repo: repo as `${string}/${string}` } : { kind: 'local' },
  ui: { brand: { name: '<MARCA>' } },
  singletons: {
    landing: singleton({
      label: 'Landing',
      path: 'src/content/landing/',
      format: { data: 'json' },
      schema: { /* un campo por texto editable */ },
    }),
  },
});
```

**Etiquetas en castellano**: "Titular principal", no "hero heading". Poné `description` donde la decisión no sea obvia.

### 🚨 Inyectar CSS o JS generado: `set:html`, nunca `{\`...\`}`
```astro
<style is:inline>{`.x{color:red}`}</style>   <!-- ⛔ Astro emite las llaves y las comillas: CSS inválido -->
<style is:inline set:html={css} />           <!-- ✅ -->
```
Lo mismo con `<script>`. Definí la cadena en el frontmatter y pasala con `set:html`. **Comprobalo en el HTML construido**, no en el fuente:
```bash
grep -c '<style>{`' dist/index.html   # tiene que dar 0
```

---

## FASE 3 — Medición y aviso de cookies (obligatorio, no opcional)

Toda landing de Flowboost mide, y toda landing con tráfico español necesita consentimiento previo. Se hacen juntas porque una depende de la otra.

### Los IDs van en el contenido, no en el código
Campos `seguimiento.gtmId` y `seguimiento.metaPixelId` en el JSON y en el panel. Ventajas: se cambian sin tocar código, y **si están vacíos no se emite ni una línea** — la página no carga scripts de terceros que no se usan.

**Preguntá el ID de GTM.** Si Dirección da solo el de GTM, el píxel se dispara **como etiqueta dentro de Tag Manager** y `metaPixelId` se deja **vacío**: ponerlo en los dos sitios cuenta cada PageView dos veces.

### GTM NO se carga hasta que aceptan
Esto es lo que incumple casi todo el mundo. El snippet de GTM **no va en el `<head>`**: se monta por JavaScript solo si el visitante acepta.

- **Fuera el `<noscript>` del GTM.** Sin JavaScript no hay forma de pedir consentimiento, así que tampoco puede haber medición.
- La elección se guarda en `localStorage` con fecha y **caduca al año**: la AEPD pide renovarla.

### El banner: pequeño y legal
Tarjeta fija abajo a la izquierda, ~360 px en escritorio y ~11 % de pantalla en móvil. Requisitos que **no son negociables**:

| Requisito | Cómo se cumple |
|---|---|
| Consentimiento **previo** | GTM/píxel solo se montan tras pulsar Aceptar |
| Rechazar tan fácil como aceptar | Los dos botones **idénticos**: mismo tamaño, misma tipografía, mismo peso. Lo exige la AEPD desde 2022 |
| Sin consentimiento tácito | Navegar no acepta. Sin casillas premarcadas ni muro de cookies |
| Información | Enlace a la política de cookies |
| Retirar el consentimiento | Botón discreto permanente para cambiar la elección |

### 🚨 Buscá la política de cookies DEL CLIENTE
**No escribas texto legal.** Casi siempre ya la tiene publicada:
```bash
curl -s -L "https://www.<cliente>.es" | grep -ioE 'href="[^"]*(cookie|privacidad|legal|aviso)[^"]*"' | sort -u
```
Enlazá la suya. Si de verdad no existe, avisá a Dirección (`python3 ~/Desktop/FLOWBOOST-BACKUP-MAC/Documentos-Flowboost/Estandar-carpetas/avisar.py --nivel aviso`): es del cliente, no tuya.

### 📎 No lo escribas de cero
`references/aviso-cookies.astro` trae la implementación **ya probada en producción**: el CSS, el markup, el guardado con caducidad y la carga condicional de GTM y del píxel. Copiala y cambiá los textos. Contiene los dos arreglos que costaron un despliegue: la regla `[hidden]` y el `set:html`.

### 🚨 `[hidden]` no funciona si pusiste `display` con `!important`
El bug que se coló en producción: `.banner{display:flex !important}` **anula el atributo `hidden`**. La elección se guardaba y GTM cargaba, pero la tarjeta no desaparecía nunca. Desde fuera: *"le doy al botón y no pasa nada"*.

```css
.banner[hidden],.banner-abrir[hidden]{display:none !important;}
```

**Regla general: siempre que uses `display:X !important` en algo que ocultás con `hidden`, añadí la regla `[hidden]`.**

### En móvil, que no tape la llamada a la acción
El banner se ancla abajo, y abajo es justo donde cae el botón del hero en móvil. **Medilo, no lo supongas:**
```js
const solape = Math.max(0, cta.getBoundingClientRect().bottom - banner.getBoundingClientRect().top);
```
Tiene que dar **0**. Se consigue apretando tipografía y padding en `@media(max-width:600px)`. Usá `bottom: calc(8px + env(safe-area-inset-bottom,0px))`.

---

## FASE 4 — Marca: favicon y logos

### Favicon
Dirección suele pasar el favicon en el formato que sea (`.avif`, `.png`, `.webp`). **AVIF no vale como favicon**: convertí con `sharp`, que ya está instalado.

Generá y enlazá en el `<head>`:
```
public/favicon.ico          (16+32+48 dentro)
public/favicon-32.png
public/favicon-16.png
public/apple-touch-icon.png (180)
```
**Borrá `public/favicon.svg`**, el de la plantilla de Astro: si no, sigue enlazado y se ve el logo genérico.

Comprobalo: `file public/favicon.ico` tiene que decir *"MS Windows icon resource - 3 icons"*.

### Logo blanco sobre fondo oscuro
El hero suele llevar foto de fondo y el logo de marca suele ser oscuro: se pierde. **Medí antes de decidir**, contando píxeles claros y oscuros con `sharp`. Si el logo es oscuro y el hero es oscuro, **generá la versión blanca** recoloreando a blanco todo lo que no sea el color de acento, respetando el canal alfa para no romper el antialiasing.

Como Keystatic guarda un fichero por campo, el hero se queda con el blanco y la tarjeta de autoridad y el pie con el oscuro — esos van sobre fondo blanco.

---

## FASE 5 — Verificar antes de desplegar

```bash
npx astro check   # 0 errores, 0 warnings, 0 hints
npm run build
npm run dev
```

### 🚨 Verificá lo que se RENDERIZA, no la propiedad del DOM
El error que dejó el banner roto: comprobé `elemento.hidden === true` y lo di por oculto. **Seguía viéndose.**

```js
getComputedStyle(el).display          // ✅ esto es la verdad
el.getBoundingClientRect().height     // ✅ esto también
el.hidden                             // ⛔ dice lo que pediste, no lo que pasa
```

**Y para cualquier interacción, ejecutá el ciclo completo y medí después de cada paso**, no solo el estado final. En el banner: entrar → rechazar → reabrir → aceptar.

### Lista de comprobación
- La landing se ve igual que la aprobada, a **375 y 1440 px**.
- `document.documentElement.scrollWidth - clientWidth` → **0** (sin desbordamiento horizontal).
- **Ninguna imagen remota**: `grep -c "<dominio-cliente>" dist/index.html` → 0.
- **Ninguna imagen rota**: forzá la carga de las `lazy` antes de contar, o darán falso positivo.
- El contenido está en el HTML servido (`curl | grep`), no inyectado por JS.
- Consola sin errores.
- **El panel edita de verdad**: cambiá un campo, guardá, y comprobá que **el JSON de disco cambió** (`git status` lo ve). No basta con que el panel abra.
- Sin GTM antes de aceptar; con GTM después.

⚠️ `astro dev` usa otro puerto si el 4321 está ocupado. Leé el log.
⚠️ Tras cambiar `astro.config.mjs`, Vite deja caché vieja y el panel sale en blanco con `504 (Outdated Optimize Dep)`. Se arregla: `rm -rf node_modules/.vite .astro` y reiniciar.

---

## FASE 6 — Repo y despliegue (Cloudflare Pages)

> ### ⛔ AL TERMINAR ESTA FASE, ESCRIBE `Insumos/landing.json` (12-09-2026)
> `informe-landing-clarity` dice, literal, que sus `--sitio`, `--usuario` y `--pagina` salen de
> «`…/Insumos/landing.json`, **que deja escrito `publicar-landing` al desplegar**». Comprobado con un grep
> en todas las skills y un `find` en las 20+ carpetas de cliente: **esta skill no escribía ese fichero en
> ninguna parte y no existe para ningún cliente.** Resultado: el informe de cada viernes arranca
> preguntándole a Dirección datos que el sistema ya tenía.
>
> ```bash
> mkdir -p ~/Desktop/CLIENTES/<Cliente>/Insumos
> cat > ~/Desktop/CLIENTES/<Cliente>/Insumos/landing.json <<'JSON'
> {
>   "cliente": "<Cliente>",
>   "url": "https://<subdominio>.<dominio-del-cliente>",
>   "slug": "<slug de la página, o \"/\" si es la raíz>",
>   "stack": "astro-cloudflare",
>   "repo": "git@github.com:<usuario-github>/<proyecto>.git",
>   "proyecto_pages": "<nombre del proyecto en Cloudflare Pages>",
>   "sitio_wp": null,
>   "usuario_wp": null,
>   "publicada": "<AAAA-MM-DD>"
> }
> JSON
> ```
> **`"stack"` es el campo que importa:** con `astro-cloudflare`, el informe **no debe llamar a
> `wp_check.py`** —su mitad útil pregunta a la API REST de WordPress, que en un estático no existe— sino a
> `salud_landing.py`, y sacar la fecha de última modificación del repo con
> `git log -1 --format=%ci`. `wp_check.py` se reserva para los clientes que siguen en Elementor/WordPress
> (`"stack": "wordpress"`, con `sitio_wp` y `usuario_wp` rellenos).

**Requisito previo:** acceso SSH a GitHub. `ssh -T git@github.com` dice con qué cuenta entrás (Dirección usa **`<usuario-github>`**).

**Crear el repo:** no hay `gh` ni token en la máquina de Dirección. Se crea por navegador en `github.com/new`: nombre = el del proyecto, **privado**, sin README ni .gitignore ni licencia. Eso **lo hacés vos**, no se pregunta.

```bash
git init && git add -A && git commit -m "landing inicial"
git branch -M main
git remote add origin git@github.com:<usuario-github>/<proyecto>.git
git push -u origin main
```

### 🚨 Antes de crear el proyecto: limpiá restos de hostings anteriores
Si el repo pasó por Workers, Netlify o Vercel, puede llevar ficheros de
configuración versionados que **rompen el build de Pages antes de empezar**.

```bash
git ls-files | grep -iE 'wrangler|netlify|vercel'   # tiene que dar VACÍO
```

Si aparece algo:
```bash
git rm -r --cached .wrangler .netlify 2>/dev/null
# y añadí .wrangler/ y .netlify/ al .gitignore
```

El caso real: `.wrangler/deploy/config.json` apunta a `dist/server/wrangler.json`,
que con salida estática no existe. Pages lo lee **antes de construir** y aborta
en 3 segundos con un error que no menciona a Astro (bug 30).

### Cloudflare Pages
Cuenta: `<correo-cuenta-de-trabajo>`.

1. **Workers & Pages → Create → Pages → Connect to Git** → el repo.
2. Framework preset **Astro**. Build `npm run build`, output `dist`.
3. Variable de entorno de build: `NODE_VERSION = 22`.
4. Save and Deploy.

No hay variables de Keystatic que meter: con `storage: local` el panel no se despliega.

**No hay marca de agua que quitar** — eso era de Netlify.

### Validá el bucle
Hacé un commit, pusheá y comprobá que Pages dispara un build solo. Es el mismo camino que recorre un guardado del panel seguido de `git push`.

### Si venías de Netlify: el orden importa
1. Creá el proyecto en Pages desde **el mismo repo**.
2. Verificá que funciona en `<proyecto>.pages.dev`.
3. **Recién ahí** cambiá el CNAME en el DNS del cliente.
4. Verificá el subdominio (FASE 7).
5. **Y entonces** borrá el sitio de Netlify.

Al revés dejás la landing caída mientras propaga el DNS.

---

## FASE 7 — Subdominio

Un subdominio por landing.

### 1. Averiguá dónde se gestiona el DNS
Son **tres cosas distintas** y casi nunca están juntas: **registrador** (dónde se compró), **DNS** (dónde viven los registros — acá va el CNAME) y **hosting** (dónde corre la web actual).

```bash
dig +short NS <dominio>    # <- MANDA ESTE
dig +short A <dominio>     # dónde apunta hoy (no lo toques)
dig +short MX <dominio>    # el correo (NO LO TOQUES NUNCA)
dig +short CNAME www.<dominio>
```

| Nameservers | DNS gestionado en |
|---|---|
| `*.ns.cloudflare.com` | Cloudflare |
| `dns*.sered.net` | Sered → cPanel → *Zone Editor* |
| `ns*.wordpress.com` | WordPress.com → Dominios → Gestionar DNS |
| `ns*.squarespacedns.com` | Squarespace → Dominios → DNS |
| `ns*.wixdns.net` | Wix → Dominios → Registros DNS |
| `ns*.dns-parking.com`, `ns*.hostinger.com` | Hostinger → hPanel → Zona DNS |
| `ns*.domaincontrol.com` | GoDaddy → DNS |
| `ns*.ionos.*` | IONOS → Dominios → DNS |

**Ojo:** que el DNS esté en Sered no significa que la web esté ahí. En Cliente 14 el `www` apuntaba a **Wix** y el correo a Sered. Mirá antes de tocar.

Y si los NS son de Cloudflare **pero de la cuenta del cliente**, no de la tuya: el registro va en su cuenta, no en la tuya. Pedí acceso a esa, no al hosting.

### 2. Comprobá que no hay CAA que bloquee el certificado
```bash
dig +short CAA <dominio>    # vacío = nadie bloquea
```

### 3. Dominio de alta en Pages PRIMERO
**Pages → tu proyecto → Custom domains → Set up a custom domain** → `metodo.cliente.com`.

Cloudflare te dice exactamente qué registro crear. **Darlo de alta antes** de crear el registro: así el certificado empieza a emitirse en cuanto el DNS resuelve.

### 4. Después, el registro en el DNS del cliente

| Tipo | Nombre | Valor | TTL |
|---|---|---|---|
| `CNAME` | `metodo` (solo el subdominio) | `<proyecto>.pages.dev` | automático o el mínimo |

Si la zona está en Cloudflare, el proxy (nube naranja) **activado**.

**Es un registro NUEVO.** Antes y después de guardarlo, comprobá que no rompiste nada:
```bash
dig +short MX <dominio>; dig +short CNAME www.<dominio>; dig +short A <dominio>
```
Y mirá que el contador de registros de la zona **suba**, no que cambie otra cosa.

**Si el panel es cPanel o Plesk**, borrá el registro `A` que crea solo al dar de alta el subdominio (FASE 0.5): con ese `A` presente el CNAME no resuelve nunca.

### 5. El certificado
Cloudflare lo emite solo cuando el CNAME resuelve. **No te fíes del panel**, comprobalo contra el servidor:
```bash
IP=$(dig +short metodo.cliente.com @8.8.8.8 | tail -1)
echo | openssl s_client -connect "$IP:443" -servername metodo.cliente.com 2>/dev/null \
  | openssl x509 -noout -subject -dates
```
Tiene que dar `subject= /CN=metodo.cliente.com` o un certificado de Cloudflare que lo cubra.

### 🚨 Tu propio Mac puede no resolverlo
Por la caché negativa de 24 h, tu resolver puede seguir diciendo que el subdominio no existe. **No es que la web falle.** Probá forzando la IP:
```bash
curl -s -o /dev/null -w "%{http_code}\n" https://metodo.cliente.com --resolve "metodo.cliente.com:443:$IP"
```
Y comprobá varios resolvers públicos: `for r in 8.8.8.8 1.1.1.1 9.9.9.9; do dig +short metodo.cliente.com @$r; done`.

### 6. Cerrá el círculo
Actualizá `site:` en `astro.config.mjs` y el `robots.txt` al subdominio real y redesplegá. Comprobá el canonical en producción.

Si el proyecto pasó por otro hosting antes, **borrá el despliegue viejo**: si no, queda una copia indexable de la landing.

---

## FASE 8 — Página de gracias (`/gracias`)

Toda landing con formulario necesita su página de confirmación: es donde se
mide la conversión y donde se evita que el lead ignore la llamada.

Qué lleva, y por qué:

- **Navbar solo con el logo.** Sin menú: nada que distraiga ni por donde
  escaparse. Comprobá si el logo del cliente viene con **fondo blanco o con
  transparencia**: uno blanco sobre navbar blanco desaparece. Se mide, no se
  supone (ver FASE 4).
- **Confirmación clara** de que la solicitud llegó.
- **La frase exacta con la que va a empezar la llamada.** Es lo que más sube
  la tasa de contacto: el lead reconoce el número y descuelga.
- **Un recurso descargable** (guía en PDF) como continuidad.
- **El mismo pie que la landing**, con el aviso legal de Meta y Google. Sacalo
  a `src/components/Pie.astro` y usalo en las dos páginas: dos copias acaban
  desincronizándose.

### ⛔ EL EVENTO DE CONVERSIÓN — ESTO FALTABA, Y ES LO QUE PAGA LA CAMPAÑA (12-09-2026)

Esta fase dice tres veces «es donde se mide la conversión» y **no disparaba ningún evento**. Comprobado con
un grep en las 15 skills de landing, en `publicar-landing` y en `pagina-gracias`: **el único `fbq` de todo
el sistema es `fbq('track','PageView')`** en el aviso de cookies. Ni `Lead`, ni `Engaged Lead`, ni un
`dataLayer.push` de conversión en ninguna parte.

**Por qué importa tanto:** `armar-campana-meta` arma el conjunto optimizando a **`Engaged Lead`** (o a
`Lead` «solo en la página de gracias mientras no haya CAPI»). Si ese evento **nunca llega**, Meta optimiza
a ciegas: el conjunto no sale de aprendizaje, el CPL del informe no tiene conversiones detrás y el ROAS
sale de la columna que se rellena a mano. Es dinero de cliente gastado sin señal.

**Qué hay que montar, en la página de gracias, dentro del bloque que solo corre TRAS el consentimiento**
(el mismo sitio donde ya se monta GTM, ver FASE 7):

```astro
<script is:inline define:vars={{ pixel: PIXEL_ID }}>
  // Solo se ejecuta si el visitante aceptó: reutiliza el mismo gate que GTM (FASE 7).
  window.addEventListener('flowboost:consent-granted', () => {
    if (!window.fbq) return;
    // `Lead` estándar: es el que armar-campana-meta usa mientras no haya CAPI.
    window.fbq('track', 'Lead');
    // Evento personalizado de la casa, el que optimiza el conjunto:
    window.fbq('trackCustom', 'Engaged Lead');
    // Y a GTM, para que el mismo hecho quede en las dos capas:
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'engaged_lead' });
  }, { once: true });
</script>
```

**Tres cosas que hay que saber de esto, y no taparlas:**
1. **`Engaged Lead` tiene que existir como conversión personalizada en el Administrador de Eventos** antes
   de que el conjunto pueda optimizar a él. Si no está creada, se crea ahí (lo hace Dirección) — el disparo
   desde la página no la crea sola.
2. **Solo se mide a quien acepta cookies.** FASE 7 monta GTM y el píxel **únicamente tras pulsar Aceptar**,
   que es lo correcto por RGPD, pero significa que **la conversión medida es siempre menor que la real**.
   Eso no es un fallo: es el coste de cumplir. Conviene decírselo a Dirección cuando el CPL de Meta no cuadre
   con los leads del CRM.
3. **Con el formulario de Tally en un iframe, el envío no se ve desde la página.** Por eso el evento va en
   `/gracias` y la redirección a `/gracias` tras enviar **tiene que estar configurada en Tally**: si Tally
   no redirige, no hay página de gracias y no hay evento. Se comprueba enviando el formulario una vez.

### Obligatorio en la página de gracias
```astro
<BaseLayout noindex sinDatosEstructurados sinBotonCookies>
```
- **`noindex`** + fuera del sitemap + `Disallow: /gracias` en el robots. Una
  página de gracias indexada la ve gente que nunca rellenó el formulario, y
  te ensucia las métricas de conversión.
- **Sin el JSON-LD** de la landing: el negocio y las FAQ no aplican aquí.
- **Sin la pastilla de "Cookies"**: quien llega ya eligió en la landing.
  Pero **el aviso completo sí se mantiene** para quien llegue sin haber
  elegido nunca: es donde se mide la conversión y GTM no puede cargarse sin
  consentimiento.

### El PDF y el logo se bajan al repo
Igual que las imágenes de la landing. `fields.file({ directory: 'public/descargas', publicPath: '/descargas/' })` deja que se cambie el PDF desde el panel.

### ⚠️ La URL lleva barra final
Astro sirve `/gracias/` y redirige `/gracias` con un **301**. Al configurar
la redirección del formulario usá **la versión con barra**: una redirección de más
justo en la conversión puede hacer que GTM registre mal la página.

---

## FASE 9 — Base de datos (Supabase compartido)

Para dejar constancia del consentimiento de cookies, que si no vive solo en
el navegador del visitante y desaparece con él.

> ⚠️ **Esta fase es la ÚNICA del documento que no está validada ejecutándola.**
> Todo lo demás se comprobó en producción. Esto está razonado y es estándar,
> pero la primera vez que se monte hay que verificarlo y corregir aquí lo que
> salga distinto.

**Un solo proyecto de Supabase para toda la agencia**, no uno por landing. Las
tablas llevan columna `cliente`. Motivos:

- El plan gratis permite **2 proyectos activos por organización** y **pausa los
  proyectos tras una semana sin actividad**. Uno por landing = bases pausadas
  en cuanto una tenga poco tráfico.
- Con uno compartido siempre hay alguna landing escribiendo, así que no se
  pausa nunca, y consultás todos los clientes de una vez.

**Sin servidor: se escribe desde el navegador.** La landing es estática, así que
no hay backend propio. Se usa la **API REST de Supabase con la clave anónima**
y una política RLS que **solo permite INSERT** en la tabla de consentimientos.
La clave anónima es pública por diseño; lo que protege es la política, no la
clave. **Nunca uses la `service_role` en el navegador.**

```sql
create table consentimientos (
  id uuid primary key default gen_random_uuid(),
  cliente text not null,
  creado_en timestamptz not null default now(),
  estado text not null,            -- aceptado | rechazado | parcial
  version_texto text not null,     -- qué texto legal aceptó
  ip_hash text                     -- hash con sal, NUNCA la IP en claro
);

alter table consentimientos enable row level security;

create policy "insert anonimo" on consentimientos
  for insert to anon with check (true);
-- Sin policy de select: nadie lee desde el navegador.
```

**Qué verificar la primera vez** (y corregir esta fase con el resultado):
1. Que el INSERT anónimo entra desde el navegador.
2. Que un SELECT con la misma clave **falla** (si lee, la RLS está mal).
3. Que la clave que quedó en el HTML es la `anon`, no la `service_role`.

### 🚨 Por defecto se guarda SOLO el consentimiento

La tentación es guardarlo todo. **No lo hagas.** El plan gratuito de Supabase
son **500 MB** y el proyecto es compartido por todos los clientes: lo que
escribas de más se lo comés a los demás.

| Tabla | ¿De serie? | Por qué |
|---|---|---|
| `consentimientos` | **Sí** | Es lo único que **no existe en ningún otro sitio**. Sin esto vive solo en el navegador del visitante, y la AEPD puede pedir la prueba |
| `visitas` | **No** | Sería una invocación de función y una escritura **por cada carga de página**. Con tráfico de campaña eso se come el mes. Y esos datos ya están en Google Tag Manager |
| `leads` | **No** | Ya viven en el formulario y en el CRM del cliente. Una tercera copia de datos personales es superficie de riesgo, no valor |

**Regla:** la base guarda lo que no está en ningún otro sitio. Si el dato ya
está en GTM, en Typeform o en el CRM, no se duplica.

Solo añadí `visitas` o `leads` si Dirección lo pide **explícitamente para este
cliente**, y avisando del coste. La implementación está en `references/`.

### La IP nunca se guarda en claro
Hash con sal (`CONSENTIMIENTO_SAL`). Sirve para acreditar un consentimiento
concreto sin conservar el dato personal.

### La atribución NO necesita base de datos
Las UTM de la URL se pasan al formulario como **campos ocultos**
(`data-tf-hidden` en Typeform, parámetros del `data-tally-src` en Tally).
Llegan a Typeform y al CRM, que es donde se mira. **Eso se mantiene siempre**:
no cuesta nada y no escribe en ninguna tabla.

### 🚨 El formulario es Tally o Typeform, según el cliente
**No lo asumas: míralo en el HTML aprobado.** Esto importa aunque no guardes
leads, porque cambia el embed y los campos ocultos.

```bash
grep -oE "data-tf-live|data-tally-src|tally\.so|typeform\.com" index.html | sort -u
```

| | **Typeform** | **Tally** |
|---|---|---|
| Embed | `<div data-tf-live="01K…">` + `embed.typeform.com/next/embed.js` | `<iframe data-tally-src="https://tally.so/embed/XXX">` + `tally.so/widgets/embed.js` |
| Campos ocultos | atributo `data-tf-hidden="utm_source=…,utm_campaign=…"` | parámetros en la URL del `data-tally-src`: `?utm_source=…&utm_campaign=…` |
| Cabecera de firma | `Typeform-Signature`, con prefijo `sha256=` | `Tally-Signature`, **sin prefijo** |
| Firma | HMAC-SHA256 en base64 | HMAC-SHA256 en base64 |
| Estructura | `form_response.answers[]`, un campo por tipo (`text`, `email`, `phone_number`) | `data.fields[]`, cada uno con `key`, `label`, `type`, `value` |
| Identificador único | `form_response.token` | `data.responseId` |
| Tipos de campo | `text`, `email`, `phone_number`, `choice` | `INPUT_TEXT`, `INPUT_EMAIL`, `INPUT_PHONE_NUMBER`, `CHECKBOXES` |
| Ocultos en el webhook | vienen aparte, en `form_response.hidden` | vienen **mezclados con el resto** en `fields[]`: se filtran por etiqueta `utm_*` |
| Redirección a gracias | *Endings* → redirección | *Settings → Redirect on completion* |
| Plazo de respuesta | reintenta si das 500 | exige **2XX en menos de 10 s** |

**El endpoint cambia con el formulario**: `/api/typeform` o `/api/tally`. Poné
solo el que corresponda; no dejes el otro colgando.

### ⚠️ La firma de Tally puede ir sobre el cuerpo reserializado
El ejemplo oficial de Tally firma `JSON.stringify(payload)`, **no los bytes
originales**. Si los dos no coinciden, la verificación falla sin motivo
aparente. La referencia prueba primero el cuerpo crudo y, si falla, el
reserializado. No lo "simplifiques" a uno solo.

### Atribución sin cookies
Las UTM de la URL se pasan al formulario como **campos ocultos** (`data-tf-hidden`
en Typeform, parámetros del `data-tally-src` en Tally),
y vuelven en el webhook. Así cada lead queda atribuido a su campaña **sin
identificadores cruzados entre páginas**, que sí exigirían consentimiento.

### Si guardás leads, el webhook se verifica SIEMPRE
Sin firma, cualquiera que descubra la URL puede inventarse leads.

- HMAC-SHA256 del cuerpo con el secreto del proveedor, comparado en **tiempo
  constante**. En Typeform, sobre el cuerpo **crudo**; en Tally, ojo con el
  reserializado (más abajo).
- Si falta el secreto en el entorno, el endpoint responde **503**, no acepta
  a ciegas.
- Ante un error al guardar devolvé **500**: así el proveedor reintenta y el lead
  no se pierde. (Tally exige responder en menos de 10 s.) (Al revés que `/api/evento`.)

### `/api/evento` nunca falla hacia el navegador
Devuelve 204 pase lo que pase. Medir no puede romper la landing.

**El efecto secundario hay que tenerlo presente: su 204 NO demuestra que se
haya guardado nada.** Por eso hace falta un endpoint de consulta.

### `/api/resumen`, protegido
Recuentos y visitas por campaña; los datos personales solo con `?detalle=1`.
**Sin token responde 404, no 401**: así ni confirma que la ruta existe.

```bash
curl -H "x-token: <PANEL_TOKEN>" https://<subdominio>/api/resumen
```

### Variables que hay que crear
```
TYPEFORM_WEBHOOK_SECRET (o TALLY_WEBHOOK_SECRET)   CONSENTIMIENTO_SAL   PANEL_TOKEN
```
Generalas con `openssl rand -hex 24` y subilas **sin que sus valores pasen por
la conversación** (ver FASE 10).

### 📎 No lo escribas de cero
- `references/esquema-base-datos.sql` — las tres tablas con sus índices.
- `references/db.ts` — conexión, hash de IP con sal, país e IP del visitante.
- `references/webhook-typeform.ts` — verificación de firma en tiempo constante,
  aplanado de respuestas y detección de nombre, email y teléfono.
- `references/webhook-tally.ts` — lo mismo para Tally, con sus diferencias de
  cabecera, estructura y tipos de campo ya resueltas.

### Dar de alta el webhook — SOLO si se guardan leads

**Typeform:** *Connect → **WEBHOOKS*** (la pestaña, no la de integraciones) →
*Add a webhook*.
**Tally:** *Integrations → Webhooks → Connect*, y activá el *signing secret*
(es opcional, pero sin él cualquiera puede inventarse leads).

Vale para los dos:

- **El ID del panel NO es el del embed.** `data-tf-live="01K…"` es un ULID;
  la URL de administración usa otro (`M8FYWLCh`). Buscá el formulario por
  su nombre, no construyas la URL con el ID del embed: da 404.
- **Puede haber ya un webhook del CRM del cliente** (Kommo, HubSpot…).
  **No lo toques ni lo desactives.** El nuestro se añade al lado; los dos
  proveedores admiten varios.
- El disparador correcto es **"Completed responses"**, no parciales.
- Se crea **apagado**: hay que activarlo después de guardar el secreto.

### 🚨 El secreto, del fichero al campo sin pasar por la conversación
```bash
grep "^TYPEFORM_WEBHOOK_SECRET=" .env | cut -d= -f2- | tr -d '\n' | pbcopy
```
Y se pega con `cmd+v` en el campo *Secret*. Así el valor va del disco al
formulario sin que nadie lo lea ni quede escrito en ningún sitio. Limpiá el
portapapeles después: `printf '' | pbcopy`.

### 🚨 NO rellenes el formulario real para probar
Dispararía también el webhook del CRM del cliente y le metería un lead falso.
Para verificar, **firmá tú una petición** con el mismo secreto y comprobá que
aparece en `/api/resumen?detalle=1`:

```js
const firma = crypto.createHmac('sha256', SECRETO).update(cuerpo).digest('base64');
fetch(url, { method:'POST', headers:{ 'Typeform-Signature': 'sha256=' + firma }, body: cuerpo });
```
Probá las dos caras: firma válida → **204**, firma alterada → **401**.

---

## FASE 10 — Panel en producción · SOLO si el cliente edita él

**Por defecto NO se hace.** Con `storage: { kind: 'local' }` el panel corre en la
máquina de Dirección (`npm run dev` → `/keystatic`), se edita, se commitea y Pages
reconstruye. Eso no necesita GitHub App, ni `client_secret`, ni variables de
entorno, ni desplegar nada.

**Esta fase solo aplica si un cliente concreto quiere editar él mismo.** Antes de
montarla, preguntá: casi siempre edita Dirección, y entonces sobra.

### Si de verdad hace falta

El panel necesita rutas de servidor (Keystatic en modo GitHub hace el
intercambio de OAuth, y el `client_secret` no puede vivir en el navegador). La
doc de Keystatic lo dice: *"Make sure the host can run Node.js for Keystatic's
API routes."*

**No vuelve Netlify.** El panel va a **Cloudflare Workers en una URL
`.workers.dev`**: lo que bloqueaba Workers era el **dominio propio**, y un panel
de administración no necesita dominio propio. Todo queda en una sola cuenta.

Reparto:

| | Dónde | Adaptador |
|---|---|---|
| La landing | Cloudflare Pages, estática | ninguno |
| El panel | Cloudflare Workers, `.workers.dev` | `@astrojs/cloudflare` |

Son **dos proyectos** desde el mismo repo, con configs distintas: el de la
landing con `output: 'static'` y Keystatic fuera; el del panel con el adaptador
y `storage: { kind: 'github' }`.

> ⚠️ **No validado ejecutándolo.** Keystatic sobre workerd puede necesitar
> `nodejs_compat`. Probalo antes de prometérselo al cliente, y corregí aquí.
>
> **Alternativa a evaluar primero: Keystatic Cloud** — gratis hasta 3 usuarios
> por equipo, equipos y proyectos ilimitados, y te quita el GitHub App y el
> `client_secret`. Lo que no está confirmado es si además permite construir el
> panel sin rutas de servidor. Diez minutos de prueba y te ahorra esta fase
> entera.

### 🚨 Los secretos no pasan por la conversación
Si acabás necesitando un `client_secret`, **Dirección lo pega en el panel del
hosting**. Vos no lo leés, no lo escribís en un fichero del repo y no lo
repetís en la respuesta. Lo mismo para cualquier token.

---

## FASE 11 — Accesos y entrega

**El panel NO existe en producción.** Con salida estática y `storage: local`,
`/keystatic` solo responde en `npm run dev`. Si escribís
`metodo.cliente.com/keystatic` en el navegador, da 404 — y está bien que así sea.

Decilo **antes** de que Dirección se lo prometa a nadie.

### Quién edita y cómo

**Dirección, que es el caso por defecto:**
```bash
cd <proyecto> && npm run dev     # panel en http://localhost:4321/keystatic
git add -A && git commit -m "..." && git push
```
Pages reconstruye sola. **No hay usuario ni contraseña**: el panel es local y
no está expuesto a internet, que es justamente lo que lo hace seguro.

**El cliente:** no entra. Si de verdad tiene que editar él, eso es la FASE 10
— y ahí se dice que antes de montarla hay que preguntar, porque casi siempre
sobra.

### Avisos que hay que dar
- Un cambio tarda **uno o dos minutos** en verse: el tiempo del build de Pages.
  Si no se avisa, el que edita guarda tres veces creyendo que no funciona.
- **Hasta que no se hace `git push`, el cambio solo existe en el Mac de Dirección.**
  Guardar en el panel no publica nada por sí solo. Es el error más fácil de
  cometer con `storage: local`.

### El README del repo
Al terminar, dejá ahí: URL de producción, cómo abrir el panel en local, el
ciclo editar → commit → push, los registros DNS creados y qué NO se toca del
cliente. **No debe depender de la conversación.**

---

## FASE 12 — Auditoría de rendimiento antes de cerrar

Lo último antes de dar la landing por entregada. Se pasa **PageSpeed Insights
sobre la URL de producción, en móvil**.

**Objetivo:** rendimiento **≥90** · accesibilidad **100** · prácticas
recomendadas **100** · SEO **100**. Conseguido en Cliente 14 (07-09-2026):
91 / 100 / 100 / 100.

### 🚨 Antes de "arreglar" nada, comprobá de dónde viene

El informe **atribuye a la página todo lo que ocurre dentro de los iframes**.
En Cliente 14 aparecían GTM, el píxel de Facebook, RudderStack y tres
cookies de terceros — y el bloqueo de consentimiento estaba **perfecto**: todo
eso salía de dentro del iframe de Typeform.

La pista fue el parámetro `l=googleTagManager` de la petición: nuestro snippet
no lo genera.

**Compruébalo tú, no lo deduzcas del informe:**
```js
// en el navegador, sobre la URL de producción
localStorage.clear(); location.reload();
// tras cargar:
[...document.scripts].map(s => s.src).filter(s => s && !s.includes(TU_DOMINIO));
document.cookie;   // tiene que estar vacío
```
Si eso sale limpio, tu consentimiento funciona y lo que ve Lighthouse es del
embed. **No toques el bloqueo.**

### Qué revisar, en orden de impacto

| Síntoma en el informe | Causa casi siempre | Arreglo |
|---|---|---|
| LCP disparado, TBT alto | el embed del formulario carga al arranque | diferirlo (lo hacen ya las skills de generación) |
| "Mejorar la entrega de imágenes" | se sirven a 2000 px para verse a 352 | redimensionar de verdad con `sharp` |
| Prácticas recomendadas bajas | faltan cabeceras de seguridad | fichero `public/_headers` (Cloudflare Pages) |
| Contraste insuficiente | gris más claro que `#6a6a6a` sobre blanco | oscurecer a `#6a6a6a` |
| "Conexión previa sin usar" | `preconnect` a un host que ahora se difiere | quitar ese `preconnect` |

### Umbrales concretos, para que la revisión no sea a ojo

| Qué | Límite |
|---|---|
| Fotos de galería / reseñas | **≤900 px** de ancho |
| Logos | **2× el tamaño mostrado** (237 px → 480) |
| Fondo del hero | uno de escritorio (~1670) y **otro de móvil** (~800) |
| Imagen de compartir (OG) | **1200 px** |
| Gris más claro sobre blanco (texto pequeño) | **`#6a6a6a`** (5,3:1) |
| Scripts de terceros en la carga inicial | **cero**, salvo el VSL |

`fetchpriority="high"` **solo** en la imagen del hero. `loading="lazy"` +
`decoding="async"` en todo lo que esté bajo el pliegue. `body{margin:0}`.

**El VSL es la excepción:** en las landings de vídeo va directo y con autoplay
mudo a propósito, porque es el formato. No lo difieras "para subir la nota".

### Cabeceras que se ponen siempre
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    Referrer-Policy = "strict-origin-when-cross-origin"
    # allow-popups, NO "same-origin" a secas: si no, se rompen los flujos que
    # abren ventana, como el acceso del panel con GitHub.
    Cross-Origin-Opener-Policy = "same-origin-allow-popups"
    Permissions-Policy = "geolocation=(), microphone=(), camera=(), payment=()"

# Las imágenes no llevan hash (Keystatic las sobrescribe al cambiarlas desde el
# panel): una hora de caché, para que un cambio no tarde un día en verse.
[[headers]]
  for = "/img/*"
  [headers.values]
    Cache-Control = "public, max-age=3600"
```

**No pongas una CSP estricta a ciegas.** Romper el formulario por subir un punto
de auditoría es un mal cambio. Si la ponés, probá el envío entero después.

### Después de tocar el diferido, verificá que el formulario SIGUE apareciendo
Es el punto donde un fallo cuesta dinero: si el embed no carga, hay un hueco
vacío donde debería estar el formulario y no se entera nadie.

⚠️ **Con el panel del navegador oculto, el viewport mide 0 de alto y un
`IntersectionObserver` NUNCA dispara.** Si probás así, vas a creer que está roto
cuando no lo está. Emulá un viewport de móvil o dispará la interacción a mano.

Probá los dos caminos: **primera interacción** (`scroll`, toque, tecla) y
**clic en un CTA** que ancle al formulario.

---

## Bugs ya resueltos (no los redescubras)

**Astro / adaptadores**
1. **Adaptador de Cloudflare en dev** → rompe el panel con `exports is not defined`. Aplicalo solo en build (spread condicional).
2. **`adapter: undefined`** falla con `exactOptionalPropertyTypes`. Usá spread condicional; las props opcionales van `?: T | undefined`.
3. **`z` de `astro:content` está deprecado** en Astro 7 → importá de `zod`.
4. **`astro dev` cambia de puerto** si el 4321 está ocupado.
5. **Caché de Vite obsoleta** tras cambiar la config → `504 (Outdated Optimize Dep)` y panel en blanco. `rm -rf node_modules/.vite .astro`.
6. **`wrangler deploy` se ejecuta desde la raíz**, nunca desde `dist/server`.
7. **`import.meta.env` son variables de BUILD**, no de runtime.

**Astro / plantillas**
8. **`<style>{\`...\`}` emite las llaves literalmente.** Usá `set:html`.
9. **`display:X !important` anula `hidden`.** Añadí `[hidden]{display:none !important}`.
10. **`body{margin:0}`**: el bloque maestro asume el reset de Elementor.
11. **Borrá `public/favicon.svg`** de la plantilla, o sigue enlazado.

**Keystatic**
12. **Borra las claves vacías al guardar** → declará opcionales con `.default()` los campos que puedan quedar en blanco.
13. **Reorganiza las imágenes** a `/img/<campo>/` en el primer guardado. Adoptá esa estructura desde el principio.
14. **El asistente solo corre en desarrollo**, y necesita `PUBLIC_KEYSTATIC_GITHUB_REPO` en el `.env` local para aparecer.
15. **El slug se guarda con un comentario detrás.**

**Hosting y DNS**
16. **Custom Domains de Workers exigen la zona en Cloudflare.** CNAME externo no sirve.
17. **`@astrojs/cloudflare` 13+ no soporta Pages.**
18. **Vercel Hobby es de uso no comercial.**
19. **Primero el dominio en el hosting, después el CNAME.** Al revés: 522.
20. **Caché negativa de 24 h**: no consultes el subdominio antes de crearlo.
21. **El panel cachea el error de certificado.** Verificá con `openssl s_client`.
22. **`site:` apuntando a un dominio que no existe** emite canonical y sitemap rotos.

**Base de datos y endpoints**
23. **Un endpoint que se traga los errores no demuestra nada.** Si `/api/evento` devuelve 204 pase lo que pase, hace falta `/api/resumen` para saber si guardó.

**Método**
24. **Verificá lo que se renderiza, no la propiedad del DOM.** `getComputedStyle().display`, no `.hidden`.
25. **Las imágenes `lazy` dan falso positivo de "rota"** si las contás antes de forzar su carga.
26. **Confirmá que el HTML de partida es el vigente.** El fichero más obvio del disco puede ser de otra versión.

**Hosting: por qué se descartaron (no los repropongas)**
27. **Netlify pausa TODAS las webs al agotar los 300 créditos** (11-09-2026): un despliegue de producción son 15 créditos → 20 al mes para toda la cuenta, y al acabarse el visitante ve `Site not available`. No vuelvas a proponerlo para landings de cliente.
28. **`@astrojs/cloudflare` v13+ solo soporta Workers, no Pages** — pero da igual: sin SSR no hace falta adaptador ninguno.
29. **cPanel y Plesk crean un registro `A`** al dar de alta un subdominio, y un `CNAME` no puede convivir con un `A` del mismo nombre. Hay que borrarlo o el CNAME no resuelve nunca.

**🚨 Restos de un hosting anterior (11-09-2026, costó un build)**
30. **`.wrangler/` versionado rompe el build de Pages.** Su `deploy/config.json` apunta a `dist/server/wrangler.json`; con salida estática ese fichero no existe, **Pages lo lee ANTES de construir y aborta en 3 segundos**:
    > `There is a deploy configuration at ".wrangler/deploy/config.json". But the redirected configuration path it points to, "dist/server/wrangler.json", does not exist.`

    Eran 23 ficheros, incluida una SQLite de miniflare. Se colaron porque al cambiar de hosting se quitó `.wrangler/` del `.gitignore`.

    **Antes de crear el proyecto en Pages, limpiá los restos:**
    ```bash
    git ls-files | grep -iE 'wrangler|netlify|vercel'   # tiene que dar VACÍO
    git rm -r --cached .wrangler .netlify 2>/dev/null
    ```
    Y comprobá que `.gitignore` los cubre. **Nunca quites una entrada del `.gitignore` al migrar**: cuesta nada dejarla y evita justo esto.

**Tailwind (no debería hacer falta)**
31. La base va en `@layer base`, y las utilidades con variables se escriben `py-[var(--x)]` — `py-[--x]` computa `0px` **en silencio**.

---

## Lo que esta skill NUNCA hace
- Desplegar sin aprobación explícita de la maqueta.
- **Comprar dominios.** Jamás, ni como plan B.
- Autenticarse por el usuario ni manipular secretos (`client_secret`, tokens, contraseñas).
- Mover los nameservers del cliente sin su OK explícito.
- Tocar el MX, el `www` ni ningún registro existente del cliente. Solo **añade** registros nuevos.
- Cargar GTM o el píxel antes del consentimiento.
- Escribir textos legales. La política de cookies es del cliente.
- Guardar IPs en claro, ni datos personales que no hagan falta.
- Exponer un endpoint de consulta sin token.
- Pegar un secreto a mano ni dejar que lo imprima una herramienta.
- Inventar textos, cifras, testimonios o datos de contacto. Lo que falte **bloquea esa sección** (un `TODO:` visible solo puede existir en la preview local, JAMÁS en una landing publicada).
- Rediseñar o "mejorar" la landing aprobada.
- Decir que algo funciona sin haberlo abierto en el navegador y medido.


## Al terminar: avisar (07-09-2026)
En cuanto la URL responde 200:
1. **Al cliente**, por su canal: `Documentos-Flowboost/Onboarding/mensaje-landing-publicada.md`. Se le
   pide que compruebe **sus datos** y que **el formulario le llega** — son las dos cosas que solo él
   puede confirmar. Copia en `~/Desktop/CLIENTES/<Cliente>/Mensajes/`.
2. **A Dirección**: `python3 ~/Desktop/FLOWBOOST-BACKUP-MAC/Documentos-Flowboost/Estandar-carpetas/avisar.py --cliente "<C>" --nivel info --asunto "Landing publicada" --enlace <URL>`.
3. Si la publicación **falla** (DNS que no propaga, hosting sin acceso): `--nivel aviso` diciendo qué
   falta y a quién hay que pedírselo. No se deja anotado y ya está.

## Y ENCADENAR con el CRM (no termina aquí)
Publicar la landing **no cierra el trabajo**: los leads que entren por el formulario tienen que caer en
algún sitio donde el cliente los mueva y donde se vea qué acaba en venta. En el mismo turno, sin
preguntar, se sigue con **`montar-crm-cliente`**, que le levanta su CRM en
`https://<cliente>.<tu-dominio>` con el pipeline de la casa.

Sin ese paso, los leads caen en un correo y ahí mueren, y el ROAS del informe del cliente se queda en
una estimación para siempre. **Es lo que convierte el reporte en un dato de negocio y no en métricas
de publicidad.**

## Al terminar: marcar la etapa (obligatorio — 07-09-2026)
```bash
python3 ~/Desktop/FLOWBOOST-BACKUP-MAC/Documentos-Flowboost/Estandar-carpetas/marcar_etapa.py "<Cliente>" "Landing" --nota "<una línea>"
```
Marca **los dos sitios a la vez**: el `ESTADO.md` (local y Drive) y la hoja
**«Estado de cuenta — \<Cliente\>»** del Drive, que es la que mira Dirección. Antes había que
acordarse de las dos cosas y la del Drive se quedaba siempre atrás.

**Se marca al CERRAR la etapa, no al empezarla**, y solo si de verdad está terminada. Si quedó a
medias: `--estado "En curso"`. Si está parada: `--estado Bloqueado --nota "<por qué y a quién espera>"`
— un bloqueo sin motivo apuntado no sirve de nada.

### Y NO DEVUELVAS EL CONTROL: seguí con la siguiente
Marcar **no es terminar**. En el MISMO turno, sin preguntar y sin resumen intermedio:
1. Mirá qué toca ahora: `python3 …/Estandar-carpetas/leer_estado.py "<Cliente>" --cliente-raiz "gdrive:i_X/c_X"`.
2. **Arrancá la siguiente etapa del agente que salga ahí** — de los DOS carriles si hay una en cada uno.
3. Si lo que sigue es de Dirección, de Operaciones o del cliente, **no la toques**: salta a la siguiente que sí
   sea tuya. Esperar de brazos cruzados es el fallo, no la solución.

Solo se para en las paradas humanas de `/funnel`. **Nunca termines el turno con una etapa tuya
ejecutable pendiente.**
