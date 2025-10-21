<template>
  <div class="space-y-4">
    <UInput
      id="filter-articles"
      v-model="searchQuery"
      :placeholder="$t('articles.filter.placeholder')"
      icon="i-heroicons-magnifying-glass"
    />

    <div class="flex flex-wrap gap-2">
      <UButton
        v-for="tag in allTags"
        :key="tag"
        class="cursor-pointer"
        :variant="selectedTags?.includes(tag) ? 'solid' : 'outline'"
        size="xs"
        @click="$emit('toggleTag', tag)"
      >
        {{ tag }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ArticleFilterProps {
  allTags: string[]
}

defineProps<ArticleFilterProps>()

const searchQuery = defineModel<string>('searchQuery')
const selectedTags = defineModel<string[]>('selectedTags')

defineEmits<{
  toggleTag: [tag: string]
}>()
</script>
