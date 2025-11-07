import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectFilter from './Filter.vue'

describe('ProjectFilter', () => {
  it('should render search input and tag buttons', () => {
    const wrapper = mount(ProjectFilter, {
      props: {
        allTags: ['Vue', 'React', 'TypeScript'],
        searchQuery: '',
        selectedTags: [],
      },
      global: {
        stubs: {
          UInput: { template: '<input class="search-input" />' },
          UButton: { template: '<button class="tag-button"><slot /></button>' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    expect(wrapper.find('.search-input').exists()).toBe(true)
    expect(wrapper.findAll('.tag-button')).toHaveLength(3)
  })

  it('should emit toggleTag event when tag is clicked', async () => {
    const wrapper = mount(ProjectFilter, {
      props: {
        allTags: ['Vue', 'React'],
        searchQuery: '',
        selectedTags: [],
      },
      global: {
        stubs: {
          UInput: { template: '<input />' },
          UButton: { template: '<button @click="$attrs.onClick"><slot /></button>' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    const buttons = wrapper.findAll('button')
    await buttons[0].trigger('click')

    expect(wrapper.emitted('toggleTag')).toBeTruthy()
    expect(wrapper.emitted('toggleTag')?.[0]).toEqual(['Vue'])
  })

  it('should display all provided tags', () => {
    const tags = ['JavaScript', 'Python', 'Go', 'Rust']
    const wrapper = mount(ProjectFilter, {
      props: {
        allTags: tags,
        searchQuery: '',
        selectedTags: [],
      },
      global: {
        stubs: {
          UInput: { template: '<input />' },
          UButton: { template: '<button><slot /></button>' },
        },
        mocks: {
          $t: (key: string) => key,
        },
      },
    })

    tags.forEach(tag => {
      expect(wrapper.text()).toContain(tag)
    })
  })
})
