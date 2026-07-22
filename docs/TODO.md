# TODO: Clínica ZK v2.0.0

> Trazabilidad directa: cada tarea referencia checks de `VERIFICATION.md`.

## Leyenda de símbolos Kairós

| Símbolo | Significado |
|---|---|
| 🤖 | Check verificable por IA o herramienta automatizada |
| 🧑 | Check que requiere verificación humana |
| 🤖🧑 | Check pre-verificable por IA, validación humana final |
| ⏳ | En curso |
| 🔲 | Pendiente |
| 🚨 | Bloqueo crítico |

---

## [EPIC-001] Fundación del sitio (v1)

> Ref: MASTER-SPEC §1, §2, §3

### [TASK-001] Crear estructura del proyecto Astro + tokens de diseño

> Ref: MASTER-SPEC §3, §7.1

**Checks cubiertos:** `DEV.FN.001.LLM`, `DEV.FN.002.LLM`

- [x] Inicializar proyecto Astro v7 con TypeScript `2026-07-09`
- [x] Definir tokens de color en `src/styles/tokens/colors.css` `2026-07-09`
- [x] Definir tokens de tipografía, espaciado, geometría y motion `2026-07-09`
- [x] Configurar `astro.config.mjs` con sitemap y base URL `2026-07-09`

### [TASK-002] Implementar layout base, header y footer

> Ref: MASTER-SPEC §6

**Checks cubiertos:** `DEV.FN.003.LLM`, `UIX.AV.001.HUM`

- [x] Crear Layout.astro con SEO, metas, fuentes `2026-07-09`
- [x] Implementar SiteHeader con navegación responsive `2026-07-09`
- [x] Implementar SiteFooter con datos de contacto y redes `2026-07-09`
- [x] Implementar WhatsAppFab flotante `2026-07-09`

### [TASK-003] Implementar Hero (v1, carrusel)

> Ref: MASTER-SPEC §6

**Checks cubiertos:** `UIX.FN.004.LLM`, `UIX.AV.005.HUM`

- [x] Crear componente Hero con slides configurable `2026-07-09`
- [x] Slides con lead, accent, sub, CTA `2026-07-09`
- [x] **SUPERADO por v2:** el carrusel se reemplazó por el Hero fijo con split de sedes (ver TASK-018) `2026-07-22`

### [TASK-004] Implementar sección de especialidades (v1)

> Ref: MASTER-SPEC §6

**Checks cubiertos:** `DEV.FN.006.LLM`

- [x] Crear componente Specialties con datos de site.ts `2026-07-09`
- [x] **SUPERADO por v2:** rediseñado a índice maestro-detalle de 13 especialidades (ver TASK-019) `2026-07-22`

---

## [EPIC-002] Membresías Familia ZK

> Ref: MASTER-SPEC §6, §7.4; Drive: Manual Interno Campaña Membresías

### [TASK-005] Implementar sección de membresías con tarjetas

> Ref: MASTER-SPEC §6 (MembershipCard)

**Checks cubiertos:** `DEV.FN.007.LLM`

- [x] Crear sección Memberships con 4 tarjetas `2026-07-09`
- [x] Tarjetas: Anticipa, Familia, Seguimiento, Total con datos de site.ts `2026-07-09`
- [x] **Actualizado en v2:** cabecera centrada + intro + tarjetas estilo V2 `2026-07-22`

### [TASK-006] Implementar PromoBanner "Una nueva forma de cuidarnos"

> Ref: MASTER-SPEC §6

**Checks cubiertos:** `DEV.FN.008.LLM`

- [x] Crear PromoBanner con copy de campaña `2026-07-09`
- [x] **REMOVIDO en v2:** el diseño aprobado no incluye PromoBanner; el mensaje vive en la intro de Membresías `2026-07-22`

### [TASK-007] Implementar detalle de membresía

> Ref: MASTER-SPEC §7.2, §7.4; Drive: Afiches membresías PDF

**Checks cubiertos:** `DEV.FN.009.LLM`, `UIX.AV.010.HUM`

