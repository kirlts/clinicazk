# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/spec/v2.0.0.html).

## [Sin publicar]

### Pendiente
- Horarios oficiales de ambas sedes: hoy dicen "Pendiente de confirmación" (Clínica ZK).
- Listado de convenios vigentes y sus logos: los 6 slots son placeholders marcados (Clínica ZK).
- WhatsApp de Dirección Clínica: por confirmar (Clínica ZK).
- Imágenes por especialidad: el panel de especialidades aún no lleva foto.
- Contenido de la sección Privacidad: el modal muestra un aviso de sección en preparación.
- Versión móvil detallada de las cuatro páginas nuevas (Sucursales, Nosotros, Convenios, Equipo); el header móvil todavía no tiene patrón de menú definido con diseño.
- Difuminar patentes en algunas tomas de fachada de las galerías.
- Dominio clinicazk.cl (pendiente de trámite).
- Widgets de Google Maps: diferidos por complejidad con dos sedes (reevaluar).

## [3.0.0] - 2026-07-29

> Rediseño completo alineado 1:1 con el design handoff "Clínica ZK v3". La v3 reemplaza a la v2: el sitio pasa de una página larga a seis páginas navegables.

### Añadido
- Seis páginas: Inicio (`/`), Familia ZK (`/familia-zk`), Sucursales (`/sucursales`), Equipo clínico (`/equipo-clinico`), Nosotros (`/nosotros`) y Convenios y seguros (`/convenios`).
- Página 404 con salida a Inicio y a ambas sedes.
- Afiche parametrizado en `/familia-zk/afiche?m=…`, con `&embed=1` para verse como hoja continua dentro del modal. Se exceptúa del zoom base porque tiene medida física (794px = A4).
- Header sticky con los 6 links en orden y estado activo (semibold teal con subrayado de 2px), más CTA de contacto.
- Footer de cuatro columnas con datos de ambas sedes, índice del sitio, disclaimer clínico y modal de Privacidad.
- Popover "Agenda tu evaluación" en el hero, con las dos sedes hacia WhatsApp.
- Página de Equipo clínico con las 13 fichas reales, Dirección Clínica destacada, filtro por sede y contador de profesionales (`?sede=` preselecciona el filtro).
- Galerías por sede con 10 fotos en Los Ángeles y 7 en Pucón, con flechas, contador, miniaturas y caption.
- Marca de agua del isotipo, una por página, salvo en Inicio.
- FAB de WhatsApp que aparece al salir de la portada (IntersectionObserver).
- Retratos del equipo y fotos nuevas de ambas sedes (`src/assets/equipo/`, `src/assets/fotos/`).

### Cambiado
- Especialidades: de 13 a 14, con gancho, descripción y disponibilidad por sede ("Solo Los Ángeles", "En Pucón, consultar agenda").
- Membresías: copy actualizado del Banco Textual; los porcentajes de descuento se retiraron salvo el 20% de ZK Total.
- Preguntas frecuentes: 9 en Inicio y un banco de 25 agrupado por tema para el bloque reutilizable.
- Datos de Los Ángeles: Avenida Gabriela Mistral **79** (antes 74) y teléfono (43) 223 0298.
- El contenido se reorganizó en un módulo por dominio dentro de `src/data/`.
- Las anclas de la v2 siguen resolviendo: `#nosotros` y `#membresias` son anclas de Inicio; `#sucursales`, `#convenios` y `#equipo` redirigen a su página nueva.

### Eliminado
- Formulario de contacto y toda referencia a correo electrónico: WhatsApp queda como único canal.
- La página única de la v2 y sus componentes de sección (`Hero`, `Specialties`, `Memberships`, `Clinic`, `Faq`, `Contact`), junto con `Button`, `Icon`, `AficheModal`, `AficheEmbed`, `Gallery`, `src/data/site.ts`, `src/data/membershipDetails.ts` y `src/lib/fotos.ts`.
- Siete fotos del handoff que ninguna vista referencia: el glob eager las copiaba al build sin usarse.

