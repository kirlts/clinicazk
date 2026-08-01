# MASTER-SPEC: Clínica ZK v3.3.0

> Sitio web institucional para Clínica ZK. Clínica dental con sucursales en Los Ángeles y Pucón.

---

## §1. Identidad del proyecto

**Propósito:** Proveer un sitio web informativo, moderno y mobile-first que presente los servicios odontológicos, las membresías Familia ZK y los datos de contacto de ambas sucursales. El sitio debe transmitir prevención, anticipación, orden y acompañamiento como pilares de la clínica.

**Nombre:** Clínica ZK: Sitio Web

**Dominio:** Salud dental / Odontología / Marketing clínico

**Problema que resuelve:** La clínica no tenía presencia web propia después de la pérdida del dominio anterior. El sitio anterior era un prototipo simple. Se necesita una vitrina digital que refleje el branding actual (manual de marca 2026), presente las 4 membresías Familia ZK (Anticipa, Familia, Seguimiento, Total), sus especialidades y facilite el contacto. El sitio debe cargar rápido, funcionar sin backend y ser desplegable como sitio estático.

**Beneficiario directo:** Clínica ZK (dueño Carl F. Meister, directora clínica Romina, director de marketing Bernielli). Pacientes actuales y potenciales de Los Ángeles y Pucón.

**Beneficiario indirecto:** Visitantes del sitio que buscan dentista en Los Ángeles o Pucón. Equipo de especialistas de la clínica.

**Lo que NO es:** No es un sistema de reserva de horas en línea, ni un portal de pacientes, ni un e-commerce, ni una plataforma de telemedicina. No incluye backend ni base de datos. No reemplaza los canales de atención actuales (WhatsApp, teléfono).

---

## §2. Arquitectura

**Tipo:** Sin backend / Generador de sitios estáticos

**Diagrama de componentes:**

```
[Navegador] -> [Astro v7] -> [HTML/CSS/JS estático]
                    |
           [6 páginas + afiche parametrizado + 404]
           [Datos embebidos (TypeScript, src/data/)]
           [Imágenes optimizadas a webp (astro:assets / sharp)]
           [Modal-afiche (iframe a /familia-zk/afiche?m=…&embed=1 + postMessage)]
           [Contacto -> WhatsApp con mensaje prellenado (único canal)]
```

**Flujo de datos principal:**

1. El usuario carga cualquiera de las 6 páginas. Astro genera HTML estático en el build.
2. El contenido vive en módulos de `src/data/`: `contacto.ts` (sedes, WhatsApp), `navegacion.ts`, `especialidades.ts`, `membresias.ts`, `afiche.ts`, `faq.ts`, `equipo.ts` y `sucursales.ts`. Cada módulo copia literalmente el `renderVals()` de su archivo de diseño.
3. Las imágenes se importan desde `src/assets/` y `astro:assets` (sharp) las optimiza a webp durante el build. Los mapas nombre-de-archivo a imagen (fotos, retratos, marca) viven en `src/lib/imagenes.ts`.
4. No hay formulario ni correo: todo contacto sale por WhatsApp con mensaje prellenado, con `target="_blank" rel="noopener"`.
5. El botón "Conoce ZK …" de cada membresía en Inicio abre un modal que embebe `/familia-zk/afiche?m=…&embed=1` en un iframe. El cierre viaja por `postMessage('zk-close-afiche')` desde el iframe al documento padre, y también responde a Escape y clic fuera.
6. El afiche renderiza las cuatro membresías y el querystring decide cuál se muestra, conservando el contrato `?m=` / `&embed=1` del diseño.
7. El selector de especialidades, el filtro de equipo, las galerías por sede, los acordeones y el popover de agenda son interactivos vía scripts de cliente livianos (sin framework en runtime).

---

## §3. Stack técnico

| Capa | Tecnología | Justificación |
| --- | --- | --- |
| Frontend | Astro v7 + TypeScript | SSG nativo, cero JS en runtime por defecto, perfecto para sitio informativo |
| Estilos | CSS nativo con tokens (custom properties) | Sin dependencias de frameworks CSS, control total, alineado con manual de marca |
| Íconos | lucide-static | Íconos consistentes, ligeros, sin runtime |
| Datos | Módulos TypeScript embebidos | Datos estáticos definidos en código, sin base de datos ni API |
| Imágenes | `astro:assets` (sharp) | Optimización a webp y redimensionado en build; fachadas grandes bajan de ~3 MB a ~200 KB |
| Hosting | GitHub Pages | Gratuito, despliegue desde CI, compatible con sitio estático |
| SEO | `@astrojs/sitemap` | Generación automática de sitemap.xml |
| Contacto | Enlaces a `wa.me` con mensaje prellenado | WhatsApp es el único canal del sitio (la v3 eliminó el formulario y el correo). Sin backend ni servicio externo |

