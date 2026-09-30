# 12 - AI-Assisted Coding in Practice

How to ship real software with Codex CLI, Claude Code, and similar coding agents without creating maintenance debt.

## The claim

Coding agents can inspect repositories, edit files, run commands, and use external
tools, so their operating model matters as much as their generated code. This module
predicts that persistent project instructions, narrow tasks, explicit permissions,
documented verification, and a separate review pass reduce unrequested diff scope and
post-merge defects on representative tasks. If the controlled and uncontrolled
workflows produce the same measured outcomes, the extra operating controls did not
help that repository.

## Why this matters

The modern coding-agent workflow has moved from "generate this function" to "inspect the repo, edit files, run tests, explain the diff, and open a PR." That shift changes the risk profile. A tool that can read and write a repository, run shell commands, use external tools through MCP, and continue work across sessions is useful precisely because it has enough agency to cause damage.

The answer is not to avoid the tools. The answer is to define how they operate.

## The idea

Use a four-loop operating model:

1. Prepare the repo context.
2. Choose the right execution mode.
3. Frame the task tightly.
4. Verify the diff before it ships.

The specific commands change. The operating model does not.

### Loop 1: Prepare the repo context

Every agentic coding session starts better when the tool can read durable project guidance before you type the task.

Use `AGENTS.md` for Codex CLI, Claude Code, and every other coding agent. Put repository conventions, build commands, test commands, forbidden patterns, review expectations, and content style rules in that one file. Do not add a second instruction file. Nested directories can carry a more specific `AGENTS.md`.

Use these files for facts the agent should always know:

- Package manager and build commands
- Test commands and expected verification steps
- Architecture boundaries and naming conventions
- Files or directories that require extra care
- Documentation style rules
- Review expectations before committing

Do not put long API references or one-off procedures in always-loaded context. Put those in linked docs, skills, or task prompts so they load only when needed.

### Loop 2: Choose the right execution mode

Different agent modes solve different problems.

| Need | Codex CLI pattern | Claude Code pattern |
|------|-------------------|---------------------|
| Pair on a change interactively | `codex` | `claude` |
| Ask for a read-only investigation | `codex --sandbox read-only` or explicit prompt constraints | `claude --permission-mode plan` |
| Run a scripted task | `codex exec "task"` | `claude -p "task"` |
| Continue prior work | `codex resume` or `codex exec resume --last` | `claude --continue` or `claude --resume` |
| Review a local diff | `/review` inside Codex | Ask Claude to review the diff, or use a review-focused subagent |
| Keep broad research out of the main context | Ask for subagents when enabled | Ask Claude to use a subagent |
| Work in parallel without edit collisions | Codex cloud tasks or separate worktrees | `claude --worktree <name>` or separate worktrees |
| Connect external systems | `codex mcp` or `config.toml` MCP servers | `claude mcp` or project/user MCP settings |
| Set effort for a scripted run | `codex exec -c model_reasoning_effort=high "task"` | `claude -p --effort high "task"` |
| Pin the model in automation | `codex exec -m <full-model-id> "task"` | `claude -p --model <full-model-id> "task"` |

The safest default for implementation work is local, interactive, workspace-scoped editing. Use non-interactive automation only when the task is well specified and the environment is controlled.

In anything that runs unattended, set effort and the full model ID explicitly. A default or an alias can change on a CLI update, and the pipeline's cost and behavior change with it while the repository shows no diff. Module 17 covers how to choose the values.

### Where guidance belongs: AGENTS.md, skills, MCP, hooks

Four mechanisms, four jobs. Putting guidance in the wrong one is the most common cause of an agent that "ignores" an instruction.

| Layer | Loaded | Use it for | Do not use it for |
|---|---|---|---|
| `AGENTS.md` | Every session | Rules that are always true in this repo: build and test commands, boundaries, style | Long procedures that matter for one task in twenty |
| Skills | When a task matches the skill's description | Situational procedures: a release checklist, a migration recipe, a domain reference | Rules that must hold on every task |
| MCP servers | When connected | Reaching external systems: issue trackers, docs, databases, browsers | Instructions; a server is a capability grant, not guidance |
| Hooks and permissions | On events, enforced by the harness | Anything that must be blocked or must always run, whatever the model decides | Advice the model may reasonably override |

If an instruction must never be violated, it belongs in a hook or permission rule, not in text. If it matters only sometimes, it belongs in a skill, and you should check that the skill actually triggers on representative prompts.

### Choose model and effort per stage

When work fans out to subagents, each stage can run at its own model and effort. Mechanical stages (search, extraction, formatting) can run on a cheaper tier at low effort. Reviewers, verifiers, and judges should run high, because a lenient reviewer inflates every pass rate downstream. Claude Code subagent definitions accept a model setting (see references); check your own tool's subagent configuration, and set the model per stage rather than inheriting the most expensive one everywhere.

### Loop 3: Frame the task tightly

A good CLI-agent task prompt has six parts:

1. **Outcome.** What should be true when the task is done.
2. **Scope.** Which files, modules, or workflows are in bounds.
3. **Constraints.** What must not change.
4. **Verification.** Which command, test, or manual check proves the result.
5. **Risk focus.** What failure modes the agent should watch for.
6. **Completion format.** What summary you want back.

Template:

```text
Goal: <specific user-visible outcome>

Scope:
- In bounds: <files, modules, or flows>
- Out of bounds: <files, APIs, refactors, dependencies>

Constraints:
- Preserve <public behavior, data shape, style rule>
- Do not <known risky action>

Verification:
- Run <command>
- If that fails, report the failing command and likely cause before trying broad fixes

Review focus:
- Check <security, accessibility, migration, regression, stale data>

Finish with:
- Files changed
- Verification result
- Remaining risk
```

Bad prompt:

```text
Improve the frontend and update the AI coding module.
```

Better prompt:

```text
Goal: Update module 12 so it teaches practical Codex CLI and Claude Code workflows as of June 2026.

Scope:
- Edit modules/12-ai-coding-practice/module.md, exercises.md, and references.md.
- If useful, add one React tool under components/interactive/.
- Regenerate notebook bundles.

Constraints:
- Keep the tone consistent with the existing modules.
- Do not add a backend, telemetry, or paid API dependency.
- Prefer official OpenAI and Anthropic docs for current tool behavior.

Verification:
- Run npm run build.
- Check git diff for generated bundle changes.

Finish with:
- Content changes
- Frontend changes
- Build result
```

### Loop 4: Verify the diff before it ships

AI coding agents are strongest when verification is explicit and weakest when "it looks right" is treated as enough.

The discipline:

- Read every file changed by the agent.
- Run the tests or build yourself, or watch the agent run them and inspect the output.
- Ask for a review pass focused on regressions, not praise.
- Use a second agent as reviewer when the change is risky. For example, have Codex implement and Claude review, or have Claude implement and Codex review.
- Keep the final commit human-owned. The human is accountable for the code, even when the agent wrote it.

## Using Codex CLI well

Codex CLI is strongest when you want a terminal-first collaborator that can inspect a local repository, edit files, run commands, review diffs, use MCP tools, and continue work across sessions.

High-leverage patterns:

- **Interactive implementation:** run `codex` from the repository root, describe the target behavior, then review plans, commands, and diffs as they happen.
- **Explicit permissions:** use `/permissions` during a session, or launch with `--sandbox read-only`, `--sandbox workspace-write`, and `--ask-for-approval on-request` depending on the task.
- **Local review:** use `/review` before committing. Ask for findings ordered by severity, with file and line references.
- **Non-interactive scripts:** use `codex exec` for bounded automation such as summarizing logs, drafting release notes, or triaging test failures. For edit-capable runs, set the sandbox explicitly.
- **Persistent repo guidance:** keep `AGENTS.md` current. When Codex repeats a mistake, update the file rather than retyping the correction every session.
- **MCP for live tools:** connect documentation, GitHub, browser, Figma, Sentry, or other systems through MCP when the agent needs authorized external context.
- **Cloud/offloaded work:** use Codex cloud tasks for work that can run away from your active terminal, then inspect and apply the result locally.

