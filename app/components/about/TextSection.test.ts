import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TextSection from './TextSection.vue'

describe('TextSection', () => {
  it('should render title and slot content', () => {
    const wrapper = mount(TextSection, {
      props: {
        title: 'About Me',
        description: 'My description',
      },
      slots: {
        default: 'This is the content of the section',
      },
      global: {
        stubs: {
          UCard: { template: '<div class="card"><slot name="header" /><slot /></div>' },
          AppSectionHeader: { template: '<div class="header" />' },
        },
      },
    })

    expect(wrapper.text()).toContain('This is the content of the section')
  })

  it('should handle optional description prop', () => {
    const wrapper = mount(TextSection, {
      props: {
        title: 'About Me',
      },
      slots: {
        default: 'Content',
      },
      global: {
        stubs: {
          UCard: { template: '<div class="card"><slot name="header" /><slot /></div>' },
          AppSectionHeader: { template: '<div class="header" />' },
        },
      },
    })

    expect(wrapper.find('.card').exists()).toBe(true)
  })
})
