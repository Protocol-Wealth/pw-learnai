# pw-learnai — Protocol Wealth OSS Labs

> Applied labs connecting pw-learnai to nexus-core, pwos-core, and pwplan-core.

Source: https://github.com/Protocol-Wealth/pw-learnai
License: MIT
Generated: 2026-06-29

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

## Lab index

| Lab | Repo | Learning target | Browser tool |
|-----|------|-----------------|--------------|
| [Nexus Core Lab](nexus-core-lab.md) | [`Protocol-Wealth/nexus-core`](https://github.com/Protocol-Wealth/nexus-core) | MCP tool orchestration, public read-only financial analysis, graceful degradation | MCP Tool Planner |
| [PWOS Core Lab](pwos-core-lab.md) | [`Protocol-Wealth/pwos-core`](https://github.com/Protocol-Wealth/pwos-core) | PII boundaries, audit trails, confirmation gates, compliance primitives | PII Guard Simulator, Confirmation Gate Simulator |
| [PWPlan Core Lab](pwplan-core-lab.md) | [`Protocol-Wealth/pwplan-core`](https://github.com/Protocol-Wealth/pwplan-core) | PII-free planning contracts, de-identified compute planes, contract tripwires | Planning Contract Validator |

## Ecosystem map

| Repo | Role |
|------|------|
| `pw-learnai` | Learning front door: modules, exercises, browser-only tools, AI notebook bundles |
| `nexus-core` | Public read-only MCP and REST financial analysis engine |
| `pwos-core` | Compliance-first AI OS primitives for regulated advisory workflows |
| `pwplan-core` | Privacy-by-construction planning UI and PII-free contract pattern |

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

## What to learn

The durable pattern is not "financial API." The durable pattern is a bounded tool surface:

- Public, read-only endpoints
- No client identity
- Graceful degradation when optional provider keys are absent
- Shared engine logic behind REST and MCP
- Tool contracts that can be consumed by Claude, Codex, ChatGPT, or other MCP-compatible clients

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
- `GET /api/score/{ticker}` for EMF durability scoring
- `GET /api/market/quote/{symbol}` for market quotes
- `POST /mcp` for MCP-over-HTTP
- Planning tools exposed through `/mcp/tools`

## Review checklist

| Check | Pass/fail |
|-------|-----------|
| No identity fields in example payloads | |
| Public tools stay read-only | |
| Missing provider data has a graceful fallback | |
| REST and MCP semantics are described consistently | |
| Output says educational, not investment advice | |

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

## What to learn

Most AI governance fails because it depends on a person remembering to do the right thing at every call site. PWOS Core pushes the control into reusable primitives:

- PII tags and prompt-construction exclusion
- PII scanning as defense-in-depth
- Content-free audit rows and hash chaining
- Payload-bound confirmation gates for write tools
- Tool access tiers
- Webhook verification and idempotency
- Security headers and cache-key PII rejection

The lesson for `pw-learnai`: teach the boundary, not the brand.

## Canonical patterns to study

| Pattern | Learning target |
|---------|-----------------|
| PII_TAGS canonical map | PII control should be structural at prompt construction |
| Sentinel-row reconciliation | Immutable records require append-only recovery |
| Webhook receiver primitive | Vendor events need verify, dedup, parse, process, audit, DLQ |
| PII egress canary | Last-mile LLM calls need independent tripwires |
| Confirmation gate | Write tools need payload-bound human approval |
| Three-tier agent memory | Client, advisor, and firm memory have different scopes |

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

## What to learn

The core pattern is a PII-free compute plane:

- The browser UI sends planning variables, not identity.
- Client-to-run correlation happens out of band through an opaque subject reference.
- The public/open path can target a PII-free engine.
- The private production path can map identity behind authentication before making server-to-server calls.
- A structural tripwire rejects identity-shaped keys before dispatch.

This is stronger than "remember not to paste PII." The contract makes identity impossible to express unless someone changes the schema.

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

## What this lab does not do

- It does not provide financial planning advice.
- It does not de-identify real client records.
- It does not implement the private `pw-api` mapping layer.
- It does not persist planning runs.
