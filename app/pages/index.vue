<template>
  <UContainer>
    <UPage>
      <UPageHero
        title="Fede's Code Journey"
        orientation="vertical"
        description="A safeplace where I share my thoughts, tutorials and projects about web development and programming."
        :links
      />

      <UPageSection
        title="My Projects"
        description="Here you will find all the projects I do in my spare time!"
      >
        <UCarousel
          v-slot="{ item }"
          :items="projects"
          dots
          class="cursor-pointer transition"
          :ui="{ item: 'lg:basis-1/3' }"
        >
          <div
            class="hover:text-primary w-full flex flex-col gap-4"
            @click="$router.push(item.path)"
          >
            <div class="overflow-hidden rounded-lg">
              <NuxtImg
                class="object-cover object-top w-full transform transition-transform duration-200 hover:scale-110"
                :src="item.meta.image"
                width="640"
              />
            </div>
            <span class="mx-auto font-semibold text-lg">{{ item.title }}</span>
          </div>
        </UCarousel>
      </UPageSection>

      <UPageSection
        title="Read my last article"
      >
        <UBlogPost
          v-if="lastArticle"
          orientation="horizontal"
          :image="lastArticle.meta.image"
          :title="lastArticle.title"
          :description="lastArticle.description"
          :date="lastArticle.meta.date"
          :to="lastArticle.path"
        />
      </UPageSection>
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
