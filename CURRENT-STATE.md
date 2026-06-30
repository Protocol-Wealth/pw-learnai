# Current State

Last reviewed: 2026-06-30.

## Live status

- Live site: https://protocol-wealth.github.io/pw-learnai/
- Default branch: `main`
- Latest deployed commit verified in this session: `bfd00b637e26c97840c46201503e8fa5c3c3eb2a`
- Latest completed deploy workflow: `Deploy to GitHub Pages` run `28415375952`
- Latest completed CodeQL run on `main`: `28415375711`
- Latest completed bundle workflow on `main`: `28415375930`

## What is live

- Homepage now starts with a visual `First Hour Walkthrough` for beginners.
- Beginner route is segmented into `Beginner`, `Intermediate`, and `Advanced`.
- `SetupPathBuilder` lets the user choose Claude, Codex, or both and generates a bounded first prompt.
- Module 00 explains why Markdown is useful for durable instructions and why HTML is useful for immediate visual browser feedback.
- Module 14 introduces Data.gov, the National Archives Catalog API, OAI-PMH, source notes, and safe public-data habits.
- NotebookLM bundles include the starter and public-data paths.
- Browser tools remain client-only: no login, telemetry, backend, external API calls, or secrets.

## Verification

Commands run during the closeout session:

```bash
pnpm bundle
pnpm build
git diff --check
```

Additional checks:

- Source scan found no runtime `fetch`, `XMLHttpRequest`, `axios`, Tailwind CDN, or live Nexus calls in `src`, `components`, or `index.html`.
- Live Pages responses returned HTTP 200 for:
  - `/pw-learnai/`
  - `/pw-learnai/modules/00-getting-started/module.md`
  - `/pw-learnai/modules/14-working-with-public-data/module.md`
  - `/pw-learnai/notebooklm/starter-bundle.md`
  - `/pw-learnai/notebooklm/data-bundle.md`

## Known constraints

- There is no test or lint suite by design. `pnpm build` is the gate.
- Do not run `vite` directly. Use `pnpm dev`, `pnpm build`, or `pnpm preview` so public content sync hooks run.
- When module content changes, run `pnpm bundle` and commit regenerated `notebooklm/*.md`.
- Interactive tools must stay browser-only.
