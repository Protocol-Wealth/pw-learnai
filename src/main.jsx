import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  BookOpen,
  ExternalLink,
  FileText,
  Github,
  Search,
  Terminal,
  Wrench,
} from 'lucide-react'
import AgenticCodingPlaybook from '../components/interactive/AgenticCodingPlaybook.jsx'
import ConfirmationGateSimulator from '../components/interactive/ConfirmationGateSimulator.jsx'
import DisruptionDiagnostic from '../components/interactive/DisruptionDiagnostic.jsx'
import AdvantageMatrix from '../components/interactive/AdvantageMatrix.jsx'
import ValueDestructionPremortem from '../components/interactive/ValueDestructionPremortem.jsx'
import AssumptionRanker from '../components/interactive/AssumptionRanker.jsx'
import McpToolCallPlanner from '../components/interactive/McpToolCallPlanner.jsx'
import PiiGuardSimulator from '../components/interactive/PiiGuardSimulator.jsx'
import PlanningContractValidator from '../components/interactive/PlanningContractValidator.jsx'
import PromptEvaluator from '../components/interactive/PromptEvaluator.jsx'
import AgentInstructionsAuditor from '../components/interactive/AgentInstructionsAuditor.jsx'

const TOOLS = [
  {
    id: 'mcp-tool-planner',
    name: 'MCP Tool Planner',
    module: 'Lab',
    category: 'OSS Labs',
    component: McpToolCallPlanner,
    href: 'labs/protocol-wealth-oss/nexus-core-lab.md',
    description: 'Plan Nexus-style MCP tool sequences and classify the trust boundary.',
    tags: ['Nexus Core', 'MCP', 'Tool orchestration'],
  },
  {
    id: 'pii-guard',
    name: 'PII Guard Simulator',
    module: 'Lab',
    category: 'OSS Labs',
    component: PiiGuardSimulator,
    href: 'labs/protocol-wealth-oss/pwos-core-lab.md',
    description: 'Model a fail-closed prompt boundary for identity-shaped data.',
    tags: ['PWOS Core', 'PII', 'Compliance'],
  },
  {
    id: 'confirmation-gate',
    name: 'Confirmation Gate Simulator',
    module: 'Lab',
    category: 'OSS Labs',
    component: ConfirmationGateSimulator,
    href: 'labs/protocol-wealth-oss/pwos-core-lab.md',
    description: 'Preview, approve, and execute only the exact payload a human approved.',
    tags: ['PWOS Core', 'Write tools', 'Audit'],
  },
  {
    id: 'planning-contract',
    name: 'Planning Contract Validator',
    module: 'Lab',
    category: 'OSS Labs',
    component: PlanningContractValidator,
    href: 'labs/protocol-wealth-oss/pwplan-core-lab.md',
    description: 'Validate PII-free planning payloads against the PWPlan contract invariant.',
    tags: ['PWPlan Core', 'Planning', 'PII-free'],
  },
  {
    id: 'coding-playbook',
    name: 'CLI Coding Playbook',
    module: '12',
    category: 'Practice',
    component: AgenticCodingPlaybook,
    href: 'modules/12-ai-coding-practice/module.md',
    description: 'Compose bounded Codex CLI and Claude Code tasks with scope, permissions, and verification.',
    tags: ['Codex CLI', 'Claude Code', 'Review'],
  },
  {
    id: 'agent-instructions',
    name: 'Agent Instructions Auditor',
    module: '13',
    category: 'Practice',
    component: AgentInstructionsAuditor,
    href: 'modules/13-agent-instructions/module.md',
    description: 'Score a pasted CLAUDE.md / AGENTS.md in your browser, then copy a deep-audit prompt for your repo.',
    tags: ['CLAUDE.md', 'AGENTS.md', 'Coding agents'],
  },
  {
    id: 'prompt',
    name: 'Prompt Evaluator',
    module: '10',
    category: 'Practice',
    component: PromptEvaluator,
    href: 'modules/10-prompt-engineering/module.md',
    description: 'Score a prompt against the six durability properties.',
    tags: ['Prompts', 'Evaluation'],
  },
  {
    id: 'disruption',
    name: 'Disruption Diagnostic',
    module: '01',
    category: 'Strategy',
    component: DisruptionDiagnostic,
    href: 'modules/01-reading-disruption/module.md',
    description: 'Test a candidate disruption against the four-condition pattern.',
    tags: ['Strategy', 'Diagnosis'],
  },
  {
    id: 'matrix',
    name: 'AI Advantage Matrix',
    module: '02',
    category: 'Strategy',
    component: AdvantageMatrix,
    href: 'modules/02-ai-advantage-matrix/module.md',
    description: 'Classify activities by task leverage and moat durability.',
    tags: ['Moat', 'Prioritization'],
  },
  {
    id: 'premortem',
    name: 'Value Destruction Pre-Mortem',
    module: '03',
    category: 'Strategy',
    component: ValueDestructionPremortem,
    href: 'modules/03-ai-value-destruction/module.md',
    description: 'Pressure-test an AI deployment before value is destroyed quietly.',
    tags: ['Risk', 'Governance'],
  },
  {
    id: 'assumptions',
    name: 'Assumption Ranker',
    module: '07',
    category: 'Delivery',
    component: AssumptionRanker,
    href: 'modules/07-experimentation/module.md',
    description: 'Rank assumptions by stakes and confidence so experiments test the right thing first.',
    tags: ['Experimentation', 'Planning'],
  },
]

