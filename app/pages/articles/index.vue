<template>
  <UContainer>
    <UPage>
      <UPageHeader
        title="Articles"
        description="Here you will find all the blog posts I have written & published on this site."
      />
      <template #right>
        <nav class="flex flex-col gap-8">
          <div class="flex flex-col gap-8 sticky top-(--ui-header-height) z-10 pt-4 sm:pt-6">
            <ArticleFilter
              v-model:search-query="searchQuery"
              v-model:selected-tags="selectedTags"
              :all-tags="allTags"
              @toggle-tag="toggleTag"
            />
            <ArticleTimeline
              class="hidden lg:block"
              :articles="filteredArticles"
            />
          </div>
        </nav>
      </template>

      <UBlogPosts orientation="vertical">
        <UBlogPost
          v-for="(post, index) in filteredArticles"
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

const { data: articles } = await useAsyncData(
  'articles-list',
  () =>
    queryCollection('articles').order('meta', 'DESC').all() as Promise<
      Array<Item>
    >,
)

const {
  searchQuery,
  selectedTags,
  allTags,
  filteredItems: filteredArticles,
  toggleTag,
} = useFilterItems(articles)
</script>
