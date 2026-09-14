-- Esquema de la base de datos de una landing.
--
-- POR DEFECTO SOLO SE CREA `consentimientos`.
--
-- Es lo único que no existe en ningún otro sitio: sin esta tabla, la prueba
-- del consentimiento vive solo en el navegador del visitante. La AEPD puede
-- pedirla.
--
-- `visitas` y `leads` están más abajo COMENTADAS. No las actives salvo que
-- Diego lo pida para ese cliente concreto, y avisándole del coste:
--
--   · visitas — una invocación de función y una escritura POR CADA CARGA de
--     página. Con tráfico de campaña se come los 300 créditos mensuales del
--     plan gratuito de Netlify. Y esos datos ya están en Google Tag Manager.
--   · leads   — ya viven en el formulario (Tally/Typeform) y en el CRM del
--     cliente. Una tercera copia de datos personales es riesgo, no valor.
--
-- ⛔ OJO: LO QUE DECÍA AQUÍ ES FALSO HOY (comprobado el 12-09-2026).
-- Decía: «La atribución de campaña NO necesita base de datos: las UTM viajan al formulario como campos
-- ocultos y llegan al CRM». **No llegan.** `armar-campana-meta` sí manda `utm_content={{ad.name}}` en la
-- URL de destino, pero el workflow que mete el lead en el CRM
-- (`../../montar-crm-cliente/n8n/lead-tally-a-crm.json`) mapea SOLO nombre, email y teléfono: no hay ni un
-- campo de UTM en todo el flujo. Así que hoy el ángulo que trajo al lead MUERE en el formulario, y
-- «Ganado» en el CRM no dice qué anuncio ni qué titular lo generó.
--
-- La decisión de NO guardar leads en esta base de datos sigue siendo correcta (es una tercera copia de
-- datos personales, y el RGPD no la agradece). Lo que hay que arreglar es otra cosa, y es pequeño:
--   1. un campo OCULTO `utm_content` en el formulario de Tally, rellenado desde la query string;
--   2. dos líneas en el nodo «Ordenar los datos» de `lead-tally-a-crm.json` para que lo pase al CRM.
-- Hasta que eso esté, esta base de datos NO es la razón por la que la atribución funciona: la atribución
-- simplemente no funciona.

CREATE TABLE IF NOT EXISTS consentimientos (
  id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  creado_en      TIMESTAMPTZ  NOT NULL DEFAULT now(),
  eleccion       TEXT         NOT NULL CHECK (eleccion IN ('aceptar', 'rechazar')),
  ruta           TEXT,
  texto_mostrado TEXT,
  agente         TEXT,
  ip_hash        TEXT,
  pais           TEXT
);

CREATE INDEX IF NOT EXISTS consentimientos_creado_en_idx ON consentimientos (creado_en DESC);


-- ─────────── OPCIONAL: solo si Diego lo pide ───────────

-- CREATE TABLE IF NOT EXISTS visitas (
--   id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   creado_en      TIMESTAMPTZ  NOT NULL DEFAULT now(),
--   ruta           TEXT         NOT NULL,
--   referente      TEXT,
--   utm_source     TEXT,
--   utm_medium     TEXT,
--   utm_campaign   TEXT,
--   utm_content    TEXT,
--   utm_term       TEXT,
--   fbclid         TEXT,
--   gclid          TEXT,
--   dispositivo    TEXT,
--   pais           TEXT
-- );
--
-- CREATE INDEX IF NOT EXISTS visitas_creado_en_idx   ON visitas (creado_en DESC);
-- CREATE INDEX IF NOT EXISTS visitas_campana_idx     ON visitas (utm_campaign, creado_en DESC);

-- CREATE TABLE IF NOT EXISTS leads (
--   id                    BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   creado_en             TIMESTAMPTZ NOT NULL DEFAULT now(),
--   enviado_en            TIMESTAMPTZ,
--   formulario_id         TEXT,
--   respuesta_id          TEXT        NOT NULL UNIQUE,
--   nombre                TEXT,
--   email                 TEXT,
--   telefono              TEXT,
--   respuestas            JSONB       NOT NULL DEFAULT '{}'::jsonb,
--   utm                   JSONB       NOT NULL DEFAULT '{}'::jsonb,
--   crudo                 JSONB
-- );
--
-- CREATE INDEX IF NOT EXISTS leads_creado_en_idx ON leads (creado_en DESC);
-- CREATE INDEX IF NOT EXISTS leads_campana_idx   ON leads ((utm ->> 'utm_campaign'), creado_en DESC);
