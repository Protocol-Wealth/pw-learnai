import React, { useMemo, useState } from 'react'
import {
  CheckCircle2,
  Clipboard,
  Database,
  Github,
  Laptop,
  Server,
  Terminal,
} from 'lucide-react'

const OS_OPTIONS = [
  { id: 'mac', label: 'macOS' },
  { id: 'windows', label: 'Windows' },
  { id: 'linux', label: 'Linux' },
]

const DATA_OPTIONS = [
  { id: 'none', label: 'Not yet', detail: 'Stay on local repo practice.' },
  { id: 'catalog', label: 'Catalog data', detail: 'Data.gov and dataset metadata.' },
  { id: 'archives', label: 'Archives', detail: 'National Archives Catalog API.' },
  { id: 'harvesting', label: 'Harvesting', detail: 'OAI-PMH metadata repositories.' },
]

const DEPLOY_OPTIONS = [
  { id: 'none', label: 'No deploy' },
  { id: 'static', label: 'Static site' },
  { id: 'service', label: 'Small service' },
  { id: 'database', label: 'Needs database' },
]

const DESKTOP_AGENT = {
  mac: 'Install Codex app, Claude desktop/Claude Code, or Antigravity; open one practice repo and inspect a diff.',
  windows: 'Install Codex app or Claude desktop/Claude Code; keep projects on a normal project path and confirm Git works before using agents.',
  linux: 'Use a CLI-first setup or an IDE agent; confirm Git, Node, and your package manager work before asking an agent to edit.',
}

const CLI_AGENT = {
  mac: 'Install one CLI agent, then run a read-only summary from the repo root.',
  windows: 'Install one CLI agent in PowerShell or WSL, then confirm which filesystem the agent is using.',
  linux: 'Install one CLI agent and run it from the Git root with workspace-scoped permissions.',
}

function buildActions(form) {
  const actions = []

  if (!form.github) {
    actions.push('Create a GitHub account, enable 2FA, and install GitHub Desktop or Git.')
  } else {
    actions.push('Clone one practice repository and make one small branch so you can inspect a diff.')
  }

  if (!form.desktop) {
    actions.push(DESKTOP_AGENT[form.os])
  } else {
    actions.push('Use the desktop or IDE agent to inspect a repo and explain the diff before edits.')
  }

  if (!form.cli) {
    actions.push(CLI_AGENT[form.os])
  } else {
    actions.push('Run one scoped CLI-agent task with outcome, scope, constraints, verification, and finish format.')
  }

  actions.push('Add or review README.md, AGENTS.md, CLAUDE.md, CURRENT-STATE.md, CHANGELOG.md, NEXT-PROMPT.md, and ROADMAP.md.')

  if (form.data === 'catalog') {
    actions.push('Pick one Data.gov dataset and record the catalog page, publisher, access notes, license notes, and actual data URL.')
  } else if (form.data === 'archives') {
    actions.push('Read the National Archives Catalog API terms, get a key if needed, and test one read-only metadata query outside the app.')
  } else if (form.data === 'harvesting') {
    actions.push('Practice OAI-PMH with Identify, ListMetadataFormats, and ListRecords before writing a harvester.')
  } else {
    actions.push('Use fake local data until the repository loop is stable.')
  }

  if (form.deploy === 'static') {
    actions.push('Deploy a static fake-data page first; keep secrets and private data out of the build.')
  } else if (form.deploy === 'service') {
    actions.push('Use Cloud Run or Fly.io only after the local command and rollback path are documented.')
  } else if (form.deploy === 'database') {
    actions.push('Choose managed Postgres such as Neon only after schema, backup, access, and seed-data rules are written.')
  } else {
    actions.push('Do not deploy yet; finish the local workflow and verification loop first.')
  }

  return actions.slice(0, 7)
}

