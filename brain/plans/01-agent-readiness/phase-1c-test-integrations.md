Back to [[plans/01-agent-readiness/overview]]

# Phase 1c: Test Integration Configuration

## Goal

Add tests for auth client configuration and integration setup code. These verify that the Better Auth client is correctly initialized and exports are structurally sound.

## Changes

- `src/lib/auth.test.ts` — test auth configuration: client creation, exported methods, URL configuration
- `src/lib/auth-client.test.ts` — test browser-side auth client exports

## Data structures

- `AuthClient` — inspect `src/lib/auth.ts` for the exact shape (Better Auth client with `.signIn`, `.signOut`, `.getSession`, etc.)
- `authClient` — browser-side client from `src/lib/auth-client.ts`

## Routing

| Phase type     | Provider | Model     | When                             |
| -------------- | -------- | --------- | -------------------------------- |
| Implementation | `codex`  | `gpt-5.4` | Writing integration config tests |

## Verification

### Static

- `bun run test` — auth tests pass
- `bun run lint` — no lint errors
- `bun run build` — type checking passes

### Runtime

- Tests should verify exports exist and are the correct type (function, object)
- Mock Better Auth server calls — do not make real network requests
- `bun run test -- --coverage` — auth files appear in coverage report
