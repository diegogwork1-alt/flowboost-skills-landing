# LEEME — `pagina-gracias`

> Paquete **landing**. Esto es lo que hay que tener en cuenta **antes** de usar la skill.
> Las instrucciones de trabajo están en `SKILL.md`; esto son las condiciones y los límites.

## Qué hace

Crea la página de Gracias (Thank You Page / TYP) de un cliente, la que se muestra después de enviar el formulario. Define la ESTRUCTURA fija que debe tener, la personalización por parámetros de URL (nombre y respuestas del formulario), el WhatsApp que INICIA el lead (para no quemar el número), las reglas de código para pegar en Elementor/WordPress, la publicación (noindex + slug) y exactamente qué poner en la URL de redirección de Tally según los campos del formulario.

## Antes de empezar necesitás

- La URL de la landing publicada y los campos reales del formulario de Tally.

## Lo que NO se puede hacer

- ⛔ Quemar el número de WhatsApp: **el lead INICIA la conversación**, nunca al revés.

## Ojo con esto

- **El formulario y esta página son trabajo de Dirección** (los hace con su GPT). Esta skill define la estructura y la lógica, no sustituye ese trabajo.
- Va con `noindex`.

## Accesos que toca

Google Drive del cliente (solo lectura salvo entregables), Tally (formulario).

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

*Generado el 10-09-2026 desde el sistema de Flowboost. Se regenera con `gen_leeme.py`; no editar a mano.*
