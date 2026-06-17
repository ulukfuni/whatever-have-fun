Back to [[plans/01-agent-readiness/overview]]

# Phase 6: Dead Code Detection

## Goal

Add [knip](https://knip.dev/) to detect unused files, exports, and dependencies. This addresses the "dead code detection" gap in the audit.

## Changes

- `knip.json` — new file: knip configuration
- `package.json` — add `knip` to devDependencies, add `lint:dead-code` script
- Run knip initially and fix or ignore any false positives

## Data structures

N/A — this is tooling configuration.

## Implementation notes

- Install `knip` as a devDependency
- Configure knip to work with Vite + TanStack Start:
  - Entry: `src/router.tsx`, `src/routes/**`
  - Ignore `src/routeTree.gen.ts` (auto-generated)
  - Ignore storybook files (`**/*.stories.*`)
  - Ignore `src/data/*` (demo data may not be imported yet)
- Add a `lint:dead-code` script: `knip`
- Do NOT add knip to CI pre-commit hooks initially — run it manually first to baseline
- After initial cleanup, consider adding to CI lint job

## Routing

| Phase type     | Provider | Model     | When                     |
| -------------- | -------- | --------- | ------------------------ |
| Implementation | `codex`  | `gpt-5.4` | Tooling setup and config |

## Verification

### Static

- `bun run lint:dead-code` runs without crashing
- knip reports unused dependencies/files (expected for a demo project)
- `bun run build` — no impact on build

### Runtime

- Review knip output and verify reported unused items are actually unused (not false positives)
- Fix any real dead code by removing unused exports or adding `@public` JSDoc tags where appropriate
