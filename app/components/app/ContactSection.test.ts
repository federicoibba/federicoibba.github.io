import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactSection from './ContactSection.vue'

describe('ContactSection', () => {
  it('should render contact section with title and description', () => {
    const wrapper = mount(ContactSection, {
      global: {
        stubs: {
          UPageCTA: {
            template: '<div class="cta"><slot name="links" /></div>',
          },
          UButton: { template: '<a class="contact-button"><slot /></a>' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    expect(wrapper.find('.cta').exists()).toBe(true)
  })

  it('should render email, LinkedIn, and GitHub buttons', () => {
    const wrapper = mount(ContactSection, {
      global: {
        stubs: {
          UPageCTA: {
            template: '<div class="cta"><slot name="links" /></div>',
          },
          UButton: { template: '<a class="contact-button"><slot /></a>' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    const buttons = wrapper.findAll('.contact-button')
    expect(buttons.length).toBe(3)
  })

  it('should have correct contact links', () => {
    const wrapper = mount(ContactSection, {
      global: {
        stubs: {
          UPageCTA: {
            template: '<div class="cta"><slot name="links" /></div>',
          },
          UButton: {
            template: '<a class="contact-button" :href="to"><slot /></a>',
            props: ['to', 'target', 'variant', 'size', 'icon'],
          },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    expect(wrapper.html()).toContain('mailto:federico.ibba9+blog@gmail.com')
    expect(wrapper.html()).toContain('linkedin.com/in/federicoibba')
    expect(wrapper.html()).toContain('github.com/federicoibba')
  })
})
