# Exercises — Designing Agent Instructions

1. **De-generalize.** Take a CLAUDE.md (yours or a public one) that could be pasted into
   any repo. Add the three highest-value facts that are true only of that repo: the exact
   test/build command, where a non-obvious thing lives, and the one rule whose violation
   makes a change wrong. Re-run a task before and after; note any behavior change.

2. **Validate against ground truth.** For every command and path in a file, mark it
   PASS / STALE / MISSING by checking the actual repo. Fix or cut every non-PASS line.

3. **Flip the framing.** Find five prohibitions ("don't / never / avoid"). Rewrite each
   as the positive action you want instead. Compare which version you'd rather hand an
   agent.

4. **Build a spine.** Reorder a flat instructions file so the first ten lines contain
   only the invariants whose violation makes the work wrong. Mark them as such.

5. **Kill the circle.** Find any line that defines success as "following these rules" and
   replace it with a criterion that references the repo (build passes, minimal diff,
   tests green).

6. **Match the runtime.** Identify every checkpoint instruction ("stop and ask," "wait
   for"). Decide whether your actual runtime is interactive or autonomous, and rewrite the
   ones that don't fit.
