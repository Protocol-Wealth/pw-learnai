# Next Prompt

Use this to continue safely from the current repo state.

```text
Goal: Improve the beginner onboarding experience in pw-learnai without breaking the client-only site.

Context:
- Read AGENTS.md, CURRENT-STATE.md, CHANGELOG.md, README.md, and ROADMAP.md first.
- The latest live site is https://protocol-wealth.github.io/pw-learnai/.
- The homepage now has a visual First Hour walkthrough and a Setup Path Builder that supports Claude, Codex, or both.
- Module 00 covers beginner setup, Markdown vs HTML, GitHub, coding agents, state files, public data, and safe deployment.
- Module 14 covers public-data source discipline.

Scope:
- Prefer small, reviewable changes to README.md, modules/00-getting-started/, components/interactive/SetupPathBuilder.jsx, or src/main.jsx.
- Keep all interactive behavior client-only.
- Do not add a backend, telemetry, external runtime API calls, secrets, or new dependencies unless explicitly approved.

Verification:
- If module content changes, run pnpm bundle.
- After frontend changes, run pnpm build.
- Run git diff --check before finishing.
- If publishing, create a PR, watch checks, merge only when green, then verify GitHub Pages live URLs.

Finish with:
- Files changed
- Commands run
- Live/deploy status if publishing
- Remaining follow-up work
```
