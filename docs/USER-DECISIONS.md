# USER-DECISIONS: Registro de agencia humana

> Este documento NO ES UN CHANGELOG. Es el registro de la soberanía del usuario.
> Captura el "por qué" estratégico y las intenciones explícitas que comunica el usuario.

| Símbolo | Significado |
|---|---|
| 💡 | Decisión estratégica del usuario |
| 🔗 | Referencia cruzada trazable a checks `.HUM` |

---

## [UD-001] Sitio 100% estático sin backend

**Fecha:** 2026-07-09
**Contexto:** Se discutió la arquitectura del sitio. Bernielli mencionó que Wix no era necesario. El desarrollador propuso sitio estático con Astro.
**Decisión:** El sitio será 100% estático, generado con Astro v7 y desplegado en GitHub Pages. Sin backend, sin base de datos, sin SSR.
**Alternativas descartadas:**
- Wix: Se descartó porque el desarrollador recomendó no usarlo y Bernielli accedió.
- WordPress: No se consideró por ser overkill para el alcance.
**Consecuencias:**
- (-) No se pueden implementar reservas online ni portal de pacientes sin backend.
- (+) Costo de hosting cero (GitHub Pages).
- (+) Mantenimiento mínimo.
- (+) Carga rápida y seguridad.
**Condiciones de reversión:** Si la clínica crece y necesita funcionalidades dinámicas (reservas, login de pacientes), se evaluará migrar a una arquitectura con backend.

## [UD-002] Mobile-first como prioridad de diseño

**Fecha:** 2026-07-15 (Reunión Online)
**Contexto:** Bernielli preguntó específicamente por la versión móvil porque el sitio se promocionará en Instagram y la mayoría de los visitantes llegarán desde el teléfono.
**Decisión:** El diseño prioriza mobile-first. Todos los componentes se redimensionan y adaptan a pantallas pequeñas. Los menús se colapsan en mobile.
**Alternativas descartadas:**
- Desktop-first con adaptación mobile: Se descartó porque el uso móvil será mayoritario.
**Consecuencias:**
- (+) Mejor experiencia para el 80%+ de usuarios que vendrán de Instagram.
- (+) Mejor SEO (Google indexa mobile-first).
- (-) Algunos componentes visuales complejos pueden simplificarse en mobile.
**Condiciones de reversión:** Ninguna. Es una decisión irreversible dado el contexto de uso.

## [UD-003] Integración de Google Maps con reseñas

**Fecha:** 2026-07-15 (Reunión Online)
**Contexto:** Bernielli mencionó que las secretarias están pidiendo reseñas en Google Maps y le gustaría integrarlas en el sitio para mostrar prueba social y fomentar más reseñas.
**Decisión:** Integrar Google Maps embebido en la sección de contacto, mostrando reseñas de la clínica.
**Alternativas descartadas:**
- Widget de terceros para reseñas: No se consideró.
**Consecuencias:**
- (+) Muestra reseñas reales y actualizadas.
- (+) Incentiva a las secretarias a seguir pidiendo reseñas.
- (-) Depende de la API de Google Maps.
**Condiciones de reversión:** Si Google cambia los términos de la API embed, se evaluará un widget alternativo.

> **Estado:** REVERTIDA en la v2 por [UD-009]. Ver esa decisión.

## [UD-004] BranchSplit como componente de diferenciación de sucursales

**Fecha:** 2026-07-15 (Reunión Online)
**Contexto:** El desarrollador propuso un componente visual que diferencia las dos sucursales con hover/interacción. Bernielli aprobó el concepto porque "concientiza que hay dos sucursales" y refuerza la identidad de cada una (LA = orden/planificación, Pucón = comunidad/cercanía).
**Decisión:** Implementar BranchSplit con dos caras, cada una con el acento de sucursal correspondiente (teal LA, purple Pucón).
**Alternativas descartadas:**
- Listado plano de sucursales: Se descartó porque no comunica la identidad diferenciada de cada sede.
**Consecuencias:**
- (+) Refuerza la narrativa del manual de campaña (LA orden, Pucón comunidad).
- (+) Visualmente atractivo para mobile y desktop.
**Condiciones de reversión:** Si en el futuro hay más de 2 sucursales, el componente deberá rediseñarse.

## [UD-005] Contenido del sitio con tono DIDEMCO

