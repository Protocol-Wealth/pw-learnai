# 16 - Exercises

Each exercise produces an artifact another human or agent can review.

## Exercise 1: Draw the responsibility map

Choose one candidate agent system. Fill in every row.

| Responsibility | Owner | Component | Evidence | Failure response |
| --- | --- | --- | --- | --- |
| User intent | | | | |
| Runtime loop | | | | |
| Tool availability | | | | |
| Data classification | | | | |
| Approval | | | | |
| Filesystem isolation | | | | |
| Network isolation | | | | |
| Session retention | | | | |
| Durable knowledge | | | | |
| Verification | | | | |
| Incident stop/revoke | | | | |

Fail the exercise if one component is described as owning everything.

## Exercise 2: Write the adapter contract before code

Create a synthetic adapter profile with these fields:

```yaml
runtime: claude-agent-sdk-python
execution: local
task: read_only_repo_review
data_classes:
  allowed: [public_source, repository_source]
  denied: [credential, personal_data, client_data]
tools:
  available: [Read, Glob, Grep]
  denied: [Edit, Write, Bash]
approval:
  required_for: [file_write, shell, network, memory_write]
isolation:
  filesystem: repository_read_only
  network: denied
receipt:
  include: [task_id, source_refs, tool_names, verification, reviewer]
  exclude: [prompt_body, file_contents, credentials]
```

Then answer:

1. Which field is enforced by the runtime?
2. Which field needs a hook?
3. Which field needs an OS sandbox or container?
4. Which field needs a human?
5. Which field is only documentation unless code validates it?

## Exercise 3: Separate the four state types

For a real or synthetic project, list what belongs in:

- the runtime session;
- the working tree;
- repo memory files;
- a semantic memory store.

For every semantic-memory candidate, record:

```text
Claim:
Source:
Reviewed by:
Data class:
Retention:
Deletion trigger:
Contradiction/update rule:
```

Reject any item whose source or deletion rule is unknown.

## Exercise 4: Design an adversarial review panel

Define three read-only reviewers:

| Reviewer | Tools | Question | Required evidence |
| --- | --- | --- | --- |
| Contract reviewer | Read, Glob, Grep | Does code match declared intent, side effects, and schemas? | File/line findings |
| Security reviewer | Read, Glob, Grep | Can untrusted input reach a write, secret, or network sink? | Exploit path or explicit non-finding |
| Human-workflow reviewer | Read, Glob, Grep | Is the approval owner able to understand and stop the action? | Approval and recovery walkthrough |

The primary operator must classify every finding as:

- fixed;
- accepted risk with owner;
- false positive with evidence;
- deferred to a linked issue.

Do not reduce the output to one green/red score.

## Exercise 5: Threat-model remote access

Compare three paths:

| Path | Authentication | Inbound exposure | Session state | Human approval surface |
| --- | --- | --- | --- | --- |
| Official Claude Code Remote Control | | | | |
| Tailscale SSH + terminal multiplexer | | | | |
| Custom Agent SDK websocket daemon | | | | |

For the custom daemon, name controls for:

- remote-client authentication;
- authorization per repository;
- CSRF/replay resistance where relevant;
- session-to-worktree isolation;
- provider credential handling;
- transcript retention;
- network egress;
- process termination;
- audit and incident response.

If the custom path has more unknowns than useful differentiators, choose an existing path.

## Exercise 6: Audit public and private claims

Build a source table before describing a system publicly:

| Claim | Public source | Reviewed date | Safe wording | Private detail excluded |
| --- | --- | --- | --- | --- |
| What the OSS repo implements | | | | |
| What the live app does | | | | |
| What the firm or operator does | | | | |
| What remains a roadmap item | | | | |

Use current READMEs and official public pages. Do not turn a private repository, deployment configuration, credential flow, or client workflow into public curriculum.

## Exercise 7: Create the implementation issue

Use this issue body:

```text
Goal:
- one user-visible outcome

Runtime:
- chosen SDK or CLI
- why it is reused instead of rebuilt

Control plane:
- intent schema
- data classes
- side-effect levels
- approval rules
- receipt schema

In scope:
- one-shot or multi-turn
- exact tools
- one verification path

Out of scope:
- subscription credential reuse
- production data
- multi-tenant hosting
- custom remote daemon
- semantic memory unless explicitly required

Adversarial review:
- contract reviewer
- security reviewer
- human-workflow reviewer

Acceptance:
- commands
- evidence
- remaining risk
```

## Agent task

```text
Read Module 16 and the Protocol Wealth system-of-systems lab.

Goal: produce a read-only architecture audit for one proposed agent application.

Required output:
1. responsibility map;
2. data-flow and trust-boundary map;
3. runtime adapter contract;
4. state and retention map;
5. human decision-rights table;
6. minimum implementation order;
7. claims that need current-source verification.

Do not edit code. Do not assume allowed tools are unavailable tools. Do not suggest extracting or proxying subscription credentials. Treat remote access, semantic memory, and production hosting as separate decisions.
```
