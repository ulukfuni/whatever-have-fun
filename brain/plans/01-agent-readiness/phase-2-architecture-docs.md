Back to [[plans/01-agent-readiness/overview]]

# Phase 2: Create Architecture Documentation

## Goal

Add an architecture document that gives any developer (human or agent) a clear mental model of the system. This addresses the "architecture docs" gap in the audit.

## Changes

- `docs/architecture.md` — new file: system architecture overview

## Data structures

Document the following key types/schemas (one-line sketches, not full definitions):

- `AppRouter` — TanStack Router type from `routeTree.gen.ts`
- `AuthClient` — Better Auth client interface
- `PostHogConfig` — PostHog initialization config

## Content to cover

1. **System overview** — TanStack Start app → Cloudflare Workers → edge rendering
2. **Directory structure** — what lives in `src/` subdirectories and why
3. **Data flow** — TanStack Query for server state, TanStack Store for client state, TanStack DB for real-time collections
4. **Routing** — file-based routing with TanStack Router, route tree generation
5. **Authentication** — Better Auth integration, session management
6. **Deployment** — Build pipeline: Vite → Cloudflare Workers via Wrangler
7. **Key integrations** — PostHog analytics, Better Auth
8. **Component patterns** — shadcn/ui in `src/components/ui/`, page components in `src/routes/`, shared components in `src/components/`

## Routing

| Phase type | Provider | Model             | When                                                        |
| ---------- | -------- | ----------------- | ----------------------------------------------------------- |
| Planning   | `claude` | `claude-opus-4-6` | Drawing from codebase knowledge to produce architecture doc |

## Verification

### Static

- `docs/architecture.md` exists and is valid markdown
- All links in the doc are valid relative links
- Add a link to `docs/architecture.md` from `README.md` under a "Architecture" heading

### Runtime

- An agent reading `docs/architecture.md` should be able to navigate the codebase and locate any major module
- `bun run build` — no impact on build (documentation only)
