<template>
  <UContainer>
    <UPage>
      <UPageHero
        title="Fede's Code Journey"
        orientation="vertical"
        description="A safeplace where I share my thoughts, tutorials and projects about web development and programming."
        :links
      />

      <div class="space-y-8">
        <!-- Projects Card -->
        <UCard>
          <template #header>
            <AppSectionHeader
              title="My Last Projects"
              description="Here you will find all the projects I do in my spare time!"
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
              title="Latest Article"
              description="Read my most recent blog post"
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

const links = ref<ButtonProps[]>([
  {
    label: 'Read the blog',
    to: '/articles',
    color: 'neutral',
    variant: 'subtle',
    icon: 'i-lucide-book-open',
  },
  {
    label: 'See my projects',
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
