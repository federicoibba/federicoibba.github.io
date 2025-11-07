import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppFooter from './Footer.vue'

describe('AppFooter', () => {
  it('should render footer with title and copyright', () => {
    const wrapper = mount(AppFooter, {
      global: {
        stubs: {
          UFooter: {
            template: '<footer><slot name="left" /><slot /><slot name="right" /></footer>',
          },
          UButton: { template: '<a class="social-link"><slot /></a>' },
        },
        mocks: {
          $t: (key: string, params?: any) => {
            if (key === 'footer.copyright') {
              return `Copyright ${params?.year}`
            }
            return key
          },
        },
      },
    })

    expect(wrapper.text()).toContain('footer.title')
    expect(wrapper.text()).toContain('Copyright')
  })

  it('should render social media links', () => {
    const wrapper = mount(AppFooter, {
      global: {
        stubs: {
          UFooter: {
            template: '<footer><slot name="left" /><slot /><slot name="right" /></footer>',
          },
          UButton: { template: '<a class="social-link"><slot /></a>' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    const socialLinks = wrapper.findAll('.social-link')
    expect(socialLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('should display current year in copyright', () => {
    const currentYear = new Date().getFullYear()
    const wrapper = mount(AppFooter, {
      global: {
        stubs: {
          UFooter: {
            template: '<footer><slot name="left" /><slot /><slot name="right" /></footer>',
          },
          UButton: { template: '<a><slot /></a>' },
        },
        mocks: {
          $t: (key: string, params?: any) => {
            if (key === 'footer.copyright') {
              return `Copyright ${params?.year}`
            }
            return key
          },
        },
      },
    })

    expect(wrapper.text()).toContain(currentYear.toString())
  })
})
