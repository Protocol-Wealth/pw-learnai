import React, { useMemo, useState } from 'react'
import { Check, Copy, AlertTriangle, FileWarning } from 'lucide-react'

// AgentInstructionsAuditor — companion to Module 13.
// Deterministic, in-browser linter for a pasted CLAUDE.md / AGENTS.md.
// No network, no LLM, no telemetry. All analysis runs synchronously on the pasted string.

// The deep-audit prompt is the Copy target. It is the part this browser tool cannot do:
// validate every command and path against a live repo. Kept verbatim with
// prompts/agent-instructions-deep-audit.md.
const DEEP_AUDIT_PROMPT = `Run a diagnostic + improvement pass on this repo's CLAUDE.md/AGENTS.md. You have
filesystem access; read the file yourself, validate it against repo ground truth, score
it, then rewrite it. Autonomous run: state the plan once, then execute; only stop for a
destructive action.
A good agent-instructions file encodes what the agent CANNOT infer and is needed every
turn: project-specific (exact stack, build/test/lint/run commands, topology, conventions,
gates); ground-truth-accurate (every command runs, every path exists, stack claims match
lockfiles); concise and non-redundant; positively framed; ranked (a spine up top), not
co-equal; anchored with good/bad examples; non-circular; matched to how the agent is run.
PHASE 1 DISCOVER: locate root and nested instruction files; inventory every command,
path, and rule they assert.
PHASE 2 VALIDATE (the part static review can't do): for each checkable claim mark
PASS/STALE/MISSING - do the commands match package.json/Makefile/CI? do referenced
files/dirs/env vars exist? does the declared stack match dependencies/lockfiles? what
major repo reality (tests, migrations, monorepo layout, codegen, deploy) is omitted?
PHASE 3 DIAGNOSE: score each property 1-5 with a section/validation anchor; rank findings
by impact; tag each KEEP/CUT/REWRITE.
PHASE 4 REMEDIATE: rewrite in full - lead with a ranked spine; add/correct a project
header from VERIFIED claims only; dedupe; cut generic philosophy the agent already knows;
convert load-bearing prohibitions to positive imperatives; match the runtime; remove
circular success criteria; recommend a nested file where a subdir warrants it.
PHASE 5 VERIFY: confirm no unvalidated command or path survives; report before/after line
count and net cut vs added.
OUTPUT: PLAN; VALIDATION TABLE (claim | PASS/STALE/MISSING | evidence); SCORECARD; RANKED
FINDINGS; REWRITTEN FILE (paste-ready); RESIDUAL GAPS marked [MISSING] or
[DECISION NEEDED] - never invent facts to fill them.
CONSTRAINTS: validate before rewrite; prefer cutting over adding; anchor every finding; a
shorter file the agent follows beats a complete one it ignores.
`

const SAMPLE = `# CLAUDE.md

These guidelines produce good code when applied consistently.

## Best practices

- Write clean, maintainable code.
- Follow best practices and industry standards.
- Don't introduce bugs.
- Never write code without tests.
- Avoid premature optimization.
- Do not over-engineer solutions.
- Handle edge cases gracefully.

## Workflow

- Stop and ask before making any architectural decision.
- Wait for buy-in before large changes.
- Follow these rules and the result will be good.

Following the guidelines above leads to high-quality, maintainable software.
`

// --- helpers (all pure, synchronous) ---

const nonEmptyLines = (text) =>
  text.split('\n').map((l) => l.trim()).filter(Boolean)

const stripListMarker = (line) =>
  line.replace(/^[-*+]\s+/, '').replace(/^\d+[.)]\s+/, '').trim()

const IMPERATIVE_VERBS = [
  'use', 'run', 'prefer', 'keep', 'add', 'write', 'state', 'limit', 'cite',
  'read', 'mention', 'commit', 'regenerate', 'validate', 'build', 'test',
  'lint', 'install', 'generate', 'match', 'lead', 'put', 'cut', 'revert',
  'check', 'ensure', 'make', 'set', 'name', 'start', 'halt', 'flag', 'reorder',
]

function gradeFor(avg) {
  if (avg >= 4.5) return { letter: 'A', color: 'bg-emerald-100 text-emerald-900 border-emerald-400' }
  if (avg >= 3.5) return { letter: 'B', color: 'bg-emerald-50 text-emerald-900 border-emerald-300' }
  if (avg >= 2.5) return { letter: 'C', color: 'bg-amber-100 text-amber-900 border-amber-400' }
  if (avg >= 1.5) return { letter: 'D', color: 'bg-orange-100 text-orange-900 border-orange-400' }
  return { letter: 'F', color: 'bg-red-100 text-red-900 border-red-400' }
}

