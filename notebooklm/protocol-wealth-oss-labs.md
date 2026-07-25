# pw-learnai — Protocol Wealth OSS Labs

> Applied labs connecting learning, intent, capabilities, planning, governance, recovery, and human accountability across the Protocol Wealth public OSS surface.

Source: https://github.com/Protocol-Wealth/pw-learnai
License: MIT
Generated: 2026-07-25

## Labs included

- protocol-wealth-oss/README.md
- protocol-wealth-oss/system-of-systems-lab.md
- protocol-wealth-oss/pwcli-core-lab.md
- protocol-wealth-oss/shard-core-lab.md
- protocol-wealth-oss/nexus-core-lab.md
- protocol-wealth-oss/pwos-core-lab.md
- protocol-wealth-oss/pwplan-core-lab.md

---


# ============================================
# protocol-wealth-oss/README.md
# ============================================

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



# ============================================
# protocol-wealth-oss/system-of-systems-lab.md
# ============================================

# Protocol Wealth Agent System-of-Systems Lab

How the public learning, control-plane, capability, planning, governance, and recovery repositories relate to live private surfaces and accountable humans.

Reviewed against public repositories and Protocol Wealth's public website on 2026-07-25.

## The map

```text
LEARN
pw-learnai
    |
    v
DESCRIBE INTENT AND POLICY
pwcli-core
    |
    v
SELECT GOVERNANCE PRIMITIVES
pwos-core reference packages
    |
    v
CONFIGURE + ENFORCE
named operator/security owner + host policy
    |
    v
RUN INSIDE HOST ISOLATION
Claude Agent SDK / another runtime / a CLI coding agent
    |
    +--> pre/post-tool gates --> nexus-core capability contract
    +--> separate reference UI --> pwplan-core
    +--> working-tree state
    +--> declared session / repo / semantic state
    |
    v
REDACT EGRESS + EMIT MINIMIZED RECEIPT
configured gates + named independent verifier
    |
    +--> protected recovery ceremony outside the normal loop: shard-core
    |
    v
SURFACE BOUNDARY
local proof / public OSS / authenticated live app / human service
    |
    v
HUMAN DECISION RIGHTS
operator / effect approver / verifier / stop-revoke owner / incident owner
```

Each arrow is a contract or review boundary, not permission to connect every component automatically. `pwos-core` supplies reusable primitives; the named operator or security owner configures enforcement. Governance is cross-cutting: classification happens before prompt ingress, policy gates tool calls, host controls surround execution, and redaction/receipts follow egress.

## Public repository responsibilities

| Repository | Public role | Safe learning use | Boundary |
| --- | --- | --- | --- |
| `pw-learnai` | Learning front door | Modules, exercises, offline browser tools | No runtime calls, secrets, telemetry, or private data |
| `pwcli-core` | Intent and runtime-adapter control-plane specification | Design schemas, approvals, redaction, receipts | Not an agent runtime |
| `nexus-core` | Analytical engine and MCP capability layer | Inspect public-safe tool and data contracts | Not identity or final personalized advice |
| `pwplan-core` | Planning reference UI with direct-identifier key tripwires | Study schema enforcement using synthetic inputs | Not de-identification, raw household ingestion, or private production workflow |
| `pwos-core` | Governance and safety primitives | Study PII, audit, confirmation, and tool tiers | Not turnkey compliance or the live firm OS |
| `shard-core` | Protected-byte and threshold-recovery utility | Synthetic recovery rehearsal | Prerelease and not independently audited |

## Publication boundary

Public architecture should define a provider-neutral durable-knowledge interface:

- accepted data classes;
- source and provenance requirements;
- promotion and human-review rules;
- contradiction/update semantics;
- retention and deletion;
- tenant and identity boundary;
- export and incident handling.

Do not publish private implementation details or imply that a private component is an open dependency.

## Live surfaces are not the public repos

| Surface | Publicly described role | Relationship to open source |
| --- | --- | --- |
| `pwos.app` | Protocol Wealth adviser operating surface | Uses firm systems and public patterns; not the `pwos-core` package workspace itself |
| `pwportal.app` | Protocol Wealth client portal and client-facing dashboard | Authenticated client surface; not a public learning demo |
| `nexusmcp.site` | PW Nexus API/MCP surface | Live capability surface with its own access, privacy, rate-limit, and terms boundaries |
| `protocolwealthllc.com` | Firm, process, services, disclosures, privacy, and terms | Canonical public description of the human service and legal boundary |

