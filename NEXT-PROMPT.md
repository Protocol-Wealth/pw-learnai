# Next Prompt

Use this to continue safely from the current repo state.

```text
Goal: Continue one tracked pw-learnai issue without breaking the client-only learning boundary.

Context:
- Read AGENTS.md, CURRENT-STATE.md, CHANGELOG.md, README.md, and ROADMAP.md first.
- The latest live site is https://protocol-wealth.github.io/pw-learnai/.
- The homepage now has a visual First Hour walkthrough and a Setup Path Builder that supports Claude, Codex, or both.
- Module 00 covers beginner setup, Markdown vs HTML, GitHub, coding agents, state files, public data, and safe deployment.
- Module 14 covers public-data source discipline.
- Module 16 and the Agent Systems Architect separate runtime, intent/control plane, MCP capabilities, planning, governance, recovery, memory, remote access, and human accountability.
- The OSS labs cover `pwcli-core`, `shard-core`, `nexus-core`, `pwos-core`, `pwplan-core`, and their system-of-systems boundary.
- Keep private durable-knowledge implementations out of public content; use a provider-neutral interface unless publication is explicitly authorized.
- The agent-systems entryway shipped in PR #55 and closed issue #54. The content-accuracy audit shipped in PR #57 and closed issue #50; query GitHub issues before selecting the next tracked item. Executable Claude Agent SDK adapter work shipped separately in `pwcli-core` PR #7.

Scope:
- Prefer small, reviewable changes to one module triad, one lab, one browser-only component, or one root-state slice.
- Keep all interactive behavior client-only.
- Do not add a backend, telemetry, external runtime API calls, secrets, or new dependencies unless explicitly approved.
- Do not add credential extraction, subscription-token proxying, or private repository details to public content.
- Keep session transcripts, working-tree state, reviewed repo knowledge, semantic memory, and protected recovery as separate state types.
- If the work changes roadmap scope, update the related GitHub issue and ROADMAP.md together.

Verification:
- If module content changes, run pnpm bundle.
- After frontend changes, run pnpm build.
- Run git diff --check before finishing.
- Use read-only adversarial reviewers for contract, security, and human-workflow findings; adjudicate the actual findings instead of relying on an aggregate status.
- If publishing, create a PR, watch checks, merge only when green, then verify GitHub Pages live URLs.

Finish with:
- Files changed
- Commands run
- Live/deploy status if publishing
- Issue updated or closed
- Remaining follow-up work, with issue links
```
