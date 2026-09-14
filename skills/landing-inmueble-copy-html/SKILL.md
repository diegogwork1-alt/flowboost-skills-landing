---
name: landing-inmueble-copy-html
description: Flujo COMPLETO 2-en-1 para la landing de UN INMUEBLE CONCRETO en venta (piso, villa, chalet), con la estructura exacta de cliente-06.es ya publicada en producción (copiada como referencia, sin dato de conversión que la valide): hero de estilo de vida, galería por estancias, formulario temprano, ficha con precio, el entorno como argumento propio, cómo visitar en 3 pasos, el agente como autoridad, FAQ y cierre. Sección por sección escribe primero el COPY y, tras la aprobación, el HTML, pasando cada bloque por las skills de diseño impeccable, design-taste-frontend y emil-design-eng. El CTA es SIEMPRE la visita, nunca la compra. En cada corrección devuelve el HTML COMPLETO de la sección, nunca fragmentos. Aplica los mismos estándares de generación de código que el resto de skills de landing: embebido de Tally sin altura reservada, reglas de arquitectura CSS con !important y doble clase, PageSpeed/Core Web Vitals (LCP, CLS 0, lazy en toda foto que no sea el hero, WebP <250 KB), checklist de código por bloque y la lista de errores ya cometidos en producción. NO inventa metros, precios, calidades ni testimonios. También funciona en MODO AUDITORÍA: si se le pasa una landing ya hecha (HTML, archivo o URL) y se pide revisarla, corregirla, mejorarla o saber qué está mal, la audita contra sus propias reglas y devuelve el diagnóstico priorizado más los bloques corregidos completos; NUNCA pregunta al usuario qué cambiar, porque el criterio está en la skill. Usar cuando el usuario quiera la landing de una propiedad concreta. Para servicios B2B usar landing-b2b-copy-html; para VSL con formulario arriba usar landing-vsl-directa-copy-html.
---

> ## ⛔ PASO −1 · COMPUERTA DE DISEÑO (antes de escribir una sola línea)
>
> **Claude Code NO encadena skills solo.** Si no las activás a mano, sale básico. En una landing de inmueble se nota el doble: **la foto y el aire SON el producto**.
>
> **Antes del Paso 0, invocá con la tool Skill, en este orden:**
> 1. `impeccable` — suelo de calidad y prohibiciones (kickers, plantilla de cifras, cards genéricas)
> 2. `design-taste-frontend` — dirección visual, que no parezca portal inmobiliario
> 3. `emil-design-eng` — estados, motion, microinteracción
>
> Si alguna no está instalada, **decíselo al usuario** y seguí con las que haya.
> **En CADA bloque, antes de entregarlo, pasalo por las tres.**
>
> **Restricción dura:** pueden cambiar el ACABADO, nunca la ARQUITECTURA (full-bleed, tokens `--li-*`, `.li-frame`, Tally, `!important`, rendimiento, orden de bloques).
>
> **Auditá antes de entregar.** Si respondés que sí a alguna, no terminaste:
> - ¿Las fotos se ven pequeñas o mal recortadas? (en inmueble, la foto manda)
> - ¿Todos los títulos pesan igual? · ¿Todas las secciones tienen el mismo fondo y padding?
> - ¿Las cards no reaccionan al ratón? · ¿Falta `:focus-visible`?
> - ¿El acento aparece como decoración grande? (el acento es SOLO acción)

---


> 📐 **PARÁMETROS DE COPY DE LANDING, CON SU FUENTE:** `../fundamentos-copy/references/parametros-landing.md`. Ahí están una sola vez y **con la fuente de cada una** las reglas que antes estaban repartidas y desiguales entre las 9 skills de landing: frases ≤15 palabras · párrafos ≤2 oraciones · **prohibido el guion largo (—)** · el titular responde «¿por qué me importa?» · **2-3 testimonios reales** y nunca en carrusel en móvil · **nunca «sin compromiso» ni «gratis»** bajo el CTA · y **qué cifras NO están en las fuentes** (los umbrales de Core Web Vitals y el impacto de la velocidad en conversión: si alguien las cita como dato propio, es una alucinación).
# Landing de inmueble — COPY + HTML

Estructura **calcada de cliente-06.es**, **publicada** en producción. ⚠️ *«Publicada» no es «validada»: no hay ni un dato de conversión de esa landing en el repositorio, y lo único medido de Cliente 06 es un **perdedor** — el ángulo «provincia» a 85,40 €/lead frente a 34 € del mismo servicio con «pueblo» (`../auditar-guiones-egc/references/patrones-medidos.md`). La estructura se copia porque es la referencia que eligió Dirección, no porque haya batido a otra.* Prefijo `li-`, tokens `--li-*`.

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

## FLUJO OBLIGATORIO (sección por sección)
1. **PASO 0 — Pedí la ficha del inmueble.** No interrogues campo por campo si hay documento.
2. **Por CADA bloque, en orden:**
   - **a) COPY** del bloque. Cerrá con 2 líneas de justificación.
   - **b) PARÁ:** "¿Aprobás este copy, querés ajustes, o paso al HTML?"
   - **c) Si aprueba:** el HTML de ese bloque, con el copy dentro. **Antes de mandarlo, pasalo por `impeccable`, `design-taste-frontend` y `emil-design-eng`** (PASO −1). No es un repaso final: es parte de generar el bloque.
   - **c-bis) ANTES DE MANDARLO, pasá el bloque por el CHECKLIST DE CÓDIGO** (Parte B): Tally sin altura reservada, `!important` + doble clase, `width`/`height` reales, `lazy` en todo lo que no sea el hero, un solo `fetchpriority="high"`. Un bloque que no pasa el checklist no se entrega.
   - **d) PARÁ:** "¿Seguimos con el siguiente?"
3. Nunca HTML sin copy aprobado. Nunca dos bloques en un mensaje sin permiso.

## 🔴 REGLA DE LAS CORRECCIONES (no negociable)
**Cuando el usuario pida un cambio, devolvé SIEMPRE el bloque COMPLETO y corregido, listo para pegar. Nunca un fragmento, nunca un diff, nunca "cambiá esta línea por esta otra".**

- Vale para el copy y para el HTML.
- Si tocás el CSS de una sección, va **todo** el `<style>` de esa sección, no solo la regla nueva.
- Si el cambio afecta al bloque maestro, devolvé el maestro entero además del bloque.
- Nada de `<!-- ...resto igual... -->` ni de omitir partes "que no cambiaron".

El usuario pega bloques en un constructor: un fragmento le obliga a buscar y editar a mano, que es donde se rompen las cosas.

**Y la corrección también pasa por las tres skills de diseño.** Un bloque corregido es un bloque nuevo: si lo devolvés sin pasarlo por `impeccable`, `design-taste-frontend` y `emil-design-eng`, la calidad se degrada corrección a corrección hasta quedar plano.

## 🎯 LA REGLA QUE DEFINE ESTA LANDING
**El CTA es SIEMPRE la visita, nunca la compra.** Nadie compra una casa desde una landing. Todo empuja a *"ven a verla"*, *"agenda la visita"*, *"que te llame el agente"*. Si aparece "compra" o "reserva", está mal.

## MAPA DE BLOQUES — el orden de Cliente 06

| # | Bloque | Titular real de referencia |
|---|---|---|
| 0 | **Hero** — escena de vida + foto principal | *"La vida frente al mar, con sitio para toda la familia."* |
| 1 | **Galería por estancias** | *"Tu vida, puertas adentro."* |
| 2 | **Formulario de visita** (`#li-form`) | *"Ven a verla antes de decidir."* |
| 3 | **Ficha destacada** con precio | *"Características destacadas"* |
| 4 | **El entorno** | *"La casa es solo la mitad. El resto es Zona Playa."* |
| 5 | **Cómo visitar** — 3 pasos | *"Cómo visitar esta vivienda"* |
| 6 | **El agente** | *"Quien te enseña la casa también entiende la compra."* |
| 7 | **FAQ** | *"Todo lo que necesitas saber antes de visitar"* |
| 8 | **Dudas / contacto directo** | *"¿Aún tienes dudas? Escríbenos y te resolvemos todo"* |
| 9 | **Cierre** | *"¿Te imaginas viviendo frente al puerto?"* |

### Por qué este orden funciona (no lo reordenes)
- **La galería va ANTES que la ficha.** Primero se enamora, después justifica. Poner los metros antes que las fotos convierte la landing en un anuncio de portal.
- **El formulario aparece TERCERO, muy arriba.** Al que ya se enamoró con las fotos se le pide la visita enseguida, sin obligarlo a scrollear la página entera. Los que siguen bajando encuentran los argumentos.
- **El entorno es una sección propia, no un párrafo.** Se compra un barrio, no cuatro paredes.
- **Las dudas van antes del cierre**: recogen al indeciso que no rellenó el formulario.

**Bloques opcionales que NO están en Cliente 06** (solo si el usuario los pide, y van después de la galería): vídeo del inmueble, testimonios del agente, estado y disponibilidad.

---

# ═══════════ PARTE A — CÓMO ESCRIBIR EL COPY ═══════════

## PASO 0 — PEDÍ LA FICHA (no interrogues)

> "Pasame la ficha del inmueble (el documento sirve: .docx, .pdf, .md, o el enlace del portal) y las fotos con el nombre de la estancia de cada una. Decime también el ID del formulario de Tally y el nombre del agente que atiende las visitas."

```bash
textutil -convert txt -stdout "ficha.docx"
python3 -c "import fitz;d=fitz.open('ficha.pdf');print(chr(10).join(p.get_text() for p in d))"
```

