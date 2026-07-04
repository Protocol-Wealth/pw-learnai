# pw-learnai — Working with Public Data

> Public dataset discovery, National Archives Catalog API constraints, OAI-PMH metadata harvesting, and source-note discipline before implementation.

Source: https://github.com/Protocol-Wealth/pw-learnai
License: MIT
Generated: 2026-07-04

## Modules included

- 14-working-with-public-data
- 00-getting-started
- 11-evaluation-design
- 12-ai-coding-practice

---


# ============================================
# 14-working-with-public-data
# ============================================

# 14 - Working with Public Data

How to use public datasets, archival APIs, and metadata-harvesting protocols without confusing "available" with "ready for production."

## The claim

Public data work fails less often because the API is hard and more often because the operator skips source discipline. A usable public-data workflow records four things before code exists:

1. Where the metadata came from.
2. Where the actual data lives.
3. What the access terms and rate limits are.
4. How the result will be attributed and refreshed.

If those four facts are missing, an agent can still write code, but it is probably automating confusion.

## The operating model

Use a four-layer workflow:

```text
source discovery
  -> metadata record
  -> sample retrieval
  -> repeatable ingest note
```

Do not start with a scraper. Start with a source note.

## Data.gov

Data.gov is a catalog, not a universal data warehouse. Its API page says the catalog is powered by CKAN and that the CKAN API contains metadata about datasets, including URLs and descriptions, but not the actual dataset payloads.

That distinction matters. A beginner task should not be "download data from Data.gov." It should be:

1. Find a catalog record.
2. Record the publisher.
3. Record the data dictionary or field notes if present.
4. Record the license, access, and update notes.
5. Find the actual resource URL.
6. Download only a small sample.

Useful starting point:

```text
https://catalog.data.gov/api/3/action/package_search?q=climate&rows=5
```

Treat the result as metadata. The useful fields are usually the dataset title, organization, notes, tags, resources, formats, and resource URLs.

## National Archives Catalog API

The National Archives Catalog API exposes public Catalog data in machine-readable JSON. The National Archives describes available data as including archival descriptions, authority records, digital-object metadata, extracted text such as OCR, and public contributions such as tags, transcriptions, and comments.

The important beginner constraints:

- API key required for requests.
- The default key is read-only.
- Do not publish the key in GitHub or any public repo.
- Default rate limit is 10,000 queries per month per API key.
- Do not scrape or attempt to download the full Catalog through the API; use the published bulk dataset path for full downloads.
- Apps using the API should not imply NARA endorsement.

For learning, keep the first task read-only:

```text
Goal: Search the National Archives Catalog API for one public topic and save a source note.

Constraints:
- Use a read-only key.
- Do not store the key in code.
- Do not download bulk data.
- Record the query, record id, title, source URL, and date reviewed.
```

## OAI-PMH

OAI-PMH is the Open Archives Initiative Protocol for Metadata Harvesting. The protocol defines a low-level HTTP/XML pattern where repositories expose metadata records and harvesters collect them.

The six protocol verbs are:

| Verb | Purpose |
|------|---------|
| `Identify` | Describe the repository |
| `ListMetadataFormats` | List available metadata formats |
| `ListSets` | List repository sets, if supported |
| `ListIdentifiers` | List record headers |
| `ListRecords` | List full metadata records |
| `GetRecord` | Fetch one metadata record |

The practical lesson is pagination. `ListRecords`, `ListIdentifiers`, and `ListSets` can return a `resumptionToken`. A harvester must use that token to request the next incomplete list segment and must handle expired or invalid tokens.

## ACP as a concrete OAI-PMH example

Atmospheric Chemistry and Physics publishes an OAI-PMH example page through Copernicus. It supports OAI-PMH 2.0, Dublin Core metadata (`oai_dc`), and full-text XML in NLM/PMC format for articles published after November 2014.

Example requests:

```text
https://oai-pmh.copernicus.org/oai.php?verb=Identify
https://oai-pmh.copernicus.org/oai.php?verb=ListSets
https://oai-pmh.copernicus.org/oai.php?verb=ListMetadataFormats
https://oai-pmh.copernicus.org/oai.php?verb=ListRecords&metadataPrefix=oai_dc
```

Use those examples to learn the protocol shape. Do not copy them into this site as live frontend calls.

## What to record in a source note

Use this template before implementation:

```md
# Source Note

Reviewed: YYYY-MM-DD
Source:
Publisher:
Access method:
Data or metadata:
License or access note:
Rate limit:
Pagination:
Attribution requirement:
Sample query:
Sample record:
Fields used:
Fields ignored:
Refresh expectation:
Risks:
```

This note is more important than the first script. It lets a coding agent work from facts rather than assumptions.

## Agent prompt

```text
Goal: Create a source note for one public dataset before writing any ingestion code.

Scope:
- Use one source only.
- Read the official documentation and one sample response.
- Do not build a scraper, database, backend, or frontend.

Constraints:
- Do not use secrets or private data.
- Do not download bulk data.
- Record rate limits, attribution, and pagination.
- Treat Data.gov catalog records as metadata unless the resource URL points to the actual data.

Verification:
- The note names the source URL, sample query, reviewed date, and whether the result is metadata or data.

Finish with:
- Source note path
- Unknowns
- Smallest safe next implementation step
```

## What this module does not cover

- Data cleaning at scale.
- Bulk archival downloads.
- Private or licensed datasets.
- Production ETL orchestration.
- Legal review of data licenses.

The first win is not ingestion. The first win is knowing what you are ingesting.


---

# Exercises - Working with Public Data

## Exercise 1: Data.gov source note

Use Data.gov's CKAN API to find one dataset.

Deliverable: `source-notes/datagov-<topic>.md`

Include:

- Catalog URL
- API query
- Dataset title
- Publisher
- Resource URLs
- File formats
- License or access notes
- Whether the catalog result contains data or only metadata
- One reason the dataset might be unsuitable

Do not download more than a small sample from a resource URL.

## Exercise 2: National Archives API source note

Read the National Archives Catalog API terms before writing code.

Deliverable: `source-notes/nara-catalog-api.md`

Include:

- Reviewed date
- API docs URL
- Whether an API key is required
- Default monthly rate limit
- Whether your planned use is read-only or write-capable
- Attribution or non-endorsement note
- One sample search you would run
- What you will not store in the repo

Do not commit an API key.

## Exercise 3: OAI-PMH reconnaissance

