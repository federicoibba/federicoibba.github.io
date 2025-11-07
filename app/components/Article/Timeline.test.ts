import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ArticleTimeline from './Timeline.vue'

describe('ArticleTimeline', () => {
  const mockArticles = [
    {
      title: 'Article 2024',
      date: '2024-05-15',
      path: '/en/articles/article-2024',
      description: 'Description 2024',
      tags: ['Vue'],
    },
    {
      title: 'Article 2023',
      date: '2023-03-20',
      path: '/en/articles/article-2023',
      description: 'Description 2023',
      tags: ['React'],
    },
    {
      title: 'Another 2024 Article',
      date: '2024-08-10',
      path: '/en/articles/another-2024',
      description: 'Another description',
      tags: ['TypeScript'],
    },
  ]

  it('should render timeline with articles grouped by year', () => {
    const wrapper = mount(ArticleTimeline, {
      props: { articles: mockArticles },
      global: {
        stubs: {
          UTree: { template: '<div class="tree"><slot /></div>' },
        },
      },
    })

    expect(wrapper.find('.tree').exists()).toBe(true)
  })

  it('should group articles by year correctly', () => {
    const wrapper = mount(ArticleTimeline, {
      props: { articles: mockArticles },
      global: {
        stubs: {
          UTree: {
            name: 'UTree',
            template: '<div class="tree" />',
            props: ['items'],
          },
        },
      },
    })

    const treeStub = wrapper.findComponent({ name: 'UTree' })
    const items = treeStub.props('items')

    expect(items).toHaveLength(2)
    expect(items[0].label).toBe('2024')
    expect(items[0].children).toHaveLength(2)
    expect(items[1].label).toBe('2023')
    expect(items[1].children).toHaveLength(1)
  })

  it('should sort years in descending order', () => {
    const wrapper = mount(ArticleTimeline, {
      props: { articles: mockArticles },
      global: {
        stubs: {
          UTree: {
            name: 'UTree',
            template: '<div />',
            props: ['items'],
          },
        },
      },
    })

    const treeStub = wrapper.findComponent({ name: 'UTree' })
    const items = treeStub.props('items')

    expect(items[0].label).toBe('2024')
    expect(items[1].label).toBe('2023')
  })
})
