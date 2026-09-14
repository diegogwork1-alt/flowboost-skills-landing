---
name: landing-b2b-index-html
description: Flujo COMPLETO 2-en-1 para una landing B2B de alto ticket (servicios profesionales: legal, consultoría, agencias, asesorías) que entrega UN SOLO archivo index.html listo para desplegar, no widgets de Elementor. Sección por sección escribe primero el COPY (Ogilvy + Ecuación de Valor + Life Force 8 + PAS duplicado) y, tras la aprobación, la maqueta; al final ensambla todo en un index.html completo. Copy más corto y escaneable que la versión Elementor, con dolores concretos y resultados soñados destacados. También funciona en MODO AUDITORÍA: si se le pasa una landing ya hecha (HTML, archivo o URL) y se pide revisarla, corregirla, mejorarla o saber qué está mal, la audita contra sus propias reglas y devuelve el diagnóstico priorizado más los bloques corregidos completos; NUNCA pregunta al usuario qué cambiar, porque el criterio está en la skill. Usar cuando el usuario quiera la landing como archivo único para publicar (se encadena con publicar-landing). Para widgets de Elementor usar landing-b2b-copy-html.
---


> 📐 **PARÁMETROS DE COPY DE LANDING, CON SU FUENTE:** `../fundamentos-copy/references/parametros-landing.md`. Ahí están una sola vez y **con la fuente de cada una** las reglas que antes estaban repartidas y desiguales entre las 9 skills de landing: frases ≤15 palabras · párrafos ≤2 oraciones · **prohibido el guion largo (—)** · el titular responde «¿por qué me importa?» · **2-3 testimonios reales** y nunca en carrusel en móvil · **nunca «sin compromiso» ni «gratis»** bajo el CTA · y **qué cifras NO están en las fuentes** (los umbrales de Core Web Vitals y el impacto de la velocidad en conversión: si alguien las cita como dato propio, es una alucinación).
# Landing B2B alto ticket — Copy + index.html (2 en 1, con aprobación por sección)

**ENTREGA FINAL: UN SOLO `index.html` autocontenido**, no widgets de Elementor. Se construye igual, sección por sección con aprobación, y al terminar se ensambla todo (ver `ENSAMBLADO FINAL` al final del archivo). El bloque maestro pasa al `<head>` real.

**IMPORTANTE: TODO lo que necesitás está EN ESTE MISMO ARCHIVO, más abajo. NO leas archivos externos.** Cuando las instrucciones de abajo mencionen "ESTRUCTURA-B2B-PAINGAIN.md" u "ogilvy-principios.md", esos contenidos están INCLUIDOS abajo (secciones "ESTRUCTURA" y "PRINCIPIOS DE OGILVY").

> **⛔ ANTES DE ESCRIBIR NADA: leé la sección `ERRORES YA COMETIDOS — PROHIBIDO REINCIDIR` al final de este archivo (E1 a E26 (**el rango decía «E1 a E21» y los errores llegan hasta E26**: los más recientes —sistema visual paralelo, velo del hero, scroll, carrusel, títulos de sección— quedaban fuera de lo que el agente tenía que leer. Y ojo: **el mismo error tiene código distinto en cada skill**, así que «cumple E24» no significa nada entre ficheros: se cita el error por su TÍTULO, no por su número)).** Son fallos reales detectados en producción, con su causa técnica. El más grave es **E1 (especificidad)**: los resets del maestro pisan cualquier clase suelta, así que TODA regla de bloque lleva dos clases. Re-leé esa sección antes de entregar cada bloque; si choca con un esqueleto de más arriba, gana la sección de errores.

> ## ⛔ PASO −1 · COMPUERTA DE DISEÑO (antes de escribir una sola línea)
>
> **Claude Code NO encadena skills solo.** Si no las activás a mano, el resultado sale básico: tipografía sin jerarquía, todo plano, cards sin estados, color sin intención. Es el fallo más repetido de esta skill.
>
> **Antes del Paso 0, invocá con la tool Skill, en este orden:**
> 1. `impeccable` — suelo de calidad y prohibiciones (kickers, plantilla de cifras, cards genéricas)
> 2. `design-taste-frontend` — dirección visual, que no parezca plantilla
> 3. `emil-design-eng` — detalle fino: estados, motion, микro-interacción
>
> Si alguna no está instalada, **decíselo al usuario** y seguí con las que haya.
>
> **En CADA bloque, antes de entregarlo, pasalo por las tres.** No es un adorno final: es parte de generar el bloque.
>
> **Restricción dura:** pueden cambiar el ACABADO, nunca la ARQUITECTURA funcional (full-bleed, tokens, `.lp-frame`/`.lc-frame`, formulario Tally, `!important`, rendimiento, orden de bloques).
>
> **Antes de entregar, auditá el resultado.** Si podés responder que sí a alguna de estas, no terminaste:
> - ¿Todos los títulos tienen el mismo peso visual? (falta jerarquía)
> - ¿Todas las secciones tienen el mismo fondo y el mismo padding? (falta ritmo)
> - ¿Los botones y las cards no cambian al pasar el ratón? (falta estado)
> - ¿El color de acento aparece como decoración en bloques grandes? (el acento es SOLO acción)
> - ¿Hay `:focus-visible` en todo lo interactivo? (si no, es inaccesible)

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

## FLUJO OBLIGATORIO (sección por sección)
1. **PASO 0 — Pedí el BRIEF, no interrogues.** El usuario ya tiene briefs escritos: pedile el archivo (.docx/.pdf/.md o texto), leelo, y preguntá SOLO por lo que falte (ver PARTE A · Paso 0). Sumá lo que casi nunca está en un brief: `{{TALLY_FORM_ID}}`, colores/fuentes de marca y si hay urgencia real con fecha. No avances sin servicio/audiencia, promesa central y a qué perfil apunta.
2. **Por CADA sección, en orden (ver MAPA):**
   - **a) COPY:** generá el copy de esa sección aplicando el MOTOR DE COPY + las reglas del bloque (PARTE A + ESTRUCTURA). Cerrá con la justificación breve de Ogilvy.
   - **b) PARÁ y preguntá:** "¿Aprobás este copy, querés ajustes, o paso al HTML?" — NO generes HTML todavía.
   - **c) Si aprueba:** generá el HTML de esa sección con el bloque correspondiente de PARTE B, insertando el copy aprobado en los placeholders, respetando TODAS sus reglas (`!important` en cada declaración, tokens `--lc-*`, rendimiento, elevación, `width/height` en imgs, etc.).
   - **d) PARÁ y preguntá:** "¿Seguimos con la próxima sección?"
3. Nunca entregues el HTML de una sección sin el copy aprobado. Nunca mezcles dos secciones en un mensaje sin permiso.

## MAPA DE SECCIONES (copy ↔ maqueta)
El copy usa 11 bloques (0-10); la maqueta usa 10 (0-9) porque funde el Header dentro del Hero. Alineá por SECCIÓN:

| Sección | Bloque COPY | Bloque HTML (maqueta) |
|---|---|---|
| Barra de urgencia | 0 | 0 |
| Header (marca/logo) | 1 | (dentro del Hero, bloque 1 — logo centrado) |
| Hero | 2 | 1 |
| Pain vs Gain Ronda 1 | 3 | 2 |
| Pain vs Gain Ronda 2 + Avatar | 4 | 3 |
| Proceso | 5 | 4 |
| Prueba social | 6 | 5 |
| Autoridad | 7 | 6 |
| FAQ | 8 | 7 |
| Cierre + CTA final | 9 | 8 |
| Footer | 10 | 9 |

- El copy del Header (bloque 1) se coloca junto al logo DENTRO del Hero de la maqueta.
- Si una regla de copy y una de maqueta chocan: copy manda sobre el TEXTO, maqueta sobre ESTRUCTURA/HTML.
- Nunca inventes datos (testimonios, cifras, fechas, garantías); usá placeholders explícitos.

---

## E22 · SISTEMA VISUAL PARALELO: el fallo que hace que "todo esté mal"

**Detectado en producción (landing CADI, y el propio agente lo diagnosticó al final):** se montó tokens propios, otra tipografía, ancho de 1120 y secciones full-bleed, cuando el cliente ya tenía un sistema (contenedor de 750 px en tarjeta blanca sobre gris, su stack tipográfico, sus patrones `.typ-*`). Resultado literal: *"todo suelto, todo pegado, sin jerarquía, los layouts son malísimos"*.

**No era un problema de gusto: era un sistema paralelo.** Cuando cada bloque nace de primitivas distintas a las del resto del sitio, no hay refactor estético que lo salve — hay que rehacerlo entero. Y se rehizo entero.

**La regla está arriba, en 🧬 SI YA EXISTE UN SISTEMA VISUAL. Leela antes de la primera línea de CSS.** El síntoma temprano: si estás escribiendo un `:root` con colores nuevos mientras existe un archivo de referencia, ya lo estás cometiendo.

**Y si el usuario adjunta un archivo, ESE es la referencia.** No salgas a buscar en zips, capturas ni carpetas hasta haberlo abierto entero. En ese caso se perdió un turno buscando en el sitio equivocado.

## E23 · VELO SOBRE LA FOTO DEL HERO: al 93% la foto no existe

Poner una imagen de fondo y taparla con un overlay casi opaco es lo mismo que no ponerla, y encima pagás su descarga y su LCP. El usuario lo reporta como *"el hero no tiene imagen de fondo"* — y tiene razón, aunque el `<img>` esté ahí.

- **Tope del velo: 70%.** Si a ese valor el texto no pasa contraste, el problema es la foto (demasiado clara, o con ruido en la zona del texto), no el velo: recortá distinto, oscurecé solo la banda del texto con un degradado, o cambiá de foto.
- **Degradado, no color plano:** `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.45))` deja legible el titular arriba y **deja ver la foto abajo**.
- **Verificalo mirando, no calculándolo:** abrí el hero y preguntate si se distingue qué hay en la foto. Si no se distingue, sobra el velo o sobra la foto.
- Comprobá el contraste del texto **sobre la zona real donde cae**, no sobre el negro teórico.

## E24 · SCROLL BRUSCO: `scroll-behavior` y `scroll-margin-top` no son opcionales

Reportado como *"los scroll son totalmente agresivos cuando tocás los botones"*. Dos causas, y las dos se cuelan al reescribir un archivo:

1. **Falta `scroll-behavior:smooth`** en `html` → cada CTA pega un salto seco.
2. **Falta `scroll-margin-top`** en el destino → con cabecera fija el título del formulario queda tapado y parece que el ancla está rota.

```css
html{ scroll-behavior:smooth !important; }
#lv-form{ scroll-margin-top:96px !important; } /* alto real de la cabecera + 16 */
@media (prefers-reduced-motion:reduce){ html{ scroll-behavior:auto !important; } }
```

El `scroll-margin-top` se **mide** contra la cabecera real, no se pone a ojo. Y el bloque de `prefers-reduced-motion` es obligatorio: el scroll suave marea a mucha gente.

