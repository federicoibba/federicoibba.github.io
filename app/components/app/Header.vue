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
        class="hidden lg:flex mr-4 gap-2"
      />
      <USelect
        :model-value="locale"
        :items="availableLocales"
        value-key="code"
        @update:model-value="(lang) => setLocale(lang)"
      />
      <UColorModeSwitch />
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
  active: route.path.startsWith(`/${locale.value}/articles`),
}, {
  label: t('navigation.projects'),
  to: `/${locale.value}/projects`,
  icon: 'lucide:square-terminal',
  active: route.path.startsWith(`/${locale.value}/projects`),
}, {
  label: t('navigation.about'),
  to: `/${locale.value}/about`,
  icon: 'lucide:square-user',
  active: route.path.startsWith(`/${locale.value}/about`),
}])
</script>