Use the ACP/Copernicus OAI-PMH examples.

Deliverable: `source-notes/oai-pmh-acp.md`

Record:

| Request | What it tells you |
|---------|-------------------|
| `Identify` | |
| `ListSets` | |
| `ListMetadataFormats` | |
| `ListRecords&metadataPrefix=oai_dc` | |
| `GetRecord` | |

Name which requests may require a `resumptionToken`.

## Exercise 4: Write the first safe implementation prompt

Write a Codex or Claude prompt that asks for a source-note generator, not a scraper.

It must include:

- One source only
- No secrets
- No backend
- No bulk download
- Output path
- Verification command or manual check

## Exercise 5: Decide when to deploy

Create a table:

| Condition | Deploy now? | Why |
|-----------|-------------|-----|
| Static source notes only | | |
| Browser-only sample parser | | |
| API key required | | |
| Scheduled refresh required | | |
| Private or regulated data | | |

The expected answer for private or regulated data is not "deploy faster." It is "design the trust boundary first."


---

# References - Working with Public Data

Reviewed: 2026-06-30.

## Catalogs and APIs

- Data.gov, "APIs" - https://data.gov/developers/apis/
- Data.gov CKAN API base - http://catalog.data.gov/api/3/
- CKAN API documentation - https://docs.ckan.org/en/latest/api/
- National Archives, "API for the National Archives Catalog" - https://www.archives.gov/research/catalog/help/api
- National Archives Catalog API Swagger - https://catalog.archives.gov/api/v2/api-docs/
- National Archives Catalog API GitHub - https://github.com/usnationalarchives/Catalog-API

## Metadata harvesting

- Open Archives Initiative, "The Open Archives Initiative Protocol for Metadata Harvesting" - https://www.openarchives.org/OAI/openarchivesprotocol.html
- OAI-PMH landing page - https://www.openarchives.org/pmh/
- Atmospheric Chemistry and Physics, "XML harvesting & OAI-PMH" - https://www.atmospheric-chemistry-and-physics.net/about/xml_harvesting_and_oai-pmh.html
- Copernicus OAI-PMH endpoint example - https://oai-pmh.copernicus.org/oai.php?verb=Identify

## Adjacent modules

- [00 - Getting Started as an AI Operator](../00-getting-started/module.md)
- [11 - Evaluation Design for AI Systems](../11-evaluation-design/module.md)
- [12 - AI-Assisted Coding in Practice](../12-ai-coding-practice/module.md)
- [13 - Designing Agent Instructions](../13-agent-instructions/module.md)



# ============================================
# 00-getting-started
# ============================================

# 00 - Getting Started as an AI Operator

How to move from "I know ChatGPT prompts" to "I can use coding agents, GitHub, data sources, and deployment services without making a mess."

> **Beginner tip:** You can use the optional, zero-config [static starter template](../../first-page.html) to quickly test your browser flow without any build step.

---

## The claim

The next step after prompt literacy is not learning every framework. It is learning an operating loop:

1. Put work in a repository.
2. Give the agent durable project instructions.
3. Ask for small, reviewable changes.
4. Run the documented check.
5. Update the state files that let the next session continue.

If a beginner can do that loop, they can learn Codex, Claude Code, Antigravity, or the next coding agent without restarting from zero.

---

## Choose your level

Use level before tool choice:

| Level | You are here if | Next step |
|-------|-----------------|-----------|
| **Beginner** | You know ChatGPT or Claude prompts, but GitHub, local files, and diffs are new | Create GitHub, clone one repo, install one desktop or IDE agent, and complete one harmless read-only task |
| **Intermediate** | You can work in a repo, but agent work still depends on re-explaining context every session | Add `AGENTS.md`, `CLAUDE.md`, `CURRENT-STATE.md`, `CHANGELOG.md`, `NEXT-PROMPT.md`, and a verification loop |
| **Advanced** | You are ready to connect data sources, MCP tools, cloud services, or regulated workflow patterns | Write public-data source notes, keep payloads PII-free, and deploy only after rollback and verification are clear |

---

## The first hour

A beginner should see a short visual route before reading a long module:

1. Create GitHub, enable 2FA, and open one practice repo or folder.
2. Choose Claude, Codex, or both.
3. Create one Markdown file for instructions.
4. Create one HTML file for something visible in the browser.
5. Ask for a read-only repo tour before any edits.
6. Let the agent make one tiny change, then inspect the diff and run the check.

The goal is not to learn every command. The goal is to learn that AI work becomes safer when it lives in files you can read, diff, open, and verify.

---

## Why Markdown and HTML

Markdown is useful because it is plain text that also renders nicely on GitHub. Use it for:

* `README.md` to explain what the project is.
* `SETUP-NOTES.md` to record what was installed and what worked.
* `AGENTS.md` and `CLAUDE.md` to give coding agents durable rules.
* `CURRENT-STATE.md`, `CHANGELOG.md`, and `NEXT-PROMPT.md` to keep future sessions from starting cold.

HTML is useful because it is also just a file, but it gives immediate visual feedback. A beginner can make `first-page.html`, open it in a browser, and see something real without a backend, login, database, telemetry, or deployment.

Use them together:

```text
README.md        - what this project is and how to use it
SETUP-NOTES.md   - what you installed and what worked
ROADMAP.md       - prioritized future work and backlog
first-page.html  - the first visible browser artifact
```

Markdown explains the work. HTML shows the work.

## The four-stage path

### Stage 1: GitHub and local files

Create a GitHub account, enable two-factor authentication, and install either GitHub Desktop or Git plus a code editor. A prompt-only user needs one new mental model here: GitHub is the public or private record of the project, while the local folder is where the agent reads, edits, and runs checks.

Minimum outcome:

- You can clone a repository.
- You can see changed files before committing.
- You can make a branch.
- You can open a pull request or at least push a branch for review.

Do not start by memorizing every Git command. Start by understanding the diff: what changed, why it changed, and whether the check passed.
👉 **Read the full guide here:** [Visual Diff-Reading Explainer for Beginners](./diff-explainer.md)
### Stage 2: One desktop agent, then one CLI

Pick one visual surface first. Codex app, Claude Code desktop, a Claude Code IDE extension, or Antigravity can help a beginner see files, diffs, and running tasks without living in the terminal all day.

Then add one terminal surface. Codex CLI and Claude Code CLI are where the loop becomes precise: the agent can inspect the repository, edit files, run commands, resume prior work, and report exactly what it verified.

