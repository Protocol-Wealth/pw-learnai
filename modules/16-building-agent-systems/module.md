# 16 - Building Agent Systems

How to move from one useful coding agent to a governed system of runtimes, tools, memory, safety controls, and accountable humans.

## The claim

An agent runtime is not an agent system.

The runtime supplies the execution loop: the model reads context, calls tools, observes results, and repeats. A usable system also needs an intent contract, permission policy, data boundary, durable state, capability registry, verification loop, and named humans who own consequential decisions.

This distinction is falsifiable:

> If changing the model or runtime also forces you to rewrite approval policy, provenance, data classification, and business rules, those concerns were never separated into stable system boundaries.

The goal is not to reproduce every feature of a mature coding agent. The goal is to reuse a strong runtime while making the surrounding system legible, replaceable, and governable.

## Start at the right level

Do not begin with a daemon, semantic memory graph, or fleet of subagents.

| Starting point | First useful artifact | Do not add yet |
| --- | --- | --- |
| New operator | One repo, one bounded prompt, one verification command | MCP, remote hosting, persistent memory |
| Repo maintainer | Agent instructions, read-only review, edit approval, diff verification | Autonomous merging or production credentials |
| Agent builder | Runtime adapter contract, explicit tools, permission callback, run receipt | Multi-tenant service |
| Regulated or sensitive workflow | Data classification, redaction, isolation, human approval, retention policy | Real data until every boundary is tested |

A beginner and an advanced builder can use the same library because they enter at different layers.

## The system-of-systems map

```text
human goal -> pw-learnai -> pwcli-core intent + policy
                              |
                              v
                    ingress classification/redaction
                              |
                    +---------v----------+
host isolation ---->| agent runtime      |<---- constrained credentials/network
                    |                    |
pre-tool gate ------|--> built-in tools  |----> post-tool/egress redaction
pre-tool gate ------|--> MCP capability  |----> provenance receipt
                    +---------+----------+
                              |
          +-------------------+-------------------+
          |                   |                   |
          v                   v                   v
  working tree         session/repo/       pwplan-core reference UI
                       semantic state       over direct-identifier
                                            key tripwires

pwos-core supplies reusable ingress, tool-gate, confirmation, audit, and
workflow primitives at the enforcement points above; it is not a late serial step.

shard-core recovery ceremony stays outside the normal agent loop.
every output crosses one named surface boundary: local proof, public OSS,
authenticated live app, or human-service workflow.
human owners approve, verify, stop/revoke, recover, and handle incidents.
```

This is a responsibility map, not a claim that every repository is installed in one process.

## What each layer owns

| Layer | Reference | Owns | Does not own |
| --- | --- | --- | --- |
| Learning entryway | `pw-learnai` | Explanations, exercises, client-only simulators, notebook bundles | Runtime execution, secrets, client data |
| Intent and control plane | `pwcli-core` | Intent schemas, adapter declarations, side-effect levels, approval and provenance contracts | The model loop or shell |
| Agent runtime | Claude Agent SDK or another runtime | Tool loop, context management, streaming, sessions, hooks, subagents, MCP connection | Firm policy merely because it can call a hook |
| Capability plane | `nexus-core` | Public-safe analytical and MCP capabilities | Client identity or final personalized advice |
| Planning reference UI | `pwplan-core` | Planning inputs and result rendering over schemas that reject named direct-identifier keys | De-identification, identity mapping, raw household data, compliance trail |
| Governance substrate | `pwos-core` | Reusable PII, audit, confirmation, tool-tier, and workflow primitives | A turnkey production compliance program |
| Protected recovery | `shard-core` | Authenticated encryption, threshold recovery, fail-closed file handling | Agent memory, API-key brokering, or an independent security audit |
| Durable knowledge | Provider-neutral boundary | Approved facts, provenance, retrieval, retention, deletion | Blindly persisting full transcripts or secrets |
| Human system | Named people and roles | Goals, exceptions, judgment, approvals, accountability, incident response | Delegating accountability to an AI label |

