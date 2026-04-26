# Contributing to pw-learnai

Thanks for thinking about contributing. This library has a narrow bar for what gets merged, because the whole point is that modules are worth reading. Loose standards compound against the reader.

## What we accept

- **New modules** on topics adjacent to applied AI strategy, AI-assisted software development, or the organizational work of transformation.
- **Fixes** to existing modules — factual corrections, broken links, typos, cleaner prose.
- **New exercises** for existing modules.
- **New interactive components** (.jsx) that make an existing module's framework usable as a tool.
- **NotebookLM bundles** covering a theme not already packaged.

## What we do not accept

- Marketing content dressed as a module.
- AI-generated content you did not review and revise yourself.
- Modules built on a single author's book that the author is promoting.
- Case studies of companies where the author has an undisclosed financial interest.

## The standard

Three tests. Every module passes all three.

### 1. Falsifiable claims

If the core claim of your module could also describe the opposite outcome, rewrite it. "AI will transform the industry" is not a claim. "Within 24 months, seat-based pricing in sales-engagement SaaS will see 20%+ ARR compression as AI reduces SDR headcount by a third in mid-market deployments" is a claim. The second could be wrong. The first cannot.

### 2. Artifacts over essays

Every module must include at least one exercise that produces something the reader could show another human — a diagnostic filled in, a map drawn, a rubric applied to a real decision. Reflection prompts alone do not count.

### 3. Honest limits

Every module has a "What this module does not cover" section. If you can't think of what goes there, the module is probably not well-bounded yet.

## Module template

```
modules/NN-short-name/
├── module.md           # Required. The content.
├── exercises.md        # Required. At least one artifact-producing exercise.
├── references.md       # Required. Sources, citations, further reading.
└── assets/             # Optional. Images, diagrams.
```

### module.md structure

```markdown
# Module Title

One-sentence statement of what this module is for.

## The claim

The central argument of the module, stated precisely enough to be wrong.

## Why this matters

Who benefits from reading this, and what decision it helps them make.

## The idea

The main content. Use subheadings freely. Prose, not slide-deck bullets.

## Worked example

At least one real (or realistically-constructed) example of the idea applied.

## Common failure modes

What goes wrong when this framework is misapplied.

## What this module does not cover

Limits, adjacent topics pointed to other modules, caveats.

## Try this

Pointer to exercises.md.

## Further reading

Pointer to references.md.
```

## Interactive components

Components live in `components/interactive/`. Guidelines:

- **Single file.** One `.jsx` or `.tsx` file per component. No private imports from other component files. External libs (React, Tailwind utility classes, lucide-react icons, recharts) are fine.
- **Self-contained state.** `useState` only. No global stores.
- **Works on paper too.** Every interactive tool must have a paper equivalent described in the corresponding module. The tool is a convenience, not a prerequisite.
- **No analytics, no telemetry, no external API calls.** This library ships static content.

## How to submit

1. Fork the repo.
2. Create a branch: `feature/module-nn-short-name` or `fix/module-nn-issue-description`.
3. Follow the template.
4. Open a PR with a description covering: what the module is for, what it replaces or complements, and the three-test self-check (falsifiable, artifact-producing, honest about limits).

## Review

Maintainers review on a best-effort basis. Expect a response within two weeks. Reviews focus on the three-test standard, not stylistic preferences. If a reviewer pushes back, they will say exactly which test the submission fails and why.

## License

All contributions are under the repo's MIT license. By submitting a PR you confirm you have the right to license the content under those terms.
