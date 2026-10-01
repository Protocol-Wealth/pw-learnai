# 17 - Exercises

## Exercise 1: Cost per completed task at two effort settings

Pick one real, repeatable task your team runs with an agent: a bug fix, a data
extraction, a document summary with a known answer. Assemble at least 10 instances
and one acceptance check that does not ask the model whether it succeeded.

Run the full set twice on the same harness, same model, same prompt, changing only
effort. Record the model ID in full.

| Setting | Model ID | Attempts | Total spend | Passed the check | Cost per completed task | Human repair time |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |

Then answer in writing:

- Which setting is cheaper per completed task, and by how much?
- Would the answer change if you counted repair time at your team's hourly cost?
- Run the cheaper setting a second time. Did the pass rate hold, or was the first
  result inside run-to-run noise?

The artifact is the filled table plus a one-line decision: which setting this task
runs at, and what result would make you revisit it.

## Exercise 2: Pin audit

List every place a model is named in code, CI, scheduled jobs, or agent
configuration you own.

| Location | Model named as | Alias or full ID? | Effort set explicitly? | Owner |
|---|---|---|---|---|
| | | | | |

Change every unattended entry to a full model ID with explicit effort, or write down
why it stays an alias. The artifact is the table and the diff.

## Exercise 3: Where a session's money goes

Take the usage record for one long agent session (most providers and CLIs report
cached input, uncached input, and output tokens separately). Fill in:

| Component | Tokens | Price per million | Cost | Share of total |
|---|---|---|---|---|
| Cache reads | | | | |
| Cache writes | | | | |
| Uncached input | | | | |
| Output | | | | |

If cache reads are not the largest share, find out why: a short session, an unstable
prefix, or a cache that expired between turns. Name one change that would lower the
largest line and predict its effect before you make it.
