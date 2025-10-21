import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: '**/articles/**/*.md',
      schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string(),
        alt: z.string(),
        ogImage: z.string(),
        tags: z.array(z.string()),
        locale: z.string(),
      }),
    }),
    projects: defineCollection({
      type: 'page',
      source: '**/projects/**/*.md',
      schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string(),
        alt: z.string(),
        ogImage: z.string(),
        tags: z.array(z.string()),
        locale: z.string(),
      }),
    }),
  },
})
