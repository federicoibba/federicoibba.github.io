<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <UApp>
    <AppHeader />
    <AppError :status-code="error.statusCode" />
  </UApp>
</template>