**Extraé y mostrá qué falta:** tipo y ubicación exacta · **precio** · m² útiles/construidos · habitaciones y baños · extras (terraza, piscina, garaje, trastero, vistas) · estado (obra nueva/reformado/a reformar) · orientación, planta, ascensor, año · gastos de comunidad e IBI · certificado energético · **fotos con su estancia** · qué tiene el entorno (playa, colegios, transporte, comercio) · nombre y experiencia real del agente.

**Preguntá solo lo que falte.** Y estos, que casi nunca están en una ficha: `{{TALLY_FORM_ID}}` · colores y fuentes de marca · el texto del anuncio que trae el tráfico (message match).

**Nunca inventes** metros, precio, orientación, certificado energético ni gastos: **tienen consecuencias legales**. Lo que falte va como `[dato pendiente]` y se avisa al entregar.

---

## MOTOR DE COPY

**Se vende una VIDA, no un inmueble.** El comprador no compra 166 m²: compra desayunar viendo el mar y que los chicos tengan cuarto propio. Los metros justifican después lo que la emoción ya decidió.

- **Resultado soñado** → la escena de su vida ahí dentro, en el titular.
- **Probabilidad percibida** → fotos reales, datos verificables, el agente con nombre y cara.
- **Tiempo** → "lista para entrar a vivir", "puedes verla esta semana".
- **Esfuerzo** → "nosotros coordinamos la visita", "te acompañamos con el papeleo".

**Life Force 8:** en vivienda pesan **proteger a los tuyos** (espacio, seguridad), **vida cómoda** (luz, terraza, silencio) y **estatus** (zona, vistas). Elegí cuál manda: un piso familiar no se vende como una villa de lujo.

**Tráfico frío siempre:** no te conocen ni a vos ni a la casa. Enseñá antes de pedir.

---

# ═══════════ CRO — MESSAGE MATCH, TEMPERATURA Y AUTO-AUDITORÍA ═══════════
(Corey Haines / CRO — complementa a Ogilvy + Hormozi, no los reemplaza. Aplica a TODA la landing.)

**MESSAGE MATCH:** el H1 debe reflejar **el anuncio que trajo al visitante**. En una landing de inmueble el anuncio casi siempre promete una escena concreta ("ático con terraza en primera línea"): si el hero no la devuelve en los primeros 5 segundos, la persona cree que se equivocó de casa y se va. En el Paso 0 pedí el texto del anuncio o la campaña. Si el anuncio dice "playa", la palabra playa va en el H1.

**TRÁFICO FRÍO (SIEMPRE):** no conocen ni la casa ni la agencia. Por lo tanto SIEMPRE: enseñá la casa antes de pedir nada (galería temprana), poné cara y nombre al agente, y educá sobre el proceso de visita antes del CTA. NUNCA escribas como si ya hubieran hablado con vos. (No preguntes la temperatura: asumí frío.)

**AUTO-AUDITORÍA CRO — pasá la landing por esto ANTES de entregar (orden de impacto):**
1. **Propuesta de valor:** ¿en 5s se entiende qué casa es, dónde está y para quién? ¿Es una escena de vida, no una ficha?
2. **Headline:** ¿matchea el anuncio? ¿es específico (zona, vistas, m² útiles, planta)?
3. **CTA:** ¿UNA sola acción (la visita), visible sin scroll, con copy de valor ("Ver la casa esta semana", no "Enviar")? ¿repetida en cada punto de decisión?
4. **Escaneabilidad:** ¿el que solo mira fotos y pies de foto entiende la casa completa?
5. **Prueba (que acá NO son testimonios):** fotos reales sin retocar, datos verificables, agente con nombre, cara y colegiación. Pegado a los CTA.
6. **Objeciones:** precio, gastos de comunidad, estado real, "¿me van a acribillar a llamadas?", "¿tengo que ir con la hipoteca resuelta?" → FAQ / bloque "cómo visitar".
7. **Fricción:** formulario corto (nombre, teléfono, franja horaria), próximos pasos claros, móvil impecable, fotos que cargan rápido.

**IDEAS DE TEST (al entregar):** sugerí 2-3 hipótesis A/B (no las asumas): foto principal del hero, precio visible arriba vs. en la ficha, formulario con 3 campos vs. 4.

**VOCABULARIO PROHIBIDO (sumado al del portal inmobiliario, más abajo):** nunca "game-changing / revolucionario / disruptivo / 10x"; ni "secreto / lo que no quieren que sepas"; ni "tiempo limitado" ni "última unidad" sin que sea verdad y verificable (en vivienda esto es publicidad engañosa, no solo mal copy); ni "100% garantizado" sin condiciones; ni "valorada en X" sin tasación real.

---

# ═══════════ CÓMO SE ESCRIBE (reglas duras de redacción) ═══════════
Aplican a TODOS los bloques.

## ⚡ ECONOMÍA DE PALABRAS
Ogilvy no era largo: era *específico*. Límites que no se negocian:
- **Bullet: 12 palabras máximo.** Si no entra, tiene dos ideas: partilo o eliminá una.
- **Pie de foto: 1 línea.** **Subtítulo: 25 palabras máximo.**
- **Párrafo: 2 líneas.** Nunca tres. **Pasos del proceso: 1 línea.** **FAQ: 3 líneas máximo.**

**Pasada de tijera obligatoria.** Al terminar cada bloque, borrá:
- Toda frase que no aporte **información nueva** (en inmueble: toda frase que no aporte un dato o una escena).
- Adverbios y adjetivos que no cambian el significado ("realmente", "totalmente", "muy", "simplemente").
- Arranques muertos: "Es importante destacar que", "Sabemos que", "En [agencia] creemos que".
Si al borrar una palabra el significado no cambia, **esa palabra sobra**.

**El test:** si el lector solo mira fotos, titulares y pies de foto, ¿entiende la casa completa? Si no, los titulares no dicen nada.

## 🔴 CÓMO SE ESCRIBE UNA FRICCIÓN O UN DOLOR
En vivienda el dolor no es del inmueble: es **del proceso de buscar casa**. Y tiene que ser una ESCENA vivida, no una categoría.
- ❌ "Búsqueda ineficiente" · ✅ "Llevás seis sábados viendo pisos que en las fotos eran otra cosa"
- ❌ "Falta de espacio" · ✅ "Los dos chicos comparten cuarto y ya no se aguantan"
- ❌ "Mala comunicación con la agencia" · ✅ "Preguntás por los gastos de comunidad y nadie te contesta"

1. **Concreto y observable.** Si no lo podés filmar, es abstracto: reescribilo.
2. **Con su costo nombrado** (sábados perdidos, dinero, tranquilidad), al final del bullet.
3. **En sus palabras (VoC).** No traduzcas "las fotos engañan" a "falta de transparencia en la oferta".
4. **Sin solaparse.** Si dos se parecen, uno sobra.
5. **Orden:** el más reconocible primero; el más grave al final.

## 🟢 CÓMO SE ESCRIBE UN BENEFICIO O RESULTADO
El error habitual es listar **lo que tiene la casa**. Al lector le importa **cómo vive él ahí dentro**.
- ❌ "Terraza de 20 m² orientada al sur" · ✅ "**Cenás fuera** de mayo a octubre, con luz hasta las nueve"
- ❌ "Cocina office" · ✅ "**Desayunáis los cuatro juntos** sin sacar la mesa del salón"
- ❌ "Dos plazas de garaje" · ✅ "**Dejás de dar vueltas** buscando sitio en agosto"

1. **Arranca con el resultado, no con la característica.**
2. **Una sola palabra en negrita por bullet:** la del pago emocional.
3. **Encadená con "PARA QUE"** hasta el resultado soñado final.
4. **El metro cuadrado va DESPUÉS de la escena**, nunca en su lugar: la escena decide, el dato justifica.


## 🚫 EL VOCABULARIO DEL PORTAL INMOBILIARIO (prohibido)
Es lo que hace que una landing parezca un anuncio más de Idealista:
- ❌ "acogedor", "coqueto", "con encanto", "a reformar a su gusto"
- ❌ "oportunidad única", "no dejes pasar", "¡infórmate ya!"
- ❌ "amplio y luminoso" sin un dato que lo respalde
- ❌ MAYÚSCULAS sostenidas y exclamaciones múltiples
- ❌ "inmueble", "vivienda unifamiliar", "dicha propiedad" → decí "la casa", "el piso"

**En su lugar, el dato concreto.** No "muy luminoso" → *"orientación sur: el salón tiene luz hasta las siete"*.

## 📸 LOS PIES DE FOTO SON EL SEGUNDO TITULAR
Se leen 4× más que el cuerpo. **Cada foto lleva pie, y el pie no describe lo que ya se ve:**
- ❌ "Salón" · ✅ "El salón, con la terraza a un paso"
- ❌ "Cocina" · ✅ "Cocina office: se puede desayunar sin salir"
- ❌ "Dormitorio" · ✅ "El principal, con baño propio y vestidor"

---

## LOS 10 BLOQUES

### 0 · HERO
**Genera:** H1 (3 variaciones) + subtítulo + CTA + quita-miedos. Foto principal a todo ancho.
- **H1 = una escena de vida, no una ficha.** Nunca "Piso en venta en Burriana". Sí: *"La vida frente al mar, con sitio para toda la familia."*
- **Subtítulo:** acá sí entran los datos que enganchan (zona, tipo, el extra diferencial).
- **CTA:** verbo de visita. **Nunca "comprar".**
- **Quita-miedos:** *"Te llama [agente] en menos de 24 h"*, *"Sin coste ni compromiso de compra"*.

**Nunca:** titular que sea la ficha técnica, exclamaciones, "oportunidad única".