---

## §4. Restricciones (límites inviolables)

> Estas restricciones prevalecen sobre cualquier otra decisión. Son líneas que el sistema impide cruzar.

1. **Cero transmisión de datos de usuario fuera del navegador:** El sitio no almacena, procesa ni transmite datos de usuarios a ningún servidor propio. No hay formulario: el contacto ocurre por WhatsApp, fuera del sitio.
2. **Solo estático:** El sitio debe ser completamente estático. No se permite backend, base de datos, SSR ni rutas de API.
3. **Responsive mobile-first:** El diseño prioriza la experiencia móvil sobre desktop. Todos los componentes deben funcionar en pantallas desde 320px.
4. **Cumplimiento de marca:** Los colores, la tipografía (Source Sans), el espaciado y el tono deben seguir estrictamente el manual de marca ZK y el manual textual DIDEMCO.
5. **Sin emojis en contenido editorial:** Prohibición de emojis en el texto del sitio, siguiendo el manual DIDEMCO.
6. **Sin tecnicismos sin explicación:** Cualquier término clínico debe ir acompañado de una explicación legible para el paciente.
7. **Sin em dash (—):** Cero tolerancia al caracter em dash en todo el sitio.
8. **WhatsApp como único canal de contacto:** La v3 eliminó el correo electrónico de todo el sitio. Ninguna página puede mostrar una dirección de email.
9. **Sin datos inventados:** Nada de testimonios, nombres de pacientes, precios ni logos de convenio ficticios. Un placeholder honesto vale más que contenido plausible falso.
10. **Sin datos de terceros en las fotografías, ni en el repositorio:** Ninguna imagen publicada muestra patentes, carteles de negocios ajenos ni caras de personas que no son del equipo. La restricción alcanza también a lo que se versiona: los bundles de diseño traen las fotos sin tratar, así que no se suben. Este repositorio es **público**, y difuminar en el estado actual no borra el pasado. Ver USER-DECISIONS UD-017 y `tools/difuminar-fotos.py`.

---

## §5. Compromisos acordados (trade-offs)

> Decisiones donde se sacrificó una cualidad en favor de otra, con la razón explícita.