function buildPrompt(form, actions) {
  const dataLabel = DATA_OPTIONS.find(option => option.id === form.data)?.label || 'Not yet'
  const deployLabel = DEPLOY_OPTIONS.find(option => option.id === form.deploy)?.label || 'No deploy'

  return [
    'Goal: Help me complete the next step in my AI-operator setup without making broad or risky changes.',
    '',
    'Current setup:',
    `- OS: ${OS_OPTIONS.find(option => option.id === form.os)?.label}`,
    `- GitHub ready: ${form.github ? 'yes' : 'no'}`,
    `- Desktop/IDE agent ready: ${form.desktop ? 'yes' : 'no'}`,
    `- CLI agent ready: ${form.cli ? 'yes' : 'no'}`,
    `- Data interest: ${dataLabel}`,
    `- Deployment target: ${deployLabel}`,
    '',
    'Next actions:',
    ...actions.map(action => `- ${action}`),
    '',
    'Constraints:',
    '- Keep work local and reviewable.',
    '- Do not use secrets, private data, paid APIs, telemetry, or a backend unless I explicitly ask.',
    '- If editing a repo, read README.md and AGENTS.md or CLAUDE.md before changing files.',
    '',
    'Verification:',
    '- Name the command or manual check that proves the step is complete.',
    '- If no check exists, propose the smallest useful check before doing implementation work.',
    '',
    'Finish with:',
    '- Completed step',
    '- Files changed, if any',
    '- Verification result',
    '- Next safest step',
  ].join('\n')
}

export default function SetupPathBuilder() {
  const [form, setForm] = useState({
    os: 'windows',
    github: false,
    desktop: false,
    cli: false,
    data: 'catalog',
    deploy: 'static',
  })
  const [copied, setCopied] = useState(false)

  const actions = useMemo(() => buildActions(form), [form])
  const prompt = useMemo(() => buildPrompt(form, actions), [form, actions])

  function update(field, value) {
    setForm(previous => ({ ...previous, [field]: value }))
  }

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
            <Laptop className="h-4 w-4" aria-hidden="true" />
            Module 00
          </div>
          <h2 className="mt-1 text-2xl font-semibold text-slate-950">Setup Path Builder</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
            Turn a prompt-only starting point into the next concrete actions, then copy a bounded agent prompt.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          Browser-only output
        </div>
      </div>

      <section className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="text-sm font-semibold text-slate-900">Operating system</div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {OS_OPTIONS.map(option => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => update('os', option.id)}
                  className={`min-h-11 rounded-md border px-3 text-sm font-medium ${
                    form.os === option.id
                      ? 'border-slate-950 bg-slate-950 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="text-sm font-semibold text-slate-900">Setup state</div>
            <div className="mt-3 space-y-3">
              {[
                ['github', 'GitHub account + 2FA', Github],
                ['desktop', 'Desktop or IDE agent', Laptop],
                ['cli', 'CLI agent', Terminal],
              ].map(([field, label, Icon]) => (
                <label key={field} className="flex min-h-11 items-center gap-3 rounded-md border border-slate-200 px-3 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={form[field]}
                    onChange={event => update(field, event.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-emerald-700 focus:ring-emerald-600"
                  />
                  <Icon className="h-4 w-4 text-slate-500" aria-hidden="true" />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="text-sm font-semibold text-slate-900">Data track</div>
            <div className="mt-3 grid gap-2">
              {DATA_OPTIONS.map(option => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => update('data', option.id)}
                  className={`rounded-md border p-3 text-left ${
                    form.data === option.id
                      ? 'border-rose-700 bg-rose-50'
                      : 'border-slate-200 bg-white hover:border-slate-400'
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <Database className="h-4 w-4 text-rose-700" aria-hidden="true" />
                    {option.label}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-slate-600">{option.detail}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="text-sm font-semibold text-slate-900">Deployment target</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {DEPLOY_OPTIONS.map(option => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => update('deploy', option.id)}
                  className={`flex min-h-11 items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium ${
                    form.deploy === option.id
                      ? 'border-violet-700 bg-violet-700 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
                  }`}
                >
                  <Server className="h-4 w-4" aria-hidden="true" />
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <section className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">Next actions</h3>
            <ol className="mt-3 space-y-3">
              {actions.map((action, index) => (
                <li key={action} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-900">{index + 1}</span>
                  <span>{action}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-lg border border-slate-200 bg-slate-950 p-4 text-white">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-sm font-semibold">Copyable first prompt</h3>
              <button
                type="button"
                onClick={copyPrompt}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-white px-3 text-sm font-semibold text-slate-950 hover:bg-slate-100"
              >
                <Clipboard className="h-4 w-4" aria-hidden="true" />
                {copied ? 'Copied' : 'Copy prompt'}
              </button>
            </div>
            <pre className="mt-3 max-h-[520px] overflow-auto whitespace-pre-wrap rounded-md bg-black/40 p-3 text-sm leading-6 text-slate-100">
              {prompt}
            </pre>
          </section>
        </div>
      </section>
    </div>
  )
}
