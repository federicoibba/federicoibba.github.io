<template>
  <UFooter class="border-t border-default mt-8">
    <template #left>
      <span class="text-xl font-bold">
        {{ $t('footer.title') }}
      </span>
    </template>

    <template #default>
      <p class="text-sm">
        {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
      </p>
    </template>

    <template #right>
      {{ $t('footer.followMe') }}
      <UButton
        icon="i-simple-icons-linkedin"
        color="neutral"
        variant="ghost"
        to="https://www.linkedin.com/in/federicoibba/"
        target="_blank"
        aria-label="X"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/federicoibba"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
