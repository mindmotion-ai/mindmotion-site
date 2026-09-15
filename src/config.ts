const LEGAL_NAME = 'MindMotion, Inc.';

export const SITE = {
  url: 'https://mindmotion.ai',
  // Wordmark shown in the nav and used in aria labels, og:site_name, and
  // JSON-LD. Currently the legal name, for wordmark protection.
  name: LEGAL_NAME,
  // Legal entity name, used in page titles and the footer copyright.
  legalName: LEGAL_NAME,
  org: 'mindmotion-ai',
  title: `${LEGAL_NAME} | Runtime safety for AI-driven robots`,
  description:
    'Software for safe robot deployment around people. MindMotion builds runtime safety software for AI-driven robots.',
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
export const ASSETS = {
  // Logo shown in the nav, the mobile menu, and the footer, and named as
  // the organization logo in the homepage JSON-LD.
  logo: '/logo-mindmotion.svg',
  // Default social-share (Open Graph / Twitter card) image, used by any
  // page or post that does not set its own. width/height must match the
  // actual file.
  ogImage: {
    src: '/og-default.png',
    alt: 'MindMotion: runtime safety for AI-driven robots',
    width: 1200,
    height: 630,
  },
  // Square raster logo named as the publisher in Insights post JSON-LD.
  // Raster because search engines do not accept SVG there.
  publisherLogo: {
    src: '/android-chrome-512x512.png',
    width: 512,
    height: 512,
  },
} as const;

// Browser-tab and search-result title for every page other than the
// homepage (which uses SITE.title). Change the format here, not per page.
export const pageTitle = (page: string) => `${page} | ${SITE.legalName}`;

// Insights publishing gate. While false: nav/footer omit the link, homepage preview
// section is not rendered, /insights/* are excluded from the sitemap, and robots.txt
// disallows /insights/. Flip to true once ≥3 publishable posts exist and a cadence
// is committed. See spec §9.2 and operations manual §6.
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
