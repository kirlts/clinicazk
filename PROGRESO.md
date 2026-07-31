# PROGRESO: adaptación móvil de Clínica ZK

> Documento de continuidad de la sesión del 2026-07-30.
>
> **Estado: trabajo terminado y verificado.** Los cambios están en el árbol de trabajo, sin
> commitear: el usuario no lo pidió. Este archivo puede borrarse una vez revisado el
> resultado; lo que vale a largo plazo ya quedó en `docs/`.

---

## 1. Qué se pidió

El sitio no estaba optimizado para móvil. El encargo fue dejar una **versión móvil
completa** (teléfono y tablet) con máxima autonomía, apoyándose en Playwright para capturar
y analizar. Se sumó después: arreglar también cualquier problema detectado en escritorio.

## 2. Decisiones del usuario, consultadas antes de codificar

| Tema | Decisión |
|---|---|
| Zoom base `html { zoom: .8 }` | Neutralizarlo bajo 1024px. Escritorio conserva 0.8. |
| Libertad de diseño | Puede cambiar el patrón de un componente en móvil. Copy, colores, tipografía y orden de secciones intocables. |
| Menú móvil | Hamburguesa con el CTA "Contacto" siempre visible. |
| Alcance | Teléfono, tablet, el afiche imprimible y actualizar `docs/`. |

Quedaron registradas como **UD-012, UD-013 y UD-014** en `docs/USER-DECISIONS.md`.

## 3. El obstáculo técnico y la arquitectura

El sitio es un port 1:1 de un handoff de Claude Design: **el layout de escritorio vive en
atributos `style` inline**, que son la especificación aprobada. Un `@media` normal no puede
tocarlos y editarlos rompería la trazabilidad con el diseño.

Solución: una **capa responsiva aparte** en `src/styles/responsive/`, importada desde
`Layout.astro` después de `global.css`. Toda regla vive dentro de una media query, así que
fuera del breakpoint la capa no existe y el escritorio queda demostrablemente intacto. Toda
declaración que pise un inline lleva `!important`, de forma uniforme. En los `.astro` sólo
se **agregan** atributos `class` como gancho.

Documentado en detalle en **MASTER-SPEC §7.1.1**, con los breakpoints (≤1024 tablet, ≤900
colapso del header, ≤767 teléfono, ≤380 teléfono angosto) y el dato empírico de que las
media queries se evalúan contra el viewport físico y no contra el `zoom` de la raíz.

## 4. Resultado verificado

- **Cero scroll horizontal, ningún control bajo 44px, ningún texto bajo 13px** en las 7
  páginas a 320, 375, 414, 768 y 1024px. 35 combinaciones, cero incidencias.
- **Escritorio idéntico píxel a píxel** al commit anterior: 21 comparaciones de página
  completa a 1280, 1440 y 1920px contra un worktree de git en `HEAD`, con animaciones
  congeladas para que la captura sea determinista.
- **Copy intacto**: se comparó el texto visible de los 16 `.astro` modificados contra
  `HEAD`. Cambio cero, salvo el panel del menú móvil, que reutiliza rótulos ya existentes
  (los 6 links de navegación y los dos accesos de WhatsApp de Inicio).
- **Interacciones probadas en emulación táctil**: menú, modal del afiche, galerías, filtro
  de equipo (12 fichas a 4), popover de agenda, carrusel de membresías, selector de
  especialidades con desplazamiento al panel.
- `astro check`: 0 errores, 0 advertencias. Build en verde, 8 páginas.

## 5. Lo que apareció al revisar de nuevo

Ante la pregunta "¿fuiste exhaustivo?" se hizo una segunda pasada, y no lo había sido:

- **Se había marcado como verificado un check que nunca se corrió.** `RSP.FN.008.LLM`
  afirmaba que el afiche conservaba su medida A4 al imprimir. Al comprobarlo de verdad
  apareció un **defecto real introducido por esta misma capa**: `page.pdf()` maqueta a
  794px de ancho (A4 en CSS), que cae dentro del breakpoint de 1024px, así que **toda la
  capa responsiva se aplicaba al imprimir**. El `overflow-wrap: break-word` partía el lema
  de ZK Seguimiento por la mitad de una palabra: "ACOMPAÑAMIENT / O CONSTANTE".
  Corregido acotando cada media query de la capa a `screen and (max-width: …)`. Verificado
  después: los 4 folletos generan PDF idénticos píxel a píxel a los del commit anterior.