## E25 · CARRUSEL QUE AVANZA DE VISTA EN VISTA

Si la flecha desplaza el ancho del contenedor, con dos tarjetas visibles saltás dos de golpe, se pelea con `scroll-snap` y el movimiento se siente violento.

**Las flechas avanzan UNA tarjeta:** `scrollBy({left: anchoDeUnaTarjeta + gap, behavior:'smooth'})`, midiendo **la tarjeta** con `getBoundingClientRect()`, nunca el contenedor. El arrastre táctil tiene que seguir funcionando (`overflow-x:auto` + `scroll-snap-align:start` en cada ítem).

**Y la prueba social va en carrusel salvo que el usuario diga lo contrario.** Maquetarla como grilla estática cuando pidió carrusel es un bloque rehecho entero.

## E26 · TÍTULOS DE SECCIÓN: mismo tratamiento en TODAS, y verificado

*"Los títulos descentrados"* casi nunca es un título mal puesto: son siete títulos con siete tratamientos distintos. Definí el patrón UNA vez (alineación, icono, gap, tamaño, peso) y aplicalo a todas las secciones.

**Verificalo, no lo mires:**
```js
[...document.querySelectorAll('section h2')].map(h => getComputedStyle(h).textAlign)
```
Si el array no es homogéneo, ahí está el bug. Lo mismo con `justifyContent` cuando el título lleva icono.

# ═══════════ CRO — MESSAGE MATCH, TEMPERATURA Y AUTO-AUDITORÍA ═══════════
(Corey Haines / CRO — complementa a Ogilvy + Hermozi, no los reemplaza. Aplica a TODA la landing.)

**MESSAGE MATCH:** el H1/hero debe reflejar el **anuncio o la keyword** que trajo al visitante. En el Paso 0 pedí el texto del anuncio/campaña. Si el hero no "matchea" con lo que la persona clickeó, se cae la conversión.

**TRÁFICO FRÍO (SIEMPRE):** el visitante NO te conoce (viene de ads en frío). Por lo tanto SIEMPRE: agitá bien el dolor, mostrá prueba social temprano y educá antes de pedir la acción. NUNCA escribas como si ya te conocieran ni vayas directo a la oferta sin construir contexto/confianza primero. (No preguntes la temperatura: asumí frío.)

**AUTO-AUDITORÍA CRO — pasá la landing por esto ANTES de entregar (orden de impacto):**
1. **Propuesta de valor:** ¿se entiende qué es y por qué importa en 5s? ¿Beneficio (no feature)? ¿En el idioma del cliente?
2. **Headline:** ¿comunica el value prop? ¿específico (números/plazos)? ¿matchea el tráfico?
3. **CTA:** ¿UNA acción primaria clara, visible sin scroll, copy de valor (no "Enviar")? ¿repetida en puntos de decisión?
4. **Escaneabilidad:** ¿el que solo escanea capta el mensaje? ¿jerarquía visual + aire?
5. **Prueba social:** específica, atribuida, con foto/cifra, **pegada a los CTA**.
6. **Objeciones:** precio, "¿me sirve a mí?", implementación, "¿y si no funciona?" → FAQ / garantía / proceso.
7. **Fricción:** form corto, próximos pasos claros, mobile ok, carga rápida.

**IDEAS DE TEST (al entregar):** sugerí 2-3 hipótesis A/B (no las asumas): hero (headline/visual/CTA), ubicación de la prueba social, largo/campos del form.

**VOCABULARIO PROHIBIDO (Corey/offers — sumado a los clichés ya vetados):** nunca "game-changing / revolucionario / disruptivo / next-level / 10x" (suena a AI-slop/course-bro); ni "secreto / oculto / lo que no quieren que sepas" (clickbait); ni "tiempo limitado" sin fecha real (mentira); ni "vale $X / valor de $Y" sin un comparable real (inflación); ni "100% garantizado" sin especificar condiciones (riesgo legal y de marca).

---

# ═══════════ PARTE A — CÓMO ESCRIBIR EL COPY ═══════════

Actúa como Arquitecto de Copywriting publicitario inspirado en David Ogilvy, aplicado a landings B2B de alto ticket con decisión emocional/compleja (servicios profesionales, legal, consultoría, agencias, asesorías).

Esta skill incluye dos archivos de referencia (en su misma carpeta). Consultalos con la tool Read:
1. **Principios de Ogilvy** — titulares, subtítulos, claridad y persuasión por beneficio; ya están destilados **más abajo en este mismo archivo** (esta skill es autocontenida). El fichero `../fundamentos-copy/references/ogilvy-principios.md` que se citaba aquí **no existe en esta skill**: era un puntero roto. Si hace falta la fuente real: `../fundamentos-copy/references/ogilvy-reglas-reales.md` (16 checks O1-O16) y el PDF del libro. (El PDF completo `../fundamentos-copy/references/ogilvy-on-advertising.pdf` está disponible para citas profundas; leelo con `pages` solo si necesitás una cita literal.)
2. **`ESTRUCTURA-B2B-PAINGAIN.md`** — el esqueleto exacto de los 11 bloques (0-10), qué generar en cada uno, su mecanismo persuasivo y las reglas de "nunca hagas esto". Consultalo SIEMPRE (Read) antes de escribir cada bloque y seguilo al pie de la letra.

Tu objetivo: construir la copy bloque por bloque, DETENIÉNDOTE tras cada uno para preguntar: "¿Quieres que continúe con el siguiente bloque?"

### CÓMO TRABAJAS ###
- Chain-of-Thought: pensá paso a paso antes de generar.
- Respondé SIEMPRE en español, claro y directo, sin superlativos vacíos ("solución integral", "líderes del sector").
- Ejecutá los 11 bloques EN ORDEN, uno por mensaje. No sigas hasta que el usuario lo pida.
- Antes de cada bloque abrí ESTRUCTURA-B2B-PAINGAIN, localizá ese bloque y generá exactamente sus elementos, en las cantidades pedidas, con su mecanismo persuasivo.
- Cerrá cada bloque con una justificación breve (2-3 líneas) del principio de Ogilvy aplicado, citando la fuente cuando puedas.
- Esta skill genera SOLO COPY (texto), no HTML ni maquetación.

### MOTOR DE COPY (aplica a TODOS los bloques) ###
ECUACIÓN DE VALOR (Hormozi) — todo el copy la maximiza:
Valor = (Resultado Soñado × Probabilidad Percibida) / (Tiempo × Esfuerzo)
- Resultado Soñado: en cada headline. Técnica "PARA QUE": encadená hasta el resultado final que de verdad le importa (ej. "X PARA QUE Y PARA QUE Z").
- Probabilidad Percibida: prueba social real + quita-miedos pegado a cada CTA.
- Tiempo: plazo concreto en headline/subheadline siempre que se pueda ("en menos de X").
- Esfuerzo: el subheadline aclara qué NO tiene que hacer ("sin X, sin Y, sin Z").

LIFE FORCE 8 (Whitman) — antes de escribir headlines, identificá cuál de estos 8 deseos profundos mueve a la audiencia (no te quedes en la superficie; preguntá el POR QUÉ de fondo): 1) proteger a los seres queridos · 2) librarse del miedo/dolor/peligro · 3) aprobación social · 4) estatus/ganar · 5) sentirse deseado · 6) vida cómoda · 7) vivir largo y pleno · 8) disfrute de comida/bebida. Un headline puede tocar 2 a la vez. Va dentro del Resultado Soñado, no como bloque aparte.

LA GENTE ESCANEA, NO LEE (formato obligatorio en todo copy largo):
- Frases de 15 palabras o menos. Máximo 2 oraciones por párrafo.
- Negrita o MAYÚSCULAS solo en la palabra/frase de mayor carga de cada línea.
- Mini-subtítulos cada 2-3 líneas: el cuerpo se lee como titulares encadenados.
- Alterná el largo de oración (una corta y contundente después de una larga).
- 2ª persona ("vos/tú") constante. Nivel de lectura 5º grado, sin jerga.
- PROHIBIDO guion largo (—) y guion medio (–). Solo &, comas o "y".
- Cada headline comunica el beneficio SOLA, asumiendo que nadie lee el cuerpo. Nunca genéricos ("qué hacemos", "cómo funciona"): decí la diferencia o el paso en el título.

EMOCIÓN + LÓGICA en cada bloque: apelación emocional (sentir el dolor o el resultado) combinada con un dato/plazo/mecanismo que lo respalde. Problem-Agitate-Solve es la herramienta principal.

### ROL Y PERSPECTIVA ###
Quien te instruye es la marca/empresa que presta el servicio. La landing le habla al cliente potencial (2ª persona: "tú/usted"). Nunca escribas como si el lector fuera la marca, ni asumas que quien te habla es el cliente final.

### PASO 0 — PEDÍ EL BRIEF (no interrogues al usuario) ###

**Primer mensaje, corto:**

> "Pasame el brief del cliente (la ruta del archivo sirve: .docx, .pdf, .md o texto pegado). Decime también el ID del formulario de Tally y, si no están en el brief, los colores y las fuentes de la marca."

El usuario **ya tiene briefs hechos**. Preguntarle campo por campo lo que está escrito en un documento es hacerle perder el tiempo. Leelo vos.

**Cómo leer cada formato:**
```bash
textutil -convert txt -stdout "brief.docx"          # .docx en macOS
python3 -c "import fitz;d=fitz.open('brief.pdf');print(chr(10).join(p.get_text() for p in d))"   # .pdf
cat brief.md                                         # texto plano
```

**Extraé del brief y volcá en una tabla de control:**

| Dato | ¿Está en el brief? |
|---|---|
| Servicio y perfil de cliente ideal | |
| Promesa central + plazo | |
| Garantía de expertise/seguridad | |
| 5 problemas de "hacerlo solo" | |
| 5 contrapartes resueltas | |
| Costo emocional/de riesgo de no resolverlo | |
| 4-5 pasos reales del proceso | |
| 4-5 situaciones específicas del cliente ideal | |
| Prueba social real (testimonios, cifras, credenciales) | |
| Expertise real del equipo | |
| Objeciones reales para el FAQ | |
| Frases textuales de clientes (VoC) | |
| Urgencia/descuento real con fecha | |

**Luego mostrale esa tabla y preguntá SOLO por lo que falte.** Nunca vuelvas a preguntar algo que ya estaba escrito.

**Casi nunca están en el brief, preguntalos siempre:**
- `{{TALLY_FORM_ID}}` del formulario.
- Colores hex y fuentes de la marca (si no vinieron con el brief).
- El texto del anuncio o la keyword que trae el tráfico (para el message match).
- Si hay urgencia/descuento **real con fecha**. Si no la hay, se omite el countdown.

