# MEMORY: Heurísticas transferibles

> Repositorio de patrones y lecciones útiles en cualquier proyecto, sin importar el dominio.
> Archivo de solo anexado. El sistema impide reducir, borrar o sintetizar contenido previo.

| Símbolo | Significado |
|---|---|
| 🧠 | Heurística transferible aprendida |

---

## [HEU-001] Design tokens en CSS nativo para proyectos con manual de marca existente

**Fecha:** 2026-07-20
**Origen:** Clínica ZK: el manual de marca definía colores, tipografía y espaciado específicos que no se alineaban con ningún framework CSS existente.
**Patrón:** Definir todos los tokens visuales como custom properties CSS en archivos separados por categoría (colors, typography, spacing, geometry, motion). Derivar la paleta completa (tintes, sombras, semánticos) de los colores corporativos literales. Esto permite control total sobre el design system sin depender de Tailwind o styled-components.
**Lección:** Para proyectos con manual de marca preexistente, CSS nativo con custom properties ofrece más fidelidad al diseño que frameworks CSS utilitarios. Los tokens deben mapearse 1:1 con el manual, no al revés.
**Fuente:** [Confirmado por el usuario, sin fuente externa]

## [HEU-002] Transcripciones de audio como alimentación para IA contextual

**Fecha:** 2026-07-20
**Origen:** Clínica ZK: el desarrollador transcribió 11 minutos de audios de WhatsApp del director de marketing y usó esas transcripciones como contexto para la IA al generar el sitio web.
**Patrón:** Las transcripciones de audio (reuniones, notas de voz) capturan intención, tono y decisiones de negocio con mayor fidelidad que resúmenes escritos por terceros. Alimentar estos textos crudos al contexto de la IA permite que el output refleje la voz real del cliente.
**Lección:** Cuando un cliente envía audios o se graban reuniones, transcribirlos y usarlos como fuente primaria de contexto produce resultados más alineados con la intención del cliente que depender de breves instrucciones escritas.
**Fuente:** [Confirmado por el usuario, sin fuente externa]

## [HEU-003] Sitios estáticos con formularios funcionales sin backend

**Fecha:** 2026-07-20
**Origen:** Clínica ZK: necesidad de formulario de contacto sin backend ni servidor propio.
**Patrón:** Usar servicios externos como EmailJS o Formspree para el envío de formularios desde sitios 100% estáticos. El formulario se envía desde el cliente (fetch POST) al servicio, que reenvía por email. El sitio sigue siendo estático porque no hay servidor propio involucrado.
**Lección:** La distinción "estático vs dinámico" no es binaria. Un sitio estático puede incluir formularios funcionales, mapas interactivos, reseñas de Google Maps y enlaces WhatsApp sin necesidad de backend propio. Esto es clave para presupuestos ajustados donde el cliente no quiere mantener un servidor.
**Fuente:** [Confirmado por el usuario, sin fuente externa]

## [HEU-004] Portar un diseño con pasada de diffing visual sección por sección

**Fecha:** 2026-07-22
**Origen:** Clínica ZK v2: al portar un design handoff a Astro, se introdujeron divergencias sutiles (elementos añadidos, textos acortados) que el cliente detectó una por una.
**Patrón:** Cuando el entregable es un bundle que corre en runtime (React embebido), no hay un DOM estático que copiar byte a byte. La referencia fiel es el render. Se renderiza el standalone y el sitio portado al mismo ancho, se recortan bandas por sección y se comparan lado a lado. Cada divergencia se cataloga y se corrige; el desvanecido por animación/lazy-load en headless se descarta como artefacto.
**Lección:** "Fidelidad 1:1" con un diseño se verifica comparando renders, no leyendo el código fuente del prototipo. La pasada sistemática por bandas encuentra divergencias que la revisión a ojo pasa por alto.
**Fuente:** [Práctica establecida: regresión visual / pixel diffing]

## [HEU-005] Optimización de imágenes en build para sitios estáticos con muchas fotos

**Fecha:** 2026-07-22
**Origen:** Clínica ZK v2: galerías por sede con fotos de fachada de hasta 3 MB.
**Patrón:** Importar las imágenes desde `src/assets` y generar variantes webp por tamaño con `getImage()` de `astro:assets` (sharp). Un mapa nombre-de-archivo a `ImageMetadata` vía `import.meta.glob` permite resolver imágenes por string cuando los datos viven en un módulo aparte. Para galerías con cambio dinámico, se emiten URLs optimizadas por data-attribute y se intercambia el `src` con JS.
**Lección:** La fuente pesada puede quedar en el repo mientras el sitio servido pesa una fracción. Convertir fotos PNG a JPG en la fuente y dejar que el build produzca webp da lo mejor de ambos: fuente editable y entrega liviana.
**Fuente:** [Documentado en la documentación de Astro assets]

## [HEU-006] Modal que embebe una sub-página vía iframe + postMessage

**Fecha:** 2026-07-22
**Origen:** Clínica ZK v2: el diseño abría el folleto de membresía en un modal con iframe.
**Patrón:** El overlay (documento padre) escucha `[data-*-open]` y monta un iframe a una ruta dedicada en modo embed (fondo transparente, sin header/footer). El cierre viaja del iframe al padre por `window.parent.postMessage(SIGNAL)`; el padre escucha `message`. La sub-página fija su propio `zoom: 1` si el padre aplica zoom, para no escalarse dos veces.
**Lección:** En un sitio multi-página, un modal con iframe a una ruta real da lo mejor de dos mundos: la ruta es enlazable y funciona como fallback sin JS, y el modal la reutiliza sin duplicar markup. postMessage es el canal correcto para coordinar cierre entre documentos.
**Fuente:** [Patrón documentado de la plataforma web: MDN postMessage]

## [HEU-007] Hornear un nivel de zoom base con la propiedad CSS zoom

**Fecha:** 2026-07-22
**Origen:** Clínica ZK v2: el usuario siempre reduce el navegador al 80% y pidió que ese fuera el default.
**Patrón:** `html { zoom: 0.8 }` reproduce el zoom manual del navegador (escala uniforme, incluye posicionamiento fijo y media queries del layout), a diferencia de `transform: scale()` que rompe el flujo. Si hay iframes embebidos con su propio propósito, se les fija `zoom: 1` para evitar doble escalado.
**Lección:** Para "hornear" una preferencia de zoom, `zoom` es la herramienta correcta por sobre `transform`. Soporte amplio hoy (Chrome/Edge/Safari; Firefox 126+); degrada a 100% sin romper en navegadores sin soporte.
**Fuente:** [Patrón documentado de la plataforma web: CSS zoom, baseline 2024]
