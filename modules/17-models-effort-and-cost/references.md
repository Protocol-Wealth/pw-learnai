# 17 - References

Reviewed: 2026-09-30. Model names, prices, context sizes, and effort defaults change
within weeks. This is the only file in the module that names them. Re-read the live
vendor page before using any row below in a decision or a script.

## Current as of 2026-09-30

Anthropic models, from the models overview. Prices are US dollars per million tokens,
input / output, before caching or batch discounts.

| Model | Input / output price | Notes |
|---|---|---|
| Claude Fable 5.1 | $10 / $50 | Highest tier |
| Claude Opus 5.5 | $4 / $20 | |
| Claude Sonnet 5.5 | $2 / $10 | |
| Claude Haiku 4.5 | $1 / $5 | Lowest tier |

The overview also documents adaptive thinking, a per-model default effort, and a
1M-token context window for current models. The default effort differs between
models; read it per model rather than assuming one value.

For OpenAI's current model list and reasoning-effort setting, see Module 12's
references and the Codex configuration reference below.

## Primary sources

- **Anthropic.** [Models overview](https://platform.claude.com/docs/en/about-claude/models/overview).
  Current model IDs, aliases, prices, context windows, and feature support.
- **Anthropic.** [Effort](https://platform.claude.com/docs/en/build-with-claude/effort).
  What the effort parameter controls and its levels.
- **Anthropic.** [Spending your effort](https://claude.dev/blog/spending-your-effort/).
  Guidance on when a higher effort level pays for itself.
- **Anthropic.** [What a task costs on Opus 5.5](https://claude.dev/blog/what-a-task-costs-on-opus-5-5/).
  Pricing a task end to end rather than per token.
- **Anthropic.** [Building with Claude Sonnet 5.5](https://claude.dev/blog/building-with-claude-sonnet-5-5/).
  Where a lower tier fits in a multi-stage workflow.
- **OpenAI.** [Codex configuration reference](https://developers.openai.com/codex/config-reference).
  `model_reasoning_effort` and model selection for Codex.

## Practice notes

- **rivendale.** [`hsi-operator` `docs/choosing-effort.md`](https://github.com/rivendale/hsi-operator/blob/main/docs/choosing-effort.md).
  An operator's working notes on choosing effort per stage and measuring the result.

## On reading vendor numbers

- A launch claim of lower cost is usually measured on the vendor's own workload.
  Re-measure on yours with Exercise 1 before assuming it transfers.
- Public benchmark scores that accompany a launch are a lead, not evidence. Module 11
  covers how to check a benchmark before letting a score drive a choice.