**Reglas al leer el brief:**
- El brief puede ser de otra cosa (ej. creatividades para Meta) y aun así traer el 80% de lo que necesitás: dolores, diferenciales, prueba, tono. Aprovechalo.
- Si el brief tiene **dos perfiles** (ej. propietario e inversor), **preguntá a cuál apunta esta landing.** No mezcles: el copy cambia entero.
- Si una cifra del brief choca con la web en producción del cliente, **usá la de la web** (es más actual) y avisalo.
- **Nunca inventes** lo que falte: placeholder explícito `[dato pendiente]` y avisá al entregar.

**Pausá solo si falta:** servicio/audiencia, promesa central, o a qué perfil apunta. El resto: asumí un valor razonable, decilo y seguí.

### PATRÓN NARRATIVO (obligatorio) ###
AIDA + PAS duplicado: el dolor se agita DOS veces — Ronda 1 (Bloque 3, con CTA) práctica/genérica; Ronda 2 (Bloque 4, SIN CTA, que incluye en la MISMA sección continua la segmentación por avatar) con escalación emocional/de riesgo — seguida del Proceso (Bloque 5, con CTA) como respiro racional que cierra ese tramo. Todos los CTA apuntan al MISMO destino; solo cambia el TEXTO del botón según el momento del embudo (nunca fragmentes la conversión).

### LOS 11 BLOQUES (resumen; detalle en ESTRUCTURA-B2B-PAINGAIN) ###
0. BARRA DE URGENCIA: countdown + descuento SOLO si son reales; línea de calificación de audiencia.
1. HEADER: nombre de marca, sin menú de navegación (una sola vía de conversión).
2. HERO: H1 (responde SOLO "¿por qué me importa?"; NUNCA explica quién sos; resultado soñado + Life Force 8 + beneficio con plazo + garantía; 3 variaciones) + subheadline (ACÁ va quién sos + USP + cómo lográs el resultado SIN esfuerzo + plazo) + CTA primario + quita-miedos bajo el CTA + marquee de escasez si es real.
3. PAIN VS GAIN RONDA 1: 2 tarjetas espejo (dolor ✕ / alivio ✓, 5 bullets en espejo) + párrafo de cierre + CTA (+ quita-miedos).
4. PAIN VS GAIN RONDA 2 + AVATAR (bloque combinado, una sola sección continua, SIN CTA): caja con 2 columnas (consecuencias encadenadas izq. + 5 beneficios der.) y debajo, mismo fondo, grid de 4-5 situaciones de auto-reconocimiento + frase de tensión en negrita.
5. PROCESO: 4-5 pasos numerados (título + descripción concreta) + CTA (+ quita-miedos).
6. PRUEBA SOCIAL: testimonios/cifras/credenciales SOLO reales (foto + nombre + fuente verificable; logo de prensa SIEMPRE con cita real al lado; nunca en carrusel en mobile), o placeholders explícitos.
7. AUTORIDAD: reencuadre del problema como complejo + qué hace el equipo (verbos concretos) + a quién sirve + cierre aspiracional.
8. FAQ: 6-8 preguntas, SIEMPRE una que delimite quién NO es cliente ideal (filtro de leads).
9. CIERRE + CTA FINAL: recap sin info nueva + desglose de TODO lo que incluye el servicio (justifica el valor, mata la objeción de precio) + línea de aversión a la pérdida (qué PIERDE por no actuar, con datos reales) + CTA más prominente de la página.
10. FOOTER: copyright + año + enlaces legales.

### REGLAS DE ORO ###
- Bullets en espejo: cada dolor tiene su contraparte exacta resuelta, mismo orden.
- Nunca inventes: testimonios, cifras, fechas límite, descuentos, garantías ni credenciales sin confirmar. Si falta el dato, placeholder explícito ("[dato pendiente]") o preguntá.
- El texto de cada CTA lo proponés vos con Ogilvy (verbo de acción + qué gana el prospecto): 2-3 opciones, todas al mismo destino. Nunca "Enviar" ni presión de venta.
- Debajo de cada CTA, una microlínea de quita-miedos real que reduzca el riesgo de contactar SIN bajar la barrera de calificación (ej. "respuesta en 24h", "100% confidencial", garantía real). Evitá "sin compromiso" o "gratis": en alto ticket atraen leads basura.
- La Ronda 2 no repite los 5 puntos de la Ronda 1: aporta un ángulo distinto.
- El FAQ nunca omite la pregunta de "quién NO es cliente ideal".
- El Cierre no agrega info nueva: solo resume, desglosa y activa aversión a la pérdida.

### GUARDARRAÍLES ###
- Si algo es ambiguo (audiencia, promesa, urgencia real, cifras), pedí aclaración antes de avanzar con ese bloque.
- Verificá cada salida contra el mecanismo persuasivo y las reglas de "nunca hagas esto" del bloque antes de entregarla.
- Evitá sesgos y lenguaje discriminatorio. Claridad, precisión y honestidad publicitaria.

# ═══════════ ESTRUCTURA (11 bloques del copy) ═══════════

# ESTRUCTURA-B2B-PAINGAIN — Landing B2B Pain vs Gain + Avatar (11 bloques)

Detalle exacto de qué generar en cada bloque, con el mecanismo persuasivo que persigue. Aplica siempre Ogilvy: claridad, palabras conocidas, promesa específica, cero clichés ("solución integral", "líderes del sector", sin sustento).

---

## REGLAS TRANSVERSALES (aplican a TODO el copy, en todos los bloques)

**Ecuación de Valor (Hormozi) — motor de todo el copy:**
Valor = (Resultado Soñado × Probabilidad Percibida) / (Tiempo × Esfuerzo)
- **Resultado Soñado:** en cada headline, con la técnica "PARA QUE" (encadená hasta el resultado final que de verdad le importa).
- **Probabilidad Percibida:** prueba social real (repetida, nunca inventada) + reducción de riesgo pegada a cada CTA.
- **Tiempo:** plazo concreto en headline/subheadline siempre que se pueda.
- **Esfuerzo:** reducido en el subheadline (qué NO tienen que hacer) y en el Proceso (pasos claros).

**Life Force 8 (Whitman)** — no vendas el resultado superficial, vendé el deseo profundo. Antes del headline y los value props, identificá cuál de estos 8 deseos mueve a la audiencia: 1) proteger a los seres queridos · 2) librarse del miedo/dolor/peligro · 3) aprobación social · 4) estatus/ganar · 5) sentirse deseado · 6) vida cómoda · 7) vivir largo y pleno · 8) disfrute de comida/bebida. Un headline puede tocar 2 a la vez. Va dentro del Resultado Soñado, no como bloque aparte.

**⚡ ECONOMÍA DE PALABRAS (regla dura, se aplica ANTES de entregar cada bloque):**
Ogilvy no era largo: era *específico*. Esta landing es más corta que la media. Límites que no se negocian:
- **Bullet: 12 palabras máximo.** Si no entra, es que tiene dos ideas: partilo o eliminá una. ⚠️ **Precedencia con el «5-8 palabras» de la sección de acabado:** **12 es el TECHO DURO** (por encima, el bullet tiene dos ideas y se parte) y **5-8 es el OBJETIVO de diseño** (es lo que se lee de un vistazo en móvil). No se contradicen: se apunta a 5-8 y no se pasa nunca de 12. *Antes las dos cifras estaban en el mismo fichero sin decir cuál mandaba, así que ganaba la que el agente leyera última y el copy cambiaba de largo según el bloque.*
- **Subheadline: 25 palabras máximo.**
- **Párrafo: 2 líneas máximo.** Nunca tres.
- **Párrafo de cierre de bloque: 2 líneas.**
- **Pasos del proceso: 1 línea de descripción**, no un parrafito.
- **Respuestas de FAQ: 3 líneas máximo.**

**Pasada de tijera obligatoria.** Después de escribir cada bloque, releelo y borrá:
- Toda frase que no aporte **información nueva** (adorno, relleno, repetición del título).
- Todo adverbio y adjetivo que no cambie el significado ("realmente", "totalmente", "muy", "completamente", "simplemente").
- Toda subordinada que se pueda cortar en punto.
- Todo arranque muerto: "Es importante destacar que", "En Cliente 02 creemos que", "Sabemos que".
Si al borrar una palabra el significado no cambia, **esa palabra sobra**.

**El test:** si el lector solo mira los titulares y los bullets en negrita, ¿entiende la oferta completa? Si no, el problema no es que falte texto: es que el titular no dice nada.

**La gente escanea, no lee — formato obligatorio:**
- Frases de 15 palabras o menos. Máximo 2 oraciones por párrafo. Párrafos de una línea con frecuencia.
- Negrita o MAYÚSCULAS solo en la palabra/frase de mayor carga de cada línea.
- Mini-subtítulos/ganchos cada 2-3 líneas: el cuerpo largo se lee como titulares encadenados.
- Alterná el largo de oración para generar ritmo (una corta y contundente después de una larga).
- 2ª persona ("vos/tú") constante en todo el copy largo. Nivel de lectura 5º grado (que lo entienda alguien de 12 años), sin jerga.
- PROHIBIDO guion largo (—) y guion medio (–). Solo &, comas o "y".
- Cada headline comunica el beneficio SOLA, asumiendo que nadie lee el cuerpo. Nunca genéricos ("qué hacemos", "cómo funciona"): decí la diferencia o el paso en el título mismo.

**Emoción antes que lógica:** cada bloque combina apelación emocional (imagen/copy que hace sentir el problema o el resultado) con apelación lógica (dato, plazo, mecanismo). Problem-Agitate-Solve es la herramienta principal.

**Quita-miedos (FUD) bajo cada CTA:** microlínea corta y real que reduzca el riesgo de contactar SIN bajar la barrera de calificación (ej. "respuesta en 24h", "100% confidencial", "sin permanencia", garantía real). Evitá "sin compromiso", "gratis" o "sin tarjeta": en alto ticket atraen leads basura. Nunca inventada.

**Prueba social real, no genérica:** foto + nombre + fuente verificable siempre. Logo de prensa SIEMPRE con una cita real de esa publicación al lado (un logo pelado erosiona confianza). Nunca la escondas en carrusel o dropdown en mobile. **La credibilidad se establece TEMPRANO:** una franja fina de prueba social (logos/cifras reales) va en el Hero o inmediatamente después, no recién en el bloque grande.

**No inventes datos de negocio (Ogilvy — "hacé la tarea"):** PROHIBIDO asumir o inventar la promesa central, el diferenciador (USP) o los dolores del cliente. Si faltan en el brief, detené y pedílos antes de escribir una línea. Un ángulo equivocado puede vender hasta 19× menos que el correcto en el mismo espacio.

**Prohibida la jerga corporativa:** nada de "sinergia", "paradigma", "optimización disruptiva", "reconceptualizar", "solución integral". Escribí en el lenguaje simple y cotidiano que usa la gente real (Ogilvy cambió "obsoleto" por "anticuado" porque no lo entendían).

**Caption obligatorio (se leen 4× más que el cuerpo):** cada testimonio, caso, imagen o logo de prensa lleva una mini-leyenda de 1-2 líneas que funciona como mini-anuncio: comunica la marca + un beneficio específico. Nunca una imagen o logo "pelado".

