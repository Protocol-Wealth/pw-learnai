# pw-learnai — Strategy & Judgment

> Disruption diagnosis, the AI advantage matrix, value destruction patterns, platform economics, AI judgment under uncertainty.

Source: https://github.com/Protocol-Wealth/pw-learnai
License: MIT
Generated: 2026-06-07

## Modules included

- 01-reading-disruption
- 02-ai-advantage-matrix
- 03-ai-value-destruction
- 05-platform-economics
- 09-ai-judgment

---


# ============================================
# 01-reading-disruption
# ============================================

# 01 — Reading Disruption

How to tell real disruption from incumbent-friendly change, before the quarterly numbers make it obvious.

## The claim

Most technology shifts that get called "disruption" in the press are sustaining innovations that favor incumbents. Real disruption has a specific structural signature, and you can diagnose it before the market agrees. The cost of the diagnosis is low. The cost of missing it compounds.

## Why this matters

If you run a business or lead a function, the single most expensive mistake you can make is executing a correct plan against a wrong read of the terrain. Transformation failures are usually not execution failures — they are diagnosis failures. This module gives you a specific diagnostic.

## The idea

Clayton Christensen's original definition of disruption is narrower and more useful than the vernacular. A disruption is a technology or business model that:

1. **Underperforms incumbent offerings on the traditional performance dimensions the mainstream market cares about**
2. **Serves an underserved or ignored segment well** — usually by being cheaper, simpler, or more accessible
3. **Improves along a trajectory that eventually overtakes incumbent offerings on the traditional dimensions**
4. **Exploits asymmetric incentives** — incumbents rationally ignore it because responding would cannibalize more profitable existing business

All four conditions matter. Drop any one and you do not have disruption, you have something else.

### Why the four conditions matter together

If a new entrant outperforms on traditional dimensions from day one, that is an incumbent problem, but it is not disruption — it is direct competition, and incumbents know how to fight that (sometimes badly, but they know). If a new entrant is cheaper and simpler but never improves, it captures a segment and stops. If incumbents respond rationally, they co-opt the innovation and it becomes a sustaining change.

The Christensen pattern is specifically the combination that incumbents cannot respond to without destroying themselves. That is what makes it hard to see and hard to stop.

### Modes of disruption beyond the original pattern

The original Christensen framework was developed for manufacturing and storage (disk drives, steel, mechanical excavators). It extends, with modifications, to services and platforms. Other disruption modes worth recognizing:

- **Regulatory arbitrage.** A new entrant operates in a regulatory gap that the incumbent structure cannot exploit (fintech into banking, Uber into taxi, prediction markets into gambling). The "disruption" is not the technology — it is the structural asymmetry the technology enables.

- **Business model inversion.** Same product, different monetization. Open-source databases inverted Oracle's license model; ad-supported search inverted portal subscriptions. The feature is the model, not the code.

- **Cognitive-cost collapse.** A task that used to require human judgment becomes economic at machine cost. This is the current AI pattern. It does not destroy every industry equally — it destroys industries where the human judgment was the entire cost structure.

- **Thermodynamic shift.** A physical constraint that used to bind no longer binds, or binds differently. Electrification of transportation (battery cost curves), AI training (power, not cost, becomes the bottleneck), high-frequency trading (latency, not information, becomes the moat). These are rarer and slower but more complete when they hit.

### The sustaining-innovation trap

Most technology shifts look like disruption in the press and turn out to be sustaining innovations — things incumbents can absorb and benefit from. Cloud computing was sustaining for Microsoft. Mobile was sustaining for Visa. Same-day shipping was sustaining for Amazon. These shifts hurt specific incumbents who failed to execute, but they did not structurally disadvantage the category.

The diagnostic question: **can the incumbent rationally respond without destroying its existing business?** If yes, it is sustaining. If no, it is disruption. "Rationally" is load-bearing — incumbents often fail to respond even when they could, but that is an execution failure, not a structural one.

### The signals that show up before the numbers

Real disruption leaves specific fingerprints that precede the financial evidence:

- **Incumbent margin compression in a segment they previously dominated**, without obvious operational cause
- **New entrant gross margins that incumbents cannot match without restructuring** — often because the entrant skips a cost layer that incumbents carry as an asset (stores, sales force, regulatory overhead)
- **Customer reports of "good enough" performance on the new offering** for tasks that used to require the incumbent's premium product
- **Talent migration** — senior people from incumbents joining entrants at nominal cuts in cash comp, often for equity in a story the market has not priced
- **Incumbent response patterns that suggest organizational incapacity rather than disinterest** — restructurings, acquisition attempts that fail, "innovation labs" that produce nothing shippable

Any one of these can appear in a non-disruption context. Three or more appearing together, concentrated in one segment, over two to four quarters, is a strong signal.

## Worked example: residential title insurance, 2025-2027

A walk-through of how the diagnostic would be applied to a live case. This is illustrative, not a firm forecast.

**Traditional dimensions.** Title insurance is priced as a one-time premium at closing, typically $1,500-$3,000 on a residential transaction. Incumbents (Fidelity, First American, Stewart, Old Republic) compete on closing speed, attorney-network coverage, and rate. The product is substantially standardized by state regulation.

**The candidate disruption.** AI-driven workflow vendors (Dono, emerging competitors like TitleClear AI) automate the title search, lien detection, and document preparation steps that traditionally required human examiners. The output is faster closings (24-72 hours vs 10-14 days in many markets) and materially lower operational cost.

**Test against the four conditions:**

1. *Underperforms on traditional dimensions?* On closing speed and cost — no, it outperforms. On attorney-network depth, regulatory familiarity, and complex-transaction handling — yes, initially. The AI vendors are weak on non-standard title issues.

2. *Serves an underserved segment well?* Yes — the segment is the straightforward residential refinance and purchase, which incumbents serve but with slow, expensive workflows because the cost structure does not differentiate by complexity.

3. *Improves along a trajectory?* Early evidence yes. Each year the AI vendors handle a broader share of title complexity without falling back to human review.

4. *Exploits asymmetric incentives?* Yes — incumbent revenue depends on premium-priced human workflow. Responding means cannibalizing the premium. First American and Fidelity have launched AI initiatives; as of this writing, both are priced to protect the existing structure rather than to compete with the pure-play entrants.

**Diagnosis:** This fits the pattern. Not certain, but probable enough to warrant an operator response.

**Timing:** The geographic-penetration question is the one to watch. Dono is live in several Southern states. The midwest and northeast will come on a two-to-four-year lag, gated by regulatory approval and attorney-network partnerships. Incumbents in those markets have 18-36 months before the margin compression arrives.

**Falsifiable predictions:**
- Within 30 months, title insurance premiums in at least three AI-vendor-active markets compress 20%+ from 2025 baseline
- Within 36 months, at least one top-five incumbent restructures its examiner workforce by 30%+
- Within 48 months, the AI vendors either (a) reach $500M+ revenue in aggregate or (b) get acquired at materially below-historical-title-insurance multiples

If none of these happen, the diagnosis was wrong.

## Common failure modes

- **Calling sustaining innovations disruptions** because they are new and scary. The check: ask whether the incumbent can rationally respond. If yes, it is sustaining.
- **Fitting every new technology into the Christensen frame.** The frame is narrow on purpose. If three of the four conditions do not hold, use a different frame.
- **Over-weighting press signals over margin signals.** Press covers what is photogenic. Margins tell you what is working.
- **Diagnosing disruption in industries the analyst does not operate in.** Outsider diagnoses are frequently wrong on timing and often wrong on mechanism. Weight operators over analysts.

## What this module does not cover

- The organizational response to a confirmed disruption diagnosis (see Module 06)
- How to distinguish an AI-specific disruption from a general technology shift (see Module 02)
- The political and stakeholder work of getting a disruption thesis taken seriously internally (see Module 08)
- Platform-specific disruption dynamics (see Module 05)

## Try this

See [exercises.md](exercises.md) for a structured disruption diagnostic you apply to your own industry, with a fill-in worksheet and a reference rubric.

The interactive version is in `components/interactive/DisruptionDiagnostic.jsx` — same inputs, scored in real time.

## Further reading

See [references.md](references.md).


---

# 01 — Exercises

## Exercise 1: Disruption diagnostic on your industry

Pick a candidate disruption in your industry. Not a future one — a live one, in motion now, where you can gather evidence.

