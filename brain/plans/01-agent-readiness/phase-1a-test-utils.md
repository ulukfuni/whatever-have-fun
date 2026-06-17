Back to [[plans/01-agent-readiness/overview]]

# Phase 1a: Test Utilities and Store

## Goal

Expand test coverage for the most fundamental, stateless modules: `cn()` utility and the demo store. These have clear inputs/outputs and are the easiest to test well.

## Changes

- `src/lib/utils.test.ts` — expand with edge cases: `undefined`, `null`, numbers, objects, arrays, class-variance-authority `cva` variant merging
- `src/lib/demo-store.test.ts` — new file: test TanStack Store state mutations (set, update, reset)

## Data structures

- `DemoStore` — shape of the demo store state (inspect the store in `src/lib/demo-store.ts` for exact fields)
- `cn(...args: ClassValue[])` — variadic class name merger wrapping `clsx` + `tailwind-merge`

## Routing

| Phase type     | Provider | Model     | When                                        |
| -------------- | -------- | --------- | ------------------------------------------- |
| Implementation | `codex`  | `gpt-5.4` | Writing tests against existing utility code |

## Verification

### Static

- `bun run test` — both test files pass
- `bun run lint` — no lint errors
- `bun run build` — type checking passes

### Runtime

- Run `bun run test -- --coverage` and verify `src/lib/utils.ts` and `src/lib/demo-store.ts` appear in the coverage report
- Edge cases: empty inputs, falsy values, tailwind class deduplication conflicts
