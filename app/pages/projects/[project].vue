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
      <div class="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center gap-8 py-8">
        <NuxtImg
          :src="project.image"
          class="rounded-lg"
          fit="cover"
          sizes="100vw md:800px"
          style="max-width: 400px; max-height: 300px;"
        />
        <div class="flex flex-col h-full items-center md:items-start text-center md:text-left gap-2 lg:gap-4">
          <h1 class="text-2xl md:text-4xl font-bold">
            {{ project.title }}
          </h1>
          <p>
            {{ project.description }}
          </p>
          <UButton
            icon="i-simple-icons-github"
            :to="project.github"
            target="_blank"
            class="w-fit"
            size="lg"
            color="primary"
          >
            Github
          </UButton>
          <div class="hidden md:flex flex-col">
            <h2 class="text-xl md:text-2xl font-semibold mb-2">
              {{ $t('projects.technologies') }}
            </h2>
            <div class="flex flex-wrap w-full justify-center md:justify-start gap-4 mt-auto">
              <UBadge
                v-for="tech in project.technologies"
                :key="tech"
                size="xl"
                variant="outline"
              >
                {{ tech }}
              </UBadge>
            </div>
          </div>
        </div>
      </div>

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
</script>