Guardrails:

- Avoid `--dangerously-bypass-approvals-and-sandbox` except inside an externally isolated environment.
- Do not pass broad secrets into the environment for tasks that run repo-controlled scripts.
- Keep `codex exec` prompts narrow. Non-interactive agents should not be asked to make open-ended architecture decisions without a review stage.

## Using Claude Code well

Claude Code is strongest when you want an agent that can operate across the whole project, read project memory from `AGENTS.md`, plan before editing, delegate research to subagents, and run parallel work in worktrees.

High-leverage patterns:

- **Plan before editing:** use `claude --permission-mode plan` for broad changes. Claude reads files and proposes a plan before making edits.
- **Project memory:** maintain `AGENTS.md` for project conventions. Claude Code and Codex read the same file.
- **Subagents for noisy research:** ask Claude to use a subagent when investigation would flood the main conversation with file reads, logs, or search results.
- **Worktrees for parallelism:** use `claude --worktree <name>` when one session should edit a branch while another session works elsewhere.
- **Non-interactive output:** use `claude -p "task"` when you want stdout-friendly output for scripts, CI, or batch processing.
- **MCP and hooks:** use MCP for external systems and hooks for actions that must run on specific events, such as blocking protected edits or running checks after file changes.
- **Resume long work:** use `claude --continue`, `claude --resume`, or `/resume` when a task spans multiple sittings.

Guardrails:

- Treat `AGENTS.md` as context, not enforcement. If an action must be blocked, use permissions or hooks.
- Keep always-loaded memory concise. Move long reference material into skills or linked docs.
- Do not let multiple Claude sessions edit the same worktree at the same time.
- Avoid permission bypass modes unless the environment is isolated and disposable.

## Combining Codex and Claude

The best two-agent workflow is not "let both write code at once." It is role separation.

Useful combinations:

- **Plan comparison:** ask Codex and Claude for independent plans, then choose one.
- **Implement/review:** one agent implements; the other reviews the diff for regressions.
- **Research/execute:** one agent researches a confusing subsystem; the other implements using the research summary.
- **Frontend/design check:** one agent edits UI; the other reviews accessibility, layout, copy, and build behavior.
- **Stale-docs check:** one agent updates content from official docs; the other searches for unsupported claims and stale references.

Rules:

- One writer per worktree.
- One explicit verification command.
- One human owner for the final diff.

## Common failure modes

- **Auto-accepting edits.** The agent wrote quickly; the human reviewed slowly or not at all.
- **Prompting without scope.** The agent makes design decisions the team never agreed to.
- **Skipping persistent guidance.** The same corrections get typed in every session instead of captured in `AGENTS.md`.
- **Using non-interactive mode for vague work.** A scriptable agent is best for bounded tasks, not ambiguous product judgment.
- **Letting context bloat.** The main session fills with logs, file dumps, and search results that should have gone to a subagent or separate run.
- **Two agents editing one branch.** Parallelism becomes merge conflict and behavioral drift.
- **Trusting generated tests.** Tests written after the implementation often verify the implementation rather than the requirement.
- **Measuring lines shipped.** The real measure is sustained feature delivery with stable maintenance cost.

## What this module does not cover

- Detailed pricing, entitlement, and model availability for specific vendors. Those change too quickly; Module 17 covers how to reason about model, effort, and cost, and keeps a dated table in its references.
- Security review for AI-generated code in regulated systems. The practices here reduce risk but do not replace secure development lifecycle controls.
- Full CI/CD automation patterns. Start with local interactive use, then automate only the workflows that have become boring and repeatable.

## Try this

See [exercises.md](exercises.md).

The interactive version is in `components/interactive/AgenticCodingPlaybook.jsx`.

## Further reading

See [references.md](references.md).