**Fecha:** 2026-07-10 (Audios WhatsApp)
**Contexto:** Bernielli explicó que el tono del sitio debe alinearse con el manual DIDEMCO: prevención, anticipación, orden, acompañamiento. El eslogan "Una nueva forma de cuidarnos" es central.
**Decisión:** Todo el copy del sitio sigue el tono DIDEMCO: lenguaje sencillo, sin tecnicismos sin explicación, sin emojis, sin urgencia comercial, con foco en prevención y anticipación.
**Alternativas descartadas:**
- Tono genérico de clínica dental: Se descartó por no diferenciar a ZK.
**Consecuencias:**
- (+) Consistencia con las redes sociales y materiales impresos.
- (+) Posicionamiento como clínica preventiva, no reactiva.
**Condiciones de reversión:** Si el equipo de marketing decide cambiar el posicionamiento.

## [UD-006] Fidelidad 1:1 con el design handoff v2

**Fecha:** 2026-07-22
**Contexto:** El usuario entregó el bundle "Sitio Web Clínica ZK v2" (proyecto de Claude Design) como fuente de verdad y exigió que el sitio quedara idéntico. Detectó divergencias introducidas durante el primer port (descripciones en galerías, disclaimer añadido, textos de sede acortados, botones de distinto alto).
**Decisión:** El sitio Astro se alinea 1:1 con el render del handoff. No se reinterpreta layout, copy ni color. Se ejecuta una pasada de diffing visual sección por sección contra el render de referencia y se corrige toda divergencia.
**Alternativas descartadas:**
- Reinterpretar o "mejorar" el diseño durante el port: se descartó porque el diseño ya fue aprobado por el cliente tras varias rondas.
**Consecuencias:**
- (+) El sitio refleja exactamente lo aprobado.
- (-) Menos libertad para introducir mejoras propias sin aprobación.
**Condiciones de reversión:** Si el cliente aprueba explícitamente cambios sobre el diseño v2.

## [UD-007] Modal-afiche embebido para el detalle de membresía

**Fecha:** 2026-07-22
**Contexto:** El contrato del diseño v2 abre el folleto de cada membresía en un modal que embebe el afiche (`afiche-membresia.html?m=...&embed=1`), no como página aparte. El usuario marcó el modal como importante.
**Decisión:** Implementar el detalle de membresía como modal con iframe a `/afiche/[m]/`, con el afiche en hoja continua (modo embed) y cierre por clic fuera, Escape o "Volver al sitio" (postMessage). Se mantiene la ruta como fallback sin JS.
**Alternativas descartadas:**
- Navegar a una página de detalle (enfoque del primer port): se descartó por no coincidir con el comportamiento del diseño v2.
**Consecuencias:**
- (+) Coincide con el diseño aprobado y mantiene al usuario en la misma vista.
- (-) Dependencia de iframe + postMessage entre documentos.
**Condiciones de reversión:** Si se decide mover el afiche a una página independiente.

## [UD-008] Zoom base 0.8 (el 100% por defecto equivale al 80%)

**Fecha:** 2026-07-22
**Contexto:** El usuario declara que al entrar al sitio siempre hace Ctrl+- hasta el 80%, su punto óptimo. Pide que el 100% por defecto ya se vea como su 80%.
**Decisión:** Aplicar `html { zoom: 0.8 }` global. En el afiche embebido se fija `zoom: 1` para evitar doble escalado dentro del iframe del modal.
**Alternativas descartadas:**
- `transform: scale(0.8)`: se descartó porque rompe el flujo de layout, scrollbars y posicionamiento fijo.
**Consecuencias:**
- (+) Reproduce exactamente el zoom manual del navegador, incluyendo header sticky y FAB.
- (-) Depende del soporte de `zoom` (Chrome/Edge/Safari; Firefox 126+). En navegadores antiguos se ve al 100% sin romperse.
**Condiciones de reversión:** Si el usuario cambia su preferencia de zoom o el objetivo pasa a ser el 100% nativo.

## [UD-009] Omitir los widgets de Google Maps en la v2 (revierte UD-003)