The Protocol Wealth website describes technology as a proof layer supporting research, organization, monitoring, and documentation. It also says human fiduciaries remain accountable for client-facing advice and AI does not autonomously execute final investment decisions or control assets.

The open repositories do not create an advisory, consulting, support, or software-service relationship. Protocol Wealth's open-source page says the public code is a foundation and that client data, specific advice, and security-sensitive internal infrastructure stay private.

Every architecture must name one consumer-surface class and its owners:

| Surface | Required boundary evidence |
| --- | --- |
| Local proof | Operator, synthetic/public data, local stop path |
| Public OSS artifact | Public user population, source/license rights, maintainer, no-private-parity statement |
| Authenticated live app | Product owner, user population, data controller, support and incident path |
| Human-service workflow | Accountable professional, review record, service/legal boundary, escalation path |

## End-to-end artifact flow

```text
1. Request
   human goal + constraints + success condition

2. Intent
   task kind + data class + side-effect level + candidate capability

3. Run plan
   runtime + tools + isolation + approvals + verification

4. Execution
   tool calls + bounded results + explicit human interruptions

5. Evidence
   source refs + diff + build/test result + reviewer findings

6. Receipt
   task id + policy version + tool names + approvals + outcome

7. Durable state
   reviewed repo docs or approved knowledge item, never blind transcript dumping

8. Human decision
   merge, publish, advise, reject, defer, revoke, or recover
```

## Human systems integration

For each workflow, fill in the decision rights:

| Event | Proposes | Approves | Executes | Verifies | Can stop/revoke |
| --- | --- | --- | --- | --- | --- |
| Read public source | | | | | |
| Edit repository | | | | | |
| Run shell command | | | | | |
| Call remote MCP tool | | | | | |
| Write durable memory | | | | | |
| Merge pull request | | | | | |
| Publish/deploy | | | | | |
| Process sensitive data | | | | | |
| Recover protected material | | | | | |
| Deliver client-facing conclusion | | | | | |

Fail the design if "AI" appears as the final approver for a consequential action.

## Reference build sequence

| Stage | Build | Exit evidence |
| --- | --- | --- |
| 0 | One bounded CLI-agent task | Diff and one verification command |
| 1 | Module 15 threat-boundary pass | Untrusted content, secret, tool, and egress map |
| 2 | `pwcli-core` adapter profile | Valid intent, policy, and receipt fixtures |
| 3 | One official Agent SDK adapter | Read-only one-shot run |
| 4 | Hooks, deny rules, sandbox | Blocked unsafe fixtures |
| 5 | One MCP server | Declared tools, data classes, timeouts, and sources |
| 6 | Read-only adversarial reviewers | Adjudicated findings |
| 7 | Repo state and session resume | Retention and restore behavior documented |
| 8 | Optional durable knowledge | Promotion, provenance, and deletion tests |
| 9 | Remote access | Authenticated, retention-reviewed, policy-tested, revocable path |
| 10 | Hosted or multi-tenant service | Per-tenant settings, config, workdir, transcript, egress, process isolation, and incident runbook |

## Systems-engineering review questions

1. Which component owns each requirement?
2. Which interfaces are schemas and which are only prose?
3. Which controls fail closed?
4. Which failures are observable without logging sensitive content?
5. Which assumptions depend on a specific provider?
6. Which state can be reconstructed and which must be backed up?
7. Which human can stop the process?
8. Which public claim can be verified from a live source?
9. Which capability is deferred rather than quietly implied?
10. What breaks when one subsystem is unavailable?

## Agent task

```text
Read this lab and Module 16.

Produce a read-only system architecture for one synthetic agent workflow.
Map every requirement to exactly one primary owner and list secondary controls.
Separate open-source references, live private surfaces, and human services.
Treat session state, repo state, semantic memory, and recovery material as
different data classes.

Return:
- context and boundary diagram;
- responsibility matrix;
- data-flow and retention map;
- tool and permission profile;
- failure and recovery paths;
- adversarial review assignments;
- phased implementation with exit evidence.

Do not edit. Do not use private repository details. Do not suggest subscription
credential extraction or an unauthenticated remote daemon.
```

## What this lab does not do

