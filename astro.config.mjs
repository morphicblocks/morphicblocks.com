import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// The Astro config runs before `import.meta.env` exists, so read the same
// PUBLIC_* variables (see .env.example) via Vite. Pages and components read
// them through `src/config.ts` instead.
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), 'PUBLIC_');

// https://astro.build/config
export default defineConfig({
  // Canonical tags, link previews and the sitemap all need an absolute URL.
  site: env.PUBLIC_SITE_URL || undefined,
  // Both locales are listed in the sitemap with hreflang alternates.
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', de: 'de' } },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
});
