---
name: branch
description: >
  Manage branches — start new work, switch between tasks, or see what you're working on.
  Use when the user says "start a new feature", "start something new", "work on something
  else", "switch tasks", "go back to the main version", "what am I working on",
  "new branch", "switch branch", or wants to organize their work. Also triggers on
  casual phrases like "let me try something different" or "I want to work on X".
---

# Branch — Start Something New / Switch Tasks

Help the user create, list, or switch branches in plain language.

## Identify Intent

| What they're asking | Action |
|---------------------|--------|
| "Start something new" / "New feature" | Create a new branch |
| "Switch" / "Go back" / "What am I working on" | List or switch branches |
| "Delete" / "Clean up" | Remove a branch |

## Procedures

### Create a New Branch

1. Ask what they want to name it (suggest a name based on what they're working for)
2. Confirm: "I'll create a new branch called `<name>` from the main branch. OK?"

```bash
git checkout -b <name>
```

After: "Done! You're now on a new branch called `<name>`. Your work here won't affect the main version until you decide to merge it later."

### Switch to Another Branch

⚠️ **Check for uncommitted changes first**:

```bash
git status --short
```

If dirty:
- "You have unsaved changes. Want me to save them first, or carry them over to the new branch?"

Then:

```bash
git checkout <name>
```

After: "Done! You're now on the `<name>` branch."

### List Branches

```bash
git branch -v
```

Show in:

```
You're currently on: feature/login

Available branches:
  • feature/login ← you're here
  • feature/notifications
  • main
```

### Delete a Branch

⚠️ **Always confirm**: "This will delete the `<name>` branch. This won't delete the main version. Are you sure?"

```bash
git branch -d <name>
```

Use `-D` (force) only if explicitly requested.

After: "Done! The `<name>` branch is gone."

## Rules

- **Plain language** — "branch" is OK but explain it as "a separate version of your work"
- **If merging is relevant** → suggest the `/pr` skill
- **If they're on main and want to start new work** → encourage creating a branch naturally
- **If branch doesn't exist when switching** — offer to create it
- **Validate branch names** — no spaces, no special characters. Suggest clean names.
