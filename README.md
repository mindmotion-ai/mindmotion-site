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
npm run build      # writes the static site to dist/
npm run preview    # serves dist/ at localhost:4321 for verification
```

## Deploy

Pushes to `main` trigger
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
builds the site with the
[`withastro/action`](https://github.com/withastro/action) workflow and
publishes to GitHub Pages.

## Repository conventions

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
