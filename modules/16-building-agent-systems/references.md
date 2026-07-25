# 16 - References

Fast-moving tool and repository references reviewed on 2026-07-25. Re-check them before implementing authentication, permissions, hosting, or public capability claims.

## Claude Agent SDK

- **Anthropic.** [Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview). Current Python and TypeScript quickstarts, built-in tools, hooks, subagents, MCP, sessions, authentication boundary, branding, and terms.
- **Anthropic.** [How the agent loop works](https://code.claude.com/docs/en/agent-sdk/agent-loop). Runtime loop, tool execution, and programmatic controls.
- **Anthropic.** [Configure permissions](https://code.claude.com/docs/en/agent-sdk/permissions). Permission evaluation order, deny and allow rules, modes, and runtime callbacks.
- **Anthropic.** [Handle approvals and user input](https://code.claude.com/docs/en/agent-sdk/user-input). Interactive tool approval and question flows.
- **Anthropic.** [Intercept and control agent behavior with hooks](https://code.claude.com/docs/en/agent-sdk/hooks). Deterministic pre/post-tool controls and lifecycle events.
- **Anthropic.** [Connect to external tools with MCP](https://code.claude.com/docs/en/agent-sdk/mcp). MCP transports, authentication, tool naming, allow rules, and failure handling.
- **Anthropic.** [Subagents in the SDK](https://code.claude.com/docs/en/agent-sdk/subagents). Programmatic definitions, isolation, tools, delegation, and result flow.
- **Anthropic.** [Work with sessions](https://code.claude.com/docs/en/agent-sdk/sessions). Continue, resume, fork, on-disk transcripts, and the distinction between conversation and filesystem state.
- **Anthropic.** [Hosting the Agent SDK](https://code.claude.com/docs/en/agent-sdk/hosting). Subprocess model, working directories, persistence, concurrency, and multi-tenant concerns.
- **Anthropic.** [Securely deploying AI agents](https://code.claude.com/docs/en/agent-sdk/secure-deployment). Isolation, least privilege, credential injection, network control, and defense in depth.
- **Anthropic.** [Continue local sessions with Remote Control](https://code.claude.com/docs/en/remote-control). Official remote workflow, eligibility, connection model, transcript handling, and proxy restrictions.
- **Anthropic.** [Python SDK source](https://github.com/anthropics/claude-agent-sdk-python). Package source, examples, types, changelog, and license.
- **Anthropic.** [TypeScript SDK source](https://github.com/anthropics/claude-agent-sdk-typescript). Package source, examples, types, changelog, and license.

### Authentication note

The Agent SDK overview currently directs third-party applications to API-key or documented cloud-provider authentication and says third-party developers may not offer claude.ai login or subscription rate limits without prior approval. Official Claude Code subscription login and Remote Control are different product paths. This module therefore does not cite or recommend credential extraction or unofficial subscription proxies.

## Remote access

- **Tailscale.** [Tailscale SSH](https://tailscale.com/docs/features/tailscale-ssh). Identity-based SSH authorization, WireGuard transport, access policies, check mode, session recording, and limitations. Last validated by Tailscale on 2026-01-05 when reviewed.

## Protocol Wealth open-source references

- **Protocol Wealth.** [`pw-learnai`](https://github.com/Protocol-Wealth/pw-learnai). Learning entryway and client-only tools.
- **Protocol Wealth.** [`pwcli-core`](https://github.com/Protocol-Wealth/pwcli-core). Intent, runtime-adapter, approval, redaction, and provenance control-plane specification.
- **Protocol Wealth.** [`nexus-core`](https://github.com/Protocol-Wealth/nexus-core). Public-safe analytical engine and MCP capability layer.
- **Protocol Wealth.** [`pwos-core`](https://github.com/Protocol-Wealth/pwos-core). Open governance and compliance primitive packages.
- **Protocol Wealth.** [`pwplan-core`](https://github.com/Protocol-Wealth/pwplan-core). Planning reference UI and named direct-identifier key tripwires; public learning examples use synthetic inputs.
- **Protocol Wealth.** [`shard-core`](https://github.com/Protocol-Wealth/shard-core). Prerelease authenticated encryption and threshold-recovery utility. Its README explicitly says it has not received an independent security audit.
- **Protocol Wealth.** [`pwcli-core` issue #6](https://github.com/Protocol-Wealth/pwcli-core/issues/6). Tracked implementation of governed Python and TypeScript Claude Agent SDK reference adapters.

Private implementations are intentionally excluded from the public source map. Use a provider-neutral durable-knowledge boundary unless publication is explicitly authorized.

## Protocol Wealth public and human-service boundary

- **Protocol Wealth.** [About](https://protocolwealthllc.com/about/). Human fiduciary accountability, team roles, process, and technology posture.
- **Protocol Wealth.** [Open Source](https://protocolwealthllc.com/opensource/). Public `-core` foundation, private production boundary, licensing, and no-support-contract posture.
- **Protocol Wealth.** [Disclosures](https://protocolwealthllc.com/disclosures/). Current regulatory, service, technology, privacy, and risk disclosures.
- **Protocol Wealth.** [Privacy](https://protocolwealthllc.com/privacy/). AI data handling, human review, PW Nexus API/MCP practices, and portal references.
- **Protocol Wealth.** [Terms of Service](https://protocolwealthllc.com/tos/). AI-assisted services, acceptable use, accounts, and API/MCP terms.
- **Protocol Wealth.** [Integrated Wealth Management](https://protocolwealthllc.com/). Public description of the firm, process, PWOS proof layer, and the boundary between technology and fiduciary judgment.

## Human and security framing

- **Bainbridge, Lisanne.** "Ironies of Automation" (1983). Automation changes the human role; it does not eliminate the need for skill, monitoring, and exception handling.
- **NIST.** [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework). Governance, mapping, measurement, and management as organizational responsibilities.
- **NIST.** [Personally Identifiable Information glossary](https://csrc.nist.gov/glossary/term/personally_identifiable_information). PII can identify an individual directly or indirectly; rejecting a short list of key names is not de-identification.
- **OWASP.** [Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/). Prompt injection, excessive agency, sensitive information disclosure, and unsafe output handling.

## Source discipline

Repository READMEs describe public reference surfaces, not the complete private production estate. Public website claims describe services and live surfaces, not necessarily open-source implementation parity. When those sources disagree, narrow the claim and link the exact source instead of blending them into a larger promise.
