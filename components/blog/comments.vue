<!-- eslint-disable vue/require-component-is -->
<template>
  <ClientOnly>
    <component
      is="script"
      id="utt-comments"
      :key="theme"
      src="https://utteranc.es/client.js" 
      repo="federicoibba/federicoibba.github.io"
      issue-term="title"
      label="💬 comment"
      :theme
      crossorigin="anonymous"
      async 
    />
  </ClientOnly>
</template>

<script lang="ts" setup>
import { ClientOnly } from '#components';

const colorMode = useColorMode()
const theme = computed(() => colorMode.value === 'dark' ? 'dark-blue' : 'github-light')

watch(theme, () => {
  const element = document.getElementsByClassName('utterances');

  if (element[0]) {
    element[0].remove()
  }
  
})

</script>

<style>
.utterances {
  margin-left: 0;
}
</style>