Fill in each section. The goal is an artifact you could hand to a colleague and defend.

### 1. Name the candidate disruption

In one sentence. Not "AI" — something specific. Example: "AI-driven workflow vendors automating residential title insurance back-office."

### 2. Identify the incumbents and the entrants

| Role | Organizations |
|------|---------------|
| Incumbents | |
| Entrants | |
| Tweeners (entrants with incumbent DNA or vice versa) | |

### 3. Test the four conditions

**Condition 1: Does the entrant underperform incumbents on the traditional performance dimensions the mainstream cares about?**

- List the traditional dimensions (what incumbents compete on today):
- For each dimension, is the entrant ahead, behind, or equivalent?
- If the entrant is ahead on every dimension from day one, this is not disruption — it is direct competition. Stop and reclassify.

**Condition 2: Does the entrant serve an underserved or ignored segment well?**

- Name the segment specifically. Not "customers who want lower prices" — a specific demographic, geography, use case, or transaction type.
- What makes it underserved? Why have incumbents left the segment alone?

**Condition 3: Is the entrant improving along a trajectory that will overtake incumbents on traditional dimensions?**

- What is the evidence? Product releases, capability demonstrations, customer reports.
- What is the pace? Quarters, not years.
- What would stall the trajectory? Technical ceiling, regulatory block, capital shortage.

**Condition 4: Do incumbents have an asymmetric incentive to ignore or under-respond?**

- What fraction of incumbent revenue depends on the structure the entrant attacks?
- What would a full response require incumbents to cannibalize?
- How are incumbents actually responding? Quote their public statements and recent moves.

### 4. Scorecard

| Condition | Strength (0-3) | Evidence |
|-----------|----------------|----------|
| 1. Underperforms on traditional dims | | |
| 2. Serves underserved segment | | |
| 3. Improving trajectory | | |
| 4. Asymmetric incentives | | |
| **Total** | **/12** | |

A score of 9-12 indicates a probable disruption. 6-8 indicates ambiguous — watch more closely. 0-5 indicates sustaining innovation or direct competition.

### 5. Falsifiable predictions

Write three specific predictions with timelines. Each should be specific enough that you could be wrong.

| # | Prediction | By when | What would falsify |
|---|------------|---------|---------------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

### 6. What you would do Monday morning

If your diagnosis is correct, what changes in your business? Specifically. Not "prepare for disruption" — a named action, resource allocation, or decision.

---

## Exercise 2: Archive test

Pick a "disruption" story the press was excited about 3-5 years ago. Apply the four-condition test retrospectively. Did it disrupt? Why or why not? Which condition failed?

Suggested candidates (pick one or bring your own):
- Meal-kit delivery
- 3D printing for manufacturing
- VR for enterprise
- Voice commerce
- No-code application development

This exercise calibrates the diagnostic. If the archive test produces a clean "yes this fit the pattern and the pattern held," you have a working diagnostic. If your diagnostic retroactively over-predicts disruption, tighten the criteria before applying it forward.

---

## Exercise 3: Write the short version

Compress your Exercise 1 into a three-paragraph memo. Hand it to a smart skeptic. Ask them to attack it.

If they cannot attack it, you have written the memo wrong — you have written vague enough content that there is nothing to attack. Rewrite until the skeptic has specific objections.

The objections are the feedback. Revise.


---

# 01 — References

## Primary sources

- **Christensen, Clayton.** *The Innovator's Dilemma* (1997). The foundational text. The worked examples (disk drives, excavators, steel) are still the cleanest demonstrations of the four-condition pattern.
- **Christensen, Raynor, McDonald.** "What Is Disruptive Innovation?" *Harvard Business Review*, December 2015. Christensen's own attempt to clarify the term after two decades of misuse. Useful for the boundaries.
- **Christensen, Clayton.** *The Innovator's Solution* (2003). The follow-up, focused on responding to disruption rather than recognizing it. Weaker than the original but the job-to-be-done framing in chapter 3 is still widely applied.

## Critiques and refinements

- **Lepore, Jill.** "The Disruption Machine." *The New Yorker*, June 2014. A strong critique of the framework's universality. Useful because it correctly identifies where the theory has been over-applied, even if its sharper attacks on the core framework are contested.
- **King, Andrew, and Baljir Baatartogtokh.** "How Useful Is the Theory of Disruptive Innovation?" *MIT Sloan Management Review*, Fall 2015. Tested 77 of Christensen's own cases against his four criteria. Found that only seven met all four. The finding is harder on the empirical application than on the theory itself, but it sharpens what the pattern actually requires.

## Adjacent frameworks

- **Porter, Michael.** "The Five Competitive Forces That Shape Strategy." *Harvard Business Review*, January 2008. Useful for understanding where disruption interacts with industry structure.
- **McGrath, Rita.** *Seeing Around Corners* (2019). On inflection points and how to read them before they are obvious. Complements Christensen's structural view with a more signal-driven approach.

## Specific to AI-era disruption

- **Agrawal, Ajay, Joshua Gans, Avi Goldfarb.** *Prediction Machines* (2018) and *Power and Prediction* (2022). The economic framing of AI as a reduction in the cost of prediction. The 2022 follow-up extends the argument to system-level disruption.
- **Sequoia Capital.** "AI's $600B Question" (David Cahn, 2024). A running analysis of the capex-revenue gap in AI infrastructure. Useful for timing the current cycle.

## Case studies referenced

- **Residential title insurance:** Dono (now Doma Holdings), Stewart Information Services, First American, Fidelity National. Public filings and industry trade press (ALTA, Housing Wire).
- **Telecommunications fixed-to-mobile:** Prahalad and Hamel, "The Core Competence of the Corporation," HBR 1990, for the early view; subsequent case studies in any operations-strategy textbook.

## On signal-reading

- **Taleb, Nassim Nicholas.** *Fooled by Randomness* (2001) and *Antifragile* (2012). Not strategy books, but the discipline of distinguishing signal from noise is the core of disruption-reading, and Taleb is unusually rigorous about it.



# ============================================
# 02-ai-advantage-matrix
# ============================================

# 02 — The AI Advantage Matrix

Where AI creates durable advantage, where it produces a race to the floor, and how to tell the difference before you invest.

## The claim

AI is a cost-and-capability shift, not a strategy. Its effect on any given activity depends on two variables: how much the activity speeds up under AI (leverage), and how much competitive advantage survives the speedup (moat durability). Every AI investment decision maps to one of four quadrants, and each quadrant demands a different response. Treating AI as uniformly strategic is the mistake that gets firms into trouble.

## Why this matters

Most AI investment decisions get made one of two wrong ways. Either the firm treats AI as universally strategic and over-invests in categories where the advantage cannot hold (race to the floor), or it treats AI as uniformly tactical and under-invests in categories where the advantage compounds (missed moat). The matrix is a forcing function to classify before committing.

## The idea

Two axes. Four quadrants. Each quadrant has a distinct response pattern.

**Axis 1 — Task leverage.** How much does AI speed up, cheapen, or improve the activity? Measured roughly as the ratio of AI-augmented cost/time to human-only cost/time. High leverage = 3x or more improvement. Low leverage = under 1.5x.

**Axis 2 — Moat durability.** After the AI speedup lands in your competitors too, how much of your advantage survives? High durability = the advantage compounds because the input (proprietary data, regulatory moat, network effect, distribution control) is scarce and not reproducible. Low durability = the advantage evaporates within two to three years because the AI capability itself becomes commodity.

### The four quadrants

**Quadrant A: High leverage, high durability — Invest heavily.**

These are the compounding activities. AI makes them cheaper or faster, and the resulting advantage does not erode because it rests on scarce inputs competitors cannot easily acquire. Examples:

- Clinical trial analysis at a pharma company with decades of proprietary trial data
- Credit risk modeling at a bank with unique historical repayment data
- Code generation inside a large proprietary codebase with specific patterns and domain logic
- Financial research where the firm's proprietary signals, models, or analyst judgment feed the AI pipeline

The response: invest heavily, build the infrastructure, treat it as a strategic priority. The ROI compounds.

**Quadrant B: High leverage, low durability — Match competitors, do not lead.**

AI massively speeds up the task, but the advantage does not hold because the input is commodity (the task itself, not your data). Everyone's AI speedup arrives on roughly the same schedule. Examples:

