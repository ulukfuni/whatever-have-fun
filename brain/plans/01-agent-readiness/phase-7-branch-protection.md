Back to [[plans/01-agent-readiness/overview]]

# Phase 7: Branch Protection Documentation

## Goal

Document branch protection rules for the `main` branch. GitHub doesn't support branch protection via config files (it's a repo setting), so this phase creates documentation and a setup checklist.

## Changes

- `docs/branch-protection.md` — new file: branch protection checklist and rationale
- `CONTRIBUTING.md` — add a note referencing branch protection rules

## Data structures

N/A — this is documentation only.

## Content to cover

Document the following rules to configure in GitHub Settings → Branches → `main`:

1. **Require pull request reviews** — 1 approval required before merging
2. **Require status checks to pass** — CI lint, test, and build jobs must pass
3. **Require conversation resolution** — all PR review comments must be resolved
4. **Require linear history** — no merge commits (use squash or rebase)
5. **Include administrators** — rules apply to admins too
6. **Restrict pushes** — no direct pushes to `main`, all changes via PR

## Routing

| Phase type | Provider | Model             | When                  |
| ---------- | -------- | ----------------- | --------------------- |
| Planning   | `claude` | `claude-opus-4-6` | Writing documentation |

## Verification

### Static

- `docs/branch-protection.md` exists and is valid markdown
- `CONTRIBUTING.md` references the branch protection doc
- `bun run build` — no impact on build

### Runtime

- A human must manually apply these rules in GitHub repo settings (not automatable via file)
- Verify the checklist is complete by comparing against GitHub's branch protection UI
