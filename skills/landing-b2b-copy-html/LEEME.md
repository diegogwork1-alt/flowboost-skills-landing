# LEEME — `landing-b2b-copy-html`

> Paquete **landing**. Esto es lo que hay que tener en cuenta **antes** de usar la skill.
> Las instrucciones de trabajo están en `SKILL.md`; esto son las condiciones y los límites.

## Qué hace

Flujo COMPLETO 2-en-1 para una landing B2B de alto ticket (servicios profesionales: legal, consultoría, agencias, asesorías) — sección por sección, primero ESCRIBE el copy (Ogilvy + Ecuación de Valor + Life Force 8 + PAS duplicado) y, SOLO tras la aprobación del usuario, entrega el HTML maquetado para Elementor. También funciona en MODO AUDITORÍA: si se le pasa una landing ya hecha (HTML, archivo o URL) y se pide revisarla, corregirla, mejorarla o saber qué está mal, la audita contra sus propias reglas y devuelve el diagnóstico priorizado más los bloques corregidos completos; NUNCA pregunta al usuario qué cambiar, porque el criterio está en la skill.

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
