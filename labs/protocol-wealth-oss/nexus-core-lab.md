# Nexus Core Lab

How to use a public, read-only MCP engine as a starting point for AI-assisted financial analysis workflows.

## Source repo

[`Protocol-Wealth/nexus-core`](https://github.com/Protocol-Wealth/nexus-core)

Nexus Core is a public, read-only, regime-adaptive financial-analysis engine. It exposes the same underlying computation through REST endpoints and MCP tools, so an AI client can call financial analysis capabilities without implementing the financial domain logic itself.

## What to learn

The durable pattern is not "financial API." The durable pattern is a bounded tool surface:

- Public, read-only endpoints
- No client identity
- Graceful degradation when optional provider keys are absent
- Shared engine logic behind REST and MCP
- Tool contracts that can be consumed by Claude, Codex, ChatGPT, or other MCP-compatible clients

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

## Browser exercise

Use the MCP Tool Planner in the interactive site.

Work through three scenarios:

| Scenario | Expected tool posture |
|----------|-----------------------|
| "What is the current macro regime?" | Public read-only, safe for hosted MCP |
| "Run a retirement projection with fake ages and balances" | PII-free planning payload, safe if no identity fields are present |
| "Analyze a named client's full portfolio" | Not appropriate for public Nexus; route through a private authenticated layer |

The point is to decide which tool sequence belongs on the public surface and which belongs behind a regulated private boundary.

## Codex or Claude task

```text
Read the Nexus Core lab and the nexus-core README. Propose one browser-only learning tool that teaches MCP tool orchestration without calling the live API. Do not use real client data, API keys, or investment advice. Include the tool sequence, trust boundary, and verification steps.
```

## Implementation starting points

- `GET /api/regime` for regime classification
- `GET /api/score/{ticker}` for EMF durability scoring
- `GET /api/market/quote/{symbol}` for market quotes
- `POST /mcp` for MCP-over-HTTP
- Planning tools exposed through `/mcp/tools`

## Review checklist

| Check | Pass/fail |
|-------|-----------|
| No identity fields in example payloads | |
| Public tools stay read-only | |
| Missing provider data has a graceful fallback | |
| REST and MCP semantics are described consistently | |
| Output says educational, not investment advice | |

## What this lab does not do

- It does not call the live Nexus API from the `pw-learnai` browser tools.
- It does not handle authentication, PII, or client suitability.
- It does not turn analysis output into advice.
