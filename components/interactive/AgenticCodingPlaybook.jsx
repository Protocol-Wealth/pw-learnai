import React, { useMemo, useState } from 'react'
import {
  BookOpen,
  CheckCircle2,
  Clipboard,
  Code2,
  GitBranch,
  PlayCircle,
  ShieldCheck,
  Terminal,
} from 'lucide-react'

const TOOLS = {
  codex: {
    name: 'Codex CLI',
    memory: 'AGENTS.md',
  },
  claude: {
    name: 'Claude Code',
    memory: 'CLAUDE.md',
  },
}

const MODES = [
  {
    id: 'interactive',
    label: 'Pair',
    icon: Terminal,
    detail: 'Iterate in the terminal and inspect actions as they happen.',
  },
  {
    id: 'plan',
    label: 'Plan',
    icon: BookOpen,
    detail: 'Read and propose before editing.',
  },
  {
    id: 'script',
    label: 'Script',
    icon: PlayCircle,
    detail: 'Use stdout-friendly output for a bounded task.',
  },
  {
    id: 'review',
    label: 'Review',
    icon: ShieldCheck,
    detail: 'Inspect a diff before commit or PR.',
  },
]

const EXAMPLES = {
  codex: {
    interactive: 'codex',
    plan: 'codex --sandbox read-only "Read the relevant files and propose a plan. Do not edit."',
    script: 'codex exec "Summarize the failing tests and propose the smallest fix."',
    review: 'codex\n# then run /review inside the session',
  },
  claude: {
    interactive: 'claude',
    plan: 'claude --permission-mode plan',
    script: 'claude -p "Summarize the failing tests and propose the smallest fix."',
    review: 'claude --permission-mode plan\n# ask for a review of the local diff',
  },
}

const DEFAULTS = {
  goal: 'Update module 12 so it teaches practical Codex CLI and Claude Code workflows.',
  scope: 'In bounds: module 12 markdown, one browser-only React tool, notebook bundles.\nOut of bounds: backend services, telemetry, paid API calls, unrelated modules.',
  constraints: 'Keep tone consistent with existing modules. Prefer official OpenAI and Anthropic docs for current tool behavior. Preserve client-only frontend behavior.',
  verification: 'Run pnpm bundle and pnpm build. Review the generated bundle diff before finishing.',
  risk: 'Stale vendor claims, over-broad frontend refactors, generated tests that only verify the implementation.',
}

function buildPrompt(values) {
  return [
    `Goal: ${values.goal.trim() || '<specific user-visible outcome>'}`,
    '',
    'Scope:',
    values.scope.trim() || '- In bounds:\n- Out of bounds:',
    '',
    'Constraints:',
    values.constraints.trim() || '- Preserve:\n- Do not:',
    '',
    'Verification:',
    values.verification.trim() || '- Run:',
    '',
    'Review focus:',
    values.risk.trim() || '- Check:',
    '',
    'Finish with:',
    '- Files changed',
    '- Verification result',
    '- Remaining risk',
  ].join('\n')
}

export default function AgenticCodingPlaybook() {
  const [tool, setTool] = useState('codex')
  const [mode, setMode] = useState('interactive')
  const [values, setValues] = useState(DEFAULTS)
  const [copied, setCopied] = useState(false)

  const currentTool = TOOLS[tool]
  const currentMode = MODES.find(item => item.id === mode)
  const Icon = currentMode.icon
  const prompt = useMemo(() => buildPrompt(values), [values])
  const command = EXAMPLES[tool][mode]

  function update(field, value) {
    setValues(previous => ({ ...previous, [field]: value }))
  }

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
            <Code2 className="h-4 w-4" aria-hidden="true" />
            Module 12
          </div>
          <h2 className="mt-1 text-2xl font-semibold text-zinc-950">CLI Coding Playbook</h2>
          <p className="mt-1 max-w-2xl text-sm text-zinc-600">
            Shape a bounded coding-agent task, pick the right mode, and keep the verification step visible.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          Reads {currentTool.memory}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-zinc-200 bg-white p-4">
          <div className="text-sm font-semibold text-zinc-900">Agent</div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {Object.entries(TOOLS).map(([id, item]) => (
              <button
                key={id}
                type="button"
                onClick={() => setTool(id)}
                className={`flex min-h-12 items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium transition ${
                  tool === id
                    ? 'border-zinc-950 bg-zinc-950 text-white'
                    : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400'
                }`}
              >
                <Terminal className="h-4 w-4" aria-hidden="true" />
                {item.name}
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white p-4">
          <div className="text-sm font-semibold text-zinc-900">Mode</div>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {MODES.map(item => {
              const ModeIcon = item.icon
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMode(item.id)}
                  title={item.detail}
                  className={`flex min-h-12 items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium transition ${
                    mode === item.id
                      ? 'border-emerald-700 bg-emerald-700 text-white'
                      : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400'
                  }`}
                >
                  <ModeIcon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </button>
              )
            })}
          </div>
        </section>
      </div>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          <label className="block rounded-lg border border-zinc-200 bg-white p-4">
            <span className="text-sm font-semibold text-zinc-900">Goal</span>
            <textarea
              value={values.goal}
              onChange={event => update('goal', event.target.value)}
              rows={3}
              className="mt-2 w-full resize-y rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </label>

          <label className="block rounded-lg border border-zinc-200 bg-white p-4">
            <span className="text-sm font-semibold text-zinc-900">Scope</span>
            <textarea
              value={values.scope}
              onChange={event => update('scope', event.target.value)}
              rows={5}
              className="mt-2 w-full resize-y rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </label>

          <label className="block rounded-lg border border-zinc-200 bg-white p-4">
            <span className="text-sm font-semibold text-zinc-900">Constraints</span>
            <textarea
              value={values.constraints}
              onChange={event => update('constraints', event.target.value)}
              rows={4}
              className="mt-2 w-full resize-y rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </label>
        </div>

        <div className="space-y-4">
          <label className="block rounded-lg border border-zinc-200 bg-white p-4">
            <span className="text-sm font-semibold text-zinc-900">Verification</span>
            <textarea
              value={values.verification}
              onChange={event => update('verification', event.target.value)}
              rows={4}
              className="mt-2 w-full resize-y rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </label>

          <label className="block rounded-lg border border-zinc-200 bg-white p-4">
            <span className="text-sm font-semibold text-zinc-900">Review focus</span>
            <textarea
              value={values.risk}
              onChange={event => update('risk', event.target.value)}
              rows={4}
              className="mt-2 w-full resize-y rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </label>

          <section className="rounded-lg border border-zinc-200 bg-zinc-950 p-4 text-white">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Icon className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              {currentTool.name} command
            </div>
            <pre className="mt-3 min-h-16 overflow-x-auto whitespace-pre-wrap rounded-md bg-black/40 p-3 text-sm text-zinc-100">
              {command}
            </pre>
          </section>
        </div>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
            <GitBranch className="h-4 w-4 text-emerald-700" aria-hidden="true" />
            Task prompt
          </div>
          <button
            type="button"
            onClick={copyPrompt}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-emerald-700 px-3 text-sm font-medium text-white transition hover:bg-emerald-800"
          >
            <Clipboard className="h-4 w-4" aria-hidden="true" />
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <pre className="mt-3 max-h-96 overflow-auto whitespace-pre-wrap rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-800">
          {prompt}
        </pre>
      </section>
    </div>
  )
}