The useful order:

1. Desktop or IDE agent for confidence with diffs.
2. CLI agent for repeatable repo work.
3. MCP only after you know which external tool or data source the agent needs.
4. Cloud or background tasks only after the local workflow is boring.

The danger is skipping straight from chat prompts to autonomous background tasks. Do local, reviewable work first.

### Stage 3: Repository memory and agent scaffolding

An agent does better when the repository explains itself. A small scaffold is enough:

```text
README.md          - what this project is and how to run it
AGENTS.md          - commands, constraints, and review rules for coding agents
CLAUDE.md          - Claude-specific import or notes, often just @AGENTS.md
CURRENT-STATE.md   - what exists now and what was last verified
CHANGELOG.md       - dated history of meaningful changes
NEXT-PROMPT.md     - the best starting prompt for the next session
ROADMAP.md         - prioritized future work
```

Keep durable instructions in `AGENTS.md` or `CLAUDE.md`. Keep learned context in memory or state files. Keep secrets out of both.

A useful `AGENTS.md` line names a command, path, or invariant:

```md
After frontend changes, run `pnpm build`. Do not run `vite` directly because the sync hooks will be skipped.
```

A weak line sounds true in every repository:

```md
Write clean code and follow best practices.
```

### Stage 4: Data and deployment

Once the local loop works, add real data carefully.

Use public data sources first:

- Data.gov for dataset discovery. Its catalog API returns metadata and links, not always the dataset payload itself.
- National Archives Catalog API for archival descriptions, digital-object metadata, OCR text, and public contributions in JSON. It uses API keys and publishes rate limits, so never commit the key.
- OAI-PMH repositories when you need harvestable metadata. Learn the verbs: `Identify`, `ListMetadataFormats`, `ListRecords`, `GetRecord`, and `ListSets`.

Use hosted infrastructure only when the project actually needs it:

- Static site: GitHub Pages or another static host.
- Small web service: Cloud Run or Fly.io.
- Database: Neon Postgres or a managed Postgres attached to your host.
- Regulated or sensitive system: bring in identity, audit, retention, network boundaries, and a human review process before data enters the system.

For beginners, the first hosted system should not contain private data. Ship a public, fake-data demo before touching anything sensitive.

## The beginner-safe operating loop

Use this loop for every real task:

1. Open the repo and read `README.md`, `AGENTS.md`, and `CURRENT-STATE.md`.
2. Write a task prompt with outcome, scope, constraints, verification, and finish format.
3. Let the agent inspect before editing.
4. Keep the change small enough to review.
5. Run the documented check.
6. Read the diff.
7. Update `CHANGELOG.md`, `CURRENT-STATE.md`, or `NEXT-PROMPT.md` when the state changed.

Example prompt:

```text
Goal: Add a beginner setup section to the homepage.

Scope:
- Edit only src/main.jsx and README.md.

Constraints:
- Keep the site client-only.
- Do not add a backend, telemetry, or new dependency.
- Preserve existing module links.

Verification:
- Run pnpm build.

Finish with:
- Files changed
- Build result
- Anything not verified
```

## What to avoid

- Do not paste secrets, API keys, private client data, or private documents into a public repo or public chat.
- Do not let two agents edit the same worktree at the same time.
- Do not ask an agent to "improve everything." Name the file, behavior, and check.
- Do not treat memory as enforcement. If a rule must always apply, put it in project instructions or a mechanical check.
- Do not deploy before you know how to roll back.

## What this module does not cover

- Deep Git internals.
- Production security engineering.
- Vendor pricing.
- Complete cloud architecture.
- Legal or compliance advice.

The point is to get someone safely from prompts to a working repo loop. The advanced material comes after that loop is stable.


---

# Exercises - Getting Started as an AI Operator

## Exercise 1: Create the minimum GitHub setup

Deliverable: a screenshot or written checklist showing:

- GitHub account created.
- Email verified.
- Two-factor authentication enabled.
- GitHub Desktop or Git installed.
- One local repository cloned.
- One branch created.
- One changed file visible in a diff.

Stop before committing if you do not understand the diff.

## Exercise 2: Install one desktop surface and one CLI surface

Deliverable: a short `SETUP-NOTES.md` in a practice repo:

```md
# Setup Notes

Agent path:
- Claude:
- Codex:
- Using both?:
- Which tool is allowed to edit first:

Desktop or IDE agent:
- Tool:
- Installed on:
- First repo opened:

CLI agent:
- Tool:
- Command that confirmed it works:

First safe task:
- Prompt:
- Files read:
- Files changed:
- Verification command:
```

Use a harmless task such as "summarize this repository" before asking for edits.

## Exercise 3: Make one Markdown file and one HTML file

Deliverable: two files in a practice folder:

```text
README.md
first-page.html
```

`README.md` should answer:

- What is this folder?
- What command or manual check proves it still works?
- Which agent are you using first: Claude, Codex, or both?

`first-page.html` should be a tiny visible page that opens in a browser. It does not need a framework, backend, login, database, or deployment.

Ask Claude or Codex for a read-only review before asking it to edit:

```text
Read README.md and first-page.html. Explain what this practice folder does and propose one tiny improvement. Do not edit files yet.
```

## Exercise 4: Write the scaffold

Deliverable: add these files to a practice repository:

- `AGENTS.md`
- `CLAUDE.md`
- `CURRENT-STATE.md`
- `CHANGELOG.md`
- `NEXT-PROMPT.md`
- `ROADMAP.md`

Each file can be short. The test is whether a new agent session can start from them without you re-explaining the project.

Minimum `AGENTS.md`:

```md
# AGENTS.md

## Commands

- Build: `<command>`
- Test: `<command or "none">`

## Rules

- Keep changes scoped to the requested files.
- Never commit secrets or real private data.
- After code changes, run the documented check and report the result.
```

## Exercise 5: Convert a chat prompt into a coding-agent task

Start with this weak prompt:

```text
Make this better.
```

Rewrite it with:

- outcome
- scope
- constraints
- verification
- review focus
- completion format

Then run the improved prompt in a read-only or plan mode first. Save the plan in `NEXT-PROMPT.md` if it is reusable.

## Exercise 6: Data source reconnaissance

Deliverable: `DATA-SOURCE-NOTES.md` with three sections:

