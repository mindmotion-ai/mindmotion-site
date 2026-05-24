export const SITE = {
  url: 'https://mindmotion.ai',
  name: 'MindMotion',
  legalName: 'MindMotion, Inc.',
  org: 'mindmotion-ai',
  title: 'MindMotion, Inc. | Runtime safety for AI-driven robots',
  description:
    'Software for safe robot deployment around people. MindMotion builds runtime safety software for AI-driven robots.',
  tagline: 'Safe robot deployment around people',
} as const;

// Insights publishing gate. While false: nav/footer omit the link, homepage preview
// section is not rendered, /insights/* are excluded from the sitemap, and robots.txt
// disallows /insights/. Flip to true once ≥3 publishable posts exist and a cadence
// is committed. See spec §9.2 and operations manual §6.
export const INSIGHTS_ENABLED = false;

export const HOMEPAGE_CONTACT_ENABLED = false;
export const CONTACT_PAGE_ENABLED = true;

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
