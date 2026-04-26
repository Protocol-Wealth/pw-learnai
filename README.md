# pw-learnai

A modular, open-source library of ideas, frameworks, and interactive tools for applied AI strategy and AI-assisted software development. Built by [Protocol Wealth LLC](https://protocolwealth.io). MIT-licensed. No certificate. No paywall. No marketing funnel.

## What this is

A library of **self-contained modules** you can read, fork, remix, or drop into an AI notebook (NotebookLM, Claude Projects, ChatGPT custom GPTs) for your own learning. Each module is a pair:

- A `module.md` file — the ideas in prose, with falsifiable claims, worked examples, and exercises
- Optional `.jsx` interactive components — calculators, diagnostics, decision tools you can run locally or embed

Pick the modules you want. Ignore the rest. Nothing here assumes you take them in order.

## What this is not

- Not a course. There is no enrollment, no grading, no certificate.
- Not a training program with a fixed path. The modules are deliberately independent.
- Not a product. Nothing here sells Protocol Wealth services.
- Not a complete map of the field. It is a library of the ideas we have found useful and wish we had encountered earlier.

## Module index

Each module is self-contained. Start anywhere.

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
| 12 | [AI-Assisted Coding in Practice](modules/12-ai-coding-practice/module.md) | How do you ship real software with AI without creating maintenance debt? |

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

Or roll your own bundle:

```bash
# Combine the strategy modules into one source file
cat modules/01-*/module.md modules/02-*/module.md modules/03-*/module.md > my-strategy-bundle.md
```

### With the interactive components

Components in `components/interactive/` are standalone React pieces. Run them locally:

```bash
pnpm install
pnpm dev
```

Or copy any `.jsx` file into your own project. They are deliberately written as single-file components with no private dependencies.

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
