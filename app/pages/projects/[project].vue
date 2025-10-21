<template>
  <UContainer>
    <template v-if="project">
      <UPageHero
        :title="project.title"
        :description="project.description"
      >
        <div class="flex w-full justify-center gap-4">
          <UBadge
            v-for="tag in project.tags"
            :key="tag"
            size="xl"
          >
            {{ tag }}
          </UBadge>
        </div>
        <NuxtImg
          :src="project.image"
          class="rounded-lg mx-auto"
          fit="contain"
          sizes="100vw sm:50vw md:800px"
        />
      </UPageHero>
      <ContentRenderer :value="project" />
    </template>
    <AppError
      v-else
      :status-code="404"
      :message="$t('errors.404-project.description')"
    />
  </UContainer>
</template>

<script lang="ts" setup>
const { path } = useRoute()
const { locale } = useI18n()

const { data: project } = await useAsyncData(
  `project-${path}`,
  () => queryCollection('projects').where('locale', '=', locale.value).path(path).first(),
)
</script>
