---
name: landing-b2b-alto-ticket
description: "Arma la ESTRUCTURA HTML/CSS de una landing B2B de alto ticket (10 bloques, patrón AIDA + PAS duplicado: dolor agitado dos veces con proceso racional en medio, auto-calificación por avatar, FAQ como filtro de leads) lista para pegar en widgets HTML de Elementor/WordPress, bloque por bloque. El COPY lo aporta el usuario: esta skill NO redacta copy ni inventa datos — toma tus textos y los coloca en los esqueletos. El rubro (legal, consultoría, agencia, reforma, etc.) lo define el brief de cada proyecto. Usar SIEMPRE que el usuario pida armar/maquetar una landing B2B de alto ticket con esta lógica. No usar para landings VSL de agencias de marketing/performance (esa es landing-vsl-elementor) ni para venta de propiedades (landing-vsl-inmobiliaria)."
---

# Landing B2B de Alto Ticket — maquetador (el copy lo pones tú)

Esta skill ARMA la estructura HTML/CSS de una landing B2B de alto ticket de 10 bloques (0 a 9) para pegar en widgets HTML de Elementor. **NO escribe copy.** El usuario entrega los textos; la skill los coloca en los esqueletos y devuelve el HTML listo, bloque por bloque. Nunca inventes copy, titulares, testimonios, cifras, fechas ni credenciales: si falta el texto de un bloque, pídelo.

## Rol y perspectiva

Quien usa la landing es la marca/empresa que presta el servicio B2B; la landing le habla al cliente potencial (2ª persona). El copy lo define el usuario con esa voz.

## Paso 0 — antes de maquetar, consigue

**Marca (para el CSS):**
- Colores: acento, acento oscuro (hover), fondo suave (tinte del acento), fondo de cierre (oscuro), fondo de footer (distinto del cierre), texto, texto secundario.
- Fuentes Google (titulares y cuerpo) — nombre exacto y forma para la URL (`Playfair+Display`).
- Logo (normal + versión blanca para el footer). Foto del especialista/equipo (opcional, para Autoridad).

**Config:**
- **⚡ Plataforma (PREGUNTÁ ESTO PRIMERO — cambia detalles del código):** ¿la landing se construye en **Elementor** (widget "HTML") o **Gutenberg** (bloque "HTML personalizado")? No lo asumas. **Elementor:** cada bloque = un widget "HTML", poné el padding de la Sección/Columna de Elementor en 0. **Gutenberg:** cada bloque = bloque "HTML personalizado", más liviano; si el tema recorta el ancho, seteá "Ancho completo". El HTML es el mismo; solo cambia dónde se pega y el ajuste de padding/ancho del editor.
- **Formulario = Tally (siempre).** Modo: **popup** (por defecto — los CTA lo abren) o **inline** `#lc-form`. Pedí el **`{{TALLY_FORM_ID}}`**.
- ¿Hay urgencia real (fecha límite)? Si no, se omite el countdown. Nunca inventes fecha.
- ¿Hay video VSL? (URL de embed BASE de Panda, con `?v=ID`). Si no, se borra el bloque de video.
- ¿Nicho visual (reforma/inmobiliaria/construcción) que amerite galería antes/después?

**Copy (lo das TÚ):** los textos de cada bloque (ver "qué texto pide cada bloque"). No bloquees todo por un dato menor: asume un valor razonable, dilo y sigue. Pausa a preguntar solo si falta el copy de un bloque, la marca/colores, o si no está claro si hay urgencia/video reales.

## Flujo de trabajo (10 bloques, uno por uno)

Orden fijo: 0) Barra de urgencia · 1) Hero (logo centrado + franja de datos + marquesina) · 2) Pain vs Gain Ronda 1 (CON CTA) · 3) Pain vs Gain Ronda 2 + Avatar (COMBINADO, SIN CTA) · 4) Proceso (CON CTA) · 5) Prueba social · 6) Autoridad · 7) FAQ · 8) Cierre + CTA final · 9) Footer. Opcionales: galería antes/después, formulario inline.

**No hay header ni navbar.** La única marca es el logo centrado dentro del Hero — sin menú, sin CTA de barra, sin rutas de escape (una sola vía de conversión).

El **Bloque Maestro** (tokens + helpers + JS) va DENTRO del widget del Bloque 0 y se pega una sola vez. Los bloques 1-9 solo usan sus clases y quedan cortos.

