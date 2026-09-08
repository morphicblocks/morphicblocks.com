// ── Site configuration ──────────────────────────────────────────────
// Every switchable value is read from a PUBLIC_* environment variable.
// No URLs or names are hardcoded in components — set them in `.env` (local)
// or in your host's environment settings (e.g. Cloudflare Pages), and the
// whole site updates from this single place. See `.env.example`.
const env = import.meta.env;

// Undefined when a variable is unset or empty, so callers can skip the link
// entirely rather than rendering a dead one.
const link = (value?: string) => value || undefined;

export const site = {
  name: env.PUBLIC_SITE_NAME ?? "",
  tagline: env.PUBLIC_SITE_TAGLINE ?? "",
  description: env.PUBLIC_SITE_DESCRIPTION ?? "",
  university: env.PUBLIC_UNIVERSITY ?? "",
  npmPackage: env.PUBLIC_NPM_PACKAGE ?? "",
  links: {
    docs: link(env.PUBLIC_DOCS_URL),
    playground: link(env.PUBLIC_PLAYGROUND_URL),
    github: link(env.PUBLIC_GITHUB_URL),
    npm: link(env.PUBLIC_NPM_URL),
    university: link(env.PUBLIC_UNIVERSITY_URL),
    imprint: link(env.PUBLIC_IMPRINT_URL),
    privacy: link(env.PUBLIC_PRIVACY_URL),
    disclaimer: link(env.PUBLIC_DISCLAIMER_URL),
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