### 1 · GALERÍA POR ESTANCIAS
**Genera:** título de sección + una entrada por estancia (nombre + pie de 1 línea).
- Estancias de Cliente 06: **Salón · Cocina · Terraza · Dormitorio principal · Baño · Portal y entrada.** Adaptá a las fotos que haya.
- **El nombre de la estancia es el `h3`; el pie va debajo.**
- Título en clave de escena: *"Tu vida, puertas adentro."*

**Nunca:** un carrusel sin nombres. El comprador quiere saber qué mira.

### 2 · FORMULARIO DE VISITA
**Genera:** título + subtítulo + 2 quita-miedos.
- Título que pide la visita, no el dato: *"Ven a verla antes de decidir."*
- **Tally inline**, no popup: viene de ver las fotos, ya está caliente.
- Va temprano a propósito. **No lo muevas al final.**

### 3 · FICHA DESTACADA
**Genera:** 4-6 datos duros, cada uno con cifra grande y etiqueta de una línea.
Orden de Cliente 06: **m² útiles · habitaciones y baños · el extra diferencial · vistas o estado · PRECIO**.
- El precio va **completo y visible**. Esconderlo trae leads que no pueden pagarlo.
- Dato no confirmado, dato que se omite. No se estima.

### 4 · EL ENTORNO
**Genera:** título + 2 párrafos + 3-5 puntos de la zona.
- **El titular es la bisagra:** *"La casa es solo la mitad. El resto es Zona Playa."*
- Puntos con distancia o tiempo real: *"El puerto, a 5 minutos andando"*. Nada de "excelentes comunicaciones".

### 5 · CÓMO VISITAR
**Genera:** título + 3 pasos + CTA. Con **el nombre real del agente**:
1. *"Solicita la información"* — dejas tus datos.
2. *"[Nombre] te llama enseguida"* — resuelve dudas por teléfono.
3. *"Coordináis la visita"* — día y hora que te venga bien.

Es el bloque que baja el Esfuerzo: que se lea sin fricción.

### 6 · EL AGENTE
**Genera:** titular + 2 párrafos + nombre, cargo y foto.
- **Titular probado:** *"Quien te enseña la casa también entiende la compra."* Convierte al agente de guía en asesor.
- Párrafos: qué hace por el comprador (papeleo, financiación, negociación) y su experiencia real. Sin auto-bombo: hechos y cifras.
- **Foto real del agente, obligatoria.** Sin cara no hay confianza.

### 7 · FAQ
**Genera:** 6-10 preguntas cortas: ¿está lista para visitar? · ¿dónde está exactamente? · ¿qué tiene la zona? · ¿puedo visitarla directamente? · ¿hay gastos de comunidad? · ¿se puede financiar?
- **Obligatoria, la que descalifica:** *"¿Y si me gusta la zona pero no esta casa?"* — la respuesta ofrece alternativas y filtra al que no encaja.

### 8 · DUDAS / CONTACTO DIRECTO
**Genera:** título + 1 párrafo + vía de contacto directa (WhatsApp o teléfono del agente).
- Titular de Cliente 06: *"¿Aún tienes dudas? Escríbenos y te resolvemos todo."*
- Recoge al indeciso que no rellenó el formulario. **Canal distinto al del bloque 2**, más informal.

### 9 · CIERRE
**Genera:** titular emocional en forma de pregunta + CTA final (el más prominente) + quita-miedos.
- Probado: *"¿Te imaginas viviendo frente al puerto?"*
- **No aporta información nueva.** Cierra el círculo que abrió el H1.

---

---

# ═══════════ PRINCIPIOS DE OGILVY (aplicados a vivienda) ═══════════

## 1. Titulares — lo más importante
Cinco veces más gente lee el titular que el cuerpo. Si el titular no vende, gastaste el 80% del presupuesto.
- **Beneficio + especificidad.** `"La vida frente al mar, con sitio para toda la familia"` funciona; `"Piso en venta en Burriana"` es una etiqueta, no un titular.
- **Poné la localidad en el titular** cuando el tráfico es local: la gente busca zona antes que casa.
- **Nunca titulares ciegos** (que no se entienden sin leer lo de abajo).
- **Sentence case, sin punto final.** Sin mayúsculas sostenidas, sin exclamaciones.

## 2. Hacé la tarea — no inventes el ángulo
El ángulo sale de la ficha, de las fotos y de lo que el agente sabe de la zona, no de tu cabeza. Si no sabés por qué alguien compraría **esta** casa y no la de al lado, todavía no podés escribir el titular.

## 3. Escribí como una persona a otra persona
Segunda persona, tono de alguien que conoce el barrio. Nada de "dicha vivienda" ni "el inmueble objeto del presente anuncio".

## 4. Lenguaje simple, sin jerga
`orientación sur` sí (es un dato). `distribución diáfana con espacios polivalentes` no. Si tu vecino no lo diría, no lo escribas.

## 5. Los pies de foto se leen 4× más que el cuerpo
El bloque más desaprovechado de toda la landing. **Cada foto lleva pie, y el pie no describe lo que ya se ve**: añade el dato o la escena que la foto no puede contar. Ver la sección de pies de foto en la Parte A.

## 6. Prueba y credibilidad
En vivienda la prueba no son testimonios: son **fotos sin retocar, datos verificables, el agente con nombre y cara, y la nota simple disponible**. Un dato concreto (`gastos de comunidad: 62 €/mes`) construye más confianza que diez adjetivos.

## 7. Story appeal
Un elemento que haga parar el scroll y preguntar: la terraza puesta para cenar, la luz de las siete en el salón, la puerta del garaje abierta. La foto principal debería contar una escena, no documentar una habitación vacía.

## 8. Emoción + honestidad
Vendé la vida ahí dentro, pero **no escondas lo que hay que reformar**. Decirlo en la FAQ (`"La cocina es de 2004 y funciona; el baño principal sí pide actualización"`) convierte más que ocultarlo, porque el que viene ya sabe a qué va y no se cae la operación en la visita.

# ═══════════ PARTE B — CÓMO MAQUETAR ═══════════

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

## Reglas obligatorias
1. **`!important` en TODA declaración** de cada bloque. Excepto `@keyframes` y tokens de `:root`.
2. **"Definir una vez":** fuentes + `preconnect` + tokens + reset en el **Bloque Maestro**, dentro del primer widget. Los demás no los repiten.
3. **Full-bleed:** `.li-band` + `html,body{overflow-x:clip;max-width:100%}`.
4. **LAS FOTOS SON EL PRODUCTO.** Grandes, con `aspect-ratio` reservado, `object-fit:cover`.
5. **CLS 0:** toda `<img>` con `width` y `height` reales. Below-the-fold `loading="lazy"`, todas `decoding="async"`.
6. **Interlineado definido UNA vez** en el maestro (`h1`=1.05, `h2`=1.1). Sentence case, sin punto final.
7. **Elevación por hairline + sombra sutil**, nunca glow. **Acento solo para la acción.**
8. **A11y:** un solo `h1`; secciones `h2`; estancias `h3`. `figure`+`figcaption` en la galería. Contraste WCAG. CTA `min-height:48px`. `:focus-visible`. `prefers-reduced-motion`.
9. Todos los CTA anclan a **`#li-form`**.

## Reglas de arquitectura de código (obligatorias)

1. **`!important` en TODA declaración CSS, en CADA bloque (no solo el maestro).** Los bloques se pegan dentro de un constructor (Elementor/WP), cuyo tema pisa cualquier propiedad sin `!important` → la landing se ve rota (causa nº1 de fallos). Regla mecánica: **si una declaración está dentro de un `<style>` de un bloque, lleva `!important`** (font-size, color, margin, padding, display, grid, flex, width, aspect-ratio, object-fit, text-align, border-radius, background, line-height, box-shadow…), también dentro de `@media`. Excepciones: `@keyframes` y los tokens de `:root`.
2. **Ancho por token, no `100vw` en el contenido.** El fondo full-bleed lo da `.li-band`; el contenido va en `.li-frame`. El maestro trae `html,body{overflow-x:clip;max-width:100%}` que elimina el scroll horizontal del `100vw` automáticamente.
3. **Espaciado fluido con `clamp()`**, nunca px fijos para el ritmo vertical.
4. **"Define una vez":** tokens, fuentes, `preconnect`, resets, `.li-cta`, `.li-fud` y el JS viven en el **Bloque Maestro**; el resto solo usa clases. CSS/JS son globales al documento.
5. **JS propio, con scope, sin librerías ni globals:** IIFE, guard con `dataset` (`if(el.dataset.liReady)return`), delegación de eventos, `{passive:true}` en scroll/touch. Nada de `onclick="fn()"`. **La única excepción de terceros es el script de Tally.**
6. **NO incluir** Pixel de Meta, GTM, jQuery ni scripts de plugins. (Si el usuario los quiere, los añade `publicar-landing`, no esta skill.)
7. **Fondos alternados** vía `.li-band--alt` / `--close` — nunca dos secciones seguidas con el mismo fondo.
8. **Toda regla de un bloque lleva DOS clases** (`.li-hero .li-hero-h1`, no `.li-hero-h1`). Ver E1: es el error más invisible y el más frecuente.

### ⚡ LCP — la palanca que sí baja el campo
Acá **el LCP es la foto del hero**, casi siempre:
```html
<img src="hero.webp" width="1600" height="900" fetchpriority="high" decoding="async" alt="…">
```
- **Nunca `loading="lazy"` en la foto del hero** — cancela la prioridad.
- **Una sola imagen con `fetchpriority="high"`.** Si marcás varias, no marcaste ninguna.
- `<link rel="preload" as="image">` solo si la foto NO es descubrible en el HTML inicial (fondo CSS o insertada por JS).
- **Ancho del archivo ≥ 2× el ancho en CSS**, o se ve borrosa en retina.

