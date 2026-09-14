---
name: landing-b2b-alto-ticket
description: "Arma la ESTRUCTURA HTML/CSS de una landing B2B de alto ticket (10 bloques, patrón AIDA + PAS duplicado: dolor agitado dos veces con proceso racional en medio, auto-calificación por avatar, FAQ como filtro de leads) lista para pegar en widgets HTML de Elementor/WordPress, bloque por bloque. El COPY lo aporta el usuario: esta skill NO redacta copy ni inventa datos — toma tus textos y los coloca en los esqueletos. El rubro (legal, consultoría, agencia, reforma, etc.) lo define el brief de cada proyecto. También funciona en MODO AUDITORÍA: si se le pasa una landing ya hecha (HTML, archivo o URL) y se pide revisarla, corregirla, mejorarla o saber qué está mal, la audita contra sus propias reglas y devuelve el diagnóstico priorizado más los bloques corregidos completos; NUNCA pregunta al usuario qué cambiar, porque el criterio está en la skill. Usar SIEMPRE que el usuario pida armar/maquetar una landing B2B de alto ticket con esta lógica. No usar para landings VSL con formulario arriba (esas son `landing-vsl-directa`, `landing-vsl-directa-copy-html` y `landing-vsl-directa-index-html`) ni para la venta de un inmueble concreto (esa es `landing-inmueble-copy-html`)."
---


> ⚠️ **Corregido el 12-09-2026:** el `description` mandaba a **`landing-vsl-elementor`** y
> **`landing-vsl-inmobiliaria`** para los casos que esta skill no cubre, y **ninguna de las dos existe** —
> son nombres de antes del refactor. El agente acababa buscando una skill inexistente justo en el momento
> de decidir. Lo que hay hoy: VSL con formulario arriba → `landing-vsl-directa*`; un inmueble concreto →
> `landing-inmueble-copy-html`; 18 bloques → `landing-conversion*`.

> 📐 **PARÁMETROS DE COPY DE LANDING, CON SU FUENTE:** `../fundamentos-copy/references/parametros-landing.md`. Ahí están una sola vez y **con la fuente de cada una** las reglas que antes estaban repartidas y desiguales entre las 9 skills de landing: frases ≤15 palabras · párrafos ≤2 oraciones · **prohibido el guion largo (—)** · el titular responde «¿por qué me importa?» · **2-3 testimonios reales** y nunca en carrusel en móvil · **nunca «sin compromiso» ni «gratis»** bajo el CTA · y **qué cifras NO están en las fuentes** (los umbrales de Core Web Vitals y el impacto de la velocidad en conversión: si alguien las cita como dato propio, es una alucinación).
# Landing B2B de Alto Ticket — maquetador (el copy lo pones tú)

Esta skill ARMA la estructura HTML/CSS de una landing B2B de alto ticket de 10 bloques (0 a 9) para pegar en widgets HTML de Elementor. **NO escribe copy.** El usuario entrega los textos; la skill los coloca en los esqueletos y devuelve el HTML listo, bloque por bloque. Nunca inventes copy, titulares, testimonios, cifras, fechas ni credenciales: si falta el texto de un bloque, pídelo.

> **⛔ ANTES DE ESCRIBIR NADA: leé la sección `ERRORES YA COMETIDOS — PROHIBIDO REINCIDIR` al final de este archivo (E1 a E29 (**el rango decía «E1 a E24» y los errores llegan hasta E29**: los más recientes —sistema visual paralelo, velo del hero, scroll, carrusel, títulos de sección— quedaban fuera de lo que el agente tenía que leer. Y ojo: **el mismo error tiene código distinto en cada skill**, así que «cumple E24» no significa nada entre ficheros: se cita el error por su TÍTULO, no por su número)).** Son fallos reales detectados en producción, con su causa técnica. El más grave es **E1 (especificidad)**: los resets del maestro pisan cualquier clase suelta, así que TODA regla de bloque lleva dos clases. Re-leé esa sección antes de entregar cada bloque; si choca con un esqueleto de más arriba, gana la sección de errores.

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

Quien usa la landing es la marca/empresa que presta el servicio B2B; la landing le habla al cliente potencial (2ª persona). El copy lo define el usuario con esa voz.