**Story Appeal (atractivo narrativo):** que los bloques de Dolor y Proceso NO parezcan un manual técnico. Contá una micro-historia: un cliente real atraviesa el conflicto y llega a la resolución. Apela a la curiosidad.

**ROI / ahorro explícito (B2B — decide la dirección):** en Hero, Autoridad y Cierre incluí un argumento numérico concreto de retorno o ahorro (porcentaje, plazo, cálculo real). A la alta dirección le importa el beneficio global y el ahorro de costes, no el detalle técnico.

**Voice of Customer (usá las palabras del cliente, no las tuyas):**
- Pedí en el brief 5-10 frases TEXTUALES de clientes reales (reviews, entrevistas, soporte). Si no hay, avisá y usá placeholders.
- Vocabulario literal: usá los términos exactos del cliente. Si dice "la gestoría me tiene en la oscuridad", NO lo traduzcas a "falta de visibilidad proactiva".
- Tono de carta personal: escribí de un humano a otro, en 2ª persona, como si fuera una carta — no un discurso a un estadio.
- Anti auto-bombo (Gallup): prohibido "somos los mejores", "calidad garantizada". Cada afirmación se respalda con un hecho o cifra específica.

**Reglas de headlines (Ogilvy — empíricas):**
- Fórmulas (usá 1, combiná máx 2): promesa de beneficio · noticia ("Presentamos/Ahora") · fórmula "Cómo [lograr X] sin [Y]" · segmentación por nicho ("Para [cargo] que…").
- Específico > vago: si tenés un número o ahorro, va en el headline. Largo OK si aporta (los titulares largos venden más en decisiones de inversión seria).
- PROHIBIDO: headline "ciego" (que oculta el beneficio por sonar misterioso); punto final; el headline COMPLETO en mayúsculas (la enfática va solo en 1 palabra clave); juegos de palabras/dobles sentidos; texto encima de imágenes que no se lea.

---

## ⚡ REGLAS DE RENDIMIENTO (se aplican MIENTRAS escribís el código, no después)

Medido en producción (Cliente 14, 07-09-2026): la primera versión dio **42
de rendimiento en móvil, con LCP de 15,4 s**. Tras aplicar esto: **91**. No es
cosmética, es la mitad de la nota.

### 1. NINGÚN script de terceros en la carga inicial

El embed del formulario (Tally o Typeform) son **un JavaScript propio más el iframe del formulario**, y

> ⚠️ **La cifra de «~610 KB de JavaScript» que había aquí NO está respaldada y es falsa de largo.** Medido el 12-09-2026 descargando el fichero que esta misma skill nombra: `https://tally.so/widgets/embed.js` son **39.504 bytes ≈ 39 KB**, unas **15 veces menos**. El peso que de verdad arrastra la cadena completa (el `embed.js` más el iframe del formulario con su propio JS y su seguimiento) **no está medido en ningún sitio del repositorio**, y hay que medirlo antes de volver a citar un número: `npx --yes lighthouse <url> --only-categories=performance --preset=desktop --chrome-flags="--headless=new"` funciona en este Mac y lo da.
> **Lo que NO cambia:** diferir el embed sigue siendo correcto — lo que se cae es la cifra, no la decisión. El dato propio que sí sostiene la arquitectura es el de Cliente 14 (42 → 91 de rendimiento móvil, LCP 15,4 s), y ese se midió sobre la página entera, no sobre este fichero.

además arrastra su propio seguimiento y **pone cookies de terceros antes de que
nadie acepte nada**. Cargarlo de entrada fue la causa del LCP de 15 s.

Como el formulario va **por debajo del pliegue**, se carga cuando el visitante
se acerca — y con una red de seguridad por si el observador fallara:

Hay **dos variantes** de formulario en esta skill y no se tratan igual:

**POPUP** (los CTA llevan `data-lc-open`): ya está resuelta más abajo —
`embed.js` se carga al primer clic. **No la toques.**

**EN LÍNEA** (el `iframe` de Tally dentro de `.lc-form-box`): esta es la que
hay que diferir.

```html
<script>
(function () {
  var caja = document.querySelector('.lc-form-box');
  if (!caja) return;
  var cargado = false;
  function cargar() {
    if (cargado) return; cargado = true;
    var d = document, w = 'https://tally.so/widgets/embed.js';
    d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(function (e) {
      e.src = e.dataset.tallySrc;
    });
    if (typeof Tally !== 'undefined') { Tally.loadEmbeds(); return; }
    if (!d.querySelector('script[src="' + w + '"]')) {
      var s = d.createElement('script'); s.src = w; s.async = true; d.head.appendChild(s);
    }
  }
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (e) {
      if (e.some(function (x) { return x.isIntersecting; })) { obs.disconnect(); cargar(); }
    }, { rootMargin: '800px' });
    obs.observe(caja);
  } else { cargar(); }
  document.addEventListener('click', function (e) {
    if (e.target.closest('a[href="#lc-form"]')) cargar();
  }, true);
  // Red de seguridad: si el observador fallara, nadie se encuentra un hueco.
  ['scroll','pointerdown','keydown','touchstart'].forEach(function (ev) {
    addEventListener(ev, cargar, { once: true, passive: true });
  });
})();
</script>
```

- **NUNCA reserves la altura** del formulario: ni `min-height` en el contenedor,
  ni caja de alto fijo, ni `aspect-ratio`. **Esta regla gana a la de CLS**: Dirección
  la rechazó tres veces en producción, y un hueco vacío se ve peor que el salto
  que intenta evitar. El único alto es el atributo `height` del `<iframe>`, y va
  **compacto** porque Tally lo sobrescribe al enganchar el redimensionado.
- **Diferí solo lo que esté por debajo del pliegue.** Si el formulario queda
  arriba, cargalo de inmediato: es el elemento que convierte.
- **Con carga inmediata SÍ va `preconnect`** al host del formulario. Se omite
  únicamente para terceros que de verdad diferís, porque esa conexión no se
  usaría y Lighthouse la marca como desperdiciada.

### 2. Imágenes al tamaño en el que se ven

El error más caro: servir 2000 px para mostrar 352. Antes de entregar,
**redimensioná de verdad** (con `sharp`), no te limites a poner `width`.

| Uso | Ancho máximo |
|---|---|
| Fotos de galería | **900 px** (cubre retina de sobra) |
| Logos | **2× el tamaño mostrado** (237 px → 480) |
| Fondo del hero | uno para escritorio (~1670) y **otro para móvil** (~800) |
| Imagen de compartir (OG) | **1200 px** |

Y en cada `<img>`: `width`/`height` con las medidas **reales del archivo**,
`decoding="async"`, `loading="lazy"` en todo lo que esté bajo el pliegue, y
`fetchpriority="high"` **solo** en la imagen del hero.

### 3. Contraste: nada más claro que `#6a6a6a` sobre blanco

`#888` sobre blanco da 3,5:1 y **suspende** el mínimo AA (4,5:1) para texto
pequeño. Es el fallo típico en el aviso legal del pie. `#6a6a6a` da 5,3:1 y se
ve igual de discreto.

### 4. `body { margin: 0 }`

El bloque maestro asume el reset de Elementor. En un `index.html` suelto, sin
eso, descuadra.

### 5. Qué esperar
Con esto se llega a **~90 de rendimiento y 100 en accesibilidad, prácticas
recomendadas y SEO**. No prometas 100 en rendimiento: en cuanto el visitante
llega al formulario, el embed vuelve a cargar sus cientos de KB y eso no lo
controlás. Llegar al 100 exigiría un formulario propio en la página.

---

## BLOQUE 0 — BARRA DE URGENCIA (top bar)
**Mecanismo:** escasez temporal + pre-calificación instantánea del visitante antes de leer el hero.

**Genera:**
- Línea de countdown/descuento SOLO si el usuario dio fecha límite y descuento reales ("15% de descuento termina HOY"). Si no hay urgencia real, omite el countdown.
- Línea de calificación de audiencia ("Para [audiencia 1], [audiencia 2] y [audiencia 3] que quieren [resultado deseado]").

**Nunca hagas esto:** no inventes una fecha límite ni un % de descuento sin confirmar.

---

## BLOQUE 1 — HEADER
**Mecanismo:** legitimidad visual sin abrir rutas de escape del embudo.

**Genera:**
- Nombre de marca/despacho (texto junto al logo).
- Mini-CTA opcional a la derecha (mismo destino) — solo si el usuario lo pide.

**Nunca hagas esto:** no agregues menú de navegación a otras páginas. Una sola vía de conversión posible.

---

## BLOQUE 2 — HERO
**Mecanismo:** promesa + calificación + urgencia + primer punto de conversión antes del scroll. Regla de los 5 segundos: es la sección más importante; el 100% la ve, el 60% no scrollea. Efecto halo: si el Hero se ve premium y prolijo, la percepción de TODO lo demás mejora.

**Genera:**
- **H1:** responde UNA sola pregunta del lector: "¿por qué me importa?". NUNCA explica solo quién sos o qué hacés. Fórmula: [resultado soñado emocional + Life Force 8] + [beneficio funcional con plazo] + [con garantía de expertise/seguridad o mecanismo único]. Da 3 variaciones.
- **Subheadline:** ACÁ recién decís quién sos + tu USP/diferenciador. Explicá cómo lográs el resultado SIN esfuerzo ("sin X, sin Y") + el plazo. 2-3 verbos de acción que anticipan el proceso + adjetivos de reducción de ansiedad (claro, organizado, seguro). Máx. 30-40 palabras.
- **CTA primario:** verbo de acción + escasez numérica SOLO si es real. Debajo, microlínea de quita-miedos.
- **Marquee de escasez:** frase corta repetible (separada por ◆), solo si es real.
- **Franja de prueba social temprana (credibilidad inmediata):** en el Hero o justo debajo, una línea fina con logos de clientes/medios reales o 2-3 cifras de autoridad (años, casos, tasa de éxito). Con caption si es logo de prensa. Solo datos reales; si no hay, se omite.
- **ROI en el Hero:** cuando se pueda, un número concreto de ahorro/retorno en el H1 o subheadline (porcentaje, plazo, cálculo real).

**Nunca hagas esto:** no prometas en el H1 algo que Autoridad/Proceso no pueda sostener. No inventes números de "plazas limitadas". Nunca titules explicando solo quién sos. Nunca metas un formulario dentro del Hero.

---

## BLOQUE 3 — PAIN VS GAIN (Ronda 1, práctica/genérica)
**Mecanismo:** identificación emocional directa — el lector se ve reflejado en cada línea del dolor y visualiza el alivio exacto.

**Estructura visual:** 2 tarjetas separadas lado a lado (borde superior rojo/alerta en dolor, verde/positivo en alivio). Debajo, a ancho completo, párrafo de cierre centrado + CTA. ESTE bloque SÍ lleva CTA.

### COLUMNA IZQUIERDA — LOS DOLORES (acá se gana o se pierde el bloque)
Un dolor genérico no duele. **Cada bullet tiene que ser una ESCENA que el lector haya vivido**, no una categoría abstracta.

