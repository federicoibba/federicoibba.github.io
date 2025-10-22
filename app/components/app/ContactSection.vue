<template>
  <UPageCTA
    :title="$t('contact.title')"
    :description="$t('contact.description')"
  >
    <template #links>
      <UButton
        to="mailto:federico.ibba9+blog@gmail.com"
        size="lg"
        icon="lucide:mail"
      >
        {{ $t('contact.buttons.email') }}
      </UButton>
      <UButton
        to="https://linkedin.com/in/federicoibba"
        target="_blank"
        variant="outline"
        size="lg"
        icon="simple-icons:linkedin"
      >
        {{ $t('contact.buttons.linkedin') }}
      </UButton>
      <UButton
        to="https://github.com/federicoibba"
        target="_blank"
        variant="outline"
        size="sm"
        icon="simple-icons:github"
      >
        {{ $t('contact.buttons.github') }}
      </UButton>
    </template>
  </UPageCTA>
</template>
