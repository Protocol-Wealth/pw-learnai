# 12 — Exercises

## Exercise 1: Audit a recent AI-generated PR

Pick a PR from the last 30 days that included AI-generated code. Review it line by line.

| Section | Was it read carefully when committed? | Is it doing what was actually wanted? | Any subtle issues? |
|---------|---------------------------------------|--------------------------------------|--------------------|
| | | | |

If the answer to "read carefully" is no, the PR was a near miss. Adjust the team's review discipline.

## Exercise 2: The test discipline check

For your last five features that included AI-generated code, ask:

- Were the tests written before the implementation?
- Do the tests verify the requirement, or do they verify the implementation?
- If you removed the implementation and reimplemented from scratch, would the tests still be meaningful?

Tests that fail the third question are tautological. Replace them.

## Exercise 3: Schedule refactoring

Pick a date for the next quarterly refactoring session. Two days, no feature work.

In advance:
- Identify the three areas of the codebase where AI-generated patterns have accumulated
- Identify the consolidations that would simplify those areas
- Plan the refactoring with the same discipline as feature work — write tests, make small changes, validate

Without the schedule, refactoring does not happen. With it, the codebase does not drift.

## Exercise 4: AI-free skill maintenance

For each engineer on the team, identify one task they should do this month without AI assistance to maintain the underlying skill.

| Engineer | Task | Estimated time |
|----------|------|----------------|
| | | |

The cost is real. The benefit is a team that can still debug its own systems in five years.

## Exercise 5: Velocity over quarters

Track your team's feature delivery rate over the last four quarters. Compare to AI tooling adoption.

| Quarter | Features shipped | AI tooling in use | Engineer count | Features per engineer |
|---------|------------------|-------------------|----------------|----------------------|
| Q-3 | | | | |
| Q-2 | | | | |
| Q-1 | | | | |
| Current | | | | |

If features per engineer is rising, the AI gain is real and sustained. If it is flat or falling despite increased AI tooling, the gain is being absorbed by maintenance debt. Adjust practices.

---