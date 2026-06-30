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
