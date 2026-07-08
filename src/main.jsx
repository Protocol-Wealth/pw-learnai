import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Github,
  GitBranch,
  Layers,
  Link2,
  Search,
  Server,
  ShieldCheck,
  Terminal,
  Wrench,
} from 'lucide-react'
import './styles.css'
import AgenticCodingPlaybook from '../components/interactive/AgenticCodingPlaybook.jsx'
import SetupPathBuilder from '../components/interactive/SetupPathBuilder.jsx'
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
    id: 'setup-path',
    name: 'Setup Path Builder',
    module: '00',
    category: 'Getting Started',
    component: SetupPathBuilder,
    href: 'modules/00-getting-started/module.md',
    description: 'Turn a prompt-only starting point into next actions and a copyable agent prompt.',
    tags: ['GitHub', 'Codex', 'Claude', 'Onboarding'],
  },
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

const LEVEL_PATHS = [
  {
    id: 'beginner',
    level: 'Beginner',
    icon: GitBranch,
    summary: 'You know ChatGPT or Claude prompts, but repositories, diffs, and coding agents are new.',
    outcome: 'Outcome: clone a repo, use one agent safely, run one check, and read the diff.',
    actions: [
      'Create GitHub, enable 2FA, and clone one practice repo.',
      'Install one desktop or IDE agent before adding a CLI.',
      'Use the Setup Path Builder to turn your current setup into a bounded first prompt.',
    ],
    links: [
      ['Module 00', 'modules/00-getting-started/module.md'],
      ['Exercises', 'modules/00-getting-started/exercises.md'],
      ['Starter bundle', 'notebooklm/starter-bundle.md'],
    ],
  },
  {
    id: 'intermediate',
    level: 'Intermediate',
    icon: Terminal,
    summary: 'You can work in a repo and now need repeatable agent practice instead of one-off chat sessions.',
    outcome: 'Outcome: durable repo instructions, state files, scoped CLI tasks, and a documented verification loop.',
    actions: [
      'Write or improve AGENTS.md, CLAUDE.md, CURRENT-STATE.md, CHANGELOG.md, NEXT-PROMPT.md, and ROADMAP.md.',
      'Use Codex CLI or Claude Code for small edits with explicit scope and finish format.',
      'Add evaluation notes before increasing autonomy.',
    ],
    links: [
      ['Module 12', 'modules/12-ai-coding-practice/module.md'],
      ['Module 13', 'modules/13-agent-instructions/module.md'],
      ['Module 11', 'modules/11-evaluation-design/module.md'],
    ],
  },
  {
    id: 'advanced',
    level: 'Advanced',
    icon: Server,
    summary: 'You are ready to connect data, MCP tools, cloud services, or regulated workflow patterns.',
    outcome: 'Outcome: public-data source notes, PII-free contracts, clear deployment targets, and live verification.',
    actions: [
      'Start with Data.gov, National Archives, or OAI-PMH source notes before writing ingest code.',
      'Use Nexus, PWOS, and PWPlan labs to study MCP, compliance primitives, and PII-free planning contracts.',
      'Choose GitHub Pages, Cloud Run, Fly.io, or Neon only after the local loop and rollback path are clear.',
    ],
    links: [
      ['Module 14', 'modules/14-working-with-public-data/module.md'],
      ['OSS labs', 'labs/protocol-wealth-oss/README.md'],
      ['Data bundle', 'notebooklm/data-bundle.md'],
    ],
  },
]

const FIRST_HOUR_STEPS = [
  {
    title: 'Create the project home',
    icon: Github,
    action: 'Create GitHub, enable 2FA, and clone one practice repo or starter folder.',
    output: 'You have one place where files, changes, and history live.',
  },
  {
    title: 'Choose Claude, Codex, or both',
    icon: BrainCircuit,
    action: 'Use Claude for deep explanation and planning, Codex for coding and verification, or both with one writer at a time.',
    output: 'You know which agent is doing analysis and which one is allowed to edit.',
  },
  {
    title: 'Make two starter files',
    icon: FileText,
    action: 'Use Markdown for instructions and HTML for visual practice.',
    output: 'You have `README.md` for the project and `first-page.html` for something visible.',
  },
  {
    title: 'Ask for a read-only tour',
    icon: Terminal,
    action: 'Ask the agent to explain the folder and propose one tiny next step before editing anything.',
    output: 'You get a plan you can understand before files change.',
  },
  {
    title: 'Change one thing and check it',
    icon: CheckCircle2,
    action: 'Let the agent make one small change, then inspect the diff and run the documented check.',
    output: 'You finish with changed files, verification, and a next step.',
  },
]

