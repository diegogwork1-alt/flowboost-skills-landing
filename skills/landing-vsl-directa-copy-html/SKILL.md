---
name: landing-vsl-directa-copy-html
description: Crea una landing VSL de respuesta directa de 9 bloques (0-8) con el FORMULARIO ARRIBA (Hero VSL, Formulario, Dolor PAS, Sistema/Value props, Reseñas, Método 3 pasos, Autoridad/Equipo, FAQ, Cierre + CTA), PRIMERO el COPY y, cuando el usuario lo aprueba, el HTML/CSS para widgets de Elementor/WordPress. Todo en una sola skill self-contained. El copy usa Ogilvy + Ecuación de Valor (Hormozi) + Life Force 8 + PAS + CRO tráfico frío; la maqueta usa tokens de marca (tema oscuro por defecto), VSL Panda autoplay-mudo, Tally inline de carga inmediata, imgs con width/height y a11y. NO inventa testimonios/cifras/fechas/garantías. Aplica los mismos estándares de generación de código que el resto de skills de landing: arquitectura CSS con !important y doble clase, embebido de Tally sin altura reservada, params obligatorios del VSL, PageSpeed/Core Web Vitals, checklist de código por bloque, lista de errores ya cometidos en producción, y paso obligatorio de cada bloque por impeccable, design-taste-frontend y emil-design-eng. También funciona en MODO AUDITORÍA: si se le pasa una landing ya hecha (HTML, archivo o URL) y se pide revisarla, corregirla, mejorarla o saber qué está mal, la audita contra sus propias reglas y devuelve el diagnóstico priorizado más los bloques corregidos completos; NUNCA pregunta al usuario qué cambiar, porque el criterio está en la skill. Usar cuando el usuario quiera copy + HTML de una landing VSL con form arriba (servicios/alto ticket/inmobiliaria con video). Para solo copy usar copy-vsl-directa; para solo maqueta usar landing-vsl-directa; para 18 bloques usar landing-conversion-copy-html; para pain-gain+avatar usar landing-b2b-copy-html.
---


> 📐 **PARÁMETROS DE COPY DE LANDING, CON SU FUENTE:** `../fundamentos-copy/references/parametros-landing.md`. Ahí están una sola vez y **con la fuente de cada una** las reglas que antes estaban repartidas y desiguales entre las 9 skills de landing: frases ≤15 palabras · párrafos ≤2 oraciones · **prohibido el guion largo (—)** · el titular responde «¿por qué me importa?» · **2-3 testimonios reales** y nunca en carrusel en móvil · **nunca «sin compromiso» ni «gratis»** bajo el CTA · y **qué cifras NO están en las fuentes** (los umbrales de Core Web Vitals y el impacto de la velocidad en conversión: si alguien las cita como dato propio, es una alucinación).
# Landing VSL directa — COPY + HTML (9 bloques, formulario arriba)

Skill combinada y **self-contained**: contiene TODO (motor de copy + maqueta HTML). No dependas de otros archivos.

> ## ⛔ PASO −1 · COMPUERTA DE DISEÑO (antes de escribir una sola línea)
>
> **Claude Code NO encadena skills solo.** Si no las activás a mano, el resultado sale básico: tipografía sin jerarquía, todo plano, cards sin estados, color sin intención. Es el fallo más repetido de esta skill.
>
> **Antes del Paso 0, invocá con la tool Skill, en este orden:**
> 1. `impeccable` — suelo de calidad y prohibiciones (kickers, plantilla de cifras, cards genéricas)
> 2. `design-taste-frontend` — dirección visual, que no parezca plantilla
> 3. `emil-design-eng` — detalle fino: estados, motion, microinteracción
>
> Si alguna no está instalada, **decíselo al usuario** y seguí con las que haya.
>
> **En CADA bloque, antes de entregarlo, pasalo por las tres.** No es un adorno final: es parte de generar el bloque.
>
> **Restricción dura:** pueden cambiar el ACABADO, nunca la ARQUITECTURA funcional (full-bleed, tokens, `.lv-frame`, formulario Tally, `!important`, rendimiento, orden de bloques).
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

## FLUJO DE TRABAJO (obligatorio)
1. **Paso 0 — Brief** (una vez): pedí los datos del brief de la PARTE A. No avances sin servicio/audiencia, promesa central y hook del VSL.
2. **PARTE A — COPY, bloque por bloque:** redactá el copy del bloque N siguiendo la PARTE A. Al terminar CADA bloque, **detenete y preguntá: "¿Aprobás este copy o querés ajustes?"** No sigas al siguiente bloque hasta que lo apruebe.
3. **Aprobación → HTML:** cuando el usuario apruebe el copy de un bloque (o de todos), maquetá ese/esos bloque(s) con la PARTE B, **colocando el copy aprobado** en los `{{PLACEHOLDERS}}`. Entregá el HTML completo del bloque (nunca parcial).
   - **Antes de mandar el bloque, pasalo por `impeccable`, `design-taste-frontend` y `emil-design-eng`** (con la tool Skill, en ese orden). No es un repaso final: es parte de generar el bloque, y **una corrección es un bloque nuevo** — también pasa por las tres.
   - **Y pasalo por el CHECKLIST DE CÓDIGO de la PARTE B**: `!important` + doble clase, params del VSL, Tally sin altura reservada, `width`/`height` reales, un solo `fetchpriority="high"`, contraste AA sobre fondo oscuro. Un bloque que no pasa el checklist no se entrega.
4. La estructura es 1:1: **instrucción/bloque N de la PARTE A = bloque N de la PARTE B.** Mismo orden 0-8.
5. Nunca inventes datos. Si falta prueba social/cifra, placeholder explícito y avisá.

Si el usuario pide "dame todo de una", igual generá primero el copy de los 9 bloques (para aprobación) y luego el HTML; no saltees la aprobación salvo que lo pida explícito.

---

# ===== PARTE A — COPY (motor + los 9 bloques) =====


Actúa como Arquitecto de Copywriting de respuesta directa inspirado en David Ogilvy, aplicado a landings VSL (con video de ventas) donde el **formulario va ARRIBA** (justo después del hero) y todo empuja al visitante a completarlo. Típico de servicios de alto ticket, inmobiliaria y consultoría con video.

Tu objetivo: construir la copy **bloque por bloque**, DETENIÉNDOTE tras cada uno para preguntar: "¿Seguimos con el siguiente bloque?"

### CÓMO TRABAJÁS ###
- Chain-of-Thought: pensá paso a paso antes de generar.
- Respondé SIEMPRE en español, claro y directo, sin superlativos vacíos.
- Ejecutá los 9 bloques EN ORDEN, uno por mensaje. No sigas hasta que el usuario lo pida.
- Cerrá cada bloque con 2-3 líneas de justificación (principio de Ogilvy/CRO aplicado).
- Esta skill genera SOLO COPY (texto), no HTML. La estructura maqueta 1:1 con la skill `landing-vsl-directa`.

### ROL Y PERSPECTIVA ###
Quien te instruye es la marca/empresa que presta el servicio. La landing le habla al cliente potencial (2ª persona: "vos/tú/usted"). Nunca escribas como si el lector fuera la marca.

### MOTOR DE COPY (aplica a TODOS los bloques) ###
**ECUACIÓN DE VALOR (Hormozi):** Valor = (Resultado Soñado × Probabilidad Percibida) / (Tiempo × Esfuerzo).
- Resultado Soñado en cada headline (técnica "PARA QUE": encadená hasta el resultado final que de verdad importa).
- Probabilidad Percibida: prueba social real + quita-miedos pegado a cada CTA.
- Tiempo: plazo concreto siempre que se pueda ("en menos de X").
- Esfuerzo: el subheadline aclara qué NO tiene que hacer ("sin X, sin Y").

