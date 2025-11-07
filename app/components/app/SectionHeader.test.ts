import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionHeader from './SectionHeader.vue'

describe('SectionHeader', () => {
  it('should render title and description', () => {
    const wrapper = mount(SectionHeader, {
      props: {
        title: 'Test Title',
        description: 'Test Description',
      },
      global: {
        stubs: {
          UButton: true,
        },
      },
    })

    expect(wrapper.text()).toContain('Test Title')
    expect(wrapper.text()).toContain('Test Description')
  })

  it('should render view all button when viewAllLink is provided', () => {
    const wrapper = mount(SectionHeader, {
      props: {
        title: 'Test Title',
        description: 'Test Description',
        viewAllLink: '/test-link',
      },
      global: {
        stubs: {
          UButton: { template: '<button><slot /></button>' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('should not render view all button when viewAllLink is not provided', () => {
    const wrapper = mount(SectionHeader, {
      props: {
        title: 'Test Title',
        description: 'Test Description',
      },
      global: {
        stubs: {
          UButton: { template: '<button><slot /></button>' },
        },
      },
    })

    expect(wrapper.find('button').exists()).toBe(false)
  })
})
