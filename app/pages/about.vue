<template>
  <UContainer>
    <UPage>
      <UPageHeader
        title="About Me, Federico Ibba"
        description="Software Engineer passionate about Web Development"
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
              GitHub
            </UButton>
            <UButton
              to="https://linkedin.com/in/federicoibba"
              target="_blank"
              variant="outline"
              size="sm"
              icon="i-simple-icons-linkedin"
            >
              LinkedIn
            </UButton>
            <UButton
              to="https://drive.google.com/file/d/1IZY_RvkIN4t_S6CX7_rySdHV3PVaqe8I/view"
              target="_blank"
              variant="outline"
              size="sm"
              icon="i-heroicons-document-arrow-down"
            >
              Resume
            </UButton>
          </div>
        </template>
      </UPageHeader>

      <div class="space-y-8">
        <!-- Introduction Card -->
        <UCard>
          <template #header>
            <h2 class="text-xl font-semibold">
              Introduction
            </h2>
          </template>
          <p class="text-gray-600 dark:text-gray-300">
            My journey with Computer Science started when I was four and I liked to play games in my father PC using MS-DOS.<br>
            Today I am a Software Engineer, passionate about Web Development and mainly focused on Frontend.
            I like to work with Typescript, Vue, Nuxt, but also AWS, ExpressJS and NestJS.
          </p>
        </UCard>

        <!-- Goals -->
        <UCard>
          <template #header>
            <h2 class="text-xl font-semibold">
              Current Goals
            </h2>
          </template>
          <p class="text-gray-600 dark:text-gray-300">
            In the last months, I am studying to learn more about the Backend things I miss,
            so that I can accomplish my dream to be an Architect one day.
          </p>
        </UCard>

        <!-- Skills Section -->
        <UCard>
          <template #header>
            <h2 class="text-xl font-semibold">
              Tech Stack
            </h2>
          </template>
          <div class="space-y-6">
            <div
              v-for="category in techStack"
              :key="category.name"
              class="space-y-3"
            >
              <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                {{ category.name }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="tech in category.technologies"
                  :key="tech"
                  :variant="category.variant"
                >
                  {{ tech }}
                </UBadge>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Journey Timeline -->
        <UCard>
          <template #header>
            <div class="flex justify-between">
              <h2 class="text-xl font-semibold">
                My Journey
              </h2>
              <UButton
                icon="i-heroicons-document-arrow-down"
                class="cursor-pointer transition hover:bg-primary/75 active:bg-primary/75"
                trailing-icon="i-lucide-arrow-right"
                to="https://drive.google.com/file/d/1IZY_RvkIN4t_S6CX7_rySdHV3PVaqe8I/view"
                target="_blank"
              >
                Resume
              </UButton>
            </div>
          </template>
          <UChangelogVersions :versions="journeyVersions" />
        </UCard>

        <!-- Contact Section -->
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
