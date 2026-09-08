# kor_docs

KOR Synthetic RLV Controller documentation, built with [Astro Starlight](https://starlight.astro.build/) and ready for static hosting on Netlify.

## Local development

Use Node.js 22.12 or newer (the project and Netlify configuration select Node 22).

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro, normally `http://localhost:4321`.

```sh
npm run check    # Validate Astro and TypeScript
npm run build    # Build all pages and the Pagefind search index into dist/
npm run preview  # Preview the production build, including search
```

## Documentation structure

- `src/content/docs/`: all 50 documentation pages, with their existing URL paths.
- `src/sidebar.json`: navigation groups and page order.
- `src/content.config.ts`: Starlight content collection and frontmatter validation.
- `astro.config.mjs`: site branding, logo variants, support links, and integrations.
- `src/styles/custom.css`: KOR colors and image captions.
- `public/images/`, `public/logo/`, and `public/favicon.svg`: static assets served at their original paths.
- `public/command-reference.html`: preserved standalone command reference export.

Each documentation page uses Markdown or MDX with a `title` in YAML frontmatter. Import interactive documentation components from `@astrojs/starlight/components`; existing pages use `Aside`, `CardGrid`, `LinkCard`, and `Steps`. FAQs use native HTML `details` elements and images use `figure`/`figcaption`. Add new pages to `src/sidebar.json` to include them in navigation.

## Deploy to Netlify

1. Push this project to your Git repository.
2. In Netlify, choose **Add new project → Import an existing project** and select the repository.
3. Leave the base directory empty when this project is at the repository root. The checked-in `netlify.toml` sets the build command to `npm run build`, publish directory to `dist`, and Node version to `22`.
4. Deploy. Netlify installs the dependencies and builds the static site. Subsequent pushes to your production branch trigger new deployments.

For a custom domain, optionally set `SITE_URL` to its full HTTPS URL in Netlify before rebuilding. Otherwise, the Astro configuration uses Netlify's production `URL` environment variable for canonical URLs and the sitemap. Local builds without either variable omit the sitemap.

You can also run `npm run build` and upload `dist/` using Netlify's manual deploy flow. Set `SITE_URL` when building locally if you want canonical URLs and a sitemap. No server adapter or SPA catch-all redirect is required; Starlight generates individual HTML pages and a 404 page.

See [Astro's Netlify deployment guide](https://docs.astro.build/en/guides/deploy/netlify/).
