---
id: 01-agent-readiness
created: 2026-06-16
status: active
---

# Agent Readiness Plan

## Context

The Kodus agent-readiness audit scored this repo at 23% (Level 1). Many items the audit flagged are already present (`.editorconfig`, `.env.example`, `.nvmrc`, `bun.lock`, `strict: true` in tsconfig, pre-commit hooks via husky, CI pipeline, `CODEOWNERS`, `CONTRIBUTING.md`, `SECURITY.md`, coverage config in vitest). This plan addresses the **actual remaining gaps** in priority order, targeting the biggest score improvements with practical effort.

## Scope

**In scope:**

- Adding meaningful unit tests for core utilities and hooks
- Architecture documentation
- Security scanning integration in CI
- Dependency update automation (Dependabot)
- Coverage thresholds enforcement
- Dead code detection (knip)
- Branch protection guidance

**Out of scope:**

- E2E testing (no E2E framework installed, lower priority for agent-readiness)
- Container config (Docker) — not relevant for Cloudflare Workers deployment
- API docs — this is a frontend app; no API surface to document
- Reconfiguring ESLint/Prettier/TS strict mode — already properly configured

## Constraints

- Bun is the package manager (not npm/pnpm) — all install scripts must use `bun`
- Cloudflare Workers deployment target — no Node.js-specific APIs
- TanStack Start file-based routing — tests must work with route tree generation
- Tailwind CSS v4 — no `@tailwindcss/postcss` plugin needed
- Budget: these should be small, low-risk changes that don't break existing functionality

Follow [[brain/principles#exhaust-the-design-space]]: for each audit category, I evaluated 2-3 approaches (e.g., build vs. skip E2E, add thresholds high vs. low) and chose the pragmatic option. Follow [[brain/principles#prove-it-works]]: every phase has runtime verification, not just "it compiles." Follow [[brain/principles#ship-in-small-phases]]: each phase is independently shippable and touches a small surface area.

## Applicable Skills

- **tdd** — when writing tests in Phases 1a-1c
- **commit** — for conventional commits when checking in plan deliverables
- **review** — for self-review of plan quality

## Phases

1. [[plans/01-agent-readiness/phase-1a-test-utils]] — Expand tests for lib/utils and lib/demo-store
2. [[plans/01-agent-readiness/phase-1b-test-hooks]] — Add tests for custom hooks (useChat, useAudioRecorder, useTTS)
3. [[plans/01-agent-readiness/phase-1c-test-integrations]] — Add tests for auth configuration
4. [[plans/01-agent-readiness/phase-2-architecture-docs]] — Create architecture documentation
5. [[plans/01-agent-readiness/phase-3-security-scanning]] — Add security scanning to CI pipeline
6. [[plans/01-agent-readiness/phase-4-dep-automation]] — Set up Dependabot for dependency updates
7. [[plans/01-agent-readiness/phase-5-coverage-thresholds]] — Enforce coverage thresholds in vitest
8. [[plans/01-agent-readiness/phase-6-dead-code]] — Add knip for dead code detection
9. [[plans/01-agent-readiness/phase-7-branch-protection]] — Document branch protection rules

## Verification

- `bun run test` passes with all new tests
- `bun run lint` passes
- `bun run build` passes
- `bun audit` runs in CI
- All docs are written and linkable from README
