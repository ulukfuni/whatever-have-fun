---
name: pr
description: >
  Create and view pull requests to share work with the team. Use when the user says
  "share my changes", "I'm done with this feature", "put this out for review",
  "merge my work", "open a PR", "I'm ready to merge", "create a pull request",
  or wants to show their work to others. Also triggers on casual phrases like
  "let the team see this", "I think this is ready", or "review time". For users
  who don't know what a PR is — explain it simply.
---

# PR — Share Your Changes with the Team

Create a pull request so others can review and merge your work. Explains what a PR is if needed.

## For Users Unfamiliar with PRs

If the user seems unsure what a PR is, explain briefly:

> A pull request (PR) is like saying "Hey team, here's what I built — please take a tell me if it looks good before we add it to the main version."

## Steps to Create a PR

### 1. Gather Context

```bash
# Current branch
git branch --show-latest

# Commits on this branch not on main
git log main..HEAD --oneline

# Files changed
git diff main...HEAD --stat

# Check if already pushed
git status -sb
```

### 2. Push Branch (If Needed)

If not pushed yet:

"I'll upload your branch to GitHub first. OK?"

```bash
git push -u origin <branch-name>
```

### 3. Suggest PR Title and Body

- **Title**: Derive from branch name or commit messages (kebab-case → Title Case)
- **Body**: Summarize the changes in bullet points. Use plain language.

### 4. Create the PR

```bash
gh pr create --title "<title>" --body "<body>" --base main
```

### 5. Confirm

After: "Done! I opened a pull request: <PR URL>"

Then explain what happens next:
> "Your team can now see your changes and leave comments. When everyone's happy, someone will merge it into the main version. I'll let you know if there's any feedback."

## View Existing PRs

If the user wants to see their current PR:

```bash
gh pr view
```

Show:
- PR title, number, status (open/merged/closed)
- Review status (approved, changes requested, pending)
- URL

## Rules

- **Auto-detect current branch** — don't ask which branch if it's obvious
- **Confirm before pushing** — uploading is public
- **Confirm before creating PR** — show the proposed title/body
- **Explain in plain language** — "upload" not "push to remote", "team review" not "pull request workflow"
- **If no GitHub remote found** → let the user know this skill requires a GitHub-backed project
- **If `gh` CLI not installed** → tell the user they need GitHub CLI installed
