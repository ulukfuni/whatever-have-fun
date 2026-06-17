Back to [[plans/01-agent-readiness/overview]]

# Phase 4: Dependency Update Automation

## Goal

Set up Dependabot to automatically create PRs for dependency updates. This addresses the "dependency update automation" gap in the audit.

## Changes

- `.github/dependabot.yml` — new file: Dependabot configuration

## Data structures

N/A — this is configuration only.

## Implementation notes

- Configure Dependabot for `npm` ecosystem (Bun uses the same registry)
- Set schedule to `weekly` to avoid PR noise
- Limit open PRs to 5 to prevent overwhelm
- Include both `dependencies` and `devDependencies`
- Add `bun` as the package manager (Dependabot supports it natively)

## Routing

| Phase type     | Provider | Model     | When                       |
| -------------- | -------- | --------- | -------------------------- |
| Implementation | `codex`  | `gpt-5.4` | Mechanical config creation |

## Verification

### Static

- `.github/dependabot.yml` is valid YAML
- Dependabot config references the correct directory (`/`)

### Runtime

- Push to a branch and verify Dependabot picks it up (check GitHub Insights → Dependency graph → Dependabot)
- `bun run build` — no impact on build
