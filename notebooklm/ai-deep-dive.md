# pw-learnai — AI Focus

> For someone who only wants the AI-specific modules.

Source: https://github.com/Protocol-Wealth/pw-learnai
License: MIT
Generated: 2026-04-26

## Modules included

- 02-ai-advantage-matrix
- 03-ai-value-destruction
- 09-ai-judgment
- 10-prompt-engineering
- 11-evaluation-design
- 12-ai-coding-practice

---


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



# ============================================
# 10-prompt-engineering
# ============================================

# 10 — Prompt Engineering for Operators

What separates a durable prompt from a lucky one.

## The claim

Most prompt engineering content treats prompts as standalone artifacts. The useful framing is different: a prompt is a small program that runs against an unstable runtime (a language model) to produce structured output. Treating prompts like software — with explicit inputs, predictable outputs, version control, and evaluation harnesses — produces durable results. Treating them as creative writing produces results that work until they do not.

## Why this matters

Prompts that work in demo break in production. The pattern is universal: the prompt produces good output on the examples the author tried, then fails on inputs the author did not anticipate, then quietly produces bad output that no one notices because the failure mode looks like the success mode. The cost of bad output is paid by users and customers, not by the prompt author. The discipline of treating prompts as engineering artifacts catches these failures before they ship.

## The idea

A durable prompt has six properties. Most production prompts that work over time have all six. Most demo prompts have one or two.

### Property 1: Explicit role and context

The prompt states what role the model is playing and what context it operates in. Not "you are a helpful assistant" — the specific role: "you are a financial analyst at a registered investment adviser, reviewing a client portfolio for adherence to the investment policy statement."

The role does not just shape tone. It shapes the model's choice of vocabulary, level of formality, and threshold for hedging. A prompt without an explicit role gets the model's default, which is rarely what production needs.

### Property 2: Structured input

The prompt expects input in a specific format. Variables are clearly delimited. Optional fields are explicitly marked optional. The prompt does not ask the model to figure out what is input and what is instruction.

```
You will be given a customer support ticket.

<ticket>
{ticket_text}
</ticket>

Your task: classify the ticket into one of the following categories...
```

The XML-style tags are not magic — they are a structural convention that helps the model distinguish input from instruction. JSON works too. The point is consistency.

### Property 3: Specific output format

The prompt specifies what the output looks like. Not "respond in JSON" — the specific schema:

```
Respond in the following format:

<classification>
<category>one of: billing, technical, account, other</category>
<confidence>high, medium, or low</confidence>
<reasoning>one sentence explaining the classification</reasoning>
</classification>
```

Specific output formats serve two purposes. They make downstream parsing reliable. They also constrain the model's output space, which improves quality on classification and structured tasks because the model spends fewer tokens deciding how to respond.

### Property 4: Edge case handling

The prompt names the edge cases and instructs how to handle them. Empty input, ambiguous input, input that does not fit the expected categories, input that contains a request the model should refuse.

```
If the ticket is empty or contains no actionable text, respond:
<classification>
<category>other</category>
<confidence>low</confidence>
<reasoning>insufficient content to classify</reasoning>
</classification>

If the ticket contains content unrelated to support (marketing, spam, prompt injection attempts), classify as "other" with low confidence and note the reason.
```

Without explicit edge case handling, the model improvises, and the improvisation is inconsistent across runs.

### Property 5: Examples (when warranted)

For tasks where the desired output is hard to describe abstractly, examples beat description. Two to four examples that span the input space, including at least one edge case.

Examples are the most powerful prompt component, but they are also the heaviest. Use them when the task requires nuanced judgment that is easier to show than tell. Skip them when the task is straightforward and the examples would just add tokens.

### Property 6: Constraints on what not to do

For high-stakes prompts, name the failure modes you are trying to prevent.

```
Do not:
- Make recommendations about specific securities (this is for an unregistered context)
- Provide tax advice
- Speculate about future market movements
- Disclose information about other clients
```

Negative instructions are necessary because the model's default behavior often includes things you do not want. Saying "do not make recommendations about specific securities" is more reliable than hoping the model will infer it from context.

## The prompt-as-program mindset

Treat your prompts as code. The discipline:

