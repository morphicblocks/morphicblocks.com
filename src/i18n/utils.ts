// ── Language helpers ─────────────────────────────────────────────────
// The locale lives in the first path segment ("/de/"). The default language
// has no prefix, matching the `i18n` routing config in astro.config.mjs.
import { ui, defaultLang, type Lang } from "./ui";

/** Language of the page being rendered, from its URL. */
export function getLangFromUrl(url: URL): Lang {
  const segment = url.pathname.split("/").filter(Boolean)[0];
  return segment && segment in ui ? (segment as Lang) : defaultLang;
}

/** Strings for a language. */
export function useTranslations(lang: Lang): (typeof ui)[Lang] {
  return ui[lang];
}

/** Home page of a language ("/" or "/de/"). */
export function homePath(lang: Lang): string {
  return lang === defaultLang ? "/" : `/${lang}/`;
}

/** The current page in another language, used by the header switcher. */
export function pathWithLang(url: URL, lang: Lang): string {
  const segments = url.pathname.split("/").filter(Boolean);
  if (segments.length && segments[0] in ui) segments.shift();
  const rest = segments.length ? `/${segments.join("/")}/` : "/";
  return lang === defaultLang ? rest : `/${lang}${rest}`;
}
