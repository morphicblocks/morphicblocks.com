# morphicblocks.com

Landing page for **Morphic Blocks** — the marketing/entry site at
`https://morphicblocks.com`. Built with [Astro](https://astro.build).

Docs (`docs.morphicblocks.com`) and the interactive playground
(`playground.morphicblocks.com`) live in separate repos.

## Develop

```sh
bun install
bun run dev      # local dev server
bun run build    # static build to ./dist
bun run preview  # preview the built site
```

## Configuration

Every switchable value (site name, tagline, university, and all links) is an
environment variable — nothing is hardcoded in components. Change them in one
place and the whole site updates.

```sh
cp .env.example .env   # then edit .env
```

| Variable | Purpose |
| --- | --- |
| `PUBLIC_SITE_NAME` | Brand name in header/footer/title |
| `PUBLIC_SITE_TAGLINE` | Footer tagline |
| `PUBLIC_SITE_DESCRIPTION` | `<meta description>` |
| `PUBLIC_UNIVERSITY` | Footer attribution (hidden if empty) |
| `PUBLIC_UNIVERSITY_URL` | Link target of the footer attribution |
| `PUBLIC_NPM_PACKAGE` | Package name in the install command |
| `PUBLIC_NPM_URL` | "View on npm" link |
| `PUBLIC_DOCS_URL` | Docs link |
| `PUBLIC_PLAYGROUND_URL` | Playground link |
| `PUBLIC_GITHUB_URL` | Repository link |
| `PUBLIC_IMPRINT_URL` | Imprint link |
| `PUBLIC_PRIVACY_URL` | Privacy link |
| `PUBLIC_DISCLAIMER_URL` | Disclaimer (Haftungsausschluss) link |

These are build-time `PUBLIC_*` vars baked into the static output. On
Cloudflare Pages, set them in the project's environment variables. Reading
happens in one place: `src/config.ts`.

## Structure

```text
public/            # static assets served as-is
  logo.svg         # PLACEHOLDER logo — replace with the real mark
  favicon.svg
src/
  config.ts        # single source for all env-driven values
  env.d.ts         # typed env vars
  layouts/Base.astro
  components/Header.astro, Footer.astro
  pages/index.astro
  styles/global.css   # design tokens — restyle the site from here
```

## Notes

- The logo (`public/logo.svg`) is a placeholder — replace the file to swap it
  everywhere.
- `Imprint` / `Privacy` / `Disclaimer` point wherever `PUBLIC_IMPRINT_URL`,
  `PUBLIC_PRIVACY_URL` and `PUBLIC_DISCLAIMER_URL` say; legal pages/data to
  follow.
- Deploy target: Cloudflare Pages (static output).
