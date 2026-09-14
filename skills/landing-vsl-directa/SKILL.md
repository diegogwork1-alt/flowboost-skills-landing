---
name: landing-vsl-directa
description: Maqueta en HTML/CSS (para widgets de Elementor/WordPress) una landing VSL de respuesta directa de 9 bloques (0-8) con el FORMULARIO ARRIBA (justo después del hero, todos los CTA anclan ahí): Hero VSL (logo + reseñas + H1 + subheadline + video VSL de Panda + CTA + quita-miedos + logos de prensa), Formulario (Tally inline), Punto de Dolor (PAS), Sistema/Value props (lista), Reseñas (widget de prueba social), Método/Cómo Funciona (3 pasos), Autoridad/Equipo, FAQ (con pregunta que descalifica), Cierre + CTA final. El COPY lo aporta el usuario; esta skill NO redacta copy ni inventa datos — lo coloca en los esqueletos, bloque por bloque. Tema oscuro por defecto (tokens de marca). También funciona en MODO AUDITORÍA: si se le pasa una landing ya hecha (HTML, archivo o URL) y se pide revisarla, corregirla, mejorarla o saber qué está mal, la audita contra sus propias reglas y devuelve el diagnóstico priorizado más los bloques corregidos completos; NUNCA pregunta al usuario qué cambiar, porque el criterio está en la skill. Usar cuando el usuario quiera maquetar una landing VSL directa con form arriba (típica de servicios/inmobiliaria/alto ticket con video). Para la estructura de 18 bloques usar landing-conversion; para pain-gain + avatar usar landing-b2b-alto-ticket.
---


> 📐 **PARÁMETROS DE COPY DE LANDING, CON SU FUENTE:** `../fundamentos-copy/references/parametros-landing.md`. Ahí están una sola vez y **con la fuente de cada una** las reglas que antes estaban repartidas y desiguales entre las 9 skills de landing: frases ≤15 palabras · párrafos ≤2 oraciones · **prohibido el guion largo (—)** · el titular responde «¿por qué me importa?» · **2-3 testimonios reales** y nunca en carrusel en móvil · **nunca «sin compromiso» ni «gratis»** bajo el CTA · y **qué cifras NO están en las fuentes** (los umbrales de Core Web Vitals y el impacto de la velocidad en conversión: si alguien las cita como dato propio, es una alucinación).
# Landing VSL directa — maqueta (9 bloques, formulario arriba)

Maquetás una landing VSL de respuesta directa **bloque por bloque**. El COPY lo aporta el usuario. Vos colocás sus textos en los esqueletos. Prefijo de clases: `lv-`. Tokens: `--lv-*`. Tema **oscuro por defecto** (la marca puede overridear).

## 🔍 MODO AUDITORÍA — cuando la landing YA EXISTE

Si el usuario trae una landing hecha (HTML pegado, un archivo, una URL, una captura) y dice *"revisá esto"*, *"corregí esto"*, *"qué está mal"*, *"mejoralo"*, **estás en modo auditoría**. Es un modo distinto al de crear de cero, y tiene su propio procedimiento.

### La regla que lo define

**NO le preguntes al usuario qué quiere cambiar. LA SKILL ES EL CRITERIO.**

Preguntarle *"¿qué te gustaría ajustar?"* es devolverle el trabajo que te está pidiendo. Él ya te dijo qué quiere: que cumpla estas reglas. Lo único que se pregunta es un **dato que no podés saber** (una cifra, el ID del formulario, un color de marca, a qué bloque suyo se refiere). **Nunca se pregunta un criterio** de estructura, diseño, código o copy: todos están escritos en este archivo.

### Procedimiento

1. **Leé el HTML entero antes de opinar.** Si es una URL, abrila. Si es un archivo adjunto, ese archivo es la referencia: no salgas a buscar en otro lado hasta haberlo leído.
2. **Pasalo por las seis listas de esta skill, en este orden**, anotando cada incumplimiento junto a la regla que rompe:
   1. **Orden y presencia de los bloques** — ¿falta alguno? ¿están en otro orden? ¿hay bloques inventados que no están en la estructura?
   2. **Los parámetros de CADA bloque** (su especificación en PARTE A para el copy y en PARTE B para la maqueta).
   3. **🧬 Sistema visual** — ¿extiende el sistema del cliente o se inventó uno paralelo?
   4. **CHECKLIST DE CÓDIGO.**
   5. **FORMULARIO TALLY** — reglas fijas.
   6. **ERRORES YA COMETIDOS** (E1 en adelante).
   7. **`fixing-accessibility`** sobre el HTML entero, y **`make-interfaces-feel-better`** para el acabado. Las dos se invocan, no se citan de memoria.
3. **Entregá el diagnóstico priorizado por impacto**, no por orden de aparición: primero lo que rompe conversión (bloque ausente, CTA sin ancla, formulario roto, hero ilegible), al final lo cosmético. Una línea por punto, con la regla que incumple.
4. **Y entregá los bloques corregidos COMPLETOS**, no una lista de sugerencias para que las aplique él. Si son muchos, empezá por los tres de mayor impacto y ofrecé seguir con el resto.
5. Lo que el brief no cubra va como `[dato pendiente]` visible. **Nunca inventado.**
6. Cada bloque corregido pasa por las tres skills de diseño y por el checklist, igual que uno nuevo.

**Nunca cierres una auditoría con "¿qué te gustaría cambiar?".** Cerrala con *"esto es lo que incumple, y así queda corregido"*.

---

## 🎛️ LAS 5 SKILLS DE ACABADO — cuándo corre cada una

Donde más abajo diga "las 3 skills de diseño", son estas cinco. **Claude Code NO las encadena solo: hay que invocarlas con la tool Skill.**

**Por CADA bloque, antes de entregarlo, en este orden:**

1. **`impeccable`** — suelo de calidad y prohibiciones (kickers, plantilla de cifras, cards genéricas).
2. **`design-taste-frontend`** — dirección visual anti-plantilla: que no parezca generado.
3. **`emil-design-eng`** — estados, motion, microinteracción.
4. **`make-interfaces-feel-better`** — el detalle medible: radio concéntrico, alineación óptica, sombras contra bordes, iconos, tipografía fina.

**Y al terminar la landing, más una pasada por bloque si tiene controles:**

5. **`fixing-accessibility`** — auditoría de accesibilidad. **No corre por bloque salvo que el bloque tenga formulario, acordeón, tabs, carrusel o botones de icono.** Corre siempre en el CHECKLIST final y en el MODO AUDITORÍA.

Si alguna no está instalada, decíselo al usuario y seguí con las que haya. **Una corrección es un bloque nuevo: vuelve a pasar por las cuatro.**

**Restricción dura:** pueden cambiar el ACABADO, **nunca la ARQUITECTURA** (orden de bloques, ancla del formulario, Tally sin altura reservada, rendimiento, centrado del hero). Si una propuesta estética choca con eso, gana la estructura.

### Las reglas concretas que hay que cumplir aunque no invoques nada

Salen de `make-interfaces-feel-better` y son las que te faltaban. No son opinables:

- **Radio concéntrico: `radio externo = radio interno + padding`.** Es lo que más se nota sin saber por qué: una card con `border-radius:16px` y `padding:12px` necesita que lo de dentro lleve `4px`, no `16px`. Un radio mal anidado hace que todo se vea torcido.
- **`font-variant-numeric: tabular-nums`** en toda cifra que cambie (contadores, precios, métricas): si no, el ancho baila y la línea salta.
- **Outline de 1px en las imágenes** para que tengan borde consistente: `outline:1px solid rgba(0,0,0,.1)` sobre fondo claro y `rgba(255,255,255,.1)` sobre fondo oscuro. **Negro o blanco puros, nunca un gris tintado** — un tinte recoge el color del fondo y se lee como suciedad en el borde de la foto.
- **Área táctil mínima 44×44 px** en cualquier control: CTA, flechas del carrusel, botón de cerrar, acordeón. Si el elemento visible es menor, extendelo con un pseudo-elemento. **Dos áreas táctiles nunca se solapan.**
- **El grosor del icono sigue al peso del texto**: `stroke-width:1.5` junto a texto normal, `2` junto a semibold. Un solo grosor por set; nunca mezclar librerías de iconos en la misma superficie.
- **Los iconos usan `currentColor`** y cambian de estado por CSS, nunca con un SVG distinto por estado.
- **Nunca `transition: all`.** Siempre la propiedad exacta (`transition: transform .2s, box-shadow .2s`). `all` anima cosas que no viste y provoca saltos.
- **`will-change` solo en `transform`, `opacity` o `filter`**, y solo si notaste parpadeo en el primer frame. Nunca `will-change: all`.

### La compuerta de accesibilidad (de `fixing-accessibility`), por orden de impacto

1. **Nombres accesibles** — todo control tiene nombre: botones de solo icono con `aria-label`, todo input etiquetado, iconos decorativos con `aria-hidden="true"`.
2. **Teclado** — todo alcanzable con Tab, foco **visible**, nada de `div` haciendo de botón, `tabindex` nunca mayor que 0.
3. **Foco** — si hay modal: atrapa el foco, `Escape` lo cierra, y al cerrarlo el foco vuelve al disparador.
4. **Semántica** — elementos nativos antes que roles; listas en `ul`/`ol`; **jerarquía de headings sin saltos**.
5. **Formularios** — errores ligados con `aria-describedby`, `aria-invalid` en los inválidos, requeridos anunciados.
6. **Estados** — `aria-expanded` + `aria-controls` en el acordeón del FAQ; nada que dependa solo de `:hover` (tiene que haber equivalente de teclado); el deshabilitado no se comunica solo con color.
7. **Contraste** — suficiente para texto **e iconos**, y jamás quitar el outline de foco sin poner uno visible en su lugar.

**Formato cuando audites:** cita la línea, una frase de por qué importa, y el arreglo concreto. Arreglos mínimos y quirúrgicos, no reescribir media landing.

---

### ✅ CHECKLIST DE CÓDIGO — pasala ANTES de entregar CADA bloque
No es un repaso final: se ejecuta bloque por bloque. Si respondés "no" a alguna, el bloque no está listo.

**Código**
- [ ] ¿Todas las declaraciones del `<style>` llevan `!important` (salvo `:root` y `@keyframes`)?
- [ ] ¿Todas las reglas llevan **dos clases** de especificidad, para que no las pise el reset del maestro?
- [ ] ¿Ningún `transition: all`? (siempre la propiedad exacta)
- [ ] ¿El JS toggle clases y nunca escribe `element.style`?
- [ ] ¿Sin librerías externas, sin jQuery, sin GTM ni píxel?

**Rendimiento**
- [ ] ¿Toda `<img>` tiene `width`, `height` REALES, `decoding="async"` y `alt` descriptivo?
- [ ] ¿Solo UNA imagen en toda la página con `fetchpriority="high"`, y ninguna del primer viewport con `lazy`?
- [ ] ¿Todo lo que está bajo el pliegue lleva `loading="lazy"`?
- [ ] ¿Ningún `opacity:0` ni reveal al hacer scroll?
- [ ] ¿Fuentes y `preconnect` UNA sola vez, en el maestro?

**Formulario**
- [ ] ¿Tally **sin altura reservada** (ni `min-height`, ni caja de alto fijo), solo `data-tally-src` y `height` compacto?
- [ ] ¿El estado se activa con `:focus-within`, no con `:hover`?
- [ ] ¿Todos los CTA anclan al formulario?

**Acabado y accesibilidad**
- [ ] ¿Lo pasaste por `impeccable`, `design-taste-frontend`, `emil-design-eng` y `make-interfaces-feel-better`?
- [ ] ¿Radio concéntrico (externo = interno + padding), `tabular-nums` en las cifras que cambian, outline de 1px en las imágenes?
- [ ] ¿Área táctil ≥44×44 px en TODO control, sin solapes?
- [ ] ¿Contraste AA verificado, incluido el acento sobre el que se hace clic?
- [ ] ¿Jerarquía de headings sin saltos y un solo `h1` en la página?
- [ ] Si el bloque tiene formulario, acordeón, tabs, carrusel o botones de icono: ¿lo pasaste por `fixing-accessibility`?

---

## ✅ CONTRATO DE BLOQUE — se cumple en CADA bloque, sin excepción

El fallo más común no es hacer un bloque mal: es hacerlo **incompleto**, saltándose parámetros de su especificación. Pasa por generar de memoria en vez de releer.

**Antes de escribir el bloque N:**
1. **Volvé a abrir la especificación del bloque N en este archivo** — su copy en la PARTE A, su esqueleto en la PARTE B. No lo generes de memoria: la memoria se salta parámetros, y siempre los mismos (el CTA, el quita-miedos, el icono propio de cada ítem, el pie de foto).
2. Anotá su lista de elementos obligatorios y andá marcándolos.

**Antes de entregarlo, declará el cumplimiento en una línea de tu respuesta:**

```
Bloque 5 · título ✓ · 3 pasos ✓ · icono propio por paso ✓ · CTA al ancla del form ✓ · FUD distinto al del hero ✓ · impeccable ✓ · taste ✓ · emil ✓ · make-interfaces ✓ · radio concéntrico ✓ · área táctil 44px ✓
```

Esa línea no es decoración: es lo que te obliga a mirar la lista. **Si al escribirla ves que algo falta, no entregues el bloque — completalo primero.**

---

## Paso 0 — PREGUNTÁ ANTES DE MAQUETAR

> **Antes de preguntar nada:** si el usuario tiene un **brief o manual de marca** (.docx, .pdf, .md), pedíle la ruta y leelo — de ahí salen colores, fuentes, logo y tono sin hacerle repetir nada.
> ```bash
> textutil -convert txt -stdout "brief.docx"
> python3 -c "import fitz;d=fitz.open('brief.pdf');print(chr(10).join(p.get_text() for p in d))"
> ```
> Después preguntá **solo lo que no esté ahí**. Lo que casi nunca aparece en un manual: plataforma de destino, `{{TALLY_FORM_ID}}` y si hay VSL.


- **Plataforma:** ¿Elementor (widget "HTML") o Gutenberg (bloque "HTML personalizado")? (Elementor: padding de Sección/Columna en 0.)
- **Marca:** color de **acento** (hex), color de acento oscuro (hover), color de texto claro (cream/off-white), fuentes de titulares y cuerpo (nombre + forma URL de Google Fonts).
- **VSL:** URL de embed BASE de Panda (con `?v=ID`). Si no hay video, el hero usa imagen.
- **Formulario:** `{{TALLY_FORM_ID}}` (siempre Tally).
- **Reseñas:** ¿widget (Trustindex u otro) o cards manuales con testimonios reales?
- **Prueba social real** (logos de prensa, reseñas, cifras) — nunca inventar; si falta, placeholder explícito.

### ⚡ LCP — la única palanca que baja el campo, no solo el laboratorio

Casi todo lo que sube el score mueve solo métricas de laboratorio. **La prioridad de red mueve el campo**, porque el navegador trata las imágenes como prioridad BAJA hasta calcular el layout. Por eso este es el arreglo de mayor retorno.

**Paso 1 — identificá QUÉ es el LCP antes de tocar nada.** No optimices lo que no lo es:
- Hero con imagen grande → el LCP es esa imagen.
- **Hero con VSL/vídeo → el LCP suele ser el H1**, no el vídeo. La palanca ahí es **la fuente**, no una imagen: `preconnect` a gstatic + `display=swap` + precargar solo la fuente del titular.

**Paso 2 — si el LCP es una imagen:**
```html
<!-- Descubrible en el HTML inicial: con esto alcanza -->
<img src="hero.webp" width="1200" height="675" fetchpriority="high" decoding="async" alt="…">
```
El preload scanner ya la encuentra; `fetchpriority="high"` le sube la prioridad. **No hace falta `<link rel="preload">`.**

**Solo si NO es descubrible temprano** (fondo CSS, insertada por JS, o dentro de un `<picture>` con srcset complejo), añadí en el `<head>`:
```html
<link rel="preload" as="image" href="hero.webp" fetchpriority="high">
```

**Los 3 errores que lo anulan (verificalos siempre):**
1. **`loading="lazy"` en el hero** → cancela la prioridad alta. La imagen del primer pantallazo NUNCA lleva lazy.
2. **Marcar varias imágenes con `fetchpriority="high"`** → si todas son prioritarias, ninguna lo es. **Una sola por página.**
3. **Preload + `srcset` sin `imagesrcset`/`imagesizes` idénticos** → el navegador descarga la imagen **dos veces**. Peor que no precargar nada.

**Regla de tamaño (lo comprobamos midiendo):** el ancho del archivo debe ser **≥ 2× el ancho en CSS**, o se ve borrosa en pantallas retina por más rápida que cargue. Una imagen de 1200 px mostrada a 1152 px de ancho necesita 2304. Si no tenés un asset más grande, **reducí el tamaño de visualización**, no subas el original escalado.

## 🧬 SI YA EXISTE UN SISTEMA VISUAL, SE EXTIENDE — NUNCA SE INVENTA OTRO

**Antes de escribir la primera línea de CSS, preguntate: ¿hay algo ya hecho?** Una página de gracias, otra landing del mismo cliente, la web viva, un `index.html` de referencia que el usuario adjuntó. **Si lo hay, ESE es el sistema.** No es una inspiración: es la especificación.

**El procedimiento, obligatorio:**

1. **Abrí el archivo de referencia entero y leelo.** Si el usuario adjuntó un `index.html`, un CSS o una URL, **eso es la referencia** — no salgas a buscar en zips, capturas ni carpetas hasta haberlo leído. Perder el turno buscando en el sitio equivocado es el fallo más caro.
2. **Extraé el sistema y escribilo antes de maquetar** — colores exactos, familias y pesos tipográficos, ancho del contenedor, radios, sombras, patrón de sección, patrón de tarjeta, botón, footer.
3. **Reutilizá sus clases y sus nombres.** Si su patrón se llama `.typ-stats`, tu bloque equivalente **es** `.typ-stats`, con su misma caja, su mismo fondo y su misma estructura interna. No una versión tuya "equivalente pero mejor".
4. **Los esqueletos de esta skill son el ANDAMIAJE.** Cuando hay sistema de referencia, **gana el sistema**: sus tokens, sus anchos y sus patrones sustituyen a los del andamiaje. Lo que se conserva del andamiaje es la **arquitectura funcional** (orden de bloques, `#lv-form`/`#li-form`, Tally sin altura reservada, rendimiento).
5. **Antes de entregar, el test del documento único:** poné la landing y la referencia una al lado de la otra. **¿Parecen la misma web?** Si parecen dos webs distintas, no terminaste — da igual lo bonita que sea la tuya por separado.

**Lo que está prohibido cuando hay referencia:**
- Declarar tokens de color nuevos, otra familia tipográfica u otro ancho de contenedor.
- Cambiar el patrón de sección (si sus secciones son tarjeta blanca sobre gris, las tuyas también).
- "Versionar" un bloque suyo: si te pide una barra con la estética de un bloque que ya tiene, **se calca**, no se reinterpreta.
- Full-bleed si su sistema es de contenedor centrado, o al revés.

**Si NO hay referencia**, preguntá una sola vez si existe algo previo. Si no existe, usá los tokens de marca del brief y los esqueletos de esta skill.

**Y si dudás de a qué bloque se refiere el usuario, preguntá ANTES de maquetarlo.** Diez segundos de pregunta contra un bloque entero rehecho.

---

## 📋 FORMULARIO TALLY — reglas fijas (aprendidas en producción)

**1. SIN ALTURA RESERVADA. Nunca.**
Nada de `min-height` ni cajas con alto fijo alrededor del formulario. Dirección lo rechazó explícitamente: deja un hueco vacío mientras carga y se ve peor que el salto que intenta evitar.
- ❌ `.form-box{min-height:460px}` · ❌ un `<div>` contenedor con alto fijo
- ✅ El alto sale del **atributo `height` del iframe**, y nada más.

**2. `data-tally-src` SOLO, sin `src` en el HTML — y un fallback en el script.**
**Comprobado en producción: poner el `src` directo ROMPE el alto dinámico** y te deja el formulario cortado o con un hueco negro debajo. La razón está en `tally.so/widgets/embed.js`: la pasada que engancha el redimensionado busca `iframe[data-tally-src]:not([src])` — si el iframe ya trae `src`, no entra.

El riesgo que el `src` directo intentaba cubrir (que el script falle y el formulario quede en blanco, sobre todo en móvil) se cubre **en el script**, no en el atributo: si `Tally` no está definido, el propio script pone el `src` a mano. Así se tiene alto dinámico Y garantía de que nunca queda en blanco.
```html
<iframe
  data-tally-src="https://tally.so/embed/{{TALLY_FORM_ID}}?hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
  loading="lazy" width="100%" height="550" frameborder="0"
  marginheight="0" marginwidth="0" title="{{TITULO_FORM}}"></iframe>
```
```html
<script>
  var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
</script>
```

**3. `dynamicHeight` NO funciona en la previsualización local.**
Tally valida el origen: en `localhost` el iframe se queda clavado en el valor del atributo `height`. **No pierdas tiempo depurándolo** — no está roto.

**Y de ahí sale la regla del `height`, que es lo contrario de lo que parece.** Verificado leyendo `tally.so/widgets/embed.js`: cuando el `src` contiene `dynamicHeight=1`, Tally engancha **iframe-resizer**, que ajusta el alto al contenido **hacia arriba Y hacia abajo**. O sea:

- **En producción el atributo `height` da igual**: se sobrescribe a los pocos cientos de milisegundos.
- **El atributo es solo lo que se ve ANTES de que enganche** — y lo que queda para siempre si no engancha (preview local).

Por eso el `height` va **COMPACTO (≈300)**, nunca generoso. Si ponés 560 y el formulario mide 180, en cuanto el resizer no enganche tenés **380 px de hueco negro** entre el botón y lo de abajo — que es exactamente la altura reservada que esta regla existe para prohibir. Un valor corto falla como un formulario un poco justo; un valor largo falla como un agujero.

**Cómo saber si enganchó** (Tally marca el iframe cuando lo hace):
```js
const f = document.querySelector('iframe[data-tally-src]');
({inicializado: f.dataset.tallyEmbedWidgetInitialized, alto: Math.round(f.getBoundingClientRect().height)})
```
`inicializado:"1"` → enganchó y el alto es real. `undefined` → no enganchó: es preview local, o `embed.js` no llegó a correr. Si pasa **en producción**, el problema es el script, no el número: no lo tapes subiendo el `height`.

**4. El estado del formulario se activa con `:focus-within`, no con `:hover`.**
Una card es un objeto que se mira; un formulario es un objeto que se usa. El momento que importa es cuando el visitante **está escribiendo**.

**5. El contraste del botón de Tally se arregla EN TALLY, no en tu CSS.**
El botón vive dentro del iframe: tu CSS no lo alcanza. Si el acento de la marca es claro (ámbar, amarillo, lima), **el texto blanco encima suele quedar por debajo de 2:1** — y es justo el elemento sobre el que se hace clic para convertir. Comprobalo y, si falla, **decíselo al usuario**: se corrige en el diseñador de Tally poniendo el texto del botón en negro.

## Reglas obligatorias (todas)
1. **`!important` en TODA declaración CSS de cada bloque** (el tema de WP pisa sin él). Excepciones: `@keyframes` y tokens de `:root`.
2. **"Definir una vez":** fuentes + `preconnect` + tokens + reset viven en el **Bloque Maestro** (dentro del primer widget). Los demás bloques NO repiten fuentes ni preconnect.
3. **Full-bleed:** `.lv-band{width:100vw;margin-left:calc(50%-50vw)}` + `html,body{overflow-x:clip;max-width:100%}`.
4. **VSL de Panda = iframe DIRECTO** (sin poster ni facade). Params SIEMPRE en el `src` (con `&`, el embed ya trae `?v=ID`): `&muted=true&autoplay=true&mutedIndicatorIcon=true&mutedIndicatorClickRestart=true&saveProgress=false` → autoplay mudo, al tocar "activar sonido" REINICIA de 0, no guarda progreso (cada visitante empieza de cero).
5. **Formulario = Tally inline, ARRIBA (Bloque 1).** Todos los CTA de la página anclan a `#lv-form`. **Carga inmediata:** el script setea el `src` al instante (no espera a `embed.js`), y el iframe va **sin `loading="lazy"`**. `embed.js` carga async solo para el `dynamicHeight`.
6. **CLS 0:** **todo `<img>` con `width` y `height`** (ratio real). Contenedores de media/reseñas con `aspect-ratio` o `min-height` reservado. Below-the-fold `loading="lazy"`; todas `decoding="async"`.
7. **Interlineado de títulos definido UNA vez** en el maestro (`h1`=1.05, `h2`=1.1); nunca redefinir por bloque. Gap título→contenido ≥ interlineado. Sentence case, sin punto final ni MAYÚSCULAS sostenidas en titulares.
8. **Elevación premium:** profundidad por **borde hairline + sombra sutil**, NUNCA glow/sombra pesada. **Acento SOLO para la acción** (CTA/estado activo), nunca decoración grande.
9. **A11y:** un solo `h1` (hero); secciones `h2`; nunca saltar a `h3` sin `h2`. `role="img"`+`aria-label` en estrellas/íconos con significado. SVG decorativo con `aria-hidden="true"`. Contraste WCAG (nunca texto acento sobre fondo acento). CTA con `min-height:48px`. `:focus-visible`. `prefers-reduced-motion`.
10. **Escaneable:** ancho de lectura ~62-66ch en cuerpo largo. Nada de `opacity:0` para ocultar. Microinteracción solo `transform`/`box-shadow` en hover.
11. **Aplicá las skills de diseño** (impeccable, emil-design-eng, apple-design, design-taste-frontend) como acabado, sin romper la arquitectura funcional.

## Orden fijo de bloques
0. Hero VSL · 1. Formulario (`#lv-form`) · 2. Dolor (PAS) · 3. Sistema/Value props · 4. Reseñas · 5. Método (3 pasos) · 6. Autoridad/Equipo · 7. FAQ · 8. Cierre + CTA final.

Todos los CTA → `href="#lv-form"`.

---

## BLOQUE MAESTRO — va DENTRO del primer widget (se pega una sola vez, antes del Hero)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://tally.so" crossorigin>
<link rel="preconnect" href="{{URL_PLAYER_PANDA}}" crossorigin>
<link rel="dns-prefetch" href="{{URL_PLAYER_PANDA}}">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family={{GOOGLE_FONT_TITULARES_URL}}&family={{GOOGLE_FONT_CUERPO_URL}}&display=swap">
<style>
:root{
  --lv-accent:{{COLOR_ACENTO_HEX}};            /* acción: CTA, activo */
  --lv-accent-dk:{{COLOR_ACENTO_OSCURO_HEX}};  /* hover */
  --lv-accent-soft:{{COLOR_ACENTO_SUAVE_HEX}}; /* texto de énfasis / <em> */
  --lv-bg:#000000;                             /* canvas oscuro */
  --lv-bg-2:#0a0a0a;                           /* superficie 1 */
  --lv-text:#ffffff;                           /* titulares */
  --lv-text-dim:{{COLOR_TEXTO_CREMA_HEX}};     /* cuerpo (off-white cálido) */
  --lv-line:rgba(255,255,255,.14);             /* borde hairline */
  --lv-line-accent:color-mix(in srgb,var(--lv-accent) 30%,transparent);
  --lv-radius:12px;
  --lv-measure:64ch;                           /* ancho de lectura */
  --lv-pad-y:clamp(28px,4vw,48px);             /* ritmo de sección */
  --lv-shadow:0 1px 2px rgba(0,0,0,.4),0 18px 44px -26px rgba(0,0,0,.7);
  --lv-ease:cubic-bezier(0.23,1,0.32,1);
  --lv-font-head:'{{FUENTE_TITULARES}}',Georgia,serif;
  --lv-font-body:'{{FUENTE_CUERPO}}',system-ui,sans-serif;
}
html,body{overflow-x:clip !important;max-width:100% !important;}
html{scroll-behavior:smooth;}
.lv-band{position:relative !important;width:100vw !important;left:50% !important;right:50% !important;margin-left:-50vw !important;margin-right:-50vw !important;margin-top:0 !important;margin-bottom:0 !important;overflow:hidden !important;color:var(--lv-text) !important;background:var(--lv-bg) !important;font-family:var(--lv-font-body) !important;-webkit-font-smoothing:antialiased !important;}
.lv-band, .lv-band *{box-sizing:border-box !important;}
.lv-band img{max-width:100% !important;}
.lv-frame{max-width:1120px !important;margin:0 auto !important;padding:var(--lv-pad-y) 5% !important;}
.lv-band h1,.lv-band h2,.lv-band h3{margin:0 !important;font-family:var(--lv-font-head) !important;font-weight:400 !important;text-transform:none !important;overflow-wrap:break-word !important;color:var(--lv-text) !important;}
.lv-band h1{line-height:1.05 !important;letter-spacing:-.01em !important;text-wrap:balance !important;}
.lv-band h2{line-height:1.1 !important;letter-spacing:-.015em !important;text-wrap:balance !important;}
.lv-band em{font-style:normal !important;color:var(--lv-accent-soft) !important;}
/* CTA único (acento = acción) */
.lv-cta{display:inline-flex !important;align-items:center !important;justify-content:center !important;gap:10px !important;min-height:48px !important;padding:18px 38px !important;background:var(--lv-accent) !important;color:#141110 !important;border:1px solid var(--lv-line-accent) !important;border-radius:6px !important;text-decoration:none !important;font-family:var(--lv-font-body) !important;font-size:14px !important;font-weight:700 !important;letter-spacing:.1em !important;text-transform:uppercase !important;cursor:pointer !important;transition:background-color .22s ease,transform .16s var(--lv-ease) !important;white-space:nowrap !important;}
.lv-cta svg{width:15px !important;height:15px !important;stroke:currentColor !important;stroke-width:2 !important;fill:none !important;transition:transform .2s var(--lv-ease) !important;}
.lv-cta:active{transform:scale(.98) !important;}
.lv-cta:focus-visible{outline:2px solid var(--lv-accent-soft) !important;outline-offset:3px !important;}
@media (hover:hover) and (pointer:fine){.lv-cta:hover{background:var(--lv-accent-dk) !important;}.lv-cta:hover svg{transform:translateX(4px) !important;}}
/* quita-miedos (FUD) chips */
.lv-fud{display:flex !important;flex-wrap:wrap !important;gap:8px !important;justify-content:center !important;margin-top:16px !important;}
.lv-fud span{font-size:11px !important;font-weight:700 !important;letter-spacing:.06em !important;text-transform:uppercase !important;color:var(--lv-text-dim) !important;background:color-mix(in srgb,var(--lv-accent) 12%,transparent) !important;border:1px solid var(--lv-line-accent) !important;border-radius:6px !important;padding:7px 12px !important;}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto !important;}.lv-band *{transition-duration:.001ms !important;animation-duration:.001ms !important;}}
</style>
```
Nota: `{{URL_PLAYER_PANDA}}` es el origin del player (ej. `https://player-vz-XXXX.tv.pandavideo.com`). Si no hay VSL, borrá esos 2 `<link>`.

