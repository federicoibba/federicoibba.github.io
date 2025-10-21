<template>
  <div class="flex items-center gap-4 flex-wrap">
    <UInput
      v-model="searchQuery"
      :placeholder="$t('projects.filter.placeholder')"
      icon="i-heroicons-magnifying-glass"
      class="min-w-64"
    />

    <div class="flex gap-2 flex-wrap">
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
interface Props {
  allTags: string[]
}

defineProps<Props>()

const searchQuery = defineModel<string>('searchQuery')
const selectedTags = defineModel<string[]>('selectedTags')

defineEmits<{
  toggleTag: [tag: string]
}>()
</script>
