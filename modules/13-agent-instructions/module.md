# Designing Agent Instructions (CLAUDE.md / AGENTS.md)

**Core question:** What makes an agent-instructions file one a coding agent actually
follows, instead of one that looks thorough and changes nothing?

A CLAUDE.md (or AGENTS.md, or .cursorrules) is a contract the agent re-reads on every
turn. The common failure is not that the file is missing. It is that the file is
decoration: fluent, generic, and untethered to the repo it governs. A decorative file
costs tokens every turn and changes no behavior. This module is about writing the
other kind.

## The one job: encode what the agent cannot infer

**Claim:** An instructions file that contains no command, no path, and no framework
name will not measurably change agent behavior on your repo. **Test:** delete it, re-run
a representative task, and diff the output. If the output is the same, the file was
decoration.

The agent can already read your code. What it cannot read is the stuff that lives in
your head and your CI: the exact test command, where migrations live, which of three
plausible auth patterns you actually use, what gets a human sign-off. Spend the file on
that.

    # bad — could be pasted into any repo on earth
    Write clean code. Follow best practices. Handle edge cases. Test your changes.

    # good — true only of this repo
    Stack: Postgres + Hono + React 19 + Vite 6 + Tailwind v4.
    Test: `pnpm test` (vitest). Lint: `pnpm lint`. Build: `pnpm build`.
    Migrations: db/migrations; generate with `pnpm db:gen`; never hand-edit.

## Stale instructions are worse than missing ones

**Claim:** A wrong command in the file is more expensive than no command, because the
agent will trust it, run it, fail, and then improvise — burning a turn and often
"fixing" the wrong thing. **Test:** run every command in your file. Any that don't exist
or don't pass are liabilities, not documentation.

Validate against ground truth, not memory. The single thing a static reviewer cannot do,
and the single thing that matters most, is checking each claim against the actual repo:
does the script exist in package.json, does the path exist, does the declared stack
match the lockfile.

## It pays rent every turn

**Claim:** Length is not free; the file is prepended to every request, so every line
competes for the model's attention with the actual task. **Test:** for each line, ask
whether an agent that ignored it would produce worse output. If not, cut it.

Generic coding philosophy the model already knows ("don't introduce bugs," "write
tests") is the first thing to cut. It reads as filler and dilutes the lines that are
actually load-bearing.

## Tell the agent what to do, not just what to avoid

**Claim:** Prohibitions steer more weakly than imperatives, because a negation still puts
the bad pattern in front of the model. "Don't reformat" keeps "reformat" in context.
**Test:** count your rules; if most are "don't / never / avoid," rewrite the
load-bearing ones as the positive action.

    # bad
    Don't reformat files you weren't asked to touch.

    # good
    Limit each diff to lines that serve the requested change. If a formatter wants to
    touch more, revert those hunks before committing.

## Lead with a ranked spine

**Claim:** Co-equal rules read as equally ignorable. If the file is a flat list of
twenty conventions, the agent has no signal about which three it must not violate.
**Test:** can you point to the "if you do only one thing" rule in the first ten lines? If
not, add it.

Put the invariants whose violation makes the work *wrong* (not merely off-style) at the
top, explicitly marked. Everything else is secondary by construction.

## Show, don't tell

**Claim:** One worked good/bad example steers harder than three paragraphs of directive,
because the model pattern-matches against concrete anchors far better than against
abstractions. **Test:** does the file contain at least one before/after? If it's all
prose, it's weaker than it looks.

This module follows its own rule; every section above carries an example. That is not
decoration — it is the mechanism.

## Don't define success as "follow the rules"

**Claim:** A file that ends "these guidelines work when you follow them" has defined
success circularly and given the agent no external target. **Test:** does your success
criterion reference the repo (build passes, diff is minimal, tests green) or only the
file itself? Only the former is verifiable.

    # bad
    These guidelines produce good code when applied consistently.

    # good
    A change is done when: the build passes, the diff touches only what the task
    required, and any command you couldn't run is named in the summary.

## Match the file to how the agent actually runs

**Claim:** Checkpoint language ("stop and ask," "wait for buy-in") is correct for an
interactive, permission-gated session and wrong for an autonomous run where no human is
watching the plan in real time. The same file can't be optimal for both. **Test:** does
your file's collaboration model match your actual runtime?

    # bad for an autonomous / skip-permissions run
    Stop and ask before making any architectural decision.

    # good for an autonomous run
    State your assumptions and plan at the top of the run, then execute. Halt only for a
    destructive or irreversible action.

## Test the file the cheap way

Two complementary checks, and they catch different things:

- The **Agent Instructions Auditor** in this repo scores pasted text in your browser
  against the properties above — framing ratio, redundancy, hierarchy, anchors,
  circular criteria, specificity signals. It is instant and private (nothing leaves the
  page), but it can only see the text, not your repo.
- The **deep-audit prompt** (modules/13-agent-instructions/deep-audit-prompt.md) runs in
  your own Claude Code with filesystem access. It does the part the browser can't:
  validate every command and path against ground truth, then rewrite the file. Use it
  when you want correctness, not just shape.

## What this won't fix

A good instructions file makes a capable agent more reliable on your repo. It does not
make an incapable agent capable, and it does not substitute for reading the diff. Treat
it as a contract you maintain, not a spell you cast once: when the stack, commands, or
conventions change, the file is stale until you update it, and stale is worse than
missing.
