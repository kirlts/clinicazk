# VERIFICATION: Clínica ZK v3.3.0

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

🤖 `DES.V3.001.LLM` `innerText` idéntico carácter por carácter entre prototipo y sitio en 15 de 16 escenarios: las 6 páginas, los 4 afiches, el afiche en modo embed, el popover de agenda, el cambio de especialidad y los dos filtros de equipo. ✅ (🤖 Verificado por herramienta; 2026-07-29 22:40)
🤖 `DES.V3.002.LLM` 404: el cuerpo de la página coincide carácter por carácter. La diferencia total es el header y el footer, que el prototipo no renderiza por un error de referencia propio (`ZKHeader`/`ZKFooter` en vez de `ZKHeaderV3`/`ZKFooterV3`) y que el sitio sí implementa, como declara el archivo y pide el handoff. ✅ (desviación consciente) (🤖 Verificado por herramienta; 2026-07-29 22:40)
🤖 `DES.V3.003.LLM` Estilos computados del h1, del header sticky y del CTA equivalentes; las únicas diferencias numéricas corresponden al factor 0.8 del zoom base (por ejemplo, borde de 1px que computa 1.25px). ✅ (🤖 Verificado por herramienta; 2026-07-29 22:40)
🤖 `DES.V3.004.LLM` Galerías: contador, caption y miniaturas se comportan igual en ambos lados al avanzar dos fotos. ✅ (🤖 Verificado por herramienta; 2026-07-29 22:40)
🤖 `DES.V3.005.LLM` Modal-afiche: abre desde la tarjeta, carga `?m=…&embed=1`, aplica `body.embed`, la cara mide 794px dentro del iframe de 880px y cierra con Escape. ✅ (🤖 Verificado por herramienta; 2026-07-29 22:40)
🤖 `DES.V3.006.LLM` Modal de Privacidad del footer: abre y cierra. ✅ (🤖 Verificado por herramienta; 2026-07-29 22:40)
🤖 `DES.V3.007.LLM` FAB de WhatsApp: opacidad 0 en la portada y 1 tras salir de ella, igual que el prototipo. ✅ (🤖 Verificado por herramienta; 2026-07-29 22:40)
🤖 `DES.V3.008.LLM` Marca de agua del isotipo: ninguna en Inicio; una en Sucursales, Convenios y Familia ZK; dos en Nosotros y Equipo (portada + sello de cierre), según el handoff. ✅ (🤖 Verificado por herramienta; 2026-07-29 22:40)
🤖 `DES.V3.009.LLM` `astro check` sin errores y `npm run build` local en verde (8 páginas). ✅ (🤖 Verificado por herramienta; 2026-07-29 22:40)
🧑 `DES.V3.010.HUM` Revisión visual del director sobre el sitio desplegado. 🔲
🧑 `DES.V3.011.HUM` Confirmación de horarios, convenios y WhatsApp de Dirección Clínica. 🔲

---

## Verificación de la versión móvil (2026-07-30)

> La adaptación no se declaró leyendo CSS: se midió y se capturó ejecutando el sitio en
> emulación táctil, y se contrastó el escritorio contra un worktree de git en el commit
> anterior. Ref: MASTER-SPEC §7.1.1, USER-DECISIONS UD-012, UD-013 y UD-014.

