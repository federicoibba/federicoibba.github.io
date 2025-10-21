import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/*.md',
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
    }),
  },
})