**Fecha:** 2026-07-22
**Contexto:** UD-003 planeaba embeber Google Maps con reseñas. Al implementar la v2, el usuario decidió omitirlo: al haber dos sucursales harían falta dos widgets (se ve recargado) o un selector que alterne el widget (complejidad injustificada para el valor que aporta hoy).
**Decisión:** No incluir widgets de Google Maps en la v2. Los enlaces "Cómo llegar" de cada sede apuntan a Google Maps por URL. Reevaluar según el feedback de la reunión.
**Alternativas descartadas:**
- Dos widgets simultáneos: recargan visualmente la sección.
- Selector que alterna el widget: complejidad injustificada.
**Consecuencias:**
- (+) Sección de sedes más limpia y liviana.
- (-) Se posterga la prueba social de reseñas dentro del sitio.
**Condiciones de reversión:** Si Clínica ZK prioriza mostrar reseñas embebidas; se retomaría con un patrón que no recargue la vista.

---

## [UD-010] Mantener el zoom base 0.8 también en la v3

**Fecha:** 2026-07-29
**Decisión:** El sitio conserva `html { zoom: 0.8 }` pese a que el prototipo v3 no lo tiene.

**Contexto:** El handoff v3 pide comparación visual lado a lado sin diferencias. Con el zoom, el sitio nunca queda pixel-idéntico al prototipo: todo se dibuja al 80% y el contenedor ocupa ~75% del ancho de viewport en lugar del 94%.

**Alternativas evaluadas:**
- Quitar el zoom para lograr paridad de píxel exacta con el diseño.
- Mantenerlo (elegida).

**Razón:** Es una preferencia de visualización explícita del director, independiente del rediseño. La paridad se verificó igual en texto, estructura, estilos e interacciones; toda diferencia de tamaño observada corresponde exactamente al factor 0.8.

**Excepción:** el afiche (`/familia-zk/afiche`) fija `zoom: 1` porque tiene medida física A4 y dentro del iframe del modal se escalaría dos veces.

---

## [UD-011] Eliminar el código de la v2 en vez de dejarlo desenlazado

**Fecha:** 2026-07-29
**Decisión:** Los componentes, datos y rutas de la v2 que la v3 ya no usa se borran del repositorio.

**Contexto:** El handoff v3 declara que reemplaza a la v2 en producción. La v2 era el sitio completo (una sola página), no un conjunto de vistas legacy accesibles.

**Alternativas evaluadas:**
- Dejar el código v2 en el repo pero sin enlazar desde la navegación.
- Eliminarlo (elegida).

**Razón:** Mantener un sitio completo muerto en el árbol confunde en revisiones futuras y no aporta: el historial de git conserva la v2 íntegra si hiciera falta recuperarla.

---

## [UD-012] El zoom base 0.8 se neutraliza bajo 1024px

**Fecha:** 2026-07-30
**Decisión:** `html { zoom: .8 }` sigue vigente en escritorio, pero vuelve a `1` bajo 1024px de ancho de viewport.

**Contexto:** UD-008 y UD-010 fijaron el zoom base porque el director reduce al 80% en su pantalla. Al abordar la versión móvil se midió el efecto de esa preferencia en un teléfono: el cuerpo de 17px se dibuja a 13.6px reales y el layout cree disponer de 469px donde el teléfono tiene 375. La preferencia produce en táctil lo contrario de lo que busca en escritorio.

**Alternativas evaluadas:**
- Neutralizarlo sólo bajo 768px, dejando el 0.8 en tablet.
- Mantener el 0.8 en todas partes y compensar subiendo los tamaños tipográficos.
- Neutralizarlo bajo 1024px (elegida).

**Razón:** El usuario eligió 1024px porque el problema de compresión también afecta a la tablet vertical. La preferencia de escritorio queda intacta: sobre 1024px no cambia absolutamente nada.

**Consecuencias:**
- (+) El texto recupera su tamaño nominal en teléfono y tablet.
- (+) Las media queries dejan de pelear contra un layout escalado.
- (-) Entre 1024px y 1025px hay un salto de escala perceptible al redimensionar la ventana.

**Verificación:** se comprobó con Playwright, en 15 anchos entre 320 y 1440px, que las media queries se evalúan contra el viewport físico y no contra el zoom de la raíz. El cambio de zoom no realimenta el breakpoint ni produce parpadeo.

**Condiciones de reversión:** si el director declara que también quiere el 80% en su teléfono.

---

## [UD-013] Patrón de menú móvil: hamburguesa con el contacto siempre visible

**Fecha:** 2026-07-30
**Decisión:** Bajo 900px el header muestra logo, el botón "Contacto" y una hamburguesa que abre un panel a pantalla completa con los 6 links y los accesos de WhatsApp de ambas sedes.

