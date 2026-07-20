# USER-DECISIONS: Human Agency Record

> This document IS NOT A CHANGELOG. It is the register of user sovereignty.
> It captures the strategic "why" and the explicit intentions that the user communicates.

| Symbol | Meaning |
|---|---|
| 💡 | Strategic user decision |
| 🔗 | Traceable cross-reference to `.HUM` checks |

---

## [UD-001] Sitio 100% estático sin backend

**Date:** 2026-07-09
**Context:** Se discutió la arquitectura del sitio. Bernielli mencionó que Wix no era necesario. El desarrollador propuso sitio estático con Astro.
**Decision:** El sitio será 100% estático, generado con Astro v7 y desplegado en GitHub Pages. Sin backend, sin base de datos, sin SSR.
**Discarded alternatives:**
- Wix: Se descartó porque el desarrollador recomendó no usarlo y Bernielli accedió.
- WordPress: No se consideró por ser overkill para el alcance.
**Consequences:**
- (-) No se pueden implementar reservas online ni portal de pacientes sin backend.
- (+) Costo de hosting cero (GitHub Pages).
- (+) Mantenimiento mínimo.
- (+) Carga rápida y seguridad.
**Reversion conditions:** Si la clínica crece y necesita funcionalidades dinámicas (reservas, login de pacientes), se evaluará migrar a una arquitectura con backend.

## [UD-002] Mobile-first como prioridad de diseño

**Date:** 2026-07-15 (Reunión Online)
**Context:** Bernielli preguntó específicamente por la versión móvil porque el sitio se promocionará en Instagram y la mayoría de los visitantes llegarán desde el teléfono.
**Decision:** El diseño prioriza mobile-first. Todos los componentes se redimensionan y adaptan a pantallas pequeñas. Los menús se colapsan en mobile.
**Discarded alternatives:**
- Desktop-first con adaptación mobile: Se descartó porque el uso móvil será mayoritario.
**Consequences:**
- (+) Mejor experiencia para el 80%+ de usuarios que vendrán de Instagram.
- (+) Mejor SEO (Google indexa mobile-first).
- (-) Algunos componentes visuales complejos pueden simplificarse en mobile.
**Reversion conditions:** Ninguna. Es una decisión irreversible dado el contexto de uso.

## [UD-003] Integración de Google Maps con reseñas

**Date:** 2026-07-15 (Reunión Online)
**Context:** Bernielli mencionó que las secretarias están pidiendo reseñas en Google Maps y le gustaría integrarlas en el sitio para mostrar prueba social y fomentar más reseñas.
**Decision:** Integrar Google Maps embebido en la sección de contacto, mostrando reseñas de la clínica.
**Discarded alternatives:**
- Widget de terceros para reseñas: No se consideró.
**Consequences:**
- (+) Muestra reseñas reales y actualizadas.
- (+) Incentiva a las secretarias a seguir pidiendo reseñas.
- (-) Depende de la API de Google Maps.
**Reversion conditions:** Si Google cambia los términos de la API embed, se evaluará un widget alternativo.

## [UD-004] BranchSplit como componente de diferenciación de sucursales

**Date:** 2026-07-15 (Reunión Online)
**Context:** El desarrollador propuso un componente visual que diferencia las dos sucursales con hover/interacción. Bernielli aprobó el concepto porque "concientiza que hay dos sucursales" y refuerza la identidad de cada una (LA = orden/planificación, Pucón = comunidad/cercanía).
**Decision:** Implementar BranchSplit con dos caras, cada una con el acento de sucursal correspondiente (teal LA, purple Pucón).
**Discarded alternatives:**
- Listado plano de sucursales: Se descartó porque no comunica la identidad diferenciada de cada sede.
**Consequences:**
- (+) Refuerza la narrativa del manual de campaña (LA orden, Pucón comunidad).
- (+) Visualmente atractivo para mobile y desktop.
**Reversion conditions:** Si en el futuro hay más de 2 sucursales, el componente deberá rediseñarse.

## [UD-005] Contenido del sitio con tono DIDEMCO

**Date:** 2026-07-10 (Audios WhatsApp)
**Context:** Bernielli explicó que el tono del sitio debe alinearse con el manual DIDEMCO: prevención, anticipación, orden, acompañamiento. El eslogan "Una nueva forma de cuidarnos" es central.
**Decision:** Todo el copy del sitio sigue el tono DIDEMCO: lenguaje sencillo, sin tecnicismos sin explicación, sin emojis, sin urgencia comercial, con foco en prevención y anticipación.
**Discarded alternatives:**
- Tono genérico de clínica dental: Se descartó por no diferenciar a ZK.
**Consequences:**
- (+) Consistencia con las redes sociales y materiales impresos.
- (+) Posicionamiento como clínica preventiva, no reactiva.
**Reversion conditions:** Si el equipo de marketing decide cambiar el posicionamiento.
