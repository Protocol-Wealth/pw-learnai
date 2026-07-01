# Current State

Last reviewed: 2026-07-01.

## Live status

- Live site: https://protocol-wealth.github.io/pw-learnai/
- Default branch: `main`
- Last verified published commit before this local audit: `360076a2d583d3f762644d3cca1567f61e3bb365`
- The 2026-07-01 audit edits are local until pushed and published; verify GitHub Pages after deployment.

## What is live

- Homepage now starts with a visual `First Hour Walkthrough` for beginners.
- Beginner route is segmented into `Beginner`, `Intermediate`, and `Advanced`.
- `SetupPathBuilder` lets the user choose Claude, Codex, or both and generates a bounded first prompt.
- Module 00 explains why Markdown is useful for durable instructions and why HTML is useful for immediate visual browser feedback.
- Module 14 introduces Data.gov, the National Archives Catalog API, OAI-PMH, source notes, and safe public-data habits.
- NotebookLM bundles include the starter and public-data paths.
- Root markdown docs and standalone prompts are copied into the static Pages artifact by `scripts/sync-public-content.mjs`.
- Browser tools remain client-only: no login, telemetry, backend, external API calls, or secrets.

## 2026-07-01 local audit updates

- Module directories now satisfy the exact three-file contract: `module.md`, `exercises.md`, and `references.md`.
- The Module 13 deep-audit prompt moved to `prompts/agent-instructions-deep-audit.md`.
- `scripts/bundle-notebooklm.js` now fails fast if a module directory has missing or extra files.
- Unused `recharts` dependency and transitive lockfile entries were removed.
- `README.md`, `CLAUDE.md`, `AGENTS.md`, and `CONTRIBUTING.md` were refreshed to match current commands and dependency state.

## Verification

Commands run during the closeout session:

```bash
pnpm bundle
pnpm build
git diff --check
```

Commands run during the 2026-07-01 local audit:

```bash
pnpm install
pnpm bundle
pnpm build
git diff --check
```

Additional checks:

- Source scan found no runtime `fetch`, `XMLHttpRequest`, `axios`, Tailwind CDN, or live Nexus calls in `src`, `components`, or `index.html`.
- First-party TypeScript scan found no `.ts`, `.tsx`, or `tsconfig*.json` outside ignored dependency/build directories.
- Live Pages responses returned HTTP 200 for:
  - `/pw-learnai/`
  - `/pw-learnai/modules/00-getting-started/module.md`
  - `/pw-learnai/modules/14-working-with-public-data/module.md`
  - `/pw-learnai/notebooklm/starter-bundle.md`
  - `/pw-learnai/notebooklm/data-bundle.md`
- After root-doc publishing, also verify:
  - `/pw-learnai/CHANGELOG.md`
  - `/pw-learnai/CURRENT-STATE.md`
  - `/pw-learnai/NEXT-PROMPT.md`
  - `/pw-learnai/ROADMAP.md`

## Known constraints

- There is no test or lint suite by design. `pnpm build` is the gate.
- Do not run `vite` directly. Use `pnpm dev`, `pnpm build`, or `pnpm preview` so public content sync hooks run.
- When module content changes, run `pnpm bundle` and commit regenerated `notebooklm/*.md`.
- Interactive tools must stay browser-only.
