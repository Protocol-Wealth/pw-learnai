# AGENTS.md

## Project

`pw-learnai` is an MIT-licensed library of self-contained applied AI strategy modules and browser-only React tools. Keep changes focused on the modules, exercises, references, interactive components, and generated notebook bundles implied by the task.

## Commands

- Install dependencies: `pnpm install`
- Run local dev server: `pnpm dev`
- Build frontend: `pnpm build`
- Regenerate notebook bundles after module edits: `pnpm bundle`

## Content Conventions

- Prefer falsifiable claims over fluent generalities.
- Keep each module self-contained; do not assume readers take modules in order.
- Keep tone direct, operator-focused, and honest about limits.
- For fast-moving AI tooling, cite official current docs and include a reviewed date when practical.
- If module content changes, regenerate `notebooklm/*.md` with `pnpm bundle`.

## Frontend Conventions

- Keep interactive tools client-only. No telemetry, no backend, and no external API calls.
- Prefer single-file components under `components/interactive/` unless reuse clearly justifies shared primitives.
- Preserve responsive behavior on mobile and desktop.
- Use existing React, Vite, Tailwind, and `lucide-react` dependencies before adding new packages.

## Review Expectations

- Read generated or agent-written changes before finishing.
- Run `pnpm build` after frontend changes.
- Mention any command that could not be run.
