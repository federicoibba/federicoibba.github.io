// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    // Ensure @nuxt/content is after @nuxt/ui or no Prose components are availabe
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],
  ssr: true,
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['~/assets/css/main.css'],
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['js', 'html', 'css', 'typescript', 'python', 'json'],
        },
      },
    },
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-GB', name: 'English', file: 'en.json' },
      { code: 'it', language: 'it-IT', name: 'Italiano', file: 'it.json' },
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'prefix',
  },
})
