# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly:

1. **Do not** open a public GitHub issue for the vulnerability.
2. Open a [GitHub Security Advisory](https://github.com/vietnguyen/whatever-have-fun/security/advisories/new) or contact the maintainers directly.
3. Provide a clear description of the issue, steps to reproduce, and any potential impact.

We will acknowledge your report and work to address the issue promptly.

## Supported Versions

This project is in active development. The `main` branch receives security updates.

## Security Best Practices

- Never commit secrets or API keys to the repository. Use `.env.local` (gitignored).
- All dependencies are audited via `bun audit` in CI.
- Environment variables are validated at startup.
