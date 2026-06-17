import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('handles conditional classes', () => {
    const includeBar = true
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    expect(cn('foo', includeBar && 'bar', 'baz')).toBe('foo bar baz')
  })

  it('deduplicates tailwind classes', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2')
  })

  it('returns empty string for no arguments', () => {
    expect(cn()).toBe('')
  })
})