## Rendimiento (PageSpeed / Core Web Vitals) — obligatorias

Metas: **LCP < 2.5s · CLS < 0.1 · INP < 200ms.** Una landing de inmueble es la peor candidata posible: son 15-30 fotos pesadas. Si no aplicás esto, carga en 8 segundos y el visitante se va antes de ver la casa.

- **LCP:** es la **foto del hero**. `fetchpriority="high"`, jamás `loading="lazy"`. Ver el bloque LCP de arriba.
- **TODAS las demás fotos `loading="lazy"`** — la galería entera, la del entorno, la del agente. Sin excepción: son las que hunden el score.
- **Todas las `<img>` con `decoding="async"`.**
- **CLS = 0:** **TODA `<img>` lleva `width` y `height` con la proporción REAL del archivo** (ver E15) — Lighthouse lo exige aunque el contenedor tenga `aspect-ratio`. En la galería, además, el contenedor lleva `aspect-ratio` fijo + `object-fit:cover`, para que las fotos verticales y horizontales no salten.
- **Formato y peso:** WebP (o AVIF) siempre, **nunca JPG del móvil del agente a 4 MB**. Si el usuario te pasa fotos gigantes, **decíselo y pedí que las convierta**: una galería de 20 fotos a 4 MB son 80 MB y ningún truco de código lo salva. Objetivo: **< 250 KB por foto**, hero < 400 KB.
- **Regla de tamaño (comprobada midiendo):** el ancho del archivo debe ser **≥ 2× el ancho en CSS**, o se ve borrosa en retina por más rápido que cargue. Una foto de 1200 px mostrada a 1152 px necesita 2304. Si no tenés un asset más grande, **reducí el tamaño de visualización**, no subas el original escalado.
- **Nada de `opacity:0`:** el contenido siempre visible; prohibido ocultar con fades/reveal al hacer scroll. Microinteracción solo con `transform` / `box-shadow` en hover.
- **Fuentes:** `preconnect` a googleapis + gstatic **UNA sola vez** en el maestro, `&display=swap`, sin pesos de más (2 pesos por familia como máximo). Nunca repitas el `<link>` de Google Fonts por sección.
- **`preconnect` a `tally.so`** en el maestro: el iframe del formulario es el tercero más caro de la página.
- **Si hay vídeo** (tour de la casa): iframe directo del player, **sin `loading="lazy"`** si está en el primer viewport, con `&muted=true&autoplay=true&mutedIndicatorIcon=true&mutedIndicatorClickRestart=true&saveProgress=false` en el `src` (con `&` porque el embed ya trae `?v=ID`). Si está más abajo, sí lleva `lazy`.
- **INP:** JS mínimo, delegación de eventos, listeners de scroll/touch en `{passive:true}`. La galería con **scroll-snap nativo de CSS**, nunca una librería de carrusel (ver E21).
- **A11y (también puntúa):** `lang="es"` en el `<html>`; un solo `h1`, secciones en `h2`, estancias en `h3`, **sin saltos de nivel**; inputs con `aria-label` + `autocomplete`; botones-icono con `aria-label`; todo `<span>`/ícono con `aria-label` lleva **`role="img"`**; `alt` real y descriptivo en cada foto (`alt="Salón con salida a la terraza"`, no `alt="foto1"`); `:focus-visible` visible en CTA y flechas; `prefers-reduced-motion`.

### ✅ CHECKLIST DE CÓDIGO — pasala ANTES de entregar CADA bloque
No es opcional ni es un repaso final: se ejecuta bloque por bloque. Si respondés "no" a alguna, el bloque no está listo.

- [ ] ¿Todas las declaraciones del `<style>` llevan `!important` (salvo `:root` y `@keyframes`)?
- [ ] ¿Todas las reglas llevan **dos clases** de especificidad? (E1)
- [ ] ¿Toda `<img>` tiene `width`, `height` REALES, `decoding="async"` y `alt` descriptivo?
- [ ] ¿Solo UNA imagen en toda la página con `fetchpriority="high"`, y es la del hero?
- [ ] ¿Todas las fotos que no son el hero llevan `loading="lazy"`?
- [ ] ¿El formulario de Tally va **sin altura reservada**, con **`data-tally-src` y SIN atributo `src`**, y un `height` realista?
  > ⛔ **Corregido el 12-09-2026: esta casilla pedía «el `src` directo en el iframe», que es justo lo PROHIBIDO.** La regla de producción de esta misma skill dice, literal, que **poner el `src` directo ROMPE el alto dinámico**, porque la pasada de Tally busca `iframe[data-tally-src]:not([src])` — si el iframe ya trae `src`, no lo encuentra y no le ajusta la altura. Y este checklist es **el último filtro antes de entregar**, así que ganaba él: el resultado es el formulario cortado o un hueco negro debajo, el fallo que ya se pagó una vez. *(La skill madre `landing-vsl-directa` tenía la versión correcta; las variantes la rompieron.)* (bloque de Tally, más arriba)
- [ ] ¿Ningún `opacity:0`, ningún reveal al scroll, ninguna librería externa?
- [ ] ¿No repetiste fuentes ni `preconnect` fuera del maestro?
- [ ] ¿Los CTA anclan a `#li-form` y dicen "visita", nunca "compra"?
- [ ] ¿Jerarquía de headings sin saltos y un solo `h1`?
- [ ] ¿Lo pasaste por `impeccable`, `design-taste-frontend`, `emil-design-eng` y `make-interfaces-feel-better`?
- [ ] ¿Radio concéntrico (externo = interno + padding), `tabular-nums` en las cifras que cambian, outline de 1px en las imágenes?
- [ ] ¿Área táctil ≥44×44 px en TODO control, sin solapes, y ningún `transition: all`?
- [ ] Si el bloque tiene formulario, acordeón, tabs, carrusel o botones de icono: ¿lo pasaste por `fixing-accessibility`?

## Diseño visual — obligatorias

- **Espaciado limpio (Apple): NADA pegado.** Aire deliberado, ni bandas vacías gigantes ni todo apelotonado. Ritmo de sección = `--li-pad`. **Aire interno generoso:** separá el título del contenido, gap consistente entre elementos, `line-height` de cuerpo ~1.6. La jerarquía se construye con **espacio + peso**, no apretando todo. Usá **gap de flex/grid** para el ritmo vertical, no márgenes (los resets del maestro matan los `margin` de bloque).
- **Coherencia de jerarquía por espaciado (error frecuente):** el hueco entre bloques (título→subtítulo, subtítulo→CTA) debe ser **SIEMPRE ≥ el interlineado interno del título**. El interlineado está definido UNA vez en el maestro (`h1`=1.05, `h2`=1.1) — **no lo redefinas por bloque**. Nunca dejes un título con `line-height` mayor que su margen inferior: las líneas del título parecen más separadas que el título del subtítulo y se ve incoherente.
- **Elevación premium:** la profundidad viene de **hairline (`--li-line`) + tinte de fondo + sombra sutil (`--li-shadow`)**, NUNCA de glow ni sombra pesada (se ve barato). El **acento va SOLO en la acción** (CTA, estado activo), nunca como decoración ni relleno grande.
- **LAS FOTOS SON EL PRODUCTO.** Grandes, a sangre o casi, con `aspect-ratio` reservado y `object-fit:cover`. Una foto pequeña en una landing de inmueble es un error de diseño, no una decisión estética. Nada de filtros ni duotonos sobre las fotos de la casa: el comprador quiere ver la casa real.
- **PROHIBIDO eyebrow/kicker/badge/micro-etiqueta arriba de CUALQUIER título** (ni "LA CASA", ni "GALERÍA", ni "FAQ"). Cada sección arranca con su titular.
- **Contraste WCAG AA (≥4.5:1):** sobre fondo claro, texto oscuro; texto claro solo sobre fondo oscuro. Nunca texto en color de acento sobre fondo de acento. **Verificá el acento antes de usarlo en botones** (ver E14).
- **CTA sin icono por defecto:** la flecha es opcional, lo deciden las skills de diseño.
- **Logos sin enlace:** `<img>` suelto, nunca dentro de `<a>`. Una sola vía de conversión: el CTA a `#li-form`.
- **Simetría y alineación:** tarjetas de una fila a igual altura; grids pares para no dejar una tarjeta suelta; en la galería, todas las miniaturas con el mismo `aspect-ratio`.

## Si el usuario pide cambios a mitad

Aplicá el cambio solo al bloque indicado; si es de marca/color/token, ofrecé propagarlo a los bloques ya entregados.

**Correcciones = SIEMPRE la sección COMPLETA, nunca parcial.** Devolvé el HTML entero de esa sección (todo el `<section>` con su `<style>`), listo para reemplazar el widget de una sola vez. Nunca un fragmento, nunca un diff, nunca "cambiá esta línea": el usuario pega el bloque completo en el constructor.

Y si el cambio toca el **Bloque Maestro** (tokens, `.li-cta`, `.li-fud`, `--li-pad`), **avisalo explícitamente y devolvé el maestro entero también**, porque hay que volver a pegar ese widget. **El Bloque Maestro y el Hero se entregan SIEMPRE juntos, en el mismo mensaje y el mismo bloque de código**, incluso si el maestro no cambió: el hero sin el maestro delante se renderiza sin tokens, sin resets y sin el script de Tally, y el reporte que llega es "me rompiste el diseño" cuando en realidad falta la hoja de estilos.

---

