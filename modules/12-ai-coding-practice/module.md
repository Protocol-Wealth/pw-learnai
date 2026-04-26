# 12 — AI-Assisted Coding in Practice

How to ship real software with AI without creating maintenance debt.

## The claim

AI-assisted coding works. The productivity gain is real. It is also asymmetric — the gain accrues to writing code, while the cost accrues to maintaining it. Teams that do not adapt their practices to this asymmetry produce more code, faster, with longer-term maintenance debt that eventually outweighs the early productivity gain. The practices that maintain the gain over time are specific and not the same as the practices for human-written code.

## Why this matters

Most AI coding workflows look productive in the first month and break in the sixth. The breakage is silent — the codebase grows, tests grow, but the time required to make changes grows faster than the team expected. The team blames the codebase getting bigger and adds more developers. The underlying problem is that AI-generated code carries a different debt profile than human-written code, and the team did not adapt to it. This module is about adapting.

## The idea

Six practices. Each addresses a specific way AI-assisted coding goes wrong over time.

### Practice 1: Read every line you commit

The single most important practice. AI generates code at a speed that exceeds your ability to review it carefully if you are not deliberate. The temptation is to skim, accept, and move on. The cost is paid later when a bug or design issue ships that you would have caught with a careful read.

The discipline:

- Treat AI output the way you would treat a junior developer's pull request
- Read every line, including the ones that look right
- Ask whether each line is doing what you actually want, not just what looks reasonable
- Reject generated code that is plausible but not what the situation requires

This is slower than auto-accepting suggestions. It is faster than debugging the alternative.

### Practice 2: Constrain the context

AI coding tools work better with smaller, more specific contexts than with larger, more general ones. A prompt that says "modify this function to handle the new edge case" works better than a prompt that says "improve the error handling across the codebase."

The pattern:

- Identify the specific change required
- Provide the specific code being modified
- State the specific constraints (tests must pass, the public API does not change, the modification is local)
- Avoid asking the tool to make decisions that you have not made

The cost of not constraining: the tool makes design decisions implicitly, often inconsistently with the rest of the codebase, and the inconsistency accumulates over time.

### Practice 3: Maintain test discipline

AI generates plausible-looking tests as easily as it generates plausible-looking code. Plausible tests that do not actually verify the behavior are worse than no tests, because they create false confidence.

The discipline:

- Write the test first, by hand, for the specific behavior the change is supposed to produce
- Use AI to generate the implementation that passes the test
- Read the implementation carefully to ensure it passes the test for the right reasons, not by accident
- Use AI to generate additional tests after the implementation works, but verify each one tests something meaningful

The reverse — generate the implementation, then ask AI to write tests for it — produces tests that pass tautologically because they were written to match the implementation rather than the requirement.

### Practice 4: Refactor on a schedule

AI-generated code converges toward median patterns. It is rarely as clean as the best human-written code in the codebase. Without periodic refactoring, the codebase drifts toward median quality.

The discipline:

- Schedule refactoring sessions
- During refactoring, identify the patterns that have accumulated and consolidate them
- Use AI to assist the refactoring (with the same read-every-line discipline)
- Resist the temptation to skip refactoring because "the tests pass and it works"

Without refactoring, the codebase grows in ways that make the next change harder. Eventually a change that should take an afternoon takes a week.

### Practice 5: Maintain the team's underlying skill

The most insidious failure mode. Junior developers who only ever interact with the codebase through AI never develop the underlying intuition for what good code looks like. They become operators of the AI rather than engineers. When the AI fails subtly, they cannot detect it.

The discipline:

- Junior developers do regular work without AI assistance to maintain the underlying skill
- Pair programming with senior developers continues, with explicit attention to the reasoning behind code choices
- Code reviews focus on understanding, not just on mechanical quality
- Promotion criteria include demonstrated underlying competence, not just shipping velocity

This is hard to enforce because the short-term productivity cost is real. The long-term cost of not enforcing it is a team that cannot debug its own systems.

### Practice 6: Document for humans, not for the AI

AI does not need documentation — it can read the code. Human team members do. As AI handles more of the writing, the temptation is to skip documentation because the AI does not need it.

The discipline:

- Documentation explains why, not what (the code shows what)
- Architectural decisions are recorded with context, alternatives considered, and trade-offs accepted
- Onboarding documentation is maintained so that new team members can build mental models without depending on AI to explain the codebase
- Comments mark surprising or non-obvious code, including code where the AI made a choice that is not the most natural choice

A codebase that only the AI can navigate is a codebase that has become structurally dependent on a vendor.

## The honest accounting

AI-assisted coding produces three kinds of gains:

- **Real and durable.** Generating boilerplate, writing tests for code you already understand, exploring unfamiliar APIs, refactoring code at the line level.
- **Real but conditional.** Speeding up implementation when the design is already clear and the team has the discipline to read the output carefully.
- **Apparent but not durable.** Speed at the cost of understanding, where the team is shipping faster than it is learning.

Most teams capture the first kind without effort, the second kind with the practices in this module, and the third kind by accident. The third kind is the problem — it looks like productivity gain in week one and shows up as maintenance debt in month six.

The honest measure of AI coding productivity is not lines of code shipped. It is the rate of feature delivery sustained over multiple quarters with the same team. Teams that measure the right thing make the right trade-offs.

## Common failure modes

- **Auto-accepting suggestions.** Speed without understanding. Builds maintenance debt invisibly.
- **Generating tests for already-written code.** Tautological tests that do not catch real bugs.
- **Letting junior developers operate the AI without understanding.** Talent pipeline problem that surfaces years later.
- **Skipping refactoring because the tests pass.** Codebase quality drifts; future changes get harder.
- **Documenting only what the AI needs.** The codebase becomes navigable only with AI assistance.
- **Measuring the wrong thing.** Lines shipped instead of features delivered, weeks of velocity instead of quarters of velocity.

## What this module does not cover

- The specific tools and their workflows (changes too fast; current vendors include Claude Code, Cursor, GitHub Copilot, and others)
- The mechanics of code review for AI-generated PRs (similar to human PRs with extra attention to design consistency)
- The security implications of AI-generated code (real but specialized; see security-focused references)

## Try this

See [exercises.md](exercises.md).

## Further reading

See [references.md](references.md).
