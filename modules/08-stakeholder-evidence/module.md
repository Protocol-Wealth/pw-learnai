# 08 — Stakeholder Buy-in Through Evidence

How to convert skeptics by sequence rather than persuasion.

## The claim

Initiatives die in the committee phase more often than in the market. The standard remedy — better persuasion, more compelling narrative, executive sponsorship — works occasionally. The reliable remedy is sequencing: designing a path of small, undeniable evidence that converts specific skeptics in a specific order, leaving each conversion documented well enough that it does not get re-litigated. Persuasion is for people who agree with you. Evidence is for people who do not.

## Why this matters

The cost of initiative death by committee is asymmetric. The initiative consumed resources, the team that built it lost morale, and the next initiative gets a worse hearing because the previous one failed. Buy-in built through evidence is durable because the evidence does not lose force when the political weather changes. Buy-in built through persuasion evaporates the moment the persuader is out of the room.

## The idea

A stakeholder map identifies who must agree, who must not block, and who can be ignored. Most teams over-invest in the third group and under-invest in the second.

### The four stakeholder roles

**Champions.** People who already agree, want the initiative to succeed, and have political capital they will spend on it. Champions are not the audience for evidence — they are the distribution channel for it.

**Skeptics with veto power.** People who do not agree, have legitimate authority to block, and whose objections are specific. This group is the actual target of evidence-based persuasion. Convert them or the initiative does not ship.

**Skeptics without veto power.** People who do not agree but cannot block. They will be loud. They consume time. The discipline is to acknowledge their objections respectfully and move on without spending disproportionate effort.

**Indifferent stakeholders.** People who do not care either way. Mostly safe to ignore until they express an opinion. Trying to manufacture their interest backfires.

### The objection map

Before designing evidence, list the specific objections from the skeptics-with-veto-power group. Each objection becomes a target for an experiment.

Generic objections do not count. "I don't think this will work" is not an objection — it is a posture. The objection underneath it is something specific: "I don't think customers will pay this much" or "I don't think we have the engineering capacity" or "I think this conflicts with our existing partnership with X."

For each specific objection, design the cheapest experiment that would settle it. Run that experiment. Document the result in writing. Distribute the result to the relevant skeptic in advance of the next decision meeting.

### The conversion sequence

Skeptics convert in an order. Identify it.

The order is usually:
1. The technical skeptic (will it work?)
2. The market skeptic (will customers care?)
3. The economic skeptic (does the math work?)
4. The strategic skeptic (does this fit our portfolio?)
5. The political skeptic (whose feet are we stepping on?)

Run experiments in order of skeptic priority. The technical question can usually be answered with a small build. The market question with a landing page test. The economic question with a model and the inputs validated by the prior two experiments. The strategic and political questions are usually settled last because they depend on the other answers.

The order matters because each conversion lowers the activation energy for the next. A converted technical skeptic helps recruit other technical-aligned colleagues. A converted market skeptic gives cover to the economic skeptic to consider the model seriously. The political skeptic at the end has fewer allies and faces a thicker evidence record.

### The "no re-litigation" principle

Every converted skeptic produces a written record. The objection, the experiment, the result, the conclusion. The record is filed in a place the team can reference later.

The point: when the political weather shifts and the same skeptic raises the same objection three months later, the team has the record. The conversation is "we addressed that — here is the analysis we did, here is what we found, here is the conclusion you signed off on." The skeptic either has new information or accepts the prior conclusion.

Without the record, every meeting starts from scratch. The same objections cycle, the same answers get given verbally, the same skeptics raise the same concerns again next quarter. The record breaks the cycle.

### Public kill criteria

Initiatives need public commitment to kill criteria — the conditions under which the team will themselves recommend ending the project.

Why: skeptics often suspect (correctly) that committed teams will not recognize failure when they see it. Public kill criteria flip the dynamic. The team commits in advance to recognize specific failure conditions. If those conditions occur, the team itself triggers the shutdown rather than waiting for an executive intervention.

This is uncomfortable to commit to. It also dramatically lowers skeptic resistance, because the skeptic's worst case ("we will spend money on this for years and never admit it isn't working") is taken off the table.

The kill criteria should be:
- Specific — measurable conditions, not vibes
- Time-bound — by when, not "eventually"
- Owned — named individual triggers the call
- Public — written down where stakeholders can see them

## Worked example

**Initiative:** Launch an AI-driven research feature for a wealth management firm's clients.

**Stakeholder map:**

| Stakeholder | Role | Stance | Specific objection |
|------------|------|--------|---------------------|
| CEO | Champion | Pro | None operational |
| Head of compliance | Skeptic with veto | Skeptical | Regulatory risk under Reg S-P |
| CTO | Skeptic with veto | Skeptical | Engineering capacity for production deployment |
| Head of advisory | Skeptic with veto | Mixed | Will clients trust AI-generated research? |
| Senior advisor (largest book) | Skeptic with veto | Opposed | Diluting the firm's premium positioning |
| Head of marketing | Indifferent | None | None |
| Junior advisors | Champions | Pro | None |

**Objection-to-experiment mapping:**

| Objection | Experiment | Cost | Decision-changing |
|-----------|-----------|------|---------------------|
| Reg S-P risk | Memo from outside counsel + zero-retention vendor agreement | $15K | Yes — go/no-go on vendor |
| Engineering capacity | Prototype on existing infrastructure, measure actual eng-hours | 2 weeks | Yes — re-scope or kill |
| Client trust | Concierge MVP with 10 clients, measure satisfaction and adoption | 4 weeks | Yes — full launch decision |
| Premium dilution | Pricing study with held-out advisor segment | 6 weeks | Yes — modify product or kill |

**Conversion sequence:**

1. Outside counsel memo + ZDR vendor language. Convert compliance.
2. Engineering prototype. Convert CTO.
3. Concierge MVP. Convert head of advisory.
4. Pricing study. Convert senior advisor.

**Public kill criteria:**

- If the regulatory analysis identifies any unresolvable issue: kill.
- If engineering hours required exceed 1.5x the prototype estimate: re-scope or kill.
- If concierge MVP CSAT for AI-assisted recommendations is more than 10 points below baseline: kill.
- If pricing study shows premium clients value the existing model and reject AI-assisted: modify scope to non-premium segment only.

**Trigger person:** Initiative lead. Commits in advance to recommend the relevant action when criteria are met. Decision documented in the project charter, signed off by CEO.

This is what disciplined buy-in looks like. The skeptics are not silenced — they are addressed. The path to commitment is paved with specific, written evidence. The kill criteria are public, which builds trust that the team will not run the project past its useful life.

## Common failure modes

- **Persuading champions instead of converting skeptics.** Easy and feels productive. Does not move the decision.
- **Treating objections as obstacles instead of inputs.** Objections from skeptics-with-veto are information about what the experiment needs to prove. Engage them.
- **No written record.** Verbal conversions get re-litigated when the political weather shifts.
- **Skipping the political skeptic.** The strategic-fit and political objections often hide in plain sight. Address them explicitly or they ambush the launch.
- **No public kill criteria.** Skeptics correctly fear that committed teams will not stop. The team's commitment to stop is the credibility that wins the buy-in.

## What this module does not cover

- Negotiation tactics specific to senior executive politics (different domain; see the political-economy literature)
- How to recover from a failed buy-in attempt and try again later (case-specific; usually requires a new framing and a different sequence)
- The specifics of how to write a project charter (templates available; the discipline matters more than the template)

## Try this

See [exercises.md](exercises.md).

## Further reading

See [references.md](references.md).
