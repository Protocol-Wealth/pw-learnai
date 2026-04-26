# 04 — Exercises

## Exercise 1: The decision in one sentence

Pick a tool you want to build, or one you have built that does not get used. Write the decision the tool supports in one sentence, in this exact form:

> "When [trigger condition], the user must decide whether/which/how [decision], and [success looks like]."

Examples:
- "When a vendor pitches us, the user must decide whether to enter formal evaluation, and success looks like a defensible go/no-go answer in 20 minutes."
- "When a candidate completes a take-home, the user must decide whether to advance them to onsite, and success looks like a calibrated yes/no with documented reasoning."

If you cannot write this sentence cleanly, the tool does not yet have a job. Stop building until the sentence works.

## Exercise 2: The frequency check

For your decision, list the last three times someone in your organization made it.

| When | Who | What did they decide | How long did it take |
|------|-----|----------------------|---------------------|
| | | | |
| | | | |
| | | | |

If you cannot list three instances in the past 90 days, the decision is not recurring enough to justify a tool. Build a checklist instead.

## Exercise 3: The paper version

Before any software, build the artifact on paper. Literal paper, or a single sheet in a spreadsheet.

Have one user fill it in for one real instance of the decision. Watch them work. Note:

- Where do they pause?
- Which inputs do they have to look up vs already know?
- What do they do with the output?
- Would they reach for it next time?

Revise the paper version until those four answers are satisfactory. Only then build the software.

## Exercise 4: Usage instrumentation

For any artifact you ship, track three numbers from week 1:

1. **Usage count.** How many times has it been used?
2. **Time per use.** Median minutes from open to close.
3. **Outcome use.** How often does the output of the artifact actually appear in a downstream artifact (memo, decision document, email)?

The third number is the real measure. An artifact that gets opened but whose output goes nowhere is failing. The user will stop opening it within a month.

## Exercise 5: The retirement criteria

Write the conditions under which you would retire the artifact:

- If usage drops below ___ per month
- If the underlying decision changes such that the artifact no longer fits
- If a vendor product or upstream tool absorbs the function

Tools that do not have retirement criteria accumulate. The accumulation is itself a cost — every tool the user has to remember exists is friction against using the right one.
