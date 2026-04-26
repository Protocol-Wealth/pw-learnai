# 10 — References

## Primary sources

- **Anthropic.** *Claude Prompt Engineering Guide* (docs.claude.com). The most current vendor documentation. Read this before optimizing.
- **OpenAI.** *Prompt Engineering Guide* (platform.openai.com/docs). Vendor-specific but most patterns transfer.
- **Schulhoff, Sander, et al.** *The Prompt Report* (2024). Comprehensive academic survey of prompt engineering techniques. Long but thorough.

## On structured prompting

- **Anthropic's XML tag conventions.** Documented in the Claude prompting guide. The convention is not required, but it is well-tested and the structural discipline is worth adopting regardless of vendor.
- **JSON schema-based prompting.** Increasingly first-class in vendor APIs. Constrains output reliably; useful when downstream code expects structured data.

## On evaluation

- **Hamel Husain, Isaac Flath, Eugene Yan, Bryan Bischof, Jason Liu, Charles Frye.** "What We Learned from a Year of Building with LLMs." 2024. The practical-evals chapter is essential reading.
- **Chip Huyen.** Various essays on her blog (huyenchip.com) about LLM evaluation in production.

## On advanced techniques

- **Wei, Jason, et al.** "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." 2022. The original CoT paper.
- **Yao, Shunyu, et al.** "ReAct: Synergizing Reasoning and Acting in Language Models." 2022. The pattern for prompting models to alternate reasoning and tool use.
- **Various subsequent papers** on tree-of-thought, reflection, self-consistency. Useful for specific tasks; not necessary for most operator prompts.

## On prompt injection and security

- **Simon Willison.** Various writings on prompt injection (simonwillison.net/series/prompt-injection/). The clearest treatment of the attack surface and the limits of current defenses.
- **OWASP Top 10 for LLM Applications.** The security community's enumeration of common vulnerabilities. Useful as a checklist when shipping production prompts that take untrusted input.

## On the limits of prompt engineering

- **Various critics** have argued that elaborate prompt engineering is a band-aid over models that should be more capable by default. The argument is partially correct — vendor improvements have absorbed many techniques into default behavior. The implication is to keep prompts as simple as the task allows and add structure only when needed.
- **Fine-tuning vs prompting.** For tasks done at high volume with consistent format, fine-tuning beats elaborate prompting. The crossover point is roughly 1000+ similar tasks per month with consistent input/output structure. Below that, prompting is more flexible and cheaper to iterate.