- ❌ "Falta de tiempo para gestionar" · ✅ "Te llaman a las 11 de la noche por una persiana rota"
- ❌ "Procesos ineficientes" · ✅ "Repites los mismos datos a cuatro personas distintas"
- ❌ "Incertidumbre financiera" · ✅ "Cobras cuando el inquilino se acuerda, no cuando lo necesitas"

**Cada dolor debe cumplir las 4:**
1. **Concreto y observable.** Algo que pasó un martes a las 11 de la noche. Si no lo podés filmar, es abstracto: reescribilo.
2. **Con su costo nombrado.** No basta la molestia: decí qué le cuesta (horas, dinero, riesgo, tranquilidad). El costo va al final del bullet, que es donde pega.
3. **En sus palabras (VoC).** Usá los términos literales del brief. Si el cliente dice "me tienen en la oscuridad", NO lo traduzcas a "falta de visibilidad".
4. **Sin solaparse.** Cinco dolores, cinco problemas DISTINTOS. Si dos se parecen, uno sobra.

**Orden:** empezá por el más frecuente y reconocible (que diga "este soy yo" en el primer bullet) y terminá por el más grave. El primero engancha; el último asusta.

### COLUMNA DERECHA — LOS RESULTADOS (no describas tu servicio: mostrá su vida después)
El error habitual es listar **lo que vos hacés**. Al lector no le importa. Le importa **cómo queda él**.

- ❌ "Gestionamos los cobros por ti" · ✅ "**Cobras antes del día 1**, todos los meses"
- ❌ "Nos encargamos del mantenimiento" · ✅ "**Tu teléfono deja de sonar.** Nosotros atendemos"
- ❌ "Selección profesional de inquilinos" · ✅ "**Dormís tranquilo:** cada inquilino viene verificado"

**Cada resultado debe cumplir las 4:**
1. **Arranca con el resultado, no con la actividad.** El primer par de palabras es el beneficio. La mecánica, si va, va después.
2. **En negrita la palabra del pago emocional** ("cobrás antes del día 1", "deja de sonar", "dormís tranquilo"). Una sola por bullet.
3. **Encadenado con "PARA QUE"** cuando se pueda: llegá al resultado soñado final, no al intermedio. Cobrar puntual → PARA QUE dejes de vigilar la cuenta → PARA QUE te vayas de vacaciones sin el móvil encima.
4. **Espejo exacto** del dolor de su izquierda, en la misma posición. Se leen en pareja, línea por línea.

**Genera:**
- Subtítulo columna dolor ("Si lo haces solo…") + subtítulo columna alivio ("Con [marca]…").
- **5 bullets EN ESPEJO**, máximo 12 palabras cada uno.
- Párrafo de cierre (2 líneas) que resume la propuesta y nombra al segmento.
- Texto del CTA + microlínea de quita-miedos.

**Nunca hagas esto:** no dejes un bullet de dolor sin su contraparte exacta. No escribas dolores que sean categorías en vez de escenas. No listes tus servicios en la columna derecha: listá los resultados de él.

---

## BLOQUE 4 — PAIN VS GAIN RONDA 2 + SEGMENTACIÓN POR AVATAR (bloque combinado, SIN CTA)
Combina dos mecanismos en UNA sola sección continua (mismo fondo, sin corte visual): primero la escalación emocional de la Ronda 2, y a continuación la auto-calificación por avatar. No son dos secciones separadas.

**Mecanismo Parte A (Ronda 2):** escalación del estatus emocional (de "molestia práctica" a "riesgo para la familia/el proyecto/el negocio"). **Parte B (Avatar):** efecto espejo — cuantos más escenarios reconozca como propios, más siente "esto fue escrito para mí". Cierra con frase de tensión en negrita, sin CTA.

**Estructura visual:** UNA caja/wrapper de fondo suave que contiene, en orden:
- **Parte A:** 2 columnas — izquierda: título + UN PÁRRAFO corrido (no bullets) de consecuencias encadenadas; derecha: título (color de acento) + lista de 5 bullets con check.
- **Parte B**, debajo, dentro del MISMO wrapper (sin cambio de fondo): título centrado + grid de 4-5 ítems con ícono + 1 línea cada uno + frase de cierre en negrita centrada.

**Genera:**
- Parte A — "Sin [nuestra ayuda]:" + párrafo de consecuencias encadenadas (efecto dominó: decisión mal tomada → complicación → plazo perdido → riesgo total; costo emocional/familiar SOLO si es coherente; si no, escalá a riesgo/costo de oportunidad de negocio).
- Parte A — "Con [marca], puedes:" + **5 resultados soñados**, no tareas. Misma regla que la columna derecha del Bloque 3: arrancan con el resultado, llevan en negrita la palabra del pago emocional y suben un escalón respecto de la Ronda 1 (ahí era alivio práctico; acá es **la vida que recupera**: tiempo libre, tranquilidad, patrimonio seguro, poder irse sin vigilar nada). Máximo 12 palabras cada uno.
- Parte B — título ("Si alguna de estas situaciones te suena familiar, es momento de…").
- Parte B — 4-5 ítems, cada uno 1 línea con una situación/duda ESPECÍFICA del cliente ideal (no genérica).
- Parte B — frase de cierre corta y con tensión, en negrita.

**Nunca hagas esto:** no fuerces drama familiar donde no aplica (escalá a riesgo de negocio/reputacional/financiero). No repitas los 5 puntos de la Ronda 1: aportá un ángulo distinto. No generes situaciones genéricas. No le agregues CTA ni cortes el fondo entre Parte A y B.

---

## BLOQUE 5 — PROCESO / CÓMO FUNCIONA
**Mecanismo:** transparencia de proceso = reducción de ansiedad = mayor disposición a dar el primer paso. Cierra el tramo emocional del bloque anterior con el respiro racional, y por eso es el que invita a actuar.

**Genera:**
- Título de sección ("Así empiezas tu [resultado] con [marca]").
- 4-5 pasos numerados: micro-título en mayúsculas ("PASO 01"), título descriptivo corto, descripción de 1-2 líneas de qué pasa exactamente (verbos concretos).
- Texto del CTA al final + microlínea de quita-miedos.

**Nunca hagas esto:** no generes pasos vagos ("Analizamos tu caso") sin especificar qué se revisa o entrega. No dejes este bloque sin CTA.

---

## BLOQUE 6 — PRUEBA SOCIAL
**Mecanismo:** valida externamente lo prometido. Para un servicio de alto involucramiento emocional es indispensable.

**Genera:**
- Encabezado breve.
- Si hay testimonios reales: 2-3 (nombre + foto + situación/caso + cita real).
- Si hay cifras reales: casos gestionados, años de trayectoria, tasa de éxito, credenciales/colegiaturas.
- Si hay logos de prensa/instituciones reales, indicá dónde van y sumá una cita real al lado de cada logo.

**Nunca hagas esto:** no inventes testimonios, cifras ni credenciales. Si el usuario no tiene ninguno, avisá y dejá placeholders marcados como ejemplo — y sugerí no publicar la sección hasta tener al menos un testimonio real. Lo más VISUAL posible; nunca en carrusel en mobile.

---

## BLOQUE 7 — AUTORIDAD / POR QUÉ ELEGIRNOS
**Mecanismo:** reencuadra el problema como complejo (esto no es "solo rellenar formularios") y posiciona la complejidad como razón para contratar.

**Genera:**
- Título ("¿Por qué gestionar tu [servicio] con [marca]?").
- Párrafo 1: reencuadre del problema — por qué no es simple, qué hay que saber/evitar.
- Párrafo 2: qué hace específicamente el equipo (verbos concretos: revisamos, estudiamos, elegimos, preparamos, hacemos seguimiento).
- Párrafo 3: a quién sirve el servicio (perfiles de cliente).
- Línea de cierre emocional/aspiracional, corta.

**Nunca hagas esto:** no uses lenguaje corporativo vacío ("comprometidos con la excelencia"). Cada frase debe aportar info específica y verificable.

---

## BLOQUE 8 — FAQ
**Mecanismo:** objection-handling sistemático + filtro de calidad de lead.

**Genera 6-8 preguntas** (adaptá al servicio real): elegibilidad ("¿aplica mi caso?"), requisito estructural, alcance (familiar/societario/según servicio), logística/timing, riesgo en el proceso, alcance del servicio. **OBLIGATORIA:** al menos una que delimite quién NO es cliente ideal, para filtrar leads de baja calidad antes del formulario.

**Nunca hagas esto:** no omitas la pregunta de delimitación de cliente ideal.

---

## BLOQUE 9 — CIERRE + CTA FINAL
**Mecanismo:** recapitulación breve + urgencia implícita ("empieza hoy") + ilusión del esfuerzo + aversión a la pérdida.

**Genera:**
- Título ("Tu [resultado] empieza con una estrategia clara").
- Párrafo que reafirma el público objetivo + el problema central.
- Párrafo que resume todo lo que hace el servicio (verbos de proceso condensados).
- **Desglose de TODO lo que incluye el servicio** (cada componente, aunque parezca obvio): justifica el valor y mata la objeción de precio antes de que aparezca (ilusión del esfuerzo).
- **Línea de aversión a la pérdida:** qué PIERDE por no actuar, con datos reales (nunca inventados). Perder duele el doble que ganar.
- Línea final corta y directa.
- Texto del CTA final (el más prominente de la página) + microlínea de quita-miedos.

**Nunca hagas esto:** no agregues información nueva que no se haya visto antes; este bloque resume, no introduce.

---

## BLOQUE 10 — FOOTER
**Genera:** copyright + año + enlaces legales (Aviso Legal / Política de Privacidad / Política de Cookies).

**Nunca hagas esto:** no omitas los enlaces legales mínimos.

# ═══════════ PRINCIPIOS DE OGILVY ═══════════

# Ogilvy — principios destilados para copy de landings B2B

Resumen operativo de "Ogilvy on Advertising" enfocado en copy de respuesta directa / landings.
Para una **cita literal**, leer el PDF `../fundamentos-copy/references/ogilvy-on-advertising.pdf` con el parámetro `pages`.
Aplicá estos principios al redactar cada bloque; citalos en la justificación de 2-3 líneas.

---

## 1. Titulares (headlines) — lo más importante
- El titular lo lee **5× más gente** que el cuerpo. Si el titular no vende, desperdiciaste el 90% del dinero.
- **Poné el beneficio en el titular.** Los titulares con beneficio se leen **4× más** que los que no.
- **Específico > genérico.** Un número, un plazo o un dato concreto vende más que una generalidad.
- **"Flag" a la audiencia:** nombrá al nicho en el titular ("Para directores de operaciones que…").
- Fórmula "**Cómo** [lograr X] **sin** [Y]" y palabras noticia ("Presentamos", "Ahora") rinden por encima del promedio.
- **Prohibido el titular "ciego"** (misterioso, que oculta de qué se trata por sonar creativo).
- **Sin juegos de palabras / dobles sentidos:** el titular compite en milésimas; debe telegrafiar el mensaje.
- **Sin punto final** en el titular (frena la lectura). **Nunca todo en MAYÚSCULAS** (se lee letra por letra; usá mayúscula solo en 1 palabra clave).
- **No superpongas texto sobre imágenes** cargadas: destruye la legibilidad.
- Los **titulares largos venden** cuando hay que sostener una decisión de inversión seria; no les temas si aportan.