- [x] Crear ruta de detalle de membresía (v1) `2026-07-09`
- [x] Cargar datos detallados desde `membershipDetails.ts` `2026-07-09`
- [x] **Rediseñado en v2:** reemplazado por el modal-afiche embebido (ver TASK-020) `2026-07-22`

---

## [EPIC-003] Sucursales, contacto e información institucional

> Ref: MASTER-SPEC §6; Drive: Bitácora, Transcripciones

### [TASK-008] Implementar componente de sucursales (BranchSplit)

> Ref: MASTER-SPEC §6 (BranchSplit); Reunión 15-07

**Checks cubiertos:** `DEV.FN.011.LLM`, `UIX.AV.012.HUM`

- [x] Crear BranchSplit con dos caras (LA / Pucón) `2026-07-09`
- [x] Diferenciación visual por sucursal (teal LA, purple Pucón) `2026-07-09`
- [x] **v2:** cada foto de fachada anclada a su mitad, blurbs de sede del archivo aprobado `2026-07-22`

### [TASK-009] Implementar sección Nosotros

> Ref: MASTER-SPEC §6; Bitácora 15-07 (texto identitario pendiente)

**Checks cubiertos:** `DEV.FN.013.LLM`, `CONT.CR.014.HUM`

- [x] Crear la sección (v2: dentro de la sección Clínica, junto a Equipo) `2026-07-22`
- [ ] **PENDIENTE (Clínica ZK):** texto identitario definitivo de Nosotros (Bernielli)

### [TASK-010] Integrar convenios

> Ref: MASTER-SPEC §6; Bitácora

**Checks cubiertos:** `DEV.FN.015.LLM`, `CONT.CR.016.HUM`

- [x] **v2:** convenios integrados como fila dentro del contacto de cada sede (no como sección suelta) `2026-07-22`
- [ ] **PENDIENTE (Clínica ZK):** listado de convenios vigentes (Bernielli/Romina)

### [TASK-011] Sección Equipo

> Ref: Bitácora 15-07; Transcripción reunión

**Checks cubiertos:** `DEV.FN.017.LLM`, `CONT.CR.018.HUM`

- [x] **v2:** ficha de Equipo (Dra. Romina, dirección clínica) dentro de la sección Clínica `2026-07-22`
- [ ] **PENDIENTE (Clínica ZK):** fotos y nómina completa de especialistas por sede

### [TASK-012] Implementar preguntas frecuentes (FAQ)

> Ref: MASTER-SPEC §6

**Checks cubiertos:** `DEV.FN.019.LLM`

- [x] Crear FAQ con acordeón `2026-07-09`
- [x] **v2:** rediseño compacto a dos columnas (6 preguntas) `2026-07-22`

### [TASK-013] Implementar formulario de contacto

> Ref: Transcripción reunión 15-07

**Checks cubiertos:** `DEV.FN.020.LLM`, `UIX.AV.021.HUM`

- [x] Crear sección Contact con formulario `2026-07-09`
- [x] **v2:** formulario protagonista sobre gradiente, campos nombre/correo/teléfono/motivo/sede/mensaje, envío por `mailto:` `2026-07-22`
- [ ] **PENDIENTE:** conectar el formulario a un servicio de email (EmailJS/Formspree) para no depender del cliente de correo

---

## [EPIC-004] Contenido y textos definitivos

> Ref: Drive completo (Bitácora, transcripciones, manual de marca, manual DIDEMCO)

### [TASK-014] Redactar textos del sitio según manual DIDEMCO

> Ref: DIDEMCO Manual Textual Operativo; Transcripción reunión 15-07; Audios WhatsApp 10-07

**Checks cubiertos:** `CONT.CR.022.HUM`, `CONT.CR.023.HUM`