- It does not claim all components are already integrated.
- It does not expose or describe private source code.
- It does not make a public repository equivalent to a live regulated service.
- It does not turn a technical receipt into regulatory approval.
- It does not replace the humans accountable for engineering, security, compliance, or fiduciary decisions.



# ============================================
# protocol-wealth-oss/pwcli-core-lab.md
# ============================================

# PWCLI Core Lab

How to place a stable intent, approval, redaction, and provenance control plane around an existing agent runtime.

## Source repo

[`Protocol-Wealth/pwcli-core`](https://github.com/Protocol-Wealth/pwcli-core)

`pwcli-core` is currently an open specification and set of schemas, context packs, prompts, and browser examples. It is not an executable coding-agent runtime. That is a useful boundary: it can govern Claude Agent SDK, OpenAI Agents SDK, LangGraph, MCP, A2A, Goose, Claude Code, or another runtime without cloning all of them.

Reviewed against the public repository and current Anthropic Agent SDK documentation on 2026-07-25.

## The control-plane claim

```text
human request
    |
    v
intent.schema.json
    |
    +--> registered primitive / fallback route
    +--> side-effect level
    +--> source and rights context
    +--> runtime-adapter profile
    +--> redaction and approval policy
    |
    v
existing runtime
    |
    v
execution + provenance receipt
```

The runtime owns loops, tools, streaming, sessions, and handoffs. `pwcli-core` owns the contract that decides whether and how a runtime may be used.

## Shipped Claude Agent SDK reference adapters

[`pwcli-core` PR #7](https://github.com/Protocol-Wealth/pwcli-core/pull/7)
closed [issue #6](https://github.com/Protocol-Wealth/pwcli-core/issues/6)
with equivalent governed read-only Python and TypeScript reference adapters:

```text
examples/claude-agent-sdk-adapters/
├── README.md
├── fixtures/
│   ├── intent-read-only-review.json
│   ├── redaction-public-repo.json
│   ├── run-receipt.json
│   ├── runtime-claude-agent-sdk-python.json
│   └── runtime-claude-agent-sdk-typescript.json
├── python/
│   ├── pyproject.toml
│   ├── sdk_contract_smoke.py
│   ├── src/pwcli_claude_adapter/
│   │   ├── __init__.py
│   │   ├── adapter.py
│   │   └── cli.py
│   └── tests/test_adapter.py
└── typescript/
    ├── package-lock.json
    ├── package.json
    ├── src/
    │   ├── adapter.ts
    │   └── cli.ts
    ├── tests/adapter.test.ts
    └── tsconfig.json
```

The two implementations consume shared intent, redaction, and receipt contracts
plus equivalent language-specific runtime profiles. They emit
content-minimized receipts with equivalent policy evidence. Their tests use
injected fake query functions, so validation needs no credential, SDK package,
model call, or network access. The shipped milestone is a one-shot public-repo
review adapter; edit/write tools, interactive approvals, REPL/resume, MCP,
subagents, memory, sandbox provisioning, remote access, and hosted isolation
remain deferred behind explicit exit evidence.

## Minimal runtime call

The SDK call remains behind the deterministic policy boundary:

```python
options = ClaudeAgentOptions(
    cwd=config.cwd,
    tools=list(READ_ONLY_TOOLS),
    allowed_tools=list(READ_ONLY_TOOLS),
    disallowed_tools=list(DISALLOWED_TOOLS),
    permission_mode="dontAsk",
    system_prompt=UNTRUSTED_DATA_INSTRUCTION,
    setting_sources=[],
    max_turns=config.max_turns,
    env={
        **runtime_env,
        "CLAUDE_CONFIG_DIR": transcript_dir,
        "CLAUDE_CODE_DISABLE_AUTO_MEMORY": "1",
    },
    hooks={
        "PreToolUse": [HookMatcher(matcher=None, hooks=[pre_tool_use])],
        "PostToolUse": [HookMatcher(matcher=None, hooks=[post_tool_use])],
    },
)

async for message in query(prompt=redacted_prompt, options=options):
    collect_message(message)
```

See the
[`pwcli-core` adapter source](https://github.com/Protocol-Wealth/pwcli-core/tree/main/examples/claude-agent-sdk-adapters)
for the exact current implementation. SDK type signatures change; verify them
against the current official reference before extending the adapter.

## Permission boundary

The adapter must distinguish:

- tools available to the model;
- allow rules that auto-approve a call;
- deny rules that block a call;
- hooks that make deterministic pre-tool decisions;
- unresolved calls that require a human callback;
- sandbox, filesystem, network, and credential controls enforced outside the model.

`allowed_tools` does not by itself remove every unlisted tool. A read-only profile should explicitly set the available tool set or deny mutation tools.

## Authentication boundary

For a third-party Agent SDK application:

- use `ANTHROPIC_API_KEY` or a documented cloud-provider authentication path;
- keep credentials out of prompts, logs, receipts, and semantic memory;
- do not extract or reuse Claude subscription credentials;
- do not put a Max/Pro OAuth token behind an unofficial compatibility proxy;
- do not brand the application as Claude Code.

Official Claude Code login and Remote Control are separate supported product paths.

## Session and memory boundary

The example should treat these as separate adapters:

| State | Default handling |
| --- | --- |
| SDK session transcript | Runtime-owned; retention is explicit |
| Working tree | One isolated directory per concurrent writer |
| Repo state docs | Human-reviewed and committed |
| Semantic memory | Optional external side effect with provenance and deletion |

An execution receipt should reference a session ID when needed, but it should not copy the full transcript.

The shipped TypeScript adapter sets `persistSession: false`. The Python SDK
always persists sessions, so the Python adapter uses a per-run temporary
`CLAUDE_CONFIG_DIR`, disables automatic memory, and removes the directory when
the query closes. Neither adapter puts transcript content into its receipt.

## Browser exercise

Use the Agent Systems Architect:

1. Select a Python or TypeScript Agent SDK runtime.
2. Keep the data boundary public or synthetic.
3. Select a read-only or edit-with-approval authority.
4. Add MCP only after the base adapter is coherent.
5. Compare session state, repo state, and semantic-memory choices.
6. Copy the architecture plan and inspect every deferred capability.

## Adversarial review exercise

Before implementing the adapter, assign read-only reviewers:

```text
Contract reviewer:
- Does the adapter conform to pwcli intent, runtime-adapter, redaction,
  execution, and provenance schemas?

Security reviewer:
- Can untrusted source text cause a write, network request, credential
  exposure, or persistent memory write?

Human-workflow reviewer:
- Can the operator understand the proposed side effect, approve the exact
  payload, stop the run, and recover from failure?
```

Record findings individually. Do not replace them with a single aggregate status.

## Review checklist

| Check | Pass/fail |
| --- | --- |
| Runtime loop is reused rather than reimplemented | |
| Python and TypeScript share one contract | |
| Tool availability and auto-approval are distinct | |
| Permission prompts are not described as a sandbox | |
| Redaction runs before prompt, tool, log, and memory egress | |
| Mutation is tied to an exact approval payload | |
| Session transcript is distinct from semantic memory | |
| Receipt excludes secrets and raw sensitive content | |
| Subscription credential extraction is explicitly out of scope | |
| Remote-client auth is separate from model-provider auth | |

## What this lab does not do

- It does not run the Agent SDK from `pw-learnai`.
- It does not add a backend or credentials to the learning site.
- It does not turn `pwcli-core` into a general-purpose runtime framework.
- It does not claim parity with Claude Code's product UI or service.
- It does not approve production or multi-tenant hosting.



# ============================================
# protocol-wealth-oss/shard-core-lab.md
# ============================================

# Shard Core Lab

How authenticated encryption, threshold recovery, and human ceremony fit into an agent system without becoming an all-purpose secret store.

## Source repo

[`Protocol-Wealth/shard-core`](https://github.com/Protocol-Wealth/shard-core)

`shard-core` protects sensitive bytes and recovery phrases with authenticated encryption, Shamir threshold recovery, and fail-closed file handling.

Reviewed against the public README on 2026-07-25.

> Security boundary: the current `0.2.0rc1` release is a prerelease and has not received an independent security audit. Tests and AI-assisted review are not a security audit. Use synthetic material for evaluation.

## The cryptographic shape

```text
plaintext
   |
   +--> random data-encryption key (DEK)
            |
            +--> ChaCha20-Poly1305 ciphertext
            |
            +--> Shamir key shares

each protected artifact = one key share + the authenticated ciphertext
```

The plaintext is not Shamir-split. The data-encryption key is split, and the reconstructed key must pass AEAD authentication. That makes a wrong or corrupt share combination fail closed instead of producing plausible garbage.

## Where it belongs

| Use | Fit |
| --- | --- |
| Offline recovery ceremony for synthetic bytes | In scope for this lab |
| Rehearsing holder roles, manifests, corruption, and recovery | In scope |
| Approved sensitive bytes or a real recovery phrase | Outside this curriculum; requires independent cryptographic review, approved threat model, validated ceremony, and accountable risk acceptance |
| Agent session memory | Not in scope |
| Live API-key broker for an SDK | Not in scope |
| Automatic agent access to production secrets | Not in scope |
| Substitute for a managed secret manager or HSM | Not established by this repo |
| Proof of independent cryptographic assurance | Not in scope |

## Agent-system boundary

An agent should not silently invoke recovery.

```text
agent proposes a recovery task
    |
    v
human confirms purpose, holders, threshold, destination, and offline boundary
    |
    v
operator runs shard-core outside the agent's normal writable workspace
    |
    v
human verifies result and removes temporary plaintext according to procedure
```

The useful integration is the ceremony and receipt, not direct secret access.

## Safety defaults worth studying

- Explicit output or deliberate stdout is required for sensitive recovery.
- Existing outputs are refused unless overwrite is explicit.
- Final-component symlinks are refused.
- Multi-file output is preflighted before writes.
- New secret files and private directories use restrictive modes.
- Conflicting or ambiguous share sets fail.
- Recovery work is bounded.
- Manifests contain artifact hashes and set metadata, not plaintext hashes.

These controls still assume a trusted host and controlled parent directories.

## Offline exercise

Do this only in a separate `shard-core` clone with synthetic text:

1. Create a file containing `synthetic recovery rehearsal only`.
2. Protect it as a 2-of-3 set.
3. Verify the complete set.
4. Recover with shares 1 and 3.
5. Compare the recovered bytes.
6. Corrupt a copy of one share and confirm the workflow fails or selects a valid bounded combination as documented.
7. Record which holder, storage, transport, and incident assumptions were not exercised.

Do not place real recovery phrases, client data, private keys, API keys, or production credentials in the exercise.

## Human ceremony artifact

Fill this in for the synthetic rehearsal. A completed table is not approval for non-synthetic use.

| Decision | Owner | Evidence |
| --- | --- | --- |
| Asset being protected | | |
| Threats in scope | | |
| Threshold and share count | | |
| Holder independence | | |
| Storage locations | | |
| Transport method | | |
| Recovery authorization | | |
| Trusted recovery host | | |
| Plaintext cleanup | | |
| Rehearsal frequency | | |
| Incident and revocation plan | | |
| Independent security review | | |

## Review checklist

| Check | Pass/fail |
| --- | --- |
| Material is synthetic | |
| Pre-release and audit status is visible | |
| AEAD and Shamir roles are described correctly | |
| Agent cannot autonomously recover or print secrets | |
| Output path and overwrite behavior are explicit | |
| Holder roles and recovery authorization are named | |
| Trusted-host assumption is recorded | |
| Recovery is rehearsed before relying on it | |

## What this lab does not do

- It does not execute cryptography in the browser.
- It does not ask for real sensitive material.
- It does not certify `shard-core` for production.
- It does not make threshold shares a replacement for identity, authorization, backup policy, or incident response.
- It does not connect recovery material to Claude, Codex, MCP, or semantic memory.



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
- A planning dispatch surface whose schema rejects named direct-identifier keys; public demos use synthetic ages, balances, allocations, and assumptions

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
| Planning | Synthetic retirement-planning tool discovery and direct-identifier-key tripwires |
| On-chain | Anonymous wallet, native-chain balance, Solana token price, vault discovery, LP analytics, and benchmark return series |
| Meta | Health and provider usage stats without keys or client data |

The hosted landing page still highlights the simple entrypoints (`/api/regime`, `/api/market/quote/{symbol}`, `/api/economic/{series_id}`, and `/mcp`), but the OpenAPI schema is the current source of truth for the broader surface.

## Browser exercise

Use the MCP Tool Planner in the interactive site.

Work through three scenarios:

| Scenario | Expected tool posture |
|----------|-----------------------|
| "What is the current macro regime?" | Public read-only, safe for hosted MCP |
| "Run a retirement projection with synthetic ages and balances" | Synthetic planning payload; passing the key-name tripwire does not prove anonymity |
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
- `POST /mcp/tools/{tool_id}` for planning tool dispatch; public learning examples remain synthetic

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