> **⚠️ Los esqueletos de abajo son el ANDAMIAJE, no el resultado.** Son estructura funcional correcta y diseño mínimo. **Cada bloque se pasa por `impeccable`, `design-taste-frontend` y `emil-design-eng` antes de entregarlo**, que es lo que lo convierte en algo que no parece una plantilla. Entregar el esqueleto tal cual es entregar el trabajo a medias.

## BLOQUE MAESTRO — dentro del primer widget, una sola vez
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://tally.so" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family={{FUENTE_TITULARES_URL}}&family={{FUENTE_CUERPO_URL}}&display=swap">
<style>
:root{
  --li-accent:{{COLOR_ACENTO}};
  --li-accent-dk:{{COLOR_ACENTO_OSCURO}};
  --li-ink:{{COLOR_TEXTO}};
  --li-body:{{COLOR_TEXTO_SECUNDARIO}};
  --li-bg:{{COLOR_FONDO}};
  --li-bg-alt:{{COLOR_FONDO_ALTERNO}};
  --li-line:rgba(0,0,0,.10);
  --li-radius:14px;
  --li-measure:64ch;
  --li-pad:clamp(64px,9vw,112px);
  --li-shadow:0 1px 2px rgba(0,0,0,.05),0 20px 44px -28px rgba(0,0,0,.22);
  --li-ease:cubic-bezier(.16,1,.3,1);
  --li-fh:'{{FUENTE_TITULARES}}',Georgia,serif;
  --li-fb:'{{FUENTE_CUERPO}}',system-ui,sans-serif;
}
html,body{overflow-x:clip !important;max-width:100% !important;}
html{scroll-behavior:smooth;}
.li-band{position:relative !important;width:100vw !important;left:50% !important;right:50% !important;margin-left:-50vw !important;margin-right:-50vw !important;background:var(--li-bg) !important;color:var(--li-ink) !important;font-family:var(--li-fb) !important;-webkit-font-smoothing:antialiased !important;}
.li-band,.li-band *{box-sizing:border-box !important;}
.li-band img{display:block !important;max-width:100% !important;}
.li-frame{max-width:1180px !important;margin:0 auto !important;padding:var(--li-pad) 5% !important;}
.li-band h1,.li-band h2,.li-band h3{margin:0 !important;font-family:var(--li-fh) !important;font-weight:400 !important;text-transform:none !important;overflow-wrap:break-word !important;}
.li-band h1{font-size:clamp(34px,5vw,60px) !important;line-height:1.05 !important;letter-spacing:-.02em !important;text-wrap:balance !important;}
.li-band h2{font-size:clamp(26px,3.4vw,42px) !important;line-height:1.1 !important;letter-spacing:-.015em !important;text-wrap:balance !important;}
.li-band h3{font-size:18px !important;line-height:1.3 !important;font-weight:600 !important;}
.li-band p{margin:0 !important;text-wrap:pretty !important;}
.li-cta{display:inline-flex !important;align-items:center !important;justify-content:center !important;gap:10px !important;min-height:52px !important;padding:0 34px !important;background:var(--li-accent) !important;color:#fff !important;border-radius:8px !important;text-decoration:none !important;font-size:15px !important;font-weight:600 !important;cursor:pointer !important;border:0 !important;transition:background-color .22s ease,transform .16s var(--li-ease) !important;}
.li-cta:hover{background:var(--li-accent-dk) !important;}
.li-cta:active{transform:scale(.98) !important;}
.li-cta:focus-visible{outline:2px solid var(--li-accent) !important;outline-offset:3px !important;}
.li-fud{margin-top:14px !important;font-size:13px !important;color:var(--li-body) !important;}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto;}.li-band *{transition-duration:.001ms !important;}}
</style>
```

## 0 · HERO
```html
<section class="li-band">
<style>
.li-hero-media{position:relative !important;width:100% !important;aspect-ratio:16/9 !important;overflow:hidden !important;}
.li-hero-media img{width:100% !important;height:100% !important;object-fit:cover !important;}
.li-hero-copy{max-width:820px !important;}
.li-hero-copy p.li-sub{margin-top:18px !important;font-size:17px !important;line-height:1.6 !important;color:var(--li-body) !important;max-width:var(--li-measure) !important;}
.li-hero-actions{margin-top:30px !important;}
</style>
  <div class="li-hero-media">
    <img src="{{FOTO_PRINCIPAL}}" alt="{{ALT_FOTO_PRINCIPAL}}" width="1600" height="900" fetchpriority="high" decoding="async">
  </div>
  <div class="li-frame">
    <div class="li-hero-copy">
      <h1>{{H1_ESCENA_DE_VIDA}}</h1>
      <p class="li-sub">{{SUBTITULO}}</p>
      <div class="li-hero-actions">
        <a class="li-cta" href="#li-form">{{CTA_VISITA}}</a>
        <p class="li-fud">{{QUITA_MIEDOS}}</p>
      </div>
    </div>
  </div>
</section>
```

## 1 · GALERÍA POR ESTANCIAS
```html
<section class="li-band">
<style>
.li-gal{display:grid !important;grid-template-columns:repeat(auto-fit,minmax(300px,1fr)) !important;gap:clamp(20px,2.6vw,34px) !important;margin-top:44px !important;}
.li-gal figure{margin:0 !important;}
.li-gal img{width:100% !important;aspect-ratio:4/3 !important;object-fit:cover !important;border-radius:var(--li-radius) !important;}
.li-gal h3{margin-top:16px !important;color:var(--li-ink) !important;}
.li-gal figcaption p{margin-top:5px !important;font-size:14px !important;line-height:1.55 !important;color:var(--li-body) !important;}
</style>
  <div class="li-frame">
    <h2 style="max-width:20ch !important;">{{TITULO_GALERIA}}</h2>
    <div class="li-gal">
      <!-- Repetí por estancia. El nombre es h3; el pie NO describe lo obvio. -->
      <figure>
        <img src="{{FOTO_ESTANCIA}}" alt="{{ALT_ESTANCIA}}" width="1200" height="900" loading="lazy" decoding="async">
        <figcaption><h3>{{NOMBRE_ESTANCIA}}</h3><p>{{PIE_DE_FOTO}}</p></figcaption>
      </figure>
    </div>
  </div>
</section>
```

## 2 · FORMULARIO DE VISITA
```html
<section class="li-band" id="li-form" style="background:var(--li-bg-alt) !important;scroll-margin-top:20px !important;">
<style>
.li-form-box{width:min(640px,100%) !important;margin:34px auto 0 auto !important;}
.li-form-box iframe{width:100% !important;border:0 !important;display:block !important;background:transparent !important;}
</style>
  <div class="li-frame" style="text-align:center !important;">
    <h2 style="max-width:22ch !important;margin:0 auto !important;">{{TITULO_FORM}}</h2>
    <p style="margin-top:16px !important;color:var(--li-body) !important;">{{SUBTITULO_FORM}}</p>
    <div class="li-form-box">
      <iframe data-tally-src="https://tally.so/embed/{{TALLY_FORM_ID}}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" width="100%" loading="lazy" height="550" frameborder="0" title="{{TITULO_FORM}}"></iframe>
      <p class="li-fud">{{FUD_FORM}}</p>
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

## 3 · FICHA DESTACADA
```html
<section class="li-band">
<style>
.li-ficha{display:grid !important;grid-template-columns:repeat(auto-fit,minmax(170px,1fr)) !important;gap:1px !important;background:var(--li-line) !important;border:1px solid var(--li-line) !important;border-radius:var(--li-radius) !important;overflow:hidden !important;margin-top:34px !important;}
.li-ficha div{background:var(--li-bg) !important;padding:26px 22px !important;}
.li-ficha .li-dato{font-family:var(--li-fh) !important;font-size:26px !important;line-height:1.1 !important;color:var(--li-ink) !important;}
.li-ficha .li-etq{margin-top:6px !important;font-size:13px !important;color:var(--li-body) !important;}
.li-ficha .li-precio .li-dato{color:var(--li-accent) !important;}
</style>
  <div class="li-frame">
    <h2>{{TITULO_FICHA}}</h2>
    <div class="li-ficha">
      <div><p class="li-dato">{{DATO_1}}</p><p class="li-etq">{{ETIQUETA_1}}</p></div>
      <div><p class="li-dato">{{DATO_2}}</p><p class="li-etq">{{ETIQUETA_2}}</p></div>
      <div><p class="li-dato">{{DATO_3}}</p><p class="li-etq">{{ETIQUETA_3}}</p></div>
      <div><p class="li-dato">{{DATO_4}}</p><p class="li-etq">{{ETIQUETA_4}}</p></div>
      <div class="li-precio"><p class="li-dato">{{PRECIO}}</p><p class="li-etq">{{ETIQUETA_PRECIO}}</p></div>
    </div>
  </div>
</section>
```

