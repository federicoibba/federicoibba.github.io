import type { BadgeProps } from '@nuxt/ui'

export const techStack = [
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
