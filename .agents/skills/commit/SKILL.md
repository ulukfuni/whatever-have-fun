---
name: commit
description: >
  Save current work as a commit. Use when the user says "save my work", "save this",
  "I'm done with this", "keep these changes", "commit", "lock this in", or wants to
  preserve their current changes. Also triggers on casual phrases like "I'm happy with
  this" or "let's keep this". Enhances the default commit skill with plain-language
  explanations and confirmations for non-dev users.
---

# Commit — Save Your Work

Save the current changes as a commit. Explain what's happening in plain language.

## Steps

### 1. Check for Changes

```bash
git status --short
```

If no changes:
"Nothing to save — no changes since your last save."

### 2. Show What Will Be Saved

Run:

```bash
git diff --stat HEAD
```

Format for the user:

```
You're about to save changes to these files:
  📄 src/components/Button.tsx (2 changes)
  📄 src/lib/utils.ts (new file)

Want me to go ahead and save this?
```

### 3. Ask for a Description

Ask the user to describe what they changed. Suggest a summary based on the files if they're stuck.

Examples:
- "Looks like you added a new component — want me to use that as the save message?"
- "Quick description of what you did: (e.g. 'Add login button to header')"

### 4. Confirm and Execute

⚠️ **Always confirm before saving:**

"I'll save these changes with the message: `<your message>`. OK?"

```bash
git add -A
git commit -m "<message>"
```

### 5. After Saving

"Done! Your changes are saved. Want me to share them with the team, or keep working?"

## Commit Message Style

Follow conventional commits format but keep it approachable:

```
<type>: <short description>
```

Types:
- `feat:` — new feature
- `fix:` — bug fix
- `chore:` — maintenance
- `docs:` — documentation

Examples:
- `feat: add login button to header`
- `fix: resolve dark mode colors on settings page`

## Rules

- **Always confirm** — show files + message before executing
- **Don't include unrelated files** — only commit what changed for this task
- **Plain language** — "save" not "commit", "changes" not "diff"
- **One logical save per task** — don't bundle unrelated changes
- **If the user has a PR** — mention the PR will get updated after push