- Legal document drafting for standardized contracts
- Marketing copy for product pages
- Call center tier-1 support
- Generic customer-facing chat

The response: deploy enough to match. Not leading, not lagging. Over-investment is wasted because competitors will match within 12-18 months. Under-investment is costly because the cost delta is real. The right spend is the amount that keeps you at market parity.

**Quadrant C: Low leverage, high durability — Protect with care.**

AI does not help much, but the activity is strategically important. These are the activities where human judgment, relationships, or physical presence still does the work — and where AI deployment risks damaging the thing that creates the advantage. Examples:

- High-touch client advisory relationships (wealth management, executive coaching, complex legal)
- Field sales for enterprise contracts
- Clinical patient interaction where rapport matters
- Reputation-mediated premium brands

The response: deploy AI selectively to support the humans doing the work, never to replace them. Most firms in this quadrant over-deploy AI to cut cost, discover that the cost savings destroyed the differentiator, and have to rebuild. Treat AI here as infrastructure, not as substitute.

**Quadrant D: Low leverage, low durability — Ignore or outsource.**

Activities where AI does not materially help and where the activity itself does not produce advantage. The decision is not about AI — it is about whether the activity should exist at all. If it must exist, AI-augment to market parity. Often these are candidates for full outsourcing.

### Reading the matrix correctly

Two traps to avoid.

**Trap 1: Assuming your quadrant based on what you want.** Most leaders want to believe their core activities are Quadrant A. The honest analysis often reveals that half of what feels strategic is actually Quadrant B — high-leverage, low-durability, race-to-the-floor. The cost of self-deception is specific: over-investment in categories where the advantage will not hold, plus under-investment in the few genuine Quadrant A activities because the budget was spent elsewhere.

**Trap 2: Static classification.** Quadrant membership shifts. An activity can start in Quadrant B and move to Quadrant A if the firm accumulates proprietary data as a byproduct of the AI deployment. Or it can move the other way — a Quadrant A activity becomes Quadrant B once regulators mandate interoperability or once vendors build a commodity version of what was proprietary. Reclassify annually.

### The durability inputs that make Quadrant A real

When you claim an activity is Quadrant A, point to the specific durable input:

- **Proprietary data.** Data your competitors cannot easily recreate. Volume alone does not count — Google has more data than anyone and is still losing in some verticals. What counts is data that is specific to your workflow, your customers, or your regulatory context.
- **Regulatory moat.** Licenses, certifications, or compliance histories that take years to replicate. SEC registration, FDA approval, state insurance licensing.
- **Network effects.** Each additional user or transaction makes the service more valuable for everyone. Genuine network effects are rarer than claimed — most "network effects" are just scale economies with better marketing.
- **Distribution control.** Exclusive or near-exclusive access to the customer at the moment of purchase. Harder to build than it looks, but when real, extremely durable.
- **Human capability depth.** A workforce with domain expertise and tacit knowledge that cannot be quickly hired. Important caveat: this is durable only if the firm retains the workforce. Deploying AI to reduce the workforce destroys the moat — see Module 03.

If you cannot name the durable input in one sentence, the activity is probably not Quadrant A.

## Worked example: wealth management activity portfolio

Classify the activities of a mid-size RIA against the matrix.

| Activity | Leverage | Durability | Quadrant | Response |
|----------|----------|------------|----------|----------|
| Client portfolio rebalancing | High (3-5x) | Low — any RIA can buy the same tools | B | Deploy to market parity; do not lead |
| Tax-loss harvesting automation | High (4-6x) | Low — commoditized by Altruist, Schwab, etc. | B | Use the vendor tooling; do not build in-house |
| Financial planning document generation | High (3x) | Low to moderate — firm-specific templates help, but not enough | B | Deploy with firm templates; keep investment modest |
| Investment research / asset selection | Moderate (2x) | High if firm has proprietary research framework (EMF, signal processing, etc.) | A if genuine proprietary framework, otherwise B | Invest heavily in proprietary frameworks; commodity research is B |
| Client relationship management | Low (1-1.2x) | High — the relationship is the product | C | AI supports the advisor, never replaces the touchpoint |
| Compliance monitoring | High (5x+) | Moderate — regulatory moat helps, but compliance tooling is commoditizing | B to A at margin | Deploy aggressively; the ROI is real |
| Onboarding workflow | High (4x) | Low | B | Standard deployment, market parity |
| Custom reporting for complex clients | Moderate (2-3x) | High — proprietary data cuts specific to firm's book | A | Invest; this compounds |

**Portfolio-level insight from the classification:** The Quadrant A activities are few — investment research (if the firm has a genuine proprietary framework) and custom reporting. These get the deep investment. Everything else is Quadrant B or C, where the correct response is vendor adoption or selective augmentation, not in-house building. This is the discipline the matrix enforces.

## Common failure modes

- **Wishful Quadrant A classification.** The firm classifies most activities as Quadrant A because it feels strategic. The matrix loses discriminating power. Fix: require a specific named durable input for every Quadrant A claim.
- **Static thinking.** The firm classifies once and does not revisit. Activities shift quadrants as the market matures. Reclassify annually.
- **Over-spending in Quadrant B.** The firm treats every AI opportunity as strategic and spends Quadrant A money on Quadrant B activities. The returns do not materialize because the advantage cannot hold.
- **Under-spending in Quadrant A.** Budget gets consumed on Quadrant B noise before it reaches the one or two activities where it would compound.
- **Ignoring Quadrant C risk.** The firm deploys AI in Quadrant C to cut cost, destroys the differentiator, and loses customers to higher-touch competitors.

## What this module does not cover

- The specific failure modes of AI deployment that destroy value even in the right quadrant (see Module 03)
- How to build the AI decision-support artifact once you have classified an activity (see Module 04)
- How to run the experiments that validate your quadrant classification (see Module 07)
- How to read which AI vendors are solving which quadrant problems (context-specific; see references)

## Try this

See [exercises.md](exercises.md) for a structured activity-classification exercise with a rubric.

The interactive version in `components/interactive/AdvantageMatrix.jsx` plots your activities on the two axes and flags the quadrant automatically.

## Further reading

See [references.md](references.md).


---

# 02 — Exercises

## Exercise 1: Classify your organization's activities

List the top 10-15 activities your organization does. For each, classify leverage and durability honestly. The honesty test: you should end up with a portfolio where only 2-4 activities are clearly Quadrant A. If everything is Quadrant A, rerun the exercise.

### Activity template

For each activity, fill in:

| Field | Value |
|-------|-------|
| Activity name | (specific, not "sales" — "outbound SDR email outreach to mid-market accounts") |
| Current cost/time (human-only) | |
| Expected cost/time (AI-augmented) | |
| Leverage ratio | (column 2 / column 3) |
| What creates advantage in this activity today? | |
| Does AI deployment by competitors erode that advantage within 24 months? | Yes = Low durability. No = High durability. |
| Durability rating | High / Moderate / Low |
| Quadrant | A / B / C / D |
| Investment stance | Lead / Match / Protect / Ignore |

### Scoring rubric

- **Quadrant A (High leverage, high durability):** You must name the specific durable input in one sentence. "Our proprietary X" where X is identifiable.
- **Quadrant B (High leverage, low durability):** Your competitors will match within 18 months. Investment stance is parity, not leadership.
- **Quadrant C (Low leverage, high durability):** AI helps at the margin but could damage the differentiator. Support, do not substitute.
- **Quadrant D (Low leverage, low durability):** Consider whether the activity should exist at all.

## Exercise 2: The honesty test

Take your 2-4 Quadrant A activities. For each, write one paragraph defending the classification to a hostile reviewer whose job is to disprove it.

The reviewer's attacks you should anticipate:

- "Your durable input is not actually scarce — competitor X has it too."
- "The input is scarce but will become commodity within 18 months because [regulatory mandate / vendor product / new entrant]."
- "You have the input but lack the workflow or team to convert it into a durable advantage."
- "The advantage exists at one layer but the value accrues to a different layer (your vendor, your platform partner, etc.)."

If you cannot defend against all four attacks, the activity is probably Quadrant B.

## Exercise 3: Budget allocation test

Take your classification. Now look at how your organization actually spends AI-related budget (software, consulting, headcount, time). Does the spend match the classification?

Fill in the table:

| Activity | Quadrant | Current annual AI-related spend | Matrix-implied correct spend level |
|----------|----------|-------------------------------|------------------------------------|
| | | | |

