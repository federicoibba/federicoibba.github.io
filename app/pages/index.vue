<template>
  <UContainer>
    <UPage>
      <UPageHero
        :title="$t('home.hero.title')"
        orientation="vertical"
        :description="$t('home.hero.description')"
        :links
      />

      <div class="space-y-8">
        <!-- Projects Card -->
        <UCard>
          <template #header>
            <AppSectionHeader
              :title="$t('home.projects.title')"
              :description="$t('home.projects.description')"
              :view-all-link="`/${locale}/projects`"
            />
          </template>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard
              v-for="project in projects"
              :key="project.path"
              :project="project"
            />
          </div>
        </UCard>

        <!-- Latest Article Card -->
        <UCard>
          <template #header>
            <AppSectionHeader
              :title="$t('home.latestArticle.title')"
              :description="$t('home.latestArticle.description')"
              :view-all-link="`/${locale}/articles`"
            />
          </template>
          <UBlogPost
            v-if="lastArticle"
            orientation="horizontal"
            :image="lastArticle.image"
            :title="lastArticle.title"
            :description="lastArticle.description"
            :date="lastArticle.date"
            :to="lastArticle.path"
          />
        </UCard>

        <!-- Contact Section -->
        <AppContactSection />
      </div>
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const { t, locale } = useI18n()

useHead({
  title: '',
  meta: [
    {
      name: 'description',
      content: t('pages.home.description'),
    },
  ],
})

defineOgImageComponent('Content', {
  title: t('ogSite.title'),
  description: t('ogSite.home.description'),
})

const links = computed<ButtonProps[]>(() => [
  {
    label: t('home.buttons.readBlog'),
    to: `/${locale.value}/articles`,
    color: 'neutral',
    variant: 'subtle',
    icon: 'lucide:book-open',
  },
  {
    label: t('home.buttons.seeProjects'),
    to: `/${locale.value}/projects`,
    icon: 'lucide:terminal',
    trailingIcon: 'lucide:arrow-right',
  },
])

const { data: lastArticle } = await useAsyncData(`last-article-${locale.value}`, () => {
  return queryCollection('articles')
    .where('locale', '=', locale.value)
    .order('date', 'DESC')
    .first()
})

const { data: projects } = await useAsyncData(`projects-list-home-${locale.value}`, () => {
  return queryCollection('projects')
    .where('locale', '=', locale.value)
    .order('date', 'DESC')
    .all()
})
</script>