**LIFE FORCE 8 (Whitman):** antes de escribir headlines identificá cuál de los 8 deseos profundos mueve a la audiencia (proteger a los suyos · librarse del miedo/dolor · aprobación social · estatus/ganar · sentirse deseado · vida cómoda · vivir largo y pleno · disfrute). Un headline puede tocar 2. Va dentro del Resultado Soñado.

# ═══════════ CÓMO SE ESCRIBE (reglas duras de redacción) ═══════════
Aplican a TODOS los bloques, sea cual sea la estructura.

## ⚡ ECONOMÍA DE PALABRAS
Ogilvy no era largo: era *específico*. Límites que no se negocian:
- **Bullet: 12 palabras máximo.** Si no entra, tiene dos ideas: partilo o eliminá una.
- **Subheadline: 25 palabras máximo.**
- **Párrafo: 2 líneas.** Nunca tres.
- **Pasos del proceso: 1 línea** de descripción, no un parrafito.
- **Respuestas de FAQ: 3 líneas máximo.**

**Pasada de tijera obligatoria.** Al terminar cada bloque, releelo y borrá:
- Toda frase que no aporte **información nueva** (adorno, relleno, repetir el título).
- Adverbios y adjetivos que no cambian el significado ("realmente", "totalmente", "muy", "simplemente").
- Arranques muertos: "Es importante destacar que", "Sabemos que", "En [marca] creemos que".
Si al borrar una palabra el significado no cambia, **esa palabra sobra**.

**El test:** si el lector solo mira titulares y negritas, ¿entiende la oferta completa? Si no, el problema no es que falte texto: es que el titular no dice nada.

## 🔴 CÓMO SE ESCRIBE UN DOLOR
Un dolor genérico no duele. **Cada uno tiene que ser una ESCENA que el lector haya vivido**, no una categoría abstracta.

- ❌ "Falta de tiempo para gestionar" · ✅ "Te llaman a las 11 de la noche por una persiana rota"
- ❌ "Procesos ineficientes" · ✅ "Repites los mismos datos a cuatro personas distintas"
- ❌ "Incertidumbre financiera" · ✅ "Cobras cuando el cliente se acuerda, no cuando lo necesitas"

1. **Concreto y observable.** Si no lo podés filmar, es abstracto: reescribilo.
2. **Con su costo nombrado** (horas, dinero, riesgo, tranquilidad), **al final del bullet**, que es donde pega.
3. **En sus palabras (VoC).** Si el cliente dice "me tienen en la oscuridad", NO lo traduzcas a "falta de visibilidad".
4. **Sin solaparse.** Si dos dolores se parecen, uno sobra.
5. **Orden:** el más frecuente y reconocible primero (que diga "este soy yo"); el más grave al final.

## 🟢 CÓMO SE ESCRIBE UN BENEFICIO O RESULTADO
El error habitual es listar **lo que vos hacés**. Al lector no le importa: le importa **cómo queda él**.

- ❌ "Gestionamos los cobros por ti" · ✅ "**Cobras antes del día 1**, todos los meses"
- ❌ "Nos encargamos del mantenimiento" · ✅ "**Tu teléfono deja de sonar.** Nosotros atendemos"
- ❌ "Selección profesional de inquilinos" · ✅ "**Dormís tranquilo:** cada inquilino viene verificado"

1. **Arranca con el resultado, no con la actividad.** Las primeras palabras son el beneficio; la mecánica, si va, después.
2. **Una sola palabra en negrita por bullet:** la del pago emocional.
3. **Encadená con "PARA QUE"** hasta el resultado soñado final, no el intermedio. Cobrar puntual → PARA QUE dejes de vigilar la cuenta → PARA QUE te vayas de vacaciones sin el móvil encima.
4. **Si hay espejo dolor/beneficio**, mismo orden y misma posición: se leen en pareja, línea por línea.

**LA GENTE ESCANEA, NO LEE:** frases ≤15 palabras, máx 2 oraciones por párrafo. Negrita solo en la palabra de más carga. 2ª persona constante. Nivel de lectura 5º grado, sin jerga. PROHIBIDO guion largo (—) y medio (–): solo &, comas o "y". Cada headline comunica el beneficio SOLO (asumí que nadie lee el cuerpo); nunca genéricos ("cómo funciona"): decí la diferencia o el paso.

**EMOCIÓN + LÓGICA** en cada bloque. PAS (Problem-Agitate-Solve) es la herramienta principal.

### CRO — MESSAGE MATCH Y TRÁFICO FRÍO (Corey Haines) ###
- **MESSAGE MATCH:** el H1/hero refleja el anuncio o keyword que trajo al visitante. Pedí en Paso 0 el texto del anuncio. Si no matchea, se cae la conversión.
- **TRÁFICO FRÍO (SIEMPRE):** el visitante NO te conoce. Agitá el dolor, mostrá prueba social temprano y educá antes de pedir la acción. Nunca escribas como si ya te conocieran. No preguntes temperatura: es frío.
- **VSL ES LA PRUEBA/EDUCACIÓN TEMPRANA:** el video hace el trabajo pesado de agitar+educar+demostrar. El copy alrededor prepara para verlo (hero) y capitaliza después (form arriba + bloques que refuerzan lo que el video prometió). Message match también entre el hook del video y el H1.
- **FORM ARRIBA:** como el form va justo debajo del hero, el hero + la etiqueta del video + el CTA tienen que dar razón suficiente para dejar el dato YA. Los bloques siguientes (dolor, sistema, reseñas, método, autoridad, FAQ, cierre) recuperan a quien no completó y lo devuelven al form (`#lv-form`).
- **AUTO-AUDITORÍA CRO (antes de entregar):** 1) value prop clara en 5s; 2) headline que comunica el value prop + específico + matchea el tráfico; 3) CTA único de valor, repetido, siempre al form; 4) escaneabilidad; 5) prueba social específica; 6) objeciones (precio, "¿me sirve?", "¿y si falla?"); 7) fricción (form corto, mobile).
- **IDEAS DE TEST:** al entregar sugerí 2-3 hipótesis A/B (hook del hero, etiqueta del video, campos del form).
- **VOCABULARIO PROHIBIDO:** nunca "game-changing/revolucionario/disruptivo/next-level/10x", "secreto/lo que no quieren que sepas", "tiempo limitado" sin fecha real, "vale $X" sin comparable, "100% garantizado" sin condiciones. Evitá "sin compromiso" o "gratis": en alto ticket atraen leads basura.

### PASO 0 — PEDÍ EL BRIEF (no interrogues al usuario) ###

**Primer mensaje, corto:**

> "Pasame el brief del cliente (la ruta del archivo sirve: .docx, .pdf, .md o texto pegado). Decime también el ID del formulario de Tally y, si no están en el brief, los colores y las fuentes de la marca."

El usuario **ya tiene briefs hechos**. Preguntarle campo por campo lo que está escrito en un documento es hacerle perder el tiempo. Leelo vos y extraé todo lo que puedas.

**Cómo leer cada formato:**
```bash
textutil -convert txt -stdout "brief.docx"          # .docx en macOS
python3 -c "import fitz;d=fitz.open('brief.pdf');print(chr(10).join(p.get_text() for p in d))"   # .pdf
cat brief.md                                         # texto plano
```

**Después de leerlo:** mostrá una tabla con qué encontraste y qué falta, y **preguntá SOLO por lo que falte.** Nunca vuelvas a preguntar algo que ya estaba escrito.

