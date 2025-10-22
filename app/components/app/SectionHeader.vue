<template>
  <div class="flex items-center justify-between">
    <div>
      <h2 class="text-xl font-semibold">
        {{ title }}
      </h2>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ description }}
      </p>
    </div>
    <UButton
      v-if="viewAllLink"
      :to="viewAllLink"
      :target="viewAllLink.startsWith('http') ? '_blank' : undefined"
      variant="outline"
      size="sm"
      :icon="viewAllLink.includes('drive.google.com') ? 'lucide:file-user' : undefined"
      trailing-icon="lucide:arrow-right"
    >
      {{ viewAllLink.includes('drive.google.com') ? $t('common.resume') : $t('common.viewAll') }}
    </UButton>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  viewAllLink?: string
}

defineProps<Props>()
</script>
