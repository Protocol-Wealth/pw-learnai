# 12 - Exercises

## Exercise 1: Create the agent brief

Write the project guidance file your coding agents should read before doing work.

For Codex CLI, use `AGENTS.md`. For Claude Code, use `CLAUDE.md`, or import the same guidance with `@AGENTS.md`.

Include only durable guidance:

| Section | What belongs here |
|---------|-------------------|
| Build and test commands | The exact commands an agent should run before finishing |
| Project structure | Where important code, docs, tests, and generated files live |
| Coding standards | Conventions that are not obvious from nearby code |
| Protected areas | Files, APIs, schemas, or workflows that require extra review |
| Review expectations | What the agent should check before saying the task is done |

Keep the first version under 150 lines. If it becomes longer, move reference material into linked docs or skills.

## Exercise 2: Run a Codex CLI task with tight scope

Pick a small change you can verify in under 20 minutes.

Write a Codex prompt using the module template:

```text
Goal:

Scope:
- In bounds:
- Out of bounds:

Constraints:

Verification:

Review focus:

Finish with:
```

Run it interactively:

```bash
codex
```

After the agent finishes, record:

| Question | Answer |
|----------|--------|
| What files changed? | |
| What command verified the work? | |
| What did you reject or revise? | |
| What should move into `AGENTS.md` for next time? | |

## Exercise 3: Use Claude Code plan mode

Pick a change with enough ambiguity that you should review the plan before edits.

Start Claude in plan mode:

```bash
claude --permission-mode plan
```

Ask for a plan, not implementation. Approve edits only after the plan names the files, risk, and verification command.

Review the plan:

| Check | Pass/fail | Notes |
|-------|-----------|-------|
| Names specific files or modules | | |
| States what will not change | | |
| Includes verification command | | |
| Identifies the riskiest assumption | | |
| Keeps unrelated refactors out | | |

If the plan is vague, revise the prompt before allowing edits.

## Exercise 4: Compare two agents before implementation

Use Codex and Claude as independent planners for the same task. Do not let both edit files.

Ask each:

```text
Read the relevant files and propose a plan for <task>. Do not edit. Include files touched, risks, and verification.
```

Compare:

| Dimension | Codex plan | Claude plan | Decision |
|-----------|------------|-------------|----------|
| Simpler scope | | | |
| Better risk identification | | | |
| Better verification plan | | | |
| Better fit with repo style | | | |

Choose one implementer. Use the other agent as reviewer after the diff exists.

## Exercise 5: Identify an automation candidate

Find one workflow that is repeated, bounded, and low-judgment enough for non-interactive CLI use.

Good candidates:

- Summarize CI logs
- Draft release notes from commits
- Check documentation for stale links
- Produce a PR review checklist from a diff
- Triage lint or test output before a human fixes it

Bad candidates:

- Redesign the architecture
- Rewrite a subsystem
- Decide product behavior
- Modify security-sensitive code without human review

Write the non-interactive command you would use:

```bash
# Codex
codex exec "<bounded task>"

# Claude
claude -p "<bounded task>"
```

Define the safety boundary:

| Boundary | Decision |
|----------|----------|
| Read-only or edit-capable? | |
| What input is piped in? | |
| What output is expected? | |
| What secrets are withheld? | |
| Who reviews the result? | |

## Exercise 6: Quarterly stale-tool audit

Once a quarter, audit the agent setup.

| Item | Current state | Change needed |
|------|---------------|---------------|
| Codex CLI version and key workflows | | |
| Claude Code version and key workflows | | |
| `AGENTS.md` accuracy | | |
| `CLAUDE.md` accuracy | | |
| MCP servers still needed | | |
| Hooks or permissions still appropriate | | |
| Non-interactive scripts still bounded | | |

The goal is not to chase every new feature. The goal is to remove stale assumptions before they become hidden process debt.

---