1. Data.gov: find one dataset, record the catalog URL, the publisher, the license or access note, and the actual data URL if one exists.
2. National Archives Catalog API: read the API terms, record whether your use needs a read-only key, and name the rate limit.
3. OAI-PMH: run or inspect `Identify`, `ListMetadataFormats`, and `ListRecords` examples from a public repository such as Copernicus.

Do not write a scraper. The goal is to understand metadata, attribution, pagination, and limits before code exists.

## Exercise 7: Choose an infrastructure target

Deliverable: a one-page decision note:

| Need | Default choice | Why |
|------|----------------|-----|
| Static educational site | GitHub Pages | No server or secrets |
| Small HTTP service | Cloud Run or Fly.io | Simple container deployment |
| Postgres database | Neon or managed Postgres | Avoid self-managing backups first |
| Sensitive workflow | Private architecture review first | Identity, audit, retention, access control |

Add a "not yet" section naming what you will not deploy until the local repo loop is reliable.


---

# References - Getting Started as an AI Operator

Reviewed: 2026-06-30.

## GitHub and Git

- GitHub Docs, "Creating an account on GitHub" - https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github
- GitHub Docs, "Set up Git" - https://docs.github.com/en/get-started/git-basics/set-up-git
- GitHub Docs, "GitHub Desktop documentation" - https://docs.github.com/en/desktop

## Coding agents

- OpenAI Developers, "Codex app" - https://developers.openai.com/codex/app
- OpenAI Developers, "Codex CLI" - https://developers.openai.com/codex/cli
- OpenAI Developers, "Custom instructions with AGENTS.md" - https://developers.openai.com/codex/guides/agents-md
- OpenAI Developers, "Model Context Protocol" - https://developers.openai.com/codex/mcp
- OpenAI Developers, "Memories" - https://developers.openai.com/codex/memories
- Claude Code Docs, "Overview" - https://code.claude.com/docs/en/overview
- Claude Code Docs, "How Claude remembers your project" - https://code.claude.com/docs/en/memory
- Claude Code Docs, "Connect Claude Code to tools via MCP" - https://code.claude.com/docs/en/mcp
- Claude download page - https://claude.com/download
- Google Antigravity product site - https://antigravity.google/
- Model Context Protocol, "What is MCP?" - https://modelcontextprotocol.io/docs/getting-started/intro

## Data sources

- Data.gov, "APIs" - https://data.gov/developers/apis/
- National Archives, "API for the National Archives Catalog" - https://www.archives.gov/research/catalog/help/api
- Open Archives Initiative, "The Open Archives Initiative Protocol for Metadata Harvesting" - https://www.openarchives.org/OAI/openarchivesprotocol.html
- Atmospheric Chemistry and Physics, "XML harvesting & OAI-PMH" - https://www.atmospheric-chemistry-and-physics.net/about/xml_harvesting_and_oai-pmh.html

## Infrastructure

- Google Cloud, "What is Cloud Run?" - https://cloud.google.com/run/docs/overview/what-is-cloud-run
- Google Cloud, "Compute Engine overview" - https://cloud.google.com/compute/docs/overview
- Fly.io Docs - https://fly.io/docs/
- Neon Docs, "Introduction" - https://neon.com/docs/introduction

## Protocol Wealth OSS surfaces

- Nexus Core live OpenAPI schema - https://nexusmcp.site/openapi.json
- Nexus Core MCP setup guide - https://nexusmcp.site/mcp-guide
- Protocol-Wealth/nexus-core - https://github.com/Protocol-Wealth/nexus-core
- Protocol-Wealth/pwos-core - https://github.com/Protocol-Wealth/pwos-core
- Protocol-Wealth/pwplan-core - https://github.com/Protocol-Wealth/pwplan-core


---

# 📖 Understanding Git Diffs

Before making your first contribution, it's helpful to understand what a **diff** is.

A **diff** shows the changes made between two versions of a file. Git uses diffs to display exactly what has been **added**, **removed**, or **modified**.

---

## Why Does This Matter?

Reviewing a diff before committing helps you:

- ✅ Catch accidental changes
- ✅ Verify your work
- ✅ Keep commits clean and focused
- ✅ Make code reviews easier

Even experienced developers check their diffs before every commit.

---

# Anatomy of a Diff

Example:

```diff
--- a/src/example.js
+++ b/src/example.js

 function greet() {
-    console.log("Hello");
+    console.log("Hello, World!");
 }
```

Let's break this down.

## File Paths

```diff
--- a/src/example.js
+++ b/src/example.js
```

- `---` represents the previous version of the file.
- `+++` represents the updated version.

The `a/` and `b/` prefixes simply identify the old and new versions.

---

## Removed Lines

Lines beginning with a **minus (`-`)** were removed.

```diff
- console.log("Hello");
```

Git typically highlights these lines in **red**.

---

## Added Lines

Lines beginning with a **plus (`+`)** were added.

```diff
+ console.log("Hello, World!");
```

Git typically highlights these lines in **green**.

---

## Unchanged Lines

Lines without a `+` or `-` provide surrounding context.

```diff
function greet() {
```

These help you understand where the changes occurred.

---

# Visual Example

```text
Old File

Hello
World
Git
```

becomes

```text
New File

Hello
GitHub
Git
```

Git displays this as:

```diff
 Hello
-World
+GitHub
 Git
```

---

# Before You Commit

A good habit is to review your changes:

```bash
git diff
```

If everything looks correct, stage your files:

```bash
git add .
```

Then create your commit:

```bash
git commit -m "Describe your changes"
```

---

# Tips for Beginners

✔ Read every diff before committing.

✔ Small diffs are easier to understand than large ones.

✔ If something unexpected appears in the diff, investigate before committing.

✔ Don't worry if diffs look confusing at first. Reading them becomes much easier with practice.

---

# Summary

| Symbol | Meaning |
|--------|---------|
| `+` | Added line |
| `-` | Removed line |
| `---` | Previous version |
| `+++` | Updated version |
| Context | Unchanged surrounding lines |

---

Happy coding! 🚀



# ============================================
# 11-evaluation-design
# ============================================

# 11 — Evaluation Design for AI Systems

How to know your AI system is getting better, not just different.

## The claim

Most teams ship AI systems without an evaluation harness, then ship changes without measuring whether the changes improve anything. The result is a system that drifts in quality without anyone noticing, where confidence in output rises with familiarity rather than evidence. Evaluation is the discipline that breaks the drift. It is unglamorous. It is the difference between an AI system that compounds in usefulness and one that quietly degrades.

