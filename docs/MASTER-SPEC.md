# MASTER-SPEC: Clínica ZK v2.0.0

> Sitio web institucional para Clínica ZK. Clínica dental con sucursales en Los Ángeles y Pucón.

---

## §1. Project Identity

**Purpose:** Proveer un sitio web informativo, moderno y mobile-first que presente los servicios odontológicos, las membresías Familia ZK y los datos de contacto de ambas sucursales. El sitio debe transmitir prevención, anticipación, orden y acompañamiento como pilares de la clínica.

**Name:** Clínica ZK: Sitio Web

**Domain:** Salud dental / Odontología / Marketing clínico

**Problem it solves:** La clínica no tenía presencia web propia después de la pérdida del dominio anterior. El sitio anterior era un prototipo simple. Se necesita una vitrina digital que refleje el branding actual (manual de marca 2026), presente las 4 membresías Familia ZK (Anticipa, Familia, Seguimiento, Total), sus especialidades y facilite el contacto. El sitio debe cargar rápido, funcionar sin backend y ser desplegable como sitio estático.

**Direct beneficiary:** Clínica ZK (dueño Carl F. Meister, directora clínica Romina, director de marketing Bernielli). Pacientes actuales y potenciales de Los Ángeles y Pucón.

**Indirect beneficiary:** Visitantes del sitio que buscan dentista en Los Ángeles o Pucón. Equipo de especialistas de la clínica.

**What it IS NOT:** No es un sistema de reserva de horas en línea, ni un portal de pacientes, ni un e-commerce, ni una plataforma de telemedicina. No incluye backend ni base de datos. No reemplaza los canales de atención actuales (WhatsApp, teléfono).

---

## §2. Architecture

**Type:** Zero-backend / Static Site Generator

**Component Diagram:**

```
[Navegador] -> [Astro v7] -> [HTML/CSS/JS estático]
                    |
           [Datos embebidos (TypeScript)]
           [Imágenes optimizadas a webp (astro:assets / sharp)]
           [Modal-afiche (iframe a /afiche/[m]/ + postMessage)]
           [Formulario -> mailto: contacto@clinicazk.cl]
```

**Main Data Flow:**

1. Usuario carga el sitio. Astro genera HTML estático en build.
2. Los datos de especialidades, membresías, sucursales, galerías, FAQs y contacto residen en `src/data/site.ts` y `src/data/membershipDetails.ts`.
3. Las imágenes se importan desde `src/assets/` y `astro:assets` (sharp) las optimiza a webp en múltiples tamaños durante el build. El mapa nombre-de-archivo a imagen vive en `src/lib/fotos.ts`.
4. El formulario de contacto arma un `mailto:` con los campos y abre el cliente de correo del usuario. No hay backend ni servicio externo aún.
5. Los enlaces y el FAB de WhatsApp abren la app nativa o web.
6. El botón "Ver más" de cada membresía abre un modal que embebe la página `/afiche/[m]/` en un iframe. El cierre viaja por `postMessage('zk-close-afiche')` desde el iframe al documento padre.
7. El índice de especialidades y las galerías por sede son interactivos vía scripts de cliente livianos (sin framework en runtime).

---

## §3. Technical Stack

| Layer | Technology | Justification |
| --- | --- | --- |
| Frontend | Astro v7 + TypeScript | SSG nativo, cero JS en runtime por defecto, perfecto para sitio informativo |
| Styling | CSS nativo con tokens (custom properties) | Sin dependencias de frameworks CSS, control total, alineado con manual de marca |
| Icons | lucide-static | Íconos consistentes, ligeros, sin runtime |
| Data | Módulos TypeScript embebidos | Datos estáticos definidos en código, sin base de datos ni API |
| Imágenes | `astro:assets` (sharp) | Optimización a webp y redimensionado en build; fachadas grandes bajan de ~3 MB a ~200 KB |
| Hosting | GitHub Pages | Gratuito, despliegue desde CI, compatible con sitio estático |
| SEO | `@astrojs/sitemap` | Generación automática de sitemap.xml |
| Formulario | `mailto:` desde cliente | Sin backend ni servicio externo aún; abre el cliente de correo del usuario. Conexión a servicio de email queda pendiente |

---

## §4. Constraints (Inviolable Boundaries)

> These constraints override any other decision. They are lines that the system prevents from being crossed.

1. **Zero user data transmission outside the browser:** El sitio no almacena, procesa ni transmite datos de usuarios a ningún servidor propio. El formulario de contacto usa un servicio externo (EmailJS/Formspree).
2. **Static-only:** El sitio debe ser completamente estático. No se permite backend, base de datos, SSR ni API routes.
3. **Mobile-first responsive:** El diseño prioriza la experiencia móvil sobre desktop. Todos los componentes deben funcionar en pantallas desde 320px.
4. **Brand compliance:** Los colores, tipografía (Source Sans), espaciado y tono deben seguir estrictamente el manual de marca ZK y el manual textual DIDEMCO.
5. **No emojis en contenido editorial:** Prohibición de emojis en texto del sitio, siguiendo el manual DIDEMCO.
6. **Sin tecnicismos sin explicación:** Cualquier término clínico debe ir acompañado de una explicación legible para el paciente.
7. **Sin em dash (—):** Cero tolerancia al caracter em dash en todo el sitio.

