# 09 — AI Judgment Under Uncertainty

How to make AI decisions when the capability curve keeps moving.

## The claim

AI capability changes faster than most decision processes. A judgment that was correct six months ago may be wrong now because models got cheaper, more capable, or both. The defense is not to predict the curve — that fails reliably — but to build decision processes that absorb capability shifts without re-litigating from scratch. The processes are specific. Most organizations do not have them.

## Why this matters

The cost of stale AI judgment compounds. A vendor relationship priced for 2024 capabilities may be wildly overpriced in 2026. A workflow designed for the limitations of one generation of models may be carrying friction the next generation removed. A decision not to deploy may become a decision not to compete. None of this means moving with the latest hype — it means having a process that updates intentionally rather than by drift.

## The idea

Three practices. Each one addresses a different failure mode in AI judgment under capability change.

### Practice 1: The capability inventory

Once a quarter, write down the current state of AI capability for the tasks your organization cares about. Specifically:

- What can the best available model do today on this task?
- What is the cost (per call, per task, per user-month)?
- What is the failure mode (when it fails, how does it fail, how visible is the failure)?
- What is the rate of change since the last review?

The inventory does not need to be exhaustive. It needs to cover the ten to thirty tasks where AI capability matters most for your organization's strategy. Each entry is a paragraph or a table row.

The output of the inventory is not a forecast. It is a current-state map. The map shows you what to deploy now, what to revisit in three months, and what to ignore for now because it is too far from production-ready.

### Practice 2: Reversibility analysis

For every AI decision, classify it on a reversibility axis.

**Reversible.** The decision can be undone within a quarter at low cost. Switching vendors, turning off a feature, replacing a tool. Reversible decisions can be made fast and updated as capability changes.

**Partially reversible.** The decision can be undone but at material cost. Workflow changes that retrained the team, integration work that took engineering quarters, contracts with kill fees. Make these decisions with care; understand the cost of reversal before committing.

**Effectively irreversible.** The decision creates path dependence that cannot be cheaply unwound. Letting an AI vendor train on your proprietary data. Restructuring teams around an AI assumption that may not hold. Architectural choices that lock in a specific capability profile. Make these decisions slowly and make the reversibility cost explicit before signing.

The discipline: most AI decisions in most organizations are treated as if they were reversible when they are not. The reversibility analysis is a forcing function to recognize when a decision deserves more scrutiny.

### Practice 3: The "second-best decision" check

For irreversible or expensive decisions, ask: if the AI capability landscape changes substantially in the next 18 months, what is the second-best decision we could make today that would still look reasonable then?

The point is not to predict the change. The point is to identify decisions that look optimal under current conditions but are fragile to capability shifts, versus decisions that are slightly worse under current conditions but robust to a wider range of futures.

A robust decision is often the right one even when a more optimal-looking decision is available, because the robust decision survives more futures.

Example: at a wealth management firm, a more "optimal" decision under 2025 conditions might be a multi-year contract with a specialty vendor whose AI capability is currently best-in-class. The robust decision is a one-year contract with the same vendor plus an internal evaluation of whether commodity model providers will close the capability gap. Slightly more expensive in year one. Substantially more flexible if the capability landscape shifts.

## The personal practice

For individuals operating in this space, three habits sustain judgment over time.

**Habit 1: Read primary sources.** Vendor announcements, model papers, capability evaluations, regulatory filings. Most operator media on AI is downstream commentary that compresses or distorts the original. The primary sources take longer to read but produce more durable understanding. Allocate two to four hours a week.

**Habit 2: Try the tools.** Whatever the latest capable model is, use it for an actual task you do regularly. Notice where it helps, where it fails, where it surprises. Direct experience is irreplaceable for calibrating intuition. Five hours a month, on real work.

**Habit 3: Maintain calibration.** Once a quarter, review your AI predictions from the prior quarter. What did you expect? What happened? Where were you wrong, and in what direction? Most operators are systematically wrong in one direction (usually overestimating timelines for capability X and underestimating the rate of cost decline). Identifying your bias is more valuable than reading another article.

## Common failure modes

- **Treating AI judgment as something to delegate to "the AI team."** AI capability change touches strategic decisions; senior leaders must build their own judgment, not import it.
- **Updating only when forced.** Quarterly review or it does not happen. Annual is too slow for the current rate of change.
- **Confusing hype cycles with capability cycles.** The hype cycle is monthly. The capability cycle is quarterly. The deployment cycle is annual. Different cadences require different attention.
- **Locking into long contracts based on current capability.** The vendor's incentive is to lock you in before the capability landscape shifts. Resist multi-year commitments without explicit reset clauses.
- **Believing forecasts.** The honest answer about where AI will be in 18 months is "uncertain, with a wide range." Anyone who tells you confidently is selling something.

## What this module does not cover

- The technical content of how models work (separate domain; many references)
- The specific evaluation methodologies for AI systems (see Module 11)
- The investment strategy for AI exposure (different domain entirely; depends on portfolio context)

## Try this

See [exercises.md](exercises.md).

## Further reading

See [references.md](references.md).
