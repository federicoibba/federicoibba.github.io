import type { ArticlesCollectionItem } from '@nuxt/content'

export interface Item extends ArticlesCollectionItem {
  meta: {
    image: string
    date: string
    tags?: string[]
  }
}