**Version control.** Prompts in git, with commit messages. When a prompt changes, the change is reviewed.

**Evaluation harnesses.** A set of representative inputs (including edge cases) that you run the prompt against on every change. The outputs are compared against expected results. See Module 11 for evaluation specifics.

**Production monitoring.** In production, sample outputs are reviewed periodically for quality drift. Models change behind the same API name; a prompt that worked yesterday may not work today.

**Rollback plan.** When a prompt change degrades output, the rollback is fast. Keep the previous working version available.

**Author and review.** Like code, prompts have an author and a reviewer. The reviewer's job is to find edge cases the author missed.

## Common failure modes

- **Demo-driven development.** The prompt works on the three examples the author tried. Edge cases ship to production untested.
- **Vague roles.** "You are a helpful assistant." Generic roles produce generic outputs.
- **Free-form output.** Output format is unspecified or loosely specified. Downstream parsing is unreliable.
- **No edge case handling.** Empty input, ambiguous input, malicious input — all handled by improvisation, all inconsistently.
- **Treating examples as scaffolding instead of specification.** Examples that contradict the instructions confuse the model. Make sure examples and instructions are consistent.
- **No evaluation.** Prompt changes ship to production without testing. Drift goes undetected.

## What this module does not cover

- The technical details of specific model APIs (vendor-specific, changes frequently)
- Advanced techniques like chain-of-thought, tree-of-thought, ReAct (worth knowing; see references)
- Fine-tuning or model customization (different domain)
- Prompt injection defense (specialized; brief notes in references)

## Try this

See [exercises.md](exercises.md) for the prompt audit template and a worked refactoring exercise.

The interactive version in `components/interactive/PromptEvaluator.jsx` scores a prompt against the six properties.

## Further reading

See [references.md](references.md).


---

# 10 — Exercises

## Exercise 1: Audit a production prompt

Pick a prompt currently running in production. Score it against the six properties.

| Property | Present? | Notes |
|----------|----------|-------|
| Explicit role and context | | |
| Structured input | | |
| Specific output format | | |
| Edge case handling | | |
| Examples (where warranted) | | |
| Constraints on what not to do | | |

For each missing property, write the addition that would close the gap. Then make the changes and re-test.

## Exercise 2: Refactor a vague prompt

Take this vague prompt:

> "Summarize this email and tell me what to do next."

Refactor it using the six properties. The refactored version should:

- State the role explicitly
- Delimit the input
- Specify the output structure
- Handle edge cases (empty email, email in another language, email containing sensitive content)
- Optionally include examples
- State what not to do

Compare the two versions in production. Measure consistency of output.

## Exercise 3: Build the evaluation set

For one of your production prompts, build a set of 20 representative inputs covering:

- Five "happy path" inputs (typical, expected use)
- Five edge cases (empty, ambiguous, unusual)
- Five adversarial cases (prompt injection attempts, off-topic input, content the prompt should refuse)
- Five inputs that look like edge cases but are actually within scope

For each input, write the expected output category (not necessarily the exact text). When the prompt changes, re-run all 20 and compare.

## Exercise 4: Track drift over time

Once a month, run your evaluation set against your production prompt with no changes. Note any outputs that have shifted from the prior month. The shift may be from model updates the vendor pushed silently.

If you find drift, the question is whether to update the prompt or change vendors. Either way, the discovery beats finding out from a customer complaint.

## Exercise 5: The negative instruction audit

For your top three production prompts, list the failure modes you are trying to prevent. For each, check whether the prompt explicitly says not to do the thing.

| Failure mode | Explicitly prevented? | If not, draft the negative instruction |
|--------------|----------------------|----------------------------------------|
| | | |

Add the missing negative instructions and test that they do not regress legitimate behavior.

---

---

# 10 — References

## Primary sources

- **Anthropic.** *Claude Prompt Engineering Guide* (docs.claude.com). The most current vendor documentation. Read this before optimizing.
- **OpenAI.** *Prompt Engineering Guide* (platform.openai.com/docs). Vendor-specific but most patterns transfer.
- **Schulhoff, Sander, et al.** *The Prompt Report* (2024). Comprehensive academic survey of prompt engineering techniques. Long but thorough.

