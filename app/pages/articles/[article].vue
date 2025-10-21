<template>
  <UContainer>
    <UPage v-if="article">
      <UPageHeader
        :title="article.title"
        :description="article.description"
      />
      <NuxtImg :src="article.image" />
      <template #right>
        <UContentToc :links="article.body.toc?.links" />
      </template>
      <UPageBody>
        <ContentRenderer :value="article" />
      </UPageBody>
    </UPage>
    <UError
      v-else
      :error="{
        statusCode: 404,
        statusMessage: 'Article not found',
        message: 'The article you are looking for does not exist.',
      }"
    />
  </UContainer>
</template>

<script lang="ts" setup>
const { path } = useRoute()

const { data: article } = await useAsyncData(`blog-post-${path}`, () =>
  queryCollection('articles').path(path).first(),
)
</script>
