const LEGAL_NAME = 'MindMotion, Inc.';

export const SITE = {
  url: 'https://mindmotion.ai',
  // Wordmark shown in the nav and used in aria labels, og:site_name, and
  // JSON-LD. Currently the legal name, for wordmark protection.
  name: LEGAL_NAME,
  // Short name shown under the icon when the site is saved to a phone's
  // home screen (web app manifest), where space is limited.
  shortName: 'MindMotion',
  // Legal entity name, used in page titles and the footer copyright.
  legalName: LEGAL_NAME,
  org: 'mindmotion-ai',
  title: `${LEGAL_NAME} | Runtime safety for AI-driven robots`,
  description:
    'Software for safe robot deployment around people. MindMotion builds runtime safety software that keeps AI in control.',
  // Homepage hero headline, written as phrases. Each phrase starts on its
  // own line at every screen width.
  tagline: ['Safe robot deployment', 'around people'],
  // Homepage hero second line, written as phrases. Phrases may wrap onto
  // separate lines on narrow screens, but a phrase is never split.
  taglineSecondary: ['Runtime safety software', 'for AI-driven robots'],
  // Mission statement, shown at the top of /mission and at the start of
  // that page's meta description.
  mission: 'Make robots safe to deploy around people',
} as const;

// Brand image files, as paths from the site root (files live in public/).
// Replace a file here rather than editing each place it is used.
const APP_ICON_192 = '/android-chrome-192x192.png';
const APP_ICON_512 = '/android-chrome-512x512.png';

export const ASSETS = {
  // Logo shown in the nav, the mobile menu, and the footer, and named as
  // the organization logo in the homepage JSON-LD.
  logo: '/logo-mindmotion.svg',
  // Default social-share (Open Graph / Twitter card) image, used by any
  // page or post that does not set its own. width/height must match the
  // actual file.
  ogImage: {
    src: '/og-default.png',
    alt: 'MindMotion, Inc. logo and the line: Software for safe robot deployment around people',
    width: 1200,
    height: 630,
  },
  // Square raster logo named as the publisher in Insights post JSON-LD.
  // Raster because search engines do not accept SVG there.
  publisherLogo: {
    src: APP_ICON_512,
    width: 512,
    height: 512,
  },
  // Home-screen icons listed in the web app manifest.
  appIcons: [
    { src: APP_ICON_192, sizes: '192x192', type: 'image/png' },
    { src: APP_ICON_512, sizes: '512x512', type: 'image/png' },
  ],
} as const;

// security.txt (served at /.well-known/security.txt, standard RFC 9116)
// tells security researchers how to report a vulnerability. Its Expires
// date must stay in the future, and the standard recommends less than a
// year ahead: renew it before it passes.
export const SECURITY_TXT = {
  expires: '2027-09-01T00:00:00.000Z',
  preferredLanguages: 'en',
} as const;

// Colours used outside CSS: the browser toolbar colour (<meta name=
// "theme-color">) and the web app manifest, neither of which can read CSS
// variables. The brand colours themselves are defined in
// src/styles/global.css; these must equal --color-accent and --color-bg
// there. astro.config.mjs stops the build if they differ.
export const BROWSER_COLORS = {
  theme: '#0F2A44',
  background: '#FAFAFA',
} as const;

// Crawlers that collect web content to train AI models, blocked from the
// whole site in robots.txt. The Terms of Service prohibit collecting Site
// content for AI or machine-learning training except as robots.txt
// permits, so this list is what makes that clause consistent with
// robots.txt. Search-engine crawlers are unaffected. Each entry is the
// robots.txt token its operator documents for AI-training opt-out. New
// crawlers appear over time: review this list at least yearly.
export const AI_TRAINING_CRAWLERS = [
  'GPTBot', // OpenAI
  'ClaudeBot', // Anthropic
  'anthropic-ai', // Anthropic (older token)
  'Google-Extended', // Google (Gemini training; not Google Search)
  'Applebot-Extended', // Apple (AI training; not Apple search)
  'Meta-ExternalAgent', // Meta
  'CCBot', // Common Crawl (datasets widely used for AI training)
  'Bytespider', // ByteDance
  'cohere-training-data-crawler', // Cohere
  'AI2Bot', // Allen Institute for AI
  'PanguBot', // Huawei
] as const;

// Browser-tab and search-result title for every page other than the
// homepage (which uses SITE.title). Change the format here, not per page.
export const pageTitle = (page: string) => `${page} | ${SITE.legalName}`;

// Insights on/off switch. When false, the Insights pages still build (so
// they can be checked at their real URLs) but are hidden from visitors and
// search engines: the nav and mobile menu omit the link, /insights/ pages
// carry a noindex tag and are left out of the sitemap, robots.txt
// disallows /insights/, and the RSS feed is empty.
export const INSIGHTS_ENABLED = true;

// Public vanity URL where MindMotion's booking page lives. Stable across
// scheduler changes. Use this constant anywhere on the Site (or in
// external communication) that needs to link to the booking page.
export const MEET_PUBLIC_URL = `${SITE.url}/meet`;

// Underlying scheduler URL that /meet redirects to. Update this when
// the underlying Google Calendar booking URL changes or when switching
// scheduler tools entirely. Visitors and external links continue to
// use MEET_PUBLIC_URL, which stays stable.
export const MEET_URL = 'https://calendar.app.google/8Vjtfws4QqJhLiEt6';

// Contact form endpoint. The Formspree form ID is in the URL.
// Update this if the form provider or form ID changes. The contact form
// notification recipient (the inbox that receives submissions) is
// configured in the Formspree dashboard, not in code.
export const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/mdajldzo';

// Canonical contact email for MindMotion. Not surfaced anywhere on the
// public Site (we route all public contact through /contact). Kept here
// as the single source of truth in case any code path needs to render
// or reference it (e.g., an mailto fallback if the form provider is
// unavailable). Update here, not in scattered strings.
export const CONTACT_EMAIL = 'contact@mindmotion.ai';
