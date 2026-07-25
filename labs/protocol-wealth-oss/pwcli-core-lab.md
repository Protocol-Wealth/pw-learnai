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

## Proposed Claude Agent SDK example

Tracked in [`pwcli-core` issue #6](https://github.com/Protocol-Wealth/pwcli-core/issues/6):

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

The two language implementations should consume equivalent synthetic contracts and emit equivalent receipts. The first milestone is a one-shot adapter; REPL, resume, MCP, sandbox, remote, and hosted-service behavior remain separate phases with their own exit evidence.

## Minimal runtime call

The runtime adapter should remain thin:

```python
async for message in query(
    prompt=compiled_prompt,
    options=ClaudeAgentOptions(
        cwd=isolated_worktree,
        allowed_tools=["Read", "Glob", "Grep"],
        disallowed_tools=["Edit", "Write", "Bash"],
        hooks=policy_hooks,
        can_use_tool=approval_callback,
    ),
):
    handle_message(message)
```

The exact SDK type signatures change. Verify them against the current official reference before implementation.

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