## 4 · EL ENTORNO
```html
<section class="li-band" style="background:var(--li-bg-alt) !important;">
<style>
.li-zona{display:grid !important;grid-template-columns:1.05fr .95fr !important;gap:clamp(30px,4.4vw,64px) !important;align-items:center !important;}
.li-zona img{width:100% !important;aspect-ratio:4/3 !important;object-fit:cover !important;border-radius:var(--li-radius) !important;}
.li-zona p{margin-top:16px !important;font-size:16px !important;line-height:1.68 !important;color:var(--li-body) !important;max-width:var(--li-measure) !important;}
.li-zona ul{margin:26px 0 0 0 !important;padding:0 !important;list-style:none !important;border-top:1px solid var(--li-line) !important;}
.li-zona li{padding:13px 0 !important;border-bottom:1px solid var(--li-line) !important;font-size:15px !important;color:var(--li-ink) !important;}
@media(max-width:860px){.li-zona{grid-template-columns:1fr !important;}}
</style>
  <div class="li-frame">
    <div class="li-zona">
      <div>
        <h2 style="max-width:18ch !important;">{{TITULO_ENTORNO}}</h2>
        <p>{{PARRAFO_ENTORNO_1}}</p>
        <p>{{PARRAFO_ENTORNO_2}}</p>
        <ul><li>{{PUNTO_ZONA_1}}</li><li>{{PUNTO_ZONA_2}}</li><li>{{PUNTO_ZONA_3}}</li></ul>
      </div>
      <img src="{{FOTO_ENTORNO}}" alt="{{ALT_ENTORNO}}" width="1200" height="900" loading="lazy" decoding="async">
    </div>
  </div>
</section>
```

## 5 · CÓMO VISITAR
```html
<section class="li-band">
<style>
.li-pasos{display:grid !important;grid-template-columns:repeat(auto-fit,minmax(240px,1fr)) !important;gap:clamp(22px,3vw,40px) !important;margin-top:44px !important;}
.li-paso span{display:inline-flex !important;align-items:center !important;justify-content:center !important;width:42px !important;height:42px !important;border-radius:50% !important;border:1px solid var(--li-line) !important;font-family:var(--li-fh) !important;color:var(--li-accent) !important;}
.li-paso h3{margin-top:16px !important;color:var(--li-ink) !important;}
.li-paso p{margin-top:7px !important;font-size:15px !important;line-height:1.6 !important;color:var(--li-body) !important;}
</style>
  <div class="li-frame">
    <h2>{{TITULO_PASOS}}</h2>
    <div class="li-pasos">
      <div class="li-paso"><span>1</span><h3>{{PASO_1_TITULO}}</h3><p>{{PASO_1_TEXTO}}</p></div>
      <div class="li-paso"><span>2</span><h3>{{PASO_2_TITULO}}</h3><p>{{PASO_2_TEXTO}}</p></div>
      <div class="li-paso"><span>3</span><h3>{{PASO_3_TITULO}}</h3><p>{{PASO_3_TEXTO}}</p></div>
    </div>
    <div style="margin-top:40px !important;"><a class="li-cta" href="#li-form">{{CTA_PASOS}}</a></div>
  </div>
</section>
```

## 6 · EL AGENTE
```html
<section class="li-band" style="background:var(--li-bg-alt) !important;">
<style>
.li-agente{display:grid !important;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr) !important;gap:clamp(30px,4.4vw,60px) !important;align-items:center !important;}
.li-agente img{width:100% !important;aspect-ratio:3/4 !important;object-fit:cover !important;border-radius:var(--li-radius) !important;}
.li-agente p{margin-top:16px !important;font-size:16px !important;line-height:1.68 !important;color:var(--li-body) !important;max-width:var(--li-measure) !important;}
.li-agente .li-firma{margin-top:24px !important;font-size:15px !important;color:var(--li-ink) !important;}
@media(max-width:860px){.li-agente{grid-template-columns:1fr !important;}.li-agente img{max-width:320px !important;}}
</style>
  <div class="li-frame">
    <div class="li-agente">
      <img src="{{FOTO_AGENTE}}" alt="{{NOMBRE_AGENTE}}, {{CARGO_AGENTE}}" width="900" height="1200" loading="lazy" decoding="async">
      <div>
        <h2 style="max-width:20ch !important;">{{TITULO_AGENTE}}</h2>
        <p>{{AGENTE_P1}}</p>
        <p>{{AGENTE_P2}}</p>
        <p class="li-firma"><strong>{{NOMBRE_AGENTE}}</strong> · {{CARGO_AGENTE}}</p>
      </div>
    </div>
  </div>
</section>
```

## 7 · FAQ
```html
<section class="li-band">
<style>
.li-faq{max-width:820px !important;margin-top:40px !important;border-top:1px solid var(--li-line) !important;}
.li-faq details{border-bottom:1px solid var(--li-line) !important;}
.li-faq summary{display:flex !important;justify-content:space-between !important;gap:20px !important;align-items:center !important;cursor:pointer !important;list-style:none !important;padding:20px 0 !important;font-family:var(--li-fh) !important;font-size:17px !important;color:var(--li-ink) !important;}
.li-faq summary::-webkit-details-marker{display:none !important;}
.li-faq summary::after{content:"+" !important;color:var(--li-accent) !important;font-size:22px !important;line-height:1 !important;}
.li-faq details[open] summary::after{content:"–" !important;}
.li-faq p{padding:0 40px 20px 0 !important;font-size:15px !important;line-height:1.66 !important;color:var(--li-body) !important;}
</style>
  <div class="li-frame">
    <h2>{{TITULO_FAQ}}</h2>
    <div class="li-faq">
      <details><summary>{{PREGUNTA}}</summary><p>{{RESPUESTA}}</p></details>
      <!-- Repetí. OBLIGATORIA: una que descalifique ("¿y si me gusta la zona pero no esta casa?") -->
    </div>
  </div>
</section>
```

## 8 · DUDAS / CONTACTO DIRECTO
```html
<section class="li-band" style="background:var(--li-bg-alt) !important;">
<style>.li-dudas{max-width:620px !important;margin:0 auto !important;text-align:center !important;}.li-dudas p{margin-top:16px !important;font-size:16px !important;line-height:1.66 !important;color:var(--li-body) !important;}</style>
  <div class="li-frame">
    <div class="li-dudas">
      <h2>{{TITULO_DUDAS}}</h2>
      <p>{{PARRAFO_DUDAS}}</p>
      <div style="margin-top:28px !important;">
        <a class="li-cta" href="{{URL_CONTACTO_DIRECTO}}">{{CTA_DUDAS}}</a>
      </div>
    </div>
  </div>
</section>
```

## 9 · CIERRE
```html
<section class="li-band">
  <div class="li-frame" style="text-align:center !important;">
    <h2 style="max-width:18ch !important;margin:0 auto !important;">{{TITULO_CIERRE}}</h2>
    <p style="margin:18px auto 0 auto !important;max-width:54ch !important;color:var(--li-body) !important;line-height:1.66 !important;">{{PARRAFO_CIERRE}}</p>
    <div style="margin-top:34px !important;"><a class="li-cta" href="#li-form">{{CTA_FINAL}}</a></div>
    <p class="li-fud">{{QUITA_MIEDOS_FINAL}}</p>
  </div>
</section>
```

---

---

# ═══════ ERRORES YA COMETIDOS — PROHIBIDO REINCIDIR ═══════

Lista cerrada de fallos reales detectados en producción, con su causa técnica. **Leela ANTES de escribir el primer bloque y RE-LEELA antes de entregar cada sección.** Si una regla de acá choca con un esqueleto de más arriba, **gana esta sección**.

## E1 · ESPECIFICIDAD: los resets del maestro te pisan el CSS del bloque

**El error más grave y el más invisible.** Los resets del maestro son `.li-band p`, `.li-band h1`, `.li-band h2`, `.li-band img` → especificidad **`0,1,1`** (una clase + un elemento). Una clase suelta como `.li-hero-h1` es **`0,1,0`**. El `!important` empata en ambos, así que **gana la especificidad: el reset del maestro** y tu `margin` se descarta en silencio.

Síntoma: el usuario dice "el título está pegado al subtítulo", subes el número, y **no cambia nada**. Puedes repetirlo cinco veces sin arreglarlo nunca.

**Regla mecánica y obligatoria:** toda regla dentro del `<style>` de un bloque lleva **dos clases**:

```css
/* MAL — 0,1,0 : el reset del maestro lo pisa */
.li-hero-h1{margin:0 auto 44px !important;}

/* BIEN — 0,2,0 : gana siempre */
.li-hero .li-hero-h1{margin:0 auto 44px !important;}
```

Aplica también dentro de `@media`. Y **verificá con estilos computados** (ver E9) antes de entregar: si un margen te da `0px`, es esto. Ojo especial con `.li-band img{display:block;max-width:100%}`: cualquier `img` que quieras dimensionar distinto necesita dos clases.

## E2 · ORDEN DEL HERO: la foto y la escena antes que el dato

Orden fijo: **foto principal → H1 (escena de vida) → subtítulo (zona + dato ancla) → CTA → quita-miedos**. Nunca arranques con el precio ni con los metros: la emoción decide y el dato justifica después, en la ficha. El precio vive en el **Bloque 3**, no en el hero, salvo que el usuario lo pida expresamente.

## E3 · JERARQUÍA DE ESPACIADO: agrupar, no repartir

Tres textos consecutivos con huecos parecidos se leen como **un bloque volcado sin jerarquía**. Agrupá:
- **CTA + quita-miedos = UN grupo** → hueco chico (14-18px). El FUD pertenece al botón.
- **Título + subtítulo = UN grupo** → pero el hueco título→subtítulo debe ser **≥ el interlineado interno del título** (a 48px con `line-height:1.05` son ~50px, así que el hueco va ~50px, nunca 16px).
- **Entre grupos distintos** → separación clara, pero ver E4.

## E4 · SEPARAR CON REGLA, NO CON AIRE

Si dos grupos necesitan separarse, la solución **no** es 90px de hueco: eso genera vacío y se reporta como "todo recontra espaciado". Poné una **regla hairline** (`border-top:1px solid var(--li-line)`) a ancho de contenedor y bajá el hueco a 30-45px. La línea separa; el aire acompaña.

## E5 · ESPACIADO GENERAL: el aire se controla, no se maximiza

