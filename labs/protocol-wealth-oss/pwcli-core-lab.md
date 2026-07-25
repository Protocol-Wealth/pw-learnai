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
