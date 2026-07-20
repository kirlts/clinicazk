# MEMORY: Transferable Heuristics

> Repository of patterns and lessons that are useful in any project, regardless of the domain.
> Append-Only file. The system prevents reducing, deleting, or synthesizing prior content.

| Symbol | Meaning |
|---|---|
| 🧠 | Transferable heuristic learned |

---

## [HEU-001] Design tokens en CSS nativo para proyectos con manual de marca existente

**Date:** 2026-07-20
**Origin:** Clínica ZK — el manual de marca definía colores, tipografía y espaciado específicos que no se alineaban con ningún framework CSS existente.
**Pattern:** Definir todos los tokens visuales como custom properties CSS en archivos separados por categoría (colors, typography, spacing, geometry, motion). Derivar la paleta completa (tintes, sombras, semánticos) de los colores corporativos literales. Esto permite control total sobre el design system sin depender de Tailwind o styled-components.
**Lesson:** Para proyectos con manual de marca preexistente, CSS nativo con custom properties ofrece más fidelidad al diseño que frameworks CSS utilitarios. Los tokens deben mapearse 1:1 con el manual, no al revés.
**Source:** [Confirmed by user - no external source]

## [HEU-002] Transcripciones de audio como alimentación para IA contextual

**Date:** 2026-07-20
**Origin:** Clínica ZK — el desarrollador transcribió 11 minutos de audios de WhatsApp del director de marketing y usó esas transcripciones como contexto para la IA al generar el sitio web.
**Pattern:** Las transcripciones de audio (reuniones, notas de voz) capturan intención, tono y decisiones de negocio con mayor fidelidad que resúmenes escritos por terceros. Alimentar estos textos crudos al contexto de la IA permite que el output refleje la voz real del cliente.
**Lesson:** Cuando un cliente envía audios o se graban reuniones, transcribirlos y usarlos como fuente primaria de contexto produce resultados más alineados con la intención del cliente que depender de breves instrucciones escritas.
**Source:** [Confirmed by user - no external source]

## [HEU-003] Sitios estáticos con formularios funcionales sin backend

**Date:** 2026-07-20
**Origin:** Clínica ZK — necesidad de formulario de contacto sin backend ni servidor propio.
**Pattern:** Usar servicios externos como EmailJS o Formspree para el envío de formularios desde sitios 100% estáticos. El formulario se envía desde el cliente (fetch POST) al servicio, que reenvía por email. El sitio sigue siendo estático porque no hay servidor propio involucrado.
**Lesson:** La distinción "estático vs dinámico" no es binaria. Un sitio estático puede incluir formularios funcionales, mapas interactivos, reseñas de Google Maps y enlaces WhatsApp sin necesidad de backend propio. Esto es clave para presupuestos ajustados donde el cliente no quiere mantener un servidor.
**Source:** [Confirmed by user - no external source]
