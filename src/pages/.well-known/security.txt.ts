import type { APIRoute } from 'astro';
import { SITE, SECURITY_TXT } from '../../config.ts';

// Generated from src/config.ts. Vulnerability reports go through the
// contact form, consistent with the site's no-public-email policy.
export const GET: APIRoute = () => {
  const lines = [
    `Contact: ${new URL('/contact/', SITE.url)}`,
    `Expires: ${SECURITY_TXT.expires}`,
    `Preferred-Languages: ${SECURITY_TXT.preferredLanguages}`,
    `Canonical: ${new URL('/.well-known/security.txt', SITE.url)}`,
  ];
  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
