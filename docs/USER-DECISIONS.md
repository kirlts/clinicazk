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

> **Estado:** REVERTIDA en la v2 por [UD-009]. Ver esa decisión.

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

## [UD-006] Fidelidad 1:1 con el design handoff v2

**Date:** 2026-07-22
**Context:** El usuario entregó el bundle "Sitio Web Clínica ZK v2" (proyecto de Claude Design) como fuente de verdad y exigió que el sitio quedara idéntico. Detectó divergencias introducidas durante el primer port (descripciones en galerías, disclaimer añadido, textos de sede acortados, botones de distinto alto).
**Decision:** El sitio Astro se alinea 1:1 con el render del handoff. No se reinterpreta layout, copy ni color. Se ejecuta una pasada de diffing visual sección por sección contra el render de referencia y se corrige toda divergencia.
**Discarded alternatives:**
- Reinterpretar o "mejorar" el diseño durante el port: se descartó porque el diseño ya fue aprobado por el cliente tras varias rondas.
**Consequences:**
- (+) El sitio refleja exactamente lo aprobado.
- (-) Menos libertad para introducir mejoras propias sin aprobación.
**Reversion conditions:** Si el cliente aprueba explícitamente cambios sobre el diseño v2.

## [UD-007] Modal-afiche embebido para el detalle de membresía

**Date:** 2026-07-22
**Context:** El contrato del diseño v2 abre el folleto de cada membresía en un modal que embebe el afiche (`afiche-membresia.html?m=...&embed=1`), no como página aparte. El usuario marcó el modal como importante.
**Decision:** Implementar el detalle de membresía como modal con iframe a `/afiche/[m]/`, con el afiche en hoja continua (modo embed) y cierre por clic fuera, Escape o "Volver al sitio" (postMessage). Se mantiene la ruta como fallback sin JS.
**Discarded alternatives:**
- Navegar a una página de detalle (enfoque del primer port): se descartó por no coincidir con el comportamiento del diseño v2.
**Consequences:**
- (+) Coincide con el diseño aprobado y mantiene al usuario en la misma vista.
- (-) Dependencia de iframe + postMessage entre documentos.
**Reversion conditions:** Si se decide mover el afiche a una página independiente.

## [UD-008] Zoom base 0.8 (el 100% por defecto equivale al 80%)

**Date:** 2026-07-22
**Context:** El usuario declara que al entrar al sitio siempre hace Ctrl+- hasta el 80%, su punto óptimo. Pide que el 100% por defecto ya se vea como su 80%.
**Decision:** Aplicar `html { zoom: 0.8 }` global. En el afiche embebido se fija `zoom: 1` para evitar doble escalado dentro del iframe del modal.
**Discarded alternatives:**
- `transform: scale(0.8)`: se descartó porque rompe el flujo de layout, scrollbars y posicionamiento fijo.
**Consequences:**
- (+) Reproduce exactamente el zoom manual del navegador, incluyendo header sticky y FAB.
- (-) Depende del soporte de `zoom` (Chrome/Edge/Safari; Firefox 126+). En navegadores antiguos se ve al 100% sin romperse.
**Reversion conditions:** Si el usuario cambia su preferencia de zoom o el objetivo pasa a ser el 100% nativo.

## [UD-009] Omitir los widgets de Google Maps en la v2 (revierte UD-003)

**Date:** 2026-07-22
**Context:** UD-003 planeaba embeber Google Maps con reseñas. Al implementar la v2, el usuario decidió omitirlo: al haber dos sucursales harían falta dos widgets (se ve recargado) o un selector que alterne el widget (complejidad injustificada para el valor que aporta hoy).
**Decision:** No incluir widgets de Google Maps en la v2. Los enlaces "Cómo llegar" de cada sede apuntan a Google Maps por URL. Reevaluar según el feedback de la reunión.
**Discarded alternatives:**
- Dos widgets simultáneos: recargan visualmente la sección.
- Selector que alterna el widget: complejidad injustificada.
**Consequences:**
- (+) Sección de sedes más limpia y liviana.
- (-) Se posterga la prueba social de reseñas dentro del sitio.
**Reversion conditions:** Si Clínica ZK prioriza mostrar reseñas embebidas; se retomaría con un patrón que no recargue la vista.
