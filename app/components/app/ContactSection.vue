<template>
  <UPageCTA
    title="Let's Connect!"
    description="Feel free to reach out for collaboration opportunities, technical discussions, or just to say hello."
  >
    <template #links>
      <UButton
        to="mailto:federico.ibba9+blog@gmail.com"
        size="lg"
        icon="i-heroicons-envelope"
      >
        Email Me
      </UButton>
      <UButton
        to="https://linkedin.com/in/federicoibba"
        target="_blank"
        variant="outline"
        size="lg"
        icon="i-simple-icons-linkedin"
      >
        LinkedIn
      </UButton>
      <UButton
        to="https://github.com/federicoibba"
        target="_blank"
        variant="outline"
        size="sm"
        icon="i-simple-icons-github"
      >
        GitHub
      </UButton>
    </template>
  </UPageCTA>
</template>
