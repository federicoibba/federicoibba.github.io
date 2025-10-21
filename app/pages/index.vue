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
              view-all-link="/projects"
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
              view-all-link="/articles"
            />
          </template>
          <UBlogPost
            v-if="lastArticle"
            orientation="horizontal"
            :image="lastArticle.meta.image"
            :title="lastArticle.title"
            :description="lastArticle.description"
            :date="lastArticle.meta.date"
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
import type { Item } from '~/types/item'

const { t } = useI18n()

const links = computed<ButtonProps[]>(() => [
  {
    label: t('home.buttons.readBlog'),
    to: '/articles',
    color: 'neutral',
    variant: 'subtle',
    icon: 'i-lucide-book-open',
  },
  {
    label: t('home.buttons.seeProjects'),
    to: '/projects',
    icon: 'i-lucide-terminal',
    trailingIcon: 'i-lucide-arrow-right',
  },
])

const { data: lastArticle } = await useAsyncData(
  'last-article',
  () =>
    queryCollection('articles').order('meta', 'DESC').first() as Promise<Item>,
)

const { data: projects } = await useAsyncData(
  'projects-list-home',
  () =>
    queryCollection('projects').order('meta', 'DESC').all() as Promise<
      Array<Item>
    >,
)
</script>