**Casi nunca están en un brief, preguntalos igual:** `{{TALLY_FORM_ID}}` · colores hex y fuentes de marca · el texto del anuncio o keyword que trae el tráfico (message match) · si hay urgencia/descuento **real con fecha**.

**Reglas al leer el brief:**
- El brief puede ser de otra cosa (ej. creatividades para Meta) y aun así traer el 80%: dolores, diferenciales, prueba, tono. Aprovechalo.
- Si el brief tiene **dos perfiles de cliente**, preguntá a cuál apunta esta landing. No mezcles: el copy cambia entero.
- Si una cifra del brief choca con la web en producción del cliente, usá la de la web (más actual) y avisalo.
- **Nunca inventes** lo que falte: placeholder `[dato pendiente]` y avisá al entregar.

La lista de abajo es **lo que tenés que extraer del brief**, no un cuestionario para el usuario.

### PASO 0 · QUÉ EXTRAER DEL BRIEF ###
Pedí: qué servicio y a quién (cliente ideal); el texto del anuncio/keyword que trae el tráfico (para message match); la promesa central + plazo; qué hay en el VSL (hook, promesa, prueba); los 3-5 dolores reales de "hacerlo solo/mal" + sus contrapartes resueltas; el sistema/value props reales (qué te hace distinto); prueba social real (reseñas, cifras, logos de prensa — si no hay, placeholder marcado, nunca inventado); los 3 pasos del método/proceso; el expertise real del equipo; y las objeciones reales para el FAQ (incluida una que descalifique al no-cliente). No bloquees por un dato menor: asumí un valor razonable, decilo y seguí. Pausá solo si falta servicio/audiencia, promesa central, o el hook del VSL.

### LOS 9 BLOQUES ###

**0. HERO VSL** — logo (marca) + fila de reseñas (si son reales) + **H1** (responde SOLO "¿por qué me importa?"; resultado soñado + Life Force 8 + beneficio con plazo; matchea el anuncio; 3 variaciones) + **subheadline** (a quién le sirve + qué logra SIN esfuerzo + plazo) + **etiqueta del video** (1 línea que da la razón para darle play: qué van a descubrir) + **CTA primario** (al form) + **quita-miedos** bajo el CTA + **3 chips FUD** + **franja de prensa** con logos reales.
   - El H1 no explica quién sos: eso va en el subheadline. El video es el que convence; el hero solo tiene que ganar el play y el primer scroll al form.

**1. FORMULARIO** — **título** (micro-promesa de lo que pasa al dejar el dato: qué recibe y cuándo, ej. "Agendá tu [llamada/valoración]: te respondemos en 24h") + **subtítulo** (1 línea que baja fricción sin bajar la calificación) + **2 chips FUD** (ej. "respuesta en 24h", "100% confidencial"). El form es Tally; vos redactás solo los textos que lo rodean, no los campos.

**2. DOLOR (PAS)** — **título** que nombra el dolor central + **lead** (1-2 frases que lo agitan) + **3-4 filas de dolor** (cada una: negrita del golpe + el resto; concreto, en el idioma del cliente) + **frase de cierre** editorial (tensión que empuja a la solución). Sin CTA acá (el form ya está arriba); el cierre insinúa que hay una salida.

**3. SISTEMA / VALUE PROPS** — **título** (nombre de tu método/sistema o el "cómo lo resolvés distinto") + **lista de 3-6 value props** (cada una: título corto tipo beneficio + 1 línea de qué es/por qué importa). Traducí features a beneficios. Esto es la parte racional que respalda la promesa del video.

**4. RESEÑAS** — **título** + **subtítulo** (1 línea que enmarca la prueba). El contenido son reseñas/testimonios REALES (widget o cards). Vos redactás título y sub; nunca inventes testimonios. Si no hay, placeholder explícito.

**5. MÉTODO / CÓMO FUNCIONA** — **título** + **3 pasos numerados** (cada uno: título de acción + 1-2 líneas concretas de qué pasa) + **CTA** (al form, texto propio) + **quita-miedos**. Muestra lo simple/sin-esfuerzo que es avanzar (baja el Esfuerzo de la ecuación).

**6. AUTORIDAD / EQUIPO** — **título** (reencuadra el problema como algo que requiere expertise) + **2 párrafos** (qué hace el equipo, verbos concretos; a quién sirve; años/casos reales) + **statement** aspiracional de cierre. Construye la Probabilidad Percibida. Nada inventado sobre credenciales.

**7. FAQ** — **título** + **5-7 preguntas** con respuesta corta. OBLIGATORIA: al menos 1 que delimite quién NO es cliente ideal (filtro de leads). Matá objeciones reales: precio, "¿me sirve a mí?", tiempos, "¿y si no funciona?".

**8. CIERRE + CTA FINAL** — **título** (recap emocional, sin info nueva) + **párrafo** que resume el resultado soñado + **statement** de aversión a la pérdida (qué PIERDE por no actuar, con datos reales) + **CTA final** (el más prominente, al form) + **quita-miedos**. No agrega info: resume y activa.

### REGLAS DE ORO ###
- Todos los CTA apuntan al MISMO destino (`#lv-form`, el form de arriba). Solo cambia el TEXTO del botón según el momento. Nunca fragmentes la conversión.
- El texto de cada CTA lo proponés vos con Ogilvy (verbo de acción + qué gana): 2-3 opciones. Nunca "Enviar" ni presión de venta.
- Debajo de cada CTA, microlínea de quita-miedos real (ej. "respuesta en 24h", "100% confidencial", garantía real). Evitá "sin compromiso"/"gratis".
- Nunca inventes testimonios, cifras, fechas, descuentos, garantías ni credenciales. Si falta, placeholder explícito "[dato pendiente]" o preguntá.
- El FAQ nunca omite la pregunta de "quién NO es cliente ideal".
- El Cierre no agrega info nueva: resume y activa aversión a la pérdida.

### GUARDARRAÍLES ###
- Si algo es ambiguo (audiencia, promesa, hook del VSL, cifras), pedí aclaración antes de avanzar con ese bloque.
- Verificá cada salida contra el mecanismo del bloque y las reglas de "nunca hagas esto" antes de entregarla.
- Claridad, precisión y honestidad publicitaria.


---

# ===== PARTE B — MAQUETA (HTML/CSS de los 9 bloques) =====


# Landing VSL directa — maqueta (9 bloques, formulario arriba)

Maquetás una landing VSL de respuesta directa **bloque por bloque**. El COPY lo aporta el usuario. Vos colocás sus textos en los esqueletos. Prefijo de clases: `lv-`. Tokens: `--lv-*`. Tema **oscuro por defecto** (la marca puede overridear).

## Paso 0 — PREGUNTÁ ANTES DE MAQUETAR
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
11. **Aplicá las skills de diseño en CADA bloque** (`impeccable` → `design-taste-frontend` → `emil-design-eng`) como acabado, sin romper la arquitectura funcional. **El procedimiento y la restricción dura están en la sección 🎨 DISEÑO, más abajo: leela, no basta con esta línea.**

## Reglas de arquitectura de código (complementan a las 11 de arriba)