## Why this matters

The asymmetry: bad outputs from an AI system cost the consumer of the output, not the producer. Inside the firm, an output that gets accepted because it looks right but is subtly wrong costs the customer who acts on it. Outside the firm, the cost shows up as customer churn, regulatory exposure, or one viral screenshot of an embarrassing failure. None of these costs accrue to the engineer who shipped the change. Without evaluation, the producer gets the benefit and the consumer gets the cost.

## The idea

Three layers of evaluation. Each addresses a different question.

### Layer 1: Does this output meet the standard?

Per-output evaluation. For a given input, did the system produce an acceptable output?

The standard depends on the task. For classification, it is whether the label is correct. For generation, it is whether the output is faithful to the input, factually accurate, and appropriate to the context. For decision support, it is whether the recommendation is defensible.

The evaluation method depends on the task too. Classification tasks have ground-truth labels — measure accuracy directly. Generation tasks rarely have a single right answer — use rubric-based human review or model-as-judge with a clear rubric. Decision support is in between — usually requires expert review against a written standard.

The thing to avoid: vibes-based evaluation. "It looks good" is not a measurement. The team has no way to detect quality drift if the only check is impression. Build a written rubric. Apply it consistently. Record the scores.

### Layer 2: Does the system perform across inputs?

System-level evaluation. Across a representative set of inputs, what is the system's overall performance?

The representative set matters. A test set of 20 happy-path examples does not reveal anything about edge cases or failure modes. The discipline:

- **Happy path.** Typical, expected inputs. 30-50% of the test set.
- **Edge cases.** Unusual inputs, ambiguous inputs, inputs at the boundaries of intended scope. 20-30% of the test set.
- **Adversarial cases.** Inputs designed to break the system, including prompt injection attempts, off-topic content, and inputs containing sensitive material the system should refuse. 15-25% of the test set.
- **Out-of-distribution.** Inputs the system was not designed to handle, where the correct behavior is graceful refusal or escalation. 10-20% of the test set.

A test set without adversarial and out-of-distribution cases tests only that the system handles the work it was designed for. It does not test what happens when the system encounters anything else, which is where most production failures occur.

### Layer 3: Does the system improve over time?

Longitudinal evaluation. Run the same test set against the system periodically. Compare across runs.

The signals to watch:

- **Regression.** A test that previously passed now fails. Either the system changed (vendor pushed a model update, prompt was modified, downstream code changed) or the test was flaky. Investigate before moving on.
- **Drift in the gray zone.** Tests that scored 4/5 last quarter score 3/5 this quarter. No individual change is alarming; the trend is. Investigate the source.
- **Gradient of failure.** Where the system fails, are the failures clustered? A pattern of failures on a specific input type indicates a fixable issue. Random failures indicate noise that may not be addressable.

Without longitudinal evaluation, vendor model changes are invisible to the operator until customers complain. With it, the operator detects the change in days and can roll back or adapt before customers see it.

## Building the evaluation harness

Practical guidance for getting started.

**Start small.** A 20-input test set with a simple rubric, run weekly, beats no test set. Add inputs as you encounter new failure modes in production.

**Document what each test exists to verify.** A test without a stated purpose is hard to maintain. When the system behavior changes, the team needs to know whether the change is a regression or an intended improvement.

**Automate where possible, but not at the cost of quality.** Automated metrics (BLEU, ROUGE, exact match) work for narrow tasks. Most operator-relevant tasks need human review or model-as-judge with explicit rubrics. Automation here often measures the wrong thing.

**Separate the evaluation from the developer.** The person who built the prompt should not be the only person evaluating it. Unintended biases creep in. Have a separate reviewer or rotate evaluation responsibility across the team.

**Treat the test set as a living document.** When production produces a failure that the test set did not catch, add it to the test set. Over time the test set encodes the team's understanding of the failure modes.

### Model-as-judge: useful but limited

Using one model to evaluate another model's output is widely practiced and useful within limits.

**Where it works:** structured tasks with clear rubrics — classification, format compliance, presence of required elements. The judge model can apply the rubric consistently and at scale.

**Where it does not work:** open-ended quality judgments without strong rubrics, judgments that require domain expertise the judge does not have, judgments where the judge and the producer share the same biases.

**Discipline when using:** the rubric the judge applies must be specific. "Is this answer high-quality?" produces noise. "Does this answer cite the relevant policy section?" produces signal. The more specific the rubric, the more reliable the judgment.

## Common failure modes

- **Shipping without evaluation.** The most common failure mode. The team trusts demo results. Production failures are discovered by customers.
- **Evaluation theater.** A test set exists. It is not run regularly. The team is confident in quality without evidence.
- **Vibes-based grading.** Outputs are evaluated by impression. Quality drifts because impressions are not consistent across raters or across time.
- **Test set written by the prompt author.** The author tests the cases the author thought of. The cases the author did not think of go untested until production.
- **Ignoring drift.** Quality changes between runs are dismissed as noise. By the time the trend is undeniable, the system has degraded substantially.
- **Confusing fluency with accuracy.** AI outputs sound confident regardless of whether they are correct. Evaluation must check accuracy specifically, not let fluency substitute for it.

## What this module does not cover

- The technical mechanics of building automated test infrastructure (separate engineering domain)
- The statistical analysis of evaluation results at scale (when test sets are large enough for it; most operator test sets are not)
- Red-teaming as a specialized discipline (adjacent but distinct; see references)

## Try this

See [exercises.md](exercises.md).

## Further reading

See [references.md](references.md).


---

# 11 — Exercises

## Exercise 1: Build a 20-input test set

For an AI system you operate (or plan to operate), build a test set with the four input categories.

| # | Input | Category (happy / edge / adversarial / OOD) | Expected output category | Why this test exists |
|---|-------|---------------------------------------------|--------------------------|---------------------|
| 1 | | | | |
| ... | | | | |
| 20 | | | | |

If "why this test exists" is "general coverage," you have not thought about what each test verifies. Be specific.

## Exercise 2: Write the rubric

For your AI system's output, write the rubric that defines acceptable.

| Dimension | What 5/5 looks like | What 3/5 looks like | What 1/5 looks like |
|-----------|--------------------|--------------------|---------------------|
| | | | |

A rubric without specific anchor points is unreliable. The exercise is the specificity.

## Exercise 3: Run the harness

Execute the test set against your current system. Score each output against the rubric. Record:

- Total score
- Per-input scores
- Failures (specific inputs and what went wrong)
- Notes (anything that surprised you)

Save the results with a date stamp. This is the baseline.

## Exercise 4: Re-run after a change

When you make any change to the system (prompt change, vendor change, downstream code change), re-run the harness. Compare results.

| Test # | Previous score | New score | Change | Investigate? |
|--------|---------------|-----------|--------|--------------|
| | | | | |

Any score that drops by 1+ points is investigated. Either the change is a regression or the test was flaky. Either way, the team learns something.

## Exercise 5: Quarterly review

Once a quarter, run the harness with no system changes. Compare against prior quarters.

If scores have shifted with no system changes, the vendor's model has shifted. Decide:
- Roll back to a pinned model version (where supported)
- Adjust the prompt to compensate for the model change
- Accept the new behavior if the shift is positive
- Switch vendors if the shift is negative and the vendor cannot be pinned

The discipline is to make this an explicit decision rather than an ambient drift.

---

---

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



# ============================================
# 12-ai-coding-practice
# ============================================

# 12 - AI-Assisted Coding in Practice

How to ship real software with Codex CLI, Claude Code, and similar coding agents without creating maintenance debt.

## The claim

AI coding agents are no longer just autocomplete. The useful mental model is a junior engineer with a terminal, a large working memory, uneven judgment, and the ability to make changes much faster than you can review them. The durable productivity gain comes from operating that agent deliberately: persistent project instructions, narrow tasks, explicit permissions, tests-first verification, and a second review pass before the work lands.

Teams that treat CLI agents as magic implementation engines create hidden debt. Teams that treat them as repo operators with a clear operating model get leverage without giving up engineering control.

## Why this matters

The modern coding-agent workflow has moved from "generate this function" to "inspect the repo, edit files, run tests, explain the diff, and open a PR." That shift changes the risk profile. A tool that can read and write a repository, run shell commands, use external tools through MCP, and continue work across sessions is useful precisely because it has enough agency to cause damage.

The answer is not to avoid the tools. The answer is to define how they operate.

## The idea

Use a four-loop operating model:

1. Prepare the repo context.
2. Choose the right execution mode.
3. Frame the task tightly.
4. Verify the diff before it ships.

The specific commands change. The operating model does not.

### Loop 1: Prepare the repo context

Every agentic coding session starts better when the tool can read durable project guidance before you type the task.

For Codex CLI, use `AGENTS.md`. Put repository conventions, build commands, test commands, forbidden patterns, review expectations, and content style rules in the file. Codex discovers `AGENTS.md` files from the repo root down to the working directory, so nested directories can carry more specific guidance.

For Claude Code, use `CLAUDE.md`. If your repo already has `AGENTS.md`, create a short `CLAUDE.md` that imports it:

```md
@AGENTS.md

## Claude Code

- Use plan mode for large changes before editing files.
- Keep generated edits narrow and run the documented verification command.
```

Use these files for facts the agent should always know:

- Package manager and build commands
- Test commands and expected verification steps
- Architecture boundaries and naming conventions
- Files or directories that require extra care
- Documentation style rules
- Review expectations before committing

Do not put long API references or one-off procedures in always-loaded context. Put those in linked docs, skills, or task prompts so they load only when needed.

### Loop 2: Choose the right execution mode

Different agent modes solve different problems.

| Need | Codex CLI pattern | Claude Code pattern |
|------|-------------------|---------------------|
| Pair on a change interactively | `codex` | `claude` |
| Ask for a read-only investigation | `codex --sandbox read-only` or explicit prompt constraints | `claude --permission-mode plan` |
| Run a scripted task | `codex exec "task"` | `claude -p "task"` |
| Continue prior work | `codex resume` or `codex exec resume --last` | `claude --continue` or `claude --resume` |
| Review a local diff | `/review` inside Codex | Ask Claude to review the diff, or use a review-focused subagent |
| Keep broad research out of the main context | Ask for subagents when enabled | Ask Claude to use a subagent |
| Work in parallel without edit collisions | Codex cloud tasks or separate worktrees | `claude --worktree <name>` or separate worktrees |
| Connect external systems | `codex mcp` or `config.toml` MCP servers | `claude mcp` or project/user MCP settings |

The safest default for implementation work is local, interactive, workspace-scoped editing. Use non-interactive automation only when the task is well specified and the environment is controlled.

### Loop 3: Frame the task tightly

A good CLI-agent task prompt has six parts:

1. **Outcome.** What should be true when the task is done.
2. **Scope.** Which files, modules, or workflows are in bounds.
3. **Constraints.** What must not change.
4. **Verification.** Which command, test, or manual check proves the result.
5. **Risk focus.** What failure modes the agent should watch for.
6. **Completion format.** What summary you want back.

Template:

```text
Goal: <specific user-visible outcome>

Scope:
- In bounds: <files, modules, or flows>
- Out of bounds: <files, APIs, refactors, dependencies>

Constraints:
- Preserve <public behavior, data shape, style rule>
- Do not <known risky action>

Verification:
- Run <command>
- If that fails, report the failing command and likely cause before trying broad fixes

Review focus:
- Check <security, accessibility, migration, regression, stale data>

Finish with:
- Files changed
- Verification result
- Remaining risk
```

Bad prompt:

```text
Improve the frontend and update the AI coding module.
```

Better prompt:

```text
Goal: Update module 12 so it teaches practical Codex CLI and Claude Code workflows as of June 2026.

Scope:
- Edit modules/12-ai-coding-practice/module.md, exercises.md, and references.md.
- If useful, add one React tool under components/interactive/.
- Regenerate notebook bundles.

Constraints:
- Keep the tone consistent with the existing modules.
- Do not add a backend, telemetry, or paid API dependency.
- Prefer official OpenAI and Anthropic docs for current tool behavior.

Verification:
- Run npm run build.
- Check git diff for generated bundle changes.

Finish with:
- Content changes
- Frontend changes
- Build result
```

### Loop 4: Verify the diff before it ships

AI coding agents are strongest when verification is explicit and weakest when "it looks right" is treated as enough.

The discipline:

- Read every file changed by the agent.
- Run the tests or build yourself, or watch the agent run them and inspect the output.
- Ask for a review pass focused on regressions, not praise.
- Use a second agent as reviewer when the change is risky. For example, have Codex implement and Claude review, or have Claude implement and Codex review.
- Keep the final commit human-owned. The human is accountable for the code, even when the agent wrote it.

