Back to [[plans/01-agent-readiness/overview]]

# Phase 1b: Test Custom Hooks

## Goal

Add unit tests for the project's custom React hooks. These test state transitions and side-effect behavior using `@testing-library/react` `renderHook`.

## Changes

- `src/hooks/demo.useChat.test.ts` — test chat hook: message append, clear, initial empty state
- `src/hooks/demo-useAudioRecorder.test.ts` — test audio recorder hook: idle → recording → paused → stopped lifecycle
- `src/hooks/demo-useTTS.test.ts` — test TTS hook: speak/stop/toggle state transitions

## Data structures

- `UseChatReturn` — `{ messages: Message[], append: (msg) => void, clear: () => void }`
- `UseAudioRecorderReturn` — `{ status: 'idle' | 'recording' | 'paused', start, stop, pause, resume }`
- `UseTTSReturn` — `{ speaking: boolean, speak: (text) => void, stop: () => void, toggle: () => void }`

## Routing

| Phase type     | Provider | Model     | When                               |
| -------------- | -------- | --------- | ---------------------------------- |
| Implementation | `codex`  | `gpt-5.4` | Writing hook tests with renderHook |

## Verification

### Static

- `bun run test` — all hook tests pass
- `bun run lint` — no lint errors in test files
- `bun run build` — type checking passes

### Runtime

- Run `bun run test -- --coverage` and verify hook files appear in coverage report
- Verify tests exercise state transitions (not just initial state)
- Mock browser APIs (MediaRecorder, SpeechSynthesis) as needed — document what's mocked
