<template>
  <div class="flex flex-row flex-wrap lg:flex-nowrap gap-8 py-8 justify-center">
    <NuxtImg
      :src="project.image"
      class="rounded-lg"
      fit="contain"
      sizes="100vw sm:50vw md:800px"
      style="max-width: 400px; max-height: 300px;"
    />
    <div class="flex flex-col h-full items-center lg:items-start text-center lg:text-left gap-2 lg:gap-4">
      <h1 class="text-2xl md:text-4xl font-bold">
        {{ project.title }}
      </h1>
      <p>
        {{ project.description }}
      </p>
      <div class="flex flex-row">
        <UButton
          icon="i-simple-icons-github"
          :to="project.github"
          target="_blank"
          class="w-fit"
          size="lg"
          color="primary"
        >
          Github
        </UButton>
        <UButton
          v-if="articleUrl"
          icon="lucide:book-text"
          :to="articleUrl"
          class="w-fit ml-4"
          size="lg"
          color="neutral"
        >
          {{ $t('projects.read-article') }}
        </UButton>
      </div>
      <div class="hidden lg:flex flex-col">
        <h2 class="text-xl md:text-2xl font-semibold mb-2">
          {{ $t('projects.technologies') }}
        </h2>
        <div class="flex flex-wrap w-full justify-center lg:justify-start gap-4 mt-auto">
          <UBadge
            v-for="tech in project.technologies"
            :key="tech"
            size="xl"
            variant="outline"
          >
            {{ tech }}
          </UBadge>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectsCollectionItem } from '@nuxt/content'

const { locale } = useI18n()

interface ProjectHeaderProps {
  project: ProjectsCollectionItem
}

const { project } = defineProps<ProjectHeaderProps>()

const articleUrl = computed(() => {
  if (!project.article) return null
  return `/${locale.value}/articles${project.article}`
})
</script>