| Trade-off | A favor de | En contra | Justificación |
| --- | --- | --- | --- |
| Sitio 100% estático vs funcionalidad dinámica | Simplicidad, seguridad, costo cero de hosting | Sin reservas online, sin login | El alcance definido por el cliente no requiere backend. Las reservas se hacen por WhatsApp/teléfono. |
| Datos embebidos en TypeScript vs CMS | Velocidad de carga, sin mantenimiento de CMS | Requiere deploy para cambiar contenido | El contenido cambia con baja frecuencia. Bernielli coordina los cambios vía el desarrollador. |
| CSS nativo con custom properties vs Tailwind | Control total sobre el design system, alineado con manual de marca | Mayor tamaño de CSS (irrelevante para sitio informativo) | El manual de marca define tokens de color, espaciado y tipografía específicos que Tailwind no cubre sin extensa configuración. |
| Multi-página (6 rutas) vs single-page con anclas | Jerarquía de contenido, URLs compartibles por sección, páginas más cortas | Más navegación entre vistas que en la v2 | El diseño v3 define Inicio como hub y páginas propias para Familia ZK, Sucursales, Equipo, Nosotros y Convenios. Las anclas de la v2 siguen funcionando: `#nosotros` y `#membresias` como anclas de Inicio, y `#sucursales` / `#convenios` / `#equipo` redirigen a su página nueva. |
| Fidelidad 1:1 con el design handoff v3 vs reinterpretación libre | Consistencia exacta con el diseño aprobado por el cliente | Menos libertad para "mejorar" durante el port | El handoff (bundle de Claude Design) es la fuente de verdad. La paridad se demuestra ejecutando el prototipo y el sitio lado a lado y comparando `innerText` por escenario, no leyendo código. Ver VERIFICATION. |
| Zoom base 0.8 horneado (`html { zoom: 0.8 }`) vs 100% nativo | El 100% por defecto del navegador ya equivale al 80% que prefiere el director | Depende del soporte de `zoom` (Chrome/Edge/Safari; Firefox 126+) | Preferencia explícita del usuario. En navegadores sin soporte de `zoom` el sitio se ve al 100% sin romperse. Bajo 1024px vuelve a 1: en táctil la preferencia produce lo contrario de lo que busca en escritorio. Ver USER-DECISIONS UD-012. |
| Capa responsiva aparte con `!important` vs editar los `style` inline | El escritorio queda demostrablemente intacto y la trazabilidad con el handoff se conserva | La hoja móvil está sembrada de `!important` y no puede leerse como CSS convencional | El layout de escritorio son estilos inline, que ganan a cualquier selector. La alternativa era reescribir siete páginas y perder la comparación 1:1 con el prototipo. Ver §7.1.1. |
| Cambiar el patrón de un componente en móvil vs sólo apilar a una columna | Piezas como el índice de especialidades o el comparador quedan usables en teléfono | La comparación 1:1 con el prototipo deja de aplicar bajo el breakpoint | El propio handoff declara que la versión móvil "todavía no está diseñada en detalle" y delega el patrón. Ver USER-DECISIONS UD-014. |
| Optimización de imágenes en build (webp) vs servir originales | Peso del sitio mínimo para el visitante que llega desde Instagram/móvil | Los originales pesados quedan en el repo como fuente | `astro:assets` genera webp por tamaño; el sitio servido queda liviano sin sacrificar la fuente editable. |
| Omitir widgets de Google Maps por ahora vs embeberlos | Evitar complejidad innecesaria con dos sucursales | Se pierde la prueba social de reseñas en el sitio | Con dos sedes harían falta dos widgets (se ve recargado) o un selector que los alterne (complejidad injustificada). Decisión de reevaluar. Ver USER-DECISIONS UD-009. |

---

## §6. Interfaz y experiencia de usuario

**Atmósfera de referencia:** Clínica dental moderna, profesional pero cálida. Sensación de orden, tranquilidad y confianza. Referentes visuales: Clínica Cumbres, Uno Salud Dental, Clínica Alemana. Colores teal (principal) y morado (secundario) sobre fondo blanco, texto en gris corporativo (nunca negro). Tipografía Source Sans en todas sus variantes. El sitio aplica un zoom base de 0.8 para que su 100% por defecto equivalga al 80% que prefiere el director.

**Arquitectura de páginas (v3):**

| Página | Ruta | Rol |
| --- | --- | --- |
| Inicio | `/` | Hub: hero, introducción, especialidades, membresías, accesos, preguntas frecuentes, contacto |
| Familia ZK | `/familia-zk` | Las 4 membresías, comparador, vigencia y condiciones, preguntas del tema |
| Sucursales | `/sucursales` | Una sección por sede: intro, galería, infraestructura y datos de contacto |
| Equipo clínico | `/equipo-clinico` | Dirección Clínica destacada + rejilla filtrable por sede |
| Nosotros | `/nosotros` | Historia, convicción, crecimiento, visión compartida y 4 principios |
| Convenios y seguros | `/convenios` | Convenios institucionales, reembolsos y medios de pago |
| Afiche de membresía | `/familia-zk/afiche?m=…` | Pieza imprimible de 2 caras; con `&embed=1` se ve como hoja continua dentro del modal |
| No encontrada | `/404` | Salida hacia Inicio y hacia ambas sedes |

**Flujo de usuario principal (v3):**

