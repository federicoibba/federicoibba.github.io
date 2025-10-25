<template>
  <UContainer>
    <UPage v-if="article">
      <UPageHeader
        :title="article.title"
        :description="article.description"
      />
      <NuxtImg
        :src="article.image"
        class="rounded-lg"
      />
      <template #right>
        <UContentToc
          :links="article.body.toc?.links"
          :title="$t('contentToc.title')"
        />
      </template>
      <UPageBody class="prose-p:text-xl">
        <ContentRenderer
          :value="article"
          class="text-lg text-justify [&>h3]:text-xl"
        />
      </UPageBody>
    </UPage>
    <AppError
      v-else
      :status-code="404"
      :message="$t('errors.404-article.description')"
    />
  </UContainer>
</template>

<script lang="ts" setup>
const { path } = useRoute()

const { data: article } = await useAsyncData(`blog-post-${path}`, () =>
  queryCollection('articles').path(path).first(),
)

useHead({
  title: () => article.value?.title || 'Article',
  meta: [
    {
      name: 'description',
      content: () => article.value?.description || 'Article description',
    },
  ],
})

defineOgImageComponent('Content', {
  title: article.value?.title || 'Article',
  description: article.value?.description || 'Article description',
  image: article.value?.ogImage || '',
})
</script>
