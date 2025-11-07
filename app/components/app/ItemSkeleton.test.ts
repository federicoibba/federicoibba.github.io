import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ItemSkeleton from './ItemSkeleton.vue'

describe('ItemSkeleton', () => {
  it('should render skeleton loading placeholders', () => {
    const wrapper = mount(ItemSkeleton, {
      global: {
        stubs: {
          UPage: { template: '<div class="u-page"><slot /></div>' },
          UPageHeader: { template: '<div class="u-page-header"><slot name="title" /><slot name="description" /></div>' },
          UPageBody: { template: '<div class="u-page-body"><slot /></div>' },
          USkeleton: { template: '<div class="u-skeleton" />' },
        },
      },
    })

    expect(wrapper.find('.u-page').exists()).toBe(true)
    expect(wrapper.find('.u-page-header').exists()).toBe(true)
    expect(wrapper.find('.u-page-body').exists()).toBe(true)
    expect(wrapper.findAll('.u-skeleton').length).toBeGreaterThan(0)
  })
})
