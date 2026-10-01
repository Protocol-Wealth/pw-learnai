# 17 - Models, Effort and Cost

How to choose a model tier and an effort setting, and how to price the work by what it completes rather than by what it reads.

## The claim

The configuration with the lowest price per token is often not the configuration with
the lowest cost per completed task. A cheaper model, or a lower effort setting, that
fails more often pays again for retries, review, and repair. This is testable: run one
real task set at two settings on the same harness, count only the runs that pass the
same check, and divide total spend by completed tasks. If the lower-priced setting wins
on cost per completed task at an equal pass rate on every task set you try, this
module's claim did not predict your workload.

## Why this matters

Model choice is usually made once, by habit, and never revisited. Meanwhile the
dials multiply: several tiers per vendor, an effort or reasoning setting per request,
a prompt cache with its own price, and aliases that move when a tool updates. An
operator who cannot say what a completed task costs cannot tell whether a new model is
an upgrade, a price cut, or a quiet increase in spend. The decision this module helps
with: which model and effort to run each stage of a workflow at, and how to know when
to change it.

## The idea

### Pin the full model ID in anything that runs unattended

A model alias is a pointer that the vendor, or a CLI update, can move. A script that
names an alias can change behavior with no change in your repository. In scripts, CI
jobs, and scheduled agents, name the full, dated model ID and record it next to every
result you keep. Use aliases interactively, where you will notice a change. That an
alias can move under a running workflow on a CLI update is observed once in practice
and is [BELIEVED] as a general claim; check your vendor's alias policy.

### Effort is a dial with a per-model default

Current models expose an effort or reasoning setting that trades tokens and latency
for more deliberate work. Each model ships a default, and the default differs by
model, so "the same prompt on a new model" may also be "the same prompt at a different
effort." Start at `high` for work that matters. Move to `xhigh` or `max` only where a
measured gain on your own task set justifies the extra spend, and move down only where
a measured pass rate survives the cut. Set effort explicitly in scripted runs so a
default change cannot alter a pipeline silently.

### Price per completed task, not per token

Per-token price is an input. The quantity you care about is:

```text
cost per completed task = total spend across all attempts / tasks that passed the check
```

"Passed the check" means your own acceptance test (Module 11), not the model's claim
that it finished. Count retries, failed attempts, and the tokens spent by any
reviewer or judge stage. If a human repairs failures, record that time next to the
spend; it is usually the larger number.

### Long sessions are dominated by cache reads

An agent re-sends its whole context on every turn. With prompt caching, the repeated
prefix is billed at a cache-read price that is a small fraction of the base input
price, while new input and output are billed in full. Over a long session the repeated
context is read many times, so cache reads, not generation, usually dominate the bill.
Two practical consequences:

- **Keep the prefix stable.** Editing early context, or reordering tools, invalidates
  the cache and bills the whole prefix again at full price.
- **A cold resume is a full-price request.** Caches expire. Returning to a very large
  context after the cache has expired pays base input price for all of it. Summarize
  or start fresh before walking away, not after coming back.

### Choose model and effort per stage

A workflow is rarely one kind of work. Mechanical stages (formatting, extraction,
file moves) can run on a cheaper tier at low effort. Verifiers, judges, and the stage
that decides whether work is done should run high, because a lenient verifier
inflates the pass rate that every cost figure depends on. Module 12 shows where to set
this in the common coding CLIs.

### Keep names and prices in one dated table

Model names, prices, and effort defaults change on a timescale of weeks. This module
does not name them. The dated table in [references.md](references.md) does, with the
date it was read, so a stale entry is visible rather than silently wrong.

## Worked example

The prices below are hypothetical, chosen to make the arithmetic readable.

**Two effort settings.** A team runs 20 real bug-fix tasks from its backlog through the
same harness twice, changing only effort. The check is the repository's existing test
suite plus a reviewer reading the diff.

| Setting | Spend per attempt | Attempts | Total spend | Passed | Cost per completed task |
|---|---|---|---|---|---|
| Lower effort | $0.30 | 20 | $6.00 | 10 | $0.60 |
| Higher effort | $0.45 | 20 | $9.00 | 18 | $0.50 |

The setting that costs 50% more per attempt is cheaper per completed task, before
counting the eight extra failures a person had to triage. On a second task set of
formatting fixes, both settings pass 20 of 20; there the lower setting wins, and the
team keeps it for that stage only.

**Where a session's money goes.** An agent session runs 40 turns over a context that
averages 200,000 tokens and writes about 2,000 output tokens per turn. Suppose output
costs 5 times base input and a cache read costs one tenth of base input. Measured in
units of base input price per million tokens:

- Cache reads: 40 x 200,000 = 8,000,000 tokens x 0.1 = 0.8 units.
- Output: 40 x 2,000 = 80,000 tokens x 5 = 0.4 units.

Reading the context costs twice what writing the answers does. Resuming the same
context once after the cache expired adds 0.2 units in a single request, a quarter of
the whole session's cache-read cost.

## Common failure modes

- **Comparing per-token prices.** The cheaper model is chosen on the price sheet and
  costs more per result.
- **Letting the default choose.** Effort is left unset, a model update changes the
  default, and a pipeline's cost or quality moves with no diff.
- **Aliases in automation.** A scheduled job's model changes underneath it and the
  regression is blamed on the prompt.
- **Counting the model's "done."** Cost per completed task is computed against the
  agent's own completion claim instead of an independent check.
- **Max effort everywhere.** The highest setting is used for mechanical stages that
  pass at the lowest one.
- **Cache-hostile context.** Early context is edited every turn, so the cache never
  holds and every turn pays full input price.
- **Trusting a stale price table.** A price or default copied from a blog months ago
  drives a decision today.

## What this module does not cover

- Vendor contracts, enterprise discounts, batch pricing, and rate limits. Check your
  own agreement.
- Local and self-hosted models. Their cost is hardware and electricity, not tokens;
  the cost-per-completed-task method still applies.
- Choosing between vendors on capability. That is an evaluation question (Module 11),
  and public benchmark scores are a lead, not evidence.
- Latency budgets for user-facing products, where effort trades against response time
  as well as cost.

## Try this

See [exercises.md](exercises.md).

## Further reading

See [references.md](references.md).