---

## 0. HERO VSL — logo + reseñas + H1 + sub + VSL + CTA + quita-miedos + logos de prensa
```html
<section class="lv-band lv-hero" style="text-align:center !important;">
<style>
.lv-hero{background:radial-gradient(120% 70% at 50% -10%,color-mix(in srgb,var(--lv-accent) 12%,transparent),transparent 60%),var(--lv-bg) !important;}
.lv-hero .lv-frame{display:flex !important;flex-direction:column !important;align-items:center !important;padding-top:16px !important;padding-bottom:34px !important;}
.lv-hero-logo{height:104px !important;width:auto !important;object-fit:contain !important;display:block !important;margin:0 0 16px 0 !important;}
.lv-reviews{display:flex !important;flex-direction:column !important;align-items:center !important;gap:6px !important;margin:6px 0 22px 0 !important;padding:12px 22px !important;border:1px solid var(--lv-line-accent) !important;border-radius:12px !important;background:rgba(255,255,255,.03) !important;}
.lv-reviews .lv-rev-top{display:flex !important;align-items:center !important;justify-content:center !important;gap:10px !important;}
.lv-reviews .lv-rev-stars{color:#FBBC05 !important;font-size:15px !important;letter-spacing:3px !important;line-height:1 !important;}
.lv-reviews .lv-rev-count{color:var(--lv-text-dim) !important;font-size:12px !important;font-weight:600 !important;letter-spacing:.3px !important;}
.lv-hero-h1{font-size:clamp(34px,5.2vw,62px) !important;margin:0 0 18px 0 !important;max-width:16ch !important;}
.lv-hero-sub{max-width:660px !important;margin:0 0 28px 0 !important;color:var(--lv-text-dim) !important;font-size:17px !important;line-height:1.6 !important;}
.lv-hero-vlabel{color:var(--lv-accent-soft) !important;font-size:13px !important;font-weight:600 !important;letter-spacing:.04em !important;margin:0 0 14px 0 !important;}
.lv-hero-video{position:relative !important;width:100% !important;max-width:940px !important;border-radius:10px !important;overflow:hidden !important;background:#000 !important;border:1px solid var(--lv-line) !important;box-shadow:var(--lv-shadow) !important;margin:0 0 30px 0 !important;}
.lv-hero-video .lv-ratio{position:relative !important;padding-top:56.25% !important;}
.lv-hero-video iframe{position:absolute !important;inset:0 !important;width:100% !important;height:100% !important;border:0 !important;}
.lv-hero .lv-cta{}
.lv-hero-reassure{margin:12px 0 0 0 !important;color:var(--lv-accent-soft) !important;font-size:12px !important;font-weight:600 !important;letter-spacing:.06em !important;text-transform:uppercase !important;}
.lv-press{display:flex !important;flex-direction:column !important;align-items:center !important;gap:18px !important;width:100% !important;margin:34px 0 0 0 !important;padding-top:30px !important;border-top:1px solid var(--lv-line) !important;}
.lv-press-label{font-size:11px !important;font-weight:700 !important;letter-spacing:3px !important;text-transform:uppercase !important;color:var(--lv-accent) !important;}
.lv-press-logos{display:flex !important;flex-wrap:wrap !important;align-items:center !important;justify-content:center !important;gap:30px !important;}
.lv-press-logos img{max-width:160px !important;max-height:52px !important;width:auto !important;height:auto !important;object-fit:contain !important;opacity:.85 !important;filter:grayscale(1) !important;transition:opacity .2s ease !important;}
@media (hover:hover) and (pointer:fine){.lv-press-logos img:hover{opacity:1 !important;}}
@media (max-width:768px){.lv-hero-logo{height:82px !important;}.lv-hero-h1{font-size:clamp(29px,8vw,40px) !important;}.lv-hero-sub{font-size:14.5px !important;}.lv-hero .lv-cta{width:100% !important;}.lv-press-logos img{max-width:30% !important;max-height:34px !important;}}
</style>
<div class="lv-frame">
  <img class="lv-hero-logo" src="{{URL_LOGO}}" alt="{{NOMBRE_MARCA}}" width="{{LOGO_W}}" height="{{LOGO_H}}" fetchpriority="high" decoding="async">
  <!-- Reseñas (opcional, si son reales) -->
  <div class="lv-reviews">
    <!-- ⛔ Las estrellas van por TOKEN: antes estaban cableadas a ★★★★★ con aria-label="5 estrellas"
         en una skill cuya propia descripción promete «NO inventa testimonios, cifras ni garantías».
         Si la reseña real es de 4, van 4. Si no hay reseñas reales, el bloque NO se monta. -->
    <div class="lv-rev-top"><span class="lv-rev-stars" role="img" aria-label="{{RESENA_ESTRELLAS}} estrellas">{{RESENA_ESTRELLAS_ICONOS}}</span></div>
    <span class="lv-rev-count">{{RESENAS_TEXTO}}</span>
  </div>
  <h1 class="lv-hero-h1">{{H1_LINEA}} <em>{{H1_DESTACADO}}</em></h1>
  <p class="lv-hero-sub">{{SUBHEADLINE}}</p>
  <!-- VSL de Panda: iframe directo con params de autoplay-mudo. Si no hay video, reemplazá por <img>. -->
  <p class="lv-hero-vlabel">{{ETIQUETA_VIDEO}}</p>
  <div class="lv-hero-video"><div class="lv-ratio">
    <iframe src="{{URL_EMBED_VSL}}&muted=true&autoplay=true&mutedIndicatorIcon=true&mutedIndicatorClickRestart=true&saveProgress=false" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowfullscreen="true" fetchpriority="high" title="{{TITULO_VIDEO}}"></iframe>
  </div></div>
  <a class="lv-cta" href="#lv-form"><span>{{TEXTO_CTA_HERO}}</span><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
  <p class="lv-hero-reassure">{{REASSURE}}</p>
  <div class="lv-fud"><span>{{FUD_1}}</span><span>{{FUD_2}}</span><span>{{FUD_3}}</span></div>
  <!-- Logos de prensa (reales; si es prensa, sumá cita al lado). Borrá si no hay. -->
  <div class="lv-press">
    <span class="lv-press-label">{{PRENSA_LABEL}}</span>
    <div class="lv-press-logos">
      <img src="{{URL_LOGO_PRENSA_1}}" alt="{{MEDIO_1}}" width="150" height="50" loading="lazy" decoding="async">
    </div>
  </div>
</div>
</section>
```

---

