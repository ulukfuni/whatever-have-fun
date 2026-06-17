Back to [[plans/01-agent-readiness/overview]]

# Phase 3: Security Scanning in CI

## Goal

Add dependency vulnerability scanning to the CI pipeline and pre-commit hooks. The CI already has lint/test/build/deploy but no security checks.

## Changes

- `.github/workflows/ci.yml` — add a `security` job running `bun audit`
- `package.json` — add a `security:audit` script wrapping `bun audit`
- `.husky/pre-commit` — consider lightweight security check (optional; keep fast)

## Data structures

N/A — this is configuration only.

## Implementation notes

- Add a `security` job to CI that runs after `lint` and before `test`
- The security job should fail on high/critical vulnerabilities
- Add `bun run security:audit` to package.json scripts
- `bun audit` has exit code behavior: consider `--fail-severity high` or accept default
- For `.husky/pre-commit`, keep it fast — `bun audit` can be slow, so consider only running it in CI, not pre-commit

## Routing

| Phase type     | Provider | Model     | When                      |
| -------------- | -------- | --------- | ------------------------- |
| Implementation | `codex`  | `gpt-5.4` | Mechanical config changes |

## Verification

### Static

- `bun run security:audit` runs without errors on a clean install
- CI config is valid YAML
- The `security` job appears in GitHub Actions when pushed

### Runtime

- Push a branch and verify the CI security job runs
- Verify `bun audit` actually detects vulnerabilities by checking its output
- `bun run build` — no impact on build
