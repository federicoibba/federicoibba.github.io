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
      <div class="flex flex-row flex-wrap lg:flex-nowrap gap-8 py-8">
        <NuxtImg
          :src="project.image"
          class="rounded-lg"
          fit="contain"
          sizes="100vw sm:50vw md:800px"
          style="max-width: 400px; max-height: 300px;"
        />
        <div class="flex flex-col h-full items-center lg:items-start text-center lg:text-left gap-2 lg:gap-4">
          <h1 class="text-2xl md:text-4xl font-bold ">
            {{ project.title }}
          </h1>
          <p>
            {{ project.description }}
          </p>
          <UButton
            v-for="link in links"
            :key="link.label"
            :icon="link.icon"
            :to="link.to"
            :target="link.target"
            class="w-fit"
            size="lg"
            color="primary"
          >
            {{ link.label }}
          </UButton>
          <div class="hidden lg:flex flex-col">
            <h2 class="text-xl md:text-2xl font-semibold mb-2">
              {{ $t('projects.technologies') }}
            </h2>
            <div class="flex flex-wrap w-full justify-center lg:justify-start gap-4 mt-auto">
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

const links = computed(() => {
  const links = []
  // if (project.value?.github) {
  links.push({
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/federicoibba/federicoibba.github.io',
    target: '_blank',
  })
  // }
  return links
})
</script>
