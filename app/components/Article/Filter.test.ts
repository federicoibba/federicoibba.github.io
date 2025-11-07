import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ArticleFilter from './Filter.vue'

describe('ArticleFilter', () => {
  it('should render search input and tag buttons', () => {
    const wrapper = mount(ArticleFilter, {
      props: {
        allTags: ['JavaScript', 'Vue', 'Testing'],
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

  it('should emit toggleTag event when tag button is clicked', async () => {
    const wrapper = mount(ArticleFilter, {
      props: {
        allTags: ['JavaScript', 'Vue'],
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
    expect(wrapper.emitted('toggleTag')?.[0]).toEqual(['JavaScript'])
  })

  it('should render all tags from props', () => {
    const tags = ['TypeScript', 'Nuxt', 'Testing', 'Performance']
    const wrapper = mount(ArticleFilter, {
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
