# mindmotion-site

The [mindmotion.ai](https://mindmotion.ai) marketing website. Built with
[Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and
deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev
```

Runs at <http://localhost:4321>.

## Build

```sh
npm run check      # type-checks the code (TypeScript and .astro files)
npm run build      # runs the type check, then writes the static site to dist/
npm run preview    # serves dist/ at localhost:4321 for verification
```

`npm run build` stops if the type check finds an error, so a type error
cannot reach a deploy (the deploy workflow uses the same build script).

## Deploy

Pushes to `main` trigger
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
builds the site with the
[`withastro/action`](https://github.com/withastro/action) workflow and
publishes to GitHub Pages.

## Where settings live

Every value that describes the site (its identity, switches, external
addresses, colours, and layout sizes) is defined once, in one of the
locations below, and referenced everywhere else. When changing such a value,
edit it there; when adding one, add it there rather than typing the value
into a page or component. This keeps a change from being applied in one
place and missed in another.

| What | Where |
|---|---|
| Company name, legal name, site URL, homepage title and description, hero text, mission statement | `SITE` in [`src/config.ts`](src/config.ts) |
| Browser-tab title format for all other pages | `pageTitle()` in `src/config.ts` |
| Insights on/off switch (hides Insights from the nav, the homepage, search engines, sitemap, robots.txt, and RSS when off) | `INSIGHTS_ENABLED` in `src/config.ts` |
| Booking link behind `/meet`, contact form endpoint, contact email | `MEET_URL`, `CONTACT_FORM_ENDPOINT`, `CONTACT_EMAIL` in `src/config.ts` |
| Logo, default social-share image, publisher logo, home-screen icons, homepage figure | `ASSETS` in `src/config.ts` |
| AI-training crawlers blocked in robots.txt | `AI_TRAINING_CRAWLERS` in `src/config.ts` |
| security.txt expiry date | `SECURITY_TXT` in `src/config.ts` |
| Brand colours, and the tints, lines, shadows, and opacities derived from them | `@theme` blocks in [`src/styles/global.css`](src/styles/global.css) |
| Layout sizes: content width, side gutter, page top padding, logo height | `@theme` and `@utility` blocks in `src/styles/global.css` |
| Theme colours for the browser toolbar and web app manifest (which cannot read CSS) | `BROWSER_COLORS` in `src/config.ts`; the build fails if they differ from `--color-accent` or `--color-bg` |
| Insights post frontmatter fields | [`src/content.config.ts`](src/content.config.ts) |

Files generated at build time from these settings rather than stored as
static files: `robots.txt`, `.well-known/security.txt`, and
`site.webmanifest` (in [`src/pages/`](src/pages/)), `rss.xml`, and the
sitemap (configured in [`astro.config.mjs`](astro.config.mjs)).

Two notes on the files in `public/`:

- The homepage figure is served as lossless WebP (`execution-boundary.webp`
  and `execution-boundary-mobile.webp`), which is about 40% smaller than the
  same drawing as PNG. The PNG masters, and the untouched drawings they came
  from, are kept in the private source repository under `visuals/`, where the
  current pair is undated and superseded versions carry the date they were
  first published.
- `CNAME` carries the custom domain for GitHub Pages. Nothing in the site
  references it, so a search for unused files will flag it; deleting it would
  take the site off mindmotion.ai.

Deliberate exceptions:

- The body text of the Privacy Policy and Terms of Service is written out
  in full, including the company name and URL. A settings change must never
  silently alter a published legal document; those documents change only
  through an intentional edit, which triggers the effective-date hook
  described below.
- The print stylesheet at the end of `global.css` uses plain black and
  white regardless of the brand colours.
- A value used by a single component for its own look (for example the
  hero headline font size) stays in that component.

## Recurring maintenance

- **security.txt expiry:** the date in `SECURITY_TXT` must stay in the
  future (recommended: less than a year ahead). Renew it before it passes.
- **AI-training crawler list:** new crawlers appear over time; review
  `AI_TRAINING_CRAWLERS` at least yearly.

## Repository conventions

- This repository is public. The pre-commit hook at
  [`.githooks/pre-commit`](.githooks/pre-commit) blocks any commit whose
  staged changes look like they contain a password, access key, or token
  (using [gitleaks](https://github.com/gitleaks/gitleaks); skipped with a
  notice if gitleaks is not installed). `npm install` activates the hook.
- Commits that touch [`src/pages/privacy.astro`](src/pages/privacy.astro)
  or [`src/pages/terms.astro`](src/pages/terms.astro) auto-bump the
  `effectiveDate` to today via a pre-commit hook at
  [`.githooks/pre-commit`](.githooks/pre-commit). For cosmetic-only
  changes (typos, whitespace) bypass with `git commit --no-verify`.
- Source-of-truth content (post drafts, brand artwork, compliance
  evidence) lives in a separate private `mindmotion-site-source`
  repository. Only the deploy-ready artefacts are committed here.

## License

Proprietary. See [LICENSE.md](LICENSE.md).
