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
