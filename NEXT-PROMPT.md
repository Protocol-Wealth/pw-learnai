# Next Prompt

Use this to continue safely from the current repo state.

```text
Goal: Work one tracked pw-learnai issue without breaking the client-only site.

Context:
- Read AGENTS.md, CURRENT-STATE.md, CHANGELOG.md, README.md, and ROADMAP.md first.
- The latest live site is https://protocol-wealth.github.io/pw-learnai/.
- Current verified published commit is 64ba173063cb5354d2bf7a9d5cece2b9fbd78e14 from PR #22.
- The last app/audit cleanup commit is 9b7957e50a011ae1ae7da0e0a686511595b1b6fa from PR #13.
- The homepage now has a visual First Hour walkthrough and a Setup Path Builder that supports Claude, Codex, or both.
- Module 00 covers beginner setup, Markdown vs HTML, GitHub, coding agents, state files, public data, and safe deployment.
- Module 14 covers public-data source discipline.
- Outstanding roadmap work is tracked in GitHub issues #14 through #21. Pick one issue and keep the PR scoped to it.

Scope:
- Prefer small, reviewable changes to README.md, modules/00-getting-started/, components/interactive/SetupPathBuilder.jsx, or src/main.jsx.
- Keep all interactive behavior client-only.
- Do not add a backend, telemetry, external runtime API calls, secrets, or new dependencies unless explicitly approved.
- If the work changes roadmap scope, update the related GitHub issue and ROADMAP.md together.

Verification:
- If module content changes, run pnpm bundle.
- After frontend changes, run pnpm build.
- Run git diff --check before finishing.
- If publishing, create a PR, watch checks, merge only when green, then verify GitHub Pages live URLs.

Finish with:
- Files changed
- Commands run
- Live/deploy status if publishing
- Issue updated or closed
- Remaining follow-up work, with issue links
```
