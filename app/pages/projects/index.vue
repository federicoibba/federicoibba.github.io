<template>
  <UContainer>
    <UPage>
      <UPageHeader
        title="Projects"
        description="Here you will find all the projects I do in my spare time!"
      />

      <UCard>
        <template #header>
          <AppSectionHeader
            title="All Projects"
            description="Filter and explore my projects"
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
import type { Item } from '~/types/item'

const { data: projects } = await useAsyncData(
  'projects-list',
  () =>
    queryCollection('projects').order('meta', 'DESC').all() as Promise<
      Array<Item>
    >,
)

const { searchQuery, selectedTags, allTags, filteredItems: filteredProjects, toggleTag } = useFilterItems(projects)
</script>
