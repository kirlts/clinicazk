# TODO: Clínica ZK v1.0.0

> Direct traceability: each task references checks from `VERIFICATION.md`.

## Kairós Symbol Legend

| Symbol | Meaning |
|---|---|
| 🤖 | Check verifiable by AI/automated tool |
| 🧑 | Check requiring human verification |
| 🤖🧑 | Check pre-verifiable by AI, final human validation |
| ⏳ | In progress |
| 🔲 | Pending |
| 🚨 | Critical block |

---

## [EPIC-001] Fundación del sitio

> Ref: MASTER-SPEC §1, §2, §3

### [TASK-001] Crear estructura del proyecto Astro + tokens de diseño

> Ref: MASTER-SPEC §3, §7.1

**Covered checks:** `DEV.FN.001.LLM`, `DEV.FN.002.LLM`

- [x] Inicializar proyecto Astro v7 con TypeScript `2026-07-09`
- [x] Definir tokens de color en `src/styles/tokens/colors.css` `2026-07-09`
- [x] Definir tokens de tipografía, espaciado, geometría y motion `2026-07-09`
- [x] Configurar `astro.config.mjs` con sitemap y base URL `2026-07-09`

### [TASK-002] Implementar layout base, header y footer

> Ref: MASTER-SPEC §6

**Covered checks:** `DEV.FN.003.LLM`, `UIX.AV.001.HUM`

- [x] Crear Layout.astro con SEO, metas, fuentes `2026-07-09`
- [x] Implementar SiteHeader con navegación responsive `2026-07-09`
- [x] Implementar SiteFooter con datos de contacto y redes `2026-07-09`
- [x] Implementar WhatsAppFab flotante `2026-07-09`

### [TASK-003] Implementar Hero con carrusel

> Ref: MASTER-SPEC §6 (Reference atmosphere)

**Covered checks:** `UIX.FN.004.LLM`, `UIX.AV.005.HUM`

- [x] Crear componente Hero con slides configurable `2026-07-09`
- [x] Slides con lead, accent, sub, CTA `2026-07-09`

### [TASK-004] Implementar sección de especialidades

> Ref: MASTER-SPEC §6

**Covered checks:** `DEV.FN.006.LLM`

- [x] Crear componente Specialties con datos de site.ts `2026-07-09`
- [x] 5 especialidades: Ortodoncia, Periodoncia, Odontopediatría, Estética dental, Implantes `2026-07-09`

---

## [EPIC-002] Membresías Familia ZK

> Ref: MASTER-SPEC §6, §7.3; Drive: Manual Interno Campaña Membresías

### [TASK-005] Implementar sección de membresías con tarjetas

> Ref: MASTER-SPEC §6 (MembershipCard)

**Covered checks:** `DEV.FN.007.LLM`

- [x] Crear sección Memberships con 4 tarjetas `2026-07-09`
- [x] Tarjetas: Anticipa, Familia, Seguimiento, Total con datos de site.ts `2026-07-09`

### [TASK-006] Implementar PromoBanner "Una nueva forma de cuidarnos"

> Ref: MASTER-SPEC §6 (PromoBanner)

**Covered checks:** `DEV.FN.008.LLM`

- [x] Crear PromoBanner con copy de campaña `2026-07-09`

### [TASK-007] Implementar página de detalle de membresía

> Ref: MASTER-SPEC §7.2, §7.3; Drive: Afiches membresías PDF

**Covered checks:** `DEV.FN.009.LLM`, `UIX.AV.010.HUM`

- [x] Crear ruta dinámica `membresias/[membership].astro` `2026-07-09`
- [x] Cargar datos detallados desde `membershipDetails.ts` `2026-07-09`
- [x] Implementar MembershipPoster (poster descargable) `2026-07-09`
- [x] Mostrar ruta de cuidado en etapas, beneficios, perfil ideal `2026-07-09`

---

## [EPIC-003] Sucursales, contacto e información institucional

> Ref: MASTER-SPEC §6; Drive: Bitácora, Transcripciones

### [TASK-008] Implementar componente de sucursales (BranchSplit)

> Ref: MASTER-SPEC §6 (BranchSplit); Reunión 15-07

**Covered checks:** `DEV.FN.011.LLM`, `UIX.AV.012.HUM`

- [x] Crear BranchSplit con dos caras (LA / Pucón) `2026-07-09`
- [x] Diferenciación visual por sucursal (teal LA, purple Pucón) `2026-07-09`

### [TASK-009] Implementar sección Nosotros

> Ref: MASTER-SPEC §6; Bitácora 15-07 (texto identitario pendiente)

