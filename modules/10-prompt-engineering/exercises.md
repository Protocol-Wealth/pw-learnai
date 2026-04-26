# 10 — Exercises

## Exercise 1: Audit a production prompt

Pick a prompt currently running in production. Score it against the six properties.

| Property | Present? | Notes |
|----------|----------|-------|
| Explicit role and context | | |
| Structured input | | |
| Specific output format | | |
| Edge case handling | | |
| Examples (where warranted) | | |
| Constraints on what not to do | | |

For each missing property, write the addition that would close the gap. Then make the changes and re-test.

## Exercise 2: Refactor a vague prompt

Take this vague prompt:

> "Summarize this email and tell me what to do next."

Refactor it using the six properties. The refactored version should:

- State the role explicitly
- Delimit the input
- Specify the output structure
- Handle edge cases (empty email, email in another language, email containing sensitive content)
- Optionally include examples
- State what not to do

Compare the two versions in production. Measure consistency of output.

## Exercise 3: Build the evaluation set

For one of your production prompts, build a set of 20 representative inputs covering:

- Five "happy path" inputs (typical, expected use)
- Five edge cases (empty, ambiguous, unusual)
- Five adversarial cases (prompt injection attempts, off-topic input, content the prompt should refuse)
- Five inputs that look like edge cases but are actually within scope

For each input, write the expected output category (not necessarily the exact text). When the prompt changes, re-run all 20 and compare.

## Exercise 4: Track drift over time

Once a month, run your evaluation set against your production prompt with no changes. Note any outputs that have shifted from the prior month. The shift may be from model updates the vendor pushed silently.

If you find drift, the question is whether to update the prompt or change vendors. Either way, the discovery beats finding out from a customer complaint.

## Exercise 5: The negative instruction audit

For your top three production prompts, list the failure modes you are trying to prevent. For each, check whether the prompt explicitly says not to do the thing.

| Failure mode | Explicitly prevented? | If not, draft the negative instruction |
|--------------|----------------------|----------------------------------------|
| | | |

Add the missing negative instructions and test that they do not regress legitimate behavior.

---