## 1. FORMULARIO — `#lv-form` · Tally inline · carga inmediata (todos los CTA anclan acá)
```html
<section class="lv-band" id="lv-form" style="scroll-margin-top:20px !important;">
<style>
.lv-form-head{text-align:center !important;margin:0 0 clamp(16px,2.2vw,24px) 0 !important;}
.lv-form-title{font-size:clamp(27px,3.6vw,44px) !important;margin:0 auto 10px auto !important;max-width:22ch !important;}
.lv-form-sub{max-width:560px !important;margin:0 auto !important;color:var(--lv-text-dim) !important;font-size:16px !important;line-height:1.6 !important;}
.lv-form-box{width:min(640px,100%) !important;margin:0 auto !important;}
.lv-form-box iframe{width:100% !important;border:0 !important;display:block !important;background:transparent !important;}
</style>
<div class="lv-frame">
  <div class="lv-form-head">
    <h2 class="lv-form-title">{{TITULO_FORM}} <em>{{TITULO_FORM_DESTACADO}}</em></h2>
    <p class="lv-form-sub">{{SUBTITULO_FORM}}</p>
  </div>
  <div class="lv-form-box">
    <iframe data-tally-src="https://tally.so/embed/{{TALLY_FORM_ID}}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1" width="100%" loading="lazy" height="550" frameborder="0" marginheight="0" marginwidth="0" title="{{TITULO_FORM}}"></iframe>
    <div class="lv-fud"><span>{{FORM_FUD_1}}</span><span>{{FORM_FUD_2}}</span></div>
  </div>
</div>
<script>
(function(){var d=document,w="https://tally.so/widgets/embed.js";
  d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(function(e){e.src=e.dataset.tallySrc;});
  if(typeof Tally!=="undefined"){Tally.loadEmbeds();}
  else if(!d.querySelector('script[src="'+w+'"]')){var s=d.createElement("script");s.src=w;s.async=true;d.head.appendChild(s);}
})();
</script>
</section>
```

---

## 2. DOLOR (PAS condensado) — título + N filas de dolor + cierre editorial
```html
<section class="lv-band">
<style>
.lv-do-wrap{max-width:760px !important;margin:0 auto !important;padding:var(--lv-pad-y) 5% !important;text-align:center !important;}
.lv-do-title{font-size:clamp(27px,3.8vw,46px) !important;margin:0 auto clamp(14px,2vw,20px) auto !important;max-width:20ch !important;}
.lv-do-lead{max-width:520px !important;margin:0 auto clamp(18px,2.6vw,28px) auto !important;color:var(--lv-text-dim) !important;font-size:16px !important;line-height:1.62 !important;}
.lv-do-rows{text-align:left !important;border:1px solid var(--lv-line-accent) !important;border-radius:14px !important;background:rgba(255,255,255,.02) !important;overflow:hidden !important;}
.lv-do-row{display:flex !important;align-items:center !important;gap:18px !important;padding:20px 24px !important;}
.lv-do-row + .lv-do-row{border-top:1px solid var(--lv-line) !important;}
.lv-do-ic{flex:0 0 auto !important;width:44px !important;height:44px !important;border-radius:11px !important;display:flex !important;align-items:center !important;justify-content:center !important;border:1px solid var(--lv-line-accent) !important;background:color-mix(in srgb,var(--lv-accent) 9%,transparent) !important;}
.lv-do-ic svg{width:21px !important;height:21px !important;stroke:var(--lv-accent-soft) !important;stroke-width:1.5 !important;fill:none !important;stroke-linecap:round !important;stroke-linejoin:round !important;}
.lv-do-row p{margin:0 !important;color:var(--lv-text-dim) !important;font-size:15px !important;line-height:1.55 !important;}
.lv-do-row p strong{color:var(--lv-text) !important;font-weight:700 !important;}
.lv-do-close{position:relative !important;max-width:30ch !important;margin:clamp(24px,3vw,36px) auto 0 auto !important;padding-top:clamp(22px,3vw,30px) !important;font-family:var(--lv-font-head) !important;font-size:clamp(20px,2.4vw,28px) !important;line-height:1.38 !important;}
.lv-do-close::before{content:"" !important;position:absolute !important;top:0 !important;left:50% !important;transform:translateX(-50%) !important;width:42px !important;height:1px !important;background:var(--lv-accent) !important;}
@media (max-width:560px){.lv-do-wrap{padding:24px 16px 32px 16px !important;}.lv-do-row{padding:16px !important;gap:14px !important;}}
</style>
<div class="lv-do-wrap">
  <h2 class="lv-do-title">{{DOLOR_TITULO}} <em>{{DOLOR_TITULO_DESTACADO}}</em></h2>
  <p class="lv-do-lead">{{DOLOR_LEAD}}</p>
  <div class="lv-do-rows">
    <div class="lv-do-row"><span class="lv-do-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span><p><strong>{{DOLOR_1_FUERTE}}</strong> {{DOLOR_1_RESTO}}</p></div>
    <div class="lv-do-row"><span class="lv-do-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span><p><strong>{{DOLOR_2_FUERTE}}</strong> {{DOLOR_2_RESTO}}</p></div>
    <div class="lv-do-row"><span class="lv-do-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span><p><strong>{{DOLOR_3_FUERTE}}</strong> {{DOLOR_3_RESTO}}</p></div>
  </div>
  <p class="lv-do-close">{{DOLOR_CIERRE}} <em>{{DOLOR_CIERRE_DESTACADO}}</em></p>
</div>
</section>
```

---

## 3. SISTEMA / VALUE PROPS — título + lista de ítems (ícono + título + texto)
```html
<section class="lv-band">
<style>
.lv-si-title{text-align:center !important;font-size:clamp(27px,3.8vw,46px) !important;margin:0 auto clamp(18px,2.6vw,30px) auto !important;max-width:22ch !important;}
.lv-si-list{border:1px solid var(--lv-line-accent) !important;border-radius:14px !important;background:rgba(255,255,255,.02) !important;overflow:hidden !important;}
.lv-si-row{display:grid !important;grid-template-columns:40px 230px 1fr !important;align-items:center !important;gap:16px !important;padding:14px 20px !important;}
.lv-si-row + .lv-si-row{border-top:1px solid var(--lv-line) !important;}
.lv-si-ic{width:40px !important;height:40px !important;border-radius:10px !important;display:flex !important;align-items:center !important;justify-content:center !important;border:1px solid var(--lv-line-accent) !important;background:color-mix(in srgb,var(--lv-accent) 9%,transparent) !important;}
.lv-si-ic svg{width:19px !important;height:19px !important;stroke:var(--lv-accent-soft) !important;stroke-width:1.5 !important;fill:none !important;stroke-linecap:round !important;stroke-linejoin:round !important;}
.lv-si-row h3{font-family:var(--lv-font-head) !important;font-size:16.5px !important;line-height:1.25 !important;}
.lv-si-row p{margin:0 !important;color:var(--lv-text-dim) !important;font-size:14px !important;line-height:1.5 !important;}
@media (max-width:760px){.lv-si-row{grid-template-columns:36px 1fr !important;gap:12px !important;padding:13px 14px !important;}.lv-si-row p{grid-column:2 !important;margin-top:2px !important;}}
</style>
<div class="lv-frame">
  <h2 class="lv-si-title">{{SISTEMA_TITULO}} <em>{{SISTEMA_TITULO_DESTACADO}}</em></h2>
  <div class="lv-si-list">
    <div class="lv-si-row"><span class="lv-si-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></span><h3>{{VP_1_TITULO}}</h3><p>{{VP_1_TEXTO}}</p></div>
    <div class="lv-si-row"><span class="lv-si-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></span><h3>{{VP_2_TITULO}}</h3><p>{{VP_2_TEXTO}}</p></div>
    <div class="lv-si-row"><span class="lv-si-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></span><h3>{{VP_3_TITULO}}</h3><p>{{VP_3_TEXTO}}</p></div>
    <!-- Repetí .lv-si-row por cada value prop real -->
  </div>
</div>
</section>
```

---

