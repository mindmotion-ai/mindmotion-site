// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import { SITE, INSIGHTS_ENABLED } from './src/config.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => {
        if (!INSIGHTS_ENABLED && page.includes('/insights')) return false;
        if (page.endsWith('/meet') || page.endsWith('/meet/')) return false;
        if (page.endsWith('/mission') || page.endsWith('/mission/')) return false;
        return true;
      },
    }),
    mdx(),
  ],
});
