export const SITE = {
  url: 'https://mindmotion.ai',
  name: 'MindMotion',
  legalName: 'MindMotion, Inc.',
  org: 'mindmotion-ai',
  title: 'MindMotion | Runtime safety for AI-driven robots',
  description:
    'Software for safe robot deployment around people. MindMotion builds runtime safety software for AI-driven robots.',
  tagline: 'Software for safe robot deployment around people',
} as const;

// Insights publishing gate. While false: nav/footer omit the link, homepage preview
// section is not rendered, /insights/* are excluded from the sitemap, and robots.txt
// disallows /insights/. Flip to true once ≥3 publishable posts exist and a cadence
// is committed. See spec §9.2 and operations manual §6.
export const INSIGHTS_ENABLED = false;

export const HOMEPAGE_CONTACT_ENABLED = false;
export const CONTACT_PAGE_ENABLED = true;

// Vanity redirect destination. /meet redirects here.
// Update this when the underlying Google Calendar booking URL changes
// (or when switching scheduler tools entirely). Visitors and external
// links continue to use mindmotion.ai/meet, which stays stable.
export const MEET_URL = 'https://calendar.app.google/REPLACE_WITH_REAL_LINK';
