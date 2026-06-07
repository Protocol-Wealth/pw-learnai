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
