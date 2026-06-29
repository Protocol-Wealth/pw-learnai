# Start Here: Your First AI Coding Session

**Core question:** What is the shortest path from "I have never coded with AI" to
"I made a real change and understood what happened" — and what do you do next so you
don't plateau after the first thrill?

Most people don't stall because AI coding is hard. They stall because they get handed
five tools and four articles at once, freeze on which to pick, and never complete a
first real task. The cure is a sequence with exactly one next action at every stage.
This module is that sequence.

## The 30-minute first session

**Claim:** You can complete a useful first task in under an hour without installing a
terminal, learning git, or choosing between vendors. **Test:** at the end, you have one
real file changed or explained and you can say what the AI did and why. If you can't, the
task was too abstract — pick a smaller, more concrete one.

1. **Get a GitHub account** (github.com). Two minutes. You won't use it today; it's just
   where code lives when you're ready.
2. **Install one assistant — not two.** Start with Claude Desktop *or* the ChatGPT app.
   Choosing between them is the single biggest stall point, so defer it: you can add the
   other in a week. Either one is enough to learn the loop.
3. **Give it one real, tiny task on something you already have.** "Explain what this
   script does." "Add error handling to this function." "Why does this spreadsheet macro
   fail on empty rows?" Real beats toy — you'll care about the answer, and caring is what
   teaches you.
4. **Watch the loop.** You describe intent → it proposes → you read and correct → repeat.

## The loop is the whole skill

**Claim:** Everything past the first session is amplifying one loop —
*intent → proposal → read → correct* — not learning new magic words. **Test:** when an
output is wrong, can you point at which step failed (unclear intent? you didn't read the
proposal? you accepted without correcting?)? If you can, you're already doing the skill.

    # bad — outsources judgment, learns nothing
    "Build me an app." → paste whatever it returns → it breaks → start over

    # good — keeps you in the loop
    "Add a totals row to this CSV script." → read the diff → "you summed the header row
    too; skip row 0" → re-read → ship

The person who reads every proposal before accepting it gets reliably better output than
the person who accepts blindly and prompts harder. The bottleneck is your attention, not
the model's capability.

## The ladder: five rungs, each with a climb trigger

Don't plan the whole journey. Climb one rung when the named trigger actually bites.

| Rung | You're here when… | The move |
|---|---|---|
| 0 · Chat | curious | paste code into Claude/ChatGPT, ask questions |
| 1 · Desktop app | you want it to see your files | Claude Desktop / ChatGPT desktop on a real folder |
| 2 · CLI | you're copy-pasting files back and forth | Claude Code / Codex CLI |
| 3 · Reliable on *your* repo | the agent keeps re-guessing your conventions | write a `CLAUDE.md` / `AGENTS.md` (Modules 12 and 13) |
| 4 · Beyond the laptop | you need to persist data or run server-side | cloud sessions; fly.io / Neon / a cloud provider |

**Claim:** Climbing before the trigger bites wastes time; a beginner who jumps straight to
the CLI and config files usually quits before completing one task. **Test:** can you name
the friction that made you want the next rung? No friction named ⇒ you're climbing for
status, not need — stay where you are.

The deeper rungs have their own modules in this library:
[Module 12 — AI-Assisted Coding in Practice](../12-ai-coding-practice/module.md) for the
CLI workflow, and [Module 13 — Designing Agent Instructions](../13-agent-instructions/module.md)
plus its in-browser auditor for rung 3.

## The instruction-file zoo: two audiences, not one pile

Once you reach rung 3 you'll hit a confusing cluster of filenames. The confusion clears
the moment you sort them by *who reads the file*:

- **Files that instruct a coding agent working inside your repo:**
  - `CLAUDE.md` — what Claude Code re-reads every turn for *this* repo.
  - `AGENTS.md` — the cross-tool version of the same idea (Codex, Cursor, and others read
    the `agents.md` convention).
  - `agents.txt` — **not an established standard.** There is no settled robots-style spec
    for agents; if someone hands you one, treat it skeptically rather than cargo-culting
    it.
- **Files that help an LLM *consume your published content*:**
  - `llms.txt` — a file you put at your website's root (`/llms.txt`) so an LLM can find the
    good pages on your *site*. It does **not** instruct a coding agent; different audience,
    different job.

**Claim:** Treating `CLAUDE.md` and `llms.txt` as the same kind of thing produces a file
that helps neither audience. **Test:** name who reads each file you write. If you can't,
you're writing decoration. The mechanics of a *good* `CLAUDE.md`/`AGENTS.md` — and a tool
that scores yours in your browser — are in Module 13.

## Don't start with a backend

**Claim:** Most first projects need no server, no database, and no secrets — and reaching
for them early adds cost, accounts, and a security surface before you've shipped anything.
**Test:** does your project actually need to *persist data between users* or *hide a
secret key*? If not, a client-only app (one that runs entirely in the browser) is simpler,
free to host, and impossible to leak from. This very repo is built that way.

When you genuinely cross that line — real persistence or a secret to protect — these are
the common rung-4 pieces, in rough order of how much they ask of you:

- **fly.io** — run a small backend server close to your users.
- **Neon** (or Supabase) — managed Postgres; Neon is serverless with branchable databases.
- **A full cloud provider** (Google Cloud, AWS) — the most capable and the most overhead;
  reach for it last, when a managed single-purpose service no longer fits.

Add the backend the same way you climb the ladder: when a named need forces it, not
because a tutorial assumed it.

## What this won't do

This module gets you unstuck and onto the ladder. It does not make you a software
engineer, and it does not let you skip reading the AI's output — the one habit that
separates people who get steadily better from people who plateau. Treat the assistant as a
fast collaborator whose work you still own and still check, not an oracle whose answers you
paste. The curated guides in `references.md` go deeper on judgment, model choice, and using
AI well at work.