🤖 `RSP.FN.001.LLM` Las media queries se evalúan contra el viewport físico y no contra el `zoom` de la raíz: `@media (max-width: 1024px) { html { zoom: 1 } }` no realimenta el breakpoint. Comprobado en 15 anchos entre 320 y 1440px. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `RSP.FN.002.LLM` El zoom base pasa de 0.8 a 1 exactamente en el límite: 1025px dibuja a 0.8, 1024px a 1. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `RSP.FN.003.LLM` Menú móvil: bajo 900px la navegación se oculta y aparece el botón; sobre 900px al revés. El panel abre, bloquea el scroll de fondo, cierra con Escape y el header sigue sticky tras desplazar la página. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `RSP.FN.004.LLM` Cero scroll horizontal en las 7 páginas a 320, 375, 414, 768 y 1024px (35 combinaciones). ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `RSP.FN.005.LLM` Ningún `a` ni `button` bajo 44px de alto en esas mismas 35 combinaciones. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `RSP.FN.006.LLM` Ningún texto bajo 13px en esas mismas 35 combinaciones. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `RSP.FN.007.LLM` Interacciones vivas en emulación táctil: modal del afiche (abre, carga `?m=…&embed=1`, cierra con Escape), flechas y miniaturas de galería, filtro de equipo y popover de agenda. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `RSP.FN.008.LLM` El afiche conserva su medida física A4 en impresión mientras fluye a una columna en pantalla: los 4 folletos generan 2 páginas de 794x1123px, y las 8 páginas resultantes son idénticas píxel a píxel a las del commit anterior tras rasterizar los PDF a 100dpi. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `RSP.FN.012.LLM` Ninguna regla de la capa responsiva alcanza al papel: toda media query está acotada con `screen and`. Una hoja A4 mide 794px de ancho en CSS y cae dentro del breakpoint de 1024px, así que sin esa cláusula lo pensado para un teléfono se aplicaría al imprimir. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `RSP.FN.013.LLM` Teléfono en horizontal (812x375 y 667x375) e iPad en horizontal (1024x768): sin scroll horizontal; el panel del menú desplaza y su último elemento queda alcanzable pese a los 313px de alto disponibles. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `RSP.FN.009.LLM` **El escritorio quedó idéntico píxel a píxel al commit anterior**: 21 comparaciones de página completa a 1280, 1440 y 1920px contra un worktree en `HEAD`, con animaciones y transiciones congeladas para que la captura sea determinista. Es la contrapartida verificable de la regla de la capa: fuera del breakpoint no existe ninguna regla nueva. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `RSP.FN.010.LLM` Jerarquía de encabezados sin saltos: los títulos de columna del footer pasaron de `<h4>` a `<h3>`, que venían tras un `<h2>` en las 7 páginas. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `RSP.FN.011.LLM` `astro check` sin errores ni advertencias y `npm run build` en verde (8 páginas). ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🧑 `RSP.AV.010.HUM` El menú móvil se siente natural y el acceso a contacto es evidente. 🔲
🧑 `RSP.AV.011.HUM` Revisión del director sobre un teléfono real, incluido el recorrido completo de las 7 páginas. 🔲

### Historial de esta verificación

`RSP.FN.008.LLM` estuvo marcado como aprobado antes de haberse ejecutado: se dio por buena
la salida impresa del afiche sin comprobarla. Al verificarlo de verdad apareció el defecto
que corrigió `RSP.FN.012.LLM`. Queda anotado porque el valor de este documento depende de
que un tilde signifique que la comprobación se corrió, no que se esperaba que pasara.


---

## Verificación del material gráfico nuevo (2026-08-01)

> Ref: USER-DECISIONS UD-018 y UD-019.

🤖 `CONT.CR.026.LLM` Los 13 retratos del equipo son el set de estudio, normalizados a la misma proporción, escala de rostro y aire superior. Cargan sin fallo en escritorio y en teléfono; el filtro por sede sigue operando (12 fichas a 4) y el contador marca 13. ✅ (🤖 Verificado por herramienta; 2026-08-01 10:58)
🤖 `CONT.IN.008.LLM` El material gráfico nuevo no expone datos de terceros: los retratos son recortes sin fondo, sin patentes, carteles ni personas ajenas al equipo, y en el render del kit los campos de la ficha (paciente titular, RUT, fecha de inicio, vigencia, canal de contacto) están en blanco. ✅ (🤖 Verificado por herramienta; 2026-08-01 10:52)
🧑 `CONT.CR.027.HUM` El director aprueba el tratamiento de los retratos y la ubicación elegida para el render del kit. La ubicación la decidió el agente por delegación explícita, no el cliente. 🔲

### Límites declarados de esta verificación

- Toda la medición corre sobre Chromium en emulación táctil. No se probó en Safari de iOS
  ni en un dispositivo físico: `RSP.AV.011.HUM` existe justamente por eso.
