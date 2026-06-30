# Changelog

All notable changes to `pw-learnai` are recorded here.

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

### Changed

- Reworked the homepage so beginners see a visual first-hour walkthrough before being sent to Markdown.
- Updated `README.md` to route beginners by level and point to the state files.
- Updated Protocol Wealth OSS labs with current Nexus, PWOS Core, and PWPlan Core public-surface notes reviewed on 2026-06-30.
- Regenerated NotebookLM bundles after module and lab updates.
- Updated GitHub Actions Pages workflow to run on Node 22 and current action runtimes.

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