## Paso 0 — antes de maquetar, consigue

> **Antes de preguntar nada:** si el usuario tiene un **brief o manual de marca** (.docx, .pdf, .md), pedíle la ruta y leelo — de ahí salen colores, fuentes, logo y tono sin hacerle repetir nada.
> ```bash
> textutil -convert txt -stdout "brief.docx"
> python3 -c "import fitz;d=fitz.open('brief.pdf');print(chr(10).join(p.get_text() for p in d))"
> ```
> Después preguntá **solo lo que no esté ahí**. Lo que casi nunca aparece en un manual: plataforma de destino, `{{TALLY_FORM_ID}}` y si hay VSL.



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

---

## E25 · SISTEMA VISUAL PARALELO: el fallo que hace que "todo esté mal"

**Detectado en producción (landing CADI, y el propio agente lo diagnosticó al final):** se montó tokens propios, otra tipografía, ancho de 1120 y secciones full-bleed, cuando el cliente ya tenía un sistema (contenedor de 750 px en tarjeta blanca sobre gris, su stack tipográfico, sus patrones `.typ-*`). Resultado literal: *"todo suelto, todo pegado, sin jerarquía, los layouts son malísimos"*.

**No era un problema de gusto: era un sistema paralelo.** Cuando cada bloque nace de primitivas distintas a las del resto del sitio, no hay refactor estético que lo salve — hay que rehacerlo entero. Y se rehizo entero.

**La regla está arriba, en 🧬 SI YA EXISTE UN SISTEMA VISUAL. Leela antes de la primera línea de CSS.** El síntoma temprano: si estás escribiendo un `:root` con colores nuevos mientras existe un archivo de referencia, ya lo estás cometiendo.

**Y si el usuario adjunta un archivo, ESE es la referencia.** No salgas a buscar en zips, capturas ni carpetas hasta haberlo abierto entero. En ese caso se perdió un turno buscando en el sitio equivocado.

## E26 · VELO SOBRE LA FOTO DEL HERO: al 93% la foto no existe

Poner una imagen de fondo y taparla con un overlay casi opaco es lo mismo que no ponerla, y encima pagás su descarga y su LCP. El usuario lo reporta como *"el hero no tiene imagen de fondo"* — y tiene razón, aunque el `<img>` esté ahí.

- **Tope del velo: 70%.** Si a ese valor el texto no pasa contraste, el problema es la foto (demasiado clara, o con ruido en la zona del texto), no el velo: recortá distinto, oscurecé solo la banda del texto con un degradado, o cambiá de foto.
- **Degradado, no color plano:** `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.45))` deja legible el titular arriba y **deja ver la foto abajo**.
- **Verificalo mirando, no calculándolo:** abrí el hero y preguntate si se distingue qué hay en la foto. Si no se distingue, sobra el velo o sobra la foto.
- Comprobá el contraste del texto **sobre la zona real donde cae**, no sobre el negro teórico.

## E27 · SCROLL BRUSCO: `scroll-behavior` y `scroll-margin-top` no son opcionales

Reportado como *"los scroll son totalmente agresivos cuando tocás los botones"*. Dos causas, y las dos se cuelan al reescribir un archivo:

1. **Falta `scroll-behavior:smooth`** en `html` → cada CTA pega un salto seco.
2. **Falta `scroll-margin-top`** en el destino → con cabecera fija el título del formulario queda tapado y parece que el ancla está rota.

```css
html{ scroll-behavior:smooth !important; }
#lv-form{ scroll-margin-top:96px !important; } /* alto real de la cabecera + 16 */
@media (prefers-reduced-motion:reduce){ html{ scroll-behavior:auto !important; } }
```

El `scroll-margin-top` se **mide** contra la cabecera real, no se pone a ojo. Y el bloque de `prefers-reduced-motion` es obligatorio: el scroll suave marea a mucha gente.

## E28 · CARRUSEL QUE AVANZA DE VISTA EN VISTA

Si la flecha desplaza el ancho del contenedor, con dos tarjetas visibles saltás dos de golpe, se pelea con `scroll-snap` y el movimiento se siente violento.

