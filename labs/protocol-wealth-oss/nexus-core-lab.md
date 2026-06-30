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
- A PII-free planning dispatch surface where open demos send age, balances, allocations, assumptions, and other de-identified variables rather than names, dates of birth, emails, phones, addresses, or account identities

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
| Planning | PII-free retirement-planning tool discovery and dispatch |
| On-chain | Anonymous wallet, native-chain balance, Solana token price, vault discovery, LP analytics, and benchmark return series |
| Meta | Health and provider usage stats without keys or client data |

The hosted landing page still highlights the simple entrypoints (`/api/regime`, `/api/market/quote/{symbol}`, `/api/economic/{series_id}`, and `/mcp`), but the OpenAPI schema is the current source of truth for the broader surface.

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
- `POST /mcp/tools/{tool_id}` for PII-free planning tool dispatch

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
