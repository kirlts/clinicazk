/* Navegación del sitio v3 — header (6 links + CTA) y índice del footer.
   El orden es el del handoff: Inicio · Familia ZK · Sucursales · Equipo · Nosotros · Convenios. */

/** Resuelve una ruta interna respetando el `base` de Astro. */
export const ruta = (p: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return p === '/' ? base + '/' : base + p;
};

/** Entrada de navegación: `anchor` marca los enlaces que son anclas dentro de Inicio. */
export type NavEntry = { label: string; page: string; anchor?: string };

/** Links del header. `anchor` se usa cuando la página actual es Inicio. */
export const NAV: NavEntry[] = [
  { label: 'Inicio', anchor: '#inicio', page: '/' },
  { label: 'Familia ZK', page: '/familia-zk' },
  { label: 'Sucursales', page: '/sucursales' },
  { label: 'Equipo', page: '/equipo-clinico' },
  { label: 'Nosotros', page: '/nosotros' },
  { label: 'Convenios', page: '/convenios' },
];

/** Índice del footer, en el orden del diseño. */
export const FOOTER_LINKS: NavEntry[] = [
  { label: 'Inicio', page: '/', anchor: '#inicio' },
  { label: 'Especialidades', page: '/', anchor: '#especialidades' },
  { label: 'Familia ZK', page: '/familia-zk' },
  { label: 'Sucursales', page: '/sucursales' },
  { label: 'Equipo clínico', page: '/equipo-clinico' },
  { label: 'Nosotros', page: '/nosotros' },
  { label: 'Convenios y seguros', page: '/convenios' },
  { label: 'Preguntas frecuentes', page: '/', anchor: '#preguntas' },
  { label: 'Contacto', page: '/', anchor: '#contacto' },
];
