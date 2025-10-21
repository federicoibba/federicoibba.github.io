<template>
  <UTree :items="timelineItems" />
</template>

<script setup lang="ts">
import type { TreeItem } from '@nuxt/ui'
import type { Item } from '~/types/item'

interface Props {
  articles: Array<Item>
}

const { articles } = defineProps<Props>()
const router = useRouter()

const timelineItems = computed<TreeItem[]>(() => {
  const groupedByYear = articles.reduce((acc, article) => {
    const year = new Date(article.meta.date).getFullYear().toString()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push({
      label: article.title,
      onSelect: () => router.push(article.path),
      class: 'cursor-pointer',
    } as TreeItem)
    return acc
  }, {} as Record<string, TreeItem[]>)

  return Object.entries(groupedByYear)
    .sort(([a], [b]) => parseInt(b) - parseInt(a))
    .map(([year, articles]) => ({
      label: year,
      children: articles,
    }))
})
</script>
