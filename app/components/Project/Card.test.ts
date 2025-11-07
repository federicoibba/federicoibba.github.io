import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from './Card.vue'

describe('ProjectCard', () => {
  const mockProject = {
    title: 'Test Project',
    description: 'This is a test project description',
    image: '/test-image.jpg',
    path: '/en/projects/test-project',
    tags: ['Vue', 'TypeScript'],
  }

  it('should render project title and description', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: mockProject },
      global: {
        stubs: {
          UCard: { template: '<div class="card"><slot /></div>' },
          NuxtImg: { template: '<img />' },
        },
        mocks: {
          $router: {
            push: vi.fn(),
          },
        },
      },
    })

    expect(wrapper.text()).toContain('Test Project')
    expect(wrapper.text()).toContain('This is a test project description')
  })

  it('should navigate to project path on click', async () => {
    const mockRouter = {
      push: vi.fn(),
    }

    const wrapper = mount(ProjectCard, {
      props: { project: mockProject },
      global: {
        stubs: {
          UCard: { template: '<div class="card" @click="$attrs.onClick"><slot /></div>' },
          NuxtImg: { template: '<img />' },
        },
        mocks: {
          $router: mockRouter,
        },
      },
    })

    await wrapper.find('.card').trigger('click')
    expect(mockRouter.push).toHaveBeenCalledWith('/en/projects/test-project')
  })

  it('should render project image', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: mockProject },
      global: {
        stubs: {
          UCard: { template: '<div class="card"><slot /></div>' },
          NuxtImg: { template: '<img class="project-img" />' },
        },
        mocks: {
          $router: {
            push: vi.fn(),
          },
        },
      },
    })

    expect(wrapper.find('.project-img').exists()).toBe(true)
  })
})
