# API Documentation

## Overview

This application uses TanStack Start with file-based routing. API routes are defined in `src/routes/` using server functions and API route handlers.

## Authentication

Authentication is handled by [Better Auth](https://www.better-auth.com). The auth client is configured in `src/lib/auth-client.ts` and the server instance in `src/lib/auth.ts`.

### Auth Routes

| Method | Path | Description |
|--------|------|-------------|
| GET/POST | `/api/auth/*` | Better Auth endpoints (login, signup, session, etc.) |

All auth endpoints are handled by Better Auth's catch-all route at `src/routes/api/auth/$.ts`.

## Server Functions

Server functions are created using `createServerFn` from `@tanstack/react-start`. They can be defined in any route file using the `server` property.

### Example

```typescript
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/hello')({
  server: {
    handlers: {
      GET: () => json({ message: 'Hello, World!' }),
    },
  },
})
```

## AI Chat Endpoint

| Method | Path | Description |
|--------|------|-------------|
| POST | `/demo/api/ai/chat` | Chat with AI (multi-provider: Anthropic, OpenAI, Gemini, Ollama) |
| POST | `/demo/api/ai/image` | Generate images via OpenAI |
| POST | `/demo/api/ai/structured` | Get structured AI responses |
| POST | `/demo/api/ai/transcription` | Audio transcription |
| POST | `/demo/api/ai/tts` | Text-to-speech |

### Chat Request Body

```json
{
  "messages": [
    { "role": "user", "content": "Hello!" }
  ]
}
```

### Image Request Body

```json
{
  "prompt": "A sunset over mountains",
  "numberOfImages": 1,
  "size": "1024x1024"
}
```

## Environment Variables

See `.env.example` for all required and optional environment variables.

## Data Models

### Guitar

```typescript
{
  id: number
  name: string
  description: string
  price: number
  image: string
}
```

### Message

```typescript
{
  id: string
  role: 'user' | 'assistant'
  content: string
  createdAt: Date
}
```
