<script setup lang="ts">
import { blogsPage } from '~/data'
</script>

<template>
  <div class="container mx-auto mb-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="px-6">
        <h1
          class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5"
        >
          {{ blogsPage.title }}
        </h1>
        <p class="dark:text-zinc-300">
          {{ blogsPage.description }}
        </p>
      </div>
      <div class="px-6 mt-4 justify-self-center">
        <NuxtImg class="min-h-40" src="/learning-concept.png" alt="Blog archive" />
      </div>
    </div>
  </div>
</template>
