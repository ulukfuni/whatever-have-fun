---
name: diff
description: >
  Show what changed in the workspace in a human-readable way. Use when the user asks
  "what did I change", "show me what's different", "what's new", "see my changes",
  "what's been modified", "show me my work", or wants to review before saving.
  Also triggers on "diff", "compare", and casual phrases like "what's different".
---

# Diff — What Did I Change?

Show the user's current changes in a friendly, readable format. No raw git diff.

## Steps

### 1. Gather Changes

```bash
# Full diff
git diff HEAD

# Summary of changed files
git diff --stat HEAD

# If no staged/unstaged changes, check unstaged only
git diff --stat
git diff --cached --stat
```

### 2. Format the Response

Present each file's changes in plain language:

```
📋 Here's what you've changed:

📄 src/components/Button.tsx
   → Added a new "variant" option (2 new lines)
   → Removed unused import (1 line deleted)

📄 src/lib/utils.ts
   → New file with helper functions

📊 Summary: 2 files changed, 15 additions, 1 deletion
```

### Rules

- **Summarize, don't dump** — don't show the full raw diff. Describe what changed in each file.
- **Group by type** — separate new files, modified files, deleted files
- **If too many changes** (>10 files or >200 lines), show a summary and ask if they want details on specific files
- **If no changes** → "Nothing's changed since your last save. All clean!"
- **Use line additions/deletions count** — `git diff --stat` gives this
- **Offer next steps** — "Want me to save these changes?" or "Want to see details on a specific file?"

### Optional Detail

If the user wants to see the actual code changes, run:
```bash
git diff HEAD -- <file>
```
Then show the diff in a compact format.
