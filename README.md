# flowboost-skills-landing

Copy y maquetación de landings, publicación y página de gracias

---

## Instalar (2 minutos)

Abre **Claude Code** y pégale esto tal cual:

```
Instálame las skills de Flowboost de este repo y guíame en la primera configuración:
https://github.com/<usuario-github>/flowboost-skills-landing
```

Claude clona el repo, instala las skills y te va pidiendo lo que falte en tu ordenador.
No hace falta que sepas nada de terminal: te da los comandos ya escritos.

> ### ⚠️ Instala también el paquete base
> Estas skills leen de `fundamentos` (Ogilvy, Schwartz, el compliance de Meta).
> **Sin él funcionan a medias y no avisan.** Pégale también esto a Claude:
> ```
> Instala también https://github.com/<usuario-github>/flowboost-skills-fundamentos
> ```


### Si lo prefieres a mano

```bash
git clone https://github.com/<usuario-github>/flowboost-skills-landing.git
cd flowboost-skills-landing
python3 instalar.py
```

Y después, en Claude: `guíame en la primera configuración`

---

## Qué hay aquí

| Skill | Qué hace |
|---|---|
| `landing-b2b-alto-ticket` | "Arma la ESTRUCTURA HTML/CSS de una landing B2B de alto ticket (10 bloques, patrón AIDA + PAS duplicado: dolor agitado dos veces con proceso racional … |
| `landing-b2b-copy-html` | Flujo COMPLETO 2-en-1 para una landing B2B de alto ticket (servicios profesionales: legal, consultoría, agencias, asesorías) — sección por sección, pr… |
| `landing-b2b-index-html` | Flujo COMPLETO 2-en-1 para una landing B2B de alto ticket (servicios profesionales: legal, consultoría, agencias, asesorías) que entrega UN SOLO archi… |
| `landing-conversion` | "Maqueta en HTML/CSS (para widgets de Elementor/WordPress) una landing de conversión de respuesta directa siguiendo el esqueleto maestro de 18 bloques… |
| `landing-conversion-copy-html` | Flujo COMPLETO 2-en-1 para una landing de conversión de respuesta directa (B2B / servicios) — sección por sección, primero ESCRIBE el copy (Ogilvy + E… |
| `landing-inmueble-copy-html` | Flujo COMPLETO 2-en-1 para la landing de UN INMUEBLE CONCRETO en venta (piso, villa, chalet), con la estructura exacta de cliente-06.es ya publicada… |
| `landing-vsl-directa` | Maqueta en HTML/CSS (para widgets de Elementor/WordPress) una landing VSL de respuesta directa de 9 bloques (0-8) con el FORMULARIO ARRIBA (justo desp… |
| `landing-vsl-directa-copy-html` | Crea una landing VSL de respuesta directa de 9 bloques (0-8) con el FORMULARIO ARRIBA (Hero VSL, Formulario, Dolor PAS, Sistema/Value props, Reseñas, … |
| `landing-vsl-directa-index-html` | Crea una landing VSL de respuesta directa de 9 bloques (0-8) con el FORMULARIO ARRIBA y entrega UN SOLO archivo index.html listo para publicar, no wid… |
| `copy-b2b-alto-ticket` | Escribe el COPY (texto, no HTML) de una landing B2B de alto ticket con decisión emocional/compleja (servicios profesionales: legal, consultoría, agenc… |
| `copy-vsl-directa` | Escribe el COPY (texto, no HTML) de una landing VSL de respuesta directa de 9 bloques (0-8) con el FORMULARIO ARRIBA (justo después del hero): Hero VS… |
| `publicar-landing` | Publica una landing YA APROBADA en un subdominio del cliente, con panel de edición para cambiar textos e imágenes sin tocar código. Toma el HTML que g… |
| `pagina-gracias` | Crea la página de Gracias (Thank You Page / TYP) de un cliente, la que se muestra después de enviar el formulario. Define la ESTRUCTURA fija que debe … |
| `impeccable` | Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize, extract, or… |

Cada skill lleva un **`LEEME.md`** con lo que hay que tener en cuenta antes de usarla: qué
necesita, qué no puede hacer y dónde deja las cosas.

---

## Lo que vas a necesitar

| | Para qué |
|---|---|
| **rclone + el Drive de Flowboost** | de ahí salen el brief, el branding y las fotos; ahí se dejan los entregables |
| **Python 3** | ya viene en el Mac |


La primera configuración te la monta Claude paso a paso. Lo único que tiene que darte Dirección son
los accesos: el Google del Drive y, si llevas campañas, la cuenta de Meta.

**Nunca le des una contraseña o una clave por chat.** Si algo la necesita, la pones tú en tu
ordenador y Claude te dice dónde.

---

## Reglas de la casa que aplican aquí

- Todo el texto para clientes en **español de España** (tú/vosotros), nunca voseo.
- **No se inventa** nada: cifras, testimonios, fechas ni garantías. Lo que falte se marca `[FALTA]`.
- Los ficheros de un cliente van a `~/Desktop/CLIENTES/<cliente>/`.
- El **Drive del cliente es de solo lectura**, salvo los entregables en su subcarpeta.
- **Activar una campaña de Meta es siempre de Dirección.** Las skills las dejan en pausa.

---

*Generado desde el sistema de Flowboost. No se edita aquí: se edita en el origen y se regenera.*
