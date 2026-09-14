import { z } from 'zod';
import datos from '../content/landing/index.json';

// Keystatic borra las claves vacías al guardar: todo lo que puede quedar en
// blanco se declara opcional con valor por defecto, para que un campo vaciado
// desde el panel no rompa el build.
const textoOpcional = z.string().optional().default('');
const listaTextos = z.array(z.string()).optional().default([]);

const esquema = z.object({
  seo: z.object({
    titulo: z.string().min(1),
    descripcion: z.string().min(1),
    imagenCompartir: textoOpcional,
  }),
  seguimiento: z
    .object({
      gtmId: textoOpcional,
      metaPixelId: textoOpcional,
    })
    .optional()
    .default({ gtmId: '', metaPixelId: '' }),
  cookies: z
    .object({
      texto: textoOpcional,
      urlPolitica: textoOpcional,
    })
    .optional()
    .default({ texto: '', urlPolitica: '' }),
  avisoSuperior: textoOpcional,
  hero: z.object({
    fondoDesktop: z.string().min(1),
    fondoMovil: z.string().min(1),
    logo: z.string().min(1),
    titular: z.string().min(1),
    subtitulo: textoOpcional,
    bullets: listaTextos,
    ctaTexto: z.string().min(1),
    quitamiedos: listaTextos,
  }),
  escasez: z.object({
    texto: textoOpcional,
    pastilla: textoOpcional,
  }),
  painGain: z.object({
    titular: z.string().min(1),
    subtitulo: textoOpcional,
    painTitulo: z.string().min(1),
    painItems: listaTextos,
    gainTitulo: z.string().min(1),
    gainItems: listaTextos,
    cierre: textoOpcional,
    ctaTexto: z.string().min(1),
  }),
  contraste: z.object({
    sinTitulo: z.string().min(1),
    sinItems: listaTextos,
    conTitulo: z.string().min(1),
    conItems: listaTextos,
    avatarTitular: z.string().min(1),
    avatares: listaTextos,
    tension: textoOpcional,
  }),
  resenas: z.object({
    titular: z.string().min(1),
    items: z.array(
      z.object({
        inicial: z.string().min(1),
        nombre: z.string().min(1),
        rol: textoOpcional,
        texto: z.string().min(1),
      }),
    ),
  }),
  proceso: z.object({
    titular: z.string().min(1),
    subtitulo: textoOpcional,
    pasos: z.array(z.object({ titulo: z.string().min(1), texto: z.string().min(1) })),
  }),
  galeria: z.object({
    titular: z.string().min(1),
    subtitulo: textoOpcional,
    imagenes: z.array(
      z.object({
        imagen: z.string().min(1),
        alt: z.string().min(1),
        pie: textoOpcional,
        ancho: z.number().int().positive(),
        alto: z.number().int().positive(),
      }),
    ),
    nota: textoOpcional,
  }),
  autoridad: z.object({
    logo: z.string().min(1),
    nombre: z.string().min(1),
    rol: textoOpcional,
    garantias: listaTextos,
    titular: z.string().min(1),
    parrafos: listaTextos,
  }),
  formulario: z.object({
    titular: z.string().min(1),
    subtitulo: textoOpcional,
    typeformId: z.string().min(1),
    quitamiedos: listaTextos,
  }),
  faq: z.object({
    titular: z.string().min(1),
    items: z.array(z.object({ pregunta: z.string().min(1), respuesta: z.string().min(1) })),
  }),
  cierre: z.object({
    titular: z.string().min(1),
    subtitulo: textoOpcional,
    incluyeTitulo: textoOpcional,
    incluye: listaTextos,
    perdida: textoOpcional,
    final: textoOpcional,
    ctaTexto: z.string().min(1),
    quitamiedos: listaTextos,
  }),
  pie: z.object({
    logo: z.string().min(1),
    copyright: textoOpcional,
    legal: textoOpcional,
  }),
});

const resultado = esquema.safeParse(datos);

if (!resultado.success) {
  const detalle = resultado.error.issues
    .map((i) => `  · ${i.path.join('.')}: ${i.message}`)
    .join('\n');
  throw new Error(
    `El contenido de la landing no es válido (src/content/landing/index.json):\n${detalle}`,
  );
}

export const contenido = resultado.data;
export type Contenido = typeof contenido;
