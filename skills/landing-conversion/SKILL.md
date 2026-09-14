---
name: landing-conversion
description: "Maqueta en HTML/CSS (para widgets de Elementor/WordPress) una landing de conversión de respuesta directa siguiendo el esqueleto maestro de 18 bloques (0-17): Header solo-logo, Hero (headline + 3 bullets + CTA + quita-miedos), franja de logos, Punto de Dolor (PAS), Prueba Social repetida ×3, Value Props ×3 alternadas, Diferenciadores (grid o tabla comparativa), Cómo Funciona (3 pasos), Equipo y Garantía opcionales, Formulario de captura (Tally), FAQ, Recap final con cierre, Footer. El COPY lo aporta el usuario (normalmente su GPT de copy); esta skill NO redacta copy ni inventa datos — lo coloca en los esqueletos, bloque por bloque. También funciona en MODO AUDITORÍA: si se le pasa una landing ya hecha (HTML, archivo o URL) y se pide revisarla, corregirla, mejorarla o saber qué está mal, la audita contra sus propias reglas y devuelve el diagnóstico priorizado más los bloques corregidos completos; NUNCA pregunta al usuario qué cambiar, porque el criterio está en la skill. Usar cuando el usuario quiera maquetar una landing de conversión/B2B con esta estructura. No usar para la landing B2B de pain/gain duplicado + avatar (esa es landing-b2b-alto-ticket)."
---


> 📐 **PARÁMETROS DE COPY DE LANDING, CON SU FUENTE:** `../fundamentos-copy/references/parametros-landing.md`. Ahí están una sola vez y **con la fuente de cada una** las reglas que antes estaban repartidas y desiguales entre las 9 skills de landing: frases ≤15 palabras · párrafos ≤2 oraciones · **prohibido el guion largo (—)** · el titular responde «¿por qué me importa?» · **2-3 testimonios reales** y nunca en carrusel en móvil · **nunca «sin compromiso» ni «gratis»** bajo el CTA · y **qué cifras NO están en las fuentes** (los umbrales de Core Web Vitals y el impacto de la velocidad en conversión: si alguien las cita como dato propio, es una alucinación).
# Landing de Conversión — maquetador (el copy lo pones tú)

Esta skill ARMA la estructura HTML/CSS de una landing de conversión de **18 bloques (0-17)** para pegar en widgets HTML de Elementor. **NO escribe copy.** El usuario entrega los textos (bloque por bloque, normalmente desde su GPT de copy); la skill los coloca en los esqueletos y devuelve el HTML listo. **Nunca inventes copy, titulares, testimonios, cifras, plazos, garantías ni datos de competidores:** si falta el texto de un bloque, pídelo.

Los 18 bloques espejan 1:1 la estructura de copy del usuario, así el flujo GPT→copy y Claude→HTML encaja perfecto.

**Referencia visual:** los wireframes de la estructura (2 versiones × desktop/mobile) están en `referencias/estructura-01..04.webp` (dentro de la carpeta de esta skill). Si tenés dudas de dónde va cada bloque o cómo se ve el layout, abrilas con la herramienta Read. Son la fuente del orden y las variantes (form en hero vs imagen, grid vs tabla comparativa, etc.).

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

## Rol y perspectiva

Quien usa la landing es la marca/empresa que ofrece el producto o servicio; la landing le habla al cliente potencial (2ª persona). El copy lo define el usuario con esa voz.

## Paso 0 — antes de maquetar, consigue

> **Antes de preguntar nada:** si el usuario tiene un **brief o manual de marca** (.docx, .pdf, .md), pedíle la ruta y leelo — de ahí salen colores, fuentes, logo y tono sin hacerle repetir nada.
> ```bash
> textutil -convert txt -stdout "brief.docx"
> python3 -c "import fitz;d=fitz.open('brief.pdf');print(chr(10).join(p.get_text() for p in d))"
> ```
> Después preguntá **solo lo que no esté ahí**. Lo que casi nunca aparece en un manual: plataforma de destino, `{{TALLY_FORM_ID}}` y si hay VSL.



**Marca (para el CSS):** colores (acento, acento oscuro, fondo suave, fondo de cierre/marca, footer, texto, texto secundario), fuentes Google (titulares y cuerpo), logo (normal + blanco para footer), imágenes (hero, dolor, value props, equipo).

**Config (variantes — definí antes del Bloque 0):**

**⚡ Plataforma (PREGUNTÁ ESTO PRIMERO — cambia detalles del código):** ¿la landing se construye en **Elementor** (widget "HTML") o **Gutenberg** (bloque "HTML personalizado")? No lo asumas. Ver "Nota por plataforma" al final del Paso 0.

1. **Formulario = Tally (siempre).** Modo: **embed inline** (bloque de formulario dedicado, Bloque 14, al que anclan todos los CTA) *o* **popup**. Pedí el **`{{TALLY_FORM_ID}}`**. Default: **embed inline**.
2. **Hero visual:** VSL (video de Panda, player directo) *o* imagen. Default: imagen. **El hero NUNCA lleva formulario embebido.**
3. **Franja de logos** bajo el hero: sí/no (default: sí, si hay logos reales).
4. **Diferenciadores (Bloque 9):** grid de 6 *o* tabla comparativa (tu marca vs competidores). Default: tabla si hay 2+ competidores reales; si no, grid.
5. **Opcionales:** Equipo (11) y Garantía (12) — solo si el usuario confirma que aplican y son reales.
6. **Cantidad de Prueba Social:** por defecto 3 apariciones (bloques 4, 8, 13). Si hay poca prueba social real, reducí a lo que haya — nunca inventes ni repitas el mismo cliente.

No bloquees el flujo por un dato menor: asumí un default razonable, decilo y seguí. Pausá solo si falta el copy de un bloque, la marca/colores, las imágenes, el `{{TALLY_FORM_ID}}`, o una variante central.

**Nota por plataforma (afecta cómo se pega y algún detalle del CSS):**
- **Elementor:** cada bloque = un widget "HTML". Pediles/recordá poner el **padding de la Sección y Columna de Elementor en 0** (el ancho full-bleed y el aire los maneja `.lp-band` + `--lp-pad-y`, no Elementor). El Bloque Maestro va en el primer widget.
- **Gutenberg:** cada bloque = un bloque **"HTML personalizado"**. El full-bleed `100vw` ya rompe el ancho del contenido; si el tema igual lo recorta, seteá el bloque como **"Ancho completo"**. Es **más liviano que Elementor** (mejor velocidad de carga) — recomendalo si la prioridad es PageSpeed y el diseño es 100% este HTML.
- En ambos: el HTML es el mismo; solo cambia dónde se pega y el ajuste de padding/ancho del contenedor del editor.

## Flujo de trabajo (18 bloques, uno por uno)

Orden: 0) Header (solo-logo) · 1) Hero · 2) Franja de logos (opc) · 3) Punto de Dolor · 4) Prueba Social #1 · 5) Value Prop #1 · 6) Value Prop #2 · 7) Value Prop #3 · 8) Prueba Social #2 · 9) Diferenciadores · 10) Cómo Funciona (3 pasos) · 11) Equipo (opc) · 12) Garantía (opc) · 13) Prueba Social #3 (opc) · 14) Formulario (Tally) · 15) FAQ · 16) Recap + Cierre · 17) Footer.

El **Bloque Maestro** (tokens + helpers + JS + script de Tally) va DENTRO del widget del Header (Bloque 0) y se pega una sola vez. Los bloques 1-17 solo usan sus clases.

**No hay navbar con menú ni CTA ni teléfono. El header es SOLO el logo centrado.** (Regla fija del usuario, aunque el wireframe muestre tel/CTA.)

