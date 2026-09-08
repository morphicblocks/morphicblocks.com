// ── Site configuration ──────────────────────────────────────────────
// Every switchable value is read from a PUBLIC_* environment variable.
// No URLs or names are hardcoded in components — set them in `.env` (local)
// or in your host's environment settings (e.g. Cloudflare Pages), and the
// whole site updates from this single place. See `.env.example`.
const env = import.meta.env;

export const site = {
  name: env.PUBLIC_SITE_NAME ?? "",
  tagline: env.PUBLIC_SITE_TAGLINE ?? "",
  description: env.PUBLIC_SITE_DESCRIPTION ?? "",
  university: env.PUBLIC_UNIVERSITY ?? "",
  npmPackage: env.PUBLIC_NPM_PACKAGE ?? "",
  links: {
    docs: env.PUBLIC_DOCS_URL ?? "#",
    playground: env.PUBLIC_PLAYGROUND_URL ?? "#",
    github: env.PUBLIC_GITHUB_URL ?? "#",
    npm: env.PUBLIC_NPM_URL ?? "#",
    university: env.PUBLIC_UNIVERSITY_URL ?? "#",
    imprint: env.PUBLIC_IMPRINT_URL ?? "#",
    privacy: env.PUBLIC_PRIVACY_URL ?? "#",
  },
};

/** Absolute http(s) URLs point off-site. */
export function isExternal(href?: string): boolean {
  return !!href && /^https?:\/\//i.test(href);
}

/** Spread onto an <a> so off-site links open in a new tab. */
export function externalAttrs(href?: string) {
  return isExternal(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}
