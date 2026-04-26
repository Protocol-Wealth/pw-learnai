# 07 — Disciplined Experimentation

What makes an experiment actually diagnostic versus theater.

## The claim

Most "experiments" in corporate settings are not experiments because they were never going to change a decision. They are validation exercises — runs designed to confirm what leadership already wants to do. Real experiments have specific properties: they make a falsifiable prediction, they have predefined success criteria, they can be done cheaply, and the result actually changes what happens next. Without all four, the run is theater.

## Why this matters

Experimentation is the only mechanism for learning under uncertainty that does not require being right in advance. Done well, experiments compound — each one cheaply rules out hypotheses and concentrates investment on the ones that survive. Done badly, experiments consume budget without producing decisions. The difference is mostly design discipline, not technique.

## The idea

A real experiment has four properties.

### Property 1: Falsifiable prediction

Before running the experiment, write down what you expect. In specific terms. "The landing page conversion rate will be X%, plus or minus Y%." "At least 30% of survey respondents will pay $Z for this." "The new workflow will reduce time-to-completion by at least 40%."

If you cannot write the prediction, you cannot fail it. If you cannot fail it, the run does not change your mind, and the experiment was unnecessary.

The discipline is to write the prediction tight enough that the result can disconfirm it. Vague predictions ("we expect positive results") are theater.

### Property 2: Predefined success criteria

Before running the experiment, write down what counts as success. The criteria must be objective enough that you cannot move the goalposts after the fact.

Anti-pattern: post-hoc rationalization. The experiment runs, the results come in, and the team finds reasons to claim success regardless of outcome. This is widespread because the social cost of admitting an experiment failed is high. The remedy is to write down the criteria in advance, share them with someone outside the project who has no stake in the outcome, and treat post-hoc redefinitions as failure.

### Property 3: Cheap

A good experiment costs much less than the decision it informs. If the experiment costs as much as building the thing, you should just build the thing.

The art of experiment design is finding the cheapest test that genuinely distinguishes the hypotheses. Most teams default to elaborate setups that simulate the production environment. The best teams find shortcuts that test the load-bearing assumption directly.

Examples of cheap tests that work:

- **Landing page test.** Build a one-page description of the product or feature. Drive traffic to it. Measure conversion to email signup or pre-order. Cost: hours. Tests: is there demand at this price point.
- **Concierge MVP.** Manually deliver the value proposition to a small number of customers without building the automation. Cost: days. Tests: does the value proposition land, and do customers pay.
- **Wizard-of-Oz.** Build a front-end that looks like a finished product, with humans doing the work behind the scenes. Cost: days to weeks. Tests: would customers use the product if it existed.
- **Pretotype.** Mock the product in a form that requires no engineering. Cost: hours. Tests: do customers attempt to use it.
- **Painted door.** Add a button to the existing product that promises a feature, count clicks, then explain it is coming soon. Cost: hours. Tests: do users want this enough to click.

Each of these tests one specific assumption. The cost-benefit is unmatched by anything that requires real engineering.

### Property 4: Decision-changing

The experiment must be designed such that different outcomes produce different next actions. If every possible result leads to the same next action — usually "we will continue with the plan, possibly with adjustments" — the experiment was not designed to produce a decision.

Before running, write the decision tree:
- If the result is X, we do A
- If the result is Y, we do B
- If the result is Z, we do C

If the tree has only one branch, the run is not an experiment. It is a confirmation exercise.

## Discovery-driven planning

Rita McGrath's framework. Every plan rests on assumptions. Most plans fail because the team did not distinguish load-bearing assumptions from convenient assumptions, and the one that broke was not the one they were watching.

The discipline:

**Step 1: Reverse-engineer the financial requirement.** What does the plan require to be true to hit its targets? Customers, conversion rates, retention, price points. Write the assumptions down explicitly.

**Step 2: Rank the assumptions by how load-bearing they are.** If this assumption breaks, does the whole plan collapse? If this assumption breaks, does the plan still work? The load-bearing ones are the ones that matter.

**Step 3: Rank the load-bearing assumptions by how confident you are in them.** The ones with the highest stakes and the lowest confidence go first.

**Step 4: Design experiments to test the highest-priority assumptions.** Apply the four-property test from above.

**Step 5: Run the experiments in sequence.** After each, update the assumption confidence. If the experiment falsifies the assumption, change the plan. If it confirms, move to the next assumption.

The point is not to test everything. The point is to test the assumptions whose failure would invalidate the plan, in the order that maximizes learning per dollar.

## Worked example: a planned AI vendor adoption

**Plan:** Adopt Vendor X for tier-1 customer support. Replace 60% of human agent volume. Save $1.2M annually.

**Reverse-engineer the assumptions:**

1. Vendor X can resolve at least 60% of tier-1 cases without human escalation
2. Customer satisfaction does not drop materially when AI handles the case
3. The vendor's contract permits the volume we need at the price we modeled
4. Integration with our existing tooling is feasible in under 6 weeks of engineering time
5. The team can transition without losing institutional knowledge

**Rank by load-bearing impact:**

| # | Assumption | If broken, plan fails? | Current confidence |
|---|------------|------------------------|---------------------|
| 1 | 60% resolution rate | Yes | Medium |
| 2 | CSAT does not drop | Yes | Low |
| 3 | Contract works | Yes | High |
| 4 | Integration feasible | Partially | Medium |
| 5 | Team transition | Partially | Medium |

**Highest priority: assumption 2.** Lowest confidence among the plan-killers. Test first.

**Experiment design for assumption 2:**

- Falsifiable prediction: CSAT for AI-handled cases will be within 5 points of CSAT for human-handled cases on a 100-point scale.
- Cheap: deploy the vendor on 10% of inbound volume for two weeks, on cases pre-classified as tier-1, with human fallback always available.
- Decision tree:
  - If CSAT delta is within 5 points: continue rollout, test next assumption.
  - If CSAT delta is 5-15 points worse: pause rollout, identify failure modes, decide whether to fix or abandon.
  - If CSAT delta is more than 15 points worse: abandon. The savings will not survive the customer churn.

**Cost of experiment:** ~$40K for two weeks of vendor usage at the test volume, plus operational time for the rollout. Compared to the $1.2M annual savings claim, the experiment is 3% of the upside and tests the most critical assumption.

This is what disciplined experimentation looks like in practice.

## Common failure modes

- **Running validations as experiments.** Predetermined outcomes dressed up as inquiry.
- **Testing the easy assumption first.** The first assumption tested is usually the one with high confidence and low stakes — it confirms easily and the team feels productive. The hard assumptions never get tested.
- **Too elaborate setups.** The experiment costs as much as the build. The team rationalizes that "we need to test it properly." Properly tests the assumption, not the production environment.
- **No predefined success criteria.** Goalposts move after the result is known.
- **No decision tree.** The experiment runs, the result comes in, and the team meets to decide what to do — which means the result did not constrain the decision in advance.
- **Stopping after the first positive result.** The first experiment confirmed an assumption, the team declares success and stops experimenting. The remaining assumptions are still untested and still load-bearing.

## What this module does not cover

- The statistics of A/B testing (separate discipline; many references)
- The ethics of customer-facing experiments (jurisdiction-specific; consent and disclosure questions matter)
- Experimentation in the presence of network effects (special case; harder, see McGrath and the platform literature)

## Try this

See [exercises.md](exercises.md) for the assumption ranking template, the experiment design checklist, and the post-experiment debrief format.

The interactive version in `components/interactive/AssumptionRanker.jsx` walks through the discovery-driven planning workflow.

## Further reading

See [references.md](references.md).
