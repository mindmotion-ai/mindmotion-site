import type { APIRoute } from 'astro';
import { SITE, MEET_PUBLIC_URL, AI_TRAINING_CRAWLERS } from '../config.ts';

// Generated from src/config.ts so the rules follow the site settings.
//
// A crawler obeys only the most specific group that names it, so the AI
// training group must carry its own complete rules (Disallow: /) rather
// than rely on the general group.
export const GET: APIRoute = () => {
  const lines = [
    'User-agent: *',
    `Disallow: ${new URL(MEET_PUBLIC_URL).pathname}`,
    '',
    ...AI_TRAINING_CRAWLERS.map((crawler) => `User-agent: ${crawler}`),
    'Disallow: /',
    '',
    `Sitemap: ${new URL('/sitemap-index.xml', SITE.url)}`,
  ];
  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
