import type { APIRoute } from 'astro';
import { SITE, MEET_PUBLIC_URL } from '../config.ts';

// Generated from src/config.ts so the rules follow the site settings.
export const GET: APIRoute = () => {
  const lines = [
    'User-agent: *',
    `Disallow: ${new URL(MEET_PUBLIC_URL).pathname}`,
    '',
    `Sitemap: ${new URL('/sitemap-index.xml', SITE.url)}`,
  ];
  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
