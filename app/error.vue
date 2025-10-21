<script setup lang="ts">
import type { NuxtError } from '#app'

const { t, locale } = useI18n()

const { error } = defineProps<{
  error: NuxtError
}>()

const errorMessage = computed(() => {
  if (error.statusCode === 404) {
    return {
      image: 'https://http.cat/images/404.jpg',
      description: t('errors.404.description'),
      button: t('errors.404.button'),
    }
  }

  return {
    image: 'https://http.cat/images/500.jpg',
    description: t('errors.500.description'),
    button: t('errors.500.button'),
  }
})
</script>

<template>
  <UApp>
    <AppHeader />
    <UError
      :error="{
        message: errorMessage.description,
      }"
    >
      <template #statusCode>
        <NuxtImg
          :src="errorMessage.image"
          alt="Error Image"
          width="600"
          height="400"
          class="rounded-lg shadow-lg"
        />
      </template>
      <template #links>
        <UButton
          :to="`/${locale}/`"
          variant="solid"
        >
          {{ errorMessage.button }}
        </UButton>
      </template>
    </UError>
  </UApp>
</template>
