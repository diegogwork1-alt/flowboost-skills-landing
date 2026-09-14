---
name: pagina-gracias
description: Crea la página de Gracias (Thank You Page / TYP) de un cliente, la que se muestra después de enviar el formulario. Define la ESTRUCTURA fija que debe tener, la personalización por parámetros de URL (nombre y respuestas del formulario), el WhatsApp que INICIA el lead (para no quemar el número), las reglas de código para pegar en Elementor/WordPress, la publicación (noindex + slug) y exactamente qué poner en la URL de redirección de Tally según los campos del formulario. El diseño (colores, fuentes, logo) va según cada cliente; la estructura y la lógica son siempre iguales. Usar cuando Dirección pida "armá la página de gracias / TYP de <cliente>", "hacé la thank you page", o después de publicar una landing con formulario.
---

# Página de Gracias (TYP) — cómo se arma

La TYP es la página a la que Tally redirige tras enviar el formulario. Su trabajo:
1. Confirmar que la solicitud se recibió (pero que **falta 1 paso**).
2. Empujar al lead a **escribir él por WhatsApp** (clave anti-baneo: si el lead inicia, el número del cliente no se banea).
3. Llevarle a WhatsApp un mensaje **precargado con sus respuestas** del formulario.
4. Personalizar el texto con su **nombre** y datos.

> El diseño (colores, fuentes, logo, estilo) lo define la marca del cliente. **La estructura, la lógica y las reglas de este documento NO cambian entre clientes.**

---

## 1. Principios (no negociables)
- **Mobile-first.** El tráfico de estas campañas es ~80% móvil. Todo tiene que verse y funcionar en móvil primero.
- **El lead inicia el WhatsApp, no el cliente.** El botón abre WhatsApp del lado del lead (`wa.me`). Nunca al revés (escribir en frío quema el número).
- **Personalización por URL.** Tally manda las respuestas en la URL; la página las lee y las usa. Sin CRM, sin plugins.
- **Nada de datos sensibles** en la URL más allá de lo del propio lead (nombre, tel, email, respuestas del form).

---

## 2. ESTRUCTURA OBLIGATORIA (bloques, en este orden)

1. **Navbar** — barra superior full-bleed con el **logo** del cliente centrado y un borde inferior con el color de marca.
2. **Hero** —
   - **Kicker** (línea corta arriba) que comunica *"solicitud recibida · falta 1 paso"* y se **personaliza con el nombre** (ej. "Gracias, {nombre} · falta 1 paso").
   - **H1** breve.
   - **Subtexto** de 1–2 líneas: se recibió, pero falta el último paso.
   - *(Opcional: fotos del equipo que va a contactar.)*
3. **Tarjeta de acción (WhatsApp)** — el bloque más prominente, arriba:
   - Badge "Último paso · obligatorio".
   - Título + microcopy: *"tu solicitud aún NO está completa; escríbenos por WhatsApp para confirmarla"*.
   - **Botón de WhatsApp** (`wa.me`) que arma el mensaje con las respuestas del form.
4. **Nota / qué sigue** — bloque secundario: el equipo te contactará según tu disponibilidad; cuanto antes escribas, antes se reserva tu lugar. *(Opcional: mostrar alguna respuesta del form con `data-var`.)*
5. **Autoridad** *(opcional)* — 1–2 líneas de credibilidad (años, alumnos, etc. — datos reales del cliente).
6. **Footer** — full-bleed, con copyright/año y datos legales.
7. **Script de personalización** (al final).

---

## 3. Reglas de código (para pegar en un widget HTML de Elementor)
- **Secciones full-bleed** (rompen el contenedor de Elementor):
  `position:relative; left:50%; width:100vw; margin:0 -50vw;`
- **`!important` en cada declaración** y **clases con prefijo propio** (ej. `typ-…` o `xx-…`) para no chocar con estilos del tema.
- **Fuentes: cargarlas UNA vez** al inicio del bloque (`<link>` Google Fonts + `preconnect`).
- **WhatsApp:** usar **`https://wa.me/<telefono>?text=...`** (sin `+`, ej. `34600111222`). Abre la app en móvil.
- **Sin emojis en el texto precargado de WhatsApp** (se rompen y salen como signos de pregunta en algunos móviles).
- **La TYP no lleva formulario** (solo el botón de WhatsApp). Si por algún motivo llevara un embed, cargar el script del embed temprano y sin altura reservada.
- **Idioma** del texto = el mismo que la landing/marca del cliente.

---

## 4. Personalización (genérico, siempre igual)

Pegar este script al final de la página. No se toca entre clientes:

```html
<script>
(function(){
  var p = new URLSearchParams(window.location.search);
  function get(k){ var v = p.get(k); return v ? v.trim() : ''; }
  function cap(s){ return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }

  // A) Rellena cualquier elemento con data-var="clave" usando ?clave=... de la URL.
  //    Modificadores: data-cap (1ª mayúscula), data-prefix / data-suffix (solo si hay valor).
  document.querySelectorAll('[data-var]').forEach(function(el){
    var v = get(el.getAttribute('data-var'));
    if(v){
      if(el.hasAttribute('data-cap')) v = cap(v);
      el.textContent = (el.getAttribute('data-prefix')||'') + v + (el.getAttribute('data-suffix')||'');
    }
  });

  // B) Botón de WhatsApp: arma el mensaje con data-phone + data-fields ("clave:Etiqueta,...").
  var btn = document.getElementById('typWppBtn');
  if(btn && btn.dataset.phone){
    var lines = ["Hola! Acabo de enviar la solicitud.",""];
    (btn.dataset.fields||'').split(',').forEach(function(pair){
      var kv = pair.split(':'); var key = (kv[0]||'').trim(); var label = (kv[1]||key).trim();
      var val = get(key);
      if(val){ lines.push(label + ': ' + val); }
    });
    var text = (lines.length > 2) ? lines.join("\n") : "Hola! Acabo de enviar la solicitud.";
    btn.setAttribute('href', "https://wa.me/" + btn.dataset.phone + "?text=" + encodeURIComponent(text));
  }
})();
</script>
```

**Cómo se usa en el HTML:**
```html
<!-- Nombre: si llega ?nom= muestra "Gracias, Carlos", si no "Gracias" -->
<h1>Gracias<span data-var="nom" data-prefix=", " data-cap></span>! Ya casi está.</h1>

<!-- Mostrar una respuesta concreta -->
<p>Lo que te interesa: <strong data-var="campo1">—</strong></p>

<!-- Botón que arma el WhatsApp con las respuestas -->
<a id="typWppBtn" data-phone="34600111222"
   data-fields="nom:Nombre,tel:Teléfono,email:Email,campo1:Pregunta 1,campo2:Pregunta 2"
   target="_blank" rel="noopener">Escríbenos por WhatsApp</a>
```
Regla de oro: **la clave en la URL, en `data-var` y en `data-fields` tiene que ser la misma.**

---

## 5. URL de redirección de Tally (según los campos del formulario)

En Tally → **Configuración → Después de enviar → Redirigir a una página** → URL:

```
https://DOMINIO-DEL-CLIENTE/gracias?nom=@Nombre&tel=@Telefono&email=@Email&campo1=@Pregunta1&campo2=@Pregunta2
```

Reglas:
- La parte `clave=` la **escribís vos** (elegís nombres cortos: `nom`, `tel`, `email`, `campo1`…).
- El `@…` se **inserta con el selector de campos de Tally** (pone el valor real de esa respuesta).
- Añadí **un parámetro por cada pregunta** que quieras ver en la TYP o en el WhatsApp.
- Esas mismas claves son las que usás en `data-var` y `data-fields`.

**Ejemplo real (formulario tipo academia):**
```
?nom=@Nombre&tel=@Teléfono&email=@Correo&estilo=@Qué te gustaría hacer?&exp=@Tienes experiencia?&inicio=@Cuándo quieres empezar?
```

---

## 6. Publicación en WordPress
- La TYP va en su **propia página**, pegada en un **widget HTML** de Elementor con plantilla **Canvas** (sin cabecera/sidebar del tema).
- **Slug** limpio y no adivinable, ej. `/gracias` (o `/gracies`). Requiere permalinks en **"Nombre de la entrada"**.
- Marcar la página **noindex** (Rank Math → Avanzado → No Index) para que no la indexe Google.
- En **Tally**, apuntar la redirección a esa URL (paso 5).

---

## 7. Checklist final
- [ ] Estructura completa (navbar → hero → tarjeta WhatsApp → nota → footer).
- [ ] Mobile-first revisado (bloques con aire, botón full-width en móvil).
- [ ] `wa.me/<telefono>` correcto, **sin emojis** en el texto.
- [ ] `data-var` / `data-fields` con las mismas claves que la URL de Tally.
- [ ] Saludo personalizado con nombre (con fallback si no llega).
- [ ] Redirección de Tally configurada con todos los campos.
- [ ] Página noindex + slug limpio + plantilla Canvas.
- [ ] Probar el flujo real: rellenar el form → caer en la TYP → el botón abre WhatsApp con los datos.

---

## Notas
- **Diseño por cliente:** colores, fuentes y logo salen de la marca de cada cliente; el resto es igual.
- Hay una plantilla base de referencia en `CLIENTES/_Plantillas/typ_plantilla_general.html` (ejemplo del esqueleto + script ya montados).
- Para volumen/omnicanal el paso siguiente sería un CRM (Kommo), pero para personalizar TYPs este método por URL alcanza.