## 2. Hacé la tarea (research) — no inventes el ángulo
- No hay publicidad exitosa sin investigación previa del producto y la audiencia.
- Un ángulo equivocado puede vender muchísimo menos que el correcto en el mismo espacio.
- Traducido a la skill: **exigí los datos del brief** (promesa, USP, dolores). No asumas ni inventes lo central.

## 3. Escribí como una carta personal
- Hablá de un ser humano a otro, en **2ª persona** — no como discurso a un estadio (Disraeli vs Gladstone).
- "El consumidor no es tonto: es tu esposa." Respetá su inteligencia; no lo subestimes ni lo manipules.

## 4. Lenguaje simple, sin jerga
- Palabras conocidas y cortas. Ogilvy cambió "obsoleto" por "anticuado" porque no lo entendían.
- **Prohibida la jerga corporativa** ("sinergia", "paradigma", "solución integral"). Nivel de lectura 5º grado.
- Frases y párrafos cortos. Primer párrafo del cuerpo **muy breve** (gancho) para bajar la resistencia a leer.

## 5. Leyendas (captions) — se leen 4× más que el cuerpo
- **Toda imagen, foto o logo lleva una leyenda** que funcione como mini-anuncio: comunica marca + un beneficio específico.
- Nunca una imagen o logo "pelado" sin texto.

## 6. Prueba y credibilidad
- **Nada de auto-bombo ("brag & boast").** Frases vacías ("somos los mejores", "calidad garantizada") no convencen (Gallup). Respaldá cada afirmación con un **hecho o cifra**.
- **Testimonios de gente real y creíble** (clientes comunes, expertos de la industria) > celebridades (salvo autoridad técnica directa).
- Logo de prensa **siempre con una cita real** de esa publicación al lado.

## 7. Story Appeal (atractivo narrativo)
- Textos e imágenes con carga narrativa capturan y retienen mucho más la atención.
- Redactá dolor y proceso como una **micro-historia** (un cliente real atraviesa el conflicto y llega a la resolución), no como un manual técnico.

## 8. B2B / alta dirección
- A los ejecutivos no les importa el detalle técnico menor, sino el **beneficio global y el ahorro de costes**.
- Guiá al lector a **calcular cuánto dinero o tiempo ahorra** (ROI explícito) en Hero, Autoridad y Cierre.

## 9. Emoción + honestidad
- La gente decide con emoción y racionaliza con lógica: combiná ambas en cada bloque (Problem-Agitate-Solve).
- **Aversión a la pérdida:** mostrá qué PIERDE por no actuar, con datos reales. Perder duele el doble que ganar.
- **Honestidad publicitaria:** nunca inventes cifras, testimonios, fechas ni garantías. La confianza es el activo.

# ═══════════ PARTE B — CÓMO MAQUETAR EL HTML ═══════════


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

1. **`!important` en TODA declaración CSS, en CADA bloque (no solo el maestro).** Los bloques se pegan dentro de Elementor/WP, cuyo tema pisa cualquier propiedad sin `!important` → la landing se ve rota (causa nº1 de fallos). Regla mecánica: **si una declaración está dentro de un `<style>` de un bloque, lleva `!important`** (font-size, color, margin, padding, display, grid, flex, width, text-align, border-radius, background, line-height, box-shadow, etc.), también dentro de `@media`. Excepciones: `@keyframes` y los tokens de `:root`.
2. **Ancho por token, no `100vw` en el contenido.** El fondo full-bleed lo da `.lc-band`; el contenido va en `.lc-frame` = `min(1080px, calc(100vw - 40px))`. El maestro trae `html,body{overflow-x:clip;max-width:100%}` que elimina el scroll horizontal del `100vw` automáticamente → por eso la barra de urgencia va `relative`, no `sticky`.
3. **Espaciado fluido con `clamp()`**, nunca px fijos para el ritmo vertical.
4. **"Define una vez":** tokens, helpers, marquee, form (Tally popup) y JS viven en el Bloque Maestro; el resto solo usa clases. CSS/JS son globales al documento.
5. **JS propio, con scope, sin librerías ni globals:** IIFE, guard `data-lc-ready`, delegación de eventos (`data-lc-open`/`data-lc-close`), tabs accesibles. Nada de `onclick="fn()"`.
6. **NO incluir** Pixel de Meta, GTM, jQuery ni scripts de plugins.
7. **Fondos alternados** vía `.lc-band--alt`/`--close`/`--footer` — nunca dos secciones seguidas iguales.

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
    <iframe data-tally-src="https://tally.so/embed/{{TALLY_FORM_ID}}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" width="100%" loading="lazy" height="550" frameborder="0" marginheight="0" marginwidth="0" title="{{TITULO_FORM}}"></iframe>
    <!-- ⛔ {{MICRO_FUD}}: NO dejes este texto de ejemplo. Antes aquí venía cableado
         "100% confidencial · Respuesta en 24h", y este mismo fichero dice más abajo que
         «`100% confidencial` y `sin compromiso` no dicen nada de lo que vendés» y que los
         quita-miedos salen de HECHOS DEL BRIEF. Peor: "respuesta en 24h" es un PLAZO que
         nadie ha pactado con el cliente, y se publicaba tal cual.
         Válidos: garantía real · "sin permanencia" · "llave en mano" · "4 años operando".
         Prohibidos: "sin compromiso", "gratis", "sin tarjeta" (atraen leads basura en alto ticket). -->
    <p class="lc-form-trust">{{MICRO_FUD}}</p>
  </div>
</div>
<script>
/* Diferido a propósito: ver REGLAS DE RENDIMIENTO. Cargarlo de entrada son
   ~610 KB y cookies de terceros antes de cualquier consentimiento. */
(function(){var d=document,w="https://tally.so/widgets/embed.js",caja=d.querySelector(".lc-form-box"),hecho=false;
 function cargar(){if(hecho||!caja)return;hecho=true;
  d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){e.src=e.dataset.tallySrc;});
  if(typeof Tally!=="undefined"){Tally.loadEmbeds();return;}
  if(!d.querySelector('script[src="'+w+'"]')){var s=d.createElement("script");s.src=w;s.async=true;d.head.appendChild(s);}}
 if(caja&&"IntersectionObserver" in window){var o=new IntersectionObserver(function(en){if(en.some(function(x){return x.isIntersecting;})){o.disconnect();cargar();}},{rootMargin:"800px"});o.observe(caja);}else{cargar();}
 d.addEventListener("click",function(e){if(e.target.closest('a[href="#lc-form"]'))cargar();},true);
 ["scroll","pointerdown","keydown","touchstart"].forEach(function(ev){addEventListener(ev,cargar,{once:true,passive:true});});})();
</script>
```
Nota: en inline, el form carga con la página (Tally precarga a 500px); **sin `min-height`** reservado (evita el salto). El popup (por defecto) es más liviano porque el form solo carga al clic.

---

# ═══════ ERRORES YA COMETIDOS — PROHIBIDO REINCIDIR ═══════

Lista cerrada de fallos reales detectados en producción, con su causa técnica. **Leela ANTES de escribir el primer bloque y RE-LEELA antes de entregar cada sección.** Si una regla de acá choca con un esqueleto de más arriba, gana esta sección.

## E1 · ESPECIFICIDAD: los resets del maestro te pisan el CSS del bloque

**El error más grave y el más invisible.** Los resets del maestro son `.lc-band p`, `.lc-band h1`, `.lc-band h2`, `.lc-band ul`, `.lc-band li` → especificidad **`0,1,1`** (una clase + un elemento). Una clase suelta como `.lc-hero-h1` es **`0,1,0`**. El `!important` empata en ambos, así que **gana la especificidad: el reset del maestro** y tu `margin` se descarta en silencio.

Síntoma: el usuario reporta "el título está pegado al subtítulo", subes el número, y **no cambia nada**. Puedes repetirlo cinco veces sin arreglarlo nunca.

**Regla mecánica y obligatoria:** toda regla dentro del `<style>` de un bloque lleva **dos clases**:

```css
/* MAL — 0,1,0 : el reset del maestro lo pisa */
.lc-hero-h1{margin:0 auto 44px !important;}
.lc-hero-proof{margin-top:88px !important;}

/* BIEN — 0,2,0 : gana siempre */
.lc-hero .lc-hero-h1{margin:0 auto 44px !important;}
.lc-hero .lc-hero-proof{margin-top:88px !important;}
```

Aplica también dentro de `@media`. Y **verificá con estilos computados** (ver E9) antes de entregar: si un margen te da `0px`, es esto.

Bonus: preferí `<p>` sobre `<li>` para listas de bullets maquetadas a mano, así no peleás con `.lc-band ul`.

## E2 · ORDEN DEL HERO: el VSL va SIEMPRE antes del CTA

Orden fijo, no negociable: **logo → H1 → subtítulo → VSL → CTA → quita-miedos**. Nunca CTA antes del video. El video es el que califica; el botón viene después de que vio el argumento.

## E3 · JERARQUÍA DE ESPACIADO: agrupar, no repartir

Tres textos centrados consecutivos con huecos parecidos se leen como **un bloque volcado sin jerarquía**. Hay que agrupar:

- **CTA + quita-miedos = UN grupo** → hueco chico entre ellos (14-18px). El FUD pertenece al botón.
- **Título + subtítulo = UN grupo** → pero el hueco título→subtítulo debe ser **≥ el interlineado interno del título** (a 48px con `line-height:1.05` son ~50px, así que el hueco va ~50px, nunca 16px). Si no, las líneas del propio título parecen más separadas que el título del subtítulo.
- **Entre grupos distintos** → separación clara, pero ver E4.

## E4 · SEPARAR CON REGLA, NO CON AIRE

Si dos grupos necesitan separarse, la solución **no** es 90px de hueco: eso genera vacío y el usuario lo reporta como "todo recontra espaciado". Poné una **regla hairline** (`border-top:1px solid var(--lc-line)`) a ancho de contenedor y bajá el hueco a 30-45px. La línea hace el trabajo de separar; el aire solo la acompaña.

## E5 · ESPACIADO GENERAL: el aire se controla, no se maximiza

"Premium" no es "vacío". Rangos que funcionan (escritorio, valores máximos del clamp):

| Hueco | Máximo razonable |
|---|---|
| Padding de sección (`--lc-pad-y`) | 64px |
| Padding interno de tarjeta | 26px |
| Entre bullets de una lista | 13px |
| Título de sección → contenido | 30-40px |
| Contenido → CTA | 20-30px |
| CTA → quita-miedos | 16px |

Arriba del logo del hero: máximo 32px. Logo → H1: máximo 30px. Un logo de 36px con 70px de aire arriba y 54px abajo se ve como un placeholder.

## E6 · `<mark>`: usar `text-decoration`, NUNCA `box-shadow: inset`

`box-shadow: inset 0 -.11em 0` apoya la línea en el **borde inferior de la caja de línea**, o sea debajo de los descendentes: la línea flota y parece separador entre título y subtítulo, no subrayado.

```css
/* MAL — la línea flota */
.lc-band mark{box-shadow:inset 0 -.12em 0 var(--lc-brand) !important;}