Total Quadrant A spend vs total Quadrant B spend. If Quadrant B outspends Quadrant A by more than 2:1, you are misallocated. Fix in the next budget cycle.

## Exercise 4: Annual reclassification discipline

Pick a calendar date. On that date each year, you rerun this exercise. Activities shift quadrants — usually from A to B as inputs commoditize. Some shift the other way as you accumulate proprietary data.

This is not a one-time exercise. It is a forcing function for repeated honest classification.


---

# 02 — References

## Primary sources

- **Agrawal, Ajay, Joshua Gans, Avi Goldfarb.** *Prediction Machines* (2018) and *Power and Prediction* (2022). The economic analysis of AI as cost reduction for prediction tasks. The matrix in this module is a structured application of their framing.
- **Porter, Michael, and James Heppelmann.** "How Smart, Connected Products Are Transforming Competition." *Harvard Business Review*, November 2014. The adjacent analysis for physical products; useful for classifying AI-plus-hardware activities.
- **Rumelt, Richard.** *Good Strategy/Bad Strategy* (2011). On the discipline of identifying where advantage actually lies versus where it is claimed to lie. The "kernel of strategy" framing is compatible with the matrix.

## On durability of advantage

- **Helfat, Constance, and Margaret Peteraf.** "Managerial Cognitive Capabilities and the Microfoundations of Dynamic Capabilities." *Strategic Management Journal*, 2015. On why durable advantage depends on organizational capability, not just position.
- **Teece, David.** "Dynamic Capabilities and Strategic Management." *Strategic Management Journal*, 1997. The foundational paper on dynamic capabilities. Older but the framing holds.

## On commoditization dynamics

- **Christensen, Clayton, and Michael Raynor.** *The Innovator's Solution* (2003), chapter on "Commoditization and De-Commoditization." The "law of conservation of attractive profits" is useful for understanding where margins migrate when a layer commoditizes.
- **Carr, Nicholas.** "IT Doesn't Matter." *Harvard Business Review*, May 2003. Widely misread at the time, but the core argument — that infrastructure technologies become cost of doing business, not advantage — applies directly to commodity AI layers.

## AI-specific analyses

- **Eloundou, Tyna, et al.** "GPTs are GPTs: Labor Market Impact Potential of LLMs." OpenAI research, 2023. Empirical analysis of which job tasks are exposed to AI augmentation. Useful as a reality check on leverage estimates.
- **Brynjolfsson, Erik, and Andrew McAfee.** *The Second Machine Age* (2014). Older but the analytical framework for machines-as-complement-or-substitute still applies.
- **Andreessen Horowitz / Martin Casado.** Various essays on the economics of AI infrastructure layers. Useful for reading which layers compete on what, though the firm's portfolio creates inevitable angle of incidence.

## Industry-specific case material

Listed here to save readers search time when classifying their own industry. Not endorsements.

- **Financial services:** McKinsey's "Generative AI in Banking" series; Simon Taylor's Fintech Brainfood newsletter.
- **Legal services:** Richard Susskind, *Tomorrow's Lawyers* (2013, updated editions). Accurate on direction, optimistic on timing.
- **Healthcare:** Eric Topol's *Deep Medicine* (2019) and subsequent articles on AI in clinical practice.
- **Software development:** GitHub's research on Copilot productivity impact; METR's measurement of AI impact on developer tasks.



# ============================================
# 03-ai-value-destruction
# ============================================

# 03 — Where AI Destroys Value

The failure modes that look like wins in the short run.

## The claim

Most AI deployments in established firms either break even or destroy value, not because the AI is bad but because the deployment design did not account for specific failure modes. The failure modes are predictable. They can be identified in a pre-mortem before deployment and mitigated by design. Most firms skip the pre-mortem and pay for the discovery in production.

## Why this matters

The asymmetric cost matters. A successful AI deployment saves cost or accelerates revenue on the margin. A failed one — in specific categories — leaks proprietary knowledge, destroys customer trust, deskills the workforce, or creates regulatory exposure that dwarfs the efficiency gain. The categories are specific. Knowing them does not make you paranoid; it makes you deploy the right things and not deploy the wrong ones.

## The idea

Six value-destruction patterns. Each one has specific warning signs, specific remediation options, and a specific type of organization most vulnerable to it.

### Pattern 1: Proprietary knowledge leakage

The firm deploys a vendor-hosted AI model on its proprietary data, content, or workflows. The vendor uses the firm's inputs (directly or through aggregation) to improve the model, which then gets served to competitors. The firm paid to train its competitors.

**Warning signs.** The vendor's terms include any of: "aggregated data," "anonymized usage data to improve model performance," "we may use inputs for model training," or silence on the topic in the DPA. Zero-retention guarantees that do not cover aggregated metadata. Vendor reps who cannot answer the question "does my data train your model" in one sentence.

**Remediation.** ZDR (zero data retention) APIs where available. On-premise or VPC-isolated deployment where the firm's data does not cross the vendor's training infrastructure. Contractual language that specifies no training use, no aggregated use, no metadata extraction. Periodic audit rights.

**Who is most vulnerable.** Firms whose primary asset is proprietary analytical methodology, client data, or institutional knowledge. Wealth managers, boutique consultancies, research-driven hedge funds, specialty medical practices, IP-dense law firms.

**Worked example.** A mid-size RIA deploys a vendor chatbot trained on its client meeting notes and investment memos to speed up prep for client reviews. The vendor's terms permit aggregated training use. Two years later, a competitor asks the same vendor's model a question and gets back a structurally similar analytical framework — not copied verbatim, but clearly influenced by the first firm's training data. The RIA's differentiator has been homogenized into a commodity.

### Pattern 2: Moat destruction through cost cutting

The firm deploys AI to reduce headcount in an activity that was Quadrant C — low leverage, high durability, where the human judgment was the differentiator. The short-term P&L looks better. Twelve to twenty-four months later, customers start churning because the thing they were paying for disappeared.

**Warning signs.** The activity is customer-facing or customer-adjacent. Customers cite personal relationships, bespoke service, or domain expertise as reasons for choosing the firm. The firm's pricing sits at a premium to commodity alternatives.

**Remediation.** Stop. Reclassify the activity honestly (see Module 02). In Quadrant C, AI supports the humans — never replaces them. The cost savings of AI replacement are usually smaller than the revenue impact of losing the premium that humans support.

**Who is most vulnerable.** Premium-positioned service businesses. Private banking, concierge health, executive coaching, specialty law, boutique advisory. Any firm whose pricing power rests on perceived bespoke attention.

**Worked example.** A private bank deploys AI to automate quarterly portfolio review document generation, reducing the private banker's prep time from four hours to twenty minutes. Bankers use the saved time to cover more clients. Client churn rises over 18 months because the quality of conversation in the reviews has thinned — the bankers are no longer working through the portfolio in advance and catching the idiosyncratic questions. The cost saving is real. The churn cost is larger.

### Pattern 3: Regulatory exposure multiplication

The firm deploys AI in ways that its existing compliance framework does not anticipate. Each deployment looks individually minor. Collectively they create exposure that could trigger enforcement action, loss of license, or inability to close audits.

**Warning signs.** AI use by employees without documented policy. Vendor AI tools adopted department-by-department without central compliance review. Customer or client PII flowing into AI systems without data governance clarity. AI-generated content shipping to regulated contexts without human review.

**Remediation.** AI use policy that covers which tools are approved, which data types may be input, and what review standards apply to AI-generated output. Data classification at the document level before AI tools are permitted. Audit trail for AI-generated decisions. Periodic review.

**Who is most vulnerable.** Registered investment advisers, broker-dealers, banks, insurance firms, healthcare providers, law firms with regulated practice areas, publicly traded companies with SOX obligations, firms with material PHI, PII, or NPI handling.

**Worked example.** An RIA permits advisors to use consumer-grade ChatGPT to draft client emails. Advisor A pastes a client financial summary into the prompt to generate a planning recommendation. The client's NPI has now entered OpenAI's infrastructure with retention settings the RIA did not choose. This is a specific regulatory compliance failure under SEC Regulation S-P. The advisor did not know. The CCO did not know. The first person who finds out is the SEC examiner in two years.

### Pattern 4: Silent deskilling

