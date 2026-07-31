# REPOMAP: Clínica ZK

> Generado: 2026-07-30 (sincronizado por `/document`)
> Propósito: Matriz de enrutamiento. Define cuándo la IA está autorizada a leer cada directorio o archivo.

## Matriz de enrutamiento

| Directorio / Archivo | Naturaleza | Cuándo consultarlo |
|---|---|---|
| `.agents/` | **[Gobernanza activa]** Reglas, skills, workflows y plantillas que definen el comportamiento del agente. | **OBLIGATORIO.** Consultar `01-behavior.md` al inicio de sesión; cargar el resto dinámicamente según los disparadores de `[RULE: DYNAMIC CONTEXT LOAD]`. |
| `docs/MASTER-SPEC.md` | **[Axioma de dominio]** Especificación del proyecto y verdad arquitectónica. | Cada sesión. Todo el código debe trazar a este documento. |
| `docs/TODO.md`, `docs/MEMORY.md`, `docs/USER-DECISIONS.md`, `docs/CHANGELOG.md`, `docs/VERIFICATION.md`, `docs/RULES.md`, `docs/REPOMAP.md` | **[Eje documental]** Seguimiento de tareas, heurísticas, decisiones humanas, changelog, verificación, reglas operativas y esta matriz. | Al actualizar el estado de tareas, registrar decisiones, agregar heurísticas o verificar cumplimiento. |
| `src/pages/` | **[Rutas]** Las 6 páginas del sitio (`index`, `familia-zk/index`, `sucursales`, `equipo-clinico`, `nosotros`, `convenios`), más `familia-zk/afiche` (parametrizada por querystring) y `404`. | Al agregar o modificar rutas. |
| `src/components/` | **[Componentes de UI]** Componentes Astro organizados por rol: `core/` (SectionHeader), `content/` (tarjetas, galería, afiche, acordeones, split de sedes), `site/` (header con menú móvil, footer, FAB). | Al modificar interfaz o layout. |
| `src/layouts/` | **[Layouts]** Layout base: metas de SEO, fuentes, `noindex` opcional, e importación de `global.css` y de la capa responsiva en ese orden. | Al modificar la estructura general de la página o el SEO. |
| `src/data/` | **[Datos estáticos]** Un módulo por dominio de contenido: `contacto`, `navegacion` (incluye `RUTAS_PENDIENTES`), `especialidades`, `membresias`, `afiche`, `faq`, `equipo`, `sucursales`. Copia literal del `renderVals()` de cada archivo de diseño. | Al actualizar textos, especialidades, membresías, equipo, galerías, preguntas frecuentes o habilitar una sección pendiente. |
| `src/styles/tokens/` | **[Design System]** Custom properties CSS por categoría (colores, tipografía, espaciado, geometría, motion), alineadas con el manual de marca. | Al modificar tokens visuales. |
| `src/styles/global.css` | **[Estilos base]** Reset, estilos base, zoom base del sitio y su excepción bajo 1024px, y la clase de sección pendiente. | Al modificar estilos globales o el zoom base. |
| `src/styles/responsive/` | **[Capa responsiva]** Adaptación a tablet y teléfono, un archivo por página más `base`, `chrome`, `componentes` y `afiche`. Toda regla vive dentro de una media query acotada con `screen and`. Ver MASTER-SPEC §7.1.1 antes de tocarla. | Al ajustar el comportamiento en tablet o teléfono. Nunca para cambiar el escritorio. |
| `src/lib/` | **[Utilidades]** Helpers de build (`imagenes.ts`: mapas de fotos, retratos y marca para astro:assets). | Al ajustar la optimización de imágenes o helpers compartidos. |
| `src/assets/`, `src/icons/` | **[Recursos estáticos]** Logos de marca (`brand/`), fotos de sedes (`fotos/`), retratos del equipo (`equipo/`) e íconos. El glob es eager: una imagen sin uso igual se copia al build. | Al actualizar recursos de marca o imágenes. |
| `public/` | **[Archivos estáticos]** Servidos tal cual: favicon, `robots.txt` y `CNAME` del dominio. | Al agregar archivos de raíz o cambiar el dominio. |
| `.github/workflows/` | **[Entrega continua]** Build y publicación en GitHub Pages al hacer push a `main`. | Al cambiar el proceso de despliegue o actualizar las acciones. |
| `astro.config.mjs`, `package.json`, `tsconfig.json` | **[Configuración]** Sitio, sitemap con exclusión de rutas pendientes, dependencias y TypeScript. | Al cambiar dependencias, rutas excluidas del sitemap o configuración del build. |
| `PROGRESO.md` | **[Bitácora de sesión]** Registro de continuidad de la sesión del 2026-07-30, creado a pedido del usuario. Su contenido permanente ya está en el eje documental. | Nunca como fuente de verdad. Candidato a eliminación. |
| `dist/`, `.astro/` | **[Salida de build]** Sitio estático generado y caché de Astro. | Nunca. Se regeneran en cada build. |
| `*.zip` en la raíz, `propuestas/` | **[Ruido]** Bundles de diseño originales y documentos comerciales. Ignorados por git salvo un ZIP histórico. | Sólo al necesitar el handoff original como fuente de verdad de un diseño. |