const MODULE_GROUPS = [
  {
    title: 'Start Here',
    modules: [
      ['00', 'Your First AI Coding Session', 'modules/00-getting-started/module.md'],
    ],
  },
  {
    title: 'Strategy and Judgment',
    modules: [
      ['01', 'Reading Disruption', 'modules/01-reading-disruption/module.md'],
      ['02', 'The AI Advantage Matrix', 'modules/02-ai-advantage-matrix/module.md'],
      ['03', 'Where AI Destroys Value', 'modules/03-ai-value-destruction/module.md'],
      ['05', 'Platform Economics', 'modules/05-platform-economics/module.md'],
      ['09', 'AI Judgment Under Uncertainty', 'modules/09-ai-judgment/module.md'],
    ],
  },
  {
    title: 'Organization and Delivery',
    modules: [
      ['06', 'Organizational Design for Continuous Change', 'modules/06-organizational-design/module.md'],
      ['07', 'Disciplined Experimentation', 'modules/07-experimentation/module.md'],
      ['08', 'Stakeholder Buy-in Through Evidence', 'modules/08-stakeholder-evidence/module.md'],
    ],
  },
  {
    title: 'Practice',
    modules: [
      ['04', 'Building Decision-Support Artifacts', 'modules/04-decision-artifacts/module.md'],
      ['10', 'Prompt Engineering for Operators', 'modules/10-prompt-engineering/module.md'],
      ['11', 'Evaluation Design for AI Systems', 'modules/11-evaluation-design/module.md'],
      ['12', 'AI-Assisted Coding in Practice', 'modules/12-ai-coding-practice/module.md'],
      ['13', 'Designing Agent Instructions', 'modules/13-agent-instructions/module.md'],
    ],
  },
  {
    title: 'Protocol Wealth OSS Labs',
    modules: [
      ['OSS', 'Labs Overview', 'labs/protocol-wealth-oss/README.md'],
      ['NX', 'Nexus Core Lab', 'labs/protocol-wealth-oss/nexus-core-lab.md'],
      ['OS', 'PWOS Core Lab', 'labs/protocol-wealth-oss/pwos-core-lab.md'],
      ['PL', 'PWPlan Core Lab', 'labs/protocol-wealth-oss/pwplan-core-lab.md'],
    ],
  },
]

