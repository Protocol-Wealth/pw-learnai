# 15 — References

Reviewed: 2026-07-25. AI security guidance moves quickly; treat dated items as
starting points and check current vendor and standards-body docs before relying on any
specific control. The supply-chain sources below were added and read on 2026-09-30;
the rest of this file was not re-reviewed then.

## On prompt injection and the lethal trifecta

- **Simon Willison.** Ongoing writing at simonwillison.net on prompt injection and the "lethal trifecta" (untrusted content + access to private data + exfiltration capability). The clearest operator-level framing; start here and follow the tag over time.
- **Kai Greshake et al.** "Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection" (2023). The empirical demonstration that indirect injection through processed content is practical, not theoretical.

## Threat catalogs and checklists

- **OWASP Top 10 for LLM Applications.** Community-maintained catalog covering prompt injection, insecure output handling, sensitive-information disclosure, excessive agency, and more. Use it as a coverage checklist, not a guarantee.
- **MITRE ATLAS.** Adversarial threat landscape for AI systems — a structured taxonomy of real-world attack techniques, useful for red-team planning.

## Secrets management

- **Vendor secrets managers** (cloud provider secret stores, HashiCorp Vault, platform environment/secret settings). The specifics differ; the principle does not — secrets live server-side, scoped and rotatable, never in the repo, prompt, client bundle, or logs.
- **git history hygiene.** A secret committed once is compromised even after deletion — it lives in history and on any clone. Rotate, do not just remove. Secret-scanning tools (including GitHub's) catch some but not all leaks.

## Tool and agent security

- **Model Context Protocol.** [Security best practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices).
  Official attack and mitigation guidance covering authorization, SSRF, sessions,
  local-server privileges, sandboxing, and scope minimization. Review the labs in this
  repo (`labs/protocol-wealth-oss/`) as local examples, not as a substitute.
- **Excessive agency.** The failure mode where an agent is given broader tool access than the task requires. Scope tools to the minimum; gate the consequential ones.

## Agent supply chain

- **Hanzhi Liu et al.** [Your Agent Is Mine: Measuring Malicious Intermediary Attacks on the LLM Supply Chain](https://arxiv.org/abs/2604.08407)
  (arXiv 2604.08407, 2026). Formalizes payload-injection and secret-exfiltration attacks
  by third-party API routers, which see every tool-calling request in plaintext, and
  measures them across paid and free routers found in the wild.
- **Anthropic.** [Agent Skills in Claude Code](https://code.claude.com/docs/en/skills).
  How skills are structured, discovered, and loaded.
- **Agent Skills.** [Open format](https://agentskills.io). Cross-tool skill convention.
- **Model Context Protocol.** [Authorization](https://modelcontextprotocol.io/specification/latest/basic/authorization).
  The specification's authorization flow for remote servers.
- **Vercel Labs.** [deepsec](https://github.com/vercel-labs/deepsec). An example of an
  agent-driven whole-repository security harness that revalidates findings before
  reporting them.
- **OWASP GenAI Security Project.** [Top 10 for LLM and GenAI applications](https://genai.owasp.org/llm-top-10/).
  Includes supply-chain risk as a named category.

## Standards and governance

- **NIST AI Risk Management Framework (AI RMF)** and its generative-AI profile. Not a checklist of controls, but a defensible structure for reasoning about risk in audited contexts.
- **Sector and regional regimes** (EU AI Act for those affected, plus finance/healthcare/legal-specific guidance). These are evolving; build to a standard defensible in audit, not to the one that is most convenient.

## On the limits of these references

Every source here reduces risk; none certifies safety. Guardrail models are themselves LLMs subject to injection, benchmark security scores do not transfer cleanly to your feature, and a control that worked last quarter may not survive a vendor model update. Treat security as a property you re-verify, in the spirit of Module 11, not a box you check once.
