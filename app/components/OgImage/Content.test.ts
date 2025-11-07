import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import OgImageContent from './Content.vue'

describe('OgImageContent', () => {
  it('should render with default props', () => {
    const wrapper = mount(OgImageContent, {
      global: {
        stubs: {
          NuxtImg: { template: '<img class="og-image" />' },
        },
      },
    })

    expect(wrapper.text()).toContain('title')
    expect(wrapper.text()).toContain('description')
  })

  it('should render custom title and description', () => {
    const wrapper = mount(OgImageContent, {
      props: {
        title: 'Custom Title',
        description: 'Custom Description',
      },
      global: {
        stubs: {
          NuxtImg: { template: '<img />' },
        },
      },
    })

    expect(wrapper.text()).toContain('Custom Title')
    expect(wrapper.text()).toContain('Custom Description')
  })

  it('should truncate long titles', () => {
    const longTitle = 'This is a very long title that should be truncated because it exceeds the maximum length allowed'
    const wrapper = mount(OgImageContent, {
      props: {
        title: longTitle,
        description: 'Description',
      },
      global: {
        stubs: {
          NuxtImg: { template: '<img />' },
        },
      },
    })

    expect(wrapper.text()).toContain('...')
    expect(wrapper.text()).not.toContain(longTitle)
  })

  it('should truncate long descriptions', () => {
    const longDescription = 'This is a very long description that should be truncated because it exceeds the maximum length allowed for descriptions in the OG image'
    const wrapper = mount(OgImageContent, {
      props: {
        title: 'Title',
        description: longDescription,
      },
      global: {
        stubs: {
          NuxtImg: { template: '<img />' },
        },
      },
    })

    expect(wrapper.text()).toContain('...')
  })

  it('should render image when provided', () => {
    const wrapper = mount(OgImageContent, {
      props: {
        title: 'Title',
        description: 'Description',
        image: '/test-image.jpg',
      },
      global: {
        stubs: {
          NuxtImg: { template: '<img class="og-image" />' },
        },
      },
    })

    expect(wrapper.find('.og-image').exists()).toBe(true)
  })

  it('should not render image when not provided', () => {
    const wrapper = mount(OgImageContent, {
      props: {
        title: 'Title',
        description: 'Description',
        image: '',
      },
      global: {
        stubs: {
          NuxtImg: { template: '<img class="og-image" />' },
        },
      },
    })

    expect(wrapper.find('.og-image').exists()).toBe(false)
  })
})
