# LEEME — `landing-b2b-alto-ticket`

> Paquete **landing**. Esto es lo que hay que tener en cuenta **antes** de usar la skill.
> Las instrucciones de trabajo están en `SKILL.md`; esto son las condiciones y los límites.

## Qué hace

"Arma la ESTRUCTURA HTML/CSS de una landing B2B de alto ticket (10 bloques, patrón AIDA + PAS duplicado: dolor agitado dos veces con proceso racional en medio, auto-calificación por avatar, FAQ como filtro de leads) lista para pegar en widgets HTML de Elementor/WordPress, bloque por bloque. El COPY lo aporta el usuario: esta skill NO redacta copy ni inventa datos — toma tus textos y los coloca en los esqueletos.

**Qué NO hace:** NO redacta copy ni inventa datos — toma tus textos y los coloca en los esqueletos. No usar para landings VSL con formulario arriba (esas son `landing-vsl-directa`, `landing-vsl-directa-copy-html` y `landing-vsl-directa-index-html`) ni para la venta de un inmueble concreto (esa es `landing-inmueble-copy-html`).

## Antes de empezar necesitás

- **El paquete `fundamentos` instalado al lado** (`npx skills add <usuario-github>/flowboost-skills-fundamentos --copy`). Esta skill lee Ogilvy, Schwartz y el compliance de Meta desde `../fundamentos-copy/`. **Si no está, la skill funciona a medias y NO avisa.**
- El copy aprobado (o el brief, si la skill también redacta) y los tokens de marca del cliente.

## Lo que NO se puede hacer

- ⛔ Inventar testimonios, cifras, fechas o garantías.

## Ojo con esto

- Cada bloque pasa por `impeccable`, `design-taste-frontend` y `emil-design-eng` antes de darse por bueno.
- En cada corrección se devuelve el **HTML completo de la sección**, nunca fragmentos sueltos.

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
