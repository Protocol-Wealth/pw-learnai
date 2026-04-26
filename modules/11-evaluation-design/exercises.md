# 11 — Exercises

## Exercise 1: Build a 20-input test set

For an AI system you operate (or plan to operate), build a test set with the four input categories.

| # | Input | Category (happy / edge / adversarial / OOD) | Expected output category | Why this test exists |
|---|-------|---------------------------------------------|--------------------------|---------------------|
| 1 | | | | |
| ... | | | | |
| 20 | | | | |

If "why this test exists" is "general coverage," you have not thought about what each test verifies. Be specific.

## Exercise 2: Write the rubric

For your AI system's output, write the rubric that defines acceptable.

| Dimension | What 5/5 looks like | What 3/5 looks like | What 1/5 looks like |
|-----------|--------------------|--------------------|---------------------|
| | | | |

A rubric without specific anchor points is unreliable. The exercise is the specificity.

## Exercise 3: Run the harness

Execute the test set against your current system. Score each output against the rubric. Record:

- Total score
- Per-input scores
- Failures (specific inputs and what went wrong)
- Notes (anything that surprised you)

Save the results with a date stamp. This is the baseline.

## Exercise 4: Re-run after a change

When you make any change to the system (prompt change, vendor change, downstream code change), re-run the harness. Compare results.

| Test # | Previous score | New score | Change | Investigate? |
|--------|---------------|-----------|--------|--------------|
| | | | | |

Any score that drops by 1+ points is investigated. Either the change is a regression or the test was flaky. Either way, the team learns something.

## Exercise 5: Quarterly review

Once a quarter, run the harness with no system changes. Compare against prior quarters.

If scores have shifted with no system changes, the vendor's model has shifted. Decide:
- Roll back to a pinned model version (where supported)
- Adjust the prompt to compensate for the model change
- Accept the new behavior if the shift is positive
- Switch vendors if the shift is negative and the vendor cannot be pinned

The discipline is to make this an explicit decision rather than an ambient drift.

---