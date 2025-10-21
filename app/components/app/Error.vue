<template>
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
</template>

<script setup lang="ts">
const { t, locale } = useI18n()

const { statusCode, message } = defineProps<{
  statusCode: number
  message?: string
}>()

const errorMessage = computed(() => {
  if (statusCode === 404) {
    return {
      image: 'https://http.cat/images/404.jpg',
      description: message ?? t('errors.404.description'),
      button: t('errors.404.button'),
    }
  }

  return {
    image: 'https://http.cat/images/500.jpg',
    description: message ?? t('errors.500.description'),
    button: t('errors.500.button'),
  }
})
</script>
