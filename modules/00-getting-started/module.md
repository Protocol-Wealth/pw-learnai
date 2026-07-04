# 🚀 00 - Getting Started as an AI Operator

How to move from "I know ChatGPT prompts" to "I can use coding agents, GitHub, data sources, and deployment services without making a mess." ✨

> 💡 **Beginner Tip:** You can use our optional, zero-config [Static Starter Template](./first-page.html) to quickly test your browser flow without any build step. 🎉

---

## 🎯 The claim

The next step after prompt literacy is not learning every framework. It is learning an operating loop: 🔄

1. Put work in a repository.
2. Give the agent durable project instructions.
3. Ask for small, reviewable changes.
4. Run the documented check.
5. Update the state files that let the next session continue.

If a beginner can do that loop, they can learn Codex, Claude Code, Antigravity, or the next coding agent without restarting from zero. 😎

---

## 📊 Choose your level

Use level before tool choice: 🔥

| Level | You are here if | Next step |
|-------|-----------------|-----------|
| **Beginner** | You know ChatGPT or Claude prompts, but GitHub, local files, and diffs are new | Create GitHub, clone one repo, install one desktop or IDE agent, and complete one harmless read-only task |
| **Intermediate** | You can work in a repo, but agent work still depends on re-explaining context every session | Add `AGENTS.md`, `CLAUDE.md`, `CURRENT-STATE.md`, `CHANGELOG.md`, `NEXT-PROMPT.md`, and a verification loop |
| **Advanced** | You are ready to connect data sources, MCP tools, cloud services, or regulated workflow patterns | Write public-data source notes, keep payloads PII-free, and deploy only after rollback and verification are clear |

---

## 🕒 The first hour

A beginner should see a short visual route before reading a long module: 🧭

1. Create GitHub, enable 2FA, and open one practice repo or folder.
2. Choose Claude, Codex, or both.
3. Create one Markdown file for instructions.
4. Create one HTML file for something visible in the browser.
5. Ask for a read-only repo tour before any edits.
6. Let the agent make one tiny change, then inspect the diff and run the check.

The goal is not to learn every command. The goal is to learn that AI work becomes safer when it lives in files you can read, diff, open, and verify.🛡️

---

## 🛠️ Why Markdown and HTML

Markdown is useful because it is plain text that also renders nicely on GitHub. Use it for: ✨

* `README.md` to explain what the project is.
* `SETUP-NOTES.md` to record what was installed and what worked.
* `AGENTS.md` and `CLAUDE.md` to give coding agents durable rules.
* `CURRENT-STATE.md`, `CHANGELOG.md`, and `NEXT-PROMPT.md` to keep future sessions from starting cold.

HTML is useful because it is also just a file, but it gives immediate visual feedback. A beginner can make `first-page.html`, open it in a browser, and see something real without a backend, login, database, telemetry, or deployment. 🌐

Use them together:

```text
README.md        - what this project is and how to use it
SETUP-NOTES.md   - what you installed and what worked
ROADMAP.md       - prioritized future work and backlog
first-page.html  - the first visible browser artifact (Static Template)
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