const STARTER_FILE_GUIDES = [
  {
    kind: 'Markdown',
    icon: FileText,
    examples: 'README.md, SETUP-NOTES.md, AGENTS.md',
    why: 'Markdown is plain text that GitHub renders nicely. It is easy for humans and agents to read, easy to diff, and ideal for instructions, checklists, and project memory.',
  },
  {
    kind: 'HTML',
    icon: Code2,
    examples: 'first-page.html, index.html',
    why: 'HTML is also just a file. A beginner can open it in a browser and see a visual result without a backend, database, login, telemetry, or deployment.',
  },
]

const LEARNING_PATHS = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: GitBranch,
    summary: 'For someone who knows ChatGPT or Claude prompts and needs the next concrete steps.',
    links: [
      ['Module 00', 'modules/00-getting-started/module.md'],
      ['Exercises', 'modules/00-getting-started/exercises.md'],
      ['Starter bundle', 'notebooklm/starter-bundle.md'],
    ],
    steps: [
      'Create GitHub, enable 2FA, and clone a practice repository.',
      'Install one desktop or IDE agent, then add one CLI agent.',
      'Use a small task prompt with scope, constraints, and verification.',
    ],
  },
  {
    id: 'coding-agents',
    title: 'Working with Coding Agents',
    icon: Terminal,
    summary: 'Codex, Claude Code, Antigravity, MCP, worktrees, and reviewable task loops.',
    links: [
      ['Module 12', 'modules/12-ai-coding-practice/module.md'],
      ['Module 13', 'modules/13-agent-instructions/module.md'],
      ['OSS labs', 'labs/protocol-wealth-oss/README.md'],
    ],
    steps: [
      'Use AGENTS.md and CLAUDE.md for durable repo rules.',
      'Keep one writer per worktree and use review mode before committing.',
      'Add MCP only when the agent needs a specific external tool or data source.',
    ],
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    icon: ShieldCheck,
    summary: 'State files, changelogs, evals, data boundaries, and human-owned diffs.',
    links: [
      ['Module 11', 'modules/11-evaluation-design/module.md'],
      ['Agent auditor', 'modules/13-agent-instructions/module.md'],
      ['Prompt evaluator', 'modules/10-prompt-engineering/module.md'],
    ],
    steps: [
      'Keep CURRENT-STATE.md and CHANGELOG.md aligned with the real project.',
      'Prefer falsifiable rules over generic encouragement.',
      'Run the documented check and report anything not verified.',
    ],
  },
  {
    id: 'working-with-data',
    title: 'Working with Data',
    icon: Database,
    summary: 'Public datasets, archival APIs, OAI-PMH harvesting, and PII-free compute boundaries.',
    links: [
      ['Nexus lab', 'labs/protocol-wealth-oss/nexus-core-lab.md'],
      ['PWPlan lab', 'labs/protocol-wealth-oss/pwplan-core-lab.md'],
      ['Module 14', 'modules/14-working-with-public-data/module.md'],
    ],
    steps: [
      'Use Data.gov and the National Archives Catalog API as read-only sources first.',
      'Learn OAI-PMH as a metadata-harvesting pattern before writing scrapers.',
      'Keep fake or de-identified data in demos until access control and audit are designed.',
    ],
  },
]

const ECOSYSTEM_UPDATES = [
  {
    title: 'Nexus Core / nexusmcp.site',
    label: 'Public MCP + REST',
    href: 'labs/protocol-wealth-oss/nexus-core-lab.md',
    detail: 'Current surface includes regime signals, market data, FRED series, EMF scoring, educational options analytics, DeFi and on-chain read-only data, benchmarks, and PII-free planning tool dispatch.',
  },
  {
    title: 'PWOS Core',
    label: 'Compliance primitives',
    href: 'labs/protocol-wealth-oss/pwos-core-lab.md',
    detail: 'Current package set covers PII guardrails, hash-chained audit, MCP tool tiers, confirmation gates, webhooks, auth, cache keys, GCP helpers, ledger, holdings, CRM, document generation, workflow, and on-chain SDK primitives.',
  },
  {
    title: 'PWPlan Core',
    label: 'Thin planning UI',
    href: 'labs/protocol-wealth-oss/pwplan-core-lab.md',
    detail: 'Current contract exposes 16 planning tools through a PII-free schema, including Monte Carlo, glide path, Roth conversion, RMD, Social Security, FIRE, risk metrics, rebalance, and capital-market assumptions.',
  },
]

