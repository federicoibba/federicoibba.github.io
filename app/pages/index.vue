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
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-xl font-semibold">
                  My Last Projects
                </h2>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Here you will find all the projects I do in my spare time!
                </p>
              </div>
              <UButton
                to="/projects"
                variant="outline"
                size="sm"
                trailing-icon="i-lucide-arrow-right"
              >
                View All
              </UButton>
            </div>
          </template>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <UCard
              v-for="project in projects"
              :key="project.path"
              class="cursor-pointer transition hover:bg-elevated/50"
              @click="$router.push(project.path)"
            >
              <div class="space-y-3">
                <div class="overflow-hidden rounded-lg">
                  <NuxtImg
                    class="object-cover object-top w-full h-32 transform transition-transform duration-200 hover:scale-110"
                    :src="project.meta.image"
                    width="320"
                  />
                </div>
                <h3 class="font-semibold">
                  {{ project.title }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {{ project.description }}
                </p>
              </div>
            </UCard>
          </div>
        </UCard>

        <!-- Latest Article Card -->
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-xl font-semibold">
                  Latest Article
                </h2>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Read my most recent blog post
                </p>
              </div>
              <UButton
                to="/articles"
                variant="outline"
                size="sm"
                trailing-icon="i-lucide-arrow-right"
              >
                View All
              </UButton>
            </div>
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
        <UPageCTA
          title="Let's Connect!"
          description="Feel free to reach out for collaboration opportunities, technical discussions, or just to say hello."
        >
          <template #links>
            <UButton
              to="mailto:federico.ibba9+blog@gmail.com"
              size="lg"
              icon="i-heroicons-envelope"
            >
              Email Me
            </UButton>
            <UButton
              to="https://linkedin.com/in/federicoibba"
              target="_blank"
              variant="outline"
              size="lg"
              icon="i-simple-icons-linkedin"
            >
              LinkedIn
            </UButton>
            <UButton
              to="https://github.com/federicoibba"
              target="_blank"
              variant="outline"
              size="sm"
              icon="i-simple-icons-github"
            >
              GitHub
            </UButton>
          </template>
        </UPageCTA>
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