## Using Codex CLI well

Codex CLI is strongest when you want a terminal-first collaborator that can inspect a local repository, edit files, run commands, review diffs, use MCP tools, and continue work across sessions.

High-leverage patterns:

- **Interactive implementation:** run `codex` from the repository root, describe the target behavior, then review plans, commands, and diffs as they happen.
- **Explicit permissions:** use `/permissions` during a session, or launch with `--sandbox read-only`, `--sandbox workspace-write`, and `--ask-for-approval on-request` depending on the task.
- **Local review:** use `/review` before committing. Ask for findings ordered by severity, with file and line references.
- **Non-interactive scripts:** use `codex exec` for bounded automation such as summarizing logs, drafting release notes, or triaging test failures. For edit-capable runs, set the sandbox explicitly.
- **Persistent repo guidance:** keep `AGENTS.md` current. When Codex repeats a mistake, update the file rather than retyping the correction every session.
- **MCP for live tools:** connect documentation, GitHub, browser, Figma, Sentry, or other systems through MCP when the agent needs authorized external context.
- **Cloud/offloaded work:** use Codex cloud tasks for work that can run away from your active terminal, then inspect and apply the result locally.

Guardrails:

- Avoid `--dangerously-bypass-approvals-and-sandbox` except inside an externally isolated environment.
- Do not pass broad secrets into the environment for tasks that run repo-controlled scripts.
- Keep `codex exec` prompts narrow. Non-interactive agents should not be asked to make open-ended architecture decisions without a review stage.

## Using Claude Code well

Claude Code is strongest when you want an agent that can operate across the whole project, preserve project memory through `CLAUDE.md`, plan before editing, delegate research to subagents, and run parallel work in worktrees.

High-leverage patterns:

- **Plan before editing:** use `claude --permission-mode plan` for broad changes. Claude reads files and proposes a plan before making edits.
- **Project memory:** maintain `CLAUDE.md` for project conventions. If the repo also supports other agents, import `AGENTS.md` instead of duplicating guidance.
- **Subagents for noisy research:** ask Claude to use a subagent when investigation would flood the main conversation with file reads, logs, or search results.
- **Worktrees for parallelism:** use `claude --worktree <name>` when one session should edit a branch while another session works elsewhere.
- **Non-interactive output:** use `claude -p "task"` when you want stdout-friendly output for scripts, CI, or batch processing.
- **MCP and hooks:** use MCP for external systems and hooks for actions that must run on specific events, such as blocking protected edits or running checks after file changes.
- **Resume long work:** use `claude --continue`, `claude --resume`, or `/resume` when a task spans multiple sittings.

Guardrails:

- Treat `CLAUDE.md` as context, not enforcement. If an action must be blocked, use permissions or hooks.
- Keep always-loaded memory concise. Move long reference material into skills or linked docs.
- Do not let multiple Claude sessions edit the same worktree at the same time.
- Avoid permission bypass modes unless the environment is isolated and disposable.

## Combining Codex and Claude

The best two-agent workflow is not "let both write code at once." It is role separation.

Useful combinations:

- **Plan comparison:** ask Codex and Claude for independent plans, then choose one.
- **Implement/review:** one agent implements; the other reviews the diff for regressions.
- **Research/execute:** one agent researches a confusing subsystem; the other implements using the research summary.
- **Frontend/design check:** one agent edits UI; the other reviews accessibility, layout, copy, and build behavior.
- **Stale-docs check:** one agent updates content from official docs; the other searches for unsupported claims and stale references.

Rules:

- One writer per worktree.
- One explicit verification command.
- One human owner for the final diff.

## Common failure modes

- **Auto-accepting edits.** The agent wrote quickly; the human reviewed slowly or not at all.
- **Prompting without scope.** The agent makes design decisions the team never agreed to.
- **Skipping persistent guidance.** The same corrections get typed in every session instead of captured in `AGENTS.md` or `CLAUDE.md`.
- **Using non-interactive mode for vague work.** A scriptable agent is best for bounded tasks, not ambiguous product judgment.
- **Letting context bloat.** The main session fills with logs, file dumps, and search results that should have gone to a subagent or separate run.
- **Two agents editing one branch.** Parallelism becomes merge conflict and behavioral drift.
- **Trusting generated tests.** Tests written after the implementation often verify the implementation rather than the requirement.
- **Measuring lines shipped.** The real measure is sustained feature delivery with stable maintenance cost.

## What this module does not cover

- Detailed pricing, entitlement, and model availability for specific vendors. Those change too quickly.
- Security review for AI-generated code in regulated systems. The practices here reduce risk but do not replace secure development lifecycle controls.
- Full CI/CD automation patterns. Start with local interactive use, then automate only the workflows that have become boring and repeatable.

## Try this

See [exercises.md](exercises.md).

The interactive version is in `components/interactive/AgenticCodingPlaybook.jsx`.

## Further reading

See [references.md](references.md).


---

# 12 - Exercises

## Exercise 1: Create the agent brief

Write the project guidance file your coding agents should read before doing work.

For Codex CLI, use `AGENTS.md`. For Claude Code, use `CLAUDE.md`, or import the same guidance with `@AGENTS.md`.

Include only durable guidance:

| Section | What belongs here |
|---------|-------------------|
| Build and test commands | The exact commands an agent should run before finishing |
| Project structure | Where important code, docs, tests, and generated files live |
| Coding standards | Conventions that are not obvious from nearby code |
| Protected areas | Files, APIs, schemas, or workflows that require extra review |
| Review expectations | What the agent should check before saying the task is done |

Keep the first version under 150 lines. If it becomes longer, move reference material into linked docs or skills.

## Exercise 2: Run a Codex CLI task with tight scope

Pick a small change you can verify in under 20 minutes.

Write a Codex prompt using the module template:

```text
Goal:

Scope:
- In bounds:
- Out of bounds:

Constraints:

Verification:

Review focus:

Finish with:
```

Run it interactively:

```bash
codex
```

After the agent finishes, record:

| Question | Answer |
|----------|--------|
| What files changed? | |
| What command verified the work? | |
| What did you reject or revise? | |
| What should move into `AGENTS.md` for next time? | |

## Exercise 3: Use Claude Code plan mode

Pick a change with enough ambiguity that you should review the plan before edits.

Start Claude in plan mode:

```bash
claude --permission-mode plan
```