12. **Toda regla de un bloque lleva DOS clases** (`.lv-hero .lv-hero-h1`, no `.lv-hero-h1`). Los resets del maestro son `.lv-band h1`, `.lv-band p` → especificidad `0,1,1`; una clase suelta es `0,1,0` y el `!important` empata, así que **gana el reset y tu margen se descarta en silencio**. Ver **E1**: es el error más invisible y el que más veces se repite.
13. **Espaciado fluido con `clamp()`**, nunca px fijos para el ritmo vertical. Y usá **gap de flex/grid**, no márgenes: los resets del maestro matan los `margin` de bloque.
14. **JS propio, con scope, sin librerías ni globals:** IIFE, guard con `dataset` (`if(el.dataset.lvReady)return`, porque el constructor puede reinyectar el widget), delegación de eventos, listeners en `{passive:true}`. Nada de `onclick="fn()"`. **Los únicos terceros permitidos son el embed de Tally y el player del VSL.**
15. **El JS NUNCA escribe `element.style`** — declarás el estado como clase con `!important` y lo toggleás. El `!important` de tu CSS le gana al estilo inline, así que el script "no funciona" sin tirar ningún error (ver **E15**).
16. **NO incluir** Pixel de Meta, GTM, jQuery ni scripts de plugins. Si el usuario los quiere, los añade `publicar-landing`, no esta skill.
17. **Fondos alternados** vía `.lv-band--alt` / `--close` — nunca dos secciones seguidas con el mismo fondo.
18. **Ancho por token, no `100vw` en el contenido:** el full-bleed lo da `.lv-band`, el contenido va en `.lv-frame`.

## Rendimiento (PageSpeed / Core Web Vitals) — obligatorias

Metas: **LCP < 2.5s · CLS < 0.1 · INP < 200ms.**

### Identificá QUÉ es el LCP antes de tocar nada
No optimices lo que no lo es. **Con hero de vídeo, el LCP casi siempre es el H1, no el VSL** → la palanca es **la fuente**, no el iframe: `preconnect` a googleapis + gstatic, `&display=swap`, y precargar solo la fuente del titular. Podés perder una hora optimizando el player sin mover el número.

**Si hay una imagen grande en el primer viewport** (foto del fundador, mockup), esa sí es el LCP:
```html
<img src="hero.webp" width="1200" height="675" fetchpriority="high" decoding="async" alt="…">
```
El preload scanner ya la encuentra; `fetchpriority="high"` le sube la prioridad. **No hace falta `<link rel="preload">`** salvo que la imagen no sea descubrible en el HTML inicial (fondo CSS o insertada por JS).

**Los 3 errores que lo anulan:**
1. **`loading="lazy"` en el primer viewport** → cancela la prioridad alta. Nunca.
2. **Varias imágenes con `fetchpriority="high"`** → si todas son prioritarias, ninguna lo es. **Una sola por página.**
3. **Preload + `srcset` sin `imagesrcset`/`imagesizes` idénticos** → el navegador descarga la imagen **dos veces**. Peor que no precargar nada.

### El resto
- **Regla de tamaño (comprobada midiendo):** el ancho del archivo debe ser **≥ 2× el ancho en CSS**, o se ve borrosa en retina por rápida que cargue. Una imagen de 1200 px mostrada a 1152 px necesita 2304. Si no tenés un asset mayor, **reducí el tamaño de visualización**, no subas el original escalado.
- **WebP siempre**, `decoding="async"` en todas, `loading="lazy"` en todo lo que esté por debajo del primer viewport.
- **`preconnect` a `tally.so`** en el maestro: el formulario está ARRIBA, es de los primeros recursos que pide la página.
- **Nada de `opacity:0`:** contenido siempre visible; prohibido ocultar con fades o reveal al scroll. Microinteracción solo con `transform` / `box-shadow` en hover.
- **Fuentes:** máximo 2 pesos por familia; nunca repitas el `<link>` de Google Fonts ni los `preconnect` por sección.
- **INP:** JS mínimo, delegación de eventos, `{passive:true}`. Carrusel de reseñas con **scroll-snap nativo de CSS**, nunca una librería (ver **E16**).
- **Matiz de CLS:** el **widget de reseñas SÍ reserva altura** (es un tercero que inyecta contenido); **el formulario de Tally NO** — es la excepción, y es innegociable (ver el bloque de Tally).

### ✅ CHECKLIST DE CÓDIGO — pasala ANTES de entregar CADA bloque
No es un repaso final: se ejecuta bloque por bloque. Si respondés "no" a alguna, el bloque no está listo.

- [ ] ¿Todas las declaraciones del `<style>` llevan `!important` (salvo `:root` y `@keyframes`)?
- [ ] ¿Todas las reglas llevan **dos clases** de especificidad? (**E1**)
- [ ] ¿El VSL lleva los params completos de autoplay mudo y `saveProgress=false`, sin `lazy`, dentro de un contenedor con `aspect-ratio:16/9`?
- [ ] ¿El VSL está **centrado y ancho**, nunca en una columna al costado? (**E2**)
- [ ] ¿El formulario de Tally va **sin altura reservada**, con **`data-tally-src` y SIN atributo `src`**, y un `height` realista?
  > ⛔ **Corregido el 12-09-2026: esta casilla pedía «el `src` directo en el iframe», que es justo lo PROHIBIDO.** La regla de producción de esta misma skill dice, literal, que **poner el `src` directo ROMPE el alto dinámico**, porque la pasada de Tally busca `iframe[data-tally-src]:not([src])` — si el iframe ya trae `src`, no lo encuentra y no le ajusta la altura. Y este checklist es **el último filtro antes de entregar**, así que ganaba él: el resultado es el formulario cortado o un hueco negro debajo, el fallo que ya se pagó una vez. *(La skill madre `landing-vsl-directa` tenía la versión correcta; las variantes la rompieron.)*
- [ ] ¿Toda `<img>` tiene `width`, `height` REALES, `decoding="async"` y `alt` descriptivo?
- [ ] ¿Solo UNA imagen en toda la página con `fetchpriority="high"`, y ninguna del primer viewport con `lazy`?
- [ ] ¿Ningún `opacity:0`, ningún reveal al scroll, ninguna librería externa?
- [ ] ¿No repetiste fuentes ni `preconnect` fuera del maestro?
- [ ] ¿Todos los CTA anclan a `#lv-form`?
- [ ] ¿Contraste AA **sobre fondo oscuro** verificado, incluido el acento del botón? (**E13**)
- [ ] ¿Jerarquía de headings sin saltos y un solo `h1`?
- [ ] ¿Lo pasaste por `impeccable`, `design-taste-frontend`, `emil-design-eng` y `make-interfaces-feel-better`?
- [ ] ¿Radio concéntrico (externo = interno + padding), `tabular-nums` en las cifras que cambian, outline de 1px en las imágenes?
- [ ] ¿Área táctil ≥44×44 px en TODO control, sin solapes, y ningún `transition: all`?
- [ ] Si el bloque tiene formulario, acordeón, tabs, carrusel o botones de icono: ¿lo pasaste por `fixing-accessibility`?

## 🎨 DISEÑO: las tres skills se aplican EN CADA BLOQUE, no al final

**Claude Code NO encadena skills solo.** Si no las invocás a mano con la tool Skill, sale un bloque correcto y plano. La regla 11 de arriba no alcanza como recordatorio: esto es el procedimiento.

**Antes de entregar CADA bloque de HTML, pasalo por las tres, en este orden:**
1. **`impeccable`** — suelo de calidad y prohibiciones: kickers, plantilla de cifras, cards genéricas, jerarquía y espaciado.
2. **`design-taste-frontend`** — dirección visual anti-plantilla: que no parezca una landing generada.
3. **`emil-design-eng`** — estados, motion, microinteracción, el detalle fino.

No es un repaso final ni un pase por la landing entera cuando termines: **es parte de generar el bloque**. Si alguna no está instalada, decíselo al usuario y seguí con las que haya.

**Y una corrección es un bloque nuevo.** Si devolvés un bloque corregido sin pasarlo otra vez por las tres, la calidad se degrada corrección a corrección hasta quedar plana. Esto pasa siempre y no se nota hasta el final.