function analyze(text) {
  const bytes = new TextEncoder().encode(text).length
  const lines = text.split('\n')
  const lineCount = lines.length
  const content = nonEmptyLines(text)
  const lower = text.toLowerCase()

  // 1. Context cost
  const hasImports = /(^|\n)\s*@[\w./-]+/.test(text)
  const ctxScore =
    bytes < 3500 ? 5 : bytes < 7000 ? 4 : bytes < 12000 ? 3 : bytes < 20000 ? 2 : 1
  const monolithic = bytes > 9000 && !hasImports
  const contextCost = {
    id: 'context',
    name: 'Context cost',
    score: monolithic ? Math.min(ctxScore, 2) : ctxScore,
    finding:
      `${bytes.toLocaleString()} bytes / ${lineCount} lines. ` +
      (bytes < 3500
        ? 'Lean — pays modest rent every turn.'
        : monolithic
        ? 'Large and monolithic (no @import split); every line competes with the task.'
        : 'Trim lines that would not change agent output if ignored.'),
  }

  // 2. Project specificity
  const cmdMatches = (lower.match(/\b(npm|pnpm|yarn|pip|poetry|make|cargo|go|bundle|rake|docker|node|gradle|mvn|dotnet)\b\s+\S+/g) || [])
  const fences = (text.match(/```/g) || []).length
  const pathMatches = (text.match(/(^|[\s(`])([\w.-]+\/[\w./-]+)/g) || [])
  const fileMatches = (text.match(/\b[\w-]+\.(js|jsx|ts|tsx|md|json|yml|yaml|toml|py|rs|go|sql|sh|mjs|cjs)\b/g) || [])
  const frameworkMatches = (lower.match(/\b(react|vue|svelte|next\.?js|vite|webpack|django|flask|rails|express|hono|fastapi|spring|laravel|postgres|postgresql|mysql|sqlite|redis|tailwind|typescript|python|rust|golang|kotlin|swift|vitest|jest|pytest|playwright)\b/g) || [])
  const specSignals =
    new Set([...cmdMatches, ...pathMatches, ...fileMatches, ...frameworkMatches].map((s) => s.trim())).size +
    (fences >= 2 ? 1 : 0)
  const specScore =
    specSignals >= 10 ? 5 : specSignals >= 6 ? 4 : specSignals >= 3 ? 3 : specSignals >= 1 ? 2 : 1
  const projectSpecificity = {
    id: 'specificity',
    name: 'Project specificity',
    score: specScore,
    finding:
      specSignals === 0
        ? 'No commands, paths, or framework names — this could be pasted into any repo.'
        : `${specSignals} concrete signal(s): commands, paths, file names, frameworks. The more repo-true facts, the more behavior changes.`,
  }

  // 3. Redundancy
  const meaningful = content.filter((l) => l.length > 12).map((l) => l.toLowerCase())
  const uniqueLines = new Set(meaningful)
  const dupRatio = meaningful.length ? (meaningful.length - uniqueLines.size) / meaningful.length : 0
  const headings = content.filter((l) => /^#{1,6}\s/.test(l)).map((l) => l.toLowerCase())
  const repeatedHeadings = headings.length - new Set(headings).size
  // shingle (3-word) overlap
  const words = lower.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean)
  const shingles = []
  for (let i = 0; i + 2 < words.length; i++) shingles.push(words.slice(i, i + 3).join(' '))
  const shingleRatio = shingles.length ? (shingles.length - new Set(shingles).size) / shingles.length : 0
  let redScore =
    dupRatio < 0.03 ? 5 : dupRatio < 0.08 ? 4 : dupRatio < 0.15 ? 3 : dupRatio < 0.25 ? 2 : 1
  if (shingleRatio > 0.35) redScore = Math.min(redScore, 3)
  if (repeatedHeadings > 0) redScore = Math.min(redScore, 3)
  const redundancy = {
    id: 'redundancy',
    name: 'Redundancy',
    score: redScore,
    finding:
      `${Math.round(dupRatio * 100)}% duplicate lines, ${Math.round(shingleRatio * 100)}% repeated phrasing` +
      (repeatedHeadings > 0 ? `, ${repeatedHeadings} repeated heading(s).` : '.') +
      (redScore >= 4 ? ' Little overlap.' : ' Collapse near-duplicates into one line.'),
  }

  // 4. Framing ratio
  const prohibitions = (lower.match(/\b(don't|do not|never|avoid|don’t)\b/g) || []).length
  const imperatives = content.reduce((n, raw) => {
    const first = stripListMarker(raw).split(/\s+/)[0]?.toLowerCase().replace(/[^a-z]/g, '')
    return n + (IMPERATIVE_VERBS.includes(first) ? 1 : 0)
  }, 0)
  const totalRules = prohibitions + imperatives
  const negShare = totalRules ? prohibitions / totalRules : 0
  const framingScore =
    totalRules === 0 ? 3
    : negShare <= 0.2 ? 5 : negShare <= 0.35 ? 4 : negShare <= 0.5 ? 3 : negShare <= 0.65 ? 2 : 1
  const framing = {
    id: 'framing',
    name: 'Framing ratio',
    score: framingScore,
    finding:
      totalRules === 0
        ? 'No clear rules detected to frame.'
        : `${prohibitions} prohibition(s) vs ${imperatives} positive imperative(s) — ${Math.round(negShare * 100)}% negative.` +
          (negShare > 0.5 ? ' Rewrite load-bearing "don\'t" rules as the positive action.' : ' Mostly tells the agent what to do.'),
  }

  // 5. Hierarchy
  const opening = content.slice(0, 12).join('\n').toLowerCase()
  const hierKeyword = /(read first|non-negotiable|first[,:]|priority|must not|invariant|ranked|if you do only one thing|order of)/i.test(opening)
  const numberedSpine = content.slice(0, 14).filter((l) => /^\d+[.)]\s/.test(l)).length >= 2
  const numberedAnywhere = content.filter((l) => /^\d+[.)]\s/.test(l)).length >= 2
  const hierScore = hierKeyword || numberedSpine ? 5 : numberedAnywhere ? 3 : 1
  const hierarchy = {
    id: 'hierarchy',
    name: 'Hierarchy',
    score: hierScore,
    finding:
      hierKeyword || numberedSpine
        ? 'Ranked lead section detected in the opening lines.'
        : 'No ranked spine up top — co-equal rules read as equally ignorable. Put the must-not-violate invariants first.',
  }

  // 6. Anchors
  const fenceBlocks = Math.floor(fences / 2)
  const goodBad = /(#\s*(good|bad)\b|\bgood\b.*\bbad\b|before\s*\/\s*after|✅|❌|bad —|good —)/i.test(text)
  const anchorScore =
    fenceBlocks >= 2 && goodBad ? 5 : goodBad ? 4 : fenceBlocks >= 2 ? 3 : fenceBlocks === 1 ? 2 : 1
  const anchors = {
    id: 'anchors',
    name: 'Anchors (examples)',
    score: anchorScore,
    finding:
      anchorScore <= 1
        ? 'No code blocks or good/bad examples — all prose steers weaker than one worked anchor.'
        : `${fenceBlocks} code block(s)${goodBad ? ', with good/bad or before/after contrast' : ''}.`,
  }

  // 7. Circular success criteria
  const circularRe = /(follow(ing)? these (rules|guidelines)|these (guidelines|rules) (work|produce|help|lead)|when (applied|followed) consistently|as (described|mentioned|noted) above|guidelines.*(consistently|good code))/gi
  const circularHits = (text.match(circularRe) || [])
  const circularScore = circularHits.length === 0 ? 5 : circularHits.length === 1 ? 2 : 1
  const circular = {
    id: 'circular',
    name: 'Non-circular success',
    score: circularScore,
    finding:
      circularHits.length === 0
        ? 'No self-referential success criteria detected.'
        : `${circularHits.length} circular line(s) ("${circularHits[0].trim().slice(0, 60)}…"). Define done by the repo: build passes, minimal diff, tests green.`,
  }

  // 8. Runtime fit (informational — surface, don't auto-fail)
  const checkpointRe = /(stop and ask|wait for|get buy-in|ask before|check with (me|the user)|pause and|await approval)/gi
  const checkpointHits = (text.match(checkpointRe) || [])
  const runtimeScore = checkpointHits.length === 0 ? 5 : 3
  const runtime = {
    id: 'runtime',
    name: 'Runtime fit',
    score: runtimeScore,
    informational: true,
    finding:
      checkpointHits.length === 0
        ? 'No checkpoint language — reads as written for an autonomous run.'
        : `${checkpointHits.length} checkpoint phrase(s) ("${checkpointHits[0].trim()}"). Fine if your runtime is interactive; reconcile if it is autonomous / skip-permissions.`,
  }

  const checks = [
    contextCost,
    projectSpecificity,
    redundancy,
    framing,
    hierarchy,
    anchors,
    circular,
    runtime,
  ]
  const avg = checks.reduce((s, c) => s + c.score, 0) / checks.length
  return { checks, avg, bytes, lineCount }
}

function ScoreBar({ score }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`h-1.5 w-5 rounded-sm ${
            n <= score
              ? score >= 4
                ? 'bg-emerald-500'
                : score >= 3
                ? 'bg-amber-500'
                : 'bg-red-500'
              : 'bg-slate-200'
          }`}
        />
      ))}
    </div>
  )
}

