<template>
  <UContainer>
    <UPage>
      <UPageHeader
        :title="$t('projects.title')"
        :description="$t('projects.description')"
      />

      <UCard>
        <template #header>
          <AppSectionHeader
            :title="$t('projects.all.title')"
            :description="$t('projects.all.description')"
          />
        </template>
        <div class="space-y-6">
          <ProjectFilter
            v-model:search-query="searchQuery"
            v-model:selected-tags="selectedTags"
            :all-tags="allTags"
            @toggle-tag="toggleTag"
          />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard
              v-for="project in filteredProjects"
              :key="project.path"
              :project="project"
            />
          </div>
        </div>
      </UCard>
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

const { locale } = useI18n()

const { data: projects } = await useAsyncData(`projects-list-${locale.value}`, () => {
  return queryCollection('projects')
    .where('locale', '=', locale.value)
    .order('date', 'DESC')
    .all()
})

const { searchQuery, selectedTags, allTags, filteredItems, toggleTag } = useFilterItems(projects)
const filteredProjects = filteredItems as Ref<ProjectsCollectionItem[]>
</script>
