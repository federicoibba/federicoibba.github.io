<template>
  <UContainer>
    <template v-if="project">
      <UPageHero
        :title="project.title"
        :description="project.description"
      >
        <div class="flex w-full justify-center gap-4">
          <UBadge
            v-for="tag in project.meta.tags"
            :key="tag"
            size="xl"
          >
            {{ tag }}
          </UBadge>
        </div>
        <NuxtImg
          :src="project.meta.image"
          class="rounded-lg mx-auto"
          fit="contain"
          sizes="100vw sm:50vw md:800px"
        />
      </UPageHero>
      <ContentRenderer :value="project" />
    </template>
    <UError
      v-else
      :error="{
        statusCode: 404,
        statusMessage: 'Project not found',
        message: 'The project you are looking for does not exist.',
      }"
    />
  </UContainer>
</template>

<script lang="ts" setup>
import type { Item } from '~/types/item'

const { path } = useRoute()

const { data: project } = await useAsyncData(
  `project-${path}`,
  () => queryCollection('projects').path(path).first() as Promise<Item>,
)
</script>
