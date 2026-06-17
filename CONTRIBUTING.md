# Contributing to whatever-have-fun

Thanks for your interest in contributing! Here's how to get started.

## Development Setup

1. **Prerequisites**: Bun 1.2+, Node.js 22 (see `.nvmrc`)
2. **Install dependencies**: `bun install`
3. **Start dev server**: `bun run dev` (runs on port 3000)
4. **Environment variables**: Copy `.env.example` to `.env.local` and fill in the values you need

## Available Scripts

| Command             | Description                            |
| ------------------- | -------------------------------------- |
| `bun run dev`       | Start development server               |
| `bun run build`     | Build for production                   |
| `bun run test`      | Run tests (Vitest)                     |
| `bun run lint`      | Run ESLint                             |
| `bun run format`    | Format with Prettier + fix ESLint      |
| `bun run check`     | Check formatting with Prettier         |
| `bun run deploy`    | Build and deploy to Cloudflare Workers |
| `bun run storybook` | Start Storybook (port 6006)            |

## Tech Stack

- **Framework**: TanStack Start (React 19)
- **Routing**: TanStack Router (file-based routing in `src/routes/`)
- **State**: TanStack Store / TanStack Query
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (in `src/components/ui/`)
- **Testing**: Vitest
- **Deployment**: Cloudflare Workers

## Code Style

- TypeScript strict mode is enabled
- ESLint config: `@tanstack/eslint-config` (see `eslint.config.js`)
- Prettier config: see `prettier.config.js`
- Run `bun run format` before committing to auto-fix style issues

## Project Structure

```
src/
├── components/     # UI components (shadcn + custom)
├── routes/         # File-based routes (TanStack Router)
├── lib/            # Shared utilities and libraries
├── hooks/          # React hooks
├── integrations/   # Third-party integrations (auth, posthog, query)
├── data/           # Data models
└── db-collections/ # TanStack DB collections
```

## Making Changes

1. Create a branch from `main`
2. Make your changes
3. Run `bun run lint` and `bun run test` to verify
4. Run `bun run format` to auto-format
5. Open a PR with a clear description

## Adding shadcn Components

```bash
bunx shadcn@latest add <component-name>
```

## Commit Messages

Follow conventional commits:

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation
- `style:` formatting (no logic change)
- `refactor:` code restructuring
- `test:` adding/updating tests
- `chore:` maintenance tasks
