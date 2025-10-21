<template>
  <UFooter class="border-t border-default mt-8">
    <template #left>
      <span class="text-xl font-bold">
        Fede's Code Journey
      </span>
    </template>

    <template #default>
      <p class="text-sm">
        © {{ new Date().getFullYear() }} Federico Ibba
      </p>
    </template>

    <template #right>
      Follow me on my main channels!
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
