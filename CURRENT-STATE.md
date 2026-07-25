# Current State

Last reviewed: 2026-07-25.

## Live status

- Live site: https://protocol-wealth.github.io/pw-learnai/
- Default branch: `main`
- Recent verified publish checkpoints:
  - [#55](https://github.com/Protocol-Wealth/pw-learnai/pull/55): published the governed agent-systems entryway, Module 16, architecture tool, and expanded OSS labs.
  - [#23](https://github.com/Protocol-Wealth/pw-learnai/pull/23): corrected publish-state references after PR #22.
  - [#22](https://github.com/Protocol-Wealth/pw-learnai/pull/22): published documentation and issue-tracking state.
  - [#13](https://github.com/Protocol-Wealth/pw-learnai/pull/13): published the audit cleanup and prompt asset move.
- State-reference correction PR: [#23](https://github.com/Protocol-Wealth/pw-learnai/pull/23), merged 2026-07-01.
- Documentation and issue-tracking PR: [#22](https://github.com/Protocol-Wealth/pw-learnai/pull/22), merged 2026-07-01.
- Audit cleanup PR: [#13](https://github.com/Protocol-Wealth/pw-learnai/pull/13), merged 2026-07-01.
- Agent-systems entryway PR: [#55](https://github.com/Protocol-Wealth/pw-learnai/pull/55), merged 2026-07-25 as `838ff102cc2bc245c2a5ff34fd5f0d59bbad54bc`.
- Main workflows after PR #55 passed:
  - Bundle NotebookLM sources: `30161461181`
  - Deploy to GitHub Pages: `30161461175`
  - CodeQL: `30161461077`
- Main workflows after PR #23 passed:
  - Deploy to GitHub Pages: `28552548488`
  - CodeQL: `28552547902`
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
- Module 15 covers security & secrets hygiene for AI operators (the lethal trifecta, prompt injection, untrusted model output, secrets handling, trust boundaries).
- Interactive tools cover every numbered live module from 00 through 16, including the Beginner Onboarding Checklist (keyboard-accessible), Source Note Builder, Test-Set Composition Auditor (Module 11), Trust-Boundary Auditor (Module 15), and Agent Systems Architect (Module 16).
- NotebookLM bundles include the starter, public-data, and practice paths.
- Root markdown docs and standalone prompts are copied into the static Pages artifact by `scripts/sync-public-content.mjs`.
- Browser tools remain client-only: no login, telemetry, backend, external API calls, or secrets.
- Pull requests into `main` run a read-only `ci.yml` (`pnpm install --frozen-lockfile` → internal dead-link check → `pnpm build`); `bundle.yml` and `deploy-pages.yml` stay push-triggered so their write-scoped tokens never run on pull requests.
- Module 16 adds the system boundary between learning, `pwcli-core` intent/governance, the agent runtime, MCP capabilities, synthetic planning contracts, cross-cutting `pwos-core` controls, `shard-core` recovery, distinct state systems, remote access, consumer surfaces, and human decision rights.
- Agent Systems Architect turns those boundaries into a client-only responsibility map, phased build sequence, warnings, human-role assignments, and explicit deferrals.
- Protocol Wealth OSS labs add `pwcli-core`, `shard-core`, and a system-of-systems map to the Nexus, PWOS, and PWPlan labs.
- The PWPlan orientation reflects the current 34-tool engine contract and accurately limits its direct-identifier key tripwire.
- Cross-repo PR audit adds `pwcli-core` and `shard-core`.

## 2026-07-25 agent-systems session

- Verified that `pwcli-core` is a control-plane specification, not an executable coding-agent runtime; implementation follow-up is tracked in [`pwcli-core` issue #6](https://github.com/Protocol-Wealth/pwcli-core/issues/6).
- Verified that `shard-core` is public, prerelease, and not independently audited; its lab uses synthetic recovery exercises and keeps agents outside the recovery boundary.
- Kept private durable-knowledge implementations out of the public curriculum and defined a provider-neutral boundary instead.
- Grounded Agent SDK tools, permissions, hooks, sessions, MCP, subagents, hosting, security, authentication, branding, and Remote Control against current official Anthropic documentation reviewed 2026-07-25.
- Separated official Claude Code subscription login/Remote Control from third-party Agent SDK authentication; the curriculum does not recommend OAuth-token extraction or unofficial subscription proxies.
- Mapped `pwos.app` as the adviser operating surface, `pwportal.app` as the client portal, the public `-core` repos as inspectable foundations, and Protocol Wealth's human fiduciary/consulting work as a separate accountable service boundary.
- Completed [`pw-learnai` issue #54](https://github.com/Protocol-Wealth/pw-learnai/issues/54) through merged PR [#55](https://github.com/Protocol-Wealth/pw-learnai/pull/55).

## 2026-07-01 audit updates

- Module directories now satisfy the exact three-file contract: `module.md`, `exercises.md`, and `references.md`.
- The Module 13 deep-audit prompt moved to `prompts/agent-instructions-deep-audit.md`.
- `scripts/bundle-notebooklm.js` now fails fast if a module directory has missing or extra files.
- Unused `recharts` dependency and transitive lockfile entries were removed.
- `README.md`, `CLAUDE.md`, `AGENTS.md`, and `CONTRIBUTING.md` were refreshed to match current commands and dependency state.
- GitHub issues [#14](https://github.com/Protocol-Wealth/pw-learnai/issues/14) through [#21](https://github.com/Protocol-Wealth/pw-learnai/issues/21) now track the open roadmap backlog.

## 2026-07-11 triage and build-out session

- Reverted PR #31 off `main` ([#36]) after review; its two components were re-implemented cleanly instead.
- Merge automation hardened ([#38]): `audit-mergeable-prs.mjs` now requires `reviewDecision === 'APPROVED'` and treats an empty check rollup as a block; added the read-only `ci.yml` with an internal dead-link gate.
- Dead-link checking broadened ([#41]): `scripts/check-links.mjs` covers all relative links in `src/main.jsx` plus markdown internal links; `pnpm check:links` added; `check-tool-links.mjs` removed.
- Resolved issues #14 and #19 with clean, keyboard-accessible rebuilds ([#39]); added the Test-Set Composition Auditor for Module 11 ([#40]); accessibility sweep gave range sliders and unlabeled inputs accessible names ([#42]).
- Added Module 15 (Security & Secrets Hygiene) and the Trust-Boundary Auditor ([#44], closing #43).
- `ci.yml` also runs on `ready_for_review` so a draft marked ready runs the gate without a new commit.
- Next backlog tracked in issues #45–#50 (see `ROADMAP.md`): companion tools for modules 04, 05, 06, 08, 09, and a content-accuracy audit.

## Verification

Commands run during the closeout session:

```bash
pnpm bundle
pnpm build
pnpm check:links
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
- Three read-only adversarial reviewers checked frontend/module contracts, security/source claims, and systems/human-integration boundaries; all reported no remaining high- or medium-severity blockers at PR #55 head `51da50e8dca695214bcfd34367854498e7598559`.
- Live Pages responses after PR #55 returned HTTP 200 for:
  - `/pw-learnai/`
  - `/pw-learnai/modules/16-building-agent-systems/module.md`
  - `/pw-learnai/labs/protocol-wealth-oss/system-of-systems-lab.md`
  - `/pw-learnai/labs/getting-started/diff-explainer.md`
  - `/pw-learnai/CURRENT-STATE.md`
- Live Pages responses after PR #23 returned HTTP 200 for:
  - `/pw-learnai/CURRENT-STATE.md`
  - `/pw-learnai/NEXT-PROMPT.md`
  - `/pw-learnai/CHANGELOG.md`
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

Issues #14–#21, #43, #45–#49, and #54 are closed. Current open work:

- [#50](https://github.com/Protocol-Wealth/pw-learnai/issues/50): Content accuracy audit — falsifiability pass and reference refresh.

## Known constraints

- There is no test or lint suite by design. `pnpm build` is the gate.
- Do not run `vite` directly. Use `pnpm dev`, `pnpm build`, or `pnpm preview` so public content sync hooks run.
- When module content changes, run `pnpm bundle` and commit regenerated `notebooklm/*.md`.
- Interactive tools must stay browser-only.
