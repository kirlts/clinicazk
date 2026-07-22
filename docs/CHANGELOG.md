# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Pending
- Textos reales del sitio y descripciones por especialidad (Clínica ZK).
- Listado de convenios vigentes (Clínica ZK).
- Contenido de la sección Equipo: fotos y nómina de especialistas (Clínica ZK).
- Texto identitario de la sección Nosotros (Clínica ZK).
- Definición de si se agregan más fotos (Clínica ZK).
- Conexión del formulario de contacto a un servicio de email (hoy usa mailto:).
- Iteración de la versión mobile (tras la reunión del 22-07).
- Dominio clinicazk.cl (pendiente de trámite).
- Widgets de Google Maps: diferidos por complejidad con dos sedes (reevaluar).

## [2.0.0] - 2026-07-22

> Rediseño completo alineado 1:1 con el design handoff "Sitio Web Clínica ZK v2".

### Added
- Hero fijo con h1, franja de accesos rápidos a especialidades y fila de cierre "Un buen tratamiento empieza por un buen diagnóstico.".
- Especialidades como índice maestro-detalle interactivo (13 especialidades, agrupadas por sede, con botones de contacto por sede).
- Sección Clínica que reúne Nosotros, Equipo y dos galerías gemelas por sede (flechas, contador, miniaturas) con convenios integrados en el contacto de cada sede.
- Modal-afiche: "Ver más" abre el folleto de la membresía en hoja continua dentro de un iframe (`/afiche/[m]/`), con cierre por clic fuera, Escape o "Volver al sitio" (postMessage).
- Optimización de imágenes a webp con `astro:assets`; galerías por sede con fotos reales.
- Zoom base del sitio (`html { zoom: 0.8 }`): el 100% por defecto equivale al 80% preferido por el director.

### Changed
- Membresías: cabecera centrada, párrafo introductorio y tarjetas estilo V2.
- FAQ: rediseño compacto a dos columnas (6 preguntas).
- Contacto: formulario protagonista sobre gradiente, con WhatsApp por sede; campos ampliados (nombre, correo, teléfono, motivo, sede, mensaje).
- BranchSplit: foto real por sede anclada a su mitad; blurbs de sede del archivo aprobado.
- Ancho máximo del sitio a `min(1520px, 94vw)` para igualar el layout del diseño v2.

### Removed
- PromoBanner, AboutUs, Agreements y TeamPlaceholder (fusionados o descartados en el diseño v2).
- Ruta `/membresias/[m]/` y MembershipPoster (reemplazados por el modal-afiche y `/afiche/[m]/`).

## [1.0.0] - 2026-07-09

### Added
- Proyecto Astro v7 inicializado con TypeScript.
- Sistema de tokens de diseño CSS (colores, tipografía, espaciado, geometría, motion).
- Layout base con SEO, metas y fuentes.
- SiteHeader con navegación responsive (Especialidades, Membresías, Nosotros, Sucursales, Contacto).
- SiteFooter con datos de sucursales, enlaces WhatsApp y redes sociales.
- WhatsAppFab flotante.
- Hero con carrusel de 3 slides y CTAs.
- Sección de especialidades con 5 tarjetas (Ortodoncia, Periodoncia, Odontopediatría, Estética dental, Implantes).
- PromoBanner "Una nueva forma de cuidarnos".
- Sección de membresías con 4 tarjetas (ZK Anticipa, ZK Familia, ZK Seguimiento, ZK Total).
- Página dinámica de detalle de membresía con ruta, beneficios, perfil ideal y poster descargable.
- BranchSplit con diferenciación visual Los Ángeles / Pucón.
- Sección AboutUs (placeholder).
- Sección Agreements (placeholder).
- Sección TeamPlaceholder.
- FAQ con acordeón (4 preguntas).
- Sección de contacto con formulario y datos de sucursales.
- Configuración de GitHub Pages con deploy automático.
- Sitemap generado automáticamente.