**Covered checks:** `DEV.FN.013.LLM`, `CONT.CR.014.HUM`

- [x] Crear sección AboutUs con placeholder `2026-07-09`
- [ ] **PENDIENTE:** Agregar texto identitario definitivo de la clínica (Bernielli)

### [TASK-010] Implementar sección de convenios

> Ref: MASTER-SPEC §6; Bitácora

**Covered checks:** `DEV.FN.015.LLM`, `CONT.CR.016.HUM`

- [x] Crear sección Agreements con placeholder `2026-07-09`
- [ ] **PENDIENTE:** Confirmar listado de convenios vigentes (Bernielli/Romina)

### [TASK-011] Implementar equipo médico (placeholder)

> Ref: Bitácora 15-07; Transcripción reunión

**Covered checks:** `DEV.FN.017.LLM`, `CONT.CR.018.HUM`

- [x] Crear TeamPlaceholder con mensaje "Sección en preparación" `2026-07-09`
- [ ] **PENDIENTE:** Agregar fotos y datos de doctores (Bernielli subió fotos al Drive)

### [TASK-012] Implementar preguntas frecuentes (FAQ)

> Ref: MASTER-SPEC §6

**Covered checks:** `DEV.FN.019.LLM`

- [x] Crear FaqSection con acordeón `2026-07-09`
- [x] FAQs: agendar hora, urgencias, Familia ZK, convenios `2026-07-09`

### [TASK-013] Implementar formulario de contacto

> Ref: Transcripción reunión 15-07

**Covered checks:** `DEV.FN.020.LLM`, `UIX.AV.021.HUM`

- [x] Crear sección Contact con formulario `2026-07-09`
- [ ] **PENDIENTE:** Conectar formulario a servicio de email (EmailJS/Formspree)

---

## [EPIC-004] Contenido y textos definitivos

> Ref: Drive completo (Bitácora, transcripciones, manual de marca, manual DIDEMCO)

### [TASK-014] Redactar textos del sitio según manual DIDEMCO

> Ref: DIDEMCO Manual Textual Operativo; Transcripción reunión 15-07; Audios Whatsapp 10-07

**Covered checks:** `CONT.CR.022.HUM`, `CONT.CR.023.HUM`

- [ ] **PENDIENTE:** Revisar y aprobar textos del sitio (Bernielli)
- [ ] **PENDIENTE:** Texto identitario para sección Nosotros
- [ ] **PENDIENTE:** Texto descriptivo por especialidad
- [ ] **PENDIENTE:** Asegurar tono DIDEMCO (prevención, anticipación, orden)

### [TASK-015] Subir imágenes reales de sucursales

> Ref: Drive: Imágenes/Los Ángeles, Imágenes/Pucón; Bitácora 15-07

**Covered checks:** `CONT.CR.024.HUM`

- [ ] **PENDIENTE:** Seleccionar e integrar fotos de Los Ángeles (13 fotos subidas)
- [ ] **PENDIENTE:** Seleccionar e integrar fotos de Pucón (10 fotos subidas)
- [ ] **PENDIENTE:** Imágenes para carrusel del Hero

---

## [EPIC-005] Despliegue y dominio

> Ref: Bitácora 09-07; Transcripción reunión 15-07

### [TASK-016] Configurar dominio clinicazk.cl

**Covered checks:** `OPS.AV.025.HUM`

- [ ] **PENDIENTE:** Conseguir/comprar dominio (Bernielli está en trámite)
- [ ] **PENDIENTE:** Configurar DNS para GitHub Pages
- [ ] **PENDIENTE:** Desplegar sitio en producción

### [TASK-017] Configurar GitHub Pages deploy

**Covered checks:** `OAS.AV.026.LLM`

- [x] Configurar GitHub Pages en repo `2026-07-09`
- [x] Build y deploy automático desde CI `2026-07-09`

---

## Overall Coverage Summary

| Epic | Tasks | Status | 🤖 .LLM | 🧑 .HUM | 🤖🧑 .MIX | Total Checks |
| --- | --- | --- | --- | --- | --- | --- |
| EPIC-001 | TASK-001 a 004 | ✅ 4/4 | 6 | 2 | 0 | 8 |
| EPIC-002 | TASK-005 a 007 | ✅ 3/3 | 3 | 1 | 0 | 4 |
| EPIC-003 | TASK-008 a 013 | ⏳ 6/6 (4 done, 2 partial) | 5 | 4 | 0 | 9 |
| EPIC-004 | TASK-014 a 015 | 🔲 0/2 | 0 | 3 | 0 | 3 |
| EPIC-005 | TASK-016 a 017 | ⏳ 1/2 | 1 | 1 | 0 | 2 |