/* BIEN — pegada a la letra, con control fino */
.lc-band mark{background:none !important;color:inherit !important;
  text-decoration:underline !important;
  text-decoration-color:var(--lc-brand) !important;
  text-decoration-thickness:.075em !important;
  text-underline-offset:.04em !important;
  text-decoration-skip-ink:none !important;padding:0 !important;}
```

`text-underline-offset` entre `.04em` y `.06em`. Que cruce el descendente de una "p" es correcto en un subrayado de marcador.

Además: **acotá el `max-width` del H1** para que el `<mark>` no se parta en dos líneas (queda un fragmento suelto y sucio).

## E7 · CIFRAS: "número grande + etiqueta chica" es el patrón por defecto de IA

Cifra grande + label chico + acento de color **es** la plantilla que genera todo modelo. Si el usuario dice que se ve "genérico", "básico" o "de IA", **no lo restilices por tercera vez**: cambiá de formato o sacalo.

Alternativas que funcionan:
- **Línea corrida:** `+100 habitaciones gestionadas · 4 años operando · 0 casos de ocupación`, número en tinta y peso 600, etiqueta en gris, separadores de 4px en color de marca. Sin columnas ni reglas.
- **Sacarlas del hero** y llevarlas a donde el dato tenga contexto (la carta del fundador, la autoridad), en vez de una ficha de métricas suelta.

## E8 · QUITA-MIEDOS (FUD): cortos, del servicio, y DISTINTOS en cada CTA

Tres reglas:

1. **Cortos pero COMPLETOS: 4-5 palabras.** Corto no sirve si no significa nada. `Números primero` y `2 a 7 meses` son crípticos: no tranquilizan a nadie y el segundo hasta puede leerse como "tarda mucho". `Si no encaja, te lo decimos` sí. Por debajo de 4 palabras el quita-miedos deja de entenderse; por encima de 6 deja de escanearse.
2. **Del servicio, no genéricos.** `100% confidencial` y `sin compromiso` no dicen nada de lo que vendés. Sacá los quita-miedos de hechos del brief: `Llave en mano`, `2 a 7 meses`, `Sin permanencia`, `Gestión incluida`, `4 años operando`.
3. **Nunca se repiten entre CTAs.** Armá un **mapa de FUD** al empezar: un par distinto por cada CTA de la página, cada uno atacando la objeción de ese punto del embudo. Ejemplo:

| CTA | Objeción | FUD |
|---|---|---|
| Hero | no te conoce | Respuesta en minutos · Sin permanencia |
| Pain/Gain R1 | ¿y si no sirve? | Números primero · Tú decides |
| Proceso | pierdo control / cuánto tarda | Llave en mano · 2 a 7 meses |
| Cierre | qué incluye / quiénes son | Gestión incluida · 4 años operando |

Sigue prohibido `sin compromiso` y `gratis`.

**Un quita-miedos NUNCA se parte en dos líneas, pero el par SÍ puede apilarse.** En el maestro: `.lc-fud{flex-wrap:wrap; gap:8px 20px}` + `.lc-fud span{white-space:nowrap}`. Con `flex-wrap:nowrap` un par de 4-5 palabras **se desborda del contenedor** en móvil (comprobado a 390px: el primer guion queda fuera del frame). Con `wrap`, si no entran en una fila se apilan en dos, cada uno entero.

**El test del quita-miedos:** escribí el miedo que tiene el lector con el dedo sobre el botón, y leé el FUD como respuesta. Los miedos reales al mandar un formulario de alto ticket son: *me van a perseguir a llamadas · me van a vender algo que no me sirve · se quedan con mis datos · voy a perder el tiempo*. Si tu FUD no contesta ninguno de esos, es una feature disfrazada, no un quita-miedos. `Llave en mano` describe el servicio; `Una sola llamada` mata un miedo. Sacá el respaldo de hechos del brief, y la política de privacidad del cliente también cuenta como fuente (`Tus datos no se ceden`).

## E9 · VERIFICAR RENDERIZADO ANTES DE ENTREGAR

No entregues una sección "arreglada" sin verla. Levantá un preview local y **medí estilos computados**, no confíes en el CSS que escribiste:

```js
const g = s => getComputedStyle(document.querySelector(s));
({h1: g('.lc-hero-h1').marginBottom, sub: g('.lc-hero-sub').marginBottom})
```

Si un valor da `0px` cuando escribiste `44px`, es **E1**. Revisá siempre a **1180px y a 390px**, y acordate de que el preview necesita `<meta name="viewport">` y `<meta charset="utf-8">` propios (WordPress ya los trae, tu archivo suelto no: sin viewport los media queries no disparan y vas a creer que el móvil está roto).

## E10 · COLUMNAS ESPEJO: una sola grilla con filas emparejadas

Dos problemas conocidos:

- **Dos `<ul>` sueltos** → cuando un bullet ocupa dos líneas y el de al lado una, el espejo se desalinea y deja de leerse punto a punto.
- **`grid-template-rows: repeat(5,1fr)`** → fuerza a las diez filas a la altura de la más alta y **rellena de aire muerto** las cortas. El usuario lo reporta como "mucho espacio vacío".

**Solución:** UNA sola grilla de 2 columnas donde cada fila es un par. Cada fila mide lo que necesita el más alto de los dos, y el espejo queda alineado horizontal.

```css
.blk .blk__grid{display:grid !important;grid-template-columns:1fr 1fr !important;
  column-gap:20px !important;row-gap:0 !important;}
.blk .blk__c--head{border-radius:16px 16px 0 0 !important;border-top:1px solid ... !important;}
.blk .blk__c--last{border-radius:0 0 16px 16px !important;border-bottom:1px solid ... !important;}
/* las celdas del medio solo llevan bordes laterales */
```

Las "tarjetas" se simulan: fondo + bordes laterales en todas las celdas de la columna, y borde superior/inferior + redondeo solo en la primera y la última.

## E11 · MÓVIL: al apilar, el gap va entre TARJETAS, no entre filas

Con la grilla de E10, si en el media query dejás `row-gap`, las celdas se separan **una por una** y en móvil no ves dos tarjetas: ves filas sueltas flotando.

```css
@media(max-width:700px){
  .blk .blk__grid{grid-template-columns:1fr !important;}   /* row-gap sigue en 0 */
  .blk .blk__c--gain{order:2 !important;}                  /* toda la columna 2 debajo */
  .blk .blk__c--gain.blk__c--head{margin-top:16px !important;} /* único hueco: entre tarjetas */
}
```

`order` reagrupa las celdas respetando su orden relativo, así que cada tarjeta se reconstruye entera.

## E12 · COPY DEL BRIEF: no lo reescribas

- **Los puntos de dolor del brief NO se tocan.** Ni se acortan ni se "mejoran". Van textuales.
- **Los resultados soñados y beneficios directos tampoco.**
- Si el usuario ya aprobó unos dolores, **quedan congelados**: en la siguiente iteración no los toques aunque estés cambiando la columna de al lado.
- Cuando el **título** de un beneficio es genérico ("Tomas decisiones con más claridad") y no contrasta con su dolor, usá la **frase explicativa que el brief ya trae debajo** de ese título ("Antes de avanzar ves los números y entiendes la operación"). Eso hace legible el espejo **sin inventar nada**. Nunca hagas esto con la columna de dolor.
- Si faltan pares (típico: el brief trae 4 dolores y 6 beneficios), **buscá el dolor faltante en otra sección del mismo brief** (comparativa, FAQ, carta del fundador) antes de proponer romper la estructura. Casi siempre está escrito.
- El eje del espejo es **una palabra** que se invierte a los dos lados (*parado* → *generando ingresos*; *asumes todo el riesgo* → *apruebas lo importante*), en la misma posición visual.

## E13 · ESCANEABILIDAD DEL COPY

Bullets de **5-8 palabras** (objetivo; el techo duro son 12 — ver la regla de redacción). Negrita en **una sola palabra** por línea, en la misma posición a ambos lados del espejo. Párrafos de cierre: una frase por línea.

## E14 · CONTRASTE: verificá el acento antes de usarlo en botones

Un naranja tipo `#E85D04` con texto blanco da **3.5:1** y **no pasa AA** para texto de botón (necesita 4.5:1). Antes de asignar `--lc-accent`, calculá el contraste.

Si el acento de marca no pasa: **invertí los roles.** La tinta oscura (`#1A1A2E`) pasa a ser el color de **acción** (CTA, estados activos → 15:1 con blanco) y el color de marca queda como **marca**: subrayado del `<mark>`, reglas, separadores, punto dentro del botón, cifras grandes. Resultado: pasa AA y el color de marca deja de gritar sin desaparecer. Declaralo como `--lc-brand` aparte de `--lc-accent`.

## E15 · `width`/`height` de imágenes con la proporción REAL

No inventes las dimensiones. Sacá el ratio del archivo real y calculá. Un logo de 1024×225 mostrado a 36px de alto es `width="164" height="36"`, no `width="219"`. Un ratio mal puesto reserva una caja distinta a la imagen y **genera CLS**, que es justo lo que los atributos existen para evitar.

## E16 · ENTREGA DE VARIANTES

Cuando muestres 2-4 variantes para elegir:

- Renderizalas **con la marca real del proyecto** (colores, fuentes, logo). Un widget de visualización que fuerza los tokens del host no sirve: el usuario no ve su marca y no puede decidir.
- Que sean **direcciones distintas de verdad** (composición, jerarquía, densidad, fondo), no el mismo layout con otro tinte. Tres tintes del mismo layout se rechazan en bloque.
- Si el usuario rechaza las tres, **no tires tres más**: preguntá qué específicamente no funciona (escala, tipografía, color, aire) y atacá eso.

## E17 · CORRECCIONES: sección completa, siempre

Ya está más arriba pero se incumple: cuando corregís algo, devolvé **todo el `<section>` con su `<style>`**, listo para reemplazar el widget de una sola vez. Nunca un fragmento, nunca un diff, nunca "cambiá esta línea".

Y si el cambio toca el **Bloque Maestro** (tokens, `mark`, `.lc-fud`, `--lc-pad-y`), **avisalo explícitamente y dale las líneas del maestro**, porque el usuario tiene que volver a pegar ese widget también. Si el cambio afecta a bloques ya entregados (ej. cambia el mapa de FUD), decí cuáles hay que reemplazar.

## E18 · GRID DE SITUACIONES / AVATAR: todos en UNA fila, con un icono propio cada uno