Treat semantic memory as a provider-neutral boundary in public designs. Do not publish private implementation details or make a private component a hidden prerequisite for an open learning path.

## Reuse the agent loop; govern the envelope

Anthropic's Agent SDK exposes the same general loop, built-in tools, context management, permissions, hooks, subagents, MCP connections, and sessions used by Claude Code. The Python and TypeScript SDKs also bundle the required Claude Code binary.

A minimal call is small:

```python
import asyncio
from claude_agent_sdk import ClaudeAgentOptions, query


async def main():
    async for message in query(
        prompt="Review this repository. Do not edit.",
        options=ClaudeAgentOptions(
            allowed_tools=["Read", "Glob", "Grep"],
            disallowed_tools=["Edit", "Write", "Bash"],
        ),
    ):
        print(message)


asyncio.run(main())
```

The short example is not the architecture. The architecture is what surrounds it:

1. Compile the request into a declared intent and side-effect level.
2. Classify the data before it enters a prompt, tool, log, or memory store.
3. Select a runtime adapter whose capabilities match the task.
4. Restrict tool availability and apply deny rules.
5. Use hooks for deterministic pre-tool checks.
6. Route unresolved calls to an interactive approval callback.
7. Isolate the working directory and network according to the threat model.
8. Verify the result with an independent command or reviewer.
9. Emit a content-minimized execution and provenance receipt.

`allowed_tools` / `allowedTools` is an auto-approval list, not a complete tool-removal mechanism. Use the SDK's tool configuration and `disallowed_tools` / `disallowedTools` when a tool must not be available.

## Concrete CLI and adapter structure

Keep executable work in `pwcli-core`, not in this client-only learning repo. The complete structure is phased: the first milestone implements a one-shot adapter and shared contracts; the REPL, MCP, remote, and hosted-service folders remain explicit future boundaries rather than invisible scope.

```text
examples/claude-agent-sdk/
├── README.md
├── docs/
│   ├── architecture.md
│   ├── auth.md
│   ├── permissions-and-hooks.md
│   ├── mcp.md
│   ├── remote.md
│   └── threat-model.md
├── contracts/
│   ├── adapter-profile.json
│   ├── redaction-policy.json
│   ├── synthetic-task.json
│   └── receipt.schema.json
├── python/
│   ├── pyproject.toml
│   ├── src/pwcli_claude_adapter/
│   │   ├── __main__.py
│   │   ├── cli.py
│   │   ├── repl.py
│   │   ├── config.py
│   │   ├── auth.py
│   │   ├── intent.py
│   │   ├── policy.py
│   │   ├── hooks.py
│   │   ├── runtime.py
│   │   ├── mcp.py
│   │   ├── approvals.py
│   │   ├── receipts.py
│   │   ├── sessions.py
│   │   ├── sandbox.py
│   │   ├── remote.py
│   │   └── observability.py
│   └── tests/
│       ├── test_contract_parity.py
│       ├── test_policy_fail_closed.py
│       ├── test_redaction.py
│       └── test_synthetic_one_shot.py
└── typescript/
    ├── package.json
    ├── src/
    │   ├── index.ts
    │   ├── cli.ts
    │   ├── repl.ts
    │   ├── config.ts
    │   ├── auth.ts
    │   ├── intent.ts
    │   ├── policy.ts
    │   ├── hooks.ts
    │   ├── runtime.ts
    │   ├── mcp.ts
    │   ├── approvals.ts
    │   ├── receipts.ts
    │   ├── sessions.ts
    │   ├── sandbox.ts
    │   ├── remote.ts
    │   └── observability.ts
    └── test/
        ├── contract-parity.test.ts
        ├── policy-fail-closed.test.ts
        ├── redaction.test.ts
        └── synthetic-one-shot.test.ts
```

Python and TypeScript should express the same policy and receipt contracts. Language-specific code should be an adapter detail, not a second architecture.

The initial CLI surface should be concrete but narrow:

```text
pwcli-agent run "review this repository"   # one shot
pwcli-agent repl                           # later milestone
pwcli-agent resume <session-id>            # later milestone
pwcli-agent config show
pwcli-agent doctor                         # auth, sandbox, runtime, MCP readiness
```

Authentication selection, permission/hook composition, MCP configuration, session retention, sandbox enforcement, remote-client authorization, and content-minimized observability each have their own module. Cost and token metadata may be recorded; prompts, file contents, credentials, and raw sensitive tool results do not belong in the receipt.

## Authentication: separate official products from third-party apps

There are two valid but different paths:

| Use case | Authentication |
| --- | --- |
| A third-party application built with the Claude Agent SDK | `ANTHROPIC_API_KEY` or an officially documented cloud-provider path |
| Official Claude Code used by an eligible subscriber | Claude's supported login and subscription flow |

Anthropic's current Agent SDK documentation says third-party developers may not offer claude.ai login or subscription rate limits in their products unless Anthropic has approved it. Do not teach users to extract credential files, copy OAuth tokens, or place subscription credentials behind an unofficial compatibility proxy.

That boundary is not just billing hygiene. Credential extraction makes rotation, revocation, user consent, supportability, and incident response ambiguous.

Keep project-owned branding too. Anthropic permits references such as "Claude Agent" but says third-party products should not present themselves as Claude Code.

## Permissions are not isolation

Permission rules decide whether a requested action is allowed. They do not turn a host into a sandbox.

Use layered controls:

```text
model request
   -> pre-tool hook
   -> deny rule
   -> ask rule
   -> permission mode
   -> allow rule
   -> human callback when unresolved
   -> sandbox / container / VM enforcement
   -> constrained credential and network boundary
```

A useful default progression is:

1. Read-only tools, no network.
2. File edits with review.
3. Bounded shell commands inside a sandbox.
4. MCP tools with explicit data classes and side-effect declarations.
5. Remote or production actions only through a separate approval and credential boundary.

## Sessions, repo state, and semantic memory are different

| State type | Example | What it retains | Primary risk |
| --- | --- | --- | --- |
| Runtime session | Agent SDK JSONL session | Prompts, tool calls, results, responses | Sensitive transcript retention |
| Working tree | Files changed by the agent | Actual system state | Conflicts, destructive edits |
| Repo memory | `AGENTS.md`, `CLAUDE.md`, `CURRENT-STATE.md` | Reviewed instructions and durable project facts | Stale or decorative guidance |
| Semantic memory | External graph or retrieval store | Selected facts and links across sessions | Poisoned, over-retained, or untraceable claims |

Resuming a session restores conversation context; it does not restore the filesystem. A semantic memory write should therefore be a declared side effect with provenance, redaction, retention, and deletion rules.

Never use "memory" as shorthand for "store everything."

## MCP is a capability boundary

MCP makes tools discoverable and callable. It does not decide whether a tool is appropriate for a task.

Every connected server should declare:

- transport and authentication;
- available tools;
- read, propose, approve, or execute side-effect level;
- permitted data classes;
- whether user interaction is required;
- expected source and provenance fields;
- timeout, rate-limit, and failure behavior;
- which human owns an exception.

`nexus-core` is useful as a capability-layer reference because it separates public analytical contracts from identity-bearing production workflows. Planning schemas that reject named direct-identifier keys are tripwires, not proof of anonymity: ages, balances, allocations, and filing status may still be sensitive or indirectly identifying. Public learning paths use synthetic values. Any real derived data needs a separate re-identification, source-rights, retention, provider-terms, and approval review.

## Subagents are reviewers, not automatic truth

Subagents help when tasks are independent and their context should stay isolated. A practical review set is:

- correctness and contract reviewer;
- security and trust-boundary reviewer;
- accessibility and human-workflow reviewer;
- source and claim verifier.

Keep mutation owned by one primary agent or one worktree. Review agents should default to read-only and return findings with file and evidence references. A green reviewer label is not sufficient; the primary operator must adjudicate the actual findings.

