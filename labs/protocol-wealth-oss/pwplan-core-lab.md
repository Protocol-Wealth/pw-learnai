# PWPlan Core Lab

How to reduce direct-identifier exposure with schema tripwires without confusing that control for de-identification.

## Source repo

[`Protocol-Wealth/pwplan-core`](https://github.com/Protocol-Wealth/pwplan-core)

PWPlan Core is a thin planning UI. The open-source contract accepts planning variables such as age, balances, allocations, filing status, and derived assumptions. It has no declared fields for name, date of birth, SSN, email, phone, or address.

Those variables can still be sensitive or indirectly identifying when combined with other information. A key-name guard is not anonymization, redaction, or a complete privacy review. Use synthetic inputs on the public learning path.

Reviewed against the public `pwplan-core` README on 2026-07-25.

## What to learn

The core pattern is a direct-identifier-reducing compute contract:

- The browser UI sends planning variables, not identity.
- Client-to-run correlation happens out of band through an opaque subject reference.
- The public/open learning path uses synthetic inputs.
- The private production path can map identity behind authentication before making server-to-server calls.
- A structural tripwire rejects identity-shaped keys before dispatch.
- Any real derived data needs a separate re-identification, source-rights, retention, provider-terms, and security review before egress.

This is stronger than relying only on a reminder not to paste direct identifiers. It is not proof that identity is impossible to express: free-text values, novel key names, and combinations of financial attributes can still identify or expose a person.

## Current planning tools

The current engine contract covers 34 tools. Treat the repository contract as the source of truth; this grouping is a reviewed orientation, not a second wire specification.

| Group | Tools |
|------|---------|
| Core projections and goals | `monte_carlo_decumulation`, `solve_goal`, `analyze_goals`, `project_cash_flow` |
| Income, tax, and retirement | `income_layering`, `glide_path`, `tax_aware_withdrawal`, `roth_conversion`, `sequence_of_returns_stress`, `rmd`, `tax_bracket_headroom`, `social_security_claiming`, `regime_conditioned_swr` |
| Portfolio and market analysis | `correlation_matrix`, `historical_blend`, `regime_return_generator`, `portfolio_xray`, `fire`, `risk_metrics`, `risk_profile_score`, `performance_analysis`, `inherited_ira_analysis`, `rebalance`, `optimize_allocation` |
| Composite case and reporting | `irmaa_headroom`, `analyze_roth_conversion`, `sequence_conversions`, `build_planning_report` |
| Education | `education_funding`, `education_vehicle_rules` |
| Assumptions | `capital_market_assumptions` |
| Cash-flow bridge | `cashflow_planning_bridge`, `cash_reserve_analysis`, `budget_pacing_projection` |

The UI does not expose every tool as a one-tool tab. Some tools are controls, gateway methods, composite cases, or grouped views. That is another reason not to infer capability from visible tab count.

## Contract invariant

Forbidden field names include:

```text
name, firstName, lastName, fullName, dob, dateOfBirth, ssn,
socialSecurityNumber, email, phone, phoneNumber, address, streetAddress
```

Allowed fields include derived planning inputs:

```text
currentAge, retirementAge, horizonAge, accounts, assetClasses,
filingStatus, annualSpend, guaranteedIncome, returnModel, paths
```

## Browser exercise

Use the Planning Contract Validator.

1. Start with the sample Monte Carlo payload.
2. Add `email` or `dateOfBirth`.
3. Confirm the validator fails.
4. Replace the identity field with a synthetic derived field such as `currentAge`.
5. Confirm the key-name tripwire passes, then explain why passing does not prove anonymity.

## Codex or Claude task

```text
Read the PWPlan Core lab and the planning contract. Build a validator for one planning tool payload. It must reject identity-shaped keys anywhere in the object tree, check the contract version, use synthetic examples, and explain why passing the key-name guard is not proof of de-identification.
```

## Review checklist

| Check | Pass/fail |
|-------|-----------|
| Contract version is explicit | |
| Identity-shaped keys fail anywhere in nested payloads | |
| The examples use synthetic data | |
| Passing the key-name guard is not called de-identification | |
| Output explains the trust boundary | |
| No live planning API call is made from `pw-learnai` | |
| Tool list is treated as contract-driven, not hardcoded forever | |

## What this lab does not do

- It does not provide financial planning advice.
- It does not de-identify real client records.
- It does not determine whether derived financial attributes are indirectly identifying.
- It does not implement the private `pw-api` mapping layer.
- It does not persist planning runs.
