// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kirlts.github.io/clinicazk/',
  base: '/clinicazk/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
