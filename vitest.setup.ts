import { vi } from 'vitest'
import { computed, ref } from 'vue'

// Mock Nuxt composables globally
global.useRouter = vi.fn(() => ({
  push: vi.fn(),
  replace: vi.fn(),
  back: vi.fn(),
}))

global.useRoute = vi.fn(() => ({
  path: '/en/articles',
  params: {},
  query: {},
}))

global.useI18n = vi.fn(() => ({
  t: (key: string, params?: any) => {
    if (params) {
      return `${key}_${JSON.stringify(params)}`
    }
    return key
  },
  locale: ref('en'),
  locales: ref([
    { code: 'en', name: 'English' },
    { code: 'it', name: 'Italiano' },
  ]),
  setLocale: vi.fn(),
}))

global.computed = computed
