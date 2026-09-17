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
| `PUBLIC_IMPRINT_URL_EN` | English imprint, if a translated page exists |
| `PUBLIC_PRIVACY_URL_EN` | English privacy page, if one exists |
| `PUBLIC_DISCLAIMER_URL_EN` | English disclaimer, if one exists |

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
  i18n/ui.ts       # display strings, per language
  i18n/utils.ts    # language detection and locale-aware paths
  data/screenshots.json  # slider images + per-language captions
  layouts/Base.astro
  components/Header.astro, Footer.astro, Landing.astro
  pages/index.astro      # English (default, unprefixed)
  pages/de/index.astro   # German
  styles/global.css   # design tokens — restyle the site from here
```

## Languages

English is the default and lives at `/`; German lives at `/de/`. The header has
a language toggle styled like the theme toggle: it shows the language it
switches to (`DE` on the English page) and links to the current page in that
language. With only two languages it reads as a toggle; if more are added it
cycles through them, and a list or dropdown would suit better.

All display copy sits in `src/i18n/ui.ts`, one entry per language. English
takes its tagline and description from the `PUBLIC_SITE_TAGLINE` /
`PUBLIC_SITE_DESCRIPTION` variables so `.env` stays the source for those;
everything else is literal text. `src/i18n/ui.ts` types the German entry
against the English one, so a missing key is a type error rather than a blank
spot on the page.

Both locales render the same `components/Landing.astro`, so markup and styles
are written once. To add a language: add an entry to `ui.ts`, list its code in
`languages`, add it to `i18n.locales` in `astro.config.mjs`, and create
`src/pages/<code>/index.astro` mirroring the German page. Code samples stay in
English.

## Notes

- The logo (`public/logo.svg`) is a placeholder — replace the file to swap it
  everywhere.
- `Imprint` / `Privacy` / `Disclaimer` point wherever `PUBLIC_IMPRINT_URL`,
  `PUBLIC_PRIVACY_URL` and `PUBLIC_DISCLAIMER_URL` say. Each has an optional
  `_EN` counterpart used on the English pages; leave it empty when no
  translated page exists and both languages fall back to the base URL.
- A link whose `PUBLIC_*` variable is unset or empty is **not rendered at all**
  (no dead `#` links). A footer column with no remaining links is dropped too.
- Links to other sites open in a new tab; in-site paths do not.
- The output is a plain static site, so any static host works. See
  [Deploy](#deploy) for the Docker route.

## Deploy

The site ships as a Docker image: a `bun` stage builds it, an `nginx` stage
serves the result. Two compose files, so the same image can be run with or
without a reverse proxy in front.

**Locally**, to check a change in the image that actually gets deployed:

```sh
docker compose up -d --build
open http://localhost:8080
```

**On the server**, behind an existing Traefik instance:

```sh
cp .env.example .env     # then edit, DEPLOY_DOMAIN in particular
docker compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d --build
```

The second file adds only the Traefik router labels and the external `traefik`
network. It expects Traefik to be running already and attached to that
network. Traefik terminates TLS and forwards plain HTTP to the container, so
nginx listens on port 80 only and holds no certificate.

`DEPLOY_DOMAIN` is the one value that differs per deployment, along with
`HTTP_PROXY` and friends if the build host needs a proxy. Everything else
(image and container names, the loopback port, the entrypoint and network
names) is the same for every clone and is written directly in the compose
files.

Because the `PUBLIC_*` values are baked in at build time, changing any of them
means rebuilding: `docker compose … up -d --build` again.