1. Hero (`#inicio`): h1 "Tu salud dental, en orden.", botón a Sucursales y popover "Agenda tu evaluación" con las dos sedes; split diagonal de sedes (BranchSplit, 680px) y franja de 8 etiquetas rápidas que saltan a la especialidad correspondiente.
2. Introducción: banda `--surface-section` con el relato de la clínica y frase de cierre sobre hairline.
3. Especialidades (`#especialidades`): índice `role="tablist"` de 14 especialidades agrupadas por disponibilidad; panel derecho con la foto de la especialidad a sangre, la ficha (sede, gancho, descripción) en una caja de vidrio esmerilado que ocupa todo el ancho de la foto, pegada a su borde inferior, y los botones de WhatsApp por sede lado a lado debajo de la foto. En teléfono la foto va primero, en una banda propia sin texto encima, y la ficha y los botones siguen debajo.
4. Membresías (`#membresias`): 4 tarjetas; "Conoce ZK …" abre el modal-afiche. Debajo, acceso al comparador de Familia ZK.
5. Accesos (`#nosotros`): tres celdas hacia Nosotros, Equipo y Convenios. No repiten contenido.
6. Preguntas frecuentes (`#preguntas`): acordeón de 9 preguntas.
7. Contacto (`#contacto`): bloque con `--gradient-brand` y botones de WhatsApp por sede. Sin formulario y sin correo.
8. Footer: cuatro columnas, disclaimer clínico, franja de copyright y modal de Privacidad.
9. FAB de WhatsApp: aparece al salir de la portada (IntersectionObserver sobre la primera sección).

**Componentes de interfaz (v3):**

| Componente | Función | Archivo |
| --- | --- | --- |
| SiteHeader | Header sticky con 6 links + CTA de contacto y estado activo | `src/components/site/SiteHeader.astro` |
| SiteFooter | Pie de 4 columnas + modal de Privacidad | `src/components/site/SiteFooter.astro` |
| WhatsAppFab | Píldora fija que aparece al salir de la portada; abre un selector con las dos sedes | `src/components/site/WhatsAppFab.astro` |
| SectionHeader | Titular de sección del design system | `src/components/core/SectionHeader.astro` |
| BranchSplit | Split diagonal de sedes con foto por sede | `src/components/content/BranchSplit.astro` |
| MembershipCard | Tarjeta de membresía (abre modal o navega al afiche) | `src/components/content/MembershipCard.astro` |
| MembershipTag | Tarjetita física de la membresía (folleto) | `src/components/content/MembershipTag.astro` |
| Afiche | Folleto de 2 caras de una membresía | `src/components/content/Afiche.astro` |
| Galeria | Galería por sede (flechas, contador, miniaturas, caption); precarga y espera la foto antes de mostrarla | `src/components/content/Galeria.astro` |
| FaqItem | Item de acordeón | `src/components/content/FaqItem.astro` |
| FaqBloque | Acordeón por tema (usado en Familia ZK) | `src/components/content/FaqBloque.astro` |

**Marca de agua del isotipo:** una por página (`opacity: .055`, `pointer-events: none`), salvo en Inicio, cuyo motivo de marca es el split diagonal. Nosotros y Equipo llevan además el sello centrado de su sección de cierre.

---

## §7. Especificación de módulos

> Detalle técnico de cada módulo o componente crítico del sistema.

### 7.1. Design System (CSS Custom Properties)

**Propósito:** Define los tokens visuales de la marca (colores, tipografía, espaciado, geometría, motion) en CSS nativo, sin dependencias externas.

