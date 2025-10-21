<template>
  <UCard
    class="cursor-pointer transition hover:bg-elevated/50"
    @click="$router.push(project.path)"
  >
    <div class="space-y-3">
      <div class="overflow-hidden rounded-lg">
        <NuxtImg
          class="object-cover object-top w-full h-32 transform transition-transform duration-200 hover:scale-110"
          :src="project.image"
          width="320"
        />
      </div>
      <h3 class="font-semibold">
        {{ project.title }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
        {{ project.description }}
      </p>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

interface Props {
  project: ProjectsCollectionItem
}

defineProps<Props>()
</script>
