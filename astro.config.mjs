// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/* Las secciones marcadas como pendientes en `src/data/navegacion.ts` quedan fuera del
   sitemap mientras lo estén: sus accesos aparecen deshabilitados en el sitio, así que
   tampoco corresponde ofrecerlas a un buscador. La página sigue existiendo y sigue siendo
   alcanzable por URL directa, para poder revisarla antes de habilitarla. */
const PENDIENTES = ['/convenios'];

export default defineConfig({
  site: 'https://clinicazk.cl',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (pagina) => !PENDIENTES.some((p) => new URL(pagina).pathname.replace(/\/$/, '') === p),
    }),
  ],
});
