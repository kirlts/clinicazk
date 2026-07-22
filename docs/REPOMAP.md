# REPOMAP: Clínica ZK

> Generated: 2026-07-22  
> Purpose: Routing matrix. Defines when the AI is authorized to read each directory or file.

## Routing Matrix

| Directory / File | Nature | When to Consult |
|---|---|---|
| `.agents/` | **[Active Governance]** Rules, skills, workflows, and templates that define agent behavior. | **MANDATORY.** Consult `01-behavior.md` at session start; dynamically load other files per `[RULE: DYNAMIC CONTEXT LOAD]` triggers. |
| `docs/MASTER-SPEC.md` | **[Domain Axiom]** Project specification and architectural truth. | Every session. All code must trace to this document. |
| `docs/TODO.md`, `docs/MEMORY.md`, `docs/USER-DECISIONS.md`, `docs/CHANGELOG.md`, `docs/VERIFICATION.md`, `docs/RULES.md` | **[Documentary Axis]** Task tracking, heuristics, human decisions, changelog, verification, and operational rules. | When updating task status, recording decisions, adding heuristics, or verifying compliance. |
| `src/` | **[Project Source]** All application source code. | When implementing features, fixing bugs, or refactoring. |
| `src/components/` | **[UI Components]** Astro components organized by role (core, content, sections, site). | When modifying UI or layout. |
| `src/data/` | **[Static Data]** TypeScript modules with site content (site.ts, membershipDetails.ts). | When updating site copy, specialties, memberships, galleries, or FAQs. |
| `src/lib/` | **[Helpers]** Utilidades de build (fotos.ts: mapa de imágenes para astro:assets). | When wiring image optimization or shared helpers. |
| `src/styles/` | **[Design System]** CSS custom properties and global styles aligned with brand manual (incluye el zoom base). | When modifying visual tokens or global styles. |
| `src/assets/` | **[Static Assets]** Brand logos e imágenes (brand/, fotos/ de sedes). | When updating brand assets or images. |
| `src/pages/` | **[Routes]** Astro page components. `index.astro` (single-page) y `afiche/[membership].astro` (afiche embebido del modal). | When adding or modifying page routes. |
| `src/layouts/` | **[Layouts]** Base page layout component. | When modifying the overall page structure. |
| `public/` | **[Static Files]** Unprocessed static files served directly. | When adding favicon, robots.txt, or other root-level files. |
| `dist/` | **[Build Output]** Generated static site. | Never. Regenerated on each build. |
