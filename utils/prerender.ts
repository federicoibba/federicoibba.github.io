import { glob } from 'glob'

export function getDynamicRoutes() {
  const locales = ['en', 'it']
  const routes: string[] = ['/it', '/en']

  for (const locale of locales) {
    const projects = glob.sync(`content/${locale}/projects/*.md`)
    for (const project of projects) {
      routes.push(`/${locale}/projects/${project.split('/').pop()?.replace('.md', '')}`)
    }
  }

  return routes
}