### Verificado
- `innerText` idéntico carácter por carácter entre prototipo y sitio en 15 de 16 escenarios (las 6 páginas, los 4 afiches, el modo embed, el popover de agenda, el cambio de especialidad y los dos filtros de equipo).
- La excepción es el 404: el prototipo lo renderiza sin header ni footer porque importa `ZKHeader`/`ZKFooter`, nombres que no existen en el bundle (son `ZKHeaderV3`/`ZKFooterV3`). El sitio lo implementa con el chrome compartido, que es lo que el archivo declara y lo que pide el handoff; el cuerpo de la página sí coincide carácter por carácter.
- Interacciones equivalentes en ambos lados: galerías, modal-afiche (Escape, clic fuera, `postMessage`), modal de Privacidad, aparición del FAB al salir de la portada.
- Toda diferencia de tamaño observada corresponde al factor 0.8 del zoom base del sitio.

## [2.0.0] - 2026-07-22

> Rediseño completo alineado 1:1 con el design handoff "Sitio Web Clínica ZK v2".

### Añadido
- Hero fijo con h1, franja de accesos rápidos a especialidades y fila de cierre "Un buen tratamiento empieza por un buen diagnóstico.".
- Especialidades como índice maestro-detalle interactivo (13 especialidades, agrupadas por sede, con botones de contacto por sede).
- Sección Clínica que reúne Nosotros, Equipo y dos galerías gemelas por sede (flechas, contador, miniaturas) con convenios integrados en el contacto de cada sede.
- Modal-afiche: "Ver más" abre el folleto de la membresía en hoja continua dentro de un iframe (`/afiche/[m]/`), con cierre por clic fuera, Escape o "Volver al sitio" (postMessage).
- Optimización de imágenes a webp con `astro:assets`; galerías por sede con fotos reales.
- Zoom base del sitio (`html { zoom: 0.8 }`): el 100% por defecto equivale al 80% preferido por el director.

### Cambiado
- Membresías: cabecera centrada, párrafo introductorio y tarjetas estilo V2.
- FAQ: rediseño compacto a dos columnas (6 preguntas).
- Contacto: formulario protagonista sobre gradiente, con WhatsApp por sede; campos ampliados (nombre, correo, teléfono, motivo, sede, mensaje).
- BranchSplit: foto real por sede anclada a su mitad; blurbs de sede del archivo aprobado.
- Ancho máximo del sitio a `min(1520px, 94vw)` para igualar el layout del diseño v2.

### Eliminado
- PromoBanner, AboutUs, Agreements y TeamPlaceholder (fusionados o descartados en el diseño v2).
- Ruta `/membresias/[m]/` y MembershipPoster (reemplazados por el modal-afiche y `/afiche/[m]/`).

## [1.0.0] - 2026-07-09

### Añadido
- Proyecto Astro v7 inicializado con TypeScript.
- Sistema de tokens de diseño CSS (colores, tipografía, espaciado, geometría, motion).
- Layout base con SEO, metas y fuentes.
- SiteHeader con navegación responsive (Especialidades, Membresías, Nosotros, Sucursales, Contacto).
- SiteFooter con datos de sucursales, enlaces WhatsApp y redes sociales.
- WhatsAppFab flotante.
- Hero con carrusel de 3 slides y CTAs.
- Sección de especialidades con 5 tarjetas (Ortodoncia, Periodoncia, Odontopediatría, Estética dental, Implantes).
- PromoBanner "Una nueva forma de cuidarnos".
- Sección de membresías con 4 tarjetas (ZK Anticipa, ZK Familia, ZK Seguimiento, ZK Total).
- Página dinámica de detalle de membresía con ruta, beneficios, perfil ideal y poster descargable.
- BranchSplit con diferenciación visual Los Ángeles / Pucón.
- Sección AboutUs (placeholder).
- Sección Agreements (placeholder).
- Sección TeamPlaceholder.
- FAQ con acordeón (4 preguntas).
- Sección de contacto con formulario y datos de sucursales.
- Configuración de GitHub Pages con deploy automático.
- Sitemap generado automáticamente.
