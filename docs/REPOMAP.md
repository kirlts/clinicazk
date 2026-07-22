# REPOMAP: Clínica ZK

> Generado: 2026-07-22  
> Propósito: Matriz de enrutamiento. Define cuándo la IA está autorizada a leer cada directorio o archivo.

## Matriz de enrutamiento

| Directorio / Archivo | Naturaleza | Cuándo consultarlo |
|---|---|---|
| `.agents/` | **[Gobernanza activa]** Reglas, skills, workflows y plantillas que definen el comportamiento del agente. | **OBLIGATORIO.** Consultar `01-behavior.md` al inicio de sesión; cargar el resto dinámicamente según los disparadores de `[RULE: DYNAMIC CONTEXT LOAD]`. |
| `docs/MASTER-SPEC.md` | **[Axioma de dominio]** Especificación del proyecto y verdad arquitectónica. | Cada sesión. Todo el código debe trazar a este documento. |
| `docs/TODO.md`, `docs/MEMORY.md`, `docs/USER-DECISIONS.md`, `docs/CHANGELOG.md`, `docs/VERIFICATION.md`, `docs/RULES.md` | **[Eje documental]** Seguimiento de tareas, heurísticas, decisiones humanas, changelog, verificación y reglas operativas. | Al actualizar el estado de tareas, registrar decisiones, agregar heurísticas o verificar cumplimiento. |
| `src/` | **[Código fuente]** Todo el código de la aplicación. | Al implementar funcionalidades, corregir errores o refactorizar. |
| `src/components/` | **[Componentes de UI]** Componentes Astro organizados por rol (core, content, sections, site). | Al modificar interfaz o layout. |
| `src/data/` | **[Datos estáticos]** Módulos TypeScript con el contenido del sitio (site.ts, membershipDetails.ts). | Al actualizar textos, especialidades, membresías, galerías o preguntas frecuentes. |
| `src/lib/` | **[Utilidades]** Helpers de build (fotos.ts: mapa de imágenes para astro:assets). | Al ajustar la optimización de imágenes o helpers compartidos. |
| `src/styles/` | **[Design System]** Custom properties CSS y estilos globales alineados con el manual de marca (incluye el zoom base). | Al modificar tokens visuales o estilos globales. |
| `src/assets/` | **[Recursos estáticos]** Logos de marca e imágenes (brand/, fotos/ de sedes). | Al actualizar recursos de marca o imágenes. |
| `src/pages/` | **[Rutas]** Páginas Astro: `index.astro` (single-page) y `afiche/[membership].astro` (afiche embebido del modal). | Al agregar o modificar rutas. |
| `src/layouts/` | **[Layouts]** Componente de layout base de la página. | Al modificar la estructura general de la página. |
| `public/` | **[Archivos estáticos]** Archivos servidos tal cual, sin procesar. | Al agregar favicon, robots.txt u otros archivos de raíz. |
| `dist/` | **[Salida de build]** Sitio estático generado. | Nunca. Se regenera en cada build. |
