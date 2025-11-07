import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectHeader from './Header.vue'

describe('ProjectHeader', () => {
  const mockProject = {
    title: 'Test Project',
    description: 'A test project description',
    image: '/test-image.jpg',
    github: 'https://github.com/test/project',
    technologies: ['Vue', 'TypeScript', 'Nuxt'],
    article: '/test-article',
    path: '/en/projects/test',
    tags: ['web'],
  }

  it('should render project title and description', () => {
    const wrapper = mount(ProjectHeader, {
      props: { project: mockProject },
      global: {
        stubs: {
          NuxtImg: { template: '<img />' },
          UButton: { template: '<a><slot /></a>' },
          UBadge: { template: '<span class="badge"><slot /></span>' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    expect(wrapper.text()).toContain('Test Project')
    expect(wrapper.text()).toContain('A test project description')
  })

  it('should render GitHub button', () => {
    const wrapper = mount(ProjectHeader, {
      props: { project: mockProject },
      global: {
        stubs: {
          NuxtImg: { template: '<img />' },
          UButton: { template: '<a :href="to"><slot /></a>', props: ['to', 'target', 'size', 'color', 'icon'] },
          UBadge: { template: '<span><slot /></span>' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    expect(wrapper.html()).toContain('https://github.com/test/project')
    expect(wrapper.text()).toContain('Github')
  })

  it('should render article button when article exists', () => {
    const wrapper = mount(ProjectHeader, {
      props: { project: mockProject },
      global: {
        stubs: {
          NuxtImg: { template: '<img />' },
          UButton: { template: '<a class="article-btn"><slot /></a>', props: ['to', 'target', 'size', 'color', 'icon'] },
          UBadge: { template: '<span><slot /></span>' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    const articleButtons = wrapper.findAll('.article-btn')
    expect(articleButtons.length).toBeGreaterThan(0)
  })

  it('should not render article button when article does not exist', () => {
    const projectWithoutArticle = { ...mockProject, article: undefined }
    const wrapper = mount(ProjectHeader, {
      props: { project: projectWithoutArticle },
      global: {
        stubs: {
          NuxtImg: { template: '<img />' },
          UButton: { template: '<a class="btn"><slot /></a>', props: ['to', 'target', 'size', 'color', 'icon'] },
          UBadge: { template: '<span><slot /></span>' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    const buttons = wrapper.findAll('.btn')
    expect(buttons.length).toBe(1)
  })

  it('should render all technology badges', () => {
    const wrapper = mount(ProjectHeader, {
      props: { project: mockProject },
      global: {
        stubs: {
          NuxtImg: { template: '<img />' },
          UButton: { template: '<a><slot /></a>' },
          UBadge: { template: '<span class="tech-badge"><slot /></span>' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    const badges = wrapper.findAll('.tech-badge')
    expect(badges.length).toBe(3)
    expect(wrapper.text()).toContain('Vue')
    expect(wrapper.text()).toContain('TypeScript')
    expect(wrapper.text()).toContain('Nuxt')
  })
})
