import type { ArticlesCollectionItem } from '@nuxt/content'

export const useFilterItems = (
  items: Ref<ArticlesCollectionItem[] | null | undefined>,
) => {
  const searchQuery = ref('')
  const selectedTags = ref<string[]>([])

  const allTags = computed(() => {
    const tags = new Set<string>()
    items.value?.forEach((item) => {
      item.tags?.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  })

  const filteredItems = computed(() => {
    if (!items.value) return []

    return items.value.filter((item) => {
      const matchesSearch
        = !searchQuery.value
          || item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
          || item.description.toLowerCase().includes(searchQuery.value.toLowerCase())

      const matchesTags
        = selectedTags.value.length === 0
          || selectedTags.value.every(tag => item.tags?.includes(tag))

      return matchesSearch && matchesTags
    })
  })

  const toggleTag = (tag: string) => {
    const index = selectedTags.value.indexOf(tag)
    if (index > -1) {
      selectedTags.value.splice(index, 1)
    }
    else {
      selectedTags.value.push(tag)
    }
  }

  return {
    searchQuery,
    selectedTags,
    allTags,
    filteredItems,
    toggleTag,
  }
}