---

## §5. Agreed Trade-offs

> Decisions where one quality was sacrificed in favor of another, with the explicit reason.

| Trade-off | In favor of | Against | Justification |
| --- | --- | --- | --- |
| Sitio 100% estático vs funcionalidad dinámica | Simplicidad, seguridad, costo cero de hosting | Sin reservas online, sin login | El alcance definido por el cliente no requiere backend. Las reservas se hacen por WhatsApp/teléfono. |
| Datos embebidos en TypeScript vs CMS | Velocidad de carga, sin mantenimiento de CMS | Requiere deploy para cambiar contenido | El contenido cambia con baja frecuencia. Bernielli coordina los cambios vía el desarrollador. |
| CSS nativo con custom properties vs Tailwind | Control total sobre el design system, alineado con manual de marca | Mayor tamaño de CSS (irrelevante para sitio informativo) | El manual de marca define tokens de color, espaciado y tipografía específicos que Tailwind no cubre sin extensa configuración. |
| Single-page (scroll) + modal-afiche vs multi-page | Simplicidad de navegación móvil, foco en una sola vista | URLs planas sin jerarquía de contenido | Una sola página con secciones ancla es suficiente. El detalle de cada membresía se muestra en un modal que embebe `/afiche/[m]/` (contrato del diseño v2). Esas rutas existen y sirven de fallback sin JS. |
| Fidelidad 1:1 con el design handoff v2 vs reinterpretación libre | Consistencia exacta con el diseño aprobado por el cliente | Menos libertad para "mejorar" durante el port | El handoff (bundle de Claude Design) es la fuente de verdad. Se hizo una pasada de diffing visual sección por sección contra el render de referencia para alinear el sitio Astro. |
| Zoom base 0.8 horneado (`html { zoom: 0.8 }`) vs 100% nativo | El 100% por defecto del navegador ya equivale al 80% que prefiere el director | Depende del soporte de `zoom` (Chrome/Edge/Safari; Firefox 126+) | Preferencia explícita del usuario. En navegadores sin soporte de `zoom` el sitio se ve al 100% sin romperse. |
| Optimización de imágenes en build (webp) vs servir originales | Peso del sitio mínimo para el visitante que llega desde Instagram/móvil | Los originales pesados quedan en el repo como fuente | `astro:assets` genera webp por tamaño; el sitio servido queda liviano sin sacrificar la fuente editable. |
| Omitir widgets de Google Maps por ahora vs embeberlos | Evitar complejidad innecesaria con dos sucursales | Se pierde la prueba social de reseñas en el sitio | Con dos sedes harían falta dos widgets (se ve recargado) o un selector que los alterne (complejidad injustificada). Decisión de reevaluar. Ver USER-DECISIONS UD-009. |

---

## §6. UI and User Experience

**Reference atmosphere:** Clínica dental moderna, profesional pero cálida. Sensación de orden, tranquilidad y confianza. Referentes visuales: Clínica Cumbres, Uno Salud Dental, Clínica Alemana. Colores teal (principal) y morado (secundario) sobre fondo blanco, texto en gris corporativo (nunca negro). Tipografía Source Sans en todas sus variantes. El sitio aplica un zoom base de 0.8 para que su 100% por defecto equivalga al 80% que prefiere el director.

**Main user flow (v2):**

1. Hero (`#inicio`): h1 fijo "Tu salud dental, en orden.", franja de 5 accesos rápidos a especialidades, split diagonal de sedes (BranchSplit) con foto real por sede, y fila de cierre "Un buen tratamiento empieza por un buen diagnóstico." + botón "Agenda tu evaluación".
2. Especialidades (`#especialidades`): componente maestro-detalle. Índice de 13 especialidades a la izquierda (agrupadas por "en ambas sedes" o exclusivas por sede); panel de detalle a la derecha con la línea de sede, descripción y botones de contacto por sede.
3. Membresías (`#membresias`): cabecera centrada, párrafo introductorio y 4 tarjetas (Anticipa, Familia, Seguimiento, Total) sobre gradiente de marca. "Ver más" abre el modal-afiche.
4. La Clínica (`#sucursales`, contiene `#nosotros` y `#equipo`): Nosotros + Equipo a dos columnas; luego dos galerías gemelas por sede (flechas, contador, miniaturas) con datos de contacto y convenios integrados por sede.
5. Preguntas frecuentes (`#preguntas`): acordeón compacto a dos columnas.
6. Contacto (`#contacto`): panel con gradiente, logo y botones de WhatsApp por sede a la izquierda; formulario protagonista a la derecha (nombre, correo, teléfono opcional, motivo, sede opcional, mensaje opcional).
7. Footer: datos de ambas sedes, redes y línea institucional.
8. Modal-afiche: overlay que embebe `/afiche/[m]/` (folleto de la membresía en hoja continua). Cierra con clic fuera, Escape o "Volver al sitio".

**Interface components (v2):**

