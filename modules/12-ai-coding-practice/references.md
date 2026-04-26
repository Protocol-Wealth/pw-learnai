# 12 — References

## Primary sources

- **Anthropic.** *Claude Code documentation* (claude.com/code) and the prompting guide. Vendor-specific but the patterns transfer to other AI coding tools.
- **GitHub.** *GitHub Copilot documentation and research*. The 2022-2024 productivity studies are reasonable empirical work, with the caveat that GitHub has obvious incentive to find positive results.
- **METR.** Various studies on AI impact on software engineering tasks. More skeptical, more rigorous.

## On code review for AI-generated code

- **Google's "Engineering Practices Documentation"** (eng-practices.dev) on code review. Pre-AI but the principles transfer; AI-generated code needs the same scrutiny as human code, with extra attention to design consistency.
- **Various engineering blog posts** from teams using AI coding at scale. Stripe, Shopify, Anthropic itself. Useful for understanding what works at production volume.

## On test discipline

- **Beck, Kent.** *Test-Driven Development* (2002). The original argument for tests-first. AI-assisted coding makes the discipline more important, not less.
- **Martin, Robert.** *Clean Code* (2008). Older but the chapter on tests is directly applicable to evaluating AI-generated test quality.

## On the productivity question

- **Various empirical studies** on AI coding productivity. The results are mixed and methodologically contested. Read with care:
  - GitHub's Copilot studies (favorable, GitHub-funded)
  - METR's studies (more nuanced, sometimes negative)
  - DORA's State of DevOps Report (annual, includes AI sections)
- The honest read of the evidence: AI coding helps for some tasks, hurts for others, and the net effect depends heavily on the team's discipline.

## On the deskilling concern

- **Bainbridge, Lisanne.** "Ironies of Automation" (1983). The classic paper on automation and human skill. Originally about process control; ports directly to AI coding.
- **Various pieces** by senior engineers worried about the long-term effect on the talent pipeline. The concern is legitimate; it is also possible to design around. The practices in this module address the design.

## On security

- **OWASP guidance** on AI-generated code security. Brief, useful starting point.
- **Various papers** on vulnerabilities in AI-generated code (most notably Snyk and similar vendors' analyses). The gist: AI generates plausible-looking but vulnerable code at meaningful rates, especially for security-sensitive patterns. Read AI security output with skepticism.

## A note on the moving landscape

The tools in this space change every 3-6 months. Specific tool guidance dates fast. The practices in this module are tool-agnostic on purpose. When the tool changes, the practices still apply.
