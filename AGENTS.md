# AGENTS.md

## Non-negotiables (read first)

1. **Client-only, always.** Interactive tools run entirely in the browser. No backend, no telemetry, no external API or network calls, no secrets. A tool that needs a server does not belong here.
2. **Build is the only gate.** There is no test or lint suite, by design. `pnpm build` passing is the bar; run it after any frontend change.
3. **Never run `vite` directly.** Use the pnpm scripts. `predev`/`prebuild`/`prepreview` run `scripts/sync-public-content.mjs` to sync `modules/`, `labs/`, and related content into `public/`; running `vite` raw skips that and serves stale or missing content.

## Project

`pw-learnai` is an MIT-licensed library of self-contained applied AI strategy modules and browser-only React tools. Keep changes focused on the modules, exercises, references, interactive components, and generated notebook bundles implied by the task.

## Commands

- Install dependencies: `pnpm install`
- Run local dev server: `pnpm dev`
- Build frontend: `pnpm build`
- Preview a production build: `pnpm preview`
- Sync content into `public/` manually: `pnpm sync:public`
- Regenerate notebook bundles after module edits: `pnpm bundle`
- Audit open PRs across the OSS surface: `pnpm pr:audit`
- Merge only clean, check-passing PRs: `pnpm pr:mergeable`

CI auto-regenerates the NotebookLM bundles on push to `main` via `.github/workflows/bundle.yml`, but commit your local `pnpm bundle` output anyway so the diff under review is complete.

## Issue Tracking

- GitHub issues are the canonical tracker for outstanding roadmap and future build work.
- Before starting roadmap work, check for an existing issue and keep the PR scoped to it.
- If you add a roadmap item, create or update the matching GitHub issue in the same closeout.

## Authoring a module (contract)

- A module is a directory `modules/NN-slug/` containing exactly three files: `module.md`, `exercises.md`, and `references.md`. `scripts/bundle-notebooklm.js` reads that triad and nothing else.
- To make a module appear in a curated bundle, add its directory name to that bundle's list in the manifest at the top of `scripts/bundle-notebooklm.js`. The `all-modules.md` bundle picks up every directory automatically via `'*'`.
- After editing module content, run `pnpm bundle` and commit the regenerated `notebooklm/*.md`.

## Content Conventions

- Prefer falsifiable claims over fluent generalities. A claim that could equally describe the opposite outcome is decoration.

  ```
  # bad — true of any module
  This framework helps you make better decisions.

  # good — falsifiable, repo-specific
  If you delete this file and the agent's output on a representative task is unchanged, the file was decoration.
  ```

- Keep each module self-contained; do not assume readers take modules in order.
- Keep tone direct, operator-focused, and honest about limits.
- For fast-moving AI tooling, cite official current docs and include a reviewed date when practical.
- If module content changes, regenerate `notebooklm/*.md` with `pnpm bundle`.

## Frontend Conventions

- Keep interactive tools client-only. No telemetry, no backend, and no external API calls.
- Prefer single-file components under `components/interactive/` unless reuse clearly justifies shared primitives.
- Preserve responsive behavior on mobile and desktop.
- Use existing React, Vite, Tailwind, and `lucide-react` dependencies before adding new packages.
- Do not add a charting library unless a tool genuinely needs one; justify the dependency in the diff when you do.

## Review Expectations

- Read generated or agent-written changes before finishing.
- Run `pnpm build` after frontend changes.
- Mention any command that could not be run.