The firm deploys AI tools that replace the thinking work junior staff used to do as learning exercises. Senior staff are still good at the thinking. Junior staff become operators of the AI tool without developing the underlying judgment. When the senior staff retire, there is no one to replace them, because the training pipeline was dismantled.

**Warning signs.** Activities where output quality has risen but the junior staff doing the work cannot explain why the output is good. Rising AI usage metrics combined with falling measured-skill metrics in junior cohorts. Mid-career staff who cannot do the work without the tool.

**Remediation.** Training standards that require demonstrated proficiency without the tool before proficiency with the tool is measured. AI-free components of onboarding. Mentorship that specifically addresses what the AI does and why, so juniors learn the underlying judgment.

**Who is most vulnerable.** Firms where the training pipeline is the firm's advantage — professional services, research-intensive industries, specialty trades. Firms with long tenure expectations and internal promotion.

**Worked example.** A consulting firm deploys AI for slide generation and initial client-problem framing. Associates produce slides that partners approve. Five years in, the associates cannot frame a client problem without the tool. When the tool's output goes off in a subtle way, the associates do not notice because they never developed the judgment. The partners do notice but cannot scale. The firm has a talent pipeline problem that shows up only when it needs to promote the associates.

### Pattern 5: Commodity race to the floor

The firm invests heavily in an AI capability that sits in Quadrant B (high leverage, low durability). The capability arrives. Competitors arrive with equivalent capabilities 12-18 months later. The firm's advantage evaporates and the investment did not pay back.

**Warning signs.** Activities classified as Quadrant A that do not have a clearly named, defensible durable input. Investments justified by projections of "first-mover advantage" without specifying what makes the advantage defensible against fast followers. Spend concentrated in categories where the AI capability is itself the product (rather than a feature on top of proprietary data or workflow).

**Remediation.** Reclassify honestly (Module 02). In Quadrant B, spend matches market, does not lead. Lead investments reserve for Quadrant A.

**Who is most vulnerable.** Firms with aggressive AI-first strategies where the strategy has not been decomposed into quadrant-specific investment theses. Firms whose leadership mistakes activity for strategy.

### Pattern 6: Trust collapse from bad outputs

The firm deploys AI in a customer-visible context where an occasional egregious failure (hallucinated recommendation, offensive output, factually wrong authoritative-sounding response) damages trust disproportionately to the frequency of the failure.

**Warning signs.** AI-generated output shipped to customers without human review. High-stakes domains where errors are costly (medical, legal, financial). Customers who do not know they are interacting with an AI.

**Remediation.** Human-in-the-loop at the output stage for high-stakes contexts. Disclosure that AI is involved. Graceful fallback to human when the AI is uncertain. Evaluation harnesses that catch the worst 1% of outputs before shipment (see Module 11).

**Who is most vulnerable.** Consumer-facing brands with premium positioning. Any firm where a viral screenshot of a bad AI output could shift category sentiment.

## The pre-mortem discipline

Before any AI deployment, work through each of the six patterns:

1. Could this deployment leak proprietary knowledge? If so, how, and how is the contract structured to prevent it?
2. Is this deployment in Quadrant C where AI could destroy the differentiator?
3. Does this deployment create or expand regulatory exposure?
4. Does this deployment replace learning work for junior staff?
5. Is this deployment in Quadrant B where the advantage cannot hold?
6. Is there a customer-visible failure mode where one bad output destroys trust?

For each "yes," the deployment does not stop — but the design must specifically address the risk. "We will be careful" is not an answer.

## Common failure modes

- **Running the pre-mortem after deployment.** The pre-mortem is cheap before deployment and expensive after.
- **Delegating the pre-mortem to the team that wants to deploy.** Conflict of interest. A separate reviewer, ideally one with veto power, makes the pre-mortem work.
- **Treating the patterns as checkboxes rather than genuine diagnostics.** The value is in the honest answer, not the completion.
- **Assuming one pattern does not apply because the vendor said so.** Vendor claims are not remediation. Contractual language, technical architecture, and audit rights are remediation.

## What this module does not cover

- The specific AI deployment mechanics for any given pattern (deployment engineering is its own discipline)
- How to build an AI use policy from scratch (many templates available; the policy is less important than enforcement)
- How to measure deskilling before it becomes irreversible (partial coverage in Module 11)

## Try this

See [exercises.md](exercises.md) for a structured pre-mortem worksheet.

The interactive version in `components/interactive/ValueDestructionPremortem.jsx` walks you through the six patterns with a scoring rubric.

## Further reading

See [references.md](references.md).


---

# 03 — Exercises

## Exercise 1: Pre-mortem a live deployment

Pick an AI deployment your organization has made in the last 12 months, or is currently planning. Walk through each of the six patterns.

| # | Pattern | Applies? | Evidence | Mitigation in place? |
|---|---------|----------|----------|----------------------|
| 1 | Proprietary knowledge leakage | Y / N / Maybe | | |
| 2 | Moat destruction through cost cutting | | | |
| 3 | Regulatory exposure multiplication | | | |
| 4 | Silent deskilling | | | |
| 5 | Commodity race to the floor | | | |
| 6 | Trust collapse from bad outputs | | | |

For each "Applies" or "Maybe": write one paragraph describing the specific failure pathway and the specific mitigation, not generic reassurance.

If any pattern has "Maybe" with no mitigation, stop and redesign.

## Exercise 2: Vendor contract audit

Pick the top three AI vendors your organization uses. For each, find the answers to these questions in the actual contract (or DPA, or terms of service):

1. Does the vendor use our inputs to train its models?
2. Does the vendor use aggregated or anonymized data derived from our inputs to train or improve its models?
3. What is the data retention policy? How long does our data sit in vendor infrastructure?
4. Where (geographically) does our data reside? What jurisdictions?
5. Does the vendor have sub-processors? What are the terms with them?
6. What audit rights do we have?
7. What is the breach notification timeline?

If any answer is unclear or unfavorable, document the specific contractual language you would need to renegotiate.

## Exercise 3: Deskilling diagnostic

For your most AI-augmented activity, answer honestly:

- Can the junior staff doing the work explain why the output is good without invoking the AI?
- If the AI tool were unavailable for a week, could they produce acceptable work?
- Is the output quality rising while the measured-skill quality is flat or falling?

If any of these raise concern, design the training intervention. AI-free proficiency benchmarks. Explicit teaching of the underlying judgment. Periodic no-tool exercises.

## Exercise 4: Regulatory exposure scan

Map your AI deployments against your regulatory obligations.

| AI tool | Data types processed | Regulatory regimes implicated | Current compliance status |
|---------|----------------------|-------------------------------|---------------------------|
| | | (SEC, FINRA, HIPAA, SOX, state laws, GDPR, etc.) | Compliant / Gap / Unknown |

Any "Gap" or "Unknown" entry needs remediation before the next regulatory exam cycle.

## Exercise 5: Write the kill criteria

For each active AI deployment, write the conditions under which you would pull it back. Specifically:

- What metric, if it moves this far in this direction, triggers rollback?
- What incident, if it occurs, triggers rollback?
- Who has the authority to trigger rollback without committee approval?

If you cannot write kill criteria, you have not thought through the risk. Write them now.


---

# 03 — References

## On AI deployment failures

- **Raji, Inioluwa Deborah, et al.** "Closing the AI Accountability Gap." *FAccT* 2020. Framework for auditing AI systems before and after deployment.
- **Metz, Cade.** Various reporting for *The New York Times* on real-world AI deployment failures across medical, legal, and enterprise contexts. Best used as case examples, not analytical framework.

## On vendor contracts and data governance

- **Anthropic, OpenAI, Google.** Each vendor's enterprise data processing terms. Read them. They change. The public marketing version is not the contractual version.
- **NIST AI Risk Management Framework (AI RMF 1.0)**, 2023. The most widely referenced framework for managing AI risk in enterprise deployments. Dense but comprehensive.
- **Executive Order 14110** (Biden, 2023) and successor guidance. For federal context and downstream regulatory effects. The regulatory landscape is shifting; check current state.

## On regulatory exposure for financial services

- **SEC Regulation S-P** (Privacy of Consumer Financial Information). Directly applicable to RIAs and broker-dealers.
- **SEC Staff Bulletin on Conflicts of Interest** (August 2022). Context for AI-driven recommendations.
- **FINRA Regulatory Notice 24-09** on the use of generative AI in broker-dealer operations.
- **State consumer privacy laws** (CCPA/CPRA, Virginia CDPA, Colorado CPA, and growing). The inconsistent state-by-state obligations create specific compliance surface area for AI deployments that cross state lines.