Por cada bloque:
1. Toma el copy que dio el usuario para ese bloque.
2. Localiza el esqueleto (abajo), rellena los `{{PLACEHOLDER}}` con ese copy + las variables de marca, respetando el fondo alternado del bloque.
3. **Aplicá el acabado de las 3 skills de diseño** (ver "Diseño: aplica las 3 skills de acabado"). Sin esto el bloque queda básico.
4. **Ofrecé opciones ANTES de entregar (obligatorio en secciones visuales):** mostrá **2-4 variantes de diseño** de la sección — distintos layouts/estéticas, todas sobre la MISMA estructura funcional — como **previews visuales** con la marca del proyecto (usá el widget de visualización si está disponible; si no, mini-maquetas), para que el usuario **ELIJA**. Nunca entregues una sola versión "a ciegas". (El Bloque Maestro/Barra de urgencia son estructurales → sin variantes.)
5. Con la variante **elegida**, entregá el bloque de código HTML completo (```html) listo para pegar en un widget HTML de Elementor. No uses artifact.
6. Pregunta "¿Continúo con el siguiente bloque?" y no avances sin confirmación.

### Qué texto pide cada bloque (placeholders a rellenar con TU copy)

- **0 Urgencia:** `TEXTO_DESCUENTO_LIMITADO`, `FECHA_LIMITE_ISO` (solo si hay urgencia real), `LINEA_CALIFICACION_AUDIENCIA` ("Para [audiencia] que quieren [resultado]").
- **1 Hero:** `H1_LINEA_1` + `H1_FRASE_DESTACADA`, `SUBHEADLINE` (1 línea), **3× `BULLET_BENEFICIO`** (con check — **SOLO si el hero es sin video; con VSL se OMITEN**), `TEXTO_CTA_HERO`, **`MICRO_FUD_1/2`** (quita-miedos bajo el CTA: garantía/"respuesta en 24h"/"100% confidencial" — NUNCA "sin compromiso" ni "gratis"), `FRASE_ESCASEZ_1/2` (marquesina), franja de datos `VALOR`/`ETIQUETA` o logos de prensa (reales). Incluye el logo centrado (única marca de la página). El form es Tally popup (los CTA lo abren).
- **2 Pain/Gain R1:** `SUBTITULO_COLUMNA_DOLOR`, `SUBTITULO_COLUMNA_ALIVIO`, 5× `PUNTO_DOLOR` y 5× `PUNTO_ALIVIO` **en espejo** (mismo orden, punto a punto), `PARRAFO_CIERRE_RONDA_1`, `TEXTO_CTA_RONDA_1`.
- **3 Combo R2 + Avatar:** `SUBTITULO_SIN_AYUDA`, `PARRAFO_CONSECUENCIAS`, `SUBTITULO_CON_MARCA`, 5× `BENEFICIO_ACCIONABLE`, `TITULO_AVATAR`, 4-5× `SITUACION_ESPECIFICA`, `FRASE_TENSION_CIERRE`. Sin CTA.
- **4 Proceso:** `TITULO_PROCESO`, 4-5× (`NUMERO_PASO`, `TITULO_PASO`, `DESCRIPCION_PASO`), `TEXTO_CTA_PROCESO`, `MICRO_FUD_1/2` (bajo el CTA).
- **5 Prueba social:** `ENCABEZADO_PRUEBA_SOCIAL`, cifras (`VALOR_METRICA`/`ETIQUETA_METRICA`) y testimonios (`CITA_TESTIMONIO`, `NOMBRE`, `URL_FOTO`, `SITUACION_O_FUENTE` verificable) — solo reales, con foto+nombre+fuente.
- **6 Autoridad:** logo de la marca a la izq (arriba en móvil) + `TITULO_AUTORIDAD`, `PARRAFO_REENCUADRE_PROBLEMA`, `PARRAFO_QUE_HACEMOS`, 4-5× `CREDENCIAL` al lado.
- **7 FAQ:** `HEADLINE_FAQ`, 6-8× (`PREGUNTA`/`RESPUESTA`) — una SIEMPRE delimita quién NO es cliente ideal (filtro de leads).
- **8 Cierre:** `TITULO_CIERRE`, `PARRAFO_REAFIRMACION`, **`DESGLOSE_OFERTA`** (todo lo que incluye — ilusión del esfuerzo), **`LINEA_PERDIDA`** (qué se pierde por no actuar — aversión a la pérdida, solo con datos reales), `LINEA_FINAL_DIRECTA`, `TEXTO_CTA_FINAL`, `MICRO_FUD_1/2` (bajo el CTA).
- **9 Footer:** legales (año, marca, enlaces).

**CTAs:** todos apuntan al MISMO destino de conversión; solo cambia el TEXTO según el momento del embudo (lo das tú; ej. "Reclamar mi lugar" / "Revisar mi caso" / "Confirmar mi plan").

## Reglas de arquitectura de código (obligatorias)

1. **`!important` en TODA declaración CSS, en CADA bloque (no solo el maestro).** Los bloques se pegan dentro de Elementor/WP, cuyo tema pisa cualquier propiedad sin `!important` → la landing se ve rota (causa nº1 de fallos). Regla mecánica: **si una declaración está dentro de un `<style>` de un bloque, lleva `!important`** (font-size, color, margin, padding, display, grid, flex, width, text-align, border-radius, background, line-height, box-shadow, etc.), también dentro de `@media`. Excepciones: `@keyframes` y los tokens de `:root`.
2. **Ancho por token, no `100vw` en el contenido.** El fondo full-bleed lo da `.lc-band`; el contenido va en `.lc-frame` = `min(1080px, calc(100vw - 40px))`. El maestro trae `html,body{overflow-x:clip;max-width:100%}` que elimina el scroll horizontal del `100vw` automáticamente → por eso la barra de urgencia va `relative`, no `sticky`.
3. **Espaciado fluido con `clamp()`**, nunca px fijos para el ritmo vertical.
4. **"Define una vez":** tokens, helpers, marquee, form (Tally popup) y JS viven en el Bloque Maestro; el resto solo usa clases. CSS/JS son globales al documento.
5. **JS propio, con scope, sin librerías ni globals:** IIFE, guard `data-lc-ready`, delegación de eventos (`data-lc-open`/`data-lc-close`), tabs accesibles. Nada de `onclick="fn()"`.
6. **NO incluir** Pixel de Meta, GTM, jQuery ni scripts de plugins.
7. **Fondos alternados** vía `.lc-band--alt`/`--close`/`--footer` — nunca dos secciones seguidas iguales.

## Rendimiento (PageSpeed / Core Web Vitals) — obligatorias

Metas: LCP < 2.5s, CLS < 0.1, INP < 200ms.
- **LCP:** al elemento más grande del primer viewport (logo) `fetchpriority="high"`, jamás `loading="lazy"`.
- **Nada de `opacity:0`:** el contenido siempre visible; prohibido ocultar con fades/reveal. Microinteracción solo `transform`/`box-shadow` en hover.
- **Video VSL:** player directo de Panda (`<iframe>`), sin poster ni facade. **Params predeterminados SIEMPRE** en el `src` (con `&` porque el embed ya trae `?v=ID`): `&muted=true&autoplay=true&mutedIndicatorIcon=true&mutedIndicatorClickRestart=true&saveProgress=false` → autoplay mudo con aviso "tocá para activar sonido"; al tocarlo REINICIA de 0; no guarda progreso entre visitas (cada visitante empieza de cero). Sin `loading="lazy"`.
- **CLS = 0:** **TODO `<img>` lleva `width` y `height`** (ratio real) — Lighthouse lo exige aunque el contenedor tenga `aspect-ratio`. Serví la imagen al tamaño de display (no una de 828px para mostrarla a 368px). **Fuente + preconnect UNA sola vez** en el maestro; nunca repitas el `<link>` de Google Fonts ni los `preconnect` por sección.
- **Imágenes:** below-the-fold `loading="lazy"`; todas `decoding="async"`; el hero jamás lazy.
- **INP:** JS mínimo, delegación de eventos, `touch` en `{passive:true}`.
- **Fuentes:** `preconnect` + `&display=swap`; sin pesos de más.
- **A11y:** inputs con `aria-label`+`autocomplete`; botones-icono con `aria-label`; tabs con ARIA; recuerda `lang="es"` en el `<html>` (ajuste del tema). Todo `<span>`/ícono con `aria-label` (ej. estrellas de rating) lleva **`role="img"`**. Jerarquía de headings SIN saltos: un solo `h1`, secciones en `h2`, nunca arrancar una sección en `h3`.

## Diseño visual — obligatorias

- **Espaciado limpio (Apple): NADA pegado.** Aire deliberado e intencional, ni bandas vacías gigantes ni todo apelotonado. Ritmo de sección = `--lc-pad-y` (`clamp(40px,5vw,72px)`). **Aire interno generoso:** separá el título del contenido (≥`--lc-gap`), gap consistente entre elementos, párrafos con `line-height` cómodo (~1.6). La jerarquía se construye con **espacio + peso**, no apretando todo. Usá **gap de flex** para el ritmo vertical, no márgenes (los resets del maestro matan los `margin` de bloque). Simplicidad, no minimalismo: cada elemento respira.
- **Coherencia de jerarquía por espaciado (regla de raíz — error frecuente):** el hueco entre bloques (título→subtítulo, subtítulo→CTA) debe ser **SIEMPRE ≥ el interlineado interno del título**. El interlineado de títulos display está definido UNA vez en el maestro (`.lc-band h1`=1.05, `.lc-band h2`=1.1) y los títulos de sección lo heredan — **no lo redefinas por bloque** (nada de `line-height:1.2` sueltos). Nunca dejes un título con `line-height` mayor que su `margin` inferior, porque las líneas del título parecen más separadas que el título del subtítulo (se ve incoherente). El resaltado `<mark>` va con caja fina, que no infle la altura de línea.
- **Elevación premium (7 refs top coinciden — Apple/Linear/Stripe/Resend/etc.):** la profundidad viene de **borde hairline (`--lc-line`) + tinte de fondo + sombra sutil (`--lc-shadow`)**, NUNCA de glow o sombra pesada (se ve barato/template). El **acento va SOLO en la acción** (CTA/estado activo), nunca como decoración ni relleno grande.
- **Tipografía y feedback (Apple):** tracking **size-specific** (títulos grandes apretados `~-.025em`, cuerpo `~0`), leading corto en títulos y aireado en cuerpo (`1.6`); jerarquía por **peso + tamaño**, no por título gigante. Botones con feedback de press (`:active` scale). Ya está en el maestro — no lo rompas.
- **PROHIBIDO eyebrow/kicker/badge/micro-etiqueta arriba de CUALQUIER título** (ni nombre de sección tipo "PROCESO"/"FAQ", ni badge de audiencia en el hero). Ningún brief lo justifica (impeccable). Cada sección arranca con su titular; el peso lo lleva el título.
- **Destacado de la palabra clave en títulos:** envolvé el término clave con `<mark>`. El estilo (marcador / color / subrayado / caja) se define **UNA sola vez en el maestro** (`.lc-band mark`) → **idéntico en TODOS los títulos** de la landing. **NO uses siempre "color"** — elegí del menú del maestro; una vez elegido, no lo cambies dentro de la misma landing (otras landings pueden usar otro).
- **CTA sin icono por defecto:** la flecha/icono es **opcional, según el estilo de la marca** (lo deciden las skills de diseño). Si se usa, va como `<svg>` dentro del `<a>` y ya queda estilado (`.lc-cta svg`).
- **Contraste WCAG AA (≥4.5:1):** sobre fondo claro, texto oscuro (`--lc-text`/`--lc-text-dim`); texto claro (#fff) solo sobre fondo oscuro. Nunca tipografía clara sobre fondo claro. **Nunca texto en color de acento sobre fondo de acento** (ej. amarillo sobre magenta); sobre fondo de color usá blanco o tinta oscura; texto chico ≥ 4.5:1.
- **Logos sin enlace:** `<img>` suelto, nunca dentro de `<a>`; al tocarlos no llevan a ningún lado (una sola vía de conversión = el CTA).
- **Simetría y alineación:** tarjetas de una fila a igual altura; títulos y textos alineados igual dentro de cada columna; columnas espejo (pain/gain) con encabezados a la misma altura y bullets punto a punto; grids pares (2/4) para no dejar una tarjeta suelta.

## Diseño: aplica las 3 skills de acabado

El acabado estético lo dan tres skills instaladas aparte, que trabajan SOBRE esta estructura (nunca en su lugar):

- **`emil-design-eng`** — detalle fino, microinteracciones y esa sensación "premium" de la interfaz.
- **`impeccable`** — jerarquía visual, espaciado, color y tipografía sin errores.
- **`design-taste-frontend`** — anti-plantilla: evita el look genérico o "de IA".

Cómo se combinan: primero esta skill maqueta la ESTRUCTURA del bloque (tokens, layout, JS); después las tres refinan el acabado — tipografía, espaciado, sombras, microinteracciones. Trabajá bloque por bloque, igual que la estructura.

**Restricción dura:** las skills de diseño pueden cambiar el acabado, NUNCA la arquitectura funcional — full-bleed `.lc-band`, tokens `--lc-*`, contenedor `.lc-frame`, fondos alternados, form Tally (popup), JS con scope, **el CENTRADO del hero** (logo, título, subtítulo, bullets, CTA van SIEMPRE centrados — el `.lc-hero` es flex column `align-items:center`; NUNCA lo pases a texto a la izquierda ni rompas el centrado), y las reglas de rendimiento (nada de `opacity:0`, LCP sin lazy; VSL = iframe directo de Panda con autoplay mudo). Si alguna corrección estética choca con estas reglas, gana la estructura.

Si alguna de las tres no está instalada, seguí con las demás; si no hay ninguna, usá estos estilos tal cual.

## Si el usuario pide cambios a mitad

Aplica el cambio solo al bloque indicado; si es de marca/color, ofrece propagarlo a los bloques ya entregados.

**Correcciones = SIEMPRE la sección COMPLETA, nunca parcial.** Cuando corrijas algo, devolvé el HTML entero de esa sección (todo el `<section>`/`<div>` con su `<style>`), listo para reemplazar el widget de una sola vez. Nunca entregues solo el fragmento cambiado, ni un diff, ni "cambiá esta línea": el usuario pega el bloque completo en Elementor.

---

# ESQUELETOS HTML

Rellena los `{{PLACEHOLDER}}` con el copy del usuario y las variables de marca. Prefijo de clases: `lc-`.

## BLOQUE MAESTRO — va DENTRO del widget del Bloque 0 (se pega una sola vez)

```html
<style>
/* Mata el scroll horizontal que produce el full-bleed 100vw (max-width:100% acota el root y clip recorta el sobrante). Automático, sin tocar Elementor. Por eso la barra de urgencia va relative, no sticky. */
html,body{overflow-x:clip !important;max-width:100% !important;}
html{scroll-behavior:smooth;}
/* ===== TOKENS DE MARCA (rellenar una vez) ===== */
:root{
  --lc-accent:{{COLOR_ACENTO_HEX}};
  --lc-accent-dk:{{COLOR_ACENTO_OSCURO_HEX}};       /* hover/acento fuerte */
  --lc-bg:#ffffff;
  --lc-bg-alt:{{COLOR_FONDO_SUAVE_HEX}};            /* tinte pastel del acento */
  --lc-bg-close:{{COLOR_CIERRE_HEX}};               /* oscuro/acento del bloque de cierre */
  --lc-footer-bg:{{COLOR_FOOTER_HEX}};              /* distinto del cierre, ej. #14151A */
  --lc-text:{{COLOR_TEXTO_HEX}};
  --lc-text-dim:{{COLOR_TEXTO_SECUNDARIO_HEX}};
  --lc-line:rgba(0,0,0,.10);
  --lc-font-head:'{{GOOGLE_FONT_TITULARES}}',sans-serif;
  --lc-font-body:'{{GOOGLE_FONT_CUERPO}}',sans-serif;
  --lc-frame:min(1080px, calc(100vw - 40px));       /* contenedor estándar */
  --lc-narrow:min(720px, calc(100vw - 40px));       /* contenedor de texto */
  --lc-ease:cubic-bezier(.16,1,.3,1);
  --lc-shadow:0 1px 2px rgba(0,0,0,.05),0 10px 28px -20px rgba(0,0,0,.14);      /* elevación "premium whisper": sutil, no glow. Profundidad real = borde hairline + esta sombra */
  --lc-shadow-sm:0 1px 2px rgba(0,0,0,.05),0 6px 16px -14px rgba(0,0,0,.11);
  --lc-radius:14px;
  --lc-measure:66ch;                                /* ancho máx de lectura (~60-66 caracteres) para prosa larga; evita líneas infinitas en pantallas anchas */
  --lc-pad-y:clamp(40px,5vw,72px);                  /* ritmo de sección limpio (Apple): aire, sin vacío. Compacto ≠ apretado. */
  --lc-gap:clamp(16px,2.4vw,28px);                  /* respiro interno base (título→contenido, entre elementos) */
}
/* ===== RESETS DEFENSIVOS (ganan al tema con !important) ===== */
.lc-band,.lc-band *{box-sizing:border-box !important;}
.lc-band{font-family:var(--lc-font-body) !important;color:var(--lc-text) !important;line-height:1.6 !important;-webkit-font-smoothing:antialiased !important;}
.lc-band img{max-width:100% !important;height:auto !important;display:block !important;}
.lc-band ul{list-style:none !important;margin:0 !important;padding:0 !important;}
.lc-band p{margin:0 !important;}
/* Tipografía Apple: tracking y leading SIZE-SPECIFIC (títulos grandes más apretados y con leading corto; cuerpo aireado). */
.lc-band h1,.lc-band h2,.lc-band h3,.lc-band h4{margin:0 !important;font-family:var(--lc-font-head) !important;text-transform:none !important;overflow-wrap:break-word !important;}
.lc-band h1{line-height:1.05 !important;letter-spacing:-.025em !important;}
.lc-band h2{line-height:1.1 !important;letter-spacing:-.015em !important;}
.lc-band h3,.lc-band h4{line-height:1.25 !important;letter-spacing:-.005em !important;}
.lc-band p,.lc-band li{line-height:1.6 !important;}
/* ===== DESTACADO DE TÍTULOS (envolvé la palabra clave con <mark>). Definido UNA vez = consistente en TODA la landing. Elegí UN estilo del menú y no lo cambies. NO uses siempre "color". ===== */
/* [MARCADOR · por defecto] */
.lc-band mark{background:linear-gradient(180deg,transparent 63%,color-mix(in srgb,var(--lc-accent) 26%,transparent) 63%,color-mix(in srgb,var(--lc-accent) 26%,transparent) 90%,transparent 90%) !important;color:inherit !important;padding:0 .05em !important;-webkit-box-decoration-break:clone !important;box-decoration-break:clone !important;}
/* [COLOR]     .lc-band mark{background:none !important;color:var(--lc-accent) !important;} */
/* [SUBRAYADO] .lc-band mark{background:none !important;color:inherit !important;box-shadow:inset 0 -.12em 0 var(--lc-accent) !important;} */
/* [CAJA]      .lc-band mark{background:color-mix(in srgb,var(--lc-accent) 14%,transparent) !important;color:var(--lc-accent) !important;border-radius:5px !important;padding:0 .26em !important;} */
.lc-band a:not(.lc-cta){text-decoration:none !important;color:inherit !important;}
.lc-band a{text-decoration:none !important;}
.lc-band button{font-family:inherit !important;cursor:pointer !important;border:none !important;background:none !important;}
.lc-band :focus-visible{outline:2px solid var(--lc-accent) !important;outline-offset:3px !important;border-radius:4px !important;}
/* ===== BANDA FULL-BLEED + CONTENEDOR ===== */
.lc-band{position:relative !important;width:100vw !important;margin-left:calc(50% - 50vw) !important;margin-right:calc(50% - 50vw) !important;padding:var(--lc-pad-y) 20px !important;background:var(--lc-bg) !important;scroll-margin-top:20px !important;}
.lc-band--alt{background:var(--lc-bg-alt) !important;}
.lc-band--close{background:var(--lc-bg-close) !important;}
.lc-band--footer{background:var(--lc-footer-bg) !important;}
.lc-frame{width:var(--lc-frame) !important;margin-inline:auto !important;}
.lc-narrow{width:var(--lc-narrow) !important;margin-inline:auto !important;}
/* ===== BOTÓN CTA. El icono/flecha es OPCIONAL, según el estilo de la marca (por defecto el CTA va SIN icono). Si la marca lo pide, agregá un <svg> dentro del <a> y estas reglas lo estilan. ===== */
.lc-cta{display:inline-flex !important;align-items:center !important;justify-content:center !important;gap:10px !important;min-height:56px !important;padding:16px 36px !important;background:var(--lc-accent) !important;color:#fff !important;border-radius:10px !important;font-family:var(--lc-font-head) !important;font-weight:700 !important;font-size:15.5px !important;letter-spacing:.2px !important;box-shadow:var(--lc-shadow) !important;transition:transform .25s var(--lc-ease),box-shadow .25s var(--lc-ease),background .2s !important;white-space:nowrap !important;}
.lc-cta:hover{transform:translateY(-2px) !important;background:var(--lc-accent-dk) !important;box-shadow:0 24px 54px -20px color-mix(in srgb,var(--lc-accent) 55%,transparent) !important;}
.lc-cta:active{transform:translateY(0) scale(.98) !important;}
/* ===== MICRO QUITA-MIEDOS (FUD) bajo el CTA ===== */
.lc-fud{display:flex !important;flex-wrap:wrap !important;justify-content:center !important;gap:8px 18px !important;margin-top:16px !important;font-size:14px !important;color:var(--lc-text-dim) !important;}
.lc-fud span{display:inline-flex !important;align-items:center !important;gap:6px !important;}
.lc-fud span::before{content:'✓' !important;color:var(--lc-accent) !important;font-weight:800 !important;}
.lc-cta svg{width:18px !important;height:18px !important;stroke:#fff !important;stroke-width:2.4 !important;fill:none !important;transition:transform .25s var(--lc-ease) !important;}
.lc-cta:hover svg{transform:translateX(4px) !important;}
/* ===== MARQUEE (pista duplicada 2x para loop sin salto) ===== */
.lc-marquee{overflow:hidden !important;background:var(--lc-text) !important;}
.lc-marquee-track{display:flex !important;width:max-content !important;animation:lcMarquee 30s linear infinite !important;}
.lc-marquee:hover .lc-marquee-track{animation-play-state:paused !important;}
.lc-marquee-track span{color:#fff !important;font-size:12px !important;font-weight:700 !important;text-transform:uppercase !important;letter-spacing:1px !important;padding:0 22px !important;white-space:nowrap !important;}
@keyframes lcMarquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}
/* El formulario es Tally (popup): sin modal custom. Los CTA [data-lc-open] lo abren vía JS del maestro. */
/* ===== REDUCED MOTION (obligatorio) ===== */
@media (prefers-reduced-motion: reduce){
  html{scroll-behavior:auto !important;}
  .lc-band *,.lc-band *::before,.lc-band *::after{transition-duration:.001ms !important;animation-duration:.001ms !important;animation-iteration-count:1 !important;}
  .lc-marquee-track{animation:none !important;}
}
</style>
<script>
/* Módulo único de la landing: form Tally (popup) + countdown + tabs. Sin librerías, sin globals. */
(function(){
  function ready(fn){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',fn):fn();}
  function init(){
    var root=document.documentElement;
    if(root.getAttribute('data-lc-ready')==='1') return;
    root.setAttribute('data-lc-ready','1');
    /* --- FORMULARIO: Tally popup. Los CTA [data-lc-open] abren el form de Tally. embed.js se carga al PRIMER clic (no pesa en la carga inicial). --- */
    var TALLY_ID='{{TALLY_FORM_ID}}';
    function openTally(){
      function go(){ if(window.Tally) Tally.openPopup(TALLY_ID,{layout:'modal',width:550,hideTitle:true}); }
      if(window.Tally){ go(); return; }
      var s=document.createElement('script'); s.src='https://tally.so/widgets/embed.js'; s.async=true; s.onload=go; document.head.appendChild(s);
    }
    document.addEventListener('click',function(e){
      if(e.target.closest('[data-lc-open]')){ e.preventDefault(); openTally(); }
    });
    /* --- COUNTDOWN (solo si existe el nodo con fecha real) --- */
    var cd=document.getElementById('lc-countdown');
    if(cd){
      var dl=new Date(cd.getAttribute('data-deadline')).getTime();
      if(!isNaN(dl)){ (function tick(){
        var d=dl-Date.now();
        if(d<=0){ cd.textContent='00:00:00'; return; }
        var h=Math.floor(d/3.6e6),m=Math.floor(d%3.6e6/6e4),s=Math.floor(d%6e4/1e3);
        cd.textContent=[h,m,s].map(function(n){return String(n).padStart(2,'0');}).join(':');
        setTimeout(tick,1000);
      })(); }
    }
    /* --- TABS ACCESIBLES (galería opcional) --- */
    var picker=document.querySelector('.lc-tabs');
    if(picker){
      var tabs=[].slice.call(picker.querySelectorAll('[role=tab]'));
      var panels=[].slice.call(document.querySelectorAll('.lc-tabpanel'));
      function activate(tab,focus){
        var panel=document.getElementById(tab.getAttribute('aria-controls'));
        tabs.forEach(function(t){var on=t===tab;t.classList.toggle('is-active',on);t.setAttribute('aria-selected',on?'true':'false');t.setAttribute('tabindex',on?'0':'-1');});
        panels.forEach(function(p){var on=p===panel;p.classList.toggle('is-active',on);p.hidden=!on;});
        if(focus) tab.focus();
      }
      tabs.forEach(function(tab,i){
        tab.addEventListener('click',function(){activate(tab,false);});
        tab.addEventListener('keydown',function(e){
          var n=i;
          if(e.key==='ArrowRight'||e.key==='ArrowDown')n=(i+1)%tabs.length;
          else if(e.key==='ArrowLeft'||e.key==='ArrowUp')n=(i-1+tabs.length)%tabs.length;
          else return; e.preventDefault(); activate(tabs[n],true);
        });
      });
      activate(picker.querySelector('[role=tab].is-active')||tabs[0],false);
    }
  }
  ready(init);
})();
</script>
```

## 0. BARRA DE URGENCIA — va en el mismo widget que el bloque maestro

```html
<div class="lc-urg">
<style>
.lc-urg{position:relative !important;z-index:1001 !important;width:100vw !important;margin-left:calc(50% - 50vw) !important;margin-right:calc(50% - 50vw) !important;background:var(--lc-accent) !important;padding:9px 16px !important;text-align:center !important;box-sizing:border-box !important;}
.lc-urg p{color:#fff !important;font-size:13px !important;font-weight:700 !important;margin:0 !important;line-height:1.4 !important;font-family:var(--lc-font-body) !important;}
.lc-urg #lc-countdown{font-variant-numeric:tabular-nums !important;font-weight:800 !important;margin-left:6px !important;}
.lc-urg .lc-urg-aud{display:block !important;color:rgba(255,255,255,.82) !important;font-size:11.5px !important;font-weight:500 !important;margin-top:2px !important;}
@media(max-width:600px){.lc-urg p{font-size:11.5px !important;}}
</style>
<p>{{TEXTO_DESCUENTO_LIMITADO}} <span id="lc-countdown" data-deadline="{{FECHA_LIMITE_ISO}}">00:00:00</span>
<span class="lc-urg-aud">{{LINEA_CALIFICACION_AUDIENCIA}}</span></p>
</div>
```
Nota: si NO hay urgencia real, borra el `<span id="lc-countdown">` (el JS lo ignora si no existe) y deja solo la línea de audiencia.

## 1. HERO (+ logo + franja de datos + marquesina + modal) · blanco

Sin header ni navbar: el Hero abre la página. El logo centrado del Hero es la única marca. Orden fijo del hero: logo → título → subtítulo → video VSL (opcional) → CTA. Debajo, franja de datos; debajo, marquesina.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://tally.so" crossorigin>
<link rel="dns-prefetch" href="https://tally.so">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family={{GOOGLE_FONT_TITULARES_URL}}&family={{GOOGLE_FONT_CUERPO_URL}}&display=swap">
<section class="lc-band lc-hero-sec" style="text-align:center !important;">
<style>
.lc-hero-sec{position:relative !important;overflow:hidden !important;}
.lc-hero-sec::before{content:'' !important;position:absolute !important;left:50% !important;top:-8% !important;width:min(1100px,120%) !important;height:560px !important;transform:translateX(-50%) !important;background:radial-gradient(60% 55% at 50% 28%,color-mix(in srgb,var(--lc-accent) 14%,transparent),color-mix(in srgb,var(--lc-accent) 4%,transparent) 45%,transparent 70%) !important;pointer-events:none !important;z-index:0 !important;}
.lc-hero-sec .lc-frame{position:relative !important;z-index:1 !important;}
.lc-hero{display:flex !important;flex-direction:column !important;align-items:center !important;text-align:center !important;}
.lc-hero .lc-hero-logo{height:52px !important;width:auto !important;margin:0 auto 26px !important;}
.lc-hero-h1{font-size:clamp(30px,4.2vw,50px) !important;color:var(--lc-text) !important;font-weight:800 !important;letter-spacing:-.02em !important;max-width:28ch !important;margin:0 auto 26px !important;text-wrap:balance !important;}
.lc-hero-sub{color:var(--lc-text-dim) !important;font-size:clamp(16px,1.7vw,19px) !important;line-height:1.6 !important;max-width:620px !important;margin:0 auto 30px !important;}
.lc-hero-bullets{display:inline-flex !important;flex-direction:column !important;gap:9px !important;text-align:left !important;margin:0 auto 4px !important;}
.lc-hero-bullets li{display:flex !important;align-items:flex-start !important;gap:10px !important;font-size:15px !important;color:var(--lc-text) !important;font-weight:600 !important;}
.lc-hero-bullets li::before{content:'✓' !important;color:var(--lc-accent) !important;font-weight:800 !important;flex-shrink:0 !important;}
.lc-hero-video{position:relative !important;width:min(760px,100%) !important;margin:26px auto 0 !important;aspect-ratio:16/9 !important;border-radius:18px !important;overflow:hidden !important;background:#000 !important;border:1px solid color-mix(in srgb,var(--lc-accent) 12%,transparent) !important;box-shadow:0 1px 3px rgba(0,0,0,.06),0 24px 50px -34px rgba(0,0,0,.32) !important;}
.lc-hero-video iframe{position:absolute !important;inset:0 !important;width:100% !important;height:100% !important;border:0 !important;}
.lc-hero .lc-cta{margin-top:26px !important;}
/* Franja de datos / prueba social bajo el hero */
.lc-trust{display:flex !important;align-items:center !important;justify-content:center !important;gap:clamp(18px,4vw,44px) !important;flex-wrap:wrap !important;}
.lc-trust-item{text-align:center !important;}
.lc-trust-item strong{display:block !important;font-family:var(--lc-font-head) !important;font-size:22px !important;color:var(--lc-text) !important;}
.lc-trust-item span{font-size:12px !important;color:var(--lc-text-dim) !important;}
.lc-trust-logos{display:flex !important;gap:clamp(16px,3vw,30px) !important;align-items:center !important;flex-wrap:wrap !important;justify-content:center !important;}
.lc-trust-logos img{height:26px !important;width:auto !important;opacity:.7 !important;filter:grayscale(1) !important;}
</style>
<div class="lc-frame lc-hero">
  <!-- Above-the-fold: pinta de inmediato (LCP). Orden fijo: logo → título → subtítulo → video → CTA -->
  <img class="lc-hero-logo" src="{{URL_LOGO}}" alt="{{NOMBRE_MARCA}}" width="180" height="52" fetchpriority="high" decoding="async">
  <h1 class="lc-hero-h1">{{H1_LINEA_1}} <mark>{{H1_FRASE_DESTACADA}}</mark></h1>
  <p class="lc-hero-sub">{{SUBHEADLINE}}</p>
  <!-- 3 bullets: SOLO si el hero es SIN video (imagen). Si HAY VSL, OMITÍ este <ul> entero (el video hace ese trabajo; los bullets antes del video lo empujan y ensucian). -->
  <ul class="lc-hero-bullets">
    <li>{{BULLET_BENEFICIO_1}}</li>
    <li>{{BULLET_BENEFICIO_2}}</li>
    <li>{{BULLET_BENEFICIO_3}}</li>
  </ul>
  <!-- VSL OPCIONAL (player directo de Panda: autoplay mudo + reinicio de 0 al activar sonido). Borra este div si no hay video.
       {{URL_EMBED_VSL}} = embed BASE de Panda (con ?v=ID); los params van SIEMPRE (predeterminado). -->
  <div class="lc-hero-video">
    <iframe src="{{URL_EMBED_VSL}}&muted=true&autoplay=true&mutedIndicatorIcon=true&mutedIndicatorClickRestart=true&saveProgress=false" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowfullscreen="true" title="Video"></iframe>
  </div>
  <a class="lc-cta" data-lc-open href="#">{{TEXTO_CTA_HERO}}</a>
  <div class="lc-fud"><span>{{MICRO_FUD_1}}</span><span>{{MICRO_FUD_2}}</span></div>
</div>
</section>

<!-- FRANJA DE DATOS / PRUEBA SOCIAL (barra fina bajo el hero). Solo cifras/logos REALES; si no hay, borra este bloque -->
<div class="lc-band" style="padding-block:clamp(16px,2.5vw,26px) !important;border-bottom:1px solid var(--lc-line) !important;">
  <div class="lc-frame lc-trust">
    <!-- contadores reales -->
    <div class="lc-trust-item"><strong>{{VALOR}}</strong><span>{{ETIQUETA}}</span></div>
    <!-- o logos de prensa reales -->
    <div class="lc-trust-logos"><img src="{{URL_LOGO_PRENSA}}" alt="{{MEDIO}}" height="26" loading="lazy" decoding="async"></div>
  </div>
</div>

<!-- MARQUEE (tira de escasez; contenido duplicado 2x para loop sin salto) -->
<div class="lc-band lc-marquee" style="padding:11px 0 !important;">
  <div class="lc-marquee-track">
    <span>{{FRASE_ESCASEZ_1}}</span><span>◆</span><span>{{FRASE_ESCASEZ_2}}</span><span>◆</span>
    <span>{{FRASE_ESCASEZ_1}}</span><span>◆</span><span>{{FRASE_ESCASEZ_2}}</span><span>◆</span>
  </div>
</div>

<!-- Sin modal HTML: el formulario es Tally en POPUP. Los CTA [data-lc-open] lo abren (el JS del maestro carga embed.js al primer clic y llama Tally.openPopup con {{TALLY_FORM_ID}}). -->
```
Nota VSL: `{{URL_EMBED_VSL}}` es la URL de *embed* BASE de Panda (con `?v=ID`); la skill le agrega los params de autoplay-mudo (reinicio de 0 + sin guardar progreso). Si no hay video, borra `.lc-hero-video`.

## 2. PAIN VS GAIN (Ronda 1) — CON CTA · alt

```html
<section class="lc-band lc-band--alt">
<style>
.lc-pg1-grid{display:grid !important;grid-template-columns:1fr 1fr !important;gap:22px !important;margin-bottom:clamp(24px,3vw,34px) !important;}
.lc-pg1-col{background:#fff !important;border-radius:var(--lc-radius) !important;padding:28px !important;border-top:4px solid !important;box-shadow:var(--lc-shadow-sm) !important;}
.lc-pg1-col.pain{border-top-color:#c0392b !important;}
.lc-pg1-col.gain{border-top-color:var(--lc-accent) !important;}
.lc-pg1-col h3{font-size:16px !important;color:var(--lc-text) !important;margin:0 0 18px !important;}
.lc-pg1-col li{font-size:14px !important;color:var(--lc-text-dim) !important;line-height:1.6 !important;margin-bottom:14px !important;padding-left:26px !important;position:relative !important;}
.lc-pg1-col.pain li::before{content:'✕' !important;position:absolute !important;left:0 !important;color:#c0392b !important;font-weight:700 !important;}
.lc-pg1-col.gain li::before{content:'✓' !important;position:absolute !important;left:0 !important;color:var(--lc-accent) !important;font-weight:700 !important;}
.lc-pg1-close{text-align:center !important;color:var(--lc-text) !important;font-size:16px !important;max-width:720px !important;margin:0 auto clamp(20px,3vw,26px) !important;}
@media(max-width:700px){.lc-pg1-grid{grid-template-columns:1fr !important;}}
</style>
<div class="lc-frame">
  <div class="lc-pg1-grid">
    <div class="lc-pg1-col pain"><h3>{{SUBTITULO_COLUMNA_DOLOR}}</h3><ul>
      <!-- 5 veces --><li>{{PUNTO_DOLOR}}</li>
    </ul></div>
    <div class="lc-pg1-col gain"><h3>{{SUBTITULO_COLUMNA_ALIVIO}}</h3><ul>
      <!-- 5 veces, mismo orden --><li>{{PUNTO_ALIVIO}}</li>
    </ul></div>
  </div>
  <p class="lc-pg1-close">{{PARRAFO_CIERRE_RONDA_1}}</p>
  <div style="text-align:center !important;"><a class="lc-cta" data-lc-open href="#">{{TEXTO_CTA_RONDA_1}}</a></div>
</div>
</section>
```

## 3. PAIN VS GAIN RONDA 2 + AVATAR (combinado, SIN CTA) · blanco

```html
<section class="lc-band">
<style>
.lc-combo-box{background:var(--lc-bg-alt) !important;border-radius:18px !important;padding:clamp(32px,4vw,44px) clamp(22px,4vw,40px) !important;}
.lc-combo-a{display:grid !important;grid-template-columns:1fr 1fr !important;gap:34px !important;margin-bottom:40px !important;align-items:start !important;}
.lc-combo-a h3{font-size:18px !important;margin:0 0 12px !important;color:var(--lc-text) !important;}
.lc-combo-a .con h3{color:var(--lc-accent) !important;}
.lc-combo-a p{color:var(--lc-text-dim) !important;font-size:15px !important;line-height:1.7 !important;}
.lc-combo-a li{font-size:14px !important;color:var(--lc-text) !important;line-height:1.6 !important;margin-bottom:12px !important;padding-left:22px !important;position:relative !important;font-weight:600 !important;}
.lc-combo-a li::before{content:'✓' !important;position:absolute !important;left:0 !important;color:var(--lc-accent) !important;font-weight:700 !important;}
.lc-combo-b h4{text-align:center !important;font-size:clamp(20px,2.8vw,26px) !important;color:var(--lc-text) !important;margin:0 0 26px !important;font-weight:800 !important;}
.lc-combo-grid{display:grid !important;grid-template-columns:1fr 1fr !important;gap:16px !important;margin-bottom:24px !important;}
.lc-combo-item{display:flex !important;gap:12px !important;align-items:flex-start !important;background:#fff !important;border-radius:10px !important;padding:14px 16px !important;}
.lc-combo-item svg{width:20px !important;height:20px !important;stroke:var(--lc-accent) !important;fill:none !important;stroke-width:2 !important;flex-shrink:0 !important;margin-top:2px !important;}
.lc-combo-item p{font-size:14px !important;color:var(--lc-text) !important;line-height:1.5 !important;}
.lc-combo-tension{text-align:center !important;font-weight:800 !important;color:var(--lc-text) !important;font-size:17px !important;max-width:640px !important;margin:0 auto !important;}
@media(max-width:700px){.lc-combo-a,.lc-combo-grid{grid-template-columns:1fr !important;}}
</style>
<div class="lc-frame lc-combo-box">
  <div class="lc-combo-a">
    <div class="sin"><h3>{{SUBTITULO_SIN_AYUDA}}</h3><p>{{PARRAFO_CONSECUENCIAS}}</p></div>
    <div class="con"><h3>{{SUBTITULO_CON_MARCA}}</h3><ul>
      <!-- 5 veces --><li>{{BENEFICIO_ACCIONABLE}}</li>
    </ul></div>
  </div>
  <div class="lc-combo-b">
    <h4>{{TITULO_AVATAR}}</h4>
    <div class="lc-combo-grid">
      <!-- 4-5 veces -->
      <div class="lc-combo-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg><p>{{SITUACION_ESPECIFICA}}</p></div>
    </div>
    <p class="lc-combo-tension">{{FRASE_TENSION_CIERRE}}</p>
  </div>
</div>
</section>
```
Nota: UNA sola sección. NO agregues CTA ni la cortes en dos fondos.

## 4. PROCESO (4-5 pasos) — CON CTA · alt

```html
<section class="lc-band lc-band--alt">
<style>
.lc-proc-h2{text-align:center !important;font-size:clamp(24px,3.6vw,36px) !important;color:var(--lc-text) !important;margin:0 0 clamp(32px,4vw,44px) !important;font-weight:800 !important;}
.lc-proc-line{position:relative !important;}
.lc-proc-line::before{content:'' !important;position:absolute !important;left:27px !important;top:6px !important;bottom:6px !important;width:2px !important;background:var(--lc-line) !important;}
.lc-proc-step{display:flex !important;gap:22px !important;margin-bottom:32px !important;position:relative !important;}
.lc-proc-step:last-child{margin-bottom:0 !important;}
.lc-proc-num{width:56px !important;height:56px !important;border-radius:50% !important;background:var(--lc-accent) !important;color:#fff !important;display:flex !important;align-items:center !important;justify-content:center !important;font-weight:800 !important;font-family:var(--lc-font-head) !important;flex-shrink:0 !important;z-index:1 !important;font-size:22px !important;}
.lc-proc-tag{font-size:11px !important;color:var(--lc-accent) !important;font-weight:800 !important;text-transform:uppercase !important;letter-spacing:1px !important;margin:2px 0 4px !important;}
.lc-proc-title{font-size:17px !important;font-weight:700 !important;color:var(--lc-text) !important;margin:0 0 6px !important;}
.lc-proc-text{font-size:14px !important;color:var(--lc-text-dim) !important;line-height:1.6 !important;}
</style>
<div class="lc-narrow">
  <h2 class="lc-proc-h2">{{TITULO_PROCESO}}</h2>
  <div class="lc-proc-line">
    <!-- 4-5 veces -->
    <div class="lc-proc-step">
      <div class="lc-proc-num">{{NUMERO_PASO}}</div>
      <div><p class="lc-proc-tag">PASO {{NUMERO_PASO}}</p><h3 class="lc-proc-title">{{TITULO_PASO}}</h3><p class="lc-proc-text">{{DESCRIPCION_PASO}}</p></div>
    </div>
  </div>
  <div style="text-align:center !important;margin-top:40px !important;"><a class="lc-cta" data-lc-open href="#">{{TEXTO_CTA_PROCESO}}</a>
  <div class="lc-fud"><span>{{MICRO_FUD_1}}</span><span>{{MICRO_FUD_2}}</span></div></div>
</div>
</section>
```

## 5. PRUEBA SOCIAL · blanco

```html
<section class="lc-band">
<style>
.lc-social-h2{text-align:center !important;font-size:clamp(22px,3.4vw,30px) !important;color:var(--lc-text) !important;margin:0 0 30px !important;font-weight:800 !important;}
.lc-social-metrics{display:flex !important;gap:34px !important;justify-content:center !important;flex-wrap:wrap !important;margin-bottom:34px !important;}
.lc-social-metric strong{display:block !important;font-family:var(--lc-font-head) !important;font-size:26px !important;color:var(--lc-accent) !important;}
.lc-social-metric span{font-size:12px !important;color:var(--lc-text-dim) !important;}
.lc-social-grid{display:grid !important;grid-template-columns:1fr 1fr !important;gap:20px !important;}
.lc-social-card{background:var(--lc-bg-alt) !important;border-radius:12px !important;padding:22px !important;}
.lc-social-quote{font-size:14px !important;color:var(--lc-text) !important;line-height:1.6 !important;font-style:italic !important;margin:0 0 12px !important;}
.lc-social-author{display:flex !important;align-items:center !important;gap:10px !important;margin-top:12px !important;}
.lc-social-author img{width:38px !important;height:38px !important;border-radius:50% !important;object-fit:cover !important;flex-shrink:0 !important;}
.lc-social-author b{display:block !important;font-size:13px !important;color:var(--lc-text) !important;}
.lc-social-author em{font-style:normal !important;font-size:12px !important;color:var(--lc-text-dim) !important;}
@media(max-width:700px){.lc-social-grid{grid-template-columns:1fr !important;}}
</style>
<div class="lc-frame">
  <h2 class="lc-social-h2">{{ENCABEZADO_PRUEBA_SOCIAL}}</h2>
  <div class="lc-social-metrics">
    <!-- 2-4 veces SOLO si hay cifras reales -->
    <div class="lc-social-metric"><strong>{{VALOR_METRICA}}</strong><span>{{ETIQUETA_METRICA}}</span></div>
  </div>
  <div class="lc-social-grid">
    <!-- 2-3 veces si hay testimonios reales -->
    <div class="lc-social-card"><p class="lc-social-quote">"{{CITA_TESTIMONIO}}"</p><div class="lc-social-author"><img src="{{URL_FOTO}}" alt="{{NOMBRE}}" width="48" height="48" loading="lazy" decoding="async"><span><b>{{NOMBRE}}</b><em>{{SITUACION_O_FUENTE}}</em></span></div></div>
  </div>
</div>
</section>
```

## 6. AUTORIDAD (logo de la marca + credenciales) · alt

```html
<section class="lc-band lc-band--alt">
<style>
.lc-auth-row{display:grid !important;grid-template-columns:0.8fr 1.2fr !important;gap:clamp(28px,4vw,48px) !important;align-items:center !important;}
.lc-auth-media{display:flex !important;align-items:center !important;justify-content:center !important;background:var(--lc-bg) !important;border:1px solid var(--lc-line) !important;border-radius:var(--lc-radius) !important;box-shadow:var(--lc-shadow) !important;padding:clamp(30px,4.5vw,52px) !important;aspect-ratio:4/3 !important;}
.lc-auth-media img{max-width:100% !important;max-height:150px !important;width:auto !important;height:auto !important;object-fit:contain !important;}
.lc-auth-h2{font-size:clamp(22px,3.4vw,32px) !important;color:var(--lc-text) !important;margin:0 0 18px !important;font-weight:800 !important;}
.lc-auth-p{font-size:16px !important;color:var(--lc-text-dim) !important;line-height:1.75 !important;margin:0 0 16px !important;max-width:var(--lc-measure) !important;}
.lc-auth-creds{margin-top:20px !important;}
.lc-auth-creds li{font-size:14px !important;color:var(--lc-text) !important;line-height:1.5 !important;margin-bottom:10px !important;padding-left:26px !important;position:relative !important;font-weight:600 !important;}
.lc-auth-creds li::before{content:'✓' !important;position:absolute !important;left:0 !important;color:var(--lc-accent) !important;font-weight:800 !important;}
@media(max-width:760px){.lc-auth-row{grid-template-columns:1fr !important;}.lc-auth-media{max-width:420px !important;margin-inline:auto !important;aspect-ratio:16/9 !important;}}
</style>
<div class="lc-frame lc-auth-row">
  <!-- LOGO DE LA MARCA: panel a la izquierda en PC, arriba en móvil. Borra .lc-auth-media si preferís solo texto centrado. -->
  <div class="lc-auth-media"><img src="{{URL_LOGO}}" alt="{{NOMBRE_MARCA}}" width="200" height="80" loading="lazy" decoding="async"></div>
  <div>
    <h2 class="lc-auth-h2">{{TITULO_AUTORIDAD}}</h2>
    <p class="lc-auth-p">{{PARRAFO_REENCUADRE_PROBLEMA}}</p>
    <p class="lc-auth-p">{{PARRAFO_QUE_HACEMOS}}</p>
    <ul class="lc-auth-creds">
      <!-- 4-5 credenciales REALES; si no hay, borra la lista -->
      <li>{{CREDENCIAL}}</li>
    </ul>
  </div>
</div>
</section>
```
Nota: el logo va en `object-fit:contain` sobre panel blanco (no se recorta). Si no hay credenciales reales, borra la lista. Si no querés el logo, borra `.lc-auth-media` y degradá a texto centrado (párrafos en `.lc-narrow`).

## 7. FAQ · blanco

```html
<section class="lc-band">
<style>
.lc-faq-h2{text-align:center !important;font-size:clamp(22px,3.4vw,30px) !important;color:var(--lc-text) !important;margin:0 0 30px !important;font-weight:800 !important;}
.lc-faq-list{width:min(760px,100%) !important;margin-inline:auto !important;display:grid !important;gap:10px !important;}
.lc-faq-item{background:var(--lc-bg-alt) !important;border-radius:10px !important;overflow:hidden !important;}
.lc-faq-item summary{cursor:pointer !important;padding:16px 20px !important;font-weight:700 !important;color:var(--lc-text) !important;font-size:14px !important;list-style:none !important;display:flex !important;justify-content:space-between !important;gap:12px !important;}
.lc-faq-item summary::-webkit-details-marker{display:none !important;}
.lc-faq-item summary::after{content:'+' !important;color:var(--lc-accent) !important;font-size:20px !important;line-height:1 !important;}
.lc-faq-item[open] summary::after{content:'−' !important;}
.lc-faq-item p{padding:0 20px 18px !important;color:var(--lc-text-dim) !important;font-size:14px !important;line-height:1.6 !important;max-width:var(--lc-measure) !important;}
</style>
<div class="lc-frame">
  <h2 class="lc-faq-h2">{{HEADLINE_FAQ}}</h2>
  <div class="lc-faq-list">
    <!-- 6-8 veces; una siempre delimita quién NO es cliente ideal -->
    <details class="lc-faq-item"><summary>{{PREGUNTA}}</summary><p>{{RESPUESTA}}</p></details>
  </div>
</div>
</section>
```

## 8. CIERRE + CTA FINAL · oscuro

```html
<section class="lc-band lc-band--close" style="text-align:center !important;">
<style>
.lc-close-h2{color:#fff !important;font-size:clamp(26px,4.2vw,42px) !important;font-weight:800 !important;max-width:750px !important;margin:0 auto 20px !important;}
.lc-close-p{color:rgba(255,255,255,.82) !important;font-size:15px !important;line-height:1.7 !important;max-width:640px !important;margin:0 auto 24px !important;}
.lc-close-final{color:#fff !important;font-weight:700 !important;font-size:16px !important;margin-bottom:26px !important;}
.lc-close .lc-cta{background:#fff !important;color:var(--lc-bg-close) !important;}
.lc-close-incluye{background:rgba(255,255,255,.10) !important;border:1px solid rgba(255,255,255,.18) !important;border-radius:var(--lc-radius) !important;padding:18px 22px !important;max-width:620px !important;margin:0 auto 20px !important;text-align:left !important;}
.lc-close-incluye b{color:#fff !important;display:block !important;margin-bottom:8px !important;}
.lc-close-incluye p{color:rgba(255,255,255,.82) !important;font-size:14.5px !important;line-height:1.7 !important;}
.lc-close-perdida{color:#fff !important;font-weight:700 !important;font-size:16px !important;max-width:620px !important;margin:0 auto 22px !important;}
.lc-close .lc-fud{color:rgba(255,255,255,.8) !important;margin-top:16px !important;}
.lc-close .lc-fud span::before{color:#fff !important;}
</style>
<div class="lc-frame lc-close">
  <h2 class="lc-close-h2">{{TITULO_CIERRE}}</h2>
  <p class="lc-close-p">{{PARRAFO_REAFIRMACION}}</p>
  <!-- Ilusión del esfuerzo: desglosá TODO lo que incluye la oferta (justifica el precio) -->
  <div class="lc-close-incluye"><b>Todo lo que incluye:</b><p>{{DESGLOSE_OFERTA}}</p></div>
  <!-- Aversión a la pérdida: qué se pierde por no actuar (solo con datos reales) -->
  <p class="lc-close-perdida">{{LINEA_PERDIDA}}</p>
  <p class="lc-close-final">{{LINEA_FINAL_DIRECTA}}</p>
  <a class="lc-cta" data-lc-open href="#">{{TEXTO_CTA_FINAL}}</a>
  <div class="lc-fud"><span>{{MICRO_FUD_1}}</span><span>{{MICRO_FUD_2}}</span></div>
</div>
</section>
```

## 9. FOOTER · oscuro-2

```html
<footer class="lc-band lc-band--footer" style="text-align:center !important;padding-block:34px !important;">
<style>
.lc-footer-inner img{height:26px !important;margin:0 auto 14px !important;}
.lc-footer-text{color:rgba(255,255,255,.45) !important;font-size:12px !important;line-height:1.7 !important;}
.lc-footer-text a{color:rgba(255,255,255,.6) !important;text-decoration:underline !important;}
</style>
<div class="lc-frame lc-footer-inner">
  <img src="{{URL_LOGO_BLANCO}}" alt="{{NOMBRE_MARCA}}" width="140" height="40">
  <p class="lc-footer-text">© {{AÑO}} {{NOMBRE_MARCA}}. Todos los derechos reservados.<br>
  <a href="{{URL_AVISO_LEGAL}}">Aviso Legal</a> · <a href="{{URL_PRIVACIDAD}}">Política de Privacidad</a> · <a href="{{URL_COOKIES}}">Política de Cookies</a></p>
</div>
</footer>
```

## OPCIONAL A — GALERÍA ANTES/DESPUÉS (tabs accesibles) · para inmobiliaria/reforma/construcción

Usa el inicializador de tabs del bloque maestro (ARIA + teclado). Cada proyecto = un tab + un panel antes/después.

```html
<section class="lc-band lc-band--alt">
<style>
.lc-gal-h2{text-align:center !important;font-size:clamp(22px,3.4vw,30px) !important;color:var(--lc-text) !important;margin:0 0 24px !important;font-weight:800 !important;}
.lc-tabs{display:flex !important;gap:8px !important;flex-wrap:wrap !important;justify-content:center !important;margin-bottom:26px !important;}
.lc-tabs [role=tab]{padding:8px 16px !important;border-radius:999px !important;font-size:13px !important;font-weight:700 !important;color:var(--lc-text-dim) !important;background:#fff !important;box-shadow:var(--lc-shadow-sm) !important;}
.lc-tabs [role=tab].is-active{background:var(--lc-accent) !important;color:#fff !important;}
.lc-tabpanel[hidden]{display:none !important;}
.lc-ba{display:grid !important;grid-template-columns:1fr 1fr !important;gap:14px !important;}
.lc-ba figure{border-radius:var(--lc-radius) !important;overflow:hidden !important;aspect-ratio:4/3 !important;box-shadow:var(--lc-shadow-sm) !important;}
.lc-ba img{width:100% !important;height:100% !important;object-fit:cover !important;}
.lc-gal-desc{max-width:780px !important;margin:18px auto 0 !important;text-align:center !important;color:var(--lc-text-dim) !important;font-size:15px !important;line-height:1.7 !important;}
@media(max-width:600px){.lc-ba{grid-template-columns:1fr !important;}}
</style>
<div class="lc-frame">
  <h2 class="lc-gal-h2">{{TITULO_GALERIA}}</h2>
  <div class="lc-tabs" role="tablist" aria-label="Proyectos">
    <!-- 1º con is-active; aria-controls = id del panel -->
    <button role="tab" id="tab-1" aria-controls="panel-1" aria-selected="true" class="is-active">{{NOMBRE_PROYECTO_1}}</button>
    <button role="tab" id="tab-2" aria-controls="panel-2" aria-selected="false">{{NOMBRE_PROYECTO_2}}</button>
  </div>
  <div class="lc-tabpanel is-active" id="panel-1" role="tabpanel" aria-labelledby="tab-1">
    <div class="lc-ba">
      <figure><img src="{{URL_ANTES_1}}" alt="Antes" width="600" height="450" loading="lazy" decoding="async"></figure>
      <figure><img src="{{URL_DESPUES_1}}" alt="Después" width="600" height="450" loading="lazy" decoding="async"></figure>
    </div>
    <p class="lc-gal-desc">{{DESCRIPCION_PROYECTO_1}}</p>
  </div>
  <div class="lc-tabpanel" id="panel-2" role="tabpanel" aria-labelledby="tab-2" hidden>
    <div class="lc-ba">
      <figure><img src="{{URL_ANTES_2}}" alt="Antes" width="600" height="450" loading="lazy" decoding="async"></figure>
      <figure><img src="{{URL_DESPUES_2}}" alt="Después" width="600" height="450" loading="lazy" decoding="async"></figure>
    </div>
    <p class="lc-gal-desc">{{DESCRIPCION_PROYECTO_2}}</p>
  </div>
</div>
</section>
```

## OPCIONAL B — FORMULARIO INLINE de Tally (alternativa al popup) · id="lc-form"

Si preferís el form VISIBLE en la página (en vez del popup), pegá esto (normalmente antes del cierre) y cambiá todos los `data-lc-open` por `href="#lc-form"`. Usa el `preconnect` a Tally del maestro.

```html
<section class="lc-band lc-band--alt" id="lc-form" style="text-align:center !important;">
<style>
.lc-form-box{width:min(560px,100%) !important;margin-inline:auto !important;background:#fff !important;border:1px solid var(--lc-line) !important;border-radius:var(--lc-radius) !important;padding:clamp(28px,4vw,40px) !important;box-shadow:var(--lc-shadow) !important;}
.lc-form-box h2{font-size:clamp(22px,3.2vw,28px) !important;color:var(--lc-text) !important;margin:0 0 8px !important;font-weight:800 !important;}
.lc-form-box .lc-form-desc{color:var(--lc-text-dim) !important;font-size:14px !important;margin:0 0 20px !important;}
.lc-form-box iframe{width:100% !important;border:0 !important;}
.lc-form-trust{color:var(--lc-text-dim) !important;font-size:12px !important;margin-top:12px !important;}
</style>
<div class="lc-frame">
  <div class="lc-form-box">
    <h2>{{TITULO_FORM}}</h2>
    <p class="lc-form-desc">{{SUBTITULO_FORM}}</p>
    <iframe data-tally-src="https://tally.so/embed/{{TALLY_FORM_ID}}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" width="100%" height="300" frameborder="0" marginheight="0" marginwidth="0" title="{{TITULO_FORM}}"></iframe>
    <p class="lc-form-trust">100% confidencial · Respuesta en 24h</p>
  </div>
</div>
<script>
(function(){var d=document,w="https://tally.so/widgets/embed.js";function load(){if(typeof Tally!=="undefined"){Tally.loadEmbeds();return;}d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){e.src=e.dataset.tallySrc;});}if(d.querySelector("iframe[data-tally-src]")){if(typeof Tally!=="undefined"){load();}else if(!d.querySelector('script[src="'+w+'"]')){var s=d.createElement("script");s.src=w;s.async=true;s.onload=load;s.onerror=load;d.head.appendChild(s);}}})();
</script>
```
Nota: en inline, el form carga con la página (Tally precarga a 500px); **sin `min-height`** reservado (evita el salto). El popup (por defecto) es más liviano porque el form solo carga al clic.
