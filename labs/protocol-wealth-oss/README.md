# Protocol Wealth OSS Labs

Applied labs that connect the `pw-learnai` curriculum to Protocol Wealth's open-source reference repositories.

These labs are not production implementation guides. They are learning bridges:

1. Read the concept in `pw-learnai`.
2. Try the browser-only simulator.
3. Inspect the open-source starting point.
4. Adapt the pattern with Codex CLI or Claude Code.

Reviewed against the public OSS surfaces on 2026-07-25.

## Lab index

| Lab | Repo | Learning target | Browser tool |
|-----|------|-----------------|--------------|
| [PWCLI Core Lab](pwcli-core-lab.md) | [`Protocol-Wealth/pwcli-core`](https://github.com/Protocol-Wealth/pwcli-core) | Intent contracts, runtime adapters, approvals, redaction, provenance, Claude Agent SDK boundary | Agent Systems Architect |
| [Shard Core Lab](shard-core-lab.md) | [`Protocol-Wealth/shard-core`](https://github.com/Protocol-Wealth/shard-core) | Authenticated encryption, threshold recovery, fail-closed handling, human ceremony | Agent Systems Architect |
| [Nexus Core Lab](nexus-core-lab.md) | [`Protocol-Wealth/nexus-core`](https://github.com/Protocol-Wealth/nexus-core) | MCP tool orchestration, public read-only analytics, synthetic planning dispatch, graceful degradation | MCP Tool Planner |
| [PWOS Core Lab](pwos-core-lab.md) | [`Protocol-Wealth/pwos-core`](https://github.com/Protocol-Wealth/pwos-core) | PII boundaries, audit trails, confirmation gates, tool tiers, compliance primitives | PII Guard Simulator, Confirmation Gate Simulator |
| [PWPlan Core Lab](pwplan-core-lab.md) | [`Protocol-Wealth/pwplan-core`](https://github.com/Protocol-Wealth/pwplan-core) | Direct-identifier key tripwires, 34-tool engine contract, synthetic planning inputs, privacy limits | Planning Contract Validator |
| [System-of-Systems Lab](system-of-systems-lab.md) | All public references + live/public boundaries | Runtime vs control plane vs tools vs memory vs recovery vs accountable humans | Agent Systems Architect |

## Ecosystem map

| Repo | Role |
|------|------|
| `pw-learnai` | Learning front door: modules, exercises, browser-only tools, AI notebook bundles |
| `pwcli-core` | Runtime-neutral intent and governance specification: adapter metadata, side effects, approval, redaction, source, and provenance contracts |
| `nexus-core` | Public-safe analytical engine and MCP capability layer; consult the current repo and live contract for tool inventory and access posture |
| `pwos-core` | Governance and safety primitives for PII boundaries, audit, tool tiers, confirmation, and workflow controls |
| `pwplan-core` | Planning reference UI: 34-tool engine contract with named direct-identifier key tripwires; synthetic inputs only on the public learning path |
| `shard-core` | Prerelease protected-byte and threshold-recovery utility; synthetic evaluation only until threat model, ceremony, and independent review are sufficient |

The public curriculum treats durable semantic memory as a provider-neutral interface and does not publish private implementation details.

## Beginner route

If you are onboarding someone who only knows chat prompts, send them through this sequence:

1. [Getting Started as an AI Operator](../../modules/00-getting-started/module.md)
2. [AI-Assisted Coding in Practice](../../modules/12-ai-coding-practice/module.md)
3. [Designing Agent Instructions](../../modules/13-agent-instructions/module.md)
4. [Working with Public Data](../../modules/14-working-with-public-data/module.md)
5. [Security & Secrets Hygiene](../../modules/15-security-secrets-hygiene/module.md)
6. [Building Agent Systems](../../modules/16-building-agent-systems/module.md)
7. This labs overview
8. One lab, chosen by the boundary they need to understand next

## Agentic implementation loop

Use the same pattern for each lab:

```text
Goal: Adapt one OSS pattern into a local proof of concept.

Scope:
- Read the lab doc and linked source repo.
- Build only a client-side simulator or small integration spike.
- Do not introduce real client data, secrets, authentication, or production writes.
- Keep runtime, control-plane, capability, memory, recovery, and human-review responsibilities separate.

Constraints:
- Preserve the source repo's trust boundary.
- Use synthetic planning inputs; a direct-identifier key tripwire is not de-identification.
- Treat financial outputs as educational, not advice.

Verification:
- Run the local build.
- Confirm the simulator fails closed on unsafe input.
- Run independent read-only contract and security reviews.
- Adjudicate each finding and review the final diff manually.
```

## PR hygiene

Repository and PR state changes too quickly to embed a permanent "no open PRs" claim in a learning document.

Run `pnpm pr:audit` before release work. Merge only when a PR is non-draft, current, approved where required, check-passing, and free of unresolved review or policy blockers. Read the actual reviewer findings; an aggregate green status is not enough.
