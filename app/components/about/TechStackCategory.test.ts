import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TechStackCategory from './TechStackCategory.vue'

describe('TechStackCategory', () => {
  it('should render category name and technologies', () => {
    const category = {
      name: 'Frontend',
      variant: 'solid' as const,
      technologies: ['Vue.js', 'React', 'TypeScript'],
    }

    const wrapper = mount(TechStackCategory, {
      props: { category },
      global: {
        stubs: {
          UBadge: { template: '<span class="badge"><slot /></span>' },
        },
      },
    })

    expect(wrapper.text()).toContain('Frontend')
    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('React')
    expect(wrapper.text()).toContain('TypeScript')
  })

  it('should render correct number of technology badges', () => {
    const category = {
      name: 'Backend',
      variant: 'outline' as const,
      technologies: ['Node.js', 'Python'],
    }

    const wrapper = mount(TechStackCategory, {
      props: { category },
      global: {
        stubs: {
          UBadge: { template: '<span class="badge"><slot /></span>' },
        },
      },
    })

    expect(wrapper.findAll('.badge')).toHaveLength(2)
  })
})
