<template>
  <UContainer>
    <UPage>
      <UPageHeader
        title="Projects"
        description="Here you will find all the projects I do in my spare time!"
      />

      <div class="mb-8">
        <ProjectFilter
          v-model:search-query="searchQuery"
          v-model:selected-tags="selectedTags"
          :all-tags="allTags"
          @toggle-tag="toggleTag"
        />
      </div>

      <UBlogPosts orientation="horizontal">
        <UBlogPost
          v-for="(post, index) in filteredProjects"
          :key="index"
          :image="post.meta.image"
          :title="post.title"
          :description="post.description"
          :date="post.meta.date"
          :to="post.path"
        />
      </UBlogPosts>
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
