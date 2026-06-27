---
name: undo
description: >
  Undo mistakes and revert changes. Use when the user says "undo that", "I messed up",
  "go back", "that was wrong", "revert", "take it back", "I didn't mean that",
  "undo my last save", "throw away my changes", or wants to reverse something.
  Also triggers on "help I broke things" and similar panic phrases.
---

# Undo — I Made a Mistake

Help the user safely undo work. Always confirm before acting. Never lose work accidentally.

## Identify What They Mean

First determine what they want to undo:

| What they likely mean | How to detect |
|------------------------|---------------|
| Undo last commit, keep changes | Most common — ask to confirm |
| Throw away all uncommitted changes | "I don't want these changes", "start over" |
| Revert a specific file | They name a file |
| Unstage files | Files were added/staged but not committed |

## Procedures

### Undo Last Commit (Keep Changes)

⚠️ **Always confirm first**: "I'll undo your last save but keep all the code changes. OK?"

```bash
git reset --soft HEAD~1
```

After: "Done! Your last save was undone, but all your changes are still here. You can save again whenever you're ready."

### Discard All Uncommitted Changes

⚠️ **Always confirm**: "This will throw away ALL your unsaved changes and put everything back to how it was last saved. Are you sure?"

```bash
git checkout -- .
git clean -fd
```

After: "Done! Everything is back to the way it was after your last save."

### Revert a Specific File

⚠️ **Always confirm**: "This will put `<file>` back to how it was last saved. OK?"

```bash
git checkout -- <file>
```

After: "Done! `<file>` is back to how it was after your last save."

### Unstage Files (Un-commit)

```bash
git reset HEAD <file>
```

If no file specified and they want to unstage everything:

```bash
git reset HEAD .
```

After: "Done! These files aren't saved for committing anymore, but your changes are still here."

## Rules

- **ALWAYS confirm before destructive actions** — show what will happen
- **Explain in plain language** — "save" not "commit", "throw away" not "discard"
- **If unsure what they want to undo** — ask, don't guess. List recent commits and their messages.
- **Never force push** — this skill does not cover remote operations
- **If they mention remote/PR** — suggest the `/pr` skill instead