**Las flechas avanzan UNA tarjeta:** `scrollBy({left: anchoDeUnaTarjeta + gap, behavior:'smooth'})`, midiendo **la tarjeta** con `getBoundingClientRect()`, nunca el contenedor. El arrastre táctil tiene que seguir funcionando (`overflow-x:auto` + `scroll-snap-align:start` en cada ítem).

**Y la prueba social va en carrusel salvo que el usuario diga lo contrario.** Maquetarla como grilla estática cuando pidió carrusel es un bloque rehecho entero.

## E29 · TÍTULOS DE SECCIÓN: mismo tratamiento en TODAS, y verificado

*"Los títulos descentrados"* casi nunca es un título mal puesto: son siete títulos con siete tratamientos distintos. Definí el patrón UNA vez (alineación, icono, gap, tamaño, peso) y aplicalo a todas las secciones.

**Verificalo, no lo mires:**
```js
[...document.querySelectorAll('section h2')].map(h => getComputedStyle(h).textAlign)
```
Si el array no es homogéneo, ahí está el bug. Lo mismo con `justifyContent` cuando el título lleva icono.

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
(function(){var d=document,w="https://tally.so/widgets/embed.js";function load(){if(typeof Tally!=="undefined"){Tally.loadEmbeds();return;}d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){e.src=e.dataset.tallySrc;});}if(d.querySelector("iframe[data-tally-src]")){if(typeof Tally!=="undefined"){load();}else if(!d.querySelector('script[src="'+w+'"]')){var s=d.createElement("script");s.src=w;s.async=true;s.onload=load;s.onerror=load;d.head.appendChild(s);}}})();
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

## E6 · `<mark>`: OBSOLETO, reemplazado por E22

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

Bullets de **5-8 palabras** como objetivo, **12 como techo duro** (por encima tiene dos ideas y se parte). Negrita en **una sola palabra** por línea, en la misma posición a ambos lados del espejo. Párrafos de cierre: una frase por línea.

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

**El Bloque 0 y el Bloque 1 se entregan SIEMPRE juntos, en el mismo mensaje y en el mismo bloque de código.** Sin excepciones, y también cuando el Bloque 0 no cambió. El hero sin el maestro delante se renderiza sin tokens, sin resets y sin el JS de Tally: el usuario lo pega, lo ve roto, y el reporte que llega es "cambiaste la estética" cuando en realidad falta la hoja de estilos. Nunca entregues el hero solo, nunca digas "el bloque 0 no cambia, pegá solo el 1": repetí los dos completos. Vale igual si el cambio es de una sola línea del hero.


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

## E22 · `<mark>`: dibujá el subrayado con `background-image`, NUNCA con `text-decoration`

Dos fallos encadenados, los dos comprobados en producción sobre WordPress.

**Fallo 1 — `box-shadow: inset`.** Apoya la línea en el borde inferior de la caja de línea, o sea por debajo de los descendentes: la línea flota lejos de la letra y se lee como un separador entre el título y el subtítulo, no como un subrayado.

**Fallo 2 — `text-decoration`.** Parece la solución correcta, pero **el color te lo pisa el tema**: el subrayado sale azul (o del acento que tenga el theme) aunque declares `text-decoration-color` con `!important`. Peor: si un ancestro tiene una decoración, esa decoración se **propaga** a los descendientes y un `text-decoration:none` en el hijo **no puede quitarla** — es comportamiento del propio CSS, no un bug de especificidad.

**La única forma robusta es no usar el mecanismo de decoración de texto:**

```css
.lc-band mark{
  background-color:transparent !important;
  background-image:linear-gradient(var(--lc-brand),var(--lc-brand)) !important;
  background-repeat:no-repeat !important;
  background-size:100% .075em !important;
  background-position:0 1.22em !important;   /* MEDIR, ver abajo */
  color:inherit !important;
  text-decoration:none !important;
  padding:0 !important;
  -webkit-box-decoration-break:clone !important;
  box-decoration-break:clone !important;
}
```

`background-color:transparent` mata el amarillo del user-agent. `box-decoration-break:clone` hace que, si el `<mark>` parte en dos líneas, cada fragmento lleve su propio subrayado.

**El `background-position` hay que MEDIRLO, no adivinarlo.** Depende del ascendente de la fuente: en Sora la línea de base cae a **1.161em** del tope de la caja del `mark`, no a `.8em` como sugiere la intuición. Con `.84em` el subrayado atraviesa las letras. Medilo así en el navegador y sumale ~`.06em`:

```js
const m = document.querySelector('h1 mark');
const r = m.getBoundingClientRect();
const fs = parseFloat(getComputedStyle(m).fontSize);
const probe = document.createElement('span');
probe.textContent = 'x';
probe.style.cssText = 'display:inline-block;width:0;overflow:hidden';
m.appendChild(probe);
const baseline = probe.getBoundingClientRect().bottom - r.top;
probe.remove();
console.log('baseline em:', (baseline/fs).toFixed(3),
            '→ background-position:', ((baseline + fs*0.06)/fs).toFixed(2) + 'em');
```

Como el valor va en `em`, una vez medido sirve para todos los tamaños de título de esa fuente. Si cambiás la fuente de titulares, volvé a medir.

## E23 · AUTORIDAD: dos párrafos, y las credenciales VAN DENTRO de la prosa

Corrige el Bloque 7 del copy / Bloque 6 del HTML. Lo que dicen más arriba (tres párrafos + lista de credenciales al costado) queda anulado por esto.

**Dos párrafos, no tres.** El tercero siempre termina repitiendo al segundo con otras palabras. Estructura:

- **P1 · Reencuadre del problema.** Por qué esto no es simple: qué hay que saber, qué sale mal, qué le pasa a la gente que lo intenta sola. Sin mencionar todavía a la marca.
- **P2 · Qué entendimos, qué hacemos y para quién.** Los tres se resuelven en un solo párrafo, y es acá donde entran las credenciales.

**Las credenciales NO van en lista con checks.** Una lista de credenciales al costado se lee como currículum y el lector la saltea. Van **tejidas dentro del párrafo 2, en negrita**, sosteniendo la afirmación que están respaldando:

```
MAL — lista suelta al costado:
  ✓ Más de 100 habitaciones gestionadas
  ✓ 4 años operando
  ✓ Cero casos de ocupación
  ✓ Sociedad constituida

BIEN — dentro de la prosa:
  "Después de gestionar **más de cien habitaciones en cuatro años, sin un
   solo caso de ocupación**, entendí que el problema no era la falta de
   capital. Era la falta de un proceso claro que uniera análisis, compra,
   reforma y gestión **bajo un mismo responsable**. Por eso creé
   **[Razón social], S.L.**, desde [ciudad]: para..."
```

La negrita cae solo en el dato duro, nunca en la frase entera (ver E13). Así el que escanea lee los hechos y el que lee entiende por qué importan.

**Fuentes de credenciales que casi siempre están y casi nunca se usan:** la razón social y el domicilio del footer legal, los años de operación, el volumen acumulado, el registro de incidencias en cero. Para alguien que va a poner capital, una sociedad con nombre y domicilio pesa más que cualquier adjetivo.

**Si el bloque tiene una carta de fundador, ESA es la sección de autoridad.** No hagas una autoridad genérica de marca y además una carta: la carta hace mejor el trabajo, porque reencuadra el problema en primera persona. Usá su foto real y su firma.

**El titular de este bloque no explica quién sos.** Hace una afirmación que el lector reconoce como propia. `"El verdadero problema no era la falta de capital. Era la falta de un proceso claro"` funciona; `"¿Por qué elegirnos?"` no.

## E24 · CIFRAS CONTRADICTORIAS EN EL MATERIAL DEL CLIENTE: unificar, y decirlo

Es frecuente que el brief y la web viva digan cosas distintas ("+100 habitaciones" en la franja de datos, "cerca de 100" en la carta del fundador; o 97 en un doc interno y +100 en producción). Son afirmaciones **incompatibles** y si quedan las dos en la misma página, la que pierde es la credibilidad de las dos.

**Qué hacer:** unificá por la cifra **publicada más reciente**, aplicala en TODAS las secciones donde aparezca, y **avisale al usuario en una línea** cuál elegiste y por qué, ofreciendo cambiarla si el dato real es el otro. Nunca dejes las dos versiones conviviendo, y nunca las unifiques en silencio.

Y recordale que **un número específico convence más que uno redondo** (Ogilvy): si el dato real es 97, `97 habitaciones` es mejor copy que `+100`.
