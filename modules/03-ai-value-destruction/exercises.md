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