## On structured prompting

- **Anthropic's XML tag conventions.** Documented in the Claude prompting guide. The convention is not required, but it is well-tested and the structural discipline is worth adopting regardless of vendor.
- **JSON schema-based prompting.** Increasingly first-class in vendor APIs. Constrains output reliably; useful when downstream code expects structured data.

## On evaluation

- **Hamel Husain, Isaac Flath, Eugene Yan, Bryan Bischof, Jason Liu, Charles Frye.** "What We Learned from a Year of Building with LLMs." 2024. The practical-evals chapter is essential reading.
- **Chip Huyen.** Various essays on her blog (huyenchip.com) about LLM evaluation in production.

## On advanced techniques

- **Wei, Jason, et al.** "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." 2022. The original CoT paper.
- **Yao, Shunyu, et al.** "ReAct: Synergizing Reasoning and Acting in Language Models." 2022. The pattern for prompting models to alternate reasoning and tool use.
- **Various subsequent papers** on tree-of-thought, reflection, self-consistency. Useful for specific tasks; not necessary for most operator prompts.

## On prompt injection and security

- **Simon Willison.** Various writings on prompt injection (simonwillison.net/series/prompt-injection/). The clearest treatment of the attack surface and the limits of current defenses.
- **OWASP Top 10 for LLM Applications.** The security community's enumeration of common vulnerabilities. Useful as a checklist when shipping production prompts that take untrusted input.

## On the limits of prompt engineering

- **Various critics** have argued that elaborate prompt engineering is a band-aid over models that should be more capable by default. The argument is partially correct — vendor improvements have absorbed many techniques into default behavior. The implication is to keep prompts as simple as the task allows and add structure only when needed.
- **Fine-tuning vs prompting.** For tasks done at high volume with consistent format, fine-tuning beats elaborate prompting. The crossover point is roughly 1000+ similar tasks per month with consistent input/output structure. Below that, prompting is more flexible and cheaper to iterate.



# ============================================
# 11-evaluation-design
# ============================================

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


---

# 11 — Exercises

## Exercise 1: Build a 20-input test set

For an AI system you operate (or plan to operate), build a test set with the four input categories.

| # | Input | Category (happy / edge / adversarial / OOD) | Expected output category | Why this test exists |
|---|-------|---------------------------------------------|--------------------------|---------------------|
| 1 | | | | |
| ... | | | | |
| 20 | | | | |

If "why this test exists" is "general coverage," you have not thought about what each test verifies. Be specific.

## Exercise 2: Write the rubric

For your AI system's output, write the rubric that defines acceptable.

| Dimension | What 5/5 looks like | What 3/5 looks like | What 1/5 looks like |
|-----------|--------------------|--------------------|---------------------|
| | | | |

A rubric without specific anchor points is unreliable. The exercise is the specificity.

## Exercise 3: Run the harness

Execute the test set against your current system. Score each output against the rubric. Record:

- Total score
- Per-input scores
- Failures (specific inputs and what went wrong)
- Notes (anything that surprised you)

Save the results with a date stamp. This is the baseline.

## Exercise 4: Re-run after a change

When you make any change to the system (prompt change, vendor change, downstream code change), re-run the harness. Compare results.

| Test # | Previous score | New score | Change | Investigate? |
|--------|---------------|-----------|--------|--------------|
| | | | | |

Any score that drops by 1+ points is investigated. Either the change is a regression or the test was flaky. Either way, the team learns something.

## Exercise 5: Quarterly review

Once a quarter, run the harness with no system changes. Compare against prior quarters.

If scores have shifted with no system changes, the vendor's model has shifted. Decide:
- Roll back to a pinned model version (where supported)
- Adjust the prompt to compensate for the model change
- Accept the new behavior if the shift is positive
- Switch vendors if the shift is negative and the vendor cannot be pinned

The discipline is to make this an explicit decision rather than an ambient drift.

---

---

# 11 — References

## Primary sources

- **Hamel Husain, Isaac Flath, Eugene Yan, Bryan Bischof, Jason Liu, Charles Frye.** "What We Learned from a Year of Building with LLMs" (2024). The clearest practical treatment of LLM evaluation in production. Read this first.
- **Eugene Yan.** Various essays at eugeneyan.com on evaluation patterns. Practical, technical, free.
- **Chip Huyen.** *Designing Machine Learning Systems* (2022) and her blog. Treats evaluation as part of the system design problem rather than a separate concern.

