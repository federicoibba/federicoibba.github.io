import { getDynamicRoutes } from './utils/prerender'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    // Ensure @nuxt/content is after @nuxt/ui or no Prose components are availabe
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/icon',
  ],
  ssr: true,
  devtools: { enabled: true },
  app: {
    // GitHub Pages deployment configuration
    baseURL: '/',
    buildAssetsDir: '_nuxt',
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
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/it', '/en'],
    },
  },
  hooks: {
    'nitro:config'(nitroConfig) {
      const dynamicRoutes = getDynamicRoutes()
      nitroConfig.prerender?.routes?.push(...dynamicRoutes)
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  i18n: {
    // GitHub Pages deployment configuration
    baseUrl: '/',
    locales: [
      { code: 'en', language: 'en-GB', name: 'English', file: 'en.json' },
      { code: 'it', language: 'it-IT', name: 'Italiano', file: 'it.json' },
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'prefix',
  },
  // Workaround for missing icons in @nuxt/icon after build
  icon: {
    clientBundle: {
      icons: [
        'lucide:arrow-right',
        'lucide:book-a',
        'lucide:book-open',
        'lucide:book',
        'lucide:check',
        'lucide:file-user',
        'lucide:home',
        'lucide:mail',
        'lucide:school',
        'lucide:search',
        'lucide:square-terminal',
        'lucide:square-user',
        'lucide:terminal',
      ],
    },
  },
})