Ask for a plan, not implementation. Approve edits only after the plan names the files, risk, and verification command.

Review the plan:

| Check | Pass/fail | Notes |
|-------|-----------|-------|
| Names specific files or modules | | |
| States what will not change | | |
| Includes verification command | | |
| Identifies the riskiest assumption | | |
| Keeps unrelated refactors out | | |

If the plan is vague, revise the prompt before allowing edits.

## Exercise 4: Compare two agents before implementation

Use Codex and Claude as independent planners for the same task. Do not let both edit files.

Ask each:

```text
Read the relevant files and propose a plan for <task>. Do not edit. Include files touched, risks, and verification.
```

Compare:

| Dimension | Codex plan | Claude plan | Decision |
|-----------|------------|-------------|----------|
| Simpler scope | | | |
| Better risk identification | | | |
| Better verification plan | | | |
| Better fit with repo style | | | |

Choose one implementer. Use the other agent as reviewer after the diff exists.

## Exercise 5: Identify an automation candidate

Find one workflow that is repeated, bounded, and low-judgment enough for non-interactive CLI use.

Good candidates:

- Summarize CI logs
- Draft release notes from commits
- Check documentation for stale links
- Produce a PR review checklist from a diff
- Triage lint or test output before a human fixes it

Bad candidates:

- Redesign the architecture
- Rewrite a subsystem
- Decide product behavior
- Modify security-sensitive code without human review

Write the non-interactive command you would use:

```bash
# Codex
codex exec "<bounded task>"

# Claude
claude -p "<bounded task>"
```

Define the safety boundary:

| Boundary | Decision |
|----------|----------|
| Read-only or edit-capable? | |
| What input is piped in? | |
| What output is expected? | |
| What secrets are withheld? | |
| Who reviews the result? | |

## Exercise 6: Quarterly stale-tool audit

Once a quarter, audit the agent setup.

| Item | Current state | Change needed |
|------|---------------|---------------|
| Codex CLI version and key workflows | | |
| Claude Code version and key workflows | | |
| `AGENTS.md` accuracy | | |
| `CLAUDE.md` accuracy | | |
| MCP servers still needed | | |
| Hooks or permissions still appropriate | | |
| Non-interactive scripts still bounded | | |

The goal is not to chase every new feature. The goal is to remove stale assumptions before they become hidden process debt.

---


---

# 12 - References

Tool-specific guidance reviewed on 2026-06-07. Re-check vendor docs before turning these notes into policy or automation.

## Current CLI documentation

- **OpenAI.** [Codex CLI features](https://developers.openai.com/codex/cli/features). Current guide to interactive mode, resume, review, MCP, web search, cloud tasks, slash commands, and other CLI workflows.
- **OpenAI.** [Codex CLI command reference](https://developers.openai.com/codex/cli/reference). Flag and command reference, including sandboxing, approvals, `codex exec`, `codex mcp`, `codex cloud`, `codex doctor`, and related commands.
- **OpenAI.** [Codex non-interactive mode](https://developers.openai.com/codex/noninteractive). Best source for `codex exec`, JSONL output, schemas, CI use, and automation safety.
- **OpenAI.** [Custom instructions with AGENTS.md](https://developers.openai.com/codex/guides/agents-md). How Codex discovers persistent repo guidance.
- **OpenAI.** [Codex Model Context Protocol](https://developers.openai.com/codex/mcp). How to connect Codex to MCP servers and external tools.
- **Anthropic.** [Claude Code getting started](https://code.claude.com/docs/en/getting-started). Current installation, platform, update, and authentication guidance.
- **Anthropic.** [Claude Code CLI reference](https://code.claude.com/docs/en/cli-usage). Commands and flags, including `claude -p`, MCP, plugins, and permission prompt tooling.
- **Anthropic.** [Claude Code common workflows](https://code.claude.com/docs/en/common-workflows). Practical patterns for resuming sessions, worktrees, plan mode, subagents, and non-interactive scripts.
- **Anthropic.** [How Claude remembers your project](https://code.claude.com/docs/en/memory). `CLAUDE.md`, auto memory, project guidance, imports, and troubleshooting.
- **Anthropic.** [Extend Claude Code](https://code.claude.com/docs/en/features-overview). When to use `CLAUDE.md`, skills, MCP, subagents, hooks, plugins, and related extension points.
- **Anthropic.** [Create custom subagents](https://code.claude.com/docs/en/subagents). Subagent isolation, configuration, permissions, skills, and examples.
- **Anthropic.** [Configure permissions](https://code.claude.com/docs/en/permissions). Permissions, hooks, additional directories, and sandboxing interactions.

## On code review for AI-generated code

- **Google.** [Engineering Practices Documentation](https://google.github.io/eng-practices/). Pre-AI code review guidance that still applies: correctness, design, complexity, tests, and maintainability.
- **OpenAI and Anthropic tool docs.** Both vendors now expose review, permission, and persistent-instruction workflows. Read these as operational controls, not as substitutes for human code ownership.

## On test discipline

- **Beck, Kent.** *Test-Driven Development* (2002). The original tests-first argument. AI-assisted coding makes the discipline more important, not less.
- **Martin, Robert.** *Clean Code* (2008). Older, but the chapters on tests and maintainability remain useful when reviewing generated code.

## On productivity evidence

- **GitHub.** Copilot documentation and productivity research. Useful but read with the obvious vendor incentive in mind.
- **METR.** Studies on AI impact on software engineering tasks. More skeptical and useful as a counterweight to vendor claims.
- **DORA.** State of DevOps reports. Useful for reading AI-tool adoption through the lens of delivery, quality, and organizational performance rather than lines of code.

## On automation and deskilling

- **Bainbridge, Lisanne.** "Ironies of Automation" (1983). The classic paper on automation and human skill. The argument ports directly to AI coding.
- **Engineering management postmortems and team writeups.** Prioritize writeups with concrete workflow details: review gates, test strategy, onboarding effects, and maintenance cost.

## On security

- **OWASP.** [Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/). Good checklist for prompt injection, excessive agency, data leakage, and unsafe output handling.
- **Snyk and similar security research.** Useful for examples of vulnerable generated code. Treat vendor security studies as directional unless the methodology is public.

## A note on the moving landscape

Specific CLI features change quickly. The durable practice is not memorizing a command catalog. The durable practice is maintaining a repo-level agent brief, choosing the right execution mode, constraining the task, and verifying the diff.
