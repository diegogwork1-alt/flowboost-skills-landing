# LEEME — `landing-vsl-directa`

> Paquete **landing**. Esto es lo que hay que tener en cuenta **antes** de usar la skill.
> Las instrucciones de trabajo están en `SKILL.md`; esto son las condiciones y los límites.

## Qué hace

Maqueta en HTML/CSS (para widgets de Elementor/WordPress) una landing VSL de respuesta directa de 9 bloques (0-8) con el FORMULARIO ARRIBA (justo después del hero, todos los CTA anclan ahí): Hero VSL (logo + reseñas + H1 + subheadline + video VSL de Panda + CTA + quita-miedos + logos de prensa), Formulario (Tally inline), Punto de Dolor (PAS), Sistema/Value props (lista), Reseñas (widget de prueba social), Método/Cómo Funciona (3 pasos), Autoridad/Equipo, FAQ (con pregunta que descalifica), Cierre + CTA final. El COPY lo aporta el usuario; esta skill NO redacta copy ni inventa datos — lo coloca en los esqueletos, bloque por bloque.

**Qué NO hace:** NO redacta copy ni inventa datos — lo coloca en los esqueletos, bloque por bloque.

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
