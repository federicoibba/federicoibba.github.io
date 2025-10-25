<template>
  <UPage>
    <UPageHeader>
      <template #title>
        <USkeleton class="h-8 w-64" />
      </template>
      <template #description>
        <USkeleton class="h-6 w-96" />
      </template>
    </UPageHeader>
    <USkeleton class="h-64 w-full rounded-lg" />
    <UPageBody>
      <USkeleton class="mb-4 h-6 w-3/4" />
      <USkeleton class="mb-4 h-6 w-full" />
      <USkeleton class="mb-4 h-6 w-2/3" />
    </UPageBody>
  </UPage>
</template>