## Remote access: start with an existing secure control plane

For official Claude Code, Remote Control keeps tool execution on the local machine and uses outbound HTTPS rather than opening an inbound port. Anthropic stores the session transcript—including messages, responses, and tool activity—on its servers, and organizations using Zero Data Retention cannot enable the feature. It requires an eligible claude.ai subscription login and is disabled when a custom `ANTHROPIC_BASE_URL` proxy is used. Review transcript sensitivity and retention before enabling it.

For a provider-neutral terminal workflow, Tailscale SSH plus `tmux` or `zellij` is a simpler first step than writing a websocket daemon. Tailscale SSH can centralize identity-based access rules, WireGuard transport, reauthentication, and session recording. It governs SSH traffic arriving through the tailnet; ordinary SSH on other interfaces can remain reachable. Validate host firewall or cloud security-group rules close public port 22 before calling the path tailnet-only. Test revocation and recording policy; do not expose a web terminal to the public internet by default.

If an Agent SDK service is later hosted:

- one session maps to a long-lived subprocess and local transcript state;
- each concurrent session needs an isolated working directory;
- disable inherited filesystem settings with `setting_sources=[]` in Python or `settingSources: []` in TypeScript;
- set `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1` and use a distinct `CLAUDE_CONFIG_DIR` per tenant;
- define transcript persistence explicitly and isolate filesystem, egress, and credentials per tenant;
- a shared container or process is not, by itself, a tenant boundary;
- authentication for the remote client is separate from model-provider authentication;
- a websocket transport is not an authorization policy.

## Human systems integration

The system is incomplete until decision rights are explicit.

| Role | Owns | Required evidence |
| --- | --- | --- |
| Requester | Goal, priority, success condition | Bounded task statement |
| Operator | Scope, runtime mode, tool selection | Run plan and permission profile |
| Maintainer | Code ownership and merge decision | Diff, build, review findings |
| Security or privacy owner | Data classes, isolation, credential boundary | Threat model and exception record |
| Compliance or domain reviewer | Regulated interpretation and retention | Review record and source set |
| Incident owner | Stop, revoke, recover, notify | Run receipt and recovery procedure |

The same person can hold several roles in a small project. The roles still need to be named.

For Protocol Wealth, the public `-core` repositories are inspectable foundations. `pwos.app` is the adviser operating surface and `pwportal.app` is the client portal. They are not open-source demos. Protocol Wealth's website states that technology supports research, organization, monitoring, and documentation while human fiduciaries remain accountable for client-facing advice. Advisory or consulting work exists under a human service relationship; cloning a repository does not create that relationship.

## Implementation order

1. **Learn the loop.** One repo, one task, one verification command.
2. **Complete the security prerequisite.** Use Module 15 to map untrusted content, secrets, tools, and egress.
3. **Declare the envelope.** Intent, tools, side effects, data classes, approvals, receipt.
4. **Add the SDK adapter.** One-shot first, multi-turn after the contract is stable.
5. **Add deterministic controls.** Hooks, deny rules, sandbox, network boundary.
6. **Add MCP deliberately.** One server and one bounded use case.
7. **Add adversarial review.** Read-only specialist reviewers with finding adjudication.
8. **Add durable knowledge.** Reviewed repo state before semantic memory.
9. **Add remote access.** Official Remote Control or firewall-verified tailnet SSH before a custom daemon.
10. **Add production hosting only when needed.** Isolate sessions, settings, transcripts, egress, and credentials; define incident ownership.

## What this module does not cover

- It does not turn `pw-learnai` into an agent runtime.
- It does not claim the public repositories reproduce Protocol Wealth's private production estate.
- It does not make `pwos-core` a complete compliance program.
- It does not make `shard-core` audited cryptographic software.
- It does not make agent session transcripts a safe long-term memory store.
- It does not recommend bypassing vendor authentication, licensing, branding, or subscription terms.
- It does not replace human engineering, security, legal, compliance, or fiduciary judgment.