- La revisión visual cubre las 7 páginas y el afiche a 375px, y además 320px en Inicio y
  768px en Inicio y Equipo. No se revisó captura por captura cada página en cada ancho: en
  los anchos no revisados visualmente el respaldo es la medición automática.
- El umbral de 13px para el texto y el de 44px para los controles son los del handoff. Los
  enlaces dentro de un párrafo quedan excluidos del mínimo de 44px a propósito: agrandarlos
  rompería el interlineado del texto que los contiene.
- La comparación de escritorio congela animaciones y transiciones. Sin eso las capturas no
  son deterministas y las diferencias bailan entre corridas por el fade de entrada del
  split de sedes y por el observador que muestra el FAB.

---

## Verificación del split de sedes en táctil y del estado pendiente (2026-07-30)

🤖 `RSP.FN.014.LLM` Un toque real sobre una mitad del split de sedes abre su ficha de contacto y la deja abierta. Antes el navegador sintetizaba `mouseenter` antes del `click` del mismo toque y la ficha se cerraba sola. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:15)
🤖 `RSP.FN.015.LLM` La ficha abierta no queda recortada por el `clip-path` del panel: el botón de WhatsApp cae dentro del recorte a 320 y 375px. Antes sobresalía entre 13 y 29px. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:15)
🤖 `RSP.FN.016.LLM` En escritorio el split conserva su comportamiento previo, verificado paso a paso: hover abre y desplaza la diagonal, salir del área cierra, click alterna, y el foco por programa no activa. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:20)
🤖 `NAV.FN.001.LLM` Una ruta marcada en `RUTAS_PENDIENTES` no deja ningún enlace vivo hacia ella en el sitio compilado. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `NAV.FN.002.LLM` Los accesos a una ruta pendiente se renderizan como `<span>` con `aria-disabled="true"`, fuera del orden de tabulación y con el aspecto convencional de deshabilitado. Los cuatro accesos (header, menú móvil, índice del footer y celda de Inicio) cumplen. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `NAV.FN.003.LLM` Una ruta pendiente queda fuera del `sitemap.xml` y sirve `robots: noindex`; ninguna otra página lleva `noindex`. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:47)
🤖 `NAV.FN.004.LLM` La página pendiente sigue existiendo y respondiendo por URL directa, para poder revisarla antes de habilitarla. ✅ (🤖 Verificado por herramienta; 2026-07-30 20:52)
🧑 `NAV.AV.001.HUM` El estado deshabilitado se lee como "sección en preparación" y no como un error del sitio. 🔲


---

## Verificación de las correcciones del 2026-07-31

> Añadida por `/document` y no por `/derive`: son promesas ya verificadas en esta sesión
> que quedaban sin check que las reclamara. Se reutilizan los actores existentes; no se
> introduce taxonomía nueva. Ref: USER-DECISIONS UD-016 y UD-017.

🤖 `CONT.IN.001.LLM` Ninguna fotografía publicada muestra una patente de vehículo legible. Las 32 fotos del sitio (19 de sede y 13 retratos) se revisaron una por una; las 4 patentes visibles quedaron difuminadas, más las 3 ya tratadas. ✅ (🤖 Verificado por herramienta; 2026-07-31 14:45)
🤖 `CONT.IN.002.LLM` Ninguna fotografía publicada muestra carteles ni marcas de terceros ajenos a Clínica ZK: cartel del hostal vecino, dos afiches de servicio técnico, una placa de medio de pago y dos logos de isapre. La señalética de ZK y los diplomas del propio equipo quedan intactos. ✅ (🤖 Verificado por herramienta; 2026-07-31 14:45)
🤖 `CONT.IN.003.LLM` Ninguna fotografía publicada muestra la cara de una persona que no sea del equipo clínico. ✅ (🤖 Verificado por herramienta; 2026-07-31 14:45)
🤖 `CONT.IN.004.LLM` La redacción de las fotografías es reproducible: `tools/difuminar-fotos.py` declara cada zona, su motivo y lo que se decidió no tapar, y permite reaplicarla si una foto se reimporta desde el handoff. ✅ (🤖 Verificado por herramienta; 2026-07-31 15:35)
🤖 `CONT.CR.025.LLM` La fachada de Los Ángeles publicada es la fotografía real del local, no la versión retocada con IA que traía el handoff. Verificado comparando el recurso servido en producción contra el generado por el build. ✅ (🤖 Verificado por herramienta; 2026-07-31 14:05)

