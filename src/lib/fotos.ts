// Mapa nombre-de-archivo → imagen importada, para optimizar con astro:assets.
// Astro (sharp) las convierte a webp y las redimensiona en el build.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/fotos/*.{jpg,jpeg,png}',
  { eager: true }
);

export const fotos: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(modules)) {
  const name = path.split('/').pop()!;
  fotos[name] = mod.default;
}