"Premium" no es "vacío". Rangos que funcionan (escritorio, valores máximos del clamp):

| Hueco | Máximo razonable |
|---|---|
| Padding de sección (`--li-pad`) | 112px |
| Padding interno de tarjeta | 26px |
| Entre bullets de una lista | 13px |
| Título de sección → contenido | 30-40px |
| Contenido → CTA | 20-30px |
| CTA → quita-miedos | 16px |
| Foto → su pie de foto | 10-14px |

El pie de foto va **pegado a su foto**: si lo separás más que las fotos entre sí, deja de leerse como pie.

## E6 · CIFRAS: "número grande + etiqueta chica" es el patrón por defecto de IA

Cifra grande + label chico + acento de color **es** la plantilla que genera todo modelo — y en inmueble se cae encima de la ficha (m², habitaciones, baños, año). Si el usuario dice que se ve "genérico", "básico" o "de IA", **no lo restilices por tercera vez**: cambiá de formato.

Alternativas que funcionan para la ficha:
- **Línea corrida:** `166 m² útiles · 4 habitaciones · 2 baños · terraza de 20 m²`, número en tinta y peso 600, etiqueta en gris, separadores finos en color de marca. Sin columnas ni cajas.
- **Tabla de dos columnas tipo escritura notarial** (concepto a la izquierda, dato a la derecha, filas separadas por hairline): en vivienda transmite seriedad y es lo que el comprador espera leer.
- Lo que **nunca** funciona: cuatro tarjetas con borde, icono genérico y número gigante.

## E7 · QUITA-MIEDOS (FUD): cortos, del proceso de visita, y DISTINTOS en cada CTA

1. **Cortos pero COMPLETOS: 4-5 palabras.** Por debajo de 4 no se entiende; por encima de 6 no se escanea.
2. **Del proceso real, no genéricos.** `Sin compromiso` y `Gratis` están **prohibidos**: no dicen nada. Sacalos de hechos verificables: `Te acompaña el agente`, `También visitas en sábado`, `Respuesta el mismo día`, `Sin exclusividad`, `No hace falta hipoteca aprobada`.
3. **Nunca se repiten entre CTAs.** Armá un **mapa de FUD** al empezar, uno por CTA, atacando la objeción de ese punto:

| CTA | Objeción real | FUD |
|---|---|---|
| Hero | no conozco la agencia | Respuesta el mismo día · Te acompaña el agente |
| Tras la galería | ¿será como en las fotos? | Fotos sin retocar · Visita sin compromiso previo |
| Cómo visitar | ¿me van a presionar? | Tú marcas el ritmo · Sin exclusividad |
| Cierre | ¿tengo que tener el dinero ya? | No hace falta hipoteca aprobada · También en sábado |

**El test:** escribí el miedo que tiene la persona con el dedo sobre el botón y leé el FUD como respuesta. Los miedos reales acá son: *me van a acribillar a llamadas · las fotos van a estar retocadas · me van a presionar para firmar · voy a perder un sábado*. Si tu FUD no contesta ninguno, es una característica disfrazada.

**Un quita-miedos NUNCA se parte en dos líneas, pero el par SÍ puede apilarse:** `.li-fud{display:flex;flex-wrap:wrap;gap:8px 20px}` + `.li-fud span{white-space:nowrap}`. Con `nowrap` un par de 5 palabras **se desborda del contenedor** en móvil (comprobado a 390px).

## E8 · VERIFICAR RENDERIZADO ANTES DE ENTREGAR

No entregues una sección "arreglada" sin verla. Levantá un preview local y **medí estilos computados**, no confíes en el CSS que escribiste:

```js
const g = s => getComputedStyle(document.querySelector(s));
({h1: g('.li-hero-h1').marginBottom, sub: g('.li-hero-sub').marginBottom})
```

Si un valor da `0px` cuando escribiste `44px`, es **E1**. Revisá siempre a **1440px y a 375px**, y acordate de que un archivo suelto necesita `<meta name="viewport">` y `<meta charset="utf-8">` propios (WordPress ya los trae): sin viewport los media queries no disparan y vas a creer que el móvil está roto.

**Y verificá las fotos:** que ninguna se vea borrosa (E15), que ninguna salte al cargar (CLS), y que la galería scrollee con el dedo sin trabarse.

## E9 · MÓVIL: al apilar, el gap va entre TARJETAS, no entre filas

Si en el media query dejás `row-gap` en una grilla que simula tarjetas, las celdas se separan **una por una** y no ves tarjetas: ves filas sueltas flotando. Apilá con `order` y poné el único hueco entre tarjeta y tarjeta (`margin-top`).

En la galería, en móvil las fotos van **a ancho completo o casi**, nunca en dos columnas de miniaturas diminutas: la foto es el producto.

## E10 · DATOS DE LA FICHA: no los reescribas, no los redondees, no los inventes

- **Los metros, el precio, el año, la orientación, el certificado energético y los gastos van TEXTUALES** como los dio el usuario. **Tienen consecuencias legales.**
- Si el usuario ya aprobó una ficha, **queda congelada**: en la siguiente iteración no la toques aunque estés cambiando la sección de al lado.
- Lo que falte va como `[dato pendiente]` **visible**, y se avisa al entregar. Nunca lo completes "con algo razonable".
- **Nunca conviertas** m² construidos en útiles (ni al revés) por tu cuenta.

## E11 · ESCANEABILIDAD DEL COPY

Bullets de **5-8 palabras** como objetivo, **12 como techo duro** (por encima tiene dos ideas y se parte). Negrita en **una sola palabra** por línea. Párrafos de cierre: una frase por línea. Y **cada foto lleva pie** — el pie es el segundo titular, se lee 4× más que el cuerpo.

## E12 · CONTRASTE: verificá el acento antes de usarlo en botones

Un naranja tipo `#E85D04` con texto blanco da **3.5:1** y **no pasa AA** para texto de botón (necesita 4.5:1). Antes de asignar `--li-accent`, calculá el contraste.

Si el acento de marca no pasa: **invertí los roles.** La tinta oscura pasa a ser el color de **acción** (CTA, estados activos) y el color de marca queda como **marca**: hairlines, separadores, el `<mark>` del titular, el punto dentro del botón. Declaralo como `--li-brand` aparte de `--li-accent`.

**Y el botón de Tally no lo alcanza tu CSS** (vive dentro del iframe): si el acento es claro, el texto blanco encima queda por debajo de 2:1 justo en el elemento que convierte. Comprobalo y **decíselo al usuario**: se arregla en el diseñador de Tally.

## E13 · `width`/`height` de imágenes con la proporción REAL

No inventes las dimensiones. Sacá el ratio del archivo real y calculá. Un logo de 1024×225 mostrado a 36px de alto es `width="164" height="36"`, no `width="219"`. Un ratio mal puesto reserva una caja distinta a la imagen y **genera CLS**, que es justo lo que los atributos existen para evitar.

En una galería con fotos de proporciones mixtas (verticales del baño, horizontales del salón), el contenedor lleva `aspect-ratio` fijo + `object-fit:cover`, pero **cada `<img>` conserva sus `width`/`height` reales**.

## E14 · FOTOS BORROSAS: el archivo tiene que medir ≥ 2× el ancho en CSS

Comprobado midiendo: una foto de 1200 px mostrada a 1152 px de ancho **se ve borrosa en retina**, por rápido que cargue — necesita 2304. Si no tenés un asset más grande, **reducí el tamaño de visualización**, no subas el original escalado. En una landing de inmueble esto es crítico: una foto borrosa del salón mata la venta más que un segundo de carga.

## E15 · EL `!important` DEL CSS LE GANA A `element.style` DEL JS: toggleá clases

Consecuencia directa de la regla de `!important` en todas las declaraciones. Esto **no hace nada**:

```css
.li-gal .li-gal__arrow{display:flex !important;}
```
```js
arrow.style.display = 'none';   /* ignorado: el !important gana */
```

Síntoma: el JS "no funciona" aunque no tire error. **Regla:** el JS **nunca escribe `element.style`**. Declarás el estado como clase con `!important` y lo toggleás:

```css
.li-gal .li-gal__arrow.is-hidden{display:none !important;}
```
```js
arrow.classList.toggle('is-hidden', hidden);
```

Los atributos nativos (`disabled`, `hidden`, `aria-*`) sí funcionan normal.

## E16 · GALERÍA: scroll-snap nativo, flechas que se ocultan solas, CERO librerías

La galería por estancias es el bloque con más riesgo de que metas una librería. No la metas: CSS scroll-snap + un IIFE de quince líneas alcanza y no cuesta un solo KB de JS externo.

- **Track:** `display:flex; overflow-x:auto; scroll-snap-type:x mandatory; scroll-behavior:smooth`, barra oculta (`scrollbar-width:none` + `::-webkit-scrollbar{display:none}`).
- **Ítems:** `flex:0 0 calc((100% - (N-1)*gap)/N)` con `scroll-snap-align:start`. Escritorio N = 2 o 3; **móvil `flex-basis:84%`** para que **se asome** la siguiente foto y se vea que hay más.
- **`align-items:stretch`** en el track: todas las fotos a la misma altura y los pies alineados con `margin-top:auto`.
- **Flechas:** desplazan `ancho del ítem + gap` con `scrollBy({behavior:'smooth'})`, se **deshabilitan** en los extremos y el bloque **se oculta cuando no hay overflow** — vía clase, nunca `element.style` (E15). Recalculá en `scroll` y `resize`, ambos `{passive:true}`.
- **A11y:** el track con `role="group"`, `aria-roledescription="galería"`, `aria-label` y `tabindex="0"` para scrollear con teclado; cada botón con su `aria-label`; cada foto en `<figure>` + `<figcaption>`.
- **Guard de re-ejecución** con `dataset` (`if(t.dataset.liGalReady)return`), porque el constructor puede reinyectar el widget.
- **Solo la primera foto visible sin `lazy`**; el resto de la galería, `loading="lazy"` siempre.

