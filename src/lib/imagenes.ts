// Mapas nombre-de-archivo → imagen importada, para optimizar con astro:assets.
// Astro (sharp) las convierte y redimensiona en el build.

const cargar = (modules: Record<string, { default: ImageMetadata }>) => {
  const out: Record<string, ImageMetadata> = {};
  for (const [path, mod] of Object.entries(modules)) {
    out[path.split('/').pop()!] = mod.default;
  }
  return out;
};

export const fotos = cargar(
  import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.{jpg,jpeg,png}', { eager: true })
);

export const retratos = cargar(
  import.meta.glob<{ default: ImageMetadata }>('../assets/equipo/*.{jpg,jpeg,png}', { eager: true })
);

export const marca = cargar(
  import.meta.glob<{ default: ImageMetadata }>('../assets/brand/*.png', { eager: true })
);

/* Fotos por especialidad, nombradas por su posición (1-14) en ESPEC
   (`src/data/especialidades.ts`). */
export const especFotos = cargar(
  import.meta.glob<{ default: ImageMetadata }>('../assets/especialidades/*.{jpg,jpeg,png}', { eager: true })
);

export const isotipo = marca['isotipo.png'];
export const logoHorizontal = marca['logo-zk-horizontal.png'];
export const logoVertical = marca['logo-zk-vertical.png'];
