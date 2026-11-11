// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nomaan-akram.pages.dev',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