- [ ] **PENDIENTE (Clínica ZK):** revisar y aprobar los textos reales del sitio (Bernielli)
- [ ] **PENDIENTE (Clínica ZK):** texto identitario para Nosotros
- [ ] **PENDIENTE (Clínica ZK):** texto descriptivo por especialidad (hoy varias muestran nota honesta "en preparación")
- [ ] **PENDIENTE:** asegurar tono DIDEMCO (prevención, anticipación, orden)

### [TASK-015] Integrar fotos reales de sucursales

> Ref: Drive: Imágenes/Los Ángeles, Imágenes/Pucón; Bitácora 15-07

**Checks cubiertos:** `CONT.CR.024.HUM`

- [x] Integrar galerías por sede (6 fotos LA + 6 Pucón) optimizadas a webp `2026-07-22`
- [x] Foto de fachada por sede en el BranchSplit del hero `2026-07-22`
- [ ] **PENDIENTE (Clínica ZK):** definir si se suman más fotos y cuáles

---

## [EPIC-005] Despliegue y dominio

> Ref: Bitácora 09-07; Transcripción reunión 15-07

### [TASK-016] Configurar dominio clinicazk.cl

**Checks cubiertos:** `OPS.AV.025.HUM`

- [ ] **PENDIENTE (Clínica ZK):** conseguir/comprar dominio (Bernielli en trámite)
- [ ] **PENDIENTE:** configurar DNS para GitHub Pages
- [x] Sitio publicado en GitHub Pages (URL de proyecto) `2026-07-22`

### [TASK-017] Configurar GitHub Pages deploy

**Checks cubiertos:** `OAS.AV.026.LLM`

- [x] Configurar GitHub Pages en repo `2026-07-09`
- [x] Build y deploy automático desde CI (Node 22, withastro/action) `2026-07-22`

---

## [EPIC-006] Rediseño v2 (fidelidad con el design handoff)

> Ref: MASTER-SPEC §5, §6, §7.2, §7.3; Design handoff "Sitio Web Clínica ZK v2" (bundle de Claude Design)

### [TASK-018] Hero v2

> Ref: MASTER-SPEC §6

**Checks cubiertos:** `DEV.FN.027.LLM`, `UIX.AV.028.HUM`

- [x] h1 fijo + franja de 5 accesos rápidos a especialidades `2026-07-22`
- [x] BranchSplit a 680px con foto real por sede `2026-07-22`
- [x] Fila de cierre "Un buen tratamiento empieza por un buen diagnóstico." + botón `2026-07-22`

### [TASK-019] Especialidades maestro-detalle

> Ref: MASTER-SPEC §6

**Checks cubiertos:** `DEV.FN.029.LLM`, `UIX.AV.030.HUM`

- [x] Índice de 13 especialidades con grupos "solo en" por sede `2026-07-22`
- [x] Panel de detalle interactivo (línea de sede, descripción, contacto por sede) `2026-07-22`
- [x] Accesos rápidos del hero seleccionan especialidad `2026-07-22`

### [TASK-020] Modal-afiche de membresías

> Ref: MASTER-SPEC §7.2; Design handoff (afiche-membresia embed)

**Checks cubiertos:** `DEV.FN.031.LLM`, `UIX.AV.032.HUM`

- [x] AficheEmbed: folleto en hoja continua (cara A + B, sin marcos ni QR) `2026-07-22`
- [x] Página `/afiche/[m]/` con fondo transparente y cierre por postMessage/Escape `2026-07-22`
- [x] AficheModal: overlay con iframe, cierre por clic fuera/Escape/"Volver al sitio" `2026-07-22`
- [x] "Ver más" abre el modal con fallback sin JS a la página del afiche `2026-07-22`

### [TASK-021] Sección Clínica (galerías + convenios)

> Ref: MASTER-SPEC §6

**Checks cubiertos:** `DEV.FN.033.LLM`, `UIX.AV.012.HUM`

- [x] Nosotros + Equipo a dos columnas `2026-07-22`
- [x] Dos galerías gemelas por sede (flechas, contador, miniaturas) `2026-07-22`
- [x] Convenios integrados en el contacto de cada sede `2026-07-22`

