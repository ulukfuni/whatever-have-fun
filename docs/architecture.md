# Architecture

## Overview

This is a [TanStack Start](https://tanstack.com/start) application deployed to [Cloudflare Workers](https://workers.cloudflare.com/). It uses file-based routing, server functions, and a modern React 19 stack.

## Tech Stack

| Layer           | Technology                                                      |
| --------------- | --------------------------------------------------------------- |
| Framework       | TanStack Start (React 19)                                       |
| Routing         | TanStack Router (file-based)                                    |
| State           | TanStack Store (client), TanStack Query (server)                |
| Database        | TanStack DB Collections (local-first)                           |
| Auth            | Better Auth                                                     |
| Styling         | Tailwind CSS v4                                                 |
| UI              | shadcn/ui + Radix UI                                            |
| AI              | TanStack AI (multi-provider: Anthropic, OpenAI, Gemini, Ollama) |
| Analytics       | PostHog                                                         |
| Testing         | Vitest + Testing Library                                        |
| Linting         | ESLint (Tanstack config) + Prettier                             |
| Deployment      | Cloudflare Workers (via Wrangler)                               |
| Package Manager | Bun                                                             |

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── storybook/       # Storybook stories
│   └── *.tsx            # Feature components (demo-* are examples)
├── routes/              # File-based routes (TanStack Router)
│   ├── __root.tsx       # Root layout
│   ├── index.tsx        # Home page
│   └── api/             # API routes
├── lib/                 # Shared utilities
│   ├── utils.ts         # cn() helper (clsx + tailwind-merge)
│   ├── auth.ts          # Better Auth server config
│   ├── auth-client.ts   # Better Auth client
│   └── demo-*.ts        # Demo/example code
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

## Routing

Routes are defined as files in `src/routes/`. TanStack Router auto-generates the route tree in `src/routeTree.gen.ts`.

- `__root.tsx` — Root layout (HTML shell, head, scripts)
- `index.tsx` — Home page
- `*.tsx` — Static routes
- `$param.tsx` — Dynamic routes
- `api/*` — API routes with server handlers

## State Management

- **Client state**: TanStack Store (`@tanstack/react-store`)
- **Server state**: TanStack Query (`@tanstack/react-query`)
- **Local-first DB**: TanStack DB Collections (`@tanstack/react-db`)

## Authentication

Better Auth is configured in `src/lib/auth.ts` (server) and `src/lib/auth-client.ts` (client). It supports:

- Email/password authentication
- Social providers (configurable)
- Session management

## AI Integration

TanStack AI provides a unified interface for multiple AI providers:

- Anthropic (Claude)
- OpenAI (GPT)
- Google (Gemini)
- Ollama (local)

Configured via environment variables (see `.env.example`).

## Deployment

1. `bun run build` — Builds the app via Vite + TanStack Start
2. `bun run deploy` — Deploys to Cloudflare Workers via Wrangler

Secrets are managed via `wrangler secret put <KEY>`.

## Environment Variables

| Variable             | Required        | Description                                                |
| -------------------- | --------------- | ---------------------------------------------------------- |
| `ANTHROPIC_API_KEY`  | For AI features | Anthropic API key                                          |
| `BETTER_AUTH_URL`    | Yes             | App URL                                                    |
| `BETTER_AUTH_SECRET` | Yes             | Auth secret (generate with `bunx @better-auth/cli secret`) |
| `VITE_POSTHOG_KEY`   | For analytics   | PostHog project API key                                    |
| `VITE_POSTHOG_HOST`  | No              | Custom PostHog host                                        |