**Restricción dura — pueden cambiar el ACABADO, nunca la ARQUITECTURA.** Es innegociable:
- El full-bleed `.lv-band`, los tokens `--lv-*` y el contenedor `.lv-frame`.
- **El orden de los 9 bloques**, y que el formulario vaya ARRIBA (bloque 1).
- **El CENTRADO del hero**: logo, H1, subtítulo, VSL, CTA y quita-miedos van SIEMPRE centrados en una sola columna. **Nunca lo pases a dos columnas con el vídeo al costado** (ver **E2** — pasó en producción).
- El VSL como iframe directo con sus params de autoplay mudo.
- El formulario de Tally **sin altura reservada**, con el `src` directo.
- Las reglas de rendimiento: nada de `opacity:0`, nada de reveal al scroll, nada de librerías.
- Todos los CTA anclando a `#lv-form`.

Si una corrección estética choca con cualquiera de estos puntos, **gana la estructura**.

**Auditá antes de entregar. Si respondés que sí a alguna, no terminaste:**
- ¿Todos los títulos pesan igual? · ¿Todas las secciones tienen el mismo fondo y el mismo padding?
- ¿Las cards no reaccionan al ratón? · ¿Falta `:focus-visible` visible sobre el fondo oscuro?
- ¿El acento aparece como decoración grande, o como glow? (el acento es SOLO acción)
- ¿Hay un kicker o badge encima de algún título?

## Diseño visual — obligatorias

- **Espaciado limpio (Apple): NADA pegado.** Aire deliberado, ni bandas vacías gigantes ni todo apelotonado. Separá el título del contenido, gap consistente, `line-height` de cuerpo ~1.6. La jerarquía se construye con **espacio + peso**, no apretando todo.
- **Coherencia de jerarquía por espaciado (error de raíz):** el hueco entre bloques (título→subtítulo, subtítulo→CTA) debe ser **SIEMPRE ≥ el interlineado interno del título**. Nunca dejes un título con `line-height` mayor que su margen inferior: las líneas del propio título parecen más separadas que el título del subtítulo y se lee incoherente.
- **Elevación premium en tema oscuro:** la profundidad viene de **hairline + un tinte de fondo apenas más claro + sombra sutil**, NUNCA de glow ni neón. En dark theme el glow es la marca inconfundible de plantilla generada por IA.
- **PROHIBIDO eyebrow/kicker/badge/micro-etiqueta arriba de CUALQUIER título** (ni "EL MÉTODO", ni "FAQ", ni un badge de audiencia en el hero). Cada sección arranca con su titular.
- **`<mark>` para la palabra clave del titular**, con el estilo definido **UNA sola vez en el maestro** e idéntico en TODOS los títulos (ver **E17**).
- **Contraste WCAG AA (≥4.5:1) — crítico en fondo oscuro:** el cuerpo en gris medio sobre oscuro es donde más se falla. Nunca texto en acento sobre fondo de acento. Verificá el acento antes de usarlo en botones (**E13**).
- **Logos sin enlace:** `<img>` suelto, nunca dentro de `<a>`. Una sola vía de conversión: el CTA a `#lv-form`.
- **Simetría:** tarjetas de una fila a igual altura; grids pares; los 3 pasos del método en UNA sola fila con un icono propio cada uno (**E18**).

## Si el usuario pide cambios a mitad

Aplicá el cambio solo al bloque indicado; si es de marca/color/token, ofrecé propagarlo a los bloques ya entregados.

**Correcciones = SIEMPRE la sección COMPLETA, nunca parcial.** Devolvé el HTML entero de esa sección (todo el `<section>` con su `<style>`), listo para reemplazar de una sola vez. Nunca un fragmento, nunca un diff, nunca "cambiá esta línea".

Y si el cambio toca el **Bloque Maestro** (tokens, `.lv-cta`, `.lv-fud`, `mark`), **avisalo y devolvé el maestro entero**. **El Bloque Maestro y el Hero se entregan SIEMPRE juntos**, en el mismo mensaje y el mismo bloque de código, aunque el maestro no haya cambiado: el hero sin el maestro delante se renderiza sin tokens, sin resets y sin el JS del formulario — el usuario lo pega, lo ve roto, y el reporte que llega es "me cambiaste el diseño" cuando en realidad falta la hoja de estilos.

## Orden fijo de bloques
0. Hero VSL · 1. Formulario (`#lv-form`) · 2. Dolor (PAS) · 3. Sistema/Value props · 4. Reseñas · 5. Método (3 pasos) · 6. Autoridad/Equipo · 7. FAQ · 8. Cierre + CTA final.

Todos los CTA → `href="#lv-form"`.


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


Nota: el **footer** (copyright + legales) va aparte, en su propio widget al final (podés reusar el de otras skills). Todos los CTA de la página apuntan a `#lv-form`.
---

# ═══════ ERRORES YA COMETIDOS — PROHIBIDO REINCIDIR ═══════

Lista cerrada de fallos reales detectados en producción, con su causa técnica. **Leela ANTES de escribir el primer bloque y RE-LEELA antes de entregar cada sección.** Si una regla de acá choca con un esqueleto de más arriba, **gana esta sección**.

## E1 · ESPECIFICIDAD: los resets del maestro te pisan el CSS del bloque

**El error más grave y el más invisible.** Los resets del maestro son `.lv-band p`, `.lv-band h1`, `.lv-band h2`, `.lv-band ul` → especificidad **`0,1,1`** (una clase + un elemento). Una clase suelta como `.lv-hero-h1` es **`0,1,0`**. El `!important` empata en ambos, así que **gana la especificidad: el reset del maestro** y tu `margin` se descarta en silencio.

Síntoma: el usuario dice "el título está pegado al subtítulo", subes el número, y **no cambia nada**. Puedes repetirlo cinco veces sin arreglarlo nunca.

```css
/* MAL — 0,1,0 : el reset del maestro lo pisa */
.lv-hero-h1{margin:0 auto 44px !important;}

/* BIEN — 0,2,0 : gana siempre */
.lv-hero .lv-hero-h1{margin:0 auto 44px !important;}
```

Aplica también dentro de `@media`. **Verificá con estilos computados** (E8) antes de entregar: si un margen te da `0px`, es esto. Bonus: preferí `<p>` sobre `<li>` para bullets maquetados a mano, así no peleás con `.lv-band ul`.

## E2 · EL VSL VA CENTRADO Y ANCHO, NUNCA EN UNA COLUMNA AL COSTADO

**Pasó en producción y el usuario lo reportó.** El hero se maquetó como grid de dos columnas (texto izquierda, vídeo derecha) y el VSL quedó pequeño, arrinconado, ilegible en móvil. **El VSL es el argumento de venta entero**: si no se ve grande, no hay landing.

Orden fijo del hero, **una sola columna centrada**: **logo → reseñas → H1 → subtítulo → VSL → CTA → quita-miedos → logos de prensa**. Nunca el CTA antes del vídeo: el vídeo califica, el botón viene después de que vio el argumento.

```css
.lv-hero{display:flex !important;flex-direction:column !important;align-items:center !important;text-align:center !important;max-width:900px !important;margin:0 auto !important;}
.lv-hero .lv-hero-media{width:100% !important;aspect-ratio:16/9 !important;}
```

Si alguna skill de diseño propone el hero en dos columnas, **gana la estructura**: se rechaza.

## E3 · JERARQUÍA DE ESPACIADO: agrupar, no repartir