**Contexto:** El handoff v3 dejó este patrón explícitamente "a definir con diseño" (README del bundle, Pendientes conocidos, punto 6). Sin él, los 6 links se apilaban encima del logo en cualquier pantalla angosta.

**Alternativas evaluadas:**
- Sólo hamburguesa, con "Contacto" dentro del panel.
- Barra de links con scroll horizontal, sin panel.
- Hamburguesa con el CTA fuera del panel (elegida).

**Razón:** WhatsApp es el único canal de contacto del sitio (UD del alcance v3). Esconderlo tras un menú lo dejaría a dos toques en el dispositivo desde el que llega la mayoría del tráfico. El umbral de 900px se midió sobre la navegación real, no se eligió por convención.

**Consecuencias:**
- (+) El canal principal queda a un toque en todo el sitio.
- (+) El panel repite los rótulos de contacto que ya existen en Inicio: no se inventó copy.
- (-) El header móvil lleva dos controles en vez de uno.

**Condiciones de reversión:** si diseño entrega un patrón de menú propio para la v3.

---

## [UD-014] En móvil se puede cambiar el patrón de un componente, nunca su contenido

**Fecha:** 2026-07-30
**Decisión:** Bajo el breakpoint de teléfono se permite reemplazar el patrón de interacción de un componente cuando el de escritorio no funciona. El copy, los colores, la tipografía y el orden de las secciones no se tocan.

**Contexto:** El handoff declara que la versión móvil de las cuatro páginas nuevas "todavía no está diseñada en detalle" y sólo fija reglas mínimas: una columna, hit targets de 44px, la galería mantiene 4:3, el header colapsa. Varios componentes no admiten simple reflow: un maestro-detalle de dos columnas y una rejilla de cuatro tarjetas quedan ilegibles a 375px por mucho que se apilen.

**Alternativas evaluadas:**
- Sólo reflow a una columna, conservando la mecánica de escritorio en todo.
- Permitir cambios de patrón acotados (elegida).

**Razón:** UD-006 exige fidelidad 1:1 con el handoff, pero el handoff mismo delega la versión móvil. Fidelidad al diseño aprobado significa aquí respetar lo que el diseño sí definió (contenido, marca, jerarquía) y resolver con criterio lo que dejó abierto.

**Consecuencias:**
- (+) Piezas como el comparador de membresías o el índice de especialidades quedan usables en teléfono.
- (-) La comparación 1:1 con el prototipo deja de aplicar bajo el breakpoint. Sobre él sigue siendo exigible.

**Condiciones de reversión:** si diseño entrega la versión móvil detallada, sus patrones reemplazan a estos.

---

## [UD-015] Convenios se muestra deshabilitada mientras falte su contenido

**Fecha:** 2026-07-30
**Decisión:** Los accesos a `/convenios` se muestran deshabilitados, en vez de llevar a una página a medio llenar o de desaparecer de la navegación.

**Contexto:** La clínica todavía no entrega el listado de instituciones con convenio ni sus logos, así que la página muestra seis marcos con la palabra "Logo" como placeholder honesto. El usuario pidió marcarla como no habilitada: *"quiero que la marque es como no habilitada. Es decir, que el botón quede como lo convencional, supongo que es tipo transparente o algo así."*

**Alternativas descartadas:**
- Sacar la sección de la navegación hasta tener el contenido: la sección dejaría de estar anunciada y no se vería que viene.
- Dejarla enlazada tal cual: promete un listado de convenios y entrega seis marcos vacíos.

**Consecuencias:**
- (+) La sección sigue anunciada sin prometer algo que hoy no está.
- (+) Volver a habilitarla es sacar una ruta de `RUTAS_PENDIENTES`; no hay que recordar cuatro lugares.
- (-) Un visitante ve una sección que no puede abrir, sin más explicación que el tooltip "Estamos preparando esta sección".
- (-) La página queda fuera de resultados de búsqueda mientras dure el estado.

**Condiciones de reversión:** Cuando Clínica ZK entregue el listado de instituciones y sus logos. Ver TODO TASK-037.

---

## Anotación de auditoría documental (2026-07-30)

`UD-010` y `UD-011` fueron escritas con cuatro de los cinco campos del formato ADR: declaran fecha, contexto, decisión, alternativas y razón, pero **no declaran consecuencias ni condiciones de reversión**. No se completan aquí porque hacerlo sería atribuirle al usuario un razonamiento que no consta en el registro de la conversación. Quedan marcadas como incompletas para que él las cierre cuando quiera.
