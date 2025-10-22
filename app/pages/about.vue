<template>
  <UContainer>
    <UPage>
      <UPageHeader
        :title="$t('about.title')"
        :description="$t('about.description')"
      >
        <template #links>
          <div class="flex gap-2">
            <UButton
              to="https://github.com/federicoibba"
              target="_blank"
              variant="outline"
              size="sm"
              icon="simple-icons:github"
            >
              {{ $t('about.buttons.github') }}
            </UButton>
            <UButton
              to="https://linkedin.com/in/federicoibba"
              target="_blank"
              variant="outline"
              size="sm"
              icon="simple-icons:linkedin"
            >
              {{ $t('about.buttons.linkedin') }}
            </UButton>
            <UButton
              to="https://drive.google.com/file/d/1IZY_RvkIN4t_S6CX7_rySdHV3PVaqe8I/view"
              target="_blank"
              variant="outline"
              size="sm"
              icon="lucide:file-user"
            >
              {{ $t('about.buttons.resume') }}
            </UButton>
          </div>
        </template>
      </UPageHeader>

      <div class="space-y-8">
        <!-- Introduction Section -->
        <AboutTextSection :title="$t('about.sections.introduction.title')">
          {{ $t('about.sections.introduction.content') }}
        </AboutTextSection>

        <!-- Goals Section -->
        <AboutTextSection :title="$t('about.sections.goals.title')">
          {{ $t('about.sections.goals.content') }}
        </AboutTextSection>

        <!-- Skills Section -->
        <UCard>
          <template #header>
            <AppSectionHeader
              :title="$t('about.sections.techStack.title')"
              :description="$t('about.sections.techStack.description')"
            />
          </template>
          <div class="space-y-6">
            <AboutTechStackCategory
              v-for="category in techStack"
              :key="category.name"
              :category="category"
            />
          </div>
        </UCard>

        <!-- Journey Timeline -->
        <UCard>
          <template #header>
            <AppSectionHeader
              :title="$t('about.sections.journey.title')"
              :description="$t('about.sections.journey.description')"
              view-all-link="https://drive.google.com/file/d/1IZY_RvkIN4t_S6CX7_rySdHV3PVaqe8I/view"
            />
          </template>
          <UChangelogVersions :versions="journeyVersions" />
        </UCard>

        <!-- Contact Section -->
        <AppContactSection />
      </div>
    </UPage>
  </UContainer>
</template>

<script lang="ts" setup>
import { techStack } from '~/constants/tech-stack'
import { journeyVersions } from '~/constants/journey'
</script>
