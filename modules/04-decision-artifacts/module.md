# 04 — Building Decision-Support Artifacts

How to build a tool that actually gets used.

## The claim

Most internal tools are built to make the builder feel productive, not to be used. The ones that get used share a specific design pattern: they reduce a real decision the user makes regularly to a structured set of inputs, give a defensible output, and respect the user's existing workflow rather than fighting it. Decision-support artifacts that do not meet all three criteria do not get used, regardless of how clever they are.

## Why this matters

The deliverable for most AI strategy work is a tool. A rubric, a worksheet, a calculator, a piece of working software. The tools that compound are the ones that survive past the first month — that the user reaches for again, that get refined as the user's understanding deepens, that the user shares with colleagues without prompting. This module is about how to build for that outcome rather than the launch-and-forget alternative.

## The idea

A decision-support artifact is a tool that takes a recurring decision the user is already making and provides structure, evidence, or computation that improves the decision. The keywords are *recurring* (one-time decisions do not need tools) and *the user is already making* (you are not adding work, you are improving work that already exists).

### The three tests an artifact must pass

**Test 1: Real decision.** The user actually makes this decision. Regularly. Currently. Today. Not "would benefit from making" — *is making*.

If you cannot name three times in the past month the user made the decision, the artifact does not have a job.

**Test 2: Defensible output.** The artifact's output can be defended to a skeptic. The reasoning is transparent. The inputs are documented. The user can show the work.

Black-box outputs (especially from AI) fail this test in stakes-bearing decisions. The user will not stake their reputation on output they cannot explain.

**Test 3: Workflow respect.** The artifact fits the user's existing workflow. It does not require switching tools, learning new conventions, or remembering to check it. The friction of using it is lower than the friction of not using it.

A spreadsheet that lives in the same folder where the user already works beats an elegant web app that requires a separate login.

### The four artifact types

Most decision-support artifacts are one of four things:

**Rubrics.** A structured list of criteria with scoring guidance. Used for evaluating something against a standard. Example: a vendor selection rubric, a hiring rubric, a code review rubric.

**Diagnostics.** A structured set of questions whose answers map to a recommendation. Used for classification or triage. Example: the disruption diagnostic in Module 01, a Quadrant classifier from Module 02.

**Calculators.** A structured set of inputs and a computational output. Used when the user has all the inputs but the math is non-trivial. Example: NPV with sensitivity analysis, expected-value of an experiment, sample size calculation.

**Decision trees.** A branching structure that walks the user through dependent choices. Used for decisions with strong path-dependence. Example: an incident response tree, a regulatory-applicability decision tree.

These types compose. A complex artifact might have a diagnostic up front, a calculator in the middle, and a rubric at the end. But each component should be classifiable as one of the four — if a component is not, it is probably doing two things and should be split.

### Design principles

**Start with the decision, not the tool.** Write the decision in one sentence. "Should we deploy this AI tool to production?" "Which vendor should we contract for X?" "Is this candidate qualified for the role?" If you cannot write the decision in one sentence, you do not understand it well enough to build for it.

**Build the paper version first.** Before any code, before any spreadsheet, write the artifact on paper. The user fills it in by hand. If it does not work on paper, no amount of software will save it. If it works on paper, the software is now a convenience layer.

**Optimize for the second use, not the first.** First-use experience is dominated by novelty. Second-use experience is dominated by the question "is this worth my time again?" Design the second use. The artifact should remember context, suggest defaults from prior runs, surface inconsistencies the user did not flag last time.

**Make the inputs cheap, the output rich.** The cost-benefit ratio of a tool is measured in input minutes versus output value. A 30-second input that yields a defensible recommendation gets used. A 30-minute input that yields a probability score does not, regardless of how good the probability score is.

**Show the reasoning.** The output is not just the recommendation — it is the recommendation plus the reasoning, in a form the user can copy into a memo or email without rewriting. If the user has to translate the output to use it, you have built a draft, not a tool.

### Anti-patterns

- **The dashboard.** A wall of metrics with no recommendation. Looks impressive in screenshots. Does not help anyone make any decision.
- **The conversational AI wrapper.** A chat interface where the user has to figure out what to ask. The user does not know what to ask, which is why they need the tool.
- **The configuration tool.** An artifact with so many knobs that the user has to learn the artifact before they can use it. The configuration burden destroys the time savings.
- **The certainty inflator.** Output formatted as authoritative without indicating uncertainty. The user trusts it more than they should, and one bad recommendation destroys trust in the entire tool.
- **The lock-in.** A tool that creates work to use even after it is no longer useful. The user cannot stop using it without losing data, which means they grow to resent it.

## Worked example: a vendor selection rubric for AI tooling

A real decision in a small firm: which AI vendor to contract for a specific use case. The decision is recurring (multiple vendor evaluations per year), the user is already making it (often poorly, by gut feel), and the failure mode is consequential (Module 03 patterns).

**Decision in one sentence:** Should we contract Vendor X for use case Y?

**Artifact type:** Rubric, scored across six dimensions.

**Inputs (rubric criteria, scored 1-5):**
1. Capability fit — does the tool actually solve the problem we have?
2. Data governance — does the contract protect proprietary inputs from training use?
3. Reliability track record — uptime, latency, incident history.
4. Integration cost — engineering hours to deploy and maintain.
5. Total cost — annual license plus integration plus opportunity cost of internal time.
6. Switching cost if it does not work out — how locked in are we?

**Output:** Total score, individual category scores, written recommendation, and a one-paragraph justification the user can paste into a memo.

**Workflow respect:** Lives as a spreadsheet template in the same folder as the rest of the firm's vendor evaluation work. No login. No new tool. The user fills in scores and a justification cell auto-populates.

**Defensibility:** The criteria are public. The scores are documented. A skeptic asking "why did we pick Vendor X" gets a complete answer in 30 seconds.

**Why this works:** Cheap input (15-30 minutes per vendor). Rich output (a defensible recommendation plus a paste-ready justification). Lives in the user's existing workflow. Scales — adding new vendors is filling in another column.

## Common failure modes

- **Building the tool the user said they wanted instead of the tool they will use.** Users frequently request features that test poorly in actual use. The discipline is to ask what decision the tool helps with, then build the minimum that serves the decision.
- **Confusing the artifact with the framework.** A framework is the underlying logic; an artifact is a packaging of the framework into something usable. Many builders ship the framework as a blog post and call it a tool.
- **Skipping the paper version.** If the paper version is bad, the software version is a polished bad thing.
- **Optimizing for the build, not the deploy.** The tool is not done when it works. It is done when the user has used it three times and reached for it without prompting.
- **Treating "the user finds it useful" as the same as "the user uses it."** Stated preference and revealed preference diverge. Track usage, not satisfaction.

## What this module does not cover

- The technical implementation of any specific artifact (use the right tool — spreadsheet, web app, internal tool platform — for the job)
- How to evaluate AI-generated outputs in artifacts (see Module 11)
- How to test whether a planned artifact will actually be used (see Module 07 on experimentation)
- How to handle artifacts that operate on regulated data (jurisdiction-specific, get counsel)

## Try this

See [exercises.md](exercises.md) for the artifact design template and a usage tracking template.

## Further reading

See [references.md](references.md).
