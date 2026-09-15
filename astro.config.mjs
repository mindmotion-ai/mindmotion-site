// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import { readFileSync } from 'node:fs';

import { SITE, INSIGHTS_ENABLED, BROWSER_COLORS } from './src/config.ts';

// The brand colours are defined in src/styles/global.css, but the
// theme-color meta tag and the web app manifest cannot read CSS, so
// src/config.ts repeats two of them as BROWSER_COLORS. Stop the build
// (and the dev server) if the two copies ever disagree, so a colour
// change cannot ship half-applied.
function assertBrowserColorsMatchTheme() {
  const css = readFileSync(new URL('./src/styles/global.css', import.meta.url), 'utf8');
  const pairs = [
    ['--color-accent', 'BROWSER_COLORS.theme', BROWSER_COLORS.theme],
    ['--color-bg', 'BROWSER_COLORS.background', BROWSER_COLORS.background],
  ];
  for (const [cssName, configName, configValue] of pairs) {
    const match = css.match(new RegExp(`${cssName}:\\s*(#[0-9a-fA-F]{3,8})\\s*;`));
    if (!match) {
      throw new Error(`${cssName} is not defined as a hex colour in src/styles/global.css.`);
    }
    if (match[1].toLowerCase() !== configValue.toLowerCase()) {
      throw new Error(
        `${configName} in src/config.ts is ${configValue}, but ${cssName} in ` +
          `src/styles/global.css is ${match[1]}. Make them equal.`,
      );
    }
  }
}
assertBrowserColorsMatchTheme();

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  output: 'static',
  // Keep whitespace in the HTML exactly as written in the source. Since
  // Astro 7 the default ('jsx') removes line breaks around elements, which
  // joins words to adjacent links and bold text wherever the source wraps
  // a sentence onto a new line (for example "our" + <a>Terms of Service</a>
  // would render as "ourTerms of Service"). `true` is the Astro 6 behaviour
  // the site was written for.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => {
        if (!INSIGHTS_ENABLED && page.includes('/insights')) return false;
        if (page.endsWith('/meet') || page.endsWith('/meet/')) return false;
        return true;
      },
    }),
    mdx(),
  ],
});
