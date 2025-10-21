<template>
  <UHeader
    title="Fede's Code Journey"
    mode="slideover"
  >
    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />
    </template>
    <template #right>
      <UNavigationMenu
        :items="items"
        orientation="horizontal"
        class="hidden lg:flex -mx-2.5"
      />
      <UColorModeSwitch class="ml-4" />
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Articles',
  to: '/articles',
  icon: 'i-lucide-book-a',
  active: route.path.startsWith('/articles'),
}, {
  label: 'Projects',
  to: '/projects',
  icon: 'i-lucide-square-terminal',
  active: route.path.startsWith('/projects'),
}, {
  label: 'About me',
  to: '/about',
  icon: 'i-lucide-square-user',
  active: route.path.startsWith('/about'),
}])
</script>
