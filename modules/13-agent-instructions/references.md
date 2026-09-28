# References — Designing Agent Instructions

Reviewed: 2026-09-28. Agent configuration changes quickly; re-check the live vendor
documentation before turning an example into policy or automation.

- **Anthropic.** [How Claude remembers your project](https://code.claude.com/docs/en/memory).
  Project memory and auto-memory behavior. Current Claude Code reads `AGENTS.md`
  directly when no `CLAUDE.md` takes precedence; check the installed version and
  loaded-file list. This course keeps project instructions in `AGENTS.md`.
- **Anthropic.** [Claude Code settings](https://code.claude.com/docs/en/settings).
  Current user, project, local, and managed settings locations and precedence.
- **Anthropic.** [Best practices for Claude Code](https://code.claude.com/docs/en/best-practices).
  Current guidance on concise, repo-specific project instructions.
- **AGENTS.md.** [Open format](https://agents.md/). Cross-tool convention, discovery
  rules, and examples.
- **OpenAI.** [Custom instructions with AGENTS.md](https://developers.openai.com/codex/guides/agents-md).
  Codex-specific discovery and scope behavior.
- **OpenAI.** [Rethinking skills and prompts for GPT-6 Astra](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra).
  Guidance on moving task-specific procedures into skills while keeping project
  instructions concise. Reviewed 2026-09-28.
- **FirstMate.** [Instruction-pruning PR #5872](https://github.com/kunchenguid/firstmate/pull/5872)
  and [Backpass](https://github.com/kunchenguid/backpass). A project-specific
  example of using session evidence to propose edits and checking behavior after
  moving situational guidance into skills. Reviewed 2026-09-28; the reported
  token reduction is not a general benchmark.
- Companion browser-only tool in this repo:
  [`components/interactive/AgentInstructionsAuditor.jsx`](../../components/interactive/AgentInstructionsAuditor.jsx).
- Companion prompt in this repo:
  [`prompts/agent-instructions-deep-audit.md`](../../prompts/agent-instructions-deep-audit.md).
