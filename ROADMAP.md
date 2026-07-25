# Roadmap

This is a focused implementation roadmap, not a product promise.

## Near term

- [#50](https://github.com/Protocol-Wealth/pw-learnai/issues/50): Content accuracy audit — falsifiability pass across modules and refresh of fast-moving AI references against current official docs.

## Shipped

- [#54](https://github.com/Protocol-Wealth/pw-learnai/issues/54), shipped in [PR #55](https://github.com/Protocol-Wealth/pw-learnai/pull/55): agent-systems learning path, client-only architecture builder, `pwcli-core` and `shard-core` labs, and system-of-systems map.
- Tool-coverage backlog (#45–#49): companion tools for modules 04, 05, 06, 08, and 09 — every numbered module now has one client-only companion tool.
- Issues #14–#21 (prior near/middle-term backlog) and #43 (Module 15 — Security & Secrets Hygiene). See `CURRENT-STATE.md` for the current live surface.

## Tracking rule

- GitHub issues are the canonical tracker for outstanding build items. Add or update an issue before adding new roadmap work.

## Guardrails

- Keep the project static and client-only.
- Keep beginner content practical: visible files, clear checks, no secrets, no private data.
- Prefer official current docs for fast-moving AI tooling references.
- Keep private repositories and production implementation details out of public learning dependencies.
- Do not teach extraction or proxying of subscription credentials for third-party agent applications.
- Do not let the public site imply certification, endorsement, investment advice, or production readiness.