function App() {
  const [selected, setSelected] = useState(TOOLS[0].id)
  const [query, setQuery] = useState('')

  const filteredTools = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return TOOLS
    return TOOLS.filter(tool => {
      return [
        tool.name,
        tool.description,
        tool.category,
        tool.module,
        ...tool.tags,
      ].some(value => value.toLowerCase().includes(normalized))
    })
  }, [query])

  const current = TOOLS.find(tool => tool.id === selected) || TOOLS[0]
  const Component = current.component

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-xl font-semibold">pw-learnai</h1>
            <p className="text-sm text-zinc-600">Applied AI strategy, evaluation, and coding-agent practice.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://github.com/Protocol-Wealth/pw-learnai"
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 text-sm font-medium text-zinc-800 transition hover:border-zinc-500"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href="labs/protocol-wealth-oss/README.md"
              className="inline-flex min-h-10 items-center gap-2 rounded-md bg-emerald-700 px-3 text-sm font-medium text-white transition hover:bg-emerald-800"
            >
              <Terminal className="h-4 w-4" aria-hidden="true" />
              OSS Labs
            </a>
          </div>
        </div>
      </header>

      <section className="border-b border-zinc-800 bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-300">
              <Wrench className="h-4 w-4" aria-hidden="true" />
              Updated for agentic coding workflows
            </div>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              Tools for deciding where AI helps, then practicing against real open-source starting points.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="border-l border-emerald-400 pl-3">
              <div className="text-2xl font-semibold">14</div>
              <div className="text-zinc-300">Modules</div>
            </div>
            <div className="border-l border-amber-400 pl-3">
              <div className="text-2xl font-semibold">3</div>
              <div className="text-zinc-300">OSS Labs</div>
            </div>
            <div className="border-l border-rose-400 pl-3">
              <div className="text-2xl font-semibold">{TOOLS.length}</div>
              <div className="text-zinc-300">Tools</div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <label className="relative block">
            <span className="sr-only">Search tools</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
            <input
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search tools"
              className="h-11 w-full rounded-md border border-zinc-300 bg-white pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </label>

          <nav className="space-y-2" aria-label="Interactive tools">
            {filteredTools.map(tool => (
              <button
                key={tool.id}
                type="button"
                onClick={() => setSelected(tool.id)}
                className={`w-full rounded-lg border p-3 text-left transition ${
                  selected === tool.id
                    ? 'border-emerald-700 bg-emerald-50'
                    : 'border-zinc-200 bg-white hover:border-zinc-400'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-zinc-950">{tool.name}</div>
                  <span className="rounded bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700">{tool.module}</span>
                </div>
                <p className="mt-1 text-xs leading-5 text-zinc-600">{tool.description}</p>
              </button>
            ))}
            {filteredTools.length === 0 && (
              <div className="rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-600">
                No tools match that search.
              </div>
            )}
          </nav>
        </aside>

        <div className="min-w-0 space-y-8">
          <section className="flex flex-col gap-3 border-b border-zinc-200 pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-medium text-emerald-700">
                {current.module === 'Lab' ? 'Protocol Wealth OSS Lab' : `Module ${current.module}`} / {current.category}
              </div>
              <h2 className="mt-1 text-2xl font-semibold text-zinc-950">{current.name}</h2>
              <p className="mt-1 max-w-3xl text-sm text-zinc-600">{current.description}</p>
            </div>
            <a
              href={current.href}
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-3 text-sm font-medium text-zinc-800 transition hover:border-zinc-500 md:self-start"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Read module
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </section>

          <Component />

          <section className="space-y-4 border-t border-zinc-200 pt-8">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-700" aria-hidden="true" />
              <h2 className="text-xl font-semibold text-zinc-950">Library Map</h2>
            </div>
            <div className="grid gap-4 xl:grid-cols-4">
              {MODULE_GROUPS.map(group => (
                <article key={group.title} className="rounded-lg border border-zinc-200 bg-white p-4">
                  <h3 className="text-sm font-semibold text-zinc-900">{group.title}</h3>
                  <div className="mt-3 space-y-2">
                    {group.modules.map(([number, title, href]) => (
                      <a
                        key={number}
                        href={href}
                        className="flex gap-3 rounded-md px-2 py-2 text-sm text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-950"
                      >
                        <span className="w-7 shrink-0 font-mono text-xs text-zinc-500">{number}</span>
                        <span>{title}</span>
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="mx-auto max-w-7xl border-t border-zinc-200 px-4 py-8 text-sm text-zinc-500 sm:px-6">
        Client-side React tools. No login, telemetry, backend, or external API calls.
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)
