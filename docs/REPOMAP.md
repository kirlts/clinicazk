# REPOMAP: Clínica ZK

> Generado: 2026-07-29  
> Propósito: Matriz de enrutamiento. Define cuándo la IA está autorizada a leer cada directorio o archivo.

## Matriz de enrutamiento

| Directorio / Archivo | Naturaleza | Cuándo consultarlo |
|---|---|---|
| `.agents/` | **[Gobernanza activa]** Reglas, skills, workflows y plantillas que definen el comportamiento del agente. | **OBLIGATORIO.** Consultar `01-behavior.md` al inicio de sesión; cargar el resto dinámicamente según los disparadores de `[RULE: DYNAMIC CONTEXT LOAD]`. |
| `docs/MASTER-SPEC.md` | **[Axioma de dominio]** Especificación del proyecto y verdad arquitectónica. | Cada sesión. Todo el código debe trazar a este documento. |
| `docs/TODO.md`, `docs/MEMORY.md`, `docs/USER-DECISIONS.md`, `docs/CHANGELOG.md`, `docs/VERIFICATION.md`, `docs/RULES.md` | **[Eje documental]** Seguimiento de tareas, heurísticas, decisiones humanas, changelog, verificación y reglas operativas. | Al actualizar el estado de tareas, registrar decisiones, agregar heurísticas o verificar cumplimiento. |
| `src/` | **[Código fuente]** Todo el código de la aplicación. | Al implementar funcionalidades, corregir errores o refactorizar. |
| `src/components/` | **[Componentes de UI]** Componentes Astro organizados por rol: `core/` (SectionHeader), `content/` (tarjetas, galería, afiche, FAQ), `site/` (header, footer, FAB). | Al modificar interfaz o layout. |
| `src/data/` | **[Datos estáticos]** Un módulo por dominio de contenido: `contacto`, `navegacion`, `especialidades`, `membresias`, `afiche`, `faq`, `equipo`, `sucursales`. Copia literal del `renderVals()` de cada archivo de diseño. | Al actualizar textos, especialidades, membresías, equipo, galerías o preguntas frecuentes. |
| `src/lib/` | **[Utilidades]** Helpers de build (`imagenes.ts`: mapas de fotos, retratos y marca para astro:assets). | Al ajustar la optimización de imágenes o helpers compartidos. |
| `src/styles/` | **[Design System]** Custom properties CSS y estilos globales alineados con el manual de marca (incluye el zoom base). | Al modificar tokens visuales o estilos globales. |
| `src/assets/` | **[Recursos estáticos]** Logos de marca (`brand/`), fotos de sedes (`fotos/`) y retratos del equipo (`equipo/`). El glob es eager: una imagen sin uso igual se copia al build. | Al actualizar recursos de marca o imágenes. |
| `src/pages/` | **[Rutas]** Las 6 páginas del sitio (`index`, `familia-zk/index`, `sucursales`, `equipo-clinico`, `nosotros`, `convenios`), más `familia-zk/afiche` (parametrizada por querystring) y `404`. | Al agregar o modificar rutas. |
| `src/layouts/` | **[Layouts]** Componente de layout base de la página. | Al modificar la estructura general de la página. |
| `public/` | **[Archivos estáticos]** Archivos servidos tal cual, sin procesar. | Al agregar favicon, robots.txt u otros archivos de raíz. |
| `dist/` | **[Salida de build]** Sitio estático generado. | Nunca. Se regenera en cada build. |