const DATA_STARTERS = [
  {
    name: 'Data.gov',
    href: 'https://data.gov/developers/apis/',
    detail: 'Start with catalog metadata, publisher, license notes, and the actual dataset link.',
  },
  {
    name: 'National Archives Catalog API',
    href: 'https://www.archives.gov/research/catalog/help/api',
    detail: 'Use API keys and rate limits correctly; treat archival metadata as source material that needs attribution.',
  },
  {
    name: 'OAI-PMH',
    href: 'https://www.openarchives.org/OAI/openarchivesprotocol.html',
    detail: 'Practice with Identify, ListMetadataFormats, ListRecords, GetRecord, and resumption tokens.',
  },
]

const MODULE_GROUPS = [
  {
    title: 'Getting Started',
    modules: [
      ['00', 'Getting Started as an AI Operator', 'modules/00-getting-started/module.md'],
      ['10', 'Prompt Engineering for Operators', 'modules/10-prompt-engineering/module.md'],
      ['11', 'Evaluation Design for AI Systems', 'modules/11-evaluation-design/module.md'],
    ],
  },
  {
    title: 'Working with Coding Agents',
    modules: [
      ['12', 'AI-Assisted Coding in Practice', 'modules/12-ai-coding-practice/module.md'],
      ['13', 'Designing Agent Instructions', 'modules/13-agent-instructions/module.md'],
      ['OSS', 'Protocol Wealth OSS Labs', 'labs/protocol-wealth-oss/README.md'],
    ],
  },
  {
    title: 'Best Practices',
    modules: [
      ['04', 'Building Decision-Support Artifacts', 'modules/04-decision-artifacts/module.md'],
      ['06', 'Organizational Design for Continuous Change', 'modules/06-organizational-design/module.md'],
      ['07', 'Disciplined Experimentation', 'modules/07-experimentation/module.md'],
      ['08', 'Stakeholder Buy-in Through Evidence', 'modules/08-stakeholder-evidence/module.md'],
    ],
  },
  {
    title: 'Working with Data',
    modules: [
      ['NX', 'Nexus Core Lab', 'labs/protocol-wealth-oss/nexus-core-lab.md'],
      ['PL', 'PWPlan Core Lab', 'labs/protocol-wealth-oss/pwplan-core-lab.md'],
      ['OS', 'PWOS Core Lab', 'labs/protocol-wealth-oss/pwos-core-lab.md'],
      ['14', 'Working with Public Data', 'modules/14-working-with-public-data/module.md'],
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
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-xl font-semibold">pw-learnai</h1>
            <p className="text-sm text-slate-600">Applied AI strategy, coding-agent practice, and browser-only learning tools.</p>
          </div>
          <nav className="flex flex-wrap gap-2 text-sm" aria-label="Primary">
            <a href="#first-hour" className="inline-flex min-h-10 items-center rounded-md border border-slate-300 px-3 font-medium text-slate-800 hover:border-slate-500">First Hour</a>
            <a href="#levels" className="inline-flex min-h-10 items-center rounded-md border border-slate-300 px-3 font-medium text-slate-800 hover:border-slate-500">Levels</a>
            <a href="#coding-agents" className="inline-flex min-h-10 items-center rounded-md border border-slate-300 px-3 font-medium text-slate-800 hover:border-slate-500">Coding Agents</a>
            <a href="#best-practices" className="inline-flex min-h-10 items-center rounded-md border border-slate-300 px-3 font-medium text-slate-800 hover:border-slate-500">Best Practices</a>
            <a href="#working-with-data" className="inline-flex min-h-10 items-center rounded-md border border-slate-300 px-3 font-medium text-slate-800 hover:border-slate-500">Working with Data</a>
            <a href="#tools" className="inline-flex min-h-10 items-center rounded-md bg-emerald-700 px-3 font-medium text-white hover:bg-emerald-800">Tools</a>
          </nav>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
              <Wrench className="h-4 w-4" aria-hidden="true" />
              AI operator starter kit
            </div>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
              Move from prompt fluency to reviewable repo work.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Pick the level that matches where you are today. The path adds GitHub, coding agents, state files, public data, MCP, and deployment only when the previous loop is stable.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#first-hour"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white hover:bg-slate-800"
              >
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Start the first hour
              </a>
              <a
                href="#tools"
                onClick={() => setSelected('setup-path')}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-emerald-700 bg-white px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
              >
                <BrainCircuit className="h-4 w-4" aria-hidden="true" />
                Choose Claude / Codex
              </a>
              <a
                href="https://github.com/Protocol-Wealth/pw-learnai"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:border-slate-500"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>

          <div className="border-l-4 border-sky-500 bg-sky-50 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-900">The first choice</h3>
            <div className="mt-4 space-y-4">
              {LEVEL_PATHS.map(path => (
                <a key={path.id} href={`#${path.id}`} className="flex gap-3 rounded-md p-2 hover:bg-white/70">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-semibold text-slate-950">{path.level}</div>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{path.outcome}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <section id="first-hour" className="mb-10 space-y-5" aria-labelledby="first-hour-heading">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="first-hour-heading" className="text-2xl font-semibold text-slate-950">First Hour Walkthrough</h2>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
                This is the visual route for someone starting from chat prompts. It starts with files they can see, then adds Claude or Codex only after the folder has a clear job.
              </p>
            </div>
            <a href="#tools" onClick={() => setSelected('setup-path')} className="inline-flex min-h-10 items-center gap-2 rounded-md bg-emerald-700 px-3 text-sm font-medium text-white hover:bg-emerald-800">
              <Wrench className="h-4 w-4" aria-hidden="true" />
              Build my setup path
            </a>
          </div>

          <div className="grid gap-3 lg:grid-cols-5">
            {FIRST_HOUR_STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <article key={step.title} className="relative rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">{index + 1}</div>
                    <Icon className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.action}</p>
                  <p className="mt-3 border-t border-slate-100 pt-3 text-xs font-medium leading-5 text-slate-700">{step.output}</p>
                </article>
              )
            })}
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {STARTER_FILE_GUIDES.map(item => {
              const Icon = item.icon
              return (
                <article key={item.kind} className="rounded-lg border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-sky-700" aria-hidden="true" />
                    <h3 className="text-base font-semibold text-slate-950">{item.kind} files</h3>
                  </div>
                  <div className="mt-3 rounded-md bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700">{item.examples}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.why}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section id="levels" className="mb-10 space-y-4" aria-labelledby="levels-heading">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="levels-heading" className="text-2xl font-semibold text-slate-950">Choose Your Level</h2>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
                Use this as the first routing decision. Beginner is setup, Intermediate is repeatable agent work, Advanced is data, MCP, cloud, and deployment boundaries.
              </p>
            </div>
            <a href="#tools" onClick={() => setSelected('setup-path')} className="inline-flex min-h-10 items-center gap-2 rounded-md bg-emerald-700 px-3 text-sm font-medium text-white hover:bg-emerald-800">
              <Wrench className="h-4 w-4" aria-hidden="true" />
              Build my setup path
            </a>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {LEVEL_PATHS.map(path => {
              const Icon = path.icon
              return (
                <article key={path.id} id={path.id} className="rounded-lg border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                    <h3 className="text-lg font-semibold text-slate-950">{path.level}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{path.summary}</p>
                  <p className="mt-3 border-l-2 border-emerald-300 pl-3 text-sm font-medium leading-6 text-slate-800">{path.outcome}</p>
                  <ol className="mt-4 space-y-3">
                    {path.actions.map((action, index) => (
                      <li key={action} className="flex gap-3 text-sm leading-6 text-slate-700">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">{index + 1}</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {path.links.map(([label, href]) => (
                      <a key={href} href={href} className="inline-flex min-h-9 items-center gap-1 rounded-md border border-slate-200 px-2.5 text-xs font-semibold text-slate-700 hover:border-slate-400">
                        {label}
                      </a>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="topic-tracks" className="space-y-4" aria-labelledby="path-heading">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="path-heading" className="text-2xl font-semibold text-slate-950">Topic Tracks</h2>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">Use these after choosing your level. They organize the modules by the job you are trying to do next.</p>
            </div>
            <a href="notebooklm/starter-bundle.md" className="inline-flex min-h-10 items-center gap-2 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-800 hover:border-slate-500">
              <FileText className="h-4 w-4" aria-hidden="true" />
              Starter bundle
            </a>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {LEARNING_PATHS.map(path => {
              const Icon = path.icon
              return (
                <article key={path.id} id={path.id} className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                    <h3 className="text-base font-semibold text-slate-950">{path.title}</h3>
                  </div>
                  <p className="mt-3 min-h-16 text-sm leading-6 text-slate-600">{path.summary}</p>
                  <ol className="mt-4 space-y-3">
                    {path.steps.map((step, index) => (
                      <li key={step} className="flex gap-3 text-sm leading-6 text-slate-700">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {path.links.map(([label, href]) => (
                      <a key={href} href={href} className="inline-flex min-h-9 items-center gap-1 rounded-md border border-slate-200 px-2.5 text-xs font-semibold text-slate-700 hover:border-slate-400">
                        {label}
                      </a>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]" aria-labelledby="ecosystem-heading">
          <div>
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-sky-700" aria-hidden="true" />
              <h2 id="ecosystem-heading" className="text-2xl font-semibold text-slate-950">Current OSS Surface</h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The Protocol Wealth labs are now ordered as teaching bridges: public analytics with Nexus, compliance primitives with PWOS, and PII-free planning contracts with PWPlan. The browser tools here stay offline and simulate the patterns without calling those services.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {ECOSYSTEM_UPDATES.map(item => (
              <a key={item.title} href={item.href} className="rounded-lg border border-slate-200 bg-white p-4 hover:border-slate-400">
                <div className="text-xs font-semibold uppercase tracking-wide text-sky-700">{item.label}</div>
                <h3 className="mt-2 text-base font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]" aria-labelledby="data-heading">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-rose-700" aria-hidden="true" />
              <h2 id="data-heading" className="text-xl font-semibold text-slate-950">Working with Data</h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A first data project should be read-only, public, source-cited, and paginated. Learn metadata and rate limits before writing a harvester.
            </p>
            <div className="mt-4 divide-y divide-slate-100">
              {DATA_STARTERS.map(source => (
                <a key={source.name} href={source.href} className="flex items-start gap-3 py-3 text-sm hover:bg-slate-50">
                  <Link2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-slate-950">{source.name}</span>
                    <span className="mt-1 block leading-6 text-slate-600">{source.detail}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <Server className="h-5 w-5 text-violet-700" aria-hidden="true" />
              <h2 className="text-xl font-semibold text-slate-950">Cloud After Local</h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              GitHub Pages is enough for static learning content. Reach for Cloud Run, Fly.io, Neon Postgres, or another managed service only when the project needs a server, a database, or scheduled work.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ['Static first', 'No backend, no secrets, no runtime data risk.'],
                ['Server second', 'Use containers when HTTP state or jobs are real requirements.'],
                ['Database third', 'Use managed Postgres before self-managed operations.'],
                ['Sensitive last', 'Design identity, audit, retention, and access before any private data.'],
              ].map(([title, detail]) => (
                <div key={title} className="border-l-2 border-violet-300 pl-3">
                  <div className="text-sm font-semibold text-slate-950">{title}</div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="mt-10 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]" aria-labelledby="tools-heading">
          <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
            <div>
              <div className="flex items-center gap-2">
                <BrainCircuit className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                <h2 id="tools-heading" className="text-xl font-semibold text-slate-950">Browser Tools</h2>
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-600">Client-side only. No login, telemetry, backend, or external API calls.</p>
            </div>
            <label className="relative block">
              <span className="sr-only">Search tools</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
              <input
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search tools"
                className="h-11 w-full rounded-md border border-slate-300 bg-white pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
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
                      : 'border-slate-200 bg-white hover:border-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-slate-950">{tool.name}</div>
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{tool.module}</span>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{tool.description}</p>
                </button>
              ))}
              {filteredTools.length === 0 && (
                <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600">
                  No tools match that search.
                </div>
              )}
            </nav>
          </aside>

          <div className="min-w-0 space-y-8">
            <section className="flex flex-col gap-3 border-b border-slate-200 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm font-medium text-emerald-700">
                  {current.module === 'Lab' ? 'Protocol Wealth OSS Lab' : `Module ${current.module}`} / {current.category}
                </div>
                <h2 className="mt-1 text-2xl font-semibold text-slate-950">{current.name}</h2>
                <p className="mt-1 max-w-3xl text-sm text-slate-600">{current.description}</p>
              </div>
              <a
                href={current.href}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-800 transition hover:border-slate-500 md:self-start"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                Read module
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </section>

            <Component />
          </div>
        </section>

        <section className="mt-10 space-y-4 border-t border-slate-200 pt-8">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-slate-950">Library Map</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-5">
            {MODULE_GROUPS.map(group => (
              <article key={group.title} className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">{group.title}</h3>
                <div className="mt-3 space-y-2">
                  {group.modules.map(([number, title, href]) => (
                    <a
                      key={`${number}-${title}`}
                      href={href}
                      className="flex gap-3 rounded-md px-2 py-2 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                    >
                      <span className="w-7 shrink-0 font-mono text-xs text-slate-500">{number}</span>
                      <span>{title}</span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl border-t border-slate-200 px-4 py-8 text-sm text-slate-500 sm:px-6">
        Client-side React tools. No login, telemetry, backend, or external API calls.
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)