Tres textos centrados consecutivos con huecos parecidos se leen como **un bloque volcado sin jerarquía**. Agrupá:
- **CTA + quita-miedos = UN grupo** → hueco chico (14-18px). El FUD pertenece al botón.
- **Título + subtítulo = UN grupo** → pero el hueco título→subtítulo debe ser **≥ el interlineado interno del título** (a 48px con `line-height:1.05` son ~50px, así que el hueco va ~50px, nunca 16px). Si no, las líneas del propio título parecen más separadas que el título del subtítulo.
- **Entre grupos distintos** → separación clara, pero ver E4.

## E4 · SEPARAR CON REGLA, NO CON AIRE

Si dos grupos necesitan separarse, la solución **no** es 90px de hueco: eso genera vacío y se reporta como "todo recontra espaciado". Poné una **regla hairline** (`border-top:1px solid var(--lv-line)`) a ancho de contenedor y bajá el hueco a 30-45px. La línea separa; el aire acompaña.

## E5 · ESPACIADO GENERAL: el aire se controla, no se maximiza

"Premium" no es "vacío". Rangos que funcionan (escritorio, valores máximos del clamp):

| Hueco | Máximo razonable |
|---|---|
| Padding de sección | 64px |
| Padding interno de tarjeta | 26px |
| Entre bullets de una lista | 13px |
| Título de sección → contenido | 30-40px |
| Contenido → CTA | 20-30px |
| CTA → quita-miedos | 16px |

Arriba del logo del hero: máximo 32px. Logo → H1: máximo 30px. Un logo de 36px con 70px de aire arriba y 54px abajo se ve como un placeholder.

## E6 · CIFRAS: "número grande + etiqueta chica" es el patrón por defecto de IA

Cifra grande + label chico + acento de color **es** la plantilla que genera todo modelo. Si el usuario dice que se ve "genérico", "básico" o "de IA", **no lo restilices por tercera vez**: cambiá de formato o sacalo.

- **Línea corrida:** `+100 clientes · 4 años operando · 0 casos perdidos`, número en tinta y peso 600, etiqueta en gris, separadores finos. Sin columnas ni cajas.
- **O sacalas del hero** y llevalas a donde el dato tenga contexto (la autoridad, el bloque de método), en vez de una ficha de métricas suelta.

## E7 · QUITA-MIEDOS (FUD): cortos, del servicio, y DISTINTOS en cada CTA

1. **Cortos pero COMPLETOS: 4-5 palabras.** Por debajo de 4 no se entiende; por encima de 6 no se escanea. `Números primero` no tranquiliza a nadie; `Si no encaja, te lo decimos` sí.
2. **Del servicio, no genéricos.** `100% confidencial`, `sin compromiso` y `gratis` están **prohibidos**: no dicen nada de lo que vendés. Sacalos de hechos del brief.
3. **Nunca se repiten entre CTAs.** Armá un **mapa de FUD** al empezar, uno distinto por cada CTA, atacando la objeción de ese punto del embudo (hero: no te conoce · después del dolor: ¿y si no me sirve? · método: ¿cuánto tarda / pierdo control? · cierre: qué incluye / quiénes son).

**El test:** escribí el miedo que tiene la persona con el dedo sobre el botón y leé el FUD como respuesta. Los miedos reales al mandar un formulario de alto ticket son: *me van a perseguir a llamadas · me van a vender algo que no me sirve · se quedan con mis datos · voy a perder el tiempo*. Si tu FUD no contesta ninguno, es una feature disfrazada.

**Un quita-miedos NUNCA se parte en dos líneas, pero el par SÍ puede apilarse:** `.lv-fud{display:flex;flex-wrap:wrap;gap:8px 20px}` + `.lv-fud span{white-space:nowrap}`. Con `nowrap` un par de 5 palabras **se desborda del contenedor** en móvil (comprobado a 390px).

## E8 · VERIFICAR RENDERIZADO ANTES DE ENTREGAR

No entregues una sección "arreglada" sin verla. Levantá un preview local y **medí estilos computados**, no confíes en el CSS que escribiste:

```js
const g = s => getComputedStyle(document.querySelector(s));
({h1: g('.lv-hero-h1').marginBottom, sub: g('.lv-hero-sub').marginBottom})
```

Si un valor da `0px` cuando escribiste `44px`, es **E1**. Revisá a **1180px y a 390px**, y acordate de que un archivo suelto necesita `<meta name="viewport">` y `<meta charset="utf-8">` propios (WordPress ya los trae): sin viewport los media queries no disparan y vas a creer que el móvil está roto.

**Y acordate de que `dynamicHeight` de Tally NO funciona en localhost** (valida el origen): el iframe se queda clavado en el `height` del atributo. **No pierdas tiempo depurándolo, no está roto.**

## E9 · FILAS DE DOLOR: una sola grilla, nunca dos listas sueltas

En el bloque de dolor (y en cualquier bloque de pares), dos `<ul>` sueltos se desalinean en cuanto una fila ocupa dos líneas. Y `grid-template-rows:repeat(N,1fr)` fuerza todas las filas a la altura de la más alta y **rellena de aire muerto** las cortas — el usuario lo reporta como "mucho espacio vacío".

**Solución:** UNA sola grilla donde cada fila es un par. Cada fila mide lo que necesita el más alto de los dos. Las "tarjetas" se simulan con fondo + bordes laterales en todas las celdas, y borde superior/inferior + redondeo solo en la primera y la última.

## E10 · MÓVIL: al apilar, el gap va entre TARJETAS, no entre filas

Con la grilla de E9, si en el media query dejás `row-gap`, las celdas se separan **una por una** y no ves tarjetas: ves filas sueltas flotando. Apilá con `order` (reagrupa respetando el orden relativo) y poné el único hueco entre tarjeta y tarjeta con `margin-top`.

## E11 · COPY DEL BRIEF: no lo reescribas

- **Los puntos de dolor del brief NO se tocan.** Ni se acortan ni se "mejoran". Van textuales.
- **Los resultados soñados y beneficios directos tampoco.**
- Si el usuario ya aprobó unos dolores, **quedan congelados**: en la siguiente iteración no los toques aunque estés cambiando el bloque de al lado.
- Si faltan pares, **buscá lo que falta en otra sección del mismo brief** (FAQ, carta del fundador, comparativa) antes de proponer romper la estructura. Casi siempre está escrito.

## E12 · ESCANEABILIDAD DEL COPY

Bullets de **5-8 palabras** como objetivo, **12 como techo duro** (por encima tiene dos ideas y se parte). Negrita en **una sola palabra** por línea, en la misma posición si hay espejo. Párrafos de cierre: una frase por línea.

## E13 · CONTRASTE: verificá el acento antes de usarlo en botones

Un naranja tipo `#E85D04` con texto blanco da **3.5:1** y **no pasa AA** para texto de botón (necesita 4.5:1). Antes de asignar `--lv-accent`, calculá el contraste.

Si el acento de marca no pasa: **invertí los roles.** Un color con contraste alto pasa a ser el de **acción** (CTA, estados activos) y el de marca queda como **marca**: hairlines, separadores, el `<mark>` del titular, el punto dentro del botón. Declaralo como `--lv-brand` aparte de `--lv-accent`.

**En tema oscuro el fallo típico es otro:** el cuerpo en gris medio sobre fondo casi negro. Verificá también el texto secundario, no solo el botón.

**Y el botón de Tally no lo alcanza tu CSS** (vive dentro del iframe): si el acento es claro (ámbar, lima, amarillo), el texto blanco encima queda por debajo de 2:1 justo en el elemento que convierte. Comprobalo y **decíselo al usuario**: se arregla en el diseñador de Tally poniendo el texto en negro.

## E14 · `width`/`height` de imágenes con la proporción REAL