🤖 `UIX.FN.005.LLM` El acceso flotante de WhatsApp deja elegir sucursal en lugar de llevar a un solo número. Los dos enlaces apuntan a números distintos, conservan el mensaje prellenado de cada página y salen con `target="_blank" rel="noopener"`. Verificado en las 6 páginas que lo llevan, a 320, 375 y 1440px. ✅ (🤖 Verificado por herramienta; 2026-07-31 13:58)
🤖 `UIX.FN.006.LLM` Al cambiar de foto en una galería, la foto que sale no se desvanece: el fundido acompaña a la que entra. Medido con la red limitada a 400 KB/s, la opacidad de la saliente se mantiene en 1.00 y la nueva aparece en menos de 65ms. ✅ (🤖 Verificado por herramienta; 2026-07-31 15:22)
🤖 `UIX.FN.007.LLM` Una ráfaga de toques en la galería avanza tantas fotos como toques, sin descoordinar contador, pie y miniatura, y el salto de la primera a la última funciona en ambos sentidos. Verificado en las dos galerías, en escritorio y teléfono. ✅ (🤖 Verificado por herramienta; 2026-07-31 15:22)
🤖 `UIX.FN.008.LLM` El popover de agenda no se desplaza al abrirse. La animación de entrada conserva el centrado del elemento; el salto medido pasó de 150px a 0, en escritorio y en teléfono. ✅ (🤖 Verificado por herramienta; 2026-07-31 14:33)

🧑 `CONT.IN.005.HUM` La clínica confirma si existe consentimiento de las personas retratadas en la sala de espera. **Respondido el 2026-07-31: no lo tiene.** La redacción de esas caras queda como obligatoria y no reversible. ✅ (🧑 Confirmado por el usuario; 2026-07-31 20:05)
🧑 `CONT.IN.006.HUM` La clínica confirma si los convenios cuyos logos aparecen en el pendón de recepción siguen vigentes. De ello depende si esas dos zonas siguen difuminadas. 🔲
🤖 `CONT.IN.007.LLM` El historial del repositorio no sirve ninguna fotografía sin redactar. Verificado clonando de nuevo desde GitHub: ninguna de las 8 fotos tiene en ningún commit una versión distinta a la publicada, y el bundle de diseño no es alcanzable desde ninguno. ✅ (🤖 Verificado por herramienta; 2026-07-31 20:18)

### Límites declarados de esta verificación

- `RSP.FN.014` y `RSP.FN.015` se comprobaron en emulación táctil de Chromium, no en hardware.
  La distinción hover/táctil depende de `matchMedia('(hover: hover)')`, cuyo valor real en un
  navegador de escritorio con pantalla táctil no se probó.
- `NAV.FN.001` cuenta enlaces en el HTML compilado. Un enlace construido en tiempo de
  ejecución por JavaScript no sería detectado por esa cuenta; hoy no existe ninguno.
- `CONT.IN.001` a `CONT.IN.003` se apoyan en una revisión visual de las 32 fotografías hecha
  por el agente, ampliando cada zona sospechosa. No hubo detección automática de patentes ni
  de rostros: si una foto nueva entra al repositorio sin pasar por el manifiesto, ningún
  control la detendría.
- `CONT.CR.025` verifica que la fotografía publicada es la original del local. No verifica que
  ninguna otra imagen del sitio venga retocada: eso sigue siendo juicio humano.
- `CONT.IN.007` alcanza al historial del repositorio, no a lo que GitHub conserve fuera de él.
  Comprobado que `api.github.com/.../git/blobs/<sha>` todavía entrega los blobs viejos: quedan
  inalcanzables desde cualquier commit, pero recuperables por quien ya conozca su SHA, hasta
  que GitHub recolecte. Cerrar eso exige un ticket a GitHub Support desde la cuenta dueña.
