# Clínica ZK — sitio web

Sitio web estático de Clínica ZK (odontología · estética · salud), construido con [Astro](https://astro.build). Convertido a partir del diseño V1 hecho en Claude Design (`Sitio.zip`), usando los tokens y componentes del design system de la marca.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Despliegue

El sitio se publica automáticamente en [GitHub Pages](https://kirlts.github.io/clinicazk/) vía GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `main`.

## Estructura

- `src/data/site.ts` — contenido del sitio (textos, especialidades, membresías, sucursales, FAQ).
- `src/components/core` — primitivas (Button, SectionHeader, Icon).
- `src/components/site` — header, footer, botón flotante de WhatsApp.
- `src/components/content` — MembershipCard, BranchSplit (diagonal ZK), FaqItem.
- `src/components/sections` — cada sección de la página de inicio.
- `src/styles/tokens` — tokens de diseño (colores, tipografía, espaciado, geometría, movimiento) tomados del design system original.

## Notas

- Los textos marcados como pendientes en el design system original (fotos de sucursales, sección de equipo, listado de convenios) se mantienen como placeholders honestos, tal como en el diseño fuente.
- Los CTA de las tarjetas de membresía enlazan a WhatsApp con un mensaje pre-completado, ya que la página de detalle de cada membresía (`afiche-membresia`) no forma parte de este entregable.