## 4. RESEÑAS — prueba social (widget o cards). Reservá altura para no generar CLS.
```html
<section class="lv-band" style="text-align:center !important;background:radial-gradient(90% 60% at 50% 100%,color-mix(in srgb,var(--lv-accent) 7%,transparent),transparent 60%),var(--lv-bg) !important;">
<style>
.lv-re-title{font-size:clamp(27px,3.8vw,46px) !important;margin:0 auto 12px auto !important;max-width:20ch !important;}
.lv-re-sub{max-width:520px !important;margin:0 auto clamp(16px,2.2vw,24px) auto !important;color:var(--lv-text-dim) !important;font-size:16px !important;line-height:1.6 !important;}
.lv-re-widget{max-width:1080px !important;margin:0 auto !important;text-align:left !important;min-height:320px !important;}
</style>
<div class="lv-frame">
  <h2 class="lv-re-title">{{RESENAS_TITULO}} <em>{{RESENAS_TITULO_DESTACADO}}</em></h2>
  <p class="lv-re-sub">{{RESENAS_SUB}}</p>
  <!-- Widget real (Trustindex u otro) O cards de testimonios reales. El min-height reserva el alto (ajustar al real). -->
  <div class="lv-re-widget">{{WIDGET_RESENAS}}</div>
</div>
</section>
```

---

## 5. MÉTODO / CÓMO FUNCIONA — 3 pasos numerados + CTA
```html
<section class="lv-band">
<style>
.lv-me-wrap{max-width:780px !important;margin:0 auto !important;padding:var(--lv-pad-y) 5% !important;}
.lv-me-title{text-align:center !important;font-size:clamp(27px,3.8vw,46px) !important;margin:0 auto clamp(18px,2.6vw,30px) auto !important;max-width:20ch !important;}
.lv-me-steps{--gap:clamp(24px,3.4vw,38px) !important;}
.lv-me-step{position:relative !important;display:flex !important;gap:clamp(18px,2.6vw,28px) !important;padding-bottom:var(--gap) !important;}
.lv-me-step:last-child{padding-bottom:0 !important;}
.lv-me-marker{position:relative !important;flex:0 0 auto !important;width:52px !important;display:flex !important;justify-content:center !important;}
.lv-me-step:not(:last-child) .lv-me-marker::before{content:"" !important;position:absolute !important;left:50% !important;transform:translateX(-50%) !important;top:56px !important;bottom:calc(-1 * var(--gap)) !important;width:1px !important;background:var(--lv-line-accent) !important;}
.lv-me-node{position:relative !important;z-index:1 !important;width:52px !important;height:52px !important;border-radius:50% !important;display:flex !important;align-items:center !important;justify-content:center !important;font-family:var(--lv-font-head) !important;font-size:19px !important;color:var(--lv-accent-soft) !important;border:1px solid var(--lv-line-accent) !important;background:color-mix(in srgb,var(--lv-accent) 12%,transparent) !important;}
.lv-me-step h3{font-family:var(--lv-font-head) !important;font-size:clamp(18px,2.1vw,24px) !important;line-height:1.22 !important;margin:0 0 8px 0 !important;padding-top:8px !important;}
.lv-me-step p{margin:0 !important;color:var(--lv-text-dim) !important;font-size:15px !important;line-height:1.62 !important;max-width:54ch !important;}
.lv-me-cta-wrap{text-align:center !important;margin-top:clamp(22px,3vw,34px) !important;}
.lv-me-reassure{margin:12px 0 0 0 !important;color:var(--lv-accent-soft) !important;font-size:12px !important;font-weight:600 !important;letter-spacing:.06em !important;text-transform:uppercase !important;}
@media (max-width:560px){.lv-me-wrap{padding:24px 16px 32px 16px !important;}.lv-me-node{width:44px !important;height:44px !important;}.lv-me-marker{width:44px !important;}.lv-me-step:not(:last-child) .lv-me-marker::before{top:48px !important;}.lv-me-cta-wrap .lv-cta{width:100% !important;}}
</style>
<div class="lv-me-wrap">
  <h2 class="lv-me-title">{{METODO_TITULO}} <em>{{METODO_TITULO_DESTACADO}}</em></h2>
  <div class="lv-me-steps">
    <div class="lv-me-step"><div class="lv-me-marker"><span class="lv-me-node">1</span></div><div><h3>{{PASO_1_TITULO}}</h3><p>{{PASO_1_TEXTO}}</p></div></div>
    <div class="lv-me-step"><div class="lv-me-marker"><span class="lv-me-node">2</span></div><div><h3>{{PASO_2_TITULO}}</h3><p>{{PASO_2_TEXTO}}</p></div></div>
    <div class="lv-me-step"><div class="lv-me-marker"><span class="lv-me-node">3</span></div><div><h3>{{PASO_3_TITULO}}</h3><p>{{PASO_3_TEXTO}}</p></div></div>
  </div>
  <div class="lv-me-cta-wrap"><a class="lv-cta" href="#lv-form"><span>{{TEXTO_CTA_METODO}}</span><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a><p class="lv-me-reassure">{{METODO_REASSURE}}</p></div>
</div>
</section>
```

---

## 6. AUTORIDAD / EQUIPO — foto + pitch (2 columnas)
```html
<section class="lv-band" style="background:radial-gradient(90% 60% at 0% 50%,color-mix(in srgb,var(--lv-accent) 6%,transparent),transparent 55%),var(--lv-bg) !important;">
<style>
.lv-eq-grid{display:grid !important;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr) !important;gap:clamp(28px,4.6vw,60px) !important;align-items:center !important;}
.lv-eq-media{border-radius:14px !important;overflow:hidden !important;border:1px solid var(--lv-line-accent) !important;box-shadow:var(--lv-shadow) !important;}
.lv-eq-media img{display:block !important;width:100% !important;height:auto !important;object-fit:cover !important;}
.lv-eq-content h2{font-size:clamp(26px,3.4vw,42px) !important;margin:0 0 clamp(16px,2.2vw,24px) 0 !important;max-width:18ch !important;}
.lv-eq-content p{margin:0 0 16px 0 !important;color:var(--lv-text-dim) !important;font-size:15.5px !important;line-height:1.68 !important;max-width:52ch !important;}
.lv-eq-content p strong{color:var(--lv-text) !important;font-weight:700 !important;}
.lv-eq-statement{position:relative !important;margin:clamp(10px,1.6vw,16px) 0 0 0 !important;padding-top:clamp(20px,2.6vw,28px) !important;font-family:var(--lv-font-head) !important;font-size:clamp(19px,2.2vw,26px) !important;line-height:1.38 !important;max-width:38ch !important;}
.lv-eq-statement::before{content:"" !important;position:absolute !important;top:0 !important;left:0 !important;width:42px !important;height:1px !important;background:var(--lv-accent) !important;}
@media (max-width:860px){.lv-eq-grid{grid-template-columns:1fr !important;}.lv-eq-media{max-width:520px !important;margin:0 auto !important;}.lv-eq-content{text-align:center !important;}.lv-eq-content h2,.lv-eq-content p,.lv-eq-statement{margin-left:auto !important;margin-right:auto !important;}.lv-eq-statement::before{left:50% !important;transform:translateX(-50%) !important;}}
</style>
<div class="lv-frame">
  <div class="lv-eq-grid">
    <div class="lv-eq-media"><img src="{{URL_FOTO_EQUIPO}}" alt="{{ALT_EQUIPO}}" width="{{FOTO_W}}" height="{{FOTO_H}}" loading="lazy" decoding="async"></div>
    <div class="lv-eq-content">
      <h2>{{AUTORIDAD_TITULO}} <em>{{AUTORIDAD_TITULO_DESTACADO}}</em></h2>
      <p>{{AUTORIDAD_P1}}</p>
      <p>{{AUTORIDAD_P2}}</p>
      <p class="lv-eq-statement">{{AUTORIDAD_STATEMENT}} <em>{{AUTORIDAD_STATEMENT_DESTACADO}}</em></p>
    </div>
  </div>
</div>
</section>
```

