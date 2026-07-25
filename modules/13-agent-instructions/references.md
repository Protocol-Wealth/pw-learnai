# References — Designing Agent Instructions

Reviewed: 2026-07-25. Agent configuration changes quickly; re-check the live vendor
documentation before turning an example into policy or automation.

- **Anthropic.** [How Claude remembers your project](https://code.claude.com/docs/en/memory).
  Current `CLAUDE.md` hierarchy, imports, scoped rules, and auto-memory behavior.
- **Anthropic.** [Claude Code settings](https://code.claude.com/docs/en/settings).
  Current user, project, local, and managed settings locations and precedence.
- **Anthropic.** [Best practices for Claude Code](https://code.claude.com/docs/en/best-practices).
  Current guidance on concise, repo-specific project instructions.
- **AGENTS.md.** [Open format](https://agents.md/). Cross-tool convention, discovery
  rules, and examples.
- **OpenAI.** [Custom instructions with AGENTS.md](https://developers.openai.com/codex/guides/agents-md).
  Codex-specific discovery and scope behavior.
- Companion browser-only tool in this repo:
  [`components/interactive/AgentInstructionsAuditor.jsx`](../../components/interactive/AgentInstructionsAuditor.jsx).
- Companion prompt in this repo:
  [`prompts/agent-instructions-deep-audit.md`](../../prompts/agent-instructions-deep-audit.md).