Por cada bloque:
1. Toma el copy que dio el usuario para ese bloque.
2. Rellena los `{{PLACEHOLDER}}` con ese copy + variables de marca, respetando el fondo alternado.
3. **Aplicá el acabado de las 3 skills de diseño** (emil-design-eng · impeccable · design-taste-frontend). No opcional: sin esto queda básico.
4. **Ofrecé opciones antes de entregar (secciones visuales):** mostrá **2-4 variantes de diseño** (distintos layouts/estéticas, misma estructura) como previews con la marca, para que el usuario ELIJA. Nunca entregues una sola versión "a ciegas". (Header/Maestro/Formulario son estructurales → sin variantes.)
5. Con la variante elegida, entregá el bloque HTML completo (```html) listo para un widget HTML de Elementor. No uses artifact.
6. Preguntá "¿Continúo con el siguiente bloque?" y no avances sin confirmación.

### Qué texto/dato pide cada bloque

- **0 Header:** solo el logo (marca). Sin menú, sin tel, sin CTA.

> **⛔ REGLA DEL HERO CON VSL (no negociable).** Si el hero lleva **vídeo**, el hero **NO es de dos columnas**: es **una sola columna centrada** y el vídeo va **a todo el ancho del contenedor** (máx. ~900px), debajo del subheadline. Un VSL en una columna lateral del 48% mata la reproducción: el trabajo entero de la página es que le den al play.
>
> - **Con VSL:** añadí la clase `lp-hero--vsl` al `.lp-hero`. Orden: `H1` → `subheadline` → **VÍDEO grande y centrado** → `CTA` → micro-FUD. Sin bullets (el vídeo hace ese trabajo).
> - **Con imagen:** hero de dos columnas normal (texto izquierda, imagen derecha) con sus 3 bullets.
>
> Nunca al revés. El vídeo manda sobre el layout.


- **1 Hero:** `H1` (con palabra clave en `<mark>`), `SUBHEADLINE`, **3 `BULLET_BENEFICIO`** (con check — **SOLO si el hero es sin video; con VSL se OMITEN**), `TEXTO_CTA_HERO`, **`MICRO_FUD`** (línea corta bajo el CTA: garantía/"sin compromiso"/"respuesta en 24h"), y visual (VSL `URL_EMBED_VSL` de Panda **o** `URL_IMAGEN_HERO`).
- **2 Franja de logos (opc):** `MICROTEXTO` + N× (`URL_LOGO_CLIENTE` [+ `CITA` si es prensa]).
- **3 Punto de Dolor (PAS):** `TITULO_DOLOR`, cuerpo PAS (`APERTURA` + 3× `PREGUNTA_DOLOR`, `PARRAFO_PROBLEMA`, `PARRAFO_AGITAR`, `PARRAFO_RESOLVER`), imagen opcional, `TEXTO_CTA`.
- **4 · 8 · 13 Prueba Social:** `ENCABEZADO`, 3× tarjeta (`CITA_TESTIMONIO` + `NOMBRE` + `URL_FOTO` + `FUENTE` **o** `VALOR_METRICA`/`ETIQUETA` **o** mini-caso), `TEXTO_CTA`. Solo real.
- **5-7 Value Prop #1/#2/#3:** por bloque: `TITULO_VALUE_PROP` (WIIFM), `PARRAFO`, `URL_IMAGEN` + `ALT`, `TEXTO_CTA`. Alternan img/texto.
- **9 Diferenciadores:** `TITULO`, y según variante: **grid** 6× (`TITULO_DIF` + `LINEA`) **o** **tabla** (`TU_MARCA` vs `COMPETIDOR_1..5`, filas `CRITERIO` con ✓/✗/parcial), `TEXTO_CTA`.
- **10 Cómo Funciona:** `TITULO`, **EXACTAMENTE 3** pasos (`NUMERO`, `TITULO_PASO`, `DESC`), `TEXTO_CTA`, `MICRO_FUD`.
- **11 Equipo (opc):** `TITULO`, `PARRAFO`, `URL_IMAGEN_EQUIPO`, `TEXTO_CTA`.
- **12 Garantía (opc):** `TITULO_GARANTIA`, `PARRAFO`, `TEXTO_CTA`.
- **14 Formulario:** `TITULO_FORM` (orientado a valor, no "Contactanos"), `MICRO_FUD`. El form es Tally (`{{TALLY_FORM_ID}}`); en modo embed es un bloque propio con `id="lp-form"`.
- **15 FAQ:** `TITULO`, 6× (`PREGUNTA`/`RESPUESTA`).
- **16 Recap + Cierre:** `TITULO_RECAP`, 3× `BULLET_VALUE_PROP`, **`DESGLOSE_OFERTA`** (todo lo que incluye — ilusión del esfuerzo), **`LINEA_PERDIDA`** (qué se pierde por no actuar — aversión a la pérdida, solo con datos reales), `TEXTO_CTA_FINAL`, `MICRO_FUD`.
- **17 Footer:** logo blanco + descargo (no afiliación Meta/Google) + copyright. Sin enlaces legales.

**CTAs (todos al MISMO destino = el formulario):** todos usan `{{CTA_HREF}}`, que se define una vez en Paso 0 según el modo:
- **Embed inline:** `{{CTA_HREF}}` = `#lp-form` (ancla al Bloque 14; scroll suave nativo).
- **Popup:** `{{CTA_HREF}}` = `#tally-open={{TALLY_FORM_ID}}&tally-layout=modal&tally-width=550&tally-hide-title=1&tally-form-events-forwarding=1`.
Solo cambia el TEXTO según el momento (siempre "qué gana el prospecto", nunca presión). **Quita-miedos (`MICRO_FUD`) debajo de los CTA principales** (Hero, Cómo Funciona, Recap). El estilo del botón (icono/flecha, etc.) lo decide la marca/las skills de diseño — NO es un default forzado.

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

## Reglas de arquitectura de código (obligatorias)

1. **`!important` en TODA declaración CSS, en CADA bloque.** Elementor/WP pisan lo que no lo tenga → landing rota (causa nº1 de fallos). Si una declaración está en un `<style>` de un bloque, lleva `!important` (font-size, color, margin, padding, display, grid, flex, width, text-align, etc.), también dentro de `@media`. Excepciones: `@keyframes` y tokens de `:root`.
2. **Ancho por token, no `100vw` en el contenido.** Full-bleed = `.lp-band`; contenido = `.lp-frame`. El maestro trae `html,body{overflow-x:clip;max-width:100%}` → por eso el header va `relative`, no `sticky`.
3. **Espaciado con `clamp()`**, nunca px fijos. Compacto entre secciones (`--lp-pad-y`) pero **con respiro generoso adentro** (aire = confianza / fluidez cognitiva). No agregues `margin` arriba/abajo de las `.lp-band`.
4. **"Define una vez":** tokens, helpers, CTA, `mark`, script de Tally y JS en el Bloque Maestro.
5. **JS propio, con scope, sin librerías:** IIFE, guard `data-lp-ready`, delegación. FAQ con `<details>` nativo.
6. **NO incluir** Pixel de Meta, GTM, jQuery ni scripts de plugins (salvo el de Tally).
7. **Fondos alternados** `.lp-band--alt`/`--close`/`--footer` — nunca dos secciones seguidas iguales.

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

## Rendimiento (obligatorias)
- **LCP:** el H1/logo del hero; `fetchpriority="high"` al logo, jamás `loading="lazy"` arriba.
- **Nada de `opacity:0`** para ocultar; contenido siempre visible. Microinteracción solo `transform`/`box-shadow` en hover.
- **Video VSL:** player directo de Panda (`<iframe>`), sin poster ni facade. **Params predeterminados SIEMPRE** en el `src` (van con `&` porque el embed de Panda ya trae `?v=ID`): `&muted=true&autoplay=true&mutedIndicatorIcon=true&mutedIndicatorClickRestart=true&saveProgress=false` → arranca autoplay mudo con aviso "tocá para activar sonido"; al tocarlo REINICIA de 0; no guarda progreso entre visitas (cada visitante empieza de cero). Sin `loading="lazy"` (el autoplay necesita cargar el player).
- **CLS 0:** **TODO `<img>` lleva `width` y `height`** con el ratio real — Lighthouse lo exige aunque el contenedor tenga `aspect-ratio`. Contenedores de media con `aspect-ratio`. Below-the-fold `loading="lazy"`; todas `decoding="async"`. Serví la imagen al tamaño de display (no una de 828px para mostrarla a 368px).
- **Fuente + preconnect: UNA sola vez** en el Bloque Maestro. NUNCA repitas el `<link>` de Google Fonts ni los `<link rel="preconnect">` por sección (cada duplicado penaliza el rendimiento). Pedí solo los pesos que usás.
- **Prueba social NUNCA en carrusel/dropdown en mobile:** siempre visible.
- **A11y:** inputs con `aria-label`; FAQ con `<details>`; `lang="es"` en el `<html>`. Todo `<span>`/ícono con `aria-label` (ej. estrellas de rating) lleva **`role="img"`**. Jerarquía de headings SIN saltos: un solo `h1`, secciones en `h2`, nunca arrancar una sección en `h3`. **Contraste WCAG:** nunca texto en **color de acento sobre fondo de acento** (ej. amarillo sobre magenta); sobre fondo de color usá blanco o tinta oscura; texto chico ≥ 4.5:1.

## Diseño visual (obligatorias)
- **Espaciado limpio (Apple): NADA pegado.** Aire deliberado e intencional, ni bandas vacías gigantes ni todo apelotonado. Ritmo de sección = `--lp-pad-y` (`clamp(40px,5vw,72px)`). **Aire interno generoso:** separá el título del contenido (≥`--lp-gap`), gap consistente entre elementos, párrafos con `line-height` cómodo (~1.6). La jerarquía se construye con **espacio + peso**, no apretando todo. Usá **gap de flex** para el ritmo vertical, no márgenes (los resets del maestro matan los `margin` de bloque). Simplicidad, no minimalismo: cada elemento respira.
- **Coherencia de jerarquía por espaciado (regla de raíz — error frecuente):** el hueco entre bloques (título→subtítulo, subtítulo→CTA) debe ser **SIEMPRE ≥ el interlineado interno del título**. El interlineado de títulos display está definido UNA vez en el maestro (`.lp-band h1`=1.05, `.lp-band h2`=1.1) y los títulos de sección lo heredan — **no lo redefinas por bloque** (nada de `line-height:1.2` sueltos). Nunca dejes un título con `line-height` mayor que su `margin` inferior, porque las líneas del título parecen más separadas que el título del subtítulo (se ve incoherente). El resaltado `<mark>` va con caja fina, que no infle la altura de línea.
- **Elevación premium (7 refs top coinciden — Apple/Linear/Stripe/Resend/etc.):** la profundidad viene de **borde hairline (`--lp-line`) + tinte de fondo + sombra sutil (`--lp-shadow`)**, NUNCA de glow o sombra pesada (se ve barato/template). El **acento va SOLO en la acción** (CTA/estado activo), nunca como decoración ni relleno grande.
- **Tipografía y feedback (Apple):** tracking **size-specific** (títulos grandes apretados `~-.025em`, cuerpo `~0`), leading corto en títulos y aireado en cuerpo (`1.6`); jerarquía por **peso + tamaño**, no por título gigante. Botones con feedback de press (`:active` scale). Ya está en el maestro — no lo rompas.
- **Header:** solo logo centrado, ancho completo. Sin menú/tel/CTA.
- **PROHIBIDO eyebrow/kicker/badge/micro-etiqueta arriba de CUALQUIER título** (ni nombre de sección, ni badge de audiencia, ni tag sobre value props). Ningún brief lo justifica (impeccable). Cada título arranca solo; el peso lo lleva el título.
- **Títulos:** usan el ancho, máx ~2 líneas, jerarquía por peso/tamaño (no por título gigante). El H1 del hero es el título más grande (claramente sobre los H2, sin ser inmenso). Palabra clave en `<mark>` (estilo definido UNA vez en el maestro → consistente en toda la landing; menú marcador/color/subrayado/caja; NO siempre "color").
- **Escaneable:** frases cortas, negrita en lo clave, bullets con check, mucho aire. Cada headline comunica el beneficio solo.
- **Jerarquía y halo:** el hero se ve premium (contamina la percepción de toda la página). Layout limpio, tipografía y color consistentes.
- **Contraste WCAG AA:** texto oscuro sobre claro; blanco solo sobre oscuro/marca.
- **Value props / dolor:** filas alternadas img/texto, simétricas, imagen que representa LITERALMENTE el resultado, no decorativa.

## Diseño: aplica las 3 skills de acabado (OBLIGATORIO)
⚠️ Claude Code no encadena skills solo. Al inicio, activá `emil-design-eng`, `impeccable` y `design-taste-frontend` (Skill tool o leyendo su `SKILL.md`) y mantené sus principios en todo el proceso. En cada bloque (paso 3) pasá el esqueleto por las tres. No es aceptable entregar tipografía sin jerarquía, todo plano, cards sin hover, sin `:focus-visible`, colores sin intención. Si alguna no está instalada, avisá al usuario. Restricción dura: pueden cambiar el acabado, NUNCA la arquitectura funcional (full-bleed, tokens `--lp-*`, `.lp-frame`, formulario Tally, `!important`, rendimiento).

## Correcciones y cambios a mitad
- **Correcciones = SIEMPRE la sección COMPLETA, nunca parcial.** Devolvé el HTML entero de esa sección (todo el `<section>` con su `<style>`), listo para reemplazar el widget. Nunca un fragmento ni un diff.
- Si el cambio es de marca/color, ofrecé propagarlo a los bloques ya entregados.

---

# ESQUELETOS HTML

Rellena los `{{PLACEHOLDER}}`. Prefijo de clases: `lp-`. `{{CTA_HREF}}` se define en Paso 0.

## BLOQUE MAESTRO + HEADER — van DENTRO del widget del Bloque 0 (se pega una sola vez)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family={{GOOGLE_FONT_TITULARES_URL}}&family={{GOOGLE_FONT_CUERPO_URL}}&display=swap">
<style>
html,body{overflow-x:clip !important;max-width:100% !important;}
html{scroll-behavior:smooth;}
:root{
  --lp-accent:{{COLOR_ACENTO_HEX}};
  --lp-accent-dk:{{COLOR_ACENTO_OSCURO_HEX}};
  --lp-bg:#ffffff;
  --lp-bg-alt:{{COLOR_FONDO_SUAVE_HEX}};
  --lp-bg-close:{{COLOR_CIERRE_HEX}};
  --lp-footer-bg:{{COLOR_FOOTER_HEX}};
  --lp-text:{{COLOR_TEXTO_HEX}};
  --lp-text-dim:{{COLOR_TEXTO_SECUNDARIO_HEX}};
  --lp-line:rgba(0,0,0,.10);
  --lp-font-head:'{{GOOGLE_FONT_TITULARES}}',sans-serif;
  --lp-font-body:'{{GOOGLE_FONT_CUERPO}}',sans-serif;
  --lp-frame:min(1120px, calc(100vw - 40px));
  --lp-narrow:min(760px, calc(100vw - 40px));
  --lp-ease:cubic-bezier(.16,1,.3,1);
  --lp-shadow:0 1px 2px rgba(0,0,0,.05),0 10px 28px -20px rgba(0,0,0,.14);      /* elevación "premium whisper": sutil, no glow. Profundidad real = borde hairline + esta sombra */
  --lp-shadow-sm:0 1px 2px rgba(0,0,0,.05),0 6px 16px -14px rgba(0,0,0,.11);
  --lp-radius:14px;
  --lp-measure:66ch;                                /* ancho máx de lectura (~60-66 caracteres) para prosa larga; evita líneas infinitas en pantallas anchas */
  --lp-pad-y:clamp(40px,5vw,72px);                  /* ritmo de sección limpio (Apple): aire, sin vacío. Compacto ≠ apretado. */
  --lp-gap:clamp(16px,2.4vw,28px);                  /* respiro interno base (título→contenido, entre elementos) */
}
.lp-band,.lp-band *{box-sizing:border-box !important;}
.lp-band{font-family:var(--lp-font-body) !important;color:var(--lp-text) !important;line-height:1.6 !important;-webkit-font-smoothing:antialiased !important;}
.lp-band img{max-width:100% !important;height:auto !important;display:block !important;}
.lp-band ul{list-style:none !important;margin:0 !important;padding:0 !important;}
.lp-band p{margin:0 !important;}
/* Tipografía Apple: tracking y leading SIZE-SPECIFIC (títulos grandes más apretados y con leading corto; cuerpo aireado). */
.lp-band h1,.lp-band h2,.lp-band h3,.lp-band h4{margin:0 !important;font-family:var(--lp-font-head) !important;text-transform:none !important;overflow-wrap:break-word !important;}
.lp-band h1{line-height:1.05 !important;letter-spacing:-.025em !important;}
.lp-band h2{line-height:1.1 !important;letter-spacing:-.015em !important;}
.lp-band h3,.lp-band h4{line-height:1.25 !important;letter-spacing:-.005em !important;}
.lp-band p,.lp-band li{line-height:1.6 !important;}
/* ===== DESTACADO DE TÍTULOS (envolvé la palabra clave con <mark>). Definido UNA vez = consistente. Elegí UN estilo, no siempre "color". ===== */
.lp-band mark{background:linear-gradient(180deg,transparent 63%,color-mix(in srgb,var(--lp-accent) 26%,transparent) 63%,color-mix(in srgb,var(--lp-accent) 26%,transparent) 90%,transparent 90%) !important;color:inherit !important;padding:0 .05em !important;-webkit-box-decoration-break:clone !important;box-decoration-break:clone !important;}
/* [COLOR]     .lp-band mark{background:none !important;color:var(--lp-accent) !important;} */
/* [SUBRAYADO] .lp-band mark{background:none !important;color:inherit !important;box-shadow:inset 0 -.12em 0 var(--lp-accent) !important;} */
/* [CAJA]      .lp-band mark{background:color-mix(in srgb,var(--lp-accent) 14%,transparent) !important;color:var(--lp-accent) !important;border-radius:5px !important;padding:0 .26em !important;} */
.lp-band a:not(.lp-cta){text-decoration:none !important;color:inherit !important;}
.lp-band a{text-decoration:none !important;}
.lp-band button{font-family:inherit !important;cursor:pointer !important;border:none !important;background:none !important;}
.lp-band :focus-visible{outline:2px solid var(--lp-accent) !important;outline-offset:3px !important;border-radius:4px !important;}
.lp-band{position:relative !important;width:100vw !important;margin-left:calc(50% - 50vw) !important;margin-right:calc(50% - 50vw) !important;padding:var(--lp-pad-y) 20px !important;background:var(--lp-bg) !important;scroll-margin-top:20px !important;}
.lp-band--alt{background:var(--lp-bg-alt) !important;}
.lp-band--close{background:var(--lp-bg-close) !important;}
.lp-band--footer{background:var(--lp-footer-bg) !important;}
.lp-frame{width:var(--lp-frame) !important;margin-inline:auto !important;}
.lp-narrow{width:var(--lp-narrow) !important;margin-inline:auto !important;}
/* ===== HEADER (solo logo centrado) ===== */
.lp-nav{position:relative !important;z-index:100 !important;width:100vw !important;margin-left:calc(50% - 50vw) !important;margin-right:calc(50% - 50vw) !important;background:var(--lp-bg) !important;border-bottom:1px solid var(--lp-line) !important;padding:14px 16px !important;text-align:center !important;}
.lp-nav img{height:44px !important;width:auto !important;margin:0 auto !important;display:block !important;}
/* ===== BOTÓN CTA. El icono/flecha es OPCIONAL (según la marca; por defecto SIN icono). ===== */
.lp-cta{display:inline-flex !important;align-items:center !important;justify-content:center !important;gap:10px !important;min-height:56px !important;padding:16px 36px !important;background:var(--lp-accent) !important;color:#fff !important;border-radius:12px !important;font-family:var(--lp-font-head) !important;font-weight:700 !important;font-size:15.5px !important;letter-spacing:.2px !important;box-shadow:var(--lp-shadow) !important;transition:transform .25s var(--lp-ease),box-shadow .25s var(--lp-ease),background .2s !important;white-space:nowrap !important;}
.lp-cta:hover{transform:translateY(-2px) !important;background:var(--lp-accent-dk) !important;box-shadow:0 24px 54px -20px color-mix(in srgb,var(--lp-accent) 55%,transparent) !important;}
.lp-cta:active{transform:translateY(0) scale(.98) !important;}
.lp-cta svg{width:18px !important;height:18px !important;stroke:#fff !important;stroke-width:2.4 !important;fill:none !important;transition:transform .25s var(--lp-ease) !important;}
.lp-cta:hover svg{transform:translateX(4px) !important;}
/* ===== MICRO QUITA-MIEDOS (FUD) bajo el CTA ===== */
.lp-fud{display:flex !important;flex-wrap:wrap !important;justify-content:center !important;gap:8px 18px !important;margin-top:16px !important;font-size:14px !important;color:var(--lp-text-dim) !important;}
.lp-fud span{display:inline-flex !important;align-items:center !important;gap:6px !important;}
.lp-fud span::before{content:'✓' !important;color:var(--lp-accent) !important;font-weight:800 !important;}
/* ===== REDUCED MOTION ===== */
@media (prefers-reduced-motion: reduce){
  html{scroll-behavior:auto !important;}
  .lp-band *,.lp-band *::before,.lp-band *::after{transition-duration:.001ms !important;animation-duration:.001ms !important;}
}
</style>
<nav class="lp-nav"><img src="{{URL_LOGO}}" alt="{{NOMBRE_MARCA}}" width="160" height="44" fetchpriority="high" decoding="async"></nav>
<!-- Formulario: 100% Tally. Script una sola vez. Sirve para embed inline y para popup. -->
<!-- preconnect: calienta la conexión a Tally para que el form NO tarde en cargar al llegar a su sección -->
<link rel="preconnect" href="https://tally.so" crossorigin>
<link rel="dns-prefetch" href="https://tally.so">
<script async src="https://tally.so/widgets/embed.js"></script>
<script>
/* Tally popup (solo si algún CTA usa #tally-open) — anti-intercepción de Elementor. En modo embed no hace falta (los CTA son anclas nativas #lp-form). */
(function(){
  function ready(fn){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',fn):fn();}
  function init(){
    var root=document.documentElement;
    if(root.getAttribute('data-lp-ready')==='1') return;
    root.setAttribute('data-lp-ready','1');
    document.addEventListener('click',function(e){
      var cta=e.target.closest('a[href*="tally-open"]');
      if(!cta) return;
      e.preventDefault(); e.stopPropagation();
      var m=cta.getAttribute('href').match(/tally-open=([^&]+)/); var id=m?m[1]:''; if(!id) return;
      function open(){ if(window.Tally) Tally.openPopup(id,{layout:'modal',width:550,hideTitle:true}); }
      if(window.Tally){ open(); } else { var s=document.createElement('script'); s.src='https://tally.so/widgets/embed.js'; s.onload=open; document.head.appendChild(s); }
    },true);
  }
  ready(init);
})();
</script>
```
Nota Header: solo logo centrado. Sin menú, sin teléfono, sin CTA. (Aunque el wireframe muestre tel/CTA, va solo logo.)

## 1. HERO (2 columnas: texto + 3 bullets + CTA + FUD · visual al lado) · blanco

Orden CON IMAGEN: H1 → subheadline → 3 bullets con check → CTA → micro-FUD, con la imagen al lado (dos columnas).
Orden CON VSL: H1 → subheadline → VÍDEO centrado a todo el ancho → CTA → micro-FUD, en UNA columna (clase `lp-hero--vsl`), sin bullets. El hero NUNCA lleva formulario. **Sin eyebrow/badge sobre el título.**

```html
<section class="lp-band lp-hero-sec">
<style>
.lp-hero-sec{position:relative !important;overflow:hidden !important;}
.lp-hero-sec::before{content:'' !important;position:absolute !important;left:50% !important;top:-8% !important;width:min(1100px,120%) !important;height:560px !important;transform:translateX(-50%) !important;background:radial-gradient(60% 55% at 50% 22%,color-mix(in srgb,var(--lp-accent) 13%,transparent),color-mix(in srgb,var(--lp-accent) 4%,transparent) 45%,transparent 70%) !important;pointer-events:none !important;z-index:0 !important;}
.lp-hero{position:relative !important;z-index:1 !important;display:grid !important;grid-template-columns:1.05fr .95fr !important;gap:clamp(28px,4vw,56px) !important;align-items:center !important;}
/* HERO CON VSL: una sola columna, centrado. El vídeo es el protagonista,
   nunca una columna lateral. Se activa añadiendo .lp-hero--vsl al .lp-hero */
.lp-hero--vsl{grid-template-columns:1fr !important;max-width:900px !important;margin:0 auto !important;text-align:center !important;}
.lp-hero--vsl .lp-hero-copy{max-width:none !important;}
.lp-hero--vsl .lp-hero-media{aspect-ratio:16/9 !important;width:100% !important;margin-top:clamp(20px,3vw,32px) !important;}
.lp-hero--vsl .lp-hero-actions{justify-content:center !important;}
.lp-hero--vsl .lp-hero-actions .lp-fud{justify-content:center !important;}
.lp-hero-h1{font-size:clamp(30px,3.6vw,46px) !important;color:var(--lp-text) !important;font-weight:800 !important;letter-spacing:-.02em !important;margin:0 0 26px !important;text-wrap:balance !important;}
.lp-hero-sub{color:var(--lp-text-dim) !important;font-size:clamp(17px,1.7vw,20px) !important;line-height:1.6 !important;margin:0 0 28px !important;}
.lp-hero-bullets li{display:flex !important;align-items:flex-start !important;gap:10px !important;font-size:15px !important;color:var(--lp-text) !important;font-weight:600 !important;margin-bottom:10px !important;}
.lp-hero-bullets li::before{content:'✓' !important;color:var(--lp-accent) !important;font-weight:800 !important;flex-shrink:0 !important;}
.lp-hero-actions{margin-top:24px !important;}
.lp-hero-media{position:relative !important;border-radius:18px !important;overflow:hidden !important;background:#000 !important;aspect-ratio:16/10 !important;border:1px solid color-mix(in srgb,var(--lp-accent) 12%,transparent) !important;box-shadow:0 1px 3px rgba(0,0,0,.06),0 24px 50px -34px rgba(0,0,0,.32) !important;}
.lp-hero-media iframe,.lp-hero-media img{position:absolute !important;inset:0 !important;width:100% !important;height:100% !important;border:0 !important;object-fit:cover !important;}
@media(max-width:860px){.lp-hero{grid-template-columns:1fr !important;text-align:center !important;}.lp-hero-bullets li{justify-content:center !important;text-align:left !important;}.lp-hero-actions .lp-fud{justify-content:center !important;}}
</style>
<div class="lp-frame lp-hero">
  <div class="lp-hero-text">
    <h1 class="lp-hero-h1">{{H1_LINEA_1}} <mark>{{H1_DESTACADO}}</mark></h1>
    <p class="lp-hero-sub">{{SUBHEADLINE}}</p>
    <!-- 3 bullets: SOLO si el hero es SIN video (imagen). Si HAY VSL, OMITÍ este <ul> entero (el video hace ese trabajo). -->
    <ul class="lp-hero-bullets">
      <li>{{BULLET_BENEFICIO_1}}</li>
      <li>{{BULLET_BENEFICIO_2}}</li>
      <li>{{BULLET_BENEFICIO_3}}</li>
    </ul>
    <div class="lp-hero-actions">
      <a class="lp-cta" href="{{CTA_HREF}}">{{TEXTO_CTA_HERO}}</a>
      <div class="lp-fud"><span>{{MICRO_FUD_1}}</span><span>{{MICRO_FUD_2}}</span></div>
    </div>
  </div>
  <!-- VISUAL: VSL de Panda (player directo) O imagen. Elegí uno.
       {{URL_EMBED_VSL}} = URL de embed BASE de Panda (con ?v=ID). Los params de abajo van SIEMPRE (predeterminado):
       arranca en autoplay MUDO con el aviso "tocá para activar sonido"; al tocarlo, el video REINICIA desde 0
       (mutedIndicatorClickRestart) y no guarda progreso entre visitas (saveProgress=false → cada visitante empieza de cero). -->
  <div class="lp-hero-media">
    <iframe src="{{URL_EMBED_VSL}}&muted=true&autoplay=true&mutedIndicatorIcon=true&mutedIndicatorClickRestart=true&saveProgress=false" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowfullscreen="true" title="Video"></iframe>
    <!-- o: <img src="{{URL_IMAGEN_HERO}}" alt="{{ALT}}" width="640" height="400" fetchpriority="high" decoding="async"> -->
  </div>
</div>
</section>
```
Nota: el visual muestra LITERALMENTE el resultado soñado. Micro-FUD = garantía / "sin compromiso" / "respuesta en 24h".

## 2. FRANJA DE LOGOS (opcional) · alt

```html
<section class="lp-band lp-band--alt" style="padding-block:clamp(20px,2.5vw,30px) !important;">
<style>
.lp-logos{text-align:center !important;}
.lp-logos-txt{font-size:12.5px !important;text-transform:uppercase !important;letter-spacing:.12em !important;color:var(--lp-text-dim) !important;margin-bottom:16px !important;}
.lp-logos-row{display:flex !important;flex-wrap:wrap !important;align-items:center !important;justify-content:center !important;gap:clamp(20px,4vw,48px) !important;}
.lp-logos-row img{height:28px !important;width:auto !important;opacity:.7 !important;filter:grayscale(1) !important;}
</style>
<div class="lp-frame lp-logos">
  <p class="lp-logos-txt">{{MICROTEXTO_LOGOS}}</p>
  <div class="lp-logos-row">
    <!-- N logos reales -->
    <img src="{{URL_LOGO_CLIENTE}}" alt="{{NOMBRE}}" width="140" height="40" loading="lazy" decoding="async">
  </div>
</div>
</section>
```
Nota: si hay logos de prensa, sumá al lado una cita real de esa publicación (un logo pelado erosiona confianza). Si no hay logos reales, omití el bloque.

## 3. PUNTO DE DOLOR (Problem-Agitate-Solve) · blanco

```html
<section class="lp-band">
<style>
.lp-pain{display:grid !important;grid-template-columns:1.1fr .9fr !important;gap:clamp(28px,4vw,52px) !important;align-items:center !important;}
.lp-pain-h2{font-size:clamp(24px,3.2vw,34px) !important;color:var(--lp-text) !important;font-weight:800 !important;margin:0 0 18px !important;}
.lp-pain-body p{color:var(--lp-text-dim) !important;font-size:16px !important;line-height:1.7 !important;margin:0 0 14px !important;max-width:var(--lp-measure) !important;}
.lp-pain-body strong{color:var(--lp-text) !important;}
.lp-pain-q li{display:flex !important;gap:10px !important;font-size:15px !important;color:var(--lp-text) !important;line-height:1.5 !important;margin-bottom:10px !important;font-weight:600 !important;}
.lp-pain-q li::before{content:'✕' !important;color:var(--lp-accent) !important;font-weight:800 !important;flex-shrink:0 !important;}
.lp-pain-media{border-radius:var(--lp-radius) !important;overflow:hidden !important;aspect-ratio:4/5 !important;box-shadow:var(--lp-shadow) !important;}
.lp-pain-media img{width:100% !important;height:100% !important;object-fit:cover !important;}
.lp-pain-cta{margin-top:26px !important;}
@media(max-width:820px){.lp-pain{grid-template-columns:1fr !important;}}
</style>
<div class="lp-frame lp-pain">
  <div class="lp-pain-text">
    <h2 class="lp-pain-h2">{{TITULO_DOLOR}}</h2>
    <div class="lp-pain-body">
      <p>{{APERTURA}}</p>
      <ul class="lp-pain-q">
        <li>{{PREGUNTA_DOLOR_1}}</li>
        <li>{{PREGUNTA_DOLOR_2}}</li>
        <li>{{PREGUNTA_DOLOR_3}}</li>
      </ul>
      <p>{{PARRAFO_AGITAR}}</p>
      <p>{{PARRAFO_RESOLVER}}</p>
    </div>
    <div class="lp-pain-cta"><a class="lp-cta" href="{{CTA_HREF}}">{{TEXTO_CTA_DOLOR}}</a></div>
  </div>
  <!-- imagen/video opcional -->
  <div class="lp-pain-media"><img src="{{URL_IMAGEN_DOLOR}}" alt="{{ALT}}" width="480" height="600" loading="lazy" decoding="async"></div>
</div>
</section>
```

## 4 · 8 · 13 PRUEBA SOCIAL (3 tarjetas + CTA) — mismo esqueleto, hasta 3 apariciones · alt / blanco / alt

Bloque 4 fondo `--alt`, Bloque 8 blanco, Bloque 13 `--alt`. Cada aparición con elementos REALES distintos. Nunca inventes ni repitas el mismo cliente.

```html
<section class="lp-band lp-band--alt">
<style>
.lp-sp-h2{text-align:center !important;font-size:clamp(23px,3.2vw,32px) !important;color:var(--lp-text) !important;font-weight:800 !important;margin:0 0 30px !important;}
.lp-sp-grid{display:grid !important;grid-template-columns:repeat(3,1fr) !important;gap:18px !important;}
.lp-sp-card{background:#fff !important;border:1px solid var(--lp-line) !important;border-radius:var(--lp-radius) !important;padding:24px 22px !important;box-shadow:var(--lp-shadow-sm) !important;display:flex !important;flex-direction:column !important;gap:14px !important;}
.lp-sp-quote{font-size:14.5px !important;color:var(--lp-text) !important;line-height:1.6 !important;font-style:italic !important;}
.lp-sp-author{display:flex !important;align-items:center !important;gap:10px !important;margin-top:auto !important;}
.lp-sp-author img{width:40px !important;height:40px !important;border-radius:50% !important;object-fit:cover !important;flex-shrink:0 !important;}
.lp-sp-author b{display:block !important;font-size:13.5px !important;color:var(--lp-text) !important;}
.lp-sp-author span{font-size:12px !important;color:var(--lp-text-dim) !important;}
.lp-sp-cta{text-align:center !important;margin-top:30px !important;}
@media(max-width:820px){.lp-sp-grid{grid-template-columns:1fr !important;}}
</style>
<div class="lp-frame">
  <h2 class="lp-sp-h2">{{ENCABEZADO_PRUEBA_SOCIAL}}</h2>
  <div class="lp-sp-grid">
    <!-- 3 tarjetas reales (testimonio con foto+nombre+fuente, stat o mini-caso) -->
    <div class="lp-sp-card">
      <p class="lp-sp-quote">"{{CITA_TESTIMONIO}}"</p>
      <div class="lp-sp-author"><img src="{{URL_FOTO}}" alt="{{NOMBRE}}" width="48" height="48" loading="lazy" decoding="async"><span><b>{{NOMBRE}}</b>{{FUENTE}}</span></div>
    </div>
  </div>
  <div class="lp-sp-cta"><a class="lp-cta" href="{{CTA_HREF}}">{{TEXTO_CTA}}</a></div>
</div>
</section>
```

## 5 · 6 · 7 VALUE PROP + GRAN BENEFICIO (WIIFM) — mismo esqueleto, 3 usos alternados

**Texto SIEMPRE primero en el DOM** (móvil texto→imagen). Bloque 5 img IZQ (`lp-vp--imgleft`, fondo blanco), Bloque 6 img DER (sin modifier, `--alt`), Bloque 7 img IZQ (`lp-vp--imgleft`, blanco). Estilo compartido va en el Bloque 5.

```html
<section class="lp-band">
<style>
.lp-vp{display:grid !important;grid-template-columns:1fr 1fr !important;gap:clamp(26px,4vw,56px) !important;align-items:center !important;}
.lp-vp-h2{font-size:clamp(23px,3vw,32px) !important;color:var(--lp-text) !important;font-weight:800 !important;margin:0 0 14px !important;}
.lp-vp-p{color:var(--lp-text-dim) !important;font-size:16px !important;line-height:1.7 !important;margin:0 0 22px !important;}
.lp-vp-media{border-radius:var(--lp-radius) !important;overflow:hidden !important;aspect-ratio:4/3 !important;box-shadow:var(--lp-shadow) !important;}
.lp-vp-media img{width:100% !important;height:100% !important;object-fit:cover !important;}
@media(min-width:821px){.lp-vp--imgleft .lp-vp-media{order:-1 !important;}}
@media(max-width:820px){.lp-vp{grid-template-columns:1fr !important;}}
</style>
<div class="lp-frame lp-vp lp-vp--imgleft">
  <div class="lp-vp-text">
    <h2 class="lp-vp-h2">{{TITULO_VALUE_PROP}}</h2>
    <p class="lp-vp-p">{{PARRAFO}}</p>
    <a class="lp-cta" href="{{CTA_HREF}}">{{TEXTO_CTA}}</a>
  </div>
  <div class="lp-vp-media"><img src="{{URL_IMAGEN}}" alt="{{ALT}}" loading="lazy" decoding="async" width="600" height="450"></div>
</div>
</section>
```
Bloque 6 (invertido, `--alt`): `<section class="lp-band lp-band--alt"><div class="lp-frame lp-vp">…</div></section>` (sin `lp-vp--imgleft` → imagen a la derecha). Bloque 7: como el 5.

## 9. DIFERENCIADORES (variante A grid · variante B tabla) · alt

**Variante A — grid de 6:**
```html
<section class="lp-band lp-band--alt">
<style>
.lp-dif-h2{text-align:center !important;font-size:clamp(23px,3.2vw,32px) !important;color:var(--lp-text) !important;font-weight:800 !important;margin:0 0 clamp(26px,4vw,40px) !important;max-width:22ch !important;margin-inline:auto !important;}
.lp-dif-grid{display:grid !important;grid-template-columns:repeat(3,1fr) !important;gap:16px !important;}
.lp-dif-card{background:#fff !important;border:1px solid var(--lp-line) !important;border-radius:var(--lp-radius) !important;padding:24px 20px !important;box-shadow:var(--lp-shadow-sm) !important;transition:transform .22s var(--lp-ease),box-shadow .22s var(--lp-ease) !important;}
.lp-dif-card:hover{transform:translateY(-3px) !important;box-shadow:var(--lp-shadow) !important;}
.lp-dif-card h3{font-size:16px !important;color:var(--lp-text) !important;margin:0 0 8px !important;font-weight:700 !important;}
.lp-dif-card p{font-size:14px !important;color:var(--lp-text-dim) !important;line-height:1.55 !important;}
.lp-dif-cta{text-align:center !important;margin-top:30px !important;}
@media(max-width:820px){.lp-dif-grid{grid-template-columns:1fr 1fr !important;}}
@media(max-width:520px){.lp-dif-grid{grid-template-columns:1fr !important;}}
</style>
<div class="lp-frame">
  <h2 class="lp-dif-h2">{{TITULO_DIFERENCIADORES}}</h2>
  <div class="lp-dif-grid">
    <!-- EXACTAMENTE 6 -->
    <div class="lp-dif-card"><h3>{{TITULO_DIF}}</h3><p>{{LINEA_DIF}}</p></div>
  </div>
  <div class="lp-dif-cta"><a class="lp-cta" href="{{CTA_HREF}}">{{TEXTO_CTA}}</a></div>
</div>
</section>
```

**Variante B — tabla comparativa (tu marca vs hasta 5 competidores):**
```html
<section class="lp-band lp-band--alt">
<style>
.lp-cmp-h2{text-align:center !important;font-size:clamp(23px,3.2vw,32px) !important;color:var(--lp-text) !important;font-weight:800 !important;margin:0 0 10px !important;}
.lp-cmp-hint{text-align:center !important;font-size:12px !important;color:var(--lp-text-dim) !important;margin:0 0 18px !important;display:none !important;}
.lp-cmp-wrap{overflow-x:auto !important;-webkit-overflow-scrolling:touch !important;border-radius:var(--lp-radius) !important;box-shadow:var(--lp-shadow-sm) !important;}
.lp-cmp{width:100% !important;border-collapse:collapse !important;background:#fff !important;min-width:620px !important;}
.lp-cmp th,.lp-cmp td{padding:14px 16px !important;text-align:center !important;border-bottom:1px solid var(--lp-line) !important;font-size:14px !important;}
.lp-cmp th{background:var(--lp-text) !important;color:#fff !important;font-weight:700 !important;}
.lp-cmp th.mine,.lp-cmp td.mine{background:color-mix(in srgb,var(--lp-accent) 8%,#fff) !important;}
.lp-cmp th.mine{background:var(--lp-accent) !important;}
.lp-cmp th:first-child,.lp-cmp td:first-child{text-align:left !important;color:var(--lp-text) !important;font-weight:600 !important;}
.lp-cmp td.mine{color:var(--lp-accent) !important;font-weight:800 !important;}
.lp-cmp tr:last-child td{border-bottom:none !important;}
.lp-cmp-cta{text-align:center !important;margin-top:24px !important;}
@media(max-width:660px){.lp-cmp-hint{display:block !important;}}
</style>
<div class="lp-frame">
  <h2 class="lp-cmp-h2">{{TITULO_DIFERENCIADORES}}</h2>
  <p class="lp-cmp-hint">← deslizá para ver más →</p>
  <div class="lp-cmp-wrap">
    <table class="lp-cmp">
      <thead><tr><th>{{CRITERIO}}</th><th class="mine">{{TU_MARCA}}</th><th>{{COMPETIDOR_1}}</th><th>{{COMPETIDOR_2}}</th></tr></thead>
      <tbody>
        <!-- una fila por criterio; ✓ / ✕ / "parcial"; nunca inventes qué tiene un competidor (si no está confirmado, "no confirmado") -->
        <tr><td>{{CRITERIO_FILA}}</td><td class="mine">✓</td><td>✕</td><td>✕</td></tr>
      </tbody>
    </table>
  </div>
  <div class="lp-cmp-cta"><a class="lp-cta" href="{{CTA_HREF}}">{{TEXTO_CTA}}</a></div>
</div>
</section>
```

## 10. CÓMO FUNCIONA (EXACTAMENTE 3 pasos) + CTA + FUD · blanco

```html
<section class="lp-band">
<style>
.lp-hiw-h2{text-align:center !important;font-size:clamp(23px,3.2vw,32px) !important;color:var(--lp-text) !important;font-weight:800 !important;margin:0 0 clamp(28px,4vw,42px) !important;max-width:24ch !important;margin-inline:auto !important;}
.lp-hiw-grid{display:grid !important;grid-template-columns:repeat(3,1fr) !important;gap:20px !important;}
.lp-hiw-step{text-align:center !important;padding:0 10px !important;}
.lp-hiw-num{width:54px !important;height:54px !important;border-radius:50% !important;background:var(--lp-accent) !important;color:#fff !important;display:flex !important;align-items:center !important;justify-content:center !important;font-weight:800 !important;font-family:var(--lp-font-head) !important;font-size:22px !important;margin:0 auto 16px !important;}
.lp-hiw-step h3{font-size:17px !important;color:var(--lp-text) !important;font-weight:700 !important;margin:0 0 8px !important;}
.lp-hiw-step p{font-size:14px !important;color:var(--lp-text-dim) !important;line-height:1.6 !important;}
.lp-hiw-cta{text-align:center !important;margin-top:36px !important;}
@media(max-width:760px){.lp-hiw-grid{grid-template-columns:1fr !important;}}
</style>
<div class="lp-frame">
  <h2 class="lp-hiw-h2">{{TITULO_COMO_FUNCIONA}}</h2>
  <div class="lp-hiw-grid">
    <div class="lp-hiw-step"><div class="lp-hiw-num">1</div><h3>{{TITULO_PASO_1}}</h3><p>{{DESC_PASO_1}}</p></div>
    <div class="lp-hiw-step"><div class="lp-hiw-num">2</div><h3>{{TITULO_PASO_2}}</h3><p>{{DESC_PASO_2}}</p></div>
    <div class="lp-hiw-step"><div class="lp-hiw-num">3</div><h3>{{TITULO_PASO_3}}</h3><p>{{DESC_PASO_3}}</p></div>
  </div>
  <div class="lp-hiw-cta">
    <a class="lp-cta" href="{{CTA_HREF}}">{{TEXTO_CTA}}</a>
    <div class="lp-fud"><span>{{MICRO_FUD_1}}</span><span>{{MICRO_FUD_2}}</span></div>
  </div>
</div>
</section>
```
Nota: NUNCA más de 3 pasos (agrupá en 3 fases macro si hace falta).

## 11. EQUIPO (opcional) · alt

```html
<section class="lp-band lp-band--alt">
<style>
.lp-team{display:grid !important;grid-template-columns:1fr .85fr !important;gap:clamp(28px,4vw,48px) !important;align-items:center !important;}
.lp-team-h2{font-size:clamp(23px,3vw,32px) !important;color:var(--lp-text) !important;font-weight:800 !important;margin:0 0 16px !important;}
.lp-team-p{color:var(--lp-text-dim) !important;font-size:16px !important;line-height:1.75 !important;margin:0 0 22px !important;}
.lp-team-img{border-radius:var(--lp-radius) !important;overflow:hidden !important;aspect-ratio:4/3 !important;box-shadow:var(--lp-shadow) !important;}
.lp-team-img img{width:100% !important;height:100% !important;object-fit:cover !important;}
@media(max-width:820px){.lp-team{grid-template-columns:1fr !important;}}
</style>
<div class="lp-frame lp-team">
  <div><h2 class="lp-team-h2">{{TITULO_EQUIPO}}</h2><p class="lp-team-p">{{PARRAFO_EQUIPO}}</p><a class="lp-cta" href="{{CTA_HREF}}">{{TEXTO_CTA}}</a></div>
  <div class="lp-team-img"><img src="{{URL_IMAGEN_EQUIPO}}" alt="{{ALT}}" width="600" height="450" loading="lazy" decoding="async"></div>
</div>
</section>
```

## 12. GARANTÍA (opcional, solo si es real) · blanco

```html
<section class="lp-band" style="text-align:center !important;">
<style>
.lp-guar{width:min(680px,100%) !important;margin-inline:auto !important;background:color-mix(in srgb,var(--lp-accent) 7%,#fff) !important;border:1px solid color-mix(in srgb,var(--lp-accent) 22%,transparent) !important;border-radius:18px !important;padding:clamp(30px,4vw,44px) !important;}
.lp-guar h2{font-size:clamp(22px,3vw,30px) !important;color:var(--lp-text) !important;font-weight:800 !important;margin:0 0 14px !important;}
.lp-guar p{color:var(--lp-text-dim) !important;font-size:16px !important;line-height:1.7 !important;margin:0 0 22px !important;}
</style>
<div class="lp-frame"><div class="lp-guar"><h2>{{TITULO_GARANTIA}}</h2><p>{{PARRAFO_GARANTIA}}</p><a class="lp-cta" href="{{CTA_HREF}}">{{TEXTO_CTA}}</a></div></div>
</section>
```

## 14. FORMULARIO DE CAPTURA (Tally) — modo EMBED (default) · alt

Bloque dedicado con `id="lp-form"`; todos los CTA de la página anclan acá (`{{CTA_HREF}}` = `#lp-form`). Tally embed inline (el script del maestro lo autocarga). **Carga prolija:** el `preconnect` del maestro calienta la conexión a Tally → el form carga rápido al llegar a la sección. Sin `loading="lazy"` (el observer de Tally ya precarga a 500px, ahora con la conexión lista).

```html
<section class="lp-band lp-band--alt" id="lp-form" style="text-align:center !important;">
<style>
.lp-form-box{width:min(620px,100%) !important;margin-inline:auto !important;background:#fff !important;border:1px solid var(--lp-line) !important;border-radius:18px !important;padding:clamp(26px,3.5vw,40px) !important;box-shadow:var(--lp-shadow) !important;}
.lp-form-box h2{font-size:clamp(22px,3vw,30px) !important;color:var(--lp-text) !important;font-weight:800 !important;margin:0 0 8px !important;}
.lp-form-box .lp-fud{margin-top:16px !important;}
.lp-form-box iframe{width:100% !important;border:0 !important;}
</style>
<div class="lp-frame">
  <div class="lp-form-box">
    <h2>{{TITULO_FORM}}</h2>
    <iframe data-tally-src="https://tally.so/embed/{{TALLY_FORM_ID}}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" width="100%" loading="lazy" height="550" frameborder="0" marginheight="0" marginwidth="0" title="{{TITULO_FORM}}"></iframe>
    <div class="lp-fud"><span>{{MICRO_FUD_1}}</span><span>{{MICRO_FUD_2}}</span></div>
  </div>
</div>
</section>
```
**Modo POPUP (alternativa):** si en Paso 0 se eligió popup, OMITÍ este bloque y usá `{{CTA_HREF}}` = `#tally-open={{TALLY_FORM_ID}}&tally-layout=modal&tally-width=550&tally-hide-title=1&tally-form-events-forwarding=1` en todos los CTA (el JS del maestro abre el popup).

## 15. FAQ (acordeón, 6 preguntas) · blanco

```html
<section class="lp-band">
<style>
.lp-faq-h2{text-align:center !important;font-size:clamp(23px,3.2vw,32px) !important;color:var(--lp-text) !important;font-weight:800 !important;margin:0 0 30px !important;}
.lp-faq-list{width:min(780px,100%) !important;margin-inline:auto !important;display:grid !important;gap:10px !important;}
.lp-faq-item{background:var(--lp-bg-alt) !important;border:1px solid var(--lp-line) !important;border-radius:10px !important;overflow:hidden !important;}
.lp-faq-item summary{cursor:pointer !important;padding:16px 20px !important;font-weight:700 !important;color:var(--lp-text) !important;font-size:15px !important;list-style:none !important;display:flex !important;justify-content:space-between !important;gap:12px !important;}
.lp-faq-item summary::-webkit-details-marker{display:none !important;}
.lp-faq-item summary::after{content:'+' !important;color:var(--lp-accent) !important;font-size:22px !important;line-height:1 !important;}
.lp-faq-item[open] summary::after{content:'−' !important;}
.lp-faq-item p{padding:0 20px 18px !important;color:var(--lp-text-dim) !important;font-size:14px !important;line-height:1.65 !important;max-width:var(--lp-measure) !important;}
</style>
<div class="lp-frame">
  <h2 class="lp-faq-h2">{{TITULO_FAQ}}</h2>
  <div class="lp-faq-list">
    <!-- 6 -->
    <details class="lp-faq-item"><summary>{{PREGUNTA}}</summary><p>{{RESPUESTA}}</p></details>
  </div>
</div>
</section>
```

## 16. RECAP FINAL + CIERRE (desglose de oferta + aversión a la pérdida) · close

```html
<section class="lp-band lp-band--close" style="text-align:center !important;">
<style>
.lp-recap-h2{color:#fff !important;font-size:clamp(26px,4vw,42px) !important;font-weight:800 !important;max-width:800px !important;margin:0 auto 22px !important;}
.lp-recap-bullets{display:inline-flex !important;flex-direction:column !important;gap:10px !important;text-align:left !important;margin:0 auto 24px !important;}
.lp-recap-bullets li{display:flex !important;gap:10px !important;color:#fff !important;font-size:16px !important;font-weight:600 !important;}
.lp-recap-bullets li::before{content:'✓' !important;color:#fff !important;font-weight:800 !important;}
.lp-recap-incluye{background:rgba(255,255,255,.10) !important;border:1px solid rgba(255,255,255,.18) !important;border-radius:var(--lp-radius) !important;padding:20px 24px !important;max-width:640px !important;margin:0 auto 22px !important;text-align:left !important;}
.lp-recap-incluye b{color:#fff !important;display:block !important;margin-bottom:8px !important;}
.lp-recap-incluye p{color:rgba(255,255,255,.82) !important;font-size:14.5px !important;line-height:1.7 !important;}
.lp-recap-perdida{color:#fff !important;font-weight:700 !important;font-size:16px !important;max-width:640px !important;margin:0 auto 26px !important;}
.lp-recap .lp-cta{background:#fff !important;color:var(--lp-bg-close) !important;}
.lp-recap .lp-cta:hover{background:#fff !important;}
.lp-recap .lp-fud{color:rgba(255,255,255,.8) !important;}
.lp-recap .lp-fud span::before{color:#fff !important;}
</style>
<div class="lp-frame lp-recap">
  <h2 class="lp-recap-h2">{{TITULO_RECAP}}</h2>
  <ul class="lp-recap-bullets">
    <li>{{BULLET_VALUE_PROP_1}}</li>
    <li>{{BULLET_VALUE_PROP_2}}</li>
    <li>{{BULLET_VALUE_PROP_3}}</li>
  </ul>
  <!-- Ilusión del esfuerzo: desglosá TODO lo que incluye -->
  <div class="lp-recap-incluye"><b>Todo lo que incluye:</b><p>{{DESGLOSE_OFERTA}}</p></div>
  <!-- Aversión a la pérdida (solo con datos reales) -->
  <p class="lp-recap-perdida">{{LINEA_PERDIDA}}</p>
  <a class="lp-cta" href="{{CTA_HREF}}">{{TEXTO_CTA_FINAL}}</a>
  <div class="lp-fud"><span>{{MICRO_FUD_1}}</span><span>{{MICRO_FUD_2}}</span></div>
</div>
</section>
```

## 17. FOOTER · oscuro-2

Footer de landing de tráfico pago: logo + descargo (no afiliación Meta/Google/YouTube) + copyright. SIN enlaces legales.

```html
<footer class="lp-band lp-band--footer" style="text-align:center !important;padding-block:30px !important;">
<style>
.lp-footer-inner img{height:26px !important;margin:0 auto 16px !important;}
.lp-footer-disc{color:rgba(255,255,255,.5) !important;font-size:12px !important;line-height:1.7 !important;max-width:780px !important;margin:0 auto !important;}
.lp-footer-copy{color:rgba(255,255,255,.35) !important;font-size:11.5px !important;line-height:1.6 !important;margin-top:14px !important;}
</style>
<div class="lp-frame lp-footer-inner">
  <img src="{{URL_LOGO_BLANCO}}" alt="{{NOMBRE_MARCA}}" width="140" height="40">
  <p class="lp-footer-disc">Este sitio no forma parte de Facebook ni de Meta Platforms, Inc., y tampoco está avalado por Meta de ninguna manera. FACEBOOK e INSTAGRAM son marcas registradas de Meta Platforms, Inc. Este sitio tampoco forma parte de Google ni de YouTube, ni está avalado por Google LLC; GOOGLE y YOUTUBE son marcas registradas de Google LLC.</p>
  <p class="lp-footer-copy">© {{AÑO}} {{NOMBRE_MARCA}}. Todos los derechos reservados.</p>
</div>
</footer>
```
