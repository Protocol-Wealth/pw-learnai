# Current State

Last reviewed: 2026-07-01.

## Live status

- Live site: https://protocol-wealth.github.io/pw-learnai/
- Default branch: `main`
- Last verified published commit: `64ba173063cb5354d2bf7a9d5cece2b9fbd78e14`
- Documentation and issue-tracking PR: [#22](https://github.com/Protocol-Wealth/pw-learnai/pull/22), merged 2026-07-01.
- Last verified app/audit publish commit: `9b7957e50a011ae1ae7da0e0a686511595b1b6fa`
- Audit cleanup PR: [#13](https://github.com/Protocol-Wealth/pw-learnai/pull/13), merged 2026-07-01.
- Main workflows after PR #22 passed:
  - Deploy to GitHub Pages: `28552034480`
  - CodeQL: `28552034057`
- Main workflows after PR #13 passed:
  - Bundle NotebookLM sources: `28551553459`
  - Deploy to GitHub Pages: `28551553465`
  - CodeQL: `28551553142`

## What is live

- Homepage now starts with a visual `First Hour Walkthrough` for beginners.
- Beginner route is segmented into `Beginner`, `Intermediate`, and `Advanced`.
- `SetupPathBuilder` lets the user choose Claude, Codex, or both and generates a bounded first prompt.
- Module 00 explains why Markdown is useful for durable instructions and why HTML is useful for immediate visual browser feedback.
- Module 14 introduces Data.gov, the National Archives Catalog API, OAI-PMH, source notes, and safe public-data habits.
- NotebookLM bundles include the starter and public-data paths.
- Root markdown docs and standalone prompts are copied into the static Pages artifact by `scripts/sync-public-content.mjs`.
- Browser tools remain client-only: no login, telemetry, backend, external API calls, or secrets.

## 2026-07-01 audit updates

- Module directories now satisfy the exact three-file contract: `module.md`, `exercises.md`, and `references.md`.
- The Module 13 deep-audit prompt moved to `prompts/agent-instructions-deep-audit.md`.
- `scripts/bundle-notebooklm.js` now fails fast if a module directory has missing or extra files.
- Unused `recharts` dependency and transitive lockfile entries were removed.
- `README.md`, `CLAUDE.md`, `AGENTS.md`, and `CONTRIBUTING.md` were refreshed to match current commands and dependency state.
- GitHub issues [#14](https://github.com/Protocol-Wealth/pw-learnai/issues/14) through [#21](https://github.com/Protocol-Wealth/pw-learnai/issues/21) now track the open roadmap backlog.

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
- Live Pages responses after PR #22 returned HTTP 200 for:
  - `/pw-learnai/README.md`
  - `/pw-learnai/CURRENT-STATE.md`
  - `/pw-learnai/ROADMAP.md`
  - `/pw-learnai/NEXT-PROMPT.md`
  - `/pw-learnai/CLAUDE.md`
  - `/pw-learnai/CHANGELOG.md`
- Live Pages responses after PR #13 returned HTTP 200 for:
  - `/pw-learnai/`
  - `/pw-learnai/prompts/agent-instructions-deep-audit.md`
  - `/pw-learnai/modules/13-agent-instructions/module.md`
  - `/pw-learnai/CHANGELOG.md`
  - `/pw-learnai/notebooklm/starter-bundle.md`

## Open issue tracker

- [#14](https://github.com/Protocol-Wealth/pw-learnai/issues/14): Add printable beginner checklist for `SETUP-NOTES.md`.
- [#15](https://github.com/Protocol-Wealth/pw-learnai/issues/15): Add static `first-page.html` starter template.
- [#16](https://github.com/Protocol-Wealth/pw-learnai/issues/16): Add visual diff-reading explainer for beginners.
- [#17](https://github.com/Protocol-Wealth/pw-learnai/issues/17): Split Setup Path Builder prompts by agent workflow.
- [#18](https://github.com/Protocol-Wealth/pw-learnai/issues/18): Add browser-only prompt-to-agent-task exercise.
- [#19](https://github.com/Protocol-Wealth/pw-learnai/issues/19): Add browser-only public-data source-note builder.
- [#20](https://github.com/Protocol-Wealth/pw-learnai/issues/20): Audit homepage accessibility and mobile polish.
- [#21](https://github.com/Protocol-Wealth/pw-learnai/issues/21): Add operator-facing table of contents to starter bundle.

## Known constraints

- There is no test or lint suite by design. `pnpm build` is the gate.
- Do not run `vite` directly. Use `pnpm dev`, `pnpm build`, or `pnpm preview` so public content sync hooks run.
- When module content changes, run `pnpm bundle` and commit regenerated `notebooklm/*.md`.
- Interactive tools must stay browser-only.
