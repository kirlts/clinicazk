# MASTER-SPEC: Clínica ZK v1.0.0

> Sitio web institucional para Clínica ZK — Clínica dental con sucursales en Los Ángeles y Pucón.

---

## §1. Project Identity

**Purpose:** Proveer un sitio web informativo, moderno y mobile-first que presente los servicios odontológicos, las membresías Familia ZK y los datos de contacto de ambas sucursales. El sitio debe transmitir prevención, anticipación, orden y acompañamiento como pilares de la clínica.

**Name:** Clínica ZK — Sitio Web

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
[Navegador] → [Astro v7] → [HTML/CSS/JS estático]
                    ↓
           [Datos embebidos (TypeScript)]
           [Imágenes en /src/assets]
           [Google Maps embebido]
           [Formulario → EmailJS/Formspree]
```

**Main Data Flow:**

1. Usuario carga sitio → Astro genera HTML estático en build
2. Datos de especialidades, membresías, sucursales, FAQs y contacto residen en `src/data/site.ts` y `src/data/membershipDetails.ts`
3. Imágenes servidas desde `src/assets/` (brand, sucursales)
4. Formulario de contacto envía por email vía servicio externo (sin backend propio)
5. Enlaces WhatsApp abren la app nativa web
6. Google Maps embebido muestra reseñas de la clínica

---

## §3. Technical Stack

| Layer | Technology | Justification |
| --- | --- | --- |
| Frontend | Astro v7 + TypeScript | SSG nativo, cero JS en runtime por defecto, perfecto para sitio informativo |
| Styling | CSS nativo con tokens (custom properties) | Sin dependencias de frameworks CSS, control total, alineado con manual de marca |
| Icons | lucide-static | Íconos consistentes, ligeros, sin runtime |
| Data | Módulos TypeScript embebidos | Datos estáticos definidos en código, sin base de datos ni API |
| Hosting | GitHub Pages | Gratuito, despliegue desde CI, compatible con sitio estático |
| SEO | `@astrojs/sitemap` | Generación automática de sitemap.xml |
| Formulario | Servicio externo (EmailJS / Formspree) | Sin backend propio, envío de correo desde cliente |

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
| Single-page (scroll) vs multi-page | Simplicidad de navegación móvil | URLs planas sin jerarquía de contenido | Una sola página con secciones ancla es suficiente para el contenido actual. Rutas dinámicas para detalle de membresías. |

---

## §6. UI and User Experience

**Reference atmosphere:** Clínica dental moderna, profesional pero cálida. Sensación de orden, tranquilidad y confianza. Referentes visuales: Clínica Cumbres, Uno Salud Dental, Clínica Alemana. Colores teal (principal) y morado (secundario) sobre fondo blanco, texto en gris corporativo (nunca negro). Tipografía Source Sans en todas sus variantes.

**Main user flow:**

1. Usuario llega al sitio → Hero con carrusel de imágenes y llamados a la acción
2. Usuario scrollea → Especialidades con tarjetas
3. Sección "Una nueva forma de cuidarnos" → breve introducción a membresías
4. Membresías → 4 tarjetas con beneficios y enlace "Ver más" a página de detalle
5. Sucursales → Componente BranchSplit con diferenciación visual LA/Pucón
6. Nosotros → Texto identitario (pendiente de definición final)
7. Convenios → Listado de convenios vigentes
8. Equipo → Placeholder (pendiente fotos y datos de doctores)
9. Preguntas frecuentes → Acordeón
10. Contacto → Formulario + datos de sucursales + enlaces WhatsApp
11. Footer → Datos de contacto, redes sociales, disclaimer

**Interface components:**

| Component | Function | File |
| --- | --- | --- |
| Hero | Carrusel con slides, CTA | `src/components/sections/Hero.astro` |
| Specialties | Grid de especialidades | `src/components/sections/Specialties.astro` |
| PromoBanner | Banner de membresías | `src/components/sections/PromoBanner.astro` |
| Memberships | Tarjetas de membresías | `src/components/sections/Memberships.astro` |
| BranchSplit | Selector visual de sucursales | `src/components/content/BranchSplit.astro` |
| MembershipCard | Tarjeta individual de membresía | `src/components/content/MembershipCard.astro` |
| MembershipPoster | Poster descargable de membresía | `src/components/content/MembershipPoster.astro` |
| FaqItem | Item de acordeón de FAQs | `src/components/content/FaqItem.astro` |
| Contact | Formulario + datos sucursales | `src/components/sections/Contact.astro` |
| SiteHeader | Navegación superior | `src/components/site/SiteHeader.astro` |
| SiteFooter | Pie de página | `src/components/site/SiteFooter.astro` |
| WhatsAppFab | Botón flotante WhatsApp | `src/components/site/WhatsAppFab.astro` |

---

## §7. Module Specifications

> Technical detail of each module or critical system component.

### 7.1. Design System (CSS Custom Properties)

**Purpose:** Define los tokens visuales de la marca (colores, tipografía, espaciado, geometría, motion) en CSS nativo, sin dependencias externas.

**Structure:**
- `src/styles/tokens/colors.css` — Paleta completa: corporativos (teal #51B3AE, purple #A98DB7, gray #A3A3A3, #777777), derivados, semánticos, degradados, colores de membresía y sucursales.
- `src/styles/tokens/typography.css` — Escala tipográfica basada en Source Sans
- `src/styles/tokens/spacing.css` — Sistema de espaciado modular
- `src/styles/tokens/geometry.css` — Radios, sombras, bordes
- `src/styles/tokens/motion.css` — Transiciones y animaciones
- `src/styles/global.css` — Reset y estilos base

**Dependencies:** Ninguna. CSS nativo.

### 7.2. Membership Poster Component

**Purpose:** Genera un poster/affiche descargable en PDF para cada membresía, basado en el diseño de los folletos físicos.

**Interface:**
```
MembershipPoster.astro (props: membershipKey: 'anticipa' | 'familia' | 'seguimiento' | 'total')
```

**Dependencies:** `src/data/membershipDetails.ts`

### 7.3. Site Data

**Purpose:** Contiene todos los datos editables del sitio en un solo lugar.

**Files:**
- `src/data/site.ts` — Especialidades, membresías (resumen), sucursales, FAQs, hero slides, nav links
- `src/data/membershipDetails.ts` — Detalle completo de cada membresía: beneficios, etapas, perfil ideal, ruta de cuidado

---

## §8. Operational Rules

> How the AI agent operates within this repository.

**Rules location:** `docs/RULES.md`

**Scope:** All file modifications in this repository. Rules apply to all agent operations including code changes, documentation, and content decisions.

