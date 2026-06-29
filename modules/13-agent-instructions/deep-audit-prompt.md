Run a diagnostic + improvement pass on this repo's CLAUDE.md/AGENTS.md. You have
filesystem access; read the file yourself, validate it against repo ground truth, score
it, then rewrite it. Autonomous run: state the plan once, then execute; only stop for a
destructive action.
A good agent-instructions file encodes what the agent CANNOT infer and is needed every
turn: project-specific (exact stack, build/test/lint/run commands, topology, conventions,
gates); ground-truth-accurate (every command runs, every path exists, stack claims match
lockfiles); concise and non-redundant; positively framed; ranked (a spine up top), not
co-equal; anchored with good/bad examples; non-circular; matched to how the agent is run.
PHASE 1 DISCOVER: locate root and nested instruction files; inventory every command,
path, and rule they assert.
PHASE 2 VALIDATE (the part static review can't do): for each checkable claim mark
PASS/STALE/MISSING — do the commands match package.json/Makefile/CI? do referenced
files/dirs/env vars exist? does the declared stack match dependencies/lockfiles? what
major repo reality (tests, migrations, monorepo layout, codegen, deploy) is omitted?
PHASE 3 DIAGNOSE: score each property 1-5 with a section/validation anchor; rank findings
by impact; tag each KEEP/CUT/REWRITE.
PHASE 4 REMEDIATE: rewrite in full — lead with a ranked spine; add/correct a project
header from VERIFIED claims only; dedupe; cut generic philosophy the agent already knows;
convert load-bearing prohibitions to positive imperatives; match the runtime; remove
circular success criteria; recommend a nested file where a subdir warrants it.
PHASE 5 VERIFY: confirm no unvalidated command or path survives; report before/after line
count and net cut vs added.
OUTPUT: PLAN; VALIDATION TABLE (claim | PASS/STALE/MISSING | evidence); SCORECARD; RANKED
FINDINGS; REWRITTEN FILE (paste-ready); RESIDUAL GAPS marked [MISSING] or
[DECISION NEEDED] — never invent facts to fill them.
CONSTRAINTS: validate before rewrite; prefer cutting over adding; anchor every finding; a
shorter file the agent follows beats a complete one it ignores.