export default function AgentInstructionsAuditor() {
  const [text, setText] = useState('')
  const [copied, setCopied] = useState(false)

  const result = useMemo(() => (text.trim() ? analyze(text) : null), [text])
  const grade = result ? gradeFor(result.avg) : null

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(DEEP_AUDIT_PROMPT)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Agent Instructions Auditor</h2>
        <p className="text-slate-600 mt-1">
          Module 13 · Score a pasted CLAUDE.md / AGENTS.md against the properties that make it followable.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-5">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-slate-700">Paste your CLAUDE.md / AGENTS.md</label>
          <button
            onClick={() => setText(SAMPLE)}
            className="text-xs text-slate-600 hover:text-slate-900 underline"
          >
            Load sample
          </button>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={14}
          placeholder="Paste an agent-instructions file. Everything is analyzed in your browser — nothing is sent anywhere."
          className="w-full px-3 py-2 border border-slate-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <p className="text-xs text-slate-500 mt-2">
          In-browser, synchronous, deterministic. No network, no model, no telemetry.
        </p>
      </div>

      {result && (
        <>
          <div className={`rounded-lg border-2 p-5 ${grade.color}`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-medium uppercase tracking-wide opacity-70">Overall grade</div>
                <div className="text-sm mt-1">
                  {result.bytes.toLocaleString()} bytes · {result.lineCount} lines · avg {result.avg.toFixed(1)}/5
                </div>
              </div>
              <div className="text-5xl font-bold">{grade.letter}</div>
            </div>
          </div>

          <div className="space-y-2">
            {result.checks.map((c) => (
              <div
                key={c.id}
                className={`rounded-lg border p-3 ${
                  c.informational
                    ? 'bg-sky-50 border-sky-200'
                    : c.score >= 4
                    ? 'bg-emerald-50 border-emerald-200'
                    : c.score >= 3
                    ? 'bg-amber-50 border-amber-200'
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                    {c.informational ? (
                      <AlertTriangle className="h-4 w-4 text-sky-600" aria-hidden="true" />
                    ) : c.score >= 4 ? (
                      <Check className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                    ) : (
                      <FileWarning className="h-4 w-4 text-amber-600" aria-hidden="true" />
                    )}
                    {c.name}
                    {c.informational && <span className="text-[10px] uppercase tracking-wide text-sky-700">flag</span>}
                  </div>
                  <div className="flex items-center gap-2">
                    <ScoreBar score={c.score} />
                    <span className="font-mono text-xs text-slate-600">{c.score}/5</span>
                  </div>
                </div>
                <p className="text-xs leading-5 text-slate-600 mt-1.5">{c.finding}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold">Deep audit in your own repo</h3>
            <p className="text-sm text-slate-300 mt-1">
              The browser tool scores pasted text heuristically; the prompt validates against a live repo —
              every command run, every path checked — then rewrites the file.
            </p>
          </div>
          <button
            onClick={copyPrompt}
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            {copied ? 'Copied' : 'Copy prompt'}
          </button>
        </div>
        <pre className="mt-3 max-h-48 overflow-auto rounded-md bg-slate-950 p-3 text-xs leading-5 text-slate-300 whitespace-pre-wrap">
          {DEEP_AUDIT_PROMPT}
        </pre>
        <p className="text-xs text-slate-400 mt-2">
          Paste it into Claude Code (or any agent with filesystem access) running in the repo you want audited.
        </p>
      </div>

      <div className="text-xs text-slate-500 italic">
        Detection is heuristic and text-only: it sees the shape of the file, not your repo. A high grade means the
        file looks followable; only the deep-audit prompt can confirm its commands and paths are true.
      </div>
    </div>
  )
}
