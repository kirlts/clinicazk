# VERIFICATION: Clínica ZK v3.0.0

> Verdad canónica de todas las verificaciones formales de promesas y de los límites de testing.
> Generado y mantenido exclusivamente por el algoritmo `/derive`.

## Leyenda de símbolos Kairós

| Símbolo | Significado |
|---|---|
| 🤖 `.LLM` | Verificable por IA o herramienta automatizada |
| 🧑 `.HUM` | Requiere verificación humana |
| 🤖🧑 `.MIX` | Pre-verificable por IA, validación humana final |
| ✅ | Implementado y verificado |
| 🔲 | Pendiente |

---

> Inventario de checks. Los `.LLM` de la v2 fueron verificados por herramienta (🤖 `astro check` sin errores + build + deploy en verde; 2026-07-22). Los `.HUM` quedan pendientes de validación humana. El poblado formal completo lo ejecuta `/derive`.

### Inventario preliminar de checks

<!--
DEV: Funcionalidad
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
DEV: Funcionalidad (v2)
-->
🤖 `DEV.FN.027.LLM` Hero v2 renderiza h1 fijo, accesos rápidos y split de sedes. (🤖 Verificado por herramienta; 2026-07-22)
🤖 `DEV.FN.029.LLM` Índice de especialidades renderiza las 13 con grupos por sede. (🤖 Verificado por herramienta; 2026-07-22)
🤖 `DEV.FN.031.LLM` Modal-afiche abre el iframe correcto y cierra por clic fuera/Escape/postMessage. (🤖 Verificado por herramienta; 2026-07-22)
🤖 `DEV.FN.033.LLM` Sección Clínica renderiza Nosotros, Equipo y ambas galerías. (🤖 Verificado por herramienta; 2026-07-22)
🤖 `DEV.FN.034.LLM` Imágenes se optimizan a webp en build sin errores de getImage. (🤖 Verificado por herramienta; 2026-07-22)
🤖 `DEV.FN.036.LLM` El sitio compila sin errores tras el rediseño v2 (astro check + build). (🤖 Verificado por herramienta; 2026-07-22)

<!--
UIX: Experiencia y disponibilidad
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
CONT: Contenido
-->
🧑 `CONT.CR.014.HUM` Texto identitario de Nosotros es aprobado por Bernielli.
🧑 `CONT.CR.016.HUM` Listado de convenios vigentes confirmado por el equipo.
🧑 `CONT.CR.018.HUM` Fotos y datos de doctores son correctos.
🧑 `CONT.CR.022.HUM` Todos los textos del sitio siguen el tono DIDEMCO.
🧑 `CONT.CR.023.HUM` Especialidades tienen texto descriptivo aprobado.
🧑 `CONT.CR.024.HUM` Imágenes de sucursales seleccionadas e integradas.

<!--
OPS/OAS: Operaciones
-->
🧑 `OPS.AV.025.HUM` Dominio clinicazk.cl configurado y apuntando al sitio.
🤖 `OAS.AV.026.LLM` GitHub Pages deploy automático funciona correctamente.

---

## Verificación del rediseño v3 (2026-07-29)

> La paridad con el handoff no se declaró leyendo código: se demostró ejecutando el prototipo
> (`.dc.html` sobre su design system) y el sitio Astro lado a lado y comparando el resultado.

🤖 `DES.V3.001.LLM` `innerText` idéntico carácter por carácter entre prototipo y sitio en 15 de 16 escenarios: las 6 páginas, los 4 afiches, el afiche en modo embed, el popover de agenda, el cambio de especialidad y los dos filtros de equipo. ✅
🤖 `DES.V3.002.LLM` 404: el cuerpo de la página coincide carácter por carácter. La diferencia total es el header y el footer, que el prototipo no renderiza por un error de referencia propio (`ZKHeader`/`ZKFooter` en vez de `ZKHeaderV3`/`ZKFooterV3`) y que el sitio sí implementa, como declara el archivo y pide el handoff. ✅ (desviación consciente)
🤖 `DES.V3.003.LLM` Estilos computados del h1, del header sticky y del CTA equivalentes; las únicas diferencias numéricas corresponden al factor 0.8 del zoom base (por ejemplo, borde de 1px que computa 1.25px). ✅
🤖 `DES.V3.004.LLM` Galerías: contador, caption y miniaturas se comportan igual en ambos lados al avanzar dos fotos. ✅
🤖 `DES.V3.005.LLM` Modal-afiche: abre desde la tarjeta, carga `?m=…&embed=1`, aplica `body.embed`, la cara mide 794px dentro del iframe de 880px y cierra con Escape. ✅
🤖 `DES.V3.006.LLM` Modal de Privacidad del footer: abre y cierra. ✅
🤖 `DES.V3.007.LLM` FAB de WhatsApp: opacidad 0 en la portada y 1 tras salir de ella, igual que el prototipo. ✅
🤖 `DES.V3.008.LLM` Marca de agua del isotipo: ninguna en Inicio; una en Sucursales, Convenios y Familia ZK; dos en Nosotros y Equipo (portada + sello de cierre), según el handoff. ✅
🤖 `DES.V3.009.LLM` `astro check` sin errores y `npm run build` local en verde (8 páginas). ✅
🧑 `DES.V3.010.HUM` Revisión visual del director sobre el sitio desplegado. 🔲
🧑 `DES.V3.011.HUM` Confirmación de horarios, convenios y WhatsApp de Dirección Clínica. 🔲
