import type { APIRoute } from 'astro';
import { SITE, ASSETS, BROWSER_COLORS } from '../config.ts';

// Web app manifest: name, icons, and colours used when the site is saved
// to a phone's home screen. Generated from src/config.ts.
export const GET: APIRoute = () => {
  const manifest = {
    name: SITE.shortName,
    short_name: SITE.shortName,
    icons: ASSETS.appIcons,
    theme_color: BROWSER_COLORS.theme,
    background_color: BROWSER_COLORS.background,
    display: 'browser',
    start_url: '/',
  };
  return new Response(`${JSON.stringify(manifest, null, 2)}\n`, {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
};
