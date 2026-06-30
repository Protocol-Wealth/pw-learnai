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