**Estructura:**
- `src/styles/tokens/colors.css`: paleta completa: corporativos (teal #51B3AE, morado #A98DB7, gris #A3A3A3, #777777), derivados, semánticos, degradados, colores de membresía y sucursales.
- `src/styles/tokens/typography.css`: escala tipográfica basada en Source Sans.
- `src/styles/tokens/spacing.css`: sistema de espaciado modular.
- `src/styles/tokens/geometry.css`: radios, sombras, bordes.
- `src/styles/tokens/motion.css`: transiciones y animaciones.
- `src/styles/global.css`: reset, estilos base y zoom base del sitio.

**Dependencias:** Ninguna. CSS nativo.

### 7.1.1. Capa responsiva

**Propósito:** Adaptar a tablet y teléfono un sitio cuyo layout de escritorio vive en atributos `style` inline.

**El problema que resuelve:** el sitio es un port 1:1 de un handoff de Claude Design. Los `style` inline de cada `.astro` son la especificación aprobada por el cliente. Una media query normal no puede tocarlos, porque un estilo inline gana a cualquier selector, y editarlos rompería la trazabilidad con el diseño.

**Mecanismo:**

- Todas las reglas móviles viven en `src/styles/responsive/`, importado desde `Layout.astro` **después** de `global.css`. Un archivo por página (`inicio.css`, `sucursales.css`, …), más `base.css` (tokens y guardas), `chrome.css` (header, menú, footer, FAB), `componentes.css` y `afiche.css`.
- **Toda regla vive dentro de una media query.** Fuera del breakpoint la capa no existe, de modo que el escritorio queda demostrablemente intacto y esa promesa se verifica comparando capturas contra un worktree del commit anterior.
- **Toda declaración que pise un inline lleva `!important`.** Es el único mecanismo con más peso que un estilo inline; se aplica de forma uniforme para que la regla sea una sola y no haya que razonar caso a caso. Alcanza también a los `<style>` con scope de Astro, que llevan el selector de scope y por tanto más especificidad.
- **Toda media query empieza por `screen and`, sin excepción.** Una hoja A4 mide 794px de ancho en CSS, así que al imprimir cae dentro del breakpoint de 1024px: sin acotar a pantalla, lo pensado para un teléfono se aplica al papel. No es hipotético: el `overflow-wrap: break-word` de la capa partía el lema de una membresía por la mitad de una palabra en el afiche impreso, y sólo apareció al comparar el PDF generado contra el del commit anterior.
- En los `.astro` sólo se **agregan** atributos `class` como gancho. Los `style` inline no se editan.
- Buena parte de la adaptación se resuelve **redefiniendo tokens** (`--container-max`, la escala `--space-*`, `--lh-tight`) en vez de reescribir reglas: un solo cambio se propaga a cada inline que use el token.

**Breakpoints:**

| Ancho | Qué ocurre |
| --- | --- |
| ≤1024px | Tablet vertical. Se neutraliza el zoom base (UD-012). Rejillas de 3-4 columnas bajan a 2. |
| ≤900px | El header colapsa a menú (UD-013). Umbral medido sobre la navegación real. |
| ≤767px | Teléfono. Una columna. Se permiten cambios de patrón (UD-014). |
| ≤380px | Teléfono angosto. Ajustes finos. |

**Interacción entre `zoom` y las media queries:** se verificó con Playwright, en 15 anchos entre 320 y 1440px, que las media queries se evalúan contra el viewport físico y no contra el `zoom` de la raíz. Por eso `@media (max-width: 1024px) { html { zoom: 1 } }` no realimenta el breakpoint ni produce parpadeo.

**Dependencias:** ninguna. CSS nativo.

### 7.1.2. Secciones pendientes de habilitar

**Propósito:** Marcar como no disponible una sección que existe en el sitio pero cuyo contenido todavía no entrega el cliente, sin borrarla ni dejarla enlazada prometiendo algo que no está.

**Mecanismo:**

- El estado vive en un solo lugar: `RUTAS_PENDIENTES`, un conjunto de rutas en `src/data/navegacion.ts`, con el helper `estaPendiente(page)`.
- Los cuatro accesos a una ruta pendiente (header, panel del menú móvil, índice del footer y celda de accesos de Inicio) se renderizan como `<span>` en vez de `<a>`: no hay destino que seguir, quedan fuera del orden de tabulación y llevan `aria-disabled="true"` para que un lector de pantalla los anuncie como deshabilitados. El aspecto lo da la clase `.zk-pendiente` en `global.css`.
- Mientras la ruta esté en el conjunto, `astro.config.mjs` la excluye del sitemap y su página pasa `noindex` al `Layout`. Sería contradictorio que el sitio la marque como no disponible y a la vez la ofrezca en una búsqueda con sus placeholders a la vista.
- La página **sigue existiendo y sigue siendo alcanzable por URL directa**, para poder revisarla antes de habilitarla.

**Reversión:** sacar la ruta de `RUTAS_PENDIENTES`. Los cuatro accesos, el sitemap y el `noindex` vuelven solos.

**Estado actual:** `/convenios`, a la espera del listado de instituciones y sus logos. Ver USER-DECISIONS UD-015 y TODO TASK-037.

### 7.2. Modal-afiche de membresías

**Propósito:** Reproduce el contrato del diseño v3: "Conoce ZK …" abre un modal que embebe el folleto de la membresía en hoja continua.

**Piezas:**
- `Afiche.astro` (props: `membership`): folleto de dos caras (presentación + "Lo que incluye"), con la tarjetita física, la ruta de cuidado, el timeline de etapas y las condiciones.
- `src/pages/familia-zk/afiche.astro`: renderiza las cuatro membresías y muestra la que indica `?m=`. Con `&embed=1` agrega `body.embed`: fondo transparente, hoja continua y sin pies repetidos. Fija `html { zoom: 1 }` porque el afiche tiene medida física (794px = A4) y no debe escalarse dos veces dentro del iframe.
- El overlay vive en `src/pages/index.astro`: `fixed` con backdrop teal e iframe de `min(880px, 94vw)`. Cierra por clic fuera, Escape o `postMessage('zk-close-afiche')` desde el iframe.

**Interfaz del disparador:** cada `MembershipCard` con `abreModal` lleva `data-afiche="{m}"` y un `ctaHref` a `/familia-zk/afiche?m={m}` como fallback sin JS.

**Dependencias:** `src/data/afiche.ts`, `MembershipTag.astro`.

### 7.3. Optimización de imágenes

**Propósito:** Mantener el sitio liviano sin renunciar a fotos reales de sedes y retratos del equipo.

**Mecanismo:**
- `src/lib/imagenes.ts` construye cuatro mapas nombre-de-archivo a `ImageMetadata` vía `import.meta.glob` sobre `src/assets/fotos/`, `src/assets/equipo/`, `src/assets/brand/` y `src/assets/especialidades/` (fotos por especialidad, nombradas por su posición 1-14 en `ESPEC`).
- `BranchSplit` y `Galeria` usan `getImage()` de `astro:assets` para generar webp por tamaño (principal ~1200px, miniatura ~220px).
- Los retratos del equipo se sirven como `background-image` con URL ya optimizada: así conservan el encuadre del diseño (`background-position: center 22%` en tarjetas, `38%` en Dirección Clínica).
- El glob es `eager`: cualquier imagen que quede en `src/assets/` se copia al build aunque ninguna vista la use. Las fotos del handoff que el diseño no referencia no se incorporan al repositorio.

**Redacción de datos de terceros:** las fotografías del handoff llegan sin tratar. Antes de publicarse se difuminan las patentes de vehículos, los carteles de negocios vecinos y las caras de personas que no son del equipo. El manifiesto de qué se tapó, dónde y por qué vive en `tools/difuminar-fotos.py`, junto con lo que se decidió deliberadamente no tapar. Es un desenfoque local sobre rectángulos acotados, nunca un repintado generativo: la distinción importa porque una fotografía de fachada ya se descartó por venir retocada con IA. El script permite reaplicar la redacción si una foto se reimporta desde el handoff.

### 7.4. Datos del sitio

**Propósito:** Centralizar el contenido editorial en módulos TypeScript, copiando literalmente el `renderVals()` de cada archivo de diseño.

| Módulo | Contenido |
| --- | --- |
| `src/data/contacto.ts` | Sedes, teléfonos, Instagram, helper `wa()` y degradados por sede |
| `src/data/navegacion.ts` | Links del header y del footer, y el helper `ruta()` que respeta el `base` de Astro |
| `src/data/especialidades.ts` | Las 14 especialidades con gancho, descripción, disponibilidad y las 8 etiquetas rápidas del hero |
| `src/data/membresias.ts` | Las 4 tarjetas, en sus **dos** redacciones (Inicio y Familia ZK), más acentos y degradados |
| `src/data/afiche.ts` | Copy verbatim de los 8 folletos: beneficios, "ideal para ti si", etapas y ruta |
| `src/data/faq.ts` | Las 9 preguntas de Inicio y el banco de 25 de FaqBloque, agrupado por tema |
| `src/data/equipo.ts` | Las 13 fichas del equipo y las reglas de orden y agrupación por sede |
| `src/data/sucursales.ts` | Galerías (10 fotos en Los Ángeles, 7 en Pucón), infraestructura, datos de contacto y el split del hero |

**Nota sobre duplicaciones intencionales:** el diseño trae dos redacciones distintas para las mismas membresías y dos listas de preguntas que comparten enunciado pero no respuesta. No se unifican: cada página usa la suya, tal cual está en su archivo de referencia.

## §8. Reglas operativas

> Cómo opera el agente de IA dentro de este repositorio.

**Ubicación de las reglas:** `docs/RULES.md`

**Alcance:** Todas las modificaciones de archivos en este repositorio. Las reglas aplican a todas las operaciones del agente, incluidos cambios de código, documentación y decisiones de contenido.
