# Changelog

All notable changes to `pw-learnai` are recorded here.

## 2026-07-25

### Added

- Added Module 16, `Building Agent Systems`, separating the agent runtime from intent/governance, capabilities, planning, memory, recovery, remote access, and accountable human decisions.
- Added the browser-only Agent Systems Architect, which produces a responsibility map, phased build sequence, boundary warnings, and explicit deferrals without storing or transmitting user input.
- Added public-safe labs for `pwcli-core`, `shard-core`, and the full Protocol Wealth agent system-of-systems.
- Added a concrete Python and TypeScript Claude Agent SDK adapter orientation, now linked to the bounded read-only implementation shipped in [`pwcli-core` PR #7](https://github.com/Protocol-Wealth/pwcli-core/pull/7).

### Changed

- Rewrote module claims and supporting generalities as falsifiable,
  repo-specific hypotheses with observable failure conditions.
- Refreshed fast-moving AI references against current official sources and
  added reviewed dates where practical.
- Expanded the homepage and README with a beginner-to-advanced agent-systems path and five additional OSS/system-boundary entry points.
- Expanded cross-repo PR auditing to include `pwcli-core` and `shard-core`.
- Updated the PWPlan lab and homepage from the stale 16-tool description to the current 34-tool public engine contract, while clarifying that its named-key tripwire is not de-identification.
- Updated NotebookLM starter, practice, AI-focus, and Protocol Wealth OSS lab bundles.

### Corrected

- Replaced unsafe third-party auth guidance with the current documented boundary: Agent SDK applications use API-key or documented cloud-provider authentication; official Claude Code subscription login and Remote Control are separate product paths.
- Documented that `allowed_tools` / `allowedTools` auto-approves matching tools but does not by itself remove every unlisted tool.
- Kept private durable-knowledge implementations out of the public dependency map; public material describes a provider-neutral boundary instead.
- Removed stale embedded PR-state claims from the OSS lab guide.
- Restored the exact three-file module contract by moving the Module 00 diff explainer into `labs/getting-started/` and making the bundler reject every extra module file.
- Incorporated adversarial contract, security, and human-systems review: governance is cross-cutting, state systems remain distinct, sensitive/live/recovery roles are conditional and explicit, and remote/hosting boundaries are fail-closed.

### Tracked

- Completed [`pw-learnai` issue #50](https://github.com/Protocol-Wealth/pw-learnai/issues/50)
  through merged [PR #57](https://github.com/Protocol-Wealth/pw-learnai/pull/57).
- Completed [`pw-learnai` issue #54](https://github.com/Protocol-Wealth/pw-learnai/issues/54) through merged PR [#55](https://github.com/Protocol-Wealth/pw-learnai/pull/55).
- Completed [`pwcli-core` issue #6](https://github.com/Protocol-Wealth/pwcli-core/issues/6) through merged [`pwcli-core` PR #7](https://github.com/Protocol-Wealth/pwcli-core/pull/7), which shipped governed read-only Python and TypeScript Claude Agent SDK reference adapters.

### Published

- Merged PR [#57](https://github.com/Protocol-Wealth/pw-learnai/pull/57) as
  `119b0f7673b98e146f79a3cedb8ed9bd138d690e`.
- Passed Bundle NotebookLM sources `30164081598`, Deploy to GitHub Pages
  `30164081591`, and CodeQL `30164081407`; verified the updated module and state
  document live over HTTP 200.
- Merged PR [#55](https://github.com/Protocol-Wealth/pw-learnai/pull/55) as `838ff102cc2bc245c2a5ff34fd5f0d59bbad54bc`.
- Passed Bundle NotebookLM sources `30161461181`, Deploy to GitHub Pages `30161461175`, and CodeQL `30161461077`.
- Verified live HTTP 200 responses for the app, Module 16, system-of-systems lab, moved diff explainer, and canonical current-state document.
- `pwcli-core` PR [#7](https://github.com/Protocol-Wealth/pwcli-core/pull/7) merged as `542533e8f53193c6c43a89dfab2b8250da77c1b0`; main Validate `30164106786` and CodeQL `30164106516` passed.

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
- PR [#22](https://github.com/Protocol-Wealth/pw-learnai/pull/22) merged; main workflows passed:
  - Deploy to GitHub Pages: `28552034480`
  - CodeQL: `28552034057`
  - Live Pages returned HTTP 200 for README, CURRENT-STATE, ROADMAP, NEXT-PROMPT, CLAUDE, and CHANGELOG.
- PR [#23](https://github.com/Protocol-Wealth/pw-learnai/pull/23) merged; main workflows passed:
  - Deploy to GitHub Pages: `28552548488`
  - CodeQL: `28552547902`
  - Live Pages returned HTTP 200 for CURRENT-STATE, NEXT-PROMPT, and CHANGELOG after correcting publish-state references.

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
