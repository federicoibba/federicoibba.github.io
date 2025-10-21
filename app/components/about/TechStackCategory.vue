<template>
  <div class="space-y-3">
    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
      {{ category.name }}
    </h3>
    <div class="flex flex-wrap gap-2">
      <UBadge
        v-for="tech in category.technologies"
        :key="tech"
        :variant="category.variant"
      >
        {{ tech }}
      </UBadge>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BadgeProps } from '@nuxt/ui'

interface TechCategory {
  name: string
  variant: BadgeProps['variant']
  technologies: string[]
}

interface Props {
  category: TechCategory
}

defineProps<Props>()
</script>
