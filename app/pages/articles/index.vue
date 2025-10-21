<template>
  <UContainer>
    <UPage>
      <UPageHeader
        :title="$t('articles.title')"
        :description="$t('articles.description')"
      />
      <template #right>
        <nav class="flex flex-col gap-8">
          <div class="flex flex-col gap-8 sticky top-(--ui-header-height) z-10 pt-4 sm:pt-6">
            <UCard>
              <ArticleFilter
                v-model:search-query="searchQuery"
                v-model:selected-tags="selectedTags"
                :all-tags="allTags"
                @toggle-tag="toggleTag"
              />
            </UCard>
            <UCard>
              <template #header>
                <AppSectionHeader
                  :title="$t('articles.filter.timeline.title')"
                  :description="$t('articles.filter.timeline.description')"
                />
              </template>
              <ArticleTimeline
                class="hidden lg:block"
                :articles="filteredArticles"
              />
            </UCard>
          </div>
        </nav>
      </template>

      <UCard>
        <template #header>
          <AppSectionHeader
            :title="$t('articles.all.title')"
            :description="$t('articles.all.description')"
          />
        </template>
        <UBlogPosts orientation="vertical">
          <UBlogPost
            v-for="(post, index) in filteredArticles"
            :key="index"
            :image="post.image"
            :title="post.title"
            :description="post.description"
            :date="post.date"
            :to="post.path"
          />
        </UBlogPosts>
      </UCard>
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const { data: articles } = await useAsyncData(`articles-list-${locale.value}`, () => {
  return queryCollection('articles')
    .where('locale', '=', locale.value)
    .order('meta', 'DESC')
    .all()
})

const {
  searchQuery,
  selectedTags,
  allTags,
  filteredItems: filteredArticles,
  toggleTag,
} = useFilterItems(articles)
</script>