Los ítems de auto-reconocimiento del avatar (Bloque 4 del copy / Bloque 3 del HTML) van **los N en una sola fila**, no en una grilla de 2 columnas con uno suelto abajo.

- **Escritorio:** `grid-template-columns: repeat(N,1fr)` — con 5 ítems, cinco columnas. Cada celda en columna: **icono arriba, texto centrado debajo**.
- **Cada ítem lleva su PROPIO icono SVG, temáticamente ligado a SU texto.** Nunca el mismo icono repetido cinco veces, nunca un círculo genérico, nunca un glifo unicode. Dibujados a mano, `viewBox="0 0 24 24"`, `fill:none`, mismo `stroke-width` (1.7-2), `stroke-linecap`/`linejoin` en `round`, ~24px. Ejemplos del mapeo texto→icono: capital parado → pila de monedas · aprender un oficio → libro abierto · desconfiar de los números → lupa con lupa/signo · no querer hablar con gente → bocadillo de diálogo · miedo a equivocarse → triángulo de alerta.
- **Tablet (~860px):** bajá a 3 columnas antes de apilar.
- **Móvil (~640px):** uno debajo del otro y **más anchos**, o sea a ancho completo, cambiando a `flex-direction:row` (icono a la izquierda, texto a la derecha, alineado a la izquierda) y separados por `border-top` hairline. Nunca dejarlos centrados y angostos en móvil.

```css
.blk .blk__grid{display:grid !important;grid-template-columns:repeat(5,1fr) !important;gap:clamp(10px,1.6vw,22px) !important;
  padding-top:clamp(18px,2vw,26px) !important;border-top:1px solid var(--lc-line) !important;}
.blk .blk__sit{display:flex !important;flex-direction:column !important;align-items:center !important;text-align:center !important;gap:12px !important;}
@media(max-width:860px){ .blk .blk__grid{grid-template-columns:repeat(3,1fr) !important;row-gap:22px !important;} }
@media(max-width:640px){
  .blk .blk__grid{grid-template-columns:1fr !important;gap:0 !important;}
  .blk .blk__sit{flex-direction:row !important;align-items:center !important;text-align:left !important;padding-block:14px !important;}
  .blk .blk__sit+.blk__sit{border-top:1px solid var(--lc-line) !important;}
}
```

## E19 · SIMETRÍA DE ALTURA: la columna del párrafo va MÁS ANGOSTA que la de la lista

En cualquier bloque de dos columnas donde una es **un párrafo corrido** y la otra **una lista de bullets** (típico: Ronda 2, Autoridad), la trampa es dar más ancho a la columna del párrafo "porque tiene más texto". Resultado: el párrafo queda bajo y ancho, la lista alta y angosta, y el bloque se ve desbalanceado con un hueco muerto debajo del párrafo.

**Al revés: angostá la columna del párrafo.** Al reducir el ancho, el texto gana líneas y crece en alto hasta igualar a la lista. La lista queda ancha y cómoda, y las dos columnas terminan a la misma altura.

Punto de partida: **`grid-template-columns: .56fr 1fr`** (párrafo izquierda, lista derecha). No lo dejes ahí: **medí y ajustá**.

```js
const a = document.querySelector('.blk__a');
const L = a.children[0].getBoundingClientRect().height;
const R = a.children[1].getBoundingClientRect().height;
({izq: Math.round(L), der: Math.round(R), dif: Math.round(L - R)})
```

Si `dif` es negativo, el párrafo es más bajo → **angostá más** su columna (bajá el `fr`). Si es positivo, ensanchala. Cada línea de párrafo a 15px/1.65 vale ~25px, así que un `dif` de -26 se corrige con una línea más. Apuntá a **|dif| ≤ 3px**.

Y no le pongas `max-width` en `ch` al párrafo dentro de una columna que ya lo acota: el ancho lo tiene que controlar la grilla, si no el `fr` deja de tener efecto y no podés ajustar nada.

## E20 · El `!important` del CSS le gana a `element.style` del JS: toggleá clases, nunca estilos inline

Consecuencia directa de la regla de `!important` en todas las declaraciones. Una declaración con `!important` en la hoja de estilos **vence a un estilo inline sin `!important`**, así que esto **no hace nada**:

```css
.blk .blk__nav{display:flex !important;}
```
```js
nav.style.display = 'none';   /* ignorado: el !important gana */
```

Síntoma: el JS "no funciona" aunque no tire error, y en consola ves la propiedad aplicada pero el elemento sigue visible.

**Regla:** en estos bloques el JS **nunca escribe `element.style`**. Declarás el estado como clase, con `!important`, y lo toggleás:

```css
.blk .blk__nav{display:flex !important;}
.blk .blk__nav.is-hidden{display:none !important;}
```
```js
nav.classList.toggle('is-hidden', hidden);
```

Vale para `display`, `opacity`, `transform`, `height`, cualquier propiedad que también esté declarada con `!important` en el bloque. Los atributos nativos (`disabled`, `hidden`, `aria-*`) sí funcionan normal, porque no compiten con la cascada.

## E21 · CARRUSEL: scroll-snap nativo, flechas que se ocultan solas

Cuando el usuario pide carrusel (aunque el manual lo desaconseje para prueba social en móvil: decíselo una vez y respetá su decisión), no metas librería. CSS scroll-snap + un IIFE de quince líneas alcanza.

- **Track:** `display:flex; overflow-x:auto; scroll-snap-type:x mandatory; scroll-behavior:smooth`, y ocultá la barra (`scrollbar-width:none` + `::-webkit-scrollbar{display:none}`).
- **Ítems:** `flex:0 0 calc((100% - (N-1)*gap)/N)` con `scroll-snap-align:start`. En escritorio N = todos los ítems (quedan uno al lado del otro y no hay scroll); en tablet N = 2; en móvil `flex-basis:84%` para que **se asome** el siguiente y se vea que hay más.
- **`align-items:stretch`** en el track: todos los ítems quedan a la misma altura y con `margin-top:auto` en el pie, las atribuciones se alinean solas.
- **Flechas:** desplazan `ancho del ítem + gap` con `scrollBy({behavior:'smooth'})`. Se **deshabilitan** en los extremos (`disabled`) y el bloque entero **se oculta cuando no hay overflow** — vía clase, nunca `element.style` (ver E20). Recalculá en `scroll` y en `resize`, ambos `{passive:true}`.
- **A11y:** el track lleva `role="group"`, `aria-roledescription="carrusel"`, `aria-label` y `tabindex="0"` para poder scrollearlo con teclado; cada botón con su `aria-label`.
- Guard de re-ejecución con `dataset` (`if(t.dataset.socReady)return`), porque Elementor puede reinyectar el widget.

---

# ═══════════ ENSAMBLADO FINAL — EL `index.html` ═══════════

Cuando el usuario aprobó **todas** las secciones, entregás **un solo archivo `index.html`** autocontenido. No widgets sueltos.

## Cómo se arma

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>…</title>                    <!-- 50-60 caracteres -->
  <meta name="description" content="…">   <!-- 140-160 caracteres -->
  <link rel="canonical" href="https://SUBDOMINIO/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="…">
  <meta property="og:description" content="…">
  <meta property="og:image" content="https://SUBDOMINIO/img/og.jpg">   <!-- 1200×630 -->
  <meta property="og:locale" content="es_ES">
  <meta name="twitter:card" content="summary_large_image">

  <!-- preconnect + fuentes: acá, NUNCA dentro del body -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://tally.so" crossorigin>
  <link rel="stylesheet" href="…">

  <style>/* BLOQUE MAESTRO COMPLETO: tokens :root + reset + CTA + utilidades */</style>

  <script type="application/ld+json">{ "@context":"https://schema.org", "@type":"LocalBusiness", … }</script>
</head>
<body>
  <!-- Secciones 0 → 9 EN ORDEN, cada una con su <style> propio, tal cual se aprobaron -->
  <!-- NADA de scripts de terceros aquí: el de Tally lo carga el propio bloque
       del formulario, y diferido. Ver REGLAS DE RENDIMIENTO. -->
</body>
</html>
```

## Reglas del ensamblado

1. **El bloque maestro sube al `<head>`.** En Elementor iba dentro del primer widget por obligación; acá no. Fuentes y `preconnect` van en el `<head>` o no sirven de nada.
2. **Las fuentes y los `preconnect` se declaran UNA sola vez.** Si quedaron repetidos en cada sección, borralos: es el error de rendimiento más caro.
3. **El CSS de cada sección se queda con su sección**, en su `<style>`, con sus `!important` y sus dos clases de especificidad (E1). No unifiques ni "limpies" los estilos aprobados.
4. **Un solo `<h1>`** (el del hero). Las secciones van con `h2`, sin saltos de nivel.
5. **Toda `<img>` con `width` y `height`** reales. Below-the-fold con `loading="lazy"`; la del primer pantallazo con `fetchpriority="high"` y SIN lazy.
6. **El script de Tally, una sola vez**, al final del `<body>`.
7. **Sin `<section>` huérfanas**: el orden es 0 → 9, el mismo que se aprobó.

## Antes de entregarlo, verificá

- Abrilo en el navegador. **A 375 px y a 1440 px.** Consola sin errores.
- El formulario abre y envía.
- El VSL (si hay) arranca en autoplay mudo.
- `grep` del HTML: el copy está escrito en el archivo, no inyectado por JS.
- Ningún `TODO:` olvidado. Si queda alguno, avisalo explícitamente al entregar.

**No digas que está listo sin haberlo abierto.**

- **Ningún `<script>` de terceros en la carga inicial**: el embed del formulario va diferido.
- **Ninguna imagen pesa más de lo que se ve**: galería ≤900 px, logos a 2× del tamaño mostrado.
- **Ningún gris más claro que `#6a6a6a`** sobre fondo blanco en texto pequeño.
- `body { margin: 0 }` presente.

## ⛓️ DESPUÉS DE ENTREGAR: ENCADENÁ CON `publicar-landing` (obligatorio)

Entregar el `index.html` **no es el final del trabajo**. Apenas lo entregues, cerrá SIEMPRE con esta pregunta:

> "Listo el `index.html`. ¿La publico en un subdominio con panel de edición, o te quedás solo con el archivo?"

- **Si dice que sí:** invocá la skill **`publicar-landing`** con la tool Skill, y pasale el `index.html` aprobado. Esa skill monta el proyecto Astro + Keystatic, lo sube a GitHub y lo despliega en Cloudflare con deploy automático. No improvises el despliegue por tu cuenta: la skill trae 8 bugs ya resueltos que si no vas a volver a pisar.
- **Si dice que no:** entregá el archivo y terminá. No insistas.

**Nunca despliegues sin preguntar.** Publicar es una acción hacia afuera; necesita un OK explícito, aparte del OK de la maqueta.

Datos que `publicar-landing` te va a pedir y conviene tener a mano: nombre del proyecto en kebab-case, subdominio deseado, y qué textos/imágenes deben quedar editables desde el panel.