## E17 · `<mark>`: dibujá el subrayado con `background-image`, NUNCA con `text-decoration` ni `box-shadow`

Dos fallos encadenados, ambos comprobados en producción sobre WordPress.

**Fallo 1 — `box-shadow: inset`.** Apoya la línea en el borde inferior de la caja de línea, o sea por debajo de los descendentes: la línea flota lejos de la letra y se lee como un separador entre el título y el subtítulo.

**Fallo 2 — `text-decoration`.** Parece lo correcto, pero **el color te lo pisa el tema**: el subrayado sale azul aunque declares `text-decoration-color` con `!important`. Y si un ancestro tiene decoración, se **propaga** a los descendientes y un `text-decoration:none` en el hijo **no puede quitarla** (comportamiento del propio CSS, no un bug de especificidad).

**La única forma robusta es no usar el mecanismo de decoración de texto:**

```css
.li-band mark{
  background-color:transparent !important;
  background-image:linear-gradient(var(--li-brand),var(--li-brand)) !important;
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

Como va en `em`, medido una vez sirve para todos los tamaños de esa fuente. Además: **acotá el `max-width` del H1** para que el `<mark>` no se parta dejando un fragmento suelto.

## E18 · GRID DE PASOS / SERVICIOS: todos en UNA fila, con un icono propio cada uno

Vale para "Cómo visitar" (3 pasos) y para cualquier grilla de ítems cortos.

- **Escritorio:** `grid-template-columns: repeat(N,1fr)` — con 3 pasos, tres columnas. Nunca una grilla de 2 con uno suelto abajo. Cada celda: **icono arriba, texto centrado debajo**.
- **Cada ítem lleva su PROPIO icono SVG**, ligado a SU texto. Nunca el mismo icono repetido, nunca un círculo genérico, nunca un glifo unicode ni un emoji. Dibujados a mano, `viewBox="0 0 24 24"`, `fill:none`, mismo `stroke-width` (1.7-2), `stroke-linecap`/`linejoin` en `round`, ~24px. Mapeo texto→icono: rellenar el formulario → documento con línea · te llama el agente → teléfono · ves la casa → llave o puerta.
- **Móvil (~640px):** uno debajo del otro y **a ancho completo**, en `flex-direction:row` (icono izquierda, texto derecha, alineado a la izquierda), separados por `border-top` hairline. Nunca centrados y angostos.

## E19 · SIMETRÍA DE ALTURA: la columna del párrafo va MÁS ANGOSTA que la de la lista

En cualquier bloque de dos columnas donde una es **un párrafo corrido** y la otra **una lista o una foto** (típico: "El entorno", "El agente"), la trampa es dar más ancho al párrafo "porque tiene más texto". Resultado: el párrafo queda bajo y ancho, la otra columna alta y angosta, y queda un hueco muerto debajo.

**Al revés: angostá la columna del párrafo.** Al reducir el ancho gana líneas y crece en alto hasta igualar. Punto de partida: **`grid-template-columns:.56fr 1fr`**. No lo dejes ahí, **medí**:

```js
const a = document.querySelector('.li-agente__grid');
const L = a.children[0].getBoundingClientRect().height;
const R = a.children[1].getBoundingClientRect().height;
({izq: Math.round(L), der: Math.round(R), dif: Math.round(L - R)})
```

Si `dif` es negativo, angostá más el párrafo (bajá el `fr`). Cada línea a 15px/1.65 vale ~25px. Apuntá a **|dif| ≤ 3px**. Y no le pongas `max-width` en `ch` al párrafo dentro de una columna que ya lo acota: el ancho lo controla la grilla o el `fr` deja de tener efecto.

## E20 · EL AGENTE: dos párrafos, y las credenciales VAN DENTRO de la prosa

Corrige el Bloque 6. **Dos párrafos, no tres** — el tercero siempre repite al segundo.

- **P1 · Por qué esta zona / esta casa no se compra a ciegas.** Qué hay que saber, qué sale mal, qué le pasa al que va solo. Sin mencionar todavía a la agencia.
- **P2 · Quién es, qué hace y para quién.** Acá entran las credenciales.

**Las credenciales NO van en lista con checks** (se lee como currículum y se saltea). Van **tejidas dentro del párrafo, en negrita**:

```
MAL — lista suelta al costado:
  ✓ 12 años en la zona
  ✓ +80 operaciones cerradas
  ✓ Colegiado nº 1234

BIEN — dentro de la prosa:
  "Llevo **doce años vendiendo en Burriana** y he cerrado **más de
   ochenta operaciones** en este mismo paseo. Sé qué bloques tienen
   la comunidad al día y cuáles no, y por eso..."
```

La negrita cae solo en el dato duro, nunca en la frase entera. **Foto real del agente, con nombre y teléfono.** El titular de este bloque no dice "¿Por qué elegirnos?": hace una afirmación que el lector reconoce como propia.

## E21 · CIFRAS CONTRADICTORIAS EN EL MATERIAL DEL CLIENTE: unificar, y decirlo

Frecuentísimo en inmueble: el anuncio dice 166 m² y la nota simple 152; el portal dice 4 habitaciones y las fotos muestran 3 y un despacho. Son afirmaciones **incompatibles** y aquí no es solo credibilidad: **es responsabilidad legal**.

**Qué hacer:** no elijas vos. **Preguntá al usuario cuál es el dato registral** y usá ese en TODAS las secciones. Si no te contesta, poné `[m² a confirmar]` visible y avisá. Nunca dejes las dos versiones conviviendo y nunca lo unifiques en silencio.

Y recordá que **un número específico convence más que uno redondo** (Ogilvy): `152 m² útiles` es mejor copy que `unos 150 m²`.

## E22 · CORRECCIONES: sección completa, siempre

Ya está más arriba pero se incumple: cuando corregís algo, devolvé **todo el `<section>` con su `<style>`**, listo para reemplazar el widget de una sola vez. Nunca un fragmento, nunca un diff, nunca "cambiá esta línea".

Si el cambio toca el **Bloque Maestro** (tokens, `.li-cta`, `.li-fud`, `mark`, `--li-pad`), **avisalo y devolvé el maestro entero**. **El Maestro y el Hero van SIEMPRE juntos**, en el mismo mensaje y el mismo bloque de código, aunque el maestro no haya cambiado.

## E23 · ENTREGA DE VARIANTES

Cuando muestres 2-4 variantes para elegir:
- Renderizalas **con la marca real y las fotos reales del inmueble**. Una variante con placeholders grises no se puede juzgar: en esta landing la foto ES el diseño.
- Que sean **direcciones distintas de verdad** (composición, jerarquía, densidad, fondo), no el mismo layout con otro tinte. Tres tintes del mismo layout se rechazan en bloque.
- Si el usuario rechaza las tres, **no tires tres más**: preguntá qué específicamente no funciona (escala, tipografía, color, aire, tamaño de foto) y atacá eso.

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

# ═══════════ ENSAMBLADO EN `index.html` (si se va a publicar) ═══════════

Si el usuario quiere el archivo único en vez de widgets:
- **El bloque maestro sube al `<head>` real**; fuentes y `preconnect` una sola vez.
- SEO: `title` (50-60), `description` (140-160), canonical, OG con la **foto principal** como `og:image`, Twitter card.
- **JSON-LD `RealEstateListing`** con precio, m², habitaciones y dirección: es lo que da la ficha enriquecida en Google.
- Un solo `h1`, bloques con `h2`, estancias con `h3`.
- El script de Tally una sola vez, al final del `<body>`.

**Antes de entregar:** abrilo a 375 y 1440 px, consola limpia, y `grep -nE '\{\{[A-Z0-9_]+\}\}|TODO:' <fichero.html>` sin resultados (**con dígitos y con fichero**: el regex `[A-Z_]+` sin dígitos dejaba pasar `{{FUD_1}}` y compañía, y sin fichero el grep cuelga). **Un placeholder jamás sale publicado** — y acá un precio o unos metros mal puestos tienen consecuencias legales.

## ⛓️ Después de entregar: encadená con `publicar-landing`
Cerrá siempre con: *"Listo. ¿La publico en un subdominio con panel de edición, o te quedás con el archivo?"* Si dice que sí, invocá **`publicar-landing`** con la tool Skill. Nunca despliegues sin ese OK.

---

## Lo que esta skill NUNCA hace
- **Entregar un bloque sin haberlo pasado por `impeccable`, `design-taste-frontend` y `emil-design-eng`.** Ni el primero, ni una corrección.
- **Devolver una corrección parcial.** Siempre el bloque completo, listo para pegar.
- **Entregar un bloque sin pasar el CHECKLIST DE CÓDIGO.** Sobre todo: formulario de Tally con altura reservada, fotos sin `width`/`height`, fotos de galería sin `loading="lazy"`, o CSS sin `!important` y sin doble clase.
- Inventar metros, precio, orientación, certificado energético o gastos: tienen consecuencias legales.
- Inventar testimonios o la experiencia del agente.
- Usar el vocabulario del portal inmobiliario ("acogedor", "oportunidad única").
- Poner "comprar" o "reservar" en un CTA. **Siempre la visita.**
- Reordenar los bloques: la galería va antes que la ficha, y el formulario va temprano.
- Publicar una foto sin pie, o una estancia sin nombre.
- Decir que está listo sin haberlo abierto en el navegador.
