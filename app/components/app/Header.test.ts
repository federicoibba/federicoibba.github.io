import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppHeader from './Header.vue'

describe('AppHeader', () => {

  it('should render header with navigation items', () => {
    const wrapper = mount(AppHeader, {
      global: {
        stubs: {
          UHeader: {
            template: '<header><slot name="body" /><slot name="right" /></header>',
          },
          UNavigationMenu: { template: '<nav class="nav-menu"><slot /></nav>' },
          USelect: { template: '<select class="locale-select" />' },
          UColorModeSwitch: { template: '<button class="color-mode" />' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    expect(wrapper.findAll('.nav-menu').length).toBeGreaterThan(0)
  })

  it('should render locale selector', () => {
    const wrapper = mount(AppHeader, {
      global: {
        stubs: {
          UHeader: {
            template: '<header><slot name="body" /><slot name="right" /></header>',
          },
          UNavigationMenu: { template: '<nav />' },
          USelect: { template: '<select class="locale-select" />' },
          UColorModeSwitch: { template: '<button />' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    expect(wrapper.find('.locale-select').exists()).toBe(true)
  })

  it('should render color mode switch', () => {
    const wrapper = mount(AppHeader, {
      global: {
        stubs: {
          UHeader: {
            template: '<header><slot name="body" /><slot name="right" /></header>',
          },
          UNavigationMenu: { template: '<nav />' },
          USelect: { template: '<select />' },
          UColorModeSwitch: { template: '<button class="color-mode" />' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    expect(wrapper.find('.color-mode').exists()).toBe(true)
  })

  it('should have navigation items for articles, projects, and about', () => {
    const wrapper = mount(AppHeader, {
      global: {
        stubs: {
          UHeader: {
            template: '<header><slot name="body" /><slot name="right" /></header>',
          },
          UNavigationMenu: {
            template: '<nav><div v-for="item in items" :key="item.label">{{ item.label }}</div></nav>',
            props: ['items', 'orientation'],
          },
          USelect: { template: '<select />' },
          UColorModeSwitch: { template: '<button />' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    expect(wrapper.text()).toContain('navigation.articles')
    expect(wrapper.text()).toContain('navigation.projects')
    expect(wrapper.text()).toContain('navigation.about')
  })
})
