# 12 - References

Tool-specific guidance reviewed on 2026-06-07. Re-check vendor docs before turning these notes into policy or automation.

## Current CLI documentation

- **OpenAI.** [Codex CLI features](https://developers.openai.com/codex/cli/features). Current guide to interactive mode, resume, review, MCP, web search, cloud tasks, slash commands, and other CLI workflows.
- **OpenAI.** [Codex CLI command reference](https://developers.openai.com/codex/cli/reference). Flag and command reference, including sandboxing, approvals, `codex exec`, `codex mcp`, `codex cloud`, `codex doctor`, and related commands.
- **OpenAI.** [Codex non-interactive mode](https://developers.openai.com/codex/noninteractive). Best source for `codex exec`, JSONL output, schemas, CI use, and automation safety.
- **OpenAI.** [Custom instructions with AGENTS.md](https://developers.openai.com/codex/guides/agents-md). How Codex discovers persistent repo guidance.
- **OpenAI.** [Codex Model Context Protocol](https://developers.openai.com/codex/mcp). How to connect Codex to MCP servers and external tools.
- **Anthropic.** [Claude Code getting started](https://code.claude.com/docs/en/getting-started). Current installation, platform, update, and authentication guidance.
- **Anthropic.** [Claude Code CLI reference](https://code.claude.com/docs/en/cli-usage). Commands and flags, including `claude -p`, MCP, plugins, and permission prompt tooling.
- **Anthropic.** [Claude Code common workflows](https://code.claude.com/docs/en/common-workflows). Practical patterns for resuming sessions, worktrees, plan mode, subagents, and non-interactive scripts.
- **Anthropic.** [How Claude remembers your project](https://code.claude.com/docs/en/memory). `CLAUDE.md`, auto memory, project guidance, imports, and troubleshooting.
- **Anthropic.** [Extend Claude Code](https://code.claude.com/docs/en/features-overview). When to use `CLAUDE.md`, skills, MCP, subagents, hooks, plugins, and related extension points.
- **Anthropic.** [Create custom subagents](https://code.claude.com/docs/en/subagents). Subagent isolation, configuration, permissions, skills, and examples.
- **Anthropic.** [Configure permissions](https://code.claude.com/docs/en/permissions). Permissions, hooks, additional directories, and sandboxing interactions.

## On code review for AI-generated code

- **Google.** [Engineering Practices Documentation](https://google.github.io/eng-practices/). Pre-AI code review guidance that still applies: correctness, design, complexity, tests, and maintainability.
- **OpenAI and Anthropic tool docs.** Both vendors now expose review, permission, and persistent-instruction workflows. Read these as operational controls, not as substitutes for human code ownership.

## On test discipline

- **Beck, Kent.** *Test-Driven Development* (2002). The original tests-first argument. AI-assisted coding makes the discipline more important, not less.
- **Martin, Robert.** *Clean Code* (2008). Older, but the chapters on tests and maintainability remain useful when reviewing generated code.

## On productivity evidence

- **GitHub.** Copilot documentation and productivity research. Useful but read with the obvious vendor incentive in mind.
- **METR.** Studies on AI impact on software engineering tasks. More skeptical and useful as a counterweight to vendor claims.
- **DORA.** State of DevOps reports. Useful for reading AI-tool adoption through the lens of delivery, quality, and organizational performance rather than lines of code.

## On automation and deskilling

- **Bainbridge, Lisanne.** "Ironies of Automation" (1983). The classic paper on automation and human skill. The argument ports directly to AI coding.
- **Engineering management postmortems and team writeups.** Prioritize writeups with concrete workflow details: review gates, test strategy, onboarding effects, and maintenance cost.

## On security

- **OWASP.** [Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/). Good checklist for prompt injection, excessive agency, data leakage, and unsafe output handling.
- **Snyk and similar security research.** Useful for examples of vulnerable generated code. Treat vendor security studies as directional unless the methodology is public.

## A note on the moving landscape

Specific CLI features change quickly. The durable practice is not memorizing a command catalog. The durable practice is maintaining a repo-level agent brief, choosing the right execution mode, constraining the task, and verifying the diff.
