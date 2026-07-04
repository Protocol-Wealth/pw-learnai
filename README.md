# pw-learnai

A modular, open-source library of ideas, frameworks, and interactive tools for applied AI strategy and AI-assisted software development. Built by [Protocol Wealth LLC](https://protocolwealth.io). MIT-licensed. No certificate. No paywall. No marketing funnel.

## What this is

A library of **self-contained modules** you can read, fork, remix, or drop into an AI notebook (NotebookLM, Claude Projects, ChatGPT custom GPTs) for your own learning. Each module is a three-file directory:

- A `module.md` file — the ideas in prose, with falsifiable claims and worked examples
- An `exercises.md` file — applied work that produces a reviewable artifact
- A `references.md` file — sources, reviewed-date notes, and further reading

Interactive `.jsx` components live separately under `components/interactive/` so the module directories stay stable for bundling.

Pick the modules you want. Ignore the rest. Nothing here assumes you take them in order.

## What this is not

- Not a course. There is no enrollment, no grading, no certificate.
- Not a training program with a fixed path. The modules are deliberately independent.
- Not a product. Nothing here sells Protocol Wealth services.
- Not a complete map of the field. It is a library of the ideas we have found useful and wish we had encountered earlier.

## Start here

If you only know ChatGPT or Claude prompts, start with [00 - Getting Started as an AI Operator](modules/00-getting-started/module.md).

The first routing decision is level, not tool:

| Level | Use this when | Next step |
|-------|---------------|-----------|
| Beginner | You know ChatGPT or Claude prompts, but repositories and diffs are new | Create GitHub, clone one repo, install one desktop or IDE agent, and use the Setup Path Builder |
| Intermediate | You can work in a repo and need repeatable agent practice | Add `AGENTS.md`, `CLAUDE.md`, state files, CLI-agent prompts, and a documented verification loop |
| Advanced | You are connecting data, MCP, cloud, or regulated workflow patterns | Write public-data source notes, study the OSS labs, and deploy only after the local loop is stable |

The full beginner path is deliberately practical:

1. Get a GitHub account, enable 2FA, and learn to read a diff.
2. Install one desktop or IDE agent such as Codex app, Claude Code, or Antigravity.
3. Add one CLI agent such as Codex CLI or Claude Code CLI.
4. Put durable repo guidance in `AGENTS.md` and `CLAUDE.md`.
5. Keep `CURRENT-STATE.md`, `CHANGELOG.md`, `NEXT-PROMPT.md`, and `ROADMAP.md` aligned as work changes.
6. Learn public data sources with read-only examples before writing harvesters or deploying services.

The live site now starts with a visual first-hour walkthrough before sending anyone into raw markdown. The first file pair is simple:

- `README.md` or `SETUP-NOTES.md` for instructions, notes, and agent-readable context.
- `[first-page.html](./first-page.html)` or `index.html` for a visible browser artifact with no backend required. 🎉
For AI notebooks, upload [`notebooklm/starter-bundle.md`](notebooklm/starter-bundle.md). It combines the beginner path, prompt engineering, agentic coding, agent instructions, evaluation design, and public-data source discipline.

## Project state

- [CHANGELOG.md](CHANGELOG.md) records shipped changes.
- [CURRENT-STATE.md](CURRENT-STATE.md) records what is live and last verified.
- [NEXT-PROMPT.md](NEXT-PROMPT.md) gives the next agent a safe starting prompt.
- [ROADMAP.md](ROADMAP.md) lists focused follow-up work and links each active item to a GitHub issue.
- [GitHub issues](https://github.com/Protocol-Wealth/pw-learnai/issues) are the canonical tracker for outstanding work; current backlog starts at issues [#14](https://github.com/Protocol-Wealth/pw-learnai/issues/14) through [#21](https://github.com/Protocol-Wealth/pw-learnai/issues/21).

## Module index

Each module is self-contained. Start with `00` if you are new to repository-based agent work, or jump to the track that matches your problem.

### Getting started

| # | Module | Core question |
|---|--------|---------------|
| 00 | [Getting Started as an AI Operator](modules/00-getting-started/module.md) | How do you move from prompt literacy to GitHub, coding agents, repo state files, public data, and safe first deployment? |

### Strategy and judgment

| # | Module | Core question |
|---|--------|---------------|
| 01 | [Reading Disruption](modules/01-reading-disruption/module.md) | How do you tell real disruption from incumbent-friendly change? |
| 02 | [The AI Advantage Matrix](modules/02-ai-advantage-matrix/module.md) | Where does AI create durable advantage vs a race to the floor? |
| 03 | [Where AI Destroys Value](modules/03-ai-value-destruction/module.md) | What are the failure modes that look like wins in the short run? |
| 05 | [Platform Economics](modules/05-platform-economics/module.md) | When is an opportunity actually a platform, and when is it a product with an API? |
| 09 | [AI Judgment Under Uncertainty](modules/09-ai-judgment/module.md) | How do you make AI decisions when the capability curve keeps moving? |

### Organization and delivery

| # | Module | Core question |
|---|--------|---------------|
| 06 | [Organizational Design for Continuous Change](modules/06-organizational-design/module.md) | How do you structure for exploration without starving the core? |
| 07 | [Disciplined Experimentation](modules/07-experimentation/module.md) | What makes an experiment actually diagnostic vs theater? |
| 08 | [Stakeholder Buy-in Through Evidence](modules/08-stakeholder-evidence/module.md) | How do you convert skeptics by sequence rather than persuasion? |

### Practice

| # | Module | Core question |
|---|--------|---------------|
| 04 | [Building Decision-Support Artifacts](modules/04-decision-artifacts/module.md) | How do you build a tool that actually gets used? |
| 10 | [Prompt Engineering for Operators](modules/10-prompt-engineering/module.md) | What separates a durable prompt from a lucky one? |
| 11 | [Evaluation Design for AI Systems](modules/11-evaluation-design/module.md) | How do you know your AI system is getting better, not just different? |
| 12 | [AI-Assisted Coding in Practice](modules/12-ai-coding-practice/module.md) | How do you use Codex CLI, Claude Code, and coding agents without creating maintenance debt? |
| 13 | [Designing Agent Instructions](modules/13-agent-instructions/module.md) | What makes a CLAUDE.md / AGENTS.md one a coding agent actually follows, not decoration? |

### Working with data

| # | Module | Core question |
|---|--------|---------------|
| 14 | [Working with Public Data](modules/14-working-with-public-data/module.md) | How do you use Data.gov, archival APIs, and OAI-PMH without confusing metadata with production-ready data? |

## Protocol Wealth OSS Labs

The labs connect the learning library to Protocol Wealth's open-source starting points.

| Lab | Source repo | Core question |
|-----|-------------|---------------|
| [Nexus Core Lab](labs/protocol-wealth-oss/nexus-core-lab.md) | [`Protocol-Wealth/nexus-core`](https://github.com/Protocol-Wealth/nexus-core) | How do MCP tools expose public, read-only financial analysis, planning tools, and on-chain analytics without carrying client identity? |
| [PWOS Core Lab](labs/protocol-wealth-oss/pwos-core-lab.md) | [`Protocol-Wealth/pwos-core`](https://github.com/Protocol-Wealth/pwos-core) | How do PII boundaries, audit trails, confirmation gates, tool tiers, and compliance primitives become structural controls? |
| [PWPlan Core Lab](labs/protocol-wealth-oss/pwplan-core-lab.md) | [`Protocol-Wealth/pwplan-core`](https://github.com/Protocol-Wealth/pwplan-core) | How does a thin planning UI expose 16 tools while keeping the compute contract PII-free by construction? |

## How to use this library

### As a reader

Clone the repo or read the files on GitHub. Each `module.md` is complete on its own.

```bash
git clone https://github.com/Protocol-Wealth/pw-learnai.git
cd pw-learnai
```

### With NotebookLM (or Claude Projects, or a custom GPT)

The `notebooklm/` directory contains pre-assembled bundles — concatenated markdown files grouped by theme — that you upload directly as sources.

```bash
# Upload any file from notebooklm/ as a NotebookLM source
ls notebooklm/
```

Recommended first upload:

```text
notebooklm/starter-bundle.md
```

Or roll your own bundle:

```bash
# Combine the strategy modules into one source file
cat modules/01-*/module.md modules/02-*/module.md modules/03-*/module.md > my-strategy-bundle.md
```

### With Codex CLI or Claude Code

Module 12 is now written around practical terminal workflows for Codex CLI and Claude Code. This repo also includes lightweight agent guidance files:

- `AGENTS.md` for Codex and other agents that read the emerging shared convention
- `CLAUDE.md` for Claude Code, importing `AGENTS.md` so guidance stays in one place

Useful starting prompts:

```bash
codex "Read AGENTS.md and summarize how to update a module safely."
claude --permission-mode plan
```

Useful OSS lab prompts:

```bash
codex "Read labs/protocol-wealth-oss/README.md and propose the smallest safe lab enhancement."
claude --permission-mode plan "Read the PWOS Core lab and propose a client-only confirmation-gate simulator improvement."
```

### PR hygiene across the OSS surface

Audit open PRs across `pw-learnai`, `nexus-core`, `pwos-core`, and `pwplan-core`:

```bash
pnpm pr:audit
```

Merge only PRs classified as clean, non-draft, check-passing, and not review-blocked:

```bash
pnpm pr:mergeable
```

### With the interactive components

**Use them in your browser** — no install required:

→ **https://protocol-wealth.github.io/pw-learnai/**

The interactive tools (setup path builder, MCP planner, PII guard simulator, confirmation gate simulator, planning contract validator, CLI coding playbook, prompt evaluator, agent instructions auditor, disruption diagnostic, advantage matrix, pre-mortem, assumption ranker) run client-side. No login. No telemetry. No external API calls. Each session evaporates when you close the tab — fill in, screenshot if useful, leave.

Or run them locally:

```bash
pnpm install
pnpm dev
```

Or copy any `.jsx` file in `components/interactive/` into your own project. They are deliberately written as single-file components with no private dependencies.

### As a remix target

Fork the repo. Edit the modules to fit your industry. Submit a PR if you want your work upstreamed, or keep it in your fork — that's what MIT is for.

## Structure

```
pw-learnai/
├── modules/            # Self-contained learning units
│   └── NN-name/
│       ├── module.md           # The content
│       ├── exercises.md        # Applied work
│       └── references.md       # Sources and further reading
├── labs/               # Applied OSS labs connected to Protocol Wealth repos
├── prompts/            # Standalone copyable prompts linked from modules/tools
├── components/
│   ├── interactive/    # Single-file React tools (diagnostics, calculators)
│   └── ui/             # Shared primitives (buttons, cards)
├── notebooklm/         # Pre-assembled bundles for AI notebooks
├── assets/             # Images, diagrams, SVGs
└── CONTRIBUTING.md     # How to submit a module or fix
```

## Contributing

Contributions welcome. The bar is specific:

- **Falsifiable claims over fluent ones.** A claim that could describe the opposite outcome does not count.
- **Artifacts over essays.** If you submit a new module, include at least one exercise producing something the reader could show another human.
- **Honesty about limits.** State what the module does not cover and where its reasoning breaks down.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the submission template and review criteria.

## License

[MIT](LICENSE). Use commercially, fork it, rename it, strip our name off. The only ask: if the module helped you, send a PR with what you learned.

## Who built this and why

Protocol Wealth LLC is an SEC-registered RIA that does its own engineering. We built this library because the AI-strategy content available when we started was either expensive and generic (big-name university certificates) or free and shallow (blog posts and LinkedIn slop). We wrote what we wished we had. Keeping it open-source is how we make sure the next person does not have to re-derive it.

Maintainer: [Nicholas Rygiel](https://github.com/rivendale) — Managing Partner / CTO / CISO, Protocol Wealth LLC.

## Acknowledgments

This library draws on work by Clayton Christensen, Rita McGrath, Geoffrey Parker, Marshall Van Alstyne, Charles O'Reilly, Michael Tushman, and a generation of practitioners who wrote honestly about what worked and what did not. Where a specific idea traces to a specific source, it is cited in the module's `references.md`.