---

## 7. FAQ — acordeón accesible (incluí 1 pregunta que descalifica al no-cliente)
```html
<section class="lv-band" id="lv-faq">
<style>
.lv-fq-wrap{max-width:780px !important;margin:0 auto !important;padding:var(--lv-pad-y) 5% !important;}
.lv-fq-title{text-align:center !important;font-size:clamp(27px,3.8vw,46px) !important;margin:0 auto clamp(18px,2.6vw,30px) auto !important;max-width:22ch !important;}
.lv-fq-list{border-top:1px solid var(--lv-line-accent) !important;}
.lv-fq-item{border-bottom:1px solid var(--lv-line-accent) !important;}
.lv-fq-q{width:100% !important;display:flex !important;align-items:center !important;justify-content:space-between !important;gap:14px !important;background:none !important;border:0 !important;cursor:pointer !important;text-align:left !important;padding:clamp(17px,2.2vw,23px) 0 !important;color:var(--lv-text-dim) !important;transition:color .25s ease !important;font-family:var(--lv-font-head) !important;}
.lv-fq-q-txt{flex:1 1 auto !important;min-width:0 !important;overflow-wrap:anywhere !important;font-family:var(--lv-font-head) !important;font-size:clamp(16px,1.8vw,20px) !important;line-height:1.3 !important;color:inherit !important;}
.lv-fq-q:hover,.lv-fq-item.is-open .lv-fq-q{color:var(--lv-text) !important;}
.lv-fq-q:focus-visible{outline:2px solid var(--lv-accent-soft) !important;outline-offset:2px !important;}
.lv-fq-icon{position:relative !important;flex:0 0 auto !important;width:18px !important;height:18px !important;}
.lv-fq-icon::before,.lv-fq-icon::after{content:"" !important;position:absolute !important;background:var(--lv-accent-soft) !important;border-radius:2px !important;transition:transform .35s var(--lv-ease) !important;}
.lv-fq-icon::before{top:50% !important;left:0 !important;width:100% !important;height:1.6px !important;transform:translateY(-50%) !important;}
.lv-fq-icon::after{left:50% !important;top:0 !important;width:1.6px !important;height:100% !important;transform:translateX(-50%) !important;}
.lv-fq-item.is-open .lv-fq-icon::after{transform:translateX(-50%) scaleY(0) !important;}
.lv-fq-a-wrap{display:grid !important;grid-template-rows:0fr !important;transition:grid-template-rows .4s var(--lv-ease) !important;}
.lv-fq-item.is-open .lv-fq-a-wrap{grid-template-rows:1fr !important;}
.lv-fq-a{overflow:hidden !important;min-height:0 !important;}
.lv-fq-a p{margin:0 !important;color:var(--lv-text-dim) !important;font-size:14.5px !important;line-height:1.66 !important;padding:0 32px clamp(18px,2.2vw,24px) 0 !important;}
@media (prefers-reduced-motion:reduce){.lv-fq-a-wrap,.lv-fq-icon::before,.lv-fq-icon::after{transition:none !important;}}
@media (max-width:560px){.lv-fq-wrap{padding:24px 16px 32px 16px !important;}.lv-fq-a p{padding-right:20px !important;}}
</style>
<div class="lv-fq-wrap">
  <h2 class="lv-fq-title">{{FAQ_TITULO}} <em>{{FAQ_TITULO_DESTACADO}}</em></h2>
  <div class="lv-fq-list">
    <div class="lv-fq-item"><button class="lv-fq-q" type="button" aria-expanded="false"><span class="lv-fq-q-txt">{{FAQ_1_Q}}</span><span class="lv-fq-icon" aria-hidden="true"></span></button><div class="lv-fq-a-wrap"><div class="lv-fq-a"><p>{{FAQ_1_A}}</p></div></div></div>
    <div class="lv-fq-item"><button class="lv-fq-q" type="button" aria-expanded="false"><span class="lv-fq-q-txt">{{FAQ_2_Q}}</span><span class="lv-fq-icon" aria-hidden="true"></span></button><div class="lv-fq-a-wrap"><div class="lv-fq-a"><p>{{FAQ_2_A}}</p></div></div></div>
    <!-- Repetí por cada FAQ real. OBLIGATORIA: al menos 1 que delimite quién NO es cliente ideal. -->
  </div>
</div>
<script>
(function(){var r=document.getElementById('lv-faq');if(!r)return;r.querySelectorAll('.lv-fq-q').forEach(function(b){b.addEventListener('click',function(){var i=b.closest('.lv-fq-item');var o=i.classList.toggle('is-open');b.setAttribute('aria-expanded',o?'true':'false');});});})();
</script>
</section>
```

---

## 8. CIERRE + CTA FINAL — recap + statement + CTA (el más prominente)
```html
<section class="lv-band" style="background:radial-gradient(110% 70% at 50% 110%,color-mix(in srgb,var(--lv-accent) 12%,transparent),transparent 60%),var(--lv-bg) !important;">
<style>
.lv-ci-wrap{max-width:720px !important;margin:0 auto !important;padding:var(--lv-pad-y) 5% !important;display:flex !important;flex-direction:column !important;align-items:center !important;text-align:center !important;}
.lv-ci-title{font-size:clamp(28px,4vw,48px) !important;margin:0 auto clamp(16px,2.2vw,24px) auto !important;max-width:18ch !important;}
.lv-ci-p{max-width:54ch !important;margin:0 auto 14px auto !important;color:var(--lv-text-dim) !important;font-size:16px !important;line-height:1.66 !important;}
.lv-ci-p strong{color:var(--lv-text) !important;font-weight:700 !important;}
.lv-ci-statement{position:relative !important;max-width:32ch !important;margin:clamp(20px,2.6vw,28px) auto 0 auto !important;padding-top:clamp(20px,2.6vw,28px) !important;font-family:var(--lv-font-head) !important;font-size:clamp(19px,2.3vw,27px) !important;line-height:1.36 !important;}
.lv-ci-statement::before{content:"" !important;position:absolute !important;top:0 !important;left:50% !important;transform:translateX(-50%) !important;width:42px !important;height:1px !important;background:var(--lv-accent) !important;}
.lv-ci-cta-wrap{margin-top:clamp(28px,3.4vw,38px) !important;width:100% !important;}
.lv-ci-reassure{margin:14px 0 0 0 !important;color:var(--lv-accent-soft) !important;font-size:12px !important;font-weight:600 !important;letter-spacing:.06em !important;text-transform:uppercase !important;}
@media (max-width:560px){.lv-ci-wrap{padding:24px 16px 32px 16px !important;}.lv-ci-cta-wrap .lv-cta{width:100% !important;}}
</style>
<div class="lv-ci-wrap">
  <h2 class="lv-ci-title">{{CIERRE_TITULO}} <em>{{CIERRE_TITULO_DESTACADO}}</em></h2>
  <p class="lv-ci-p">{{CIERRE_PARRAFO}}</p>
  <p class="lv-ci-statement">{{CIERRE_STATEMENT}} <em>{{CIERRE_STATEMENT_DESTACADO}}</em></p>
  <div class="lv-ci-cta-wrap"><a class="lv-cta" href="#lv-form"><span>{{TEXTO_CTA_FINAL}}</span><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a><p class="lv-ci-reassure">{{CIERRE_REASSURE}}</p></div>
</div>
</section>
```

---

Nota: el **footer** (copyright + legales) va aparte, en su propio widget al final (podés reusar el de otras skills). Todos los CTA de la página apuntan a `#lv-form`.