| Component | Function | File |
| --- | --- | --- |
| Hero | h1 fijo, accesos rápidos, split de sedes, fila de cierre | `src/components/sections/Hero.astro` |
| Specialties | Índice maestro-detalle interactivo de especialidades | `src/components/sections/Specialties.astro` |
| Memberships | Cabecera, intro y 4 tarjetas de membresía | `src/components/sections/Memberships.astro` |
| Clinic | Nosotros + Equipo + galerías por sede + convenios | `src/components/sections/Clinic.astro` |
| Faq | Acordeón compacto a dos columnas | `src/components/sections/Faq.astro` |
| Contact | Panel gradiente con WhatsApp + formulario | `src/components/sections/Contact.astro` |
| BranchSplit | Split diagonal de sedes con foto por sede | `src/components/content/BranchSplit.astro` |
| MembershipCard | Tarjeta individual de membresía (abre modal) | `src/components/content/MembershipCard.astro` |
| MembershipTag | Tarjetita de marca de la membresía (folleto) | `src/components/content/MembershipTag.astro` |
| Gallery | Galería por sede (flechas, contador, miniaturas) | `src/components/content/Gallery.astro` |
| AficheEmbed | Folleto de membresía en hoja continua (modo embed) | `src/components/content/AficheEmbed.astro` |
| AficheModal | Overlay con iframe del afiche | `src/components/content/AficheModal.astro` |
| FaqItem | Item de acordeón de FAQs | `src/components/content/FaqItem.astro` |
| SiteHeader | Navegación superior | `src/components/site/SiteHeader.astro` |
| SiteFooter | Pie de página | `src/components/site/SiteFooter.astro` |
| WhatsAppFab | Botón flotante WhatsApp | `src/components/site/WhatsAppFab.astro` |

---

## §7. Module Specifications

> Technical detail of each module or critical system component.

### 7.1. Design System (CSS Custom Properties)

**Purpose:** Define los tokens visuales de la marca (colores, tipografía, espaciado, geometría, motion) en CSS nativo, sin dependencias externas.

**Structure:**
- `src/styles/tokens/colors.css`: Paleta completa: corporativos (teal #51B3AE, purple #A98DB7, gray #A3A3A3, #777777), derivados, semánticos, degradados, colores de membresía y sucursales.
- `src/styles/tokens/typography.css`: Escala tipográfica basada en Source Sans
- `src/styles/tokens/spacing.css`: Sistema de espaciado modular
- `src/styles/tokens/geometry.css`: Radios, sombras, bordes
- `src/styles/tokens/motion.css`: Transiciones y animaciones
- `src/styles/global.css`: Reset y estilos base

**Dependencies:** Ninguna. CSS nativo.

### 7.2. Modal-afiche de membresías

**Purpose:** Reproduce el contrato del diseño v2: "Ver más" abre un modal que embebe el folleto de la membresía en hoja continua.

**Piezas:**
- `AficheEmbed.astro` (props: `membership`): folleto en hoja continua (fusiona cara A y cara B, sin marcos ni QR, con "Volver al sitio" arriba y abajo).
- `src/pages/afiche/[membership].astro`: página con fondo transparente que renderiza `AficheEmbed`. Cierra por `postMessage('zk-close-afiche')` o Escape. Fija `html { zoom: 1 }` para no escalarse dos veces dentro del iframe.
- `AficheModal.astro`: overlay `fixed` con backdrop teal e iframe de `min(880px, 94vw)`. Escucha clics en `[data-afiche-open]`, clic fuera, Escape y el `message` de cierre.

**Interface del disparador:** cada `MembershipCard` lleva `data-afiche-open="{m}"` y un `ctaHref` a `/afiche/[m]/` como fallback sin JS.

**Dependencies:** `src/data/membershipDetails.ts`, `MembershipTag.astro`.

### 7.3. Optimización de imágenes

**Purpose:** Mantener el sitio liviano sin renunciar a fotos reales de sedes.

**Mecanismo:**
- `src/lib/fotos.ts` construye un mapa nombre-de-archivo a `ImageMetadata` vía `import.meta.glob` sobre `src/assets/fotos/`.
- `BranchSplit` y `Gallery` usan `getImage()` de `astro:assets` para generar webp por tamaño (principal ~1000px, miniatura ~220px).
- Las fachadas grandes se convirtieron de PNG a JPG en la fuente para aligerar el repositorio.

### 7.4. Site Data

**Purpose:** Contiene todos los datos editables del sitio en un solo lugar.

**Files:**
- `src/data/site.ts`: especialidades (13, con `only` por sede), accesos rápidos, membresías (resumen), FAQs, sucursales, galerías por sede (`laPhotos` / `puPhotos`), nav links.
- `src/data/membershipDetails.ts`: detalle completo de cada membresía (beneficios, etapas, perfil ideal, ruta de cuidado, cómo usarla, disclaimer).

---

## §8. Operational Rules

> How the AI agent operates within this repository.

**Rules location:** `docs/RULES.md`

**Scope:** All file modifications in this repository. Rules apply to all agent operations including code changes, documentation, and content decisions.

