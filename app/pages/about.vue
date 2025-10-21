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
              icon="i-simple-icons-github"
            >
              {{ $t('about.buttons.github') }}
            </UButton>
            <UButton
              to="https://linkedin.com/in/federicoibba"
              target="_blank"
              variant="outline"
              size="sm"
              icon="i-simple-icons-linkedin"
            >
              {{ $t('about.buttons.linkedin') }}
            </UButton>
            <UButton
              to="https://drive.google.com/file/d/1IZY_RvkIN4t_S6CX7_rySdHV3PVaqe8I/view"
              target="_blank"
              variant="outline"
              size="sm"
              icon="i-heroicons-document-arrow-down"
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
import type { BadgeProps, ChangelogVersionProps } from '@nuxt/ui'

const techStack = [
  {
    name: 'Frontend',
    variant: 'solid' as BadgeProps['variant'],
    technologies: ['TypeScript', 'Vue', 'Nuxt', 'React', 'Angular'],
  },
  {
    name: 'Backend',
    variant: 'outline' as BadgeProps['variant'],
    technologies: ['ExpressJS', 'NestJS', 'Python', 'MySQL', 'PostgreSQL'],
  },
  {
    name: 'Cloud & DevOps',
    variant: 'soft' as BadgeProps['variant'],
    technologies: ['AWS', 'Lambda', 'API Gateway', 'S3', 'DynamoDB'],
  },
  {
    name: 'Architecture',
    variant: 'subtle' as BadgeProps['variant'],
    technologies: ['MicroFrontends', 'Business Intelligence', 'Full Stack', 'DDD using Nuxt Layers'],
  },
  {
    name: 'Currently Studying',
    variant: '' as BadgeProps['variant'],
    technologies: ['LLM', 'RAG', 'Terraform'],
  },
]

const journeyVersions: ChangelogVersionProps[] = [
  {
    date: 'Apr 2022',
    title: 'Software Engineer',
    description: 'Current job where I use Vue and Nuxt. I am member of the company Developer Experience Team and Technical Decision Authority.',
    authors: [{
      name: 'TUI Musement',
      avatar: {
        src: 'https://cdn.bsky.app/img/avatar/plain/did:plc:gg5of5qnh4imzpii2gkzf4rn/bafkreiavwisc2oer6uw445ohvxht5hl5mj45gcqpmaz3jxd6gob7ezw3ue@jpeg',
        alt: 'TUI Musement',
      },
    }],
  },
  {
    date: 'Mar 2020',
    title: 'Frontend Developer',
    description: 'Worked for two years with Angular and React applications',
    authors: [{
      name: 'Spindox',
      avatar: {
        src: 'https://media.glassdoor.com/sqll/868980/spindox-squareLogo-1737379995758.png',
        alt: 'Spindox',
      },
    }],
  },
  {
    date: 'Nov 2019',
    title: 'Full Stack Developer',
    description: 'Worked for six months with React-based applications (pure and with Next.js), AWS (API Gateway, Lambda, S3, DynamoDB)',
    authors: [{
      name: 'MistralPay',
      avatar: {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXie9TDguWKI-jHPR64ZGZ4KxpidVU4UXPKw&s',
        alt: 'MistralPay',
      },
    }],
  },
  {
    date: 'Mar 2018',
    title: 'Full Stack Developer',
    description: 'Worked for two years creating Business Intelligence dashboards using Angular, ExpressJS, MySQL.',
    authors: [{
      name: 'Università degli Studi di Cagliari',
      avatar: {
        src: 'https://upload.wikimedia.org/wikipedia/it/d/de/Logo_Universit%C3%A0_di_Cagliari.jpg',
        alt: 'Università degli Studi di Cagliari',
      },
    }],
  },
  {
    date: 'Feb 2018',
    title: 'Master Degree in Computer Science',
    description: 'Graduation with 107/110 score.',
    authors: [{
      name: 'Università degli Studi di Cagliari',
      avatar: {
        src: 'https://upload.wikimedia.org/wikipedia/it/d/de/Logo_Universit%C3%A0_di_Cagliari.jpg',
        alt: 'Università degli Studi di Cagliari',
      },
    }],
  },
  {
    date: 'Jun 2017',
    title: 'Fellow Research',
    description: 'Worked on Machine Learning Applications: a decision-tree based one and a topic-based message polarity classification algorithm.',
    authors: [{
      name: 'Università degli Studi di Cagliari',
      avatar: {
        src: 'https://upload.wikimedia.org/wikipedia/it/d/de/Logo_Universit%C3%A0_di_Cagliari.jpg',
        alt: 'Università degli Studi di Cagliari',
      },
    }],
  },
  {
    date: 'Mar 2017',
    title: 'Teacher of Computer Science for kids',
    description: 'Taught children aged between 9 and 11 years old a visual programming language called Scratch.',
    authors: [
      {
        name: 'Elementary School (Pula, Capoterra)',
        avatar: {
          icon: 'i-lucide-school',
          alt: 'Elementary School (Pula, Capoterra)',
        },
      },
    ],
  },
  {
    date: 'Sep 2015',
    title: 'Bachelor Degree in Computer Science',
    description: 'Graduation with 107/110 score.',
    authors: [{
      name: 'Università degli Studi di Cagliari',
      avatar: {
        src: 'https://upload.wikimedia.org/wikipedia/it/d/de/Logo_Universit%C3%A0_di_Cagliari.jpg',
        alt: 'Università degli Studi di Cagliari',
      },
    }],
  },
  {
    date: '1997',
    title: 'Early Beginnings',
    description: 'Started with MS-DOS games at age 4',
    authors: [
      {
        name: 'Home',
        avatar: {
          icon: 'i-lucide-home',
          alt: 'Home',
        },
      },
    ],
  },
]
</script>