## On deskilling

- **Christian, Brian.** *The Alignment Problem* (2020). Chapters on AI-human interaction in domains where the human still needs to intervene. The airline-autopilot parallel is illuminating.
- **Bainbridge, Lisanne.** "Ironies of Automation" (1983). The canonical paper on deskilling and automation paradoxes. Written for process control; the analysis ports directly to AI.

## On moat destruction

- **Magretta, Joan.** *Understanding Michael Porter* (2011). The best short treatment of where advantage actually sits and how to avoid destroying it.
- **Various case writeups** on firms that damaged their differentiation through automation: Dell's customer service outsourcing era, automated customer service at US banks in the 2000s, the wave of "digital transformations" in private banking 2015-2022.

## Specific to the patterns

- **Pattern 1 (knowledge leakage):** The emerging literature on "model inversion attacks" and "membership inference attacks" — academic, but directly relevant to understanding how training data can be recovered.
- **Pattern 3 (regulatory exposure):** Compliance vendor whitepapers on AI governance (Hadrius, Drata, Vanta). Useful orientation; not replacement for counsel.
- **Pattern 6 (trust collapse):** Trace the public examples — Air Canada chatbot refund case (2024), Anthropic/AWS AI-generated legal filings with fabricated citations, various customer service chatbot incidents. Read the remediation post-mortems where published.



# ============================================
# 05-platform-economics
# ============================================

# 05 — Platform Economics

When an opportunity is actually a platform, and when it is a product with an API.

## The claim

Platform strategy is the single most misapplied framework in modern business. The word means something specific — a business whose core value comes from facilitating direct interactions between two or more participant groups, where the interactions produce network effects. Most things called platforms are products with an API. Treating a product like a platform wastes money. Treating a platform like a product loses the category. Telling them apart requires a specific test, not pattern-matching to Uber and Airbnb.

## Why this matters

Platform investments are expensive and slow to mature. The chicken-and-egg launch problem alone takes 18-36 months to solve in most categories. If the opportunity is not actually a platform, the investment never returns because there is no compounding network effect to justify the cost structure. Before committing to a platform strategy, the test is binary: is this a platform or not?

## The idea

A platform business has three structural features. All three must be present.

**Feature 1: Two or more participant groups.** The platform serves at least two distinct types of users who need each other. Riders and drivers. Buyers and sellers. Developers and end users. Advertisers and audiences. A business with one user type, however large, is not a platform.

**Feature 2: Direct interaction between participants.** The platform facilitates transactions, communications, or value exchanges directly between participants. The platform itself does not produce the core value — it is the infrastructure on which the participants produce value for each other.

A retailer that buys from suppliers and sells to consumers is not a platform — the retailer mediates the transaction. A marketplace where consumers buy directly from suppliers is a platform.

**Feature 3: Network effects.** Each additional participant on one side increases the value of the platform for participants on the other side (cross-side network effects), or for participants on the same side (same-side network effects). Without network effects, a multi-sided business is just a service business with multiple customer types.

### The categorical mistake

Most "platform plays" fail one of the three tests. Common patterns:

**The product with an API.** A SaaS product that exposes an API and calls itself a platform. If the API users do not produce value for other users, it is a product. The API is a feature.

**The two-sided service business without network effects.** A staffing agency, a real estate brokerage, a recruitment firm. Two participant groups, direct interaction, but adding more participants on one side does not meaningfully improve the experience for participants on the other side past a small threshold.

