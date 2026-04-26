# 11 — Evaluation Design for AI Systems

How to know your AI system is getting better, not just different.

## The claim

Most teams ship AI systems without an evaluation harness, then ship changes without measuring whether the changes improve anything. The result is a system that drifts in quality without anyone noticing, where confidence in output rises with familiarity rather than evidence. Evaluation is the discipline that breaks the drift. It is unglamorous. It is the difference between an AI system that compounds in usefulness and one that quietly degrades.

## Why this matters

The asymmetry: bad outputs from an AI system cost the consumer of the output, not the producer. Inside the firm, an output that gets accepted because it looks right but is subtly wrong costs the customer who acts on it. Outside the firm, the cost shows up as customer churn, regulatory exposure, or one viral screenshot of an embarrassing failure. None of these costs accrue to the engineer who shipped the change. Without evaluation, the producer gets the benefit and the consumer gets the cost.

## The idea

Three layers of evaluation. Each addresses a different question.

### Layer 1: Does this output meet the standard?

Per-output evaluation. For a given input, did the system produce an acceptable output?

The standard depends on the task. For classification, it is whether the label is correct. For generation, it is whether the output is faithful to the input, factually accurate, and appropriate to the context. For decision support, it is whether the recommendation is defensible.

The evaluation method depends on the task too. Classification tasks have ground-truth labels — measure accuracy directly. Generation tasks rarely have a single right answer — use rubric-based human review or model-as-judge with a clear rubric. Decision support is in between — usually requires expert review against a written standard.

The thing to avoid: vibes-based evaluation. "It looks good" is not a measurement. The team has no way to detect quality drift if the only check is impression. Build a written rubric. Apply it consistently. Record the scores.

### Layer 2: Does the system perform across inputs?

System-level evaluation. Across a representative set of inputs, what is the system's overall performance?

The representative set matters. A test set of 20 happy-path examples does not reveal anything about edge cases or failure modes. The discipline:

- **Happy path.** Typical, expected inputs. 30-50% of the test set.
- **Edge cases.** Unusual inputs, ambiguous inputs, inputs at the boundaries of intended scope. 20-30% of the test set.
- **Adversarial cases.** Inputs designed to break the system, including prompt injection attempts, off-topic content, and inputs containing sensitive material the system should refuse. 15-25% of the test set.
- **Out-of-distribution.** Inputs the system was not designed to handle, where the correct behavior is graceful refusal or escalation. 10-20% of the test set.

A test set without adversarial and out-of-distribution cases tests only that the system handles the work it was designed for. It does not test what happens when the system encounters anything else, which is where most production failures occur.

### Layer 3: Does the system improve over time?

Longitudinal evaluation. Run the same test set against the system periodically. Compare across runs.

The signals to watch:

- **Regression.** A test that previously passed now fails. Either the system changed (vendor pushed a model update, prompt was modified, downstream code changed) or the test was flaky. Investigate before moving on.
- **Drift in the gray zone.** Tests that scored 4/5 last quarter score 3/5 this quarter. No individual change is alarming; the trend is. Investigate the source.
- **Gradient of failure.** Where the system fails, are the failures clustered? A pattern of failures on a specific input type indicates a fixable issue. Random failures indicate noise that may not be addressable.

Without longitudinal evaluation, vendor model changes are invisible to the operator until customers complain. With it, the operator detects the change in days and can roll back or adapt before customers see it.

## Building the evaluation harness

Practical guidance for getting started.

**Start small.** A 20-input test set with a simple rubric, run weekly, beats no test set. Add inputs as you encounter new failure modes in production.

**Document what each test exists to verify.** A test without a stated purpose is hard to maintain. When the system behavior changes, the team needs to know whether the change is a regression or an intended improvement.

**Automate where possible, but not at the cost of quality.** Automated metrics (BLEU, ROUGE, exact match) work for narrow tasks. Most operator-relevant tasks need human review or model-as-judge with explicit rubrics. Automation here often measures the wrong thing.

**Separate the evaluation from the developer.** The person who built the prompt should not be the only person evaluating it. Unintended biases creep in. Have a separate reviewer or rotate evaluation responsibility across the team.

**Treat the test set as a living document.** When production produces a failure that the test set did not catch, add it to the test set. Over time the test set encodes the team's understanding of the failure modes.

### Model-as-judge: useful but limited

Using one model to evaluate another model's output is widely practiced and useful within limits.

**Where it works:** structured tasks with clear rubrics — classification, format compliance, presence of required elements. The judge model can apply the rubric consistently and at scale.

**Where it does not work:** open-ended quality judgments without strong rubrics, judgments that require domain expertise the judge does not have, judgments where the judge and the producer share the same biases.

**Discipline when using:** the rubric the judge applies must be specific. "Is this answer high-quality?" produces noise. "Does this answer cite the relevant policy section?" produces signal. The more specific the rubric, the more reliable the judgment.

## Common failure modes

- **Shipping without evaluation.** The most common failure mode. The team trusts demo results. Production failures are discovered by customers.
- **Evaluation theater.** A test set exists. It is not run regularly. The team is confident in quality without evidence.
- **Vibes-based grading.** Outputs are evaluated by impression. Quality drifts because impressions are not consistent across raters or across time.
- **Test set written by the prompt author.** The author tests the cases the author thought of. The cases the author did not think of go untested until production.
- **Ignoring drift.** Quality changes between runs are dismissed as noise. By the time the trend is undeniable, the system has degraded substantially.
- **Confusing fluency with accuracy.** AI outputs sound confident regardless of whether they are correct. Evaluation must check accuracy specifically, not let fluency substitute for it.

## What this module does not cover

- The technical mechanics of building automated test infrastructure (separate engineering domain)
- The statistical analysis of evaluation results at scale (when test sets are large enough for it; most operator test sets are not)
- Red-teaming as a specialized discipline (adjacent but distinct; see references)

## Try this

See [exercises.md](exercises.md).

## Further reading

See [references.md](references.md).
