<template>
  <UHeader
    :title="$t('site.title')"
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
      <USelect
        :model-value="locale"
        :items="availableLocales"
        value-key="code"
        class="ml-2"
        @update:model-value="(lang) => setLocale(lang)"
      />
      <UColorModeSwitch class="ml-4" />
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const { t, locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.map(l => ({
    code: l.code,
    label: l.code.toUpperCase(),
  }))
})

const items = computed<NavigationMenuItem[]>(() => [{
  label: t('navigation.articles'),
  to: `/${locale.value}/articles`,
  icon: 'lucide:book-a',
  active: route.path.startsWith('/articles'),
}, {
  label: t('navigation.projects'),
  to: `/${locale.value}/projects`,
  icon: 'lucide:square-terminal',
  active: route.path.startsWith('/projects'),
}, {
  label: t('navigation.about'),
  to: `/${locale.value}/about`,
  icon: 'lucide:square-user',
  active: route.path.startsWith('/about'),
}])
</script>