No inventes las dimensiones. Sacá el ratio del archivo real y calculá. Un logo de 1024×225 mostrado a 36px de alto es `width="164" height="36"`, no `width="219"`. Un ratio mal puesto reserva una caja distinta a la imagen y **genera CLS**, que es justo lo que los atributos existen para evitar.

## E15 · EL `!important` DEL CSS LE GANA A `element.style` DEL JS: toggleá clases

Consecuencia directa de la regla de `!important` en todas las declaraciones. Esto **no hace nada**:

```css
.lv-soc .lv-soc__arrow{display:flex !important;}
```
```js
arrow.style.display = 'none';   /* ignorado: el !important gana */
```

Síntoma: el JS "no funciona" aunque no tire error, y en consola ves la propiedad aplicada pero el elemento sigue visible.

**Regla:** el JS **nunca escribe `element.style`**. Declarás el estado como clase con `!important` y lo toggleás:

```css
.lv-soc .lv-soc__arrow.is-hidden{display:none !important;}
```
```js
arrow.classList.toggle('is-hidden', hidden);
```

Vale para `display`, `opacity`, `transform`, `height` — cualquier propiedad declarada con `!important` en el bloque. Los atributos nativos (`disabled`, `hidden`, `aria-*`) sí funcionan normal.

## E16 · CARRUSEL DE RESEÑAS: scroll-snap nativo, flechas que se ocultan solas, CERO librerías

Cuando el usuario pide carrusel (aunque el manual lo desaconseje para prueba social en móvil: decíselo una vez y respetá su decisión), no metas librería. CSS scroll-snap + un IIFE de quince líneas alcanza.

- **Track:** `display:flex; overflow-x:auto; scroll-snap-type:x mandatory; scroll-behavior:smooth`, barra oculta (`scrollbar-width:none` + `::-webkit-scrollbar{display:none}`).
- **Ítems:** `flex:0 0 calc((100% - (N-1)*gap)/N)` con `scroll-snap-align:start`. Escritorio N = todos (sin scroll); tablet N = 2; **móvil `flex-basis:84%`** para que **se asome** el siguiente y se vea que hay más.
- **`align-items:stretch`** en el track: todos a la misma altura, y con `margin-top:auto` en el pie las atribuciones se alinean solas.
- **Flechas:** desplazan `ancho del ítem + gap` con `scrollBy({behavior:'smooth'})`, se **deshabilitan** en los extremos y el bloque **se oculta cuando no hay overflow** — vía clase, nunca `element.style` (**E15**). Recalculá en `scroll` y `resize`, ambos `{passive:true}`.
- **A11y:** track con `role="group"`, `aria-roledescription="carrusel"`, `aria-label` y `tabindex="0"`; cada botón con su `aria-label`; las estrellas con `role="img"` + `aria-label`.
- **Guard de re-ejecución** con `dataset`, porque el constructor puede reinyectar el widget.

## E17 · `<mark>`: dibujá el subrayado con `background-image`, NUNCA con `text-decoration` ni `box-shadow`

Dos fallos encadenados, ambos comprobados en producción sobre WordPress.

**Fallo 1 — `box-shadow: inset`.** Apoya la línea en el borde inferior de la caja de línea, o sea por debajo de los descendentes: la línea flota lejos de la letra y se lee como un separador entre el título y el subtítulo.

**Fallo 2 — `text-decoration`.** Parece lo correcto, pero **el color te lo pisa el tema**: el subrayado sale azul aunque declares `text-decoration-color` con `!important`. Y si un ancestro tiene decoración, se **propaga** a los descendientes y un `text-decoration:none` en el hijo **no puede quitarla** (comportamiento del propio CSS, no un bug de especificidad).

**La única forma robusta es no usar el mecanismo de decoración de texto:**

```css
.lv-band mark{
  background-color:transparent !important;
  background-image:linear-gradient(var(--lv-brand),var(--lv-brand)) !important;
  background-repeat:no-repeat !important;
  background-size:100% .075em !important;
  background-position:0 1.22em !important;   /* MEDIR, no adivinar */
  color:inherit !important;
  text-decoration:none !important;
  padding:0 !important;
  -webkit-box-decoration-break:clone !important;
  box-decoration-break:clone !important;
}
```

`background-color:transparent` mata el amarillo del user-agent. `box-decoration-break:clone` hace que, si el `<mark>` parte en dos líneas, cada fragmento lleve su propio subrayado.

**El `background-position` hay que MEDIRLO.** Depende del ascendente de la fuente (en Sora la base cae a 1.161em, no a .8em como sugiere la intuición):

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

Medido una vez sirve para todos los tamaños de esa fuente. Además: **acotá el `max-width` del H1** para que el `<mark>` no se parta dejando un fragmento suelto.

## E18 · GRID DE PASOS / VALUE PROPS: todos en UNA fila, con un icono propio cada uno

Vale para el Método (3 pasos) y para el bloque de Sistema/Value props.

- **Escritorio:** `grid-template-columns:repeat(N,1fr)` — con 3 pasos, tres columnas. Nunca una grilla de 2 con uno suelto abajo. Cada celda: **icono arriba, texto centrado debajo**.
- **Cada ítem lleva su PROPIO icono SVG**, ligado a SU texto. Nunca el mismo icono repetido, nunca un círculo genérico, nunca un glifo unicode ni un emoji. Dibujados a mano, `viewBox="0 0 24 24"`, `fill:none`, mismo `stroke-width` (1.7-2), `stroke-linecap`/`linejoin` en `round`, ~24px.
- **Tablet (~860px):** bajá a 3 columnas antes de apilar. **Móvil (~640px):** uno debajo del otro y **a ancho completo**, en `flex-direction:row` (icono izquierda, texto derecha, alineado a la izquierda), separados por `border-top` hairline. Nunca centrados y angostos.

## E19 · SIMETRÍA DE ALTURA: la columna del párrafo va MÁS ANGOSTA que la de la lista

En cualquier bloque de dos columnas donde una es **un párrafo corrido** y la otra **una lista o una foto** (típico: Autoridad/Equipo), la trampa es dar más ancho al párrafo "porque tiene más texto". Resultado: el párrafo queda bajo y ancho, la otra columna alta y angosta, y queda un hueco muerto debajo.

**Al revés: angostá la columna del párrafo.** Al reducir el ancho gana líneas y crece en alto hasta igualar. Punto de partida: **`grid-template-columns:.56fr 1fr`**. No lo dejes ahí, **medí**:

```js
const a = document.querySelector('.lv-aut__grid');
const L = a.children[0].getBoundingClientRect().height;
const R = a.children[1].getBoundingClientRect().height;
({izq: Math.round(L), der: Math.round(R), dif: Math.round(L - R)})
```

Si `dif` es negativo, angostá más el párrafo (bajá el `fr`). Cada línea a 15px/1.65 vale ~25px. Apuntá a **|dif| ≤ 3px**. Y no le pongas `max-width` en `ch` al párrafo dentro de una columna que ya lo acota: el ancho lo controla la grilla, o el `fr` deja de tener efecto.

## E20 · AUTORIDAD: dos párrafos, y las credenciales VAN DENTRO de la prosa

**Dos párrafos, no tres** — el tercero siempre termina repitiendo al segundo.

- **P1 · Reencuadre del problema.** Por qué esto no es simple: qué hay que saber, qué sale mal, qué le pasa al que lo intenta solo. Sin mencionar todavía a la marca.
- **P2 · Qué entendimos, qué hacemos y para quién.** Acá entran las credenciales.

**Las credenciales NO van en lista con checks** (se lee como currículum y se saltea). Van **tejidas dentro del párrafo 2, en negrita**, sosteniendo la afirmación que respaldan:

