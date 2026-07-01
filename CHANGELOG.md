# Changelog

All notable changes to `pw-learnai` are recorded here.

## 2026-07-01

### Changed

- Moved the Module 13 deep-audit prompt out of `modules/13-agent-instructions/` and into `prompts/agent-instructions-deep-audit.md` so every module directory keeps the three-file contract.
- Updated `scripts/sync-public-content.mjs` so standalone prompt markdown is copied into the static Pages artifact.
- Updated `README.md` and `CLAUDE.md` to match the current module contract, pnpm commands, and handoff expectations.
- Updated `CURRENT-STATE.md`, `ROADMAP.md`, `NEXT-PROMPT.md`, `AGENTS.md`, and `CLAUDE.md` so outstanding work is tracked through GitHub issues.
- Regenerated NotebookLM bundles after the Module 13 prompt-path change.

### Tracked

- Created GitHub issues [#14](https://github.com/Protocol-Wealth/pw-learnai/issues/14) through [#21](https://github.com/Protocol-Wealth/pw-learnai/issues/21) for the open roadmap backlog.

### Removed

- Removed unused `recharts` dependency and its transitive lockfile surface.

### Verified

- `pnpm install`
- `pnpm bundle`
- `pnpm build`
- `git diff --check`
- Module-directory contract check for exactly `module.md`, `exercises.md`, and `references.md`.
- Executable app/script scan found no `fetch`, `XMLHttpRequest`, `axios`, telemetry beacons, env reads, or WebSocket/event-source runtime calls.
- First-party TypeScript scan found no `.ts`, `.tsx`, or `tsconfig*.json` outside ignored dependency/build directories.
- PR [#13](https://github.com/Protocol-Wealth/pw-learnai/pull/13) merged; main workflows passed:
  - Bundle NotebookLM sources: `28551553459`
  - Deploy to GitHub Pages: `28551553465`
  - CodeQL: `28551553142`
  - Live Pages returned HTTP 200 for the app, Module 13 markdown, changelog, starter bundle, and the new prompt asset.

## 2026-06-30

### Added

- Added the beginner-first onboarding route for prompt-fluent users moving into GitHub, coding agents, public data, and safe deployment.
- Added `modules/00-getting-started/` with module, exercises, and references.
- Added `modules/14-working-with-public-data/` covering Data.gov, the National Archives Catalog API, OAI-PMH, and source-note discipline.
- Added `SetupPathBuilder`, a browser-only tool that lets beginners choose Claude, Codex, or both and generates concrete next actions plus a bounded first prompt.
- Added homepage routing for `First Hour`, `Beginner`, `Intermediate`, `Advanced`, `Topic Tracks`, current OSS surfaces, public-data starters, and cloud-after-local guidance.
- Added `notebooklm/starter-bundle.md` and `notebooklm/data-bundle.md`.
- Added local Tailwind/PostCSS config so the site no longer depends on the Tailwind CDN at runtime.
- Added root state files: `CURRENT-STATE.md`, `NEXT-PROMPT.md`, and `ROADMAP.md`.
- Added root markdown publishing for README, changelog, state, next prompt, roadmap, and agent-instruction files.

### Changed

- Reworked the homepage so beginners see a visual first-hour walkthrough before being sent to Markdown.
- Updated `README.md` to route beginners by level and point to the state files.
- Updated Protocol Wealth OSS labs with current Nexus, PWOS Core, and PWPlan Core public-surface notes reviewed on 2026-06-30.
- Regenerated NotebookLM bundles after module and lab updates.
- Updated GitHub Actions Pages workflow to run on Node 22 and current action runtimes.
- Updated `scripts/sync-public-content.mjs` so root markdown docs are included in the GitHub Pages artifact.

### Verified

- `pnpm bundle`
- `pnpm build`
- `git diff --check`
- Runtime-call scan for `fetch`, `XMLHttpRequest`, `axios`, Tailwind CDN, and live Nexus calls.
- PR #7, PR #8, PR #9, and PR #10 merged.
- Main workflows passed after PR #10:
  - Bundle NotebookLM sources: `28415375930`
  - Deploy to GitHub Pages: `28415375952`
  - CodeQL: `28415375711`
- Live GitHub Pages URLs returned HTTP 200 for the app, module 00, module 14, `starter-bundle.md`, and `data-bundle.md`.
