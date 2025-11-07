import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getDynamicRoutes } from './prerender'
import * as glob from 'glob'

vi.mock('glob', () => ({
  glob: {
    sync: vi.fn(),
  },
}))

describe('getDynamicRoutes', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should generate routes for all locales and projects', () => {
    vi.mocked(glob.glob.sync).mockImplementation((pattern: string) => {
      if (pattern.includes('content/en/projects')) {
        return ['content/en/projects/blog.md', 'content/en/projects/food-rag.md']
      }
      if (pattern.includes('content/it/projects')) {
        return ['content/it/projects/blog.md', 'content/it/projects/food-rag.md']
      }
      return []
    })

    const routes = getDynamicRoutes()

    expect(routes).toContain('/it')
    expect(routes).toContain('/en')
    expect(routes).toContain('/en/projects/blog')
    expect(routes).toContain('/en/projects/food-rag')
    expect(routes).toContain('/it/projects/blog')
    expect(routes).toContain('/it/projects/food-rag')
    expect(routes).toHaveLength(6)
  })
})