### [TASK-022] Optimización de imágenes

> Ref: MASTER-SPEC §7.3

**Checks cubiertos:** `DEV.FN.034.LLM`

- [x] `src/lib/fotos.ts` con `import.meta.glob` + `getImage` a webp `2026-07-22`
- [x] Fachadas convertidas de PNG a JPG en la fuente `2026-07-22`

### [TASK-023] Fidelidad 1:1 y zoom base

> Ref: MASTER-SPEC §5; USER-DECISIONS UD-006, UD-008

**Checks cubiertos:** `UIX.AV.035.HUM`, `DEV.FN.036.LLM`

- [x] Pasada de diffing visual sección por sección contra el render de referencia `2026-07-22`
- [x] Corregir divergencias (captions de galería, disclaimer, ancho de contenedor 1520, blurbs de sede, texto de botón) `2026-07-22`
- [x] Zoom base `html { zoom: 0.8 }` con override a 1 en el afiche `2026-07-22`

### [TASK-024] Desplegar y verificar v2

> Ref: MASTER-SPEC §2

**Checks cubiertos:** `OAS.AV.026.LLM`

- [x] Build sin errores, deploy en verde y verificación en producción `2026-07-22`

---

## [EPIC-007] Pendientes coordinados y siguientes pasos

> Ref: Reunión con director de marketing 2026-07-22

### [TASK-025] Recopilar insumos de Clínica ZK tras la reunión

**Checks cubiertos:** `CONT.CR.014.HUM`, `CONT.CR.016.HUM`, `CONT.CR.018.HUM`, `CONT.CR.022.HUM`

- [ ] **PENDIENTE (Clínica ZK):** textos reales a ocupar
- [ ] **PENDIENTE (Clínica ZK):** convenios disponibles
- [ ] **PENDIENTE (Clínica ZK):** definir si se agregan más fotos
- [ ] **PENDIENTE (Clínica ZK):** contenido de la sección Equipo (fotos + nómina)
- [ ] **PENDIENTE (Clínica ZK):** texto de la sección Nosotros
- [ ] **PENDIENTE (Clínica ZK):** feedback adicional sobre la v2

### [TASK-026] Widgets de Google Maps

> Ref: USER-DECISIONS UD-009 (revierte UD-003)

**Checks cubiertos:** `Gobernanza transversal`

- [ ] **DIFERIDO:** omitido en la v2. Con dos sedes harían falta dos widgets (recargado) o un selector (complejidad injustificada). Reevaluar según feedback de Clínica ZK.

### [TASK-027] Iterar versión mobile

> Ref: USER-DECISIONS UD-002 (mobile-first)

**Checks cubiertos:** `UIX.AV.037.HUM`

- [ ] **PENDIENTE (desarrollador):** iterar la versión mobile tras la reunión del 2026-07-22

---

## Resumen general de cobertura

| Épica | Tareas | Estado | 🤖 .LLM | 🧑 .HUM | 🤖🧑 .MIX | Total checks |
| --- | --- | --- | --- | --- | --- | --- |
| EPIC-001 | TASK-001 a 004 | ✅ 4/4 | 6 | 2 | 0 | 8 |
| EPIC-002 | TASK-005 a 007 | ✅ 3/3 | 3 | 1 | 0 | 4 |
| EPIC-003 | TASK-008 a 013 | ⏳ 6/6 (3 con pendiente de contenido) | 5 | 4 | 0 | 9 |
| EPIC-004 | TASK-014 a 015 | ⏳ 1/2 (fotos integradas; textos pendientes) | 0 | 3 | 0 | 3 |
| EPIC-005 | TASK-016 a 017 | ⏳ 1/2 (deploy ok; dominio pendiente) | 1 | 1 | 0 | 2 |
| EPIC-006 | TASK-018 a 024 | ✅ 7/7 | 8 | 4 | 0 | 12 |
| EPIC-007 | TASK-025 a 027 | 🔲 0/3 (esperan insumos y reunión) | 0 | 2 | 0 | 2 |