## On model-as-judge

- **Zheng, Lianmin, et al.** "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena" (2023). The empirical case for model-as-judge, with honest treatment of where it falls down.
- **Various follow-on papers** on rubric-based evaluation. The pattern is converging: specific rubrics work, vague rubrics produce noise.

## On test set design

- **Northcutt, Curtis, et al.** "Pervasive Label Errors in Test Sets Destabilize Machine Learning Benchmarks" (2021). Empirical demonstration that even widely-used benchmarks have systematic errors. Useful for calibrating skepticism about your own test set.
- **Various works on stress-testing and adversarial evaluation.** AI safety community has done substantial work here. METR and similar evaluation organizations publish methodology.

## On red-teaming

- **Anthropic, OpenAI, Google.** Vendor red-teaming documentation. Vendor-specific but the patterns transfer.
- **AI Village at DEF CON.** Annual public red-teaming work. Useful for understanding what real adversarial testing looks like.

## On the limits of evaluation

- **The replication crisis literature** (Ioannidis 2005, "Why Most Published Research Findings Are False"). Not specific to AI but the discipline is relevant — beware of evaluation results that confirm what the team wanted to find.
- **Various critiques of LLM benchmarks** (BIG-bench, MMLU, others). The benchmarks are useful but increasingly gamed; vendor performance on benchmarks does not translate cleanly to operator-relevant tasks.

## A note on regulatory evaluation

For AI systems in regulated contexts (finance, healthcare, legal), evaluation often must meet specific standards. The relevant frameworks (NIST AI RMF, EU AI Act for those affected, sector-specific guidance) are evolving. Build the harness to a standard that is defensible in audit, not just to a standard the team likes.



# ============================================
# 12-ai-coding-practice
# ============================================

# 12 — AI-Assisted Coding in Practice

How to ship real software with AI without creating maintenance debt.

## The claim

AI-assisted coding works. The productivity gain is real. It is also asymmetric — the gain accrues to writing code, while the cost accrues to maintaining it. Teams that do not adapt their practices to this asymmetry produce more code, faster, with longer-term maintenance debt that eventually outweighs the early productivity gain. The practices that maintain the gain over time are specific and not the same as the practices for human-written code.

## Why this matters

Most AI coding workflows look productive in the first month and break in the sixth. The breakage is silent — the codebase grows, tests grow, but the time required to make changes grows faster than the team expected. The team blames the codebase getting bigger and adds more developers. The underlying problem is that AI-generated code carries a different debt profile than human-written code, and the team did not adapt to it. This module is about adapting.

## The idea

Six practices. Each addresses a specific way AI-assisted coding goes wrong over time.

### Practice 1: Read every line you commit

The single most important practice. AI generates code at a speed that exceeds your ability to review it carefully if you are not deliberate. The temptation is to skim, accept, and move on. The cost is paid later when a bug or design issue ships that you would have caught with a careful read.

The discipline:

- Treat AI output the way you would treat a junior developer's pull request
- Read every line, including the ones that look right
- Ask whether each line is doing what you actually want, not just what looks reasonable
- Reject generated code that is plausible but not what the situation requires

This is slower than auto-accepting suggestions. It is faster than debugging the alternative.

### Practice 2: Constrain the context

AI coding tools work better with smaller, more specific contexts than with larger, more general ones. A prompt that says "modify this function to handle the new edge case" works better than a prompt that says "improve the error handling across the codebase."

The pattern:

- Identify the specific change required
- Provide the specific code being modified
- State the specific constraints (tests must pass, the public API does not change, the modification is local)
- Avoid asking the tool to make decisions that you have not made

The cost of not constraining: the tool makes design decisions implicitly, often inconsistently with the rest of the codebase, and the inconsistency accumulates over time.

### Practice 3: Maintain test discipline

AI generates plausible-looking tests as easily as it generates plausible-looking code. Plausible tests that do not actually verify the behavior are worse than no tests, because they create false confidence.

