<template>
  <UContainer class="flex flex-col col-span-8">
    <UPage v-if="project">
      <template #right>
        <UContentToc
          :links="project.body.toc?.links"
          :title="$t('contentToc.title')"
        />
      </template>

      <!-- Header -->
      <ProjectHeader :project="project" />

      <!-- Content -->
      <ContentRenderer
        :value="project"
        class="text-lg text-justify [&>h3]:text-xl"
      />
    </UPage>
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

useHead({
  title: () => project.value?.title || 'Project',
  meta: [
    {
      name: 'description',
      content: () => project.value?.description || 'Project description',
    },
  ],
})

defineOgImageComponent('Content', {
  title: project.value?.title || 'Project',
  description: project.value?.description || 'Project description',
  image: project.value?.ogImage || '',
})
</script>
