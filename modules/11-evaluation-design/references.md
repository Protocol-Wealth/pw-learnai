# 11 — References

## Primary sources

- **Hamel Husain, Isaac Flath, Eugene Yan, Bryan Bischof, Jason Liu, Charles Frye.** "What We Learned from a Year of Building with LLMs" (2024). The clearest practical treatment of LLM evaluation in production. Read this first.
- **Eugene Yan.** Various essays at eugeneyan.com on evaluation patterns. Practical, technical, free.
- **Chip Huyen.** *Designing Machine Learning Systems* (2022) and her blog. Treats evaluation as part of the system design problem rather than a separate concern.

## On model-as-judge

- **Zheng, Lianmin, et al.** "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena" (2023). The empirical case for model-as-judge, with honest treatment of where it falls down.
- **Various follow-on papers** on rubric-based evaluation. The pattern is converging: specific rubrics work, vague rubrics produce noise.

## On test set design

- **Northcutt, Curtis, et al.** "Pervasive Label Errors in Test Sets Destabilize Machine Learning Benchmarks" (2021). Empirical demonstration that even widely-used benchmarks have systematic errors. Useful for calibrating skepticism about your own test set.
- **Various works on stress-testing and adversarial evaluation.** AI safety community has done substantial work here. METR and similar evaluation organizations publish methodology.

## On red-teaming

- **Anthropic, OpenAI, Google.** Vendor red-teaming documentation. Vendor-specific but the patterns transfer.
- **AI Village at DEF CON.** Annual public red-teaming work. Useful for understanding what real adversarial testing looks like.

## On the limits of evaluation

- **The replication crisis literature** (Ioannidis 2005, "Why Most Published Research Findings Are False"). Not specific to AI but the discipline is relevant — beware of evaluation results that confirm what the team wanted to find.
- **Various critiques of LLM benchmarks** (BIG-bench, MMLU, others). The benchmarks are useful but increasingly gamed; vendor performance on benchmarks does not translate cleanly to operator-relevant tasks.

## A note on regulatory evaluation

For AI systems in regulated contexts (finance, healthcare, legal), evaluation often must meet specific standards. The relevant frameworks (NIST AI RMF, EU AI Act for those affected, sector-specific guidance) are evolving. Build the harness to a standard that is defensible in audit, not just to a standard the team likes.
