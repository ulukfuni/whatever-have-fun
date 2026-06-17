Back to [[plans/01-agent-readiness/overview]]

# Phase 5: Coverage Thresholds Enforcement

## Goal

Configure vitest coverage thresholds so CI fails when coverage drops below a baseline. Currently, vitest has coverage configured but no `thresholds` — CI will pass with 0% coverage.

## Changes

- `vitest.config.ts` — add `thresholds` to the `coverage` object
- `.github/workflows/ci.yml` — CI already runs `bun run test -- --coverage`, thresholds will enforce automatically

## Data structures

N/A — this is configuration only.

## Implementation notes

- Add `thresholds` with initial modest values (can be adjusted upward later):
  - `lines: 20` — 20% line coverage (baseline, can increase as tests are added)
  - `branches: 15`
  - `functions: 20`
  - `statements: 20`
- These are intentionally low as a starting baseline — the goal is to prevent regression, not to demand 80%+ immediately
- If the current test suite doesn't meet the thresholds, Phase 1 tests should bring it above the bar

## Routing

| Phase type     | Provider | Model     | When                   |
| -------------- | -------- | --------- | ---------------------- |
| Implementation | `codex`  | `gpt-5.4` | One-line config change |

## Verification

### Static

- `bun run test -- --coverage` runs and produces coverage report
- Coverage thresholds are reported in output

### Runtime

- Verify the build passes with current tests meeting the threshold
- If thresholds are too high, adjust downward to match actual coverage + small buffer
- CI test job should fail if coverage drops below threshold
