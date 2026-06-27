---
name: status
description: >
  Show the current workspace status in plain language. Use when the user asks
  "what's the status", "where am I", "what's happening", "am I done", "catch me up",
  "what's going on", or wants a summary of their current work. Also triggers on
  "status check" and similar casual check-in phrases. Great for non-dev users who
  want to know where they are in their workflow.
---

# Status — Where Am I?

Give the user a plain-language summary of their current workspace. No git jargon.

## Steps

### 1. Gather Information

Run these commands silently (don't show raw output to the user):

```bash
# Current branch
git branch --show-current

# Files changed vs HEAD
git status --short

# Ahead/behind remote
git status -sb

# Linked PR (if gh CLI available)
gh pr view --json number,title,url,state 2>/dev/null || echo "NO_PR"
```

### 2. Format the Response

Present the information in this order, using plain language:

```
📍 You're on branch: <branch-name>

📝 Changes:
  - <file1> (modified)
  - <file2> (new file)

🚀 Sync status: <X commits ahead / Y commits behind / up to date>

🔀 Pull request: <PR title (#number) — open / merged / none>
```

### Rules

- **No git jargon** — say "You're on branch" not "HEAD is at", say "Changes" not "Working tree modifications"
- **If clean workspace** → "Everything looks clean! No changes since your last save."
- **If on main** → Gently suggest starting a new branch for new work
- **If PR is open** → Include the PR URL and status
- **If several commits unpushed** → Suggest pushing or opening a PR
- **Keep it concise** — 5-8 lines max. Offer to go deeper if they want.
