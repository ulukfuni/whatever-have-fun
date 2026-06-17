# AGENTS.md - Development Guide for AI Agents

## Project Overview

This is a **TanStack Start** application (React 19) deployed to Cloudflare Workers. It uses file-based routing, server functions, and a modern React stack with Tailwind CSS v4 and shadcn/ui.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | TanStack Start (React 19) |
| Routing | TanStack Router (file-based) |
| State | TanStack Store (client), TanStack Query (server) |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui + Radix UI |
| Auth | Better Auth |
| AI | TanStack AI (Anthropic, OpenAI, Gemini, Ollama) |
| Analytics | PostHog |
| Testing | Vitest + Testing Library + Playwright |
| Linting | ESLint (TanStack config) + Prettier |
| Deployment | Cloudflare Workers (Wrangler) |
| Package Manager | Bun |

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (button, input, etc.)
│   ├── storybook/       # Storybook stories
│   └── *.tsx            # Feature components (demo-* are examples)
├── routes/              # File-based routes (TanStack Router)
│   ├── __root.tsx       # Root layout (HTML shell)
│   ├── index.tsx        # Home page
│   └── api/             # API routes with server handlers
├── lib/                 # Shared utilities
│   ├── utils.ts         # cn() helper (clsx + tailwind-merge)
│   ├── auth.ts          # Better Auth server config
│   └── auth-client.ts   # Better Auth client
├── hooks/               # Custom React hooks
├── integrations/        # Third-party integrations
│   ├── better-auth/     # Auth integration
│   ├── posthog/         # Analytics integration
│   └── tanstack-query/  # Query provider & devtools
├── data/                # Data models
├── db-collections/      # TanStack DB collections
├── styles.css           # Global styles (Tailwind)
└── router.tsx           # Router configuration
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server (port 3000) |
| `bun run build` | Build for production |
| `bun run test` | Run unit tests (Vitest) |
| `bun run lint` | Run ESLint |
| `bun run format` | Format with Prettier + fix ESLint |
| `bun run typecheck` | TypeScript type checking |
| `bun run deploy` | Build + deploy to Cloudflare Workers |
| `bun run storybook` | Start Storybook (port 6006) |
| `bun run knip` | Dead code detection |

## Code Conventions

### General

- **TypeScript strict mode** is enabled — always handle types properly
- **Functional components** with hooks — no class components
- **Named exports** preferred over default exports
- **File names**: PascalCase for components (`Button.tsx`), camelCase for utilities (`utils.ts`)

### Imports

- Use path aliases: `#/lib/utils` instead of `../../lib/utils`
- Use type-only imports for types: `import type { VariantProps } from 'class-variance-authority'`
- Group imports: external packages first, then internal (`#/...`)

### Components

- Use **shadcn/ui components** from `src/components/ui/` as building blocks
- Use the `cn()` utility from `#/lib/utils` for conditional class merging
- Use **CVA** (class-variance-authority) for component variants
- Use **Radix UI Slot** pattern for `asChild` prop support
- Add `data-slot` and `data-variant` attributes for devtools compatibility

### Styling

- **Tailwind CSS v4** — use utility classes directly
- Use CSS variables for theming (`var(--color-primary)`, etc.)
- Dark mode via `dark:` variant and `data-theme` attribute
- Avoid inline styles unless dynamic values are needed

### State Management

- **TanStack Store** (`@tanstack/react-store`) for client-side global state
- **TanStack Query** (`@tanstack/react-query`) for server state and caching
- **TanStack DB Collections** for local-first data
- Keep state as close to where it's used as possible

### Routing

- Routes are **file-based** in `src/routes/`
- Use `createFileRoute('/path')({ component: MyComponent })` pattern
- Dynamic segments use `$` prefix: `$guitarId.tsx`
- API routes use the `server` property with handlers
- Loaders run on the server before rendering

### Server Functions

- Use `createServerFn` for server-side logic accessible from client
- Define in route files using the `server` property
- Always validate and sanitize inputs on the server

### Authentication

- Better Auth is configured in `src/lib/auth.ts` (server) and `src/lib/auth-client.ts` (client)
- Use `useSession()` hook to access auth state
- Protect routes with server-side session checks

### Testing

- Unit tests: `*.test.ts` or `*.test.tsx` alongside source files
- Use Vitest + Testing Library for component tests
- E2E tests: `e2e/*.spec.ts` using Playwright
- Run `bun run test` before committing

### Environment Variables

- Document all env vars in `.env.example`
- Prefix client-side vars with `VITE_`
- Use `wrangler secret put <KEY>` for production secrets
- Never commit `.env.local`

## Adding shadcn Components

```bash
bunx shadcn@latest add <component-name>
```

New components go in `src/components/ui/`. They use the `new-york` style and `zinc` base color.

## Commit Messages

Follow conventional commits:
- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation
- `style:` formatting (no logic change)
- `refactor:` code restructuring
- `test:` adding/updating tests
- `chore:` maintenance tasks

## Pre-commit Hooks

Husky runs `bun run lint` on every commit. Ensure lint passes before committing.

## Architecture Decisions

- **Server-first**: Leverage TanStack Start's SSR capabilities
- **File-based routing**: Routes map directly to files in `src/routes/`
- **Type safety**: Strict TypeScript throughout, `noUnusedLocals`, `noUnusedParameters`
- **Component composition**: shadcn/ui + Radix primitives over custom implementations
- **Path aliases**: `#/` maps to `./src/` for clean imports