The discipline:

- Write the test first, by hand, for the specific behavior the change is supposed to produce
- Use AI to generate the implementation that passes the test
- Read the implementation carefully to ensure it passes the test for the right reasons, not by accident
- Use AI to generate additional tests after the implementation works, but verify each one tests something meaningful

The reverse — generate the implementation, then ask AI to write tests for it — produces tests that pass tautologically because they were written to match the implementation rather than the requirement.

### Practice 4: Refactor on a schedule

AI-generated code converges toward median patterns. It is rarely as clean as the best human-written code in the codebase. Without periodic refactoring, the codebase drifts toward median quality.

The discipline:

- Schedule refactoring sessions
- During refactoring, identify the patterns that have accumulated and consolidate them
- Use AI to assist the refactoring (with the same read-every-line discipline)
- Resist the temptation to skip refactoring because "the tests pass and it works"

Without refactoring, the codebase grows in ways that make the next change harder. Eventually a change that should take an afternoon takes a week.

### Practice 5: Maintain the team's underlying skill

The most insidious failure mode. Junior developers who only ever interact with the codebase through AI never develop the underlying intuition for what good code looks like. They become operators of the AI rather than engineers. When the AI fails subtly, they cannot detect it.

The discipline:

- Junior developers do regular work without AI assistance to maintain the underlying skill
- Pair programming with senior developers continues, with explicit attention to the reasoning behind code choices
- Code reviews focus on understanding, not just on mechanical quality
- Promotion criteria include demonstrated underlying competence, not just shipping velocity

This is hard to enforce because the short-term productivity cost is real. The long-term cost of not enforcing it is a team that cannot debug its own systems.

### Practice 6: Document for humans, not for the AI

AI does not need documentation — it can read the code. Human team members do. As AI handles more of the writing, the temptation is to skip documentation because the AI does not need it.

The discipline:

- Documentation explains why, not what (the code shows what)
- Architectural decisions are recorded with context, alternatives considered, and trade-offs accepted
- Onboarding documentation is maintained so that new team members can build mental models without depending on AI to explain the codebase
- Comments mark surprising or non-obvious code, including code where the AI made a choice that is not the most natural choice

A codebase that only the AI can navigate is a codebase that has become structurally dependent on a vendor.

## The honest accounting

AI-assisted coding produces three kinds of gains:

- **Real and durable.** Generating boilerplate, writing tests for code you already understand, exploring unfamiliar APIs, refactoring code at the line level.
- **Real but conditional.** Speeding up implementation when the design is already clear and the team has the discipline to read the output carefully.
- **Apparent but not durable.** Speed at the cost of understanding, where the team is shipping faster than it is learning.

Most teams capture the first kind without effort, the second kind with the practices in this module, and the third kind by accident. The third kind is the problem — it looks like productivity gain in week one and shows up as maintenance debt in month six.

The honest measure of AI coding productivity is not lines of code shipped. It is the rate of feature delivery sustained over multiple quarters with the same team. Teams that measure the right thing make the right trade-offs.

## Common failure modes

- **Auto-accepting suggestions.** Speed without understanding. Builds maintenance debt invisibly.
- **Generating tests for already-written code.** Tautological tests that do not catch real bugs.
- **Letting junior developers operate the AI without understanding.** Talent pipeline problem that surfaces years later.
- **Skipping refactoring because the tests pass.** Codebase quality drifts; future changes get harder.
- **Documenting only what the AI needs.** The codebase becomes navigable only with AI assistance.
- **Measuring the wrong thing.** Lines shipped instead of features delivered, weeks of velocity instead of quarters of velocity.

## What this module does not cover

- The specific tools and their workflows (changes too fast; current vendors include Claude Code, Cursor, GitHub Copilot, and others)
- The mechanics of code review for AI-generated PRs (similar to human PRs with extra attention to design consistency)
- The security implications of AI-generated code (real but specialized; see security-focused references)

## Try this

See [exercises.md](exercises.md).

## Further reading

See [references.md](references.md).


---

# 12 — Exercises

## Exercise 1: Audit a recent AI-generated PR

Pick a PR from the last 30 days that included AI-generated code. Review it line by line.

