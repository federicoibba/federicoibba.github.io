<template>
  <UCard>
    <template #header>
      <AppSectionHeader
        :title="title"
        :description="description"
      />
    </template>
    <p class="text-gray-600 dark:text-gray-300">
      <slot />
    </p>
  </UCard>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description?: string
}

const { description = '' } = defineProps<Props>()
</script>
