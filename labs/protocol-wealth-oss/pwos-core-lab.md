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