**The aggregator that calls itself a platform.** A company that buys from many suppliers and sells to many customers. Multi-vendor, multi-customer — but the company mediates the transaction, owns the customer relationship, and captures the margin. This is an aggregator (Stratechery's term for it is precise) or a value-chain consolidator. Not a platform.

### Cross-side vs same-side network effects

The distinction matters for design and pricing.

**Cross-side network effects.** More participants on side A makes the platform more valuable for side B. This is the classic Uber dynamic — more drivers makes the platform more valuable to riders, more riders makes the platform more valuable to drivers. Cross-side effects are the easier case strategically because each side benefits from the platform pulling in the other side; pricing can subsidize the harder side.

**Same-side network effects.** More participants on side A makes the platform more valuable for other participants on side A. Social networks (more friends on the platform = more value to me). Standards bodies (more adopters of a standard = more value to other adopters). Same-side effects are stickier when they exist but require denser participation on a single side to start working.

**Negative network effects.** Frequently underweighted. More riders during peak hours = worse experience for each rider (surge pricing exists to manage this). More sellers in a category without quality control = noise that drives buyers away. The platform's job is to manage negative network effects so they do not cap growth.

### The chicken-and-egg launch problem

A two-sided platform is empty on day one. Side A will not show up because side B is not there. Side B will not show up because side A is not there. The launch problem is how to get past the empty state to a population dense enough that the platform produces value.

Five strategies that have worked, listed roughly in order of capital intensity:

1. **Subsidize one side.** Pay to bring on the harder-to-acquire side. Uber subsidized drivers in early markets. OpenTable gave restaurants free terminals. Capital-intensive but fastest.

2. **Fake one side until you make it.** Operate as a single-sided business at first, then layer the platform on top. Amazon's third-party marketplace launched after years of first-party retail. The first-party operation kept consumers coming while the third-party marketplace bootstrapped.

3. **Constrain the geography or vertical.** Launch in one city, one campus, one industry. Density matters more than total scale early. eBay started with collectibles. Facebook started with Harvard. Going narrow first is almost always right.

4. **Piggyback on an existing network.** Use an established platform's distribution. PayPal on eBay. Zynga on Facebook. Vulnerable to the host platform's policy changes, but capital-light to start.

5. **Build the infrastructure first.** Make the platform useful as a tool even with one user. Slack was a useful internal chat tool before it was a multi-tenant platform. AWS was Amazon's internal infrastructure before it was a platform.

### Multi-homing

A participant multi-homes when they use multiple competing platforms simultaneously. Drivers on Uber and Lyft. Sellers on Amazon and Shopify. Developers building on iOS and Android.

Multi-homing matters because it caps the network effect. If sellers list on every marketplace, no single marketplace captures a structural advantage from having more sellers — the buyers can find the sellers anywhere.

The platform's strategic job is to raise the cost of multi-homing for at least one side. Mechanisms:

- Exclusive contracts (works in some categories, illegal or unwise in others)
- Investment in platform-specific tooling that does not port
- Platform-specific reputation systems that lock in seller goodwill
- Unique demand the seller cannot reach elsewhere

If both sides multi-home freely and the platform has no mechanism to reduce it, the platform never compounds.

### Envelopment

Envelopment is when a platform from an adjacent category absorbs your category by adding your functionality to its existing user base. Microsoft Teams enveloped Slack by being free inside Office 365. Apple Music enveloped Pandora by being default on iOS. Facebook Marketplace enveloped Craigslist (slowly, partially).

Envelopment risk is high when:
- A larger adjacent platform shares your user base
- Your functionality is plausibly an extension of theirs
- They have distribution you do not have

Defending against envelopment requires either (a) network effects deep enough that switching is costly even when the new option is free, or (b) functionality that the larger platform cannot or will not match without compromising its core. Most platforms that get enveloped did not see it coming because they were comparing themselves to direct competitors rather than to the adjacent category.

### Monetization sequencing

Most platforms do not monetize in the first phase. The first phase is solving the chicken-and-egg problem and reaching critical density. Monetization at this stage suppresses growth and slows network effects.

The right sequence in most cases:

1. **Phase 1: Free both sides.** Reach density.
2. **Phase 2: Free the demand side, monetize supply.** When demand is dense enough that suppliers cannot reach it efficiently elsewhere, suppliers will pay for access.
3. **Phase 3: Tier the supply side.** Take rate, advertising, premium features for suppliers competing for limited demand attention.
4. **Phase 4: Layer on adjacent revenue.** Payment processing, advertising, data products, financial services. The original take rate becomes one of many revenue streams.

Skipping phases is the classic founder mistake. The pressure from investors to "show monetization" frequently kills platforms before they reach the density that makes monetization profitable.

## Worked example: applying the test

Three businesses commonly described as platforms. Apply the three-feature test.

**Uber.** Two participant groups (riders, drivers). Direct interaction (driver picks up rider, rider pays driver, platform takes a cut). Cross-side network effects (more drivers = better for riders, more riders = better for drivers). **Platform: yes.**

**Shopify.** Two participant groups visible (merchants, end consumers). Are they direct? — consumers buy from merchants, Shopify processes the transaction but does not own the merchant relationship with the consumer. Network effects? — consumers do not directly benefit from more merchants on Shopify (they reach Shopify-hosted stores through Google search, not through Shopify's own demand aggregation). **Platform: ambiguous.** Shopify is more accurately a multi-tenant SaaS product with payment processing, not a true platform. Its competitive advantage is operational scale, not network effects.

**Spotify.** Two participant groups (listeners, artists). Direct interaction? — listeners stream artist content, artists get royalties. Network effects? — more artists makes Spotify slightly more valuable to listeners (better catalog), but not strongly because all major streaming services have approximately the same catalog. More listeners makes Spotify more valuable to artists (more streams, more royalties). **Platform: weakly yes, asymmetric.** Spotify is closer to a content distribution business than to a network-effects platform. Its category dynamics reflect that — it competes on price and curation, not on platform lock-in.

The exercise is the point. If the three-feature test returns ambiguous or weak on a business that is described as a platform, the strategy needs to reflect what the business actually is, not what the marketing claims.

## Common failure modes

- **Platform branding without platform economics.** Calling a product a platform does not make it one. The market eventually figures it out and prices it as a product.
- **Skipping the launch problem.** Platforms launch with one side present and assume the other will arrive. They do not. The launch is a specific design problem.
- **Monetizing too early.** Take rate before density kills the network effect.
- **Ignoring multi-homing.** A platform with no friction against multi-homing does not compound.
- **Not seeing envelopment coming.** Comparing to direct competitors instead of adjacent platforms.
- **Building a marketplace where a service business would work better.** Not every multi-sided business should be a platform. Sometimes the right answer is to mediate the transaction yourself.

## What this module does not cover

- Pricing mechanics for platforms (a deep specialty; see Parker/Van Alstyne for primary references)
- The legal and antitrust considerations specific to dominant platforms (jurisdiction-specific and rapidly evolving)
- The interaction between AI capabilities and platform dynamics (related to but distinct from this module — AI changes the cost structure of providing the platform, but does not change the three-feature test)

## Try this

See [exercises.md](exercises.md) for the platform diagnostic and a launch strategy worksheet.

## Further reading

See [references.md](references.md).


---

# 05 — Exercises

## Exercise 1: Apply the three-feature test

Pick a business — yours, a competitor's, or a public company you can study. Apply the test:

| Feature | Present? | Evidence |
|---------|----------|----------|
| Two or more participant groups | Y / N | Name them. |
| Direct interaction between participants | Y / N | Describe the interaction. |
| Network effects | Y / N | Cross-side, same-side, both, neither. Describe the mechanism. |

If any answer is N, the business is not a platform. Reclassify (product, aggregator, service business, etc.) and redirect strategy accordingly.

## Exercise 2: Map the multi-homing dynamics

For a platform you are considering or operating, map multi-homing on each side.

| Side | How easy to multi-home? | What raises the cost of multi-homing? |
|------|-------------------------|----------------------------------------|
| | | |
| | | |

If both sides multi-home freely with no cost mechanism, the platform does not compound. Design interventions before scaling.

## Exercise 3: Design the launch

Pick an empty platform (real or hypothetical). Design the launch using one of the five strategies from the module:

1. Subsidize one side
2. Fake one side
3. Constrain geography or vertical
4. Piggyback on an existing network
5. Build infrastructure first

For your choice, specify:
- Which side gets subsidized / faked / piggybacked / etc.
- What is the geographic or vertical constraint
- What is the success metric for graduating out of the launch phase
- What is the cost (capital, time, optionality)

A launch strategy that does not specify these is a hope, not a plan.

## Exercise 4: Envelopment scan

For your platform or platform-target, identify the three adjacent platforms most likely to envelop you.

| Adjacent platform | Why they could envelop | What stops them today | What they would have to do |
|-------------------|------------------------|----------------------|-----------------------------|
| | | | |
| | | | |
| | | | |

If "what stops them today" is "they have not noticed us yet," that is not a defense. That is a timer.

## Exercise 5: Sequence the monetization

For a platform you operate, write the four phases:

| Phase | What gets monetized | Trigger to move to next phase | Risk if you move too early |
|-------|---------------------|-------------------------------|----------------------------|
| 1 | Nothing | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |

Investor pressure usually pushes for premature monetization. The discipline is to know what density triggers each phase and hold the line.

---

---

# 05 — References

## Primary sources

- **Parker, Geoffrey, Marshall Van Alstyne, and Sangeet Paul Choudary.** *Platform Revolution* (2016). The most comprehensive treatment of platform economics for an operator audience. Read this if you read one book on the topic.
- **Evans, David, and Richard Schmalensee.** *Matchmakers: The New Economics of Multisided Platforms* (2016). The economist's view. Drier than Parker but deeper on pricing and the chicken-and-egg problem.
- **Eisenmann, Thomas, Geoffrey Parker, Marshall Van Alstyne.** "Strategies for Two-Sided Markets." *Harvard Business Review*, October 2006. The article that started the operator-audience discussion. Still useful.

## On the misapplication of platform thinking

- **Thompson, Ben.** *Stratechery* archives. The "Aggregation Theory" series clarifies the distinction between platforms and aggregators that gets blurred in casual usage. The aggregation framework is essential for understanding why most "platforms" are not.
- **Moazed, Alex, and Nicholas Johnson.** *Modern Monopolies* (2016). On the structural features that distinguish platforms from products with platform branding.

## On network effects specifically

- **Currier, James, and the NFX team.** Various essays on network effect taxonomy. The 16-types-of-network-effects breakdown is more granular than necessary for most analyses but useful for diagnostic.
- **Eisenmann, Thomas.** *Why Startups Fail* (2021). Has a chapter on platform launches that go wrong, with specific case material.

## On envelopment

- **Eisenmann, Thomas, Geoffrey Parker, Marshall Van Alstyne.** "Platform Envelopment." *Strategic Management Journal*, 2011. The original academic treatment. Essential if you operate a platform vulnerable to envelopment.

## Case material

- **Cusumano, Michael, Annabelle Gawer, David Yoffie.** *The Business of Platforms* (2019). Case-study heavy. Covers the major platform plays of the 2010s with reasonable distance.
- **Galloway, Scott.** *The Four* (2017). Less analytically rigorous, more readable. Useful as ambient context, not as primary framework.

## Platform pricing

- **Rochet, Jean-Charles, and Jean Tirole.** "Platform Competition in Two-Sided Markets." *Journal of the European Economic Association*, 2003. The foundational pricing paper. Mathematical but the intuition is clear: the side that values the platform more highly pays more, and the side that creates the most cross-side value pays less.



# ============================================
# 09-ai-judgment
# ============================================

# 09 — AI Judgment Under Uncertainty

How to make AI decisions when the capability curve keeps moving.

## The claim

AI capability changes faster than most decision processes. A judgment that was correct six months ago may be wrong now because models got cheaper, more capable, or both. The defense is not to predict the curve — that fails reliably — but to build decision processes that absorb capability shifts without re-litigating from scratch. The processes are specific. Most organizations do not have them.

## Why this matters

The cost of stale AI judgment compounds. A vendor relationship priced for 2024 capabilities may be wildly overpriced in 2026. A workflow designed for the limitations of one generation of models may be carrying friction the next generation removed. A decision not to deploy may become a decision not to compete. None of this means moving with the latest hype — it means having a process that updates intentionally rather than by drift.

## The idea

Three practices. Each one addresses a different failure mode in AI judgment under capability change.

### Practice 1: The capability inventory

Once a quarter, write down the current state of AI capability for the tasks your organization cares about. Specifically:

- What can the best available model do today on this task?
- What is the cost (per call, per task, per user-month)?
- What is the failure mode (when it fails, how does it fail, how visible is the failure)?
- What is the rate of change since the last review?

The inventory does not need to be exhaustive. It needs to cover the ten to thirty tasks where AI capability matters most for your organization's strategy. Each entry is a paragraph or a table row.

The output of the inventory is not a forecast. It is a current-state map. The map shows you what to deploy now, what to revisit in three months, and what to ignore for now because it is too far from production-ready.

### Practice 2: Reversibility analysis

For every AI decision, classify it on a reversibility axis.

**Reversible.** The decision can be undone within a quarter at low cost. Switching vendors, turning off a feature, replacing a tool. Reversible decisions can be made fast and updated as capability changes.

**Partially reversible.** The decision can be undone but at material cost. Workflow changes that retrained the team, integration work that took engineering quarters, contracts with kill fees. Make these decisions with care; understand the cost of reversal before committing.

**Effectively irreversible.** The decision creates path dependence that cannot be cheaply unwound. Letting an AI vendor train on your proprietary data. Restructuring teams around an AI assumption that may not hold. Architectural choices that lock in a specific capability profile. Make these decisions slowly and make the reversibility cost explicit before signing.

The discipline: most AI decisions in most organizations are treated as if they were reversible when they are not. The reversibility analysis is a forcing function to recognize when a decision deserves more scrutiny.

### Practice 3: The "second-best decision" check

For irreversible or expensive decisions, ask: if the AI capability landscape changes substantially in the next 18 months, what is the second-best decision we could make today that would still look reasonable then?

The point is not to predict the change. The point is to identify decisions that look optimal under current conditions but are fragile to capability shifts, versus decisions that are slightly worse under current conditions but robust to a wider range of futures.

A robust decision is often the right one even when a more optimal-looking decision is available, because the robust decision survives more futures.

Example: at a wealth management firm, a more "optimal" decision under 2025 conditions might be a multi-year contract with a specialty vendor whose AI capability is currently best-in-class. The robust decision is a one-year contract with the same vendor plus an internal evaluation of whether commodity model providers will close the capability gap. Slightly more expensive in year one. Substantially more flexible if the capability landscape shifts.

## The personal practice

For individuals operating in this space, three habits sustain judgment over time.

**Habit 1: Read primary sources.** Vendor announcements, model papers, capability evaluations, regulatory filings. Most operator media on AI is downstream commentary that compresses or distorts the original. The primary sources take longer to read but produce more durable understanding. Allocate two to four hours a week.

**Habit 2: Try the tools.** Whatever the latest capable model is, use it for an actual task you do regularly. Notice where it helps, where it fails, where it surprises. Direct experience is irreplaceable for calibrating intuition. Five hours a month, on real work.

**Habit 3: Maintain calibration.** Once a quarter, review your AI predictions from the prior quarter. What did you expect? What happened? Where were you wrong, and in what direction? Most operators are systematically wrong in one direction (usually overestimating timelines for capability X and underestimating the rate of cost decline). Identifying your bias is more valuable than reading another article.

## Common failure modes

- **Treating AI judgment as something to delegate to "the AI team."** AI capability change touches strategic decisions; senior leaders must build their own judgment, not import it.
- **Updating only when forced.** Quarterly review or it does not happen. Annual is too slow for the current rate of change.
- **Confusing hype cycles with capability cycles.** The hype cycle is monthly. The capability cycle is quarterly. The deployment cycle is annual. Different cadences require different attention.
- **Locking into long contracts based on current capability.** The vendor's incentive is to lock you in before the capability landscape shifts. Resist multi-year commitments without explicit reset clauses.
- **Believing forecasts.** The honest answer about where AI will be in 18 months is "uncertain, with a wide range." Anyone who tells you confidently is selling something.

## What this module does not cover

- The technical content of how models work (separate domain; many references)
- The specific evaluation methodologies for AI systems (see Module 11)
- The investment strategy for AI exposure (different domain entirely; depends on portfolio context)

## Try this

See [exercises.md](exercises.md).

## Further reading

See [references.md](references.md).


---

# 09 — Exercises

## Exercise 1: Build the capability inventory

List ten tasks where AI capability matters for your organization. For each, fill in:

| Task | Best current capability | Cost per task | Primary failure mode | Rate of change |
|------|------------------------|---------------|---------------------|----------------|
| | | | | |

The inventory is the artifact. Update it quarterly. Compare across quarters to see what is actually changing.

## Exercise 2: Reversibility classification

For every AI decision your organization made in the last 12 months, classify reversibility:

| Decision | Reversible / Partial / Effectively Irreversible | Cost to reverse |
|----------|-----------------------------------------------|-----------------|
| | | |

If you find decisions classified "reversible" that have meaningful reversal cost, you have been making them with insufficient scrutiny. Adjust process.

## Exercise 3: Second-best decision check

Pick a current AI decision in front of your organization. Write the optimal decision under current conditions, then write the second-best decision that would still look reasonable if capability shifts substantially.

| Optimal decision | Second-best decision | Cost difference | Robustness benefit |
|------------------|---------------------|-----------------|---------------------|
| | | | |

If the cost difference is small and the robustness benefit is large, take the second-best.

## Exercise 4: Calibration review

Pull up your predictions about AI capability from 6-12 months ago. Compare to what happened.

| Prediction | What happened | Direction of error | Magnitude |
|-----------|---------------|--------------------|-----------|
| | | (over / under) | |

Look for systematic bias. Most operators are consistently wrong in one direction. Identifying yours is more valuable than reading another article.

## Exercise 5: Information diet audit

For one week, log every piece of AI-related content you consume. Source, time spent, what you learned.

At the end of the week, review:
- What fraction was primary sources versus secondary commentary?
- What fraction produced durable understanding versus transient awareness?
- Where would you reallocate time?

Most operators discover they consume a lot of secondary commentary that does not improve their judgment. Adjust the diet.

---

---

# 09 — References

## Primary sources

- **Anthropic, OpenAI, Google DeepMind.** Model cards and system cards for current frontier models. The official documents on capability and limits. Take seriously, read with context — vendors describe their models favorably, but the technical sections are usually accurate.
- **METR (Model Evaluation and Threat Research).** Public capability evaluations on agentic tasks. Useful for benchmarking what frontier models can actually do, separate from vendor claims.
- **Stanford HAI.** Annual *AI Index Report*. Aggregate statistics on capability, cost, deployment. Worth scanning each year.

## On reasoning under uncertainty

- **Tetlock, Philip, and Dan Gardner.** *Superforecasting* (2015). On calibration, on the discipline of measuring your own predictions against outcomes. The chapters on the "ten commandments of superforecasting" apply directly to AI judgment.
- **Silver, Nate.** *The Signal and the Noise* (2012). On distinguishing signal from noise in fast-changing domains. The chapters on baseball and weather forecasting transfer surprisingly well.
- **Taleb, Nassim Nicholas.** *Antifragile* (2012). On building decisions that benefit from variability rather than being damaged by it. The reversibility framework in this module owes a debt to Taleb's optionality framing.

## On capability assessment

- **Brynjolfsson, Erik, et al.** Various MIT papers on AI capability and labor market impact. Empirical, not breathless.
- **Eloundou, Tyna, et al.** "GPTs are GPTs." OpenAI 2023. Empirical task-level analysis of where current models help and where they don't.

## On the AI capability landscape

- **Sequoia Capital.** "AI's $600B Question" (David Cahn, 2024 and ongoing updates). Tracks the gap between AI infrastructure investment and revenue. Useful for timing.
- **Dario Amodei (Anthropic CEO).** "Machines of Loving Grace" (2024 essay). The optimistic view of where AI capability could go. Read with the recognition that the author runs an AI company, but the technical reasoning is worth engaging.
- **Various skeptical voices** — Gary Marcus, Emily Bender, Timnit Gebru, others. Often dismissed by the AI-bullish camp; often correct on specific points. A balanced information diet includes them.

## On information diet

- **Ben Thompson, Stratechery.** Daily strategy commentary on the technology industry. Subscription. Less hype than most alternatives, more strategic depth.
- **Simon Willison, simonwillison.net.** Daily notes on practical AI use, from a deeply technical perspective. Free. Valuable counterweight to the strategic-but-not-hands-on commentary.
- **Various model-focused newsletters** (changes constantly; not worth listing). The discipline is to subscribe to a small number, read them carefully, unsubscribe from the rest.

## A note on AI safety and alignment literature

This module does not address AI safety in the existential-risk sense. That literature exists, is contentious, and is largely orthogonal to operator decisions about AI deployment. Operators should be aware that the safety conversation exists; engaging it deeply is optional unless your work specifically intersects it.
