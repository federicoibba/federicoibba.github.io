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
    '@nuxtjs/seo',
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
  site: {
    title: 'Federico Ibba - Portfolio & Blog',
    description:
      'Welcome to my personal portfolio and blog! I am Federico Ibba, a passionate developer and tech enthusiast. Here you will find my latest projects, articles, and insights into the world of technology.',
    url: 'https://federicoibba.com',
  },
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
    baseUrl: 'https://federicoibba.com',
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
        'lucide:copy',
        'lucide:file-user',
        'lucide:hash',
        'lucide:home',
        'lucide:mail',
        'lucide:school',
        'lucide:search',
        'lucide:square-terminal',
        'lucide:square-user',
        'lucide:terminal',
        'lucide:x',
      ],
    },
  },
})