| Section | Was it read carefully when committed? | Is it doing what was actually wanted? | Any subtle issues? |
|---------|---------------------------------------|--------------------------------------|--------------------|
| | | | |

If the answer to "read carefully" is no, the PR was a near miss. Adjust the team's review discipline.

## Exercise 2: The test discipline check

For your last five features that included AI-generated code, ask:

- Were the tests written before the implementation?
- Do the tests verify the requirement, or do they verify the implementation?
- If you removed the implementation and reimplemented from scratch, would the tests still be meaningful?

Tests that fail the third question are tautological. Replace them.

## Exercise 3: Schedule refactoring

Pick a date for the next quarterly refactoring session. Two days, no feature work.

In advance:
- Identify the three areas of the codebase where AI-generated patterns have accumulated
- Identify the consolidations that would simplify those areas
- Plan the refactoring with the same discipline as feature work — write tests, make small changes, validate

Without the schedule, refactoring does not happen. With it, the codebase does not drift.

## Exercise 4: AI-free skill maintenance

For each engineer on the team, identify one task they should do this month without AI assistance to maintain the underlying skill.

| Engineer | Task | Estimated time |
|----------|------|----------------|
| | | |

The cost is real. The benefit is a team that can still debug its own systems in five years.

## Exercise 5: Velocity over quarters

Track your team's feature delivery rate over the last four quarters. Compare to AI tooling adoption.

| Quarter | Features shipped | AI tooling in use | Engineer count | Features per engineer |
|---------|------------------|-------------------|----------------|----------------------|
| Q-3 | | | | |
| Q-2 | | | | |
| Q-1 | | | | |
| Current | | | | |

If features per engineer is rising, the AI gain is real and sustained. If it is flat or falling despite increased AI tooling, the gain is being absorbed by maintenance debt. Adjust practices.

---

---

# 12 — References

## Primary sources

- **Anthropic.** *Claude Code documentation* (claude.com/code) and the prompting guide. Vendor-specific but the patterns transfer to other AI coding tools.
- **GitHub.** *GitHub Copilot documentation and research*. The 2022-2024 productivity studies are reasonable empirical work, with the caveat that GitHub has obvious incentive to find positive results.
- **METR.** Various studies on AI impact on software engineering tasks. More skeptical, more rigorous.

## On code review for AI-generated code

- **Google's "Engineering Practices Documentation"** (eng-practices.dev) on code review. Pre-AI but the principles transfer; AI-generated code needs the same scrutiny as human code, with extra attention to design consistency.
- **Various engineering blog posts** from teams using AI coding at scale. Stripe, Shopify, Anthropic itself. Useful for understanding what works at production volume.

## On test discipline

- **Beck, Kent.** *Test-Driven Development* (2002). The original argument for tests-first. AI-assisted coding makes the discipline more important, not less.
- **Martin, Robert.** *Clean Code* (2008). Older but the chapter on tests is directly applicable to evaluating AI-generated test quality.

## On the productivity question

- **Various empirical studies** on AI coding productivity. The results are mixed and methodologically contested. Read with care:
  - GitHub's Copilot studies (favorable, GitHub-funded)
  - METR's studies (more nuanced, sometimes negative)
  - DORA's State of DevOps Report (annual, includes AI sections)
- The honest read of the evidence: AI coding helps for some tasks, hurts for others, and the net effect depends heavily on the team's discipline.

## On the deskilling concern

- **Bainbridge, Lisanne.** "Ironies of Automation" (1983). The classic paper on automation and human skill. Originally about process control; ports directly to AI coding.
- **Various pieces** by senior engineers worried about the long-term effect on the talent pipeline. The concern is legitimate; it is also possible to design around. The practices in this module address the design.

## On security

- **OWASP guidance** on AI-generated code security. Brief, useful starting point.
- **Various papers** on vulnerabilities in AI-generated code (most notably Snyk and similar vendors' analyses). The gist: AI generates plausible-looking but vulnerable code at meaningful rates, especially for security-sensitive patterns. Read AI security output with skepticism.

## A note on the moving landscape

The tools in this space change every 3-6 months. Specific tool guidance dates fast. The practices in this module are tool-agnostic on purpose. When the tool changes, the practices still apply.
