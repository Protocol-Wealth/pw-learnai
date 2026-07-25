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