```
MAL — lista suelta al costado:
  ✓ Más de 100 clientes
  ✓ 4 años operando
  ✓ Sociedad constituida

BIEN — dentro de la prosa:
  "Después de trabajar con **más de cien clientes en cuatro años, sin un
   solo caso perdido**, entendí que el problema no era X. Era la falta de
   un proceso claro **bajo un mismo responsable**. Por eso creé
   **[Razón social], S.L.**, desde [ciudad]: para..."
```

La negrita cae solo en el dato duro, nunca en la frase entera (**E12**). **Si el bloque tiene carta de fundador, ESA es la sección de autoridad** — no hagas además una autoridad genérica de marca: la carta hace mejor el trabajo porque reencuadra el problema en primera persona. Foto real y firma.

**El titular de este bloque no explica quién sos:** hace una afirmación que el lector reconoce como propia. `"El problema no era la falta de capital, era la falta de un proceso"` funciona; `"¿Por qué elegirnos?"` no.

## E21 · CIFRAS CONTRADICTORIAS EN EL MATERIAL DEL CLIENTE: unificar, y decirlo

Es frecuente que el brief y la web viva digan cosas distintas ("+100" en la franja de datos, "cerca de 100" en la carta del fundador; 97 en un doc interno y +100 en producción). Son afirmaciones **incompatibles** y si quedan las dos en la misma página, la que pierde es la credibilidad de las dos.

**Qué hacer:** unificá por la cifra **publicada más reciente**, aplicala en TODAS las secciones donde aparezca, y **avisale al usuario en una línea** cuál elegiste y por qué, ofreciendo cambiarla. Nunca dejes las dos versiones conviviendo, nunca las unifiques en silencio.

Y recordale que **un número específico convence más que uno redondo** (Ogilvy): si el dato real es 97, `97 clientes` es mejor copy que `+100`.

## E22 · CORRECCIONES: sección completa, siempre

Ya está más arriba pero se incumple: cuando corregís algo, devolvé **todo el `<section>` con su `<style>`**, listo para reemplazar de una sola vez. Nunca un fragmento, nunca un diff, nunca "cambiá esta línea".

Si el cambio toca el **Bloque Maestro** (tokens, `mark`, `.lv-fud`, `.lv-cta`), **avisalo y devolvé el maestro entero**. **El Maestro y el Hero van SIEMPRE juntos**, en el mismo mensaje y el mismo bloque de código, aunque el maestro no haya cambiado. Y si el cambio afecta a bloques ya entregados (ej. cambia el mapa de FUD), decí cuáles hay que reemplazar.

## E23 · ENTREGA DE VARIANTES

Cuando muestres 2-4 variantes para elegir:
- Renderizalas **con la marca real del proyecto** (colores, fuentes, logo). Un widget que fuerza los tokens del host no sirve: el usuario no ve su marca y no puede decidir.
- Que sean **direcciones distintas de verdad** (composición, jerarquía, densidad, fondo), no el mismo layout con otro tinte. Tres tintes del mismo layout se rechazan en bloque.
- Si el usuario rechaza las tres, **no tires tres más**: preguntá qué específicamente no funciona (escala, tipografía, color, aire) y atacá eso.

## E24 · SISTEMA VISUAL PARALELO: el fallo que hace que "todo esté mal"

**Detectado en producción (landing CADI, y el propio agente lo diagnosticó al final):** se montó tokens propios, otra tipografía, ancho de 1120 y secciones full-bleed, cuando el cliente ya tenía un sistema (contenedor de 750 px en tarjeta blanca sobre gris, su stack tipográfico, sus patrones `.typ-*`). Resultado literal: *"todo suelto, todo pegado, sin jerarquía, los layouts son malísimos"*.

**No era un problema de gusto: era un sistema paralelo.** Cuando cada bloque nace de primitivas distintas a las del resto del sitio, no hay refactor estético que lo salve — hay que rehacerlo entero. Y se rehizo entero.

**La regla está arriba, en 🧬 SI YA EXISTE UN SISTEMA VISUAL. Leela antes de la primera línea de CSS.** El síntoma temprano: si estás escribiendo un `:root` con colores nuevos mientras existe un archivo de referencia, ya lo estás cometiendo.

**Y si el usuario adjunta un archivo, ESE es la referencia.** No salgas a buscar en zips, capturas ni carpetas hasta haberlo abierto entero. En ese caso se perdió un turno buscando en el sitio equivocado.

## E25 · VELO SOBRE LA FOTO DEL HERO: al 93% la foto no existe

Poner una imagen de fondo y taparla con un overlay casi opaco es lo mismo que no ponerla, y encima pagás su descarga y su LCP. El usuario lo reporta como *"el hero no tiene imagen de fondo"* — y tiene razón, aunque el `<img>` esté ahí.

- **Tope del velo: 70%.** Si a ese valor el texto no pasa contraste, el problema es la foto (demasiado clara, o con ruido en la zona del texto), no el velo: recortá distinto, oscurecé solo la banda del texto con un degradado, o cambiá de foto.
- **Degradado, no color plano:** `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.45))` deja legible el titular arriba y **deja ver la foto abajo**.
- **Verificalo mirando, no calculándolo:** abrí el hero y preguntate si se distingue qué hay en la foto. Si no se distingue, sobra el velo o sobra la foto.
- Comprobá el contraste del texto **sobre la zona real donde cae**, no sobre el negro teórico.

## E26 · SCROLL BRUSCO: `scroll-behavior` y `scroll-margin-top` no son opcionales

Reportado como *"los scroll son totalmente agresivos cuando tocás los botones"*. Dos causas, y las dos se cuelan al reescribir un archivo:

1. **Falta `scroll-behavior:smooth`** en `html` → cada CTA pega un salto seco.
2. **Falta `scroll-margin-top`** en el destino → con cabecera fija el título del formulario queda tapado y parece que el ancla está rota.

```css
html{ scroll-behavior:smooth !important; }
#lv-form{ scroll-margin-top:96px !important; } /* alto real de la cabecera + 16 */
@media (prefers-reduced-motion:reduce){ html{ scroll-behavior:auto !important; } }
```

El `scroll-margin-top` se **mide** contra la cabecera real, no se pone a ojo. Y el bloque de `prefers-reduced-motion` es obligatorio: el scroll suave marea a mucha gente.

## E27 · CARRUSEL QUE AVANZA DE VISTA EN VISTA

Si la flecha desplaza el ancho del contenedor, con dos tarjetas visibles saltás dos de golpe, se pelea con `scroll-snap` y el movimiento se siente violento.

**Las flechas avanzan UNA tarjeta:** `scrollBy({left: anchoDeUnaTarjeta + gap, behavior:'smooth'})`, midiendo **la tarjeta** con `getBoundingClientRect()`, nunca el contenedor. El arrastre táctil tiene que seguir funcionando (`overflow-x:auto` + `scroll-snap-align:start` en cada ítem).

**Y la prueba social va en carrusel salvo que el usuario diga lo contrario.** Maquetarla como grilla estática cuando pidió carrusel es un bloque rehecho entero.

## E28 · TÍTULOS DE SECCIÓN: mismo tratamiento en TODAS, y verificado

*"Los títulos descentrados"* casi nunca es un título mal puesto: son siete títulos con siete tratamientos distintos. Definí el patrón UNA vez (alineación, icono, gap, tamaño, peso) y aplicalo a todas las secciones.

**Verificalo, no lo mires:**
```js
[...document.querySelectorAll('section h2')].map(h => getComputedStyle(h).textAlign)
```
Si el array no es homogéneo, ahí está el bug. Lo mismo con `justifyContent` cuando el título lleva icono.