- **Faltaba revisión visual**: nunca se habían abierto las capturas de Nosotros ni del 404,
  ni ninguna a 320px. Revisadas; ambas correctas.
- **Faltaba la orientación horizontal**: probada a 812x375, 667x375 y 1024x768. Sin scroll
  horizontal y con el panel del menú desplazable.
- **Un gancho de clase muerto** (`zk-suc-cabecera`), agregado y nunca usado por ninguna
  regla. Eliminado.

La lección quedó anotada en el propio código (cabecera de `base.css`, convención 3) y en
MASTER-SPEC §7.1.1, para que no vuelva a pasar.

## 6. Dos defectos más, encontrados al integrar

1. **Colisión de nombres de clase.** `.zk-nav` es a la vez la navegación del header y las
   flechas de la galería de sucursales. La regla del menú móvil las ocultaba en el único
   dispositivo donde son imprescindibles. El selector se acotó a `.zk-header-fila .zk-nav`.
2. **Blowout de CSS Grid en Sucursales.** `grid-template-columns: 1fr` equivale a
   `minmax(auto, 1fr)`, y ese `auto` dejaba que el ancho mínimo de la tira de miniaturas
   (649px) inflara la pista dentro de una pantalla de 327px. Corregido con `minmax(0, 1fr)`
   más `min-width: 0` en los hijos.

## 7. Defecto de escritorio corregido

Los títulos de columna del footer eran `<h4>` después de un `<h2>`: saltaban un nivel de
jerarquía en las 7 páginas. Pasados a `<h3>`, sin cambio visual (el tamaño lo fija un
`style` inline y `base.css` trata igual a h1-h4).

## 8. Nota sobre los subagentes

Se lanzaron ocho subagentes en paralelo, uno por página o familia de componentes, cada uno
dueño exclusivo de sus archivos. **Los ocho murieron por límite de sesión de la API**, cada
uno a media tarea: seis alcanzaron a escribir su CSS y dos no (`sucursales.css` y
`componentes.css` quedaron vacíos). Esos dos se escribieron después en la sesión principal,
junto con la pasada de integración y toda la verificación.

## 9. Qué queda pendiente

- **Revisión humana en un teléfono real** (`RSP.AV.010.HUM`, `RSP.AV.011.HUM`). Toda la
  medición corrió sobre Chromium en emulación táctil: no se probó en Safari de iOS ni en
  hardware físico.
- Los pendientes de contenido que ya venían de antes (horarios, convenios y sus logos,
  WhatsApp de Dirección Clínica, contenido de Privacidad, imágenes por especialidad).
- Commit: no se hizo porque no se pidió.

## 10. Herramientas de verificación

Vivieron en el scratchpad de la sesión y no se versionaron. Si hay que rehacerlas:

- `mob.mjs` — captura una ruta a pantalla completa en emulación táctil, trocea la imagen en
  tiras de 500px de ancho legibles con la herramienta Read, y reporta desbordes
  horizontales, hit targets bajo 44px y texto bajo 13px. Detalle importante: el detector
  ignora lo que vive dentro de un contenedor que recorta o scrollea, porque un carrusel o
  una tira de miniaturas desbordan a propósito.
- `paridad.mjs` — levanta un worktree de git en el commit anterior en otro puerto y compara
  las capturas de escritorio píxel a píxel. Congela animaciones y transiciones y oculta el
  FAB: sin eso las diferencias bailan entre corridas y no se puede concluir nada.
- `print.mjs` — genera el PDF del afiche en las 4 membresías contra ambos puertos y compara
  la salida. **Es el que encontró el defecto de impresión**, que ninguna inspección en
  pantalla mostraba: la comparación útil no es la del PDF crudo (su metadata cambia en cada
  generación, 2 a 6 bytes de ruido) sino la de los PDF rasterizados con `pdftoppm`.
- Los tres ocultan la barra de desarrollo de Astro, que flota sobre el contenido y en una
  captura parece un defecto del sitio.
