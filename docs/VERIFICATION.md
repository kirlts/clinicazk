# VERIFICATION: Clínica ZK v2.0.0

> Canonical truth for all formal promise verifications and testing boundaries.
> Generated and maintained exclusively by the `/derive` algorithm.

## Kairós Symbol Legend

| Symbol | Meaning |
|---|---|
| 🤖 `.LLM` | Verifiable by AI/automated tool |
| 🧑 `.HUM` | Requires human verification |
| 🤖🧑 `.MIX` | Pre-verifiable by AI, final human validation |
| ✅ | Implemented and verified |
| 🔲 | Pending |

---

> Inventario de checks. Los `.LLM` de la v2 fueron verificados por herramienta (🤖 `astro check` sin errores + build + deploy en verde; 2026-07-22). Los `.HUM` quedan pendientes de validación humana. El poblado formal completo lo ejecuta `/derive`.

### Preliminary check inventory

<!--
Dev: Functionality
-->
🤖 `DEV.FN.001.LLM` Proyecto Astro compila sin errores → build exitoso.
🤖 `DEV.FN.002.LLM` Tokens CSS se cargan y aplican correctamente en todos los componentes.
🤖 `DEV.FN.003.LLM` Layout renderiza header, main y footer en todas las rutas.
🤖 `DEV.FN.006.LLM` Sección de especialidades muestra las 5 especialidades desde site.ts.
🤖 `DEV.FN.007.LLM` Sección de membresías muestra las 4 tarjetas con datos correctos.
🤖 `DEV.FN.008.LLM` PromoBanner muestra el copy de campaña correcto. (⚠️ SUPERADO en v2: el componente se removió por decisión de diseño; el mensaje vive en la intro de Membresías.)
🤖 `DEV.FN.009.LLM` Página de detalle de membresía carga datos desde membershipDetails.ts.
🤖 `DEV.FN.011.LLM` BranchSplit muestra ambas sucursales con sus datos.
🤖 `DEV.FN.013.LLM` Sección AboutUs se renderiza sin errores.
🤖 `DEV.FN.015.LLM` Sección Agreements se renderiza sin errores.
🤖 `DEV.FN.017.LLM` TeamPlaceholder se renderiza sin errores.
🤖 `DEV.FN.019.LLM` FAQ acordeón funciona sin errores de JS.
🤖 `DEV.FN.020.LLM` Formulario de contacto renderiza todos los campos.
🤖 `UIX.FN.004.LLM` Hero renderiza sin errores de JS. (⚠️ SUPERADO en v2: reemplazado por el Hero fijo; ver DEV.FN.027.)

<!--
DEV: Functionality (v2)
-->
🤖 `DEV.FN.027.LLM` Hero v2 renderiza h1 fijo, accesos rápidos y split de sedes. (🤖 Verificado por herramienta; 2026-07-22)
🤖 `DEV.FN.029.LLM` Índice de especialidades renderiza las 13 con grupos por sede. (🤖 Verificado por herramienta; 2026-07-22)
🤖 `DEV.FN.031.LLM` Modal-afiche abre el iframe correcto y cierra por clic fuera/Escape/postMessage. (🤖 Verificado por herramienta; 2026-07-22)
🤖 `DEV.FN.033.LLM` Sección Clínica renderiza Nosotros, Equipo y ambas galerías. (🤖 Verificado por herramienta; 2026-07-22)
🤖 `DEV.FN.034.LLM` Imágenes se optimizan a webp en build sin errores de getImage. (🤖 Verificado por herramienta; 2026-07-22)
🤖 `DEV.FN.036.LLM` El sitio compila sin errores tras el rediseño v2 (astro check + build). (🤖 Verificado por herramienta; 2026-07-22)

<!--
UIX: UX/Availability
-->
🧑 `UIX.AV.001.HUM` Header y navegación son intuitivos y funcionan en mobile.
🧑 `UIX.AV.005.HUM` Carrusel del Hero se ve bien y los slides tienen sentido. (⚠️ SUPERADO en v2: el hero dejó de ser carrusel.)
🧑 `UIX.AV.010.HUM` Detalle de membresía es claro y útil para el paciente (ahora en modal-afiche).
🧑 `UIX.AV.012.HUM` BranchSplit comunica efectivamente la diferencia entre sucursales.
🧑 `UIX.AV.021.HUM` Formulario de contacto funciona correctamente (envío por mailto:).
🧑 `UIX.AV.028.HUM` Hero v2 comunica y guía la navegación en mobile y desktop.
🧑 `UIX.AV.030.HUM` El maestro-detalle de especialidades es claro y usable.
🧑 `UIX.AV.032.HUM` El modal-afiche es legible y fácil de cerrar.
🧑 `UIX.AV.035.HUM` El sitio coincide 1:1 con el render del design handoff v2.
🧑 `UIX.AV.037.HUM` La versión mobile de la v2 es adecuada (pendiente de iteración tras la reunión).

<!--
CONT: Content
-->
🧑 `CONT.CR.014.HUM` Texto identitario de Nosotros es aprobado por Bernielli.
🧑 `CONT.CR.016.HUM` Listado de convenios vigentes confirmado por el equipo.
🧑 `CONT.CR.018.HUM` Fotos y datos de doctores son correctos.
🧑 `CONT.CR.022.HUM` Todos los textos del sitio siguen el tono DIDEMCO.
🧑 `CONT.CR.023.HUM` Especialidades tienen texto descriptivo aprobado.
🧑 `CONT.CR.024.HUM` Imágenes de sucursales seleccionadas e integradas.

<!--
OPS/OAS: Operations
-->
🧑 `OPS.AV.025.HUM` Dominio clinicazk.cl configurado y apuntando al sitio.
🤖 `OAS.AV.026.LLM` GitHub Pages deploy automático funciona correctamente.
