# pw-learnai — Protocol Wealth OSS Labs

> Applied labs connecting pw-learnai to nexus-core, pwos-core, and pwplan-core.

Source: https://github.com/Protocol-Wealth/pw-learnai
License: MIT
Generated: 2026-07-01

## Labs included

- protocol-wealth-oss/README.md
- protocol-wealth-oss/nexus-core-lab.md
- protocol-wealth-oss/pwos-core-lab.md
- protocol-wealth-oss/pwplan-core-lab.md

---


# ============================================
# protocol-wealth-oss/README.md
# ============================================

# Protocol Wealth OSS Labs

Applied labs that connect the `pw-learnai` curriculum to Protocol Wealth's open-source implementation repos.

These labs are not production implementation guides. They are learning bridges:

1. Read the concept in `pw-learnai`.
2. Try the browser-only simulator.
3. Inspect the open-source starting point.
4. Adapt the pattern with Codex CLI or Claude Code.

Reviewed against the public OSS surfaces on 2026-06-30.

## Lab index

| Lab | Repo | Learning target | Browser tool |
|-----|------|-----------------|--------------|
| [Nexus Core Lab](nexus-core-lab.md) | [`Protocol-Wealth/nexus-core`](https://github.com/Protocol-Wealth/nexus-core) | MCP tool orchestration, public read-only analytics, PII-free planning dispatch, graceful degradation | MCP Tool Planner |
| [PWOS Core Lab](pwos-core-lab.md) | [`Protocol-Wealth/pwos-core`](https://github.com/Protocol-Wealth/pwos-core) | PII boundaries, audit trails, confirmation gates, tool tiers, compliance primitives | PII Guard Simulator, Confirmation Gate Simulator |
| [PWPlan Core Lab](pwplan-core-lab.md) | [`Protocol-Wealth/pwplan-core`](https://github.com/Protocol-Wealth/pwplan-core) | PII-free planning contracts, 16-tool planning UI, de-identified compute planes, contract tripwires | Planning Contract Validator |

## Ecosystem map

| Repo | Role |
|------|------|
| `pw-learnai` | Learning front door: modules, exercises, browser-only tools, AI notebook bundles |
| `nexus-core` | Public read-only MCP and REST analytics engine: regime, market, economic, options, planning, on-chain, LP, vault, Solana, benchmark, and meta surfaces |
| `pwos-core` | Compliance-first AI OS primitives for regulated advisory workflows: PII guard, audit log, MCP tool tiers, confirmation gates, auth, webhooks, cache keys, GCP helpers, ledger, holdings, CRM, documents, workflow, and on-chain SDK |
| `pwplan-core` | Privacy-by-construction planning UI: 16 planning tools over a PII-free contract that can target public Nexus or a private authenticated plane |

## Beginner route

If you are onboarding someone who only knows chat prompts, send them through this sequence:

1. [Getting Started as an AI Operator](../../modules/00-getting-started/module.md)
2. [AI-Assisted Coding in Practice](../../modules/12-ai-coding-practice/module.md)
3. [Designing Agent Instructions](../../modules/13-agent-instructions/module.md)
4. [Working with Public Data](../../modules/14-working-with-public-data/module.md)
5. This labs overview
6. One lab, chosen by what they want to learn: public data (`nexus-core`), compliance primitives (`pwos-core`), or PII-free planning (`pwplan-core`)

## Agentic implementation loop

Use the same pattern for each lab:

```text
Goal: Adapt one OSS pattern into a local proof of concept.

Scope:
- Read the lab doc and linked source repo.
- Build only a client-side simulator or small integration spike.
- Do not introduce real client data, secrets, authentication, or production writes.

Constraints:
- Preserve the source repo's trust boundary.
- Keep PII-free examples PII-free.
- Treat financial outputs as educational, not advice.

Verification:
- Run the local build.
- Confirm the simulator fails closed on unsafe input.
- Review the final diff manually.
```

## PR hygiene

No open PRs were mergeable as of 2026-06-07 because the audited repositories had no open PRs:

- `Protocol-Wealth/pw-learnai`
- `Protocol-Wealth/nexus-core`
- `Protocol-Wealth/pwos-core`
- `Protocol-Wealth/pwplan-core`

Repeat the audit before release work. Merge only when a PR is mergeable, checks pass, and there are no review or policy blockers.



# ============================================
# protocol-wealth-oss/nexus-core-lab.md
# ============================================

# Nexus Core Lab

How to use a public, read-only MCP engine as a starting point for AI-assisted financial analysis workflows.

## Source repo

[`Protocol-Wealth/nexus-core`](https://github.com/Protocol-Wealth/nexus-core)

Nexus Core is a public, read-only, regime-adaptive financial-analysis engine. It exposes the same underlying computation through REST endpoints and MCP tools, so an AI client can call financial analysis capabilities without implementing the financial domain logic itself.

Reviewed against [`nexusmcp.site/openapi.json`](https://nexusmcp.site/openapi.json) and the public MCP guide on 2026-06-30.

## What to learn

The durable pattern is not "financial API." The durable pattern is a bounded tool surface:

- Public, read-only endpoints
- No client identity
- Graceful degradation when optional provider keys are absent
- Shared engine logic behind REST and MCP
- Tool contracts that can be consumed by Claude, Codex, ChatGPT, or other MCP-compatible clients
- A PII-free planning dispatch surface where open demos send age, balances, allocations, assumptions, and other de-identified variables rather than names, dates of birth, emails, phones, addresses, or account identities

That combination lets agents call useful tools while the trust boundary remains narrow.

## Architecture pattern

```text
External providers
  -> data adapters
  -> pure engine computation
  -> REST routes and MCP tools
  -> AI client or browser client
```

The important design choice is that REST and MCP call the same engine. That prevents two subtly different versions of the same financial logic from drifting apart.

## Current public surface

The current public schema exposes these capability areas:

| Area | What to teach |
|------|---------------|
| Regime | Current macro regime classification and raw signal readings |
| Market | Quotes and OHLCV history for stocks, ETFs, indices, and crypto |
| Economic | FRED series lookup |
| Scoring | Educational EMF 8-check durability scoring over public fundamentals |
| Options | Black-Scholes price and Greeks, covered-call, cash-secured-put, collar, crypto options, option books, and scenario stress |
| Planning | PII-free retirement-planning tool discovery and dispatch |
| On-chain | Anonymous wallet, native-chain balance, Solana token price, vault discovery, LP analytics, and benchmark return series |
| Meta | Health and provider usage stats without keys or client data |

The hosted landing page still highlights the simple entrypoints (`/api/regime`, `/api/market/quote/{symbol}`, `/api/economic/{series_id}`, and `/mcp`), but the OpenAPI schema is the current source of truth for the broader surface.

## Browser exercise

Use the MCP Tool Planner in the interactive site.

Work through three scenarios:

| Scenario | Expected tool posture |
|----------|-----------------------|
| "What is the current macro regime?" | Public read-only, safe for hosted MCP |
| "Run a retirement projection with fake ages and balances" | PII-free planning payload, safe if no identity fields are present |
| "Analyze a named client's full portfolio" | Not appropriate for public Nexus; route through a private authenticated layer |

The point is to decide which tool sequence belongs on the public surface and which belongs behind a regulated private boundary.

## Codex or Claude task

```text
Read the Nexus Core lab and the nexus-core README. Propose one browser-only learning tool that teaches MCP tool orchestration without calling the live API. Do not use real client data, API keys, or investment advice. Include the tool sequence, trust boundary, and verification steps.
```

## Implementation starting points

- `GET /api/regime` for regime classification
- `GET /api/regime/signals` for raw signal readings
- `GET /api/score/{ticker}` for EMF durability scoring
- `GET /api/market/quote/{symbol}` for market quotes
- `GET /api/market/history/{symbol}` for OHLCV history
- `GET /api/economic/{series_id}` for FRED series
- `GET /api/options/price` and `/api/options/overlay/*` for educational options analytics
- `GET /api/options/crypto/*` and `POST /api/options/crypto/*/book/*` for Deribit-backed crypto-option illustrations
- `GET /api/wallet/{address}`, `/api/chain/*`, `/api/vaults`, `/api/solana/*`, `/api/lp/*`, and `/api/benchmarks*` for public on-chain and benchmark analytics
- `POST /mcp` for MCP-over-HTTP
- `GET /mcp/tools` for planning contract discovery
- `POST /mcp/tools/{tool_id}` for PII-free planning tool dispatch

## Hosted MCP setup

The hosted endpoint is:

```text
https://nexusmcp.site/mcp/
```

Current public guide examples:

```bash
claude mcp add --transport http nexus-core https://nexusmcp.site/mcp/
codex mcp add nexus --url https://nexusmcp.site/mcp
```

`pw-learnai` must not call this endpoint from its browser tools. Use it as a source to teach tool boundaries, not as a live dependency inside this site.

## Review checklist

| Check | Pass/fail |
|-------|-----------|
| No identity fields in example payloads | |
| Public tools stay read-only | |
| Missing provider data has a graceful fallback | |
| REST and MCP semantics are described consistently | |
| Output says educational, not investment advice | |
| Live endpoints are not called by `pw-learnai` browser tools | |

## What this lab does not do

- It does not call the live Nexus API from the `pw-learnai` browser tools.
- It does not handle authentication, PII, or client suitability.
- It does not turn analysis output into advice.



# ============================================
# protocol-wealth-oss/pwos-core-lab.md
# ============================================

# PWOS Core Lab

How to teach compliance-first AI primitives without turning compliance into a slogan.

## Source repo

[`Protocol-Wealth/pwos-core`](https://github.com/Protocol-Wealth/pwos-core)

PWOS Core is an open-source extraction of compliance-first primitives for regulated advisory workflows. Its value is not a single feature. Its value is the shape: PII boundaries, audit trails, confirmation gates, access tiers, webhook verification, retention-aware records, and AI guardrails that fail closed.

Reviewed against the public `pwos-core` README on 2026-06-30.

## What to learn

Most AI governance fails because it depends on a person remembering to do the right thing at every call site. PWOS Core pushes the control into reusable primitives:

- PII tags and prompt-construction exclusion
- PII scanning as defense-in-depth
- Content-free audit rows and hash chaining
- Payload-bound confirmation gates for write tools
- Tool access tiers
- Webhook verification and idempotency
- Security headers and cache-key PII rejection
- Auth, scoped agent tokens, and role guards
- GCP helpers that refuse silent password fallback and support structured frontend error reports
- Ledger, holdings, CRM, email archive, document generation, workflow, and on-chain SDK primitives

The lesson for `pw-learnai`: teach the boundary, not the brand.

## Current package map

| Area | Packages and primitives to study |
|------|----------------------------------|
| Compliance + audit | `pii-guard`, `audit-log`, `mcp-tools`, `compliance` |
| AI safety | `ai-guardrails` with workspace assertions, model resolver, cache-marker PII checks, and content-free audit rows |
| Auth + access | `auth`, `webhooks`, `cache-keys`, `security-headers`, `gcp-helpers` |
| Financial data | `ledger`, `holdings`, `crm`, `email-archive` |
| Operations | `workflow-engine`, `document-gen`, `onchain-sdk` |

The important adoption rule is that these packages are primitives. They enable a regulated posture; they do not by themselves make a deployment compliant.

## Canonical patterns to study

| Pattern | Learning target |
|---------|-----------------|
| PII_TAGS canonical map | PII control should be structural at prompt construction |
| Sentinel-row reconciliation | Immutable records require append-only recovery |
| Webhook receiver primitive | Vendor events need verify, dedup, parse, process, audit, DLQ |
| PII egress canary | Last-mile LLM calls need independent tripwires |
| Confirmation gate | Write tools need payload-bound human approval |
| Three-tier agent memory | Client, advisor, and firm memory have different scopes |
| Cache-key PII rejection | Caches should reject identity-shaped keys by construction |
| GCP helper posture | Cloud SQL auth and secret loading should fail closed, not silently fall back |
| Ledger and holdings invariants | Financial records need append-only events, checkpoints, and reverse-only correction |

## Browser exercises

Use the PII Guard Simulator:

1. Paste a prompt with email, phone, and account number.
2. Observe which fields should be blocked, redacted, or audited.
3. Rewrite the prompt so the task still works without direct identifiers.

Use the Confirmation Gate Simulator:

1. Pick a write-like action.
2. Preview the payload.
3. Approve it.
4. Change the payload after approval.
5. Confirm that the gate detects drift.

## Codex or Claude task

```text
Read the PWOS Core lab and the pwos-core canonical patterns. Build a client-only simulator that demonstrates one compliance primitive. Do not claim production compliance. The simulator must show the trust boundary, fail-closed behavior, and what a human reviewer must verify.
```

## Review checklist

| Check | Pass/fail |
|-------|-----------|
| Simulator says "training only" or equivalent | |
| No real PII is requested | |
| Unsafe input fails closed | |
| Write action requires explicit approval | |
| Payload drift after approval is detected | |
| Audit concept is content-free, not raw prompt storage | |
| Package primitive is not described as complete compliance | |

## What this lab does not do

- It does not make `pw-learnai` a compliance system.
- It does not store audit logs.
- It does not process real client data.
- It does not replace CCO or legal review.



# ============================================
# protocol-wealth-oss/pwplan-core-lab.md
# ============================================

# PWPlan Core Lab

How to separate a planning UI from identity by making the contract PII-free by construction.

## Source repo

[`Protocol-Wealth/pwplan-core`](https://github.com/Protocol-Wealth/pwplan-core)

PWPlan Core is a thin planning UI. The open-source contract accepts de-identified planning variables such as age, balances, allocations, filing status, and derived assumptions. It has no fields for name, date of birth, SSN, email, phone, or address.

Reviewed against the public `pwplan-core` README on 2026-06-30.

## What to learn

The core pattern is a PII-free compute plane:

- The browser UI sends planning variables, not identity.
- Client-to-run correlation happens out of band through an opaque subject reference.
- The public/open path can target a PII-free engine.
- The private production path can map identity behind authentication before making server-to-server calls.
- A structural tripwire rejects identity-shaped keys before dispatch.
- The open reference path can call the public Nexus planning gateway directly because the payload is de-identified and PII-free.

This is stronger than "remember not to paste PII." The contract makes identity impossible to express unless someone changes the schema.

## Current planning tools

The current contract covers 16 tools:

| Tool | Purpose |
|------|---------|
| `monte_carlo_decumulation` | Path simulation with tax-aware spend-down |
| `glide_path` | Target equity weight by age |
| `tax_aware_withdrawal` | Per-year withdrawal ordering and RMD |
| `roth_conversion` | Convert-now vs. leave-pre-tax comparison |
| `sequence_of_returns_stress` | Ordering effect on a fixed return set |
| `rmd` | Required minimum distribution |
| `tax_bracket_headroom` | Marginal bracket and Roth-fill headroom |
| `social_security_claiming` | Benefit by claim age and breakeven ages |
| `regime_conditioned_swr` | Safe-withdrawal-rate adjustment by live regime |
| `correlation_matrix` | Real-data return correlations |
| `regime_return_generator` | Live regime, transition matrix, and path cache key |
| `portfolio_xray` | Regime-aware structural diagnostics |
| `fire` | FIRE and Coast-FIRE number plus years to independence |
| `risk_metrics` | Sharpe, Sortino, drawdown, and VaR for return series |
| `rebalance` | Drift and self-financing trades to target weights |
| `capital_market_assumptions` | Real returns, volatility, lambda, and correlations |

`capital_market_assumptions` is surfaced as a Monte Carlo control rather than a standalone planning tab in the current UI.

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
4. Replace the identity field with a derived field such as `currentAge`.
5. Confirm the payload passes again.

## Codex or Claude task

```text
Read the PWPlan Core lab and the planning contract. Build a validator for one planning tool payload. It must reject identity-shaped keys anywhere in the object tree, check the contract version, and explain why age is allowed but date of birth is not.
```

## Review checklist

| Check | Pass/fail |
|-------|-----------|
| Contract version is explicit | |
| Identity-shaped keys fail anywhere in nested payloads | |
| The examples use fake or de-identified data | |
| Output explains the trust boundary | |
| No live planning API call is made from `pw-learnai` | |
| Tool list is treated as contract-driven, not hardcoded forever | |

## What this lab does not do

- It does not provide financial planning advice.
- It does not de-identify real client records.
- It does not implement the private `pw-api` mapping layer.
- It does not persist planning runs.
