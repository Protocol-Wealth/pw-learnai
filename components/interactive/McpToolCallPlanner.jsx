import React, { useMemo, useState } from 'react'
import { Braces, CheckCircle2, Database, Lock, Network, ShieldAlert } from 'lucide-react'

const OBJECTIVES = {
  regime: {
    label: 'Current macro regime',
    posture: 'public',
    tools: [
      { name: 'get_regime', reason: 'Classify the current EMF macro regime.' },
      { name: 'get_regime_signals', reason: 'Inspect raw signal readings behind the classification.' },
    ],
  },
  score: {
    label: 'Score an asset',
    posture: 'public',
    tools: [
      { name: 'get_regime', reason: 'Condition the score on macro context.' },
      { name: 'score_asset', reason: 'Run the EMF durability score for a ticker.' },
      { name: 'get_quote', reason: 'Add current market price context.' },
    ],
  },
  planning: {
    label: 'PII-free retirement projection',
    posture: 'deidentified',
    tools: [
      { name: 'capital_market_assumptions', reason: 'Load real assumptions for fake or de-identified portfolios.' },
      { name: 'monte_carlo_decumulation', reason: 'Simulate path outcomes with age, balances, and allocation.' },
      { name: 'tax_aware_withdrawal', reason: 'Illustrate withdrawal ordering using planning variables only.' },
    ],
  },
  client: {
    label: 'Named client recommendation',
    posture: 'private',
    tools: [
      { name: 'private_client_context', reason: 'Resolve identity behind auth in a private layer.' },
      { name: 'nexus_internal_call', reason: 'Call public-style math server-to-server with de-identified payload.' },
      { name: 'advisor_review_gate', reason: 'Require human review before client-facing output.' },
    ],
  },
}

const POSTURES = {
  public: {
    label: 'Public read-only',
    classes: 'border-emerald-200 bg-emerald-50 text-emerald-950',
    icon: CheckCircle2,
    detail: 'Safe for a public Nexus-style MCP surface when no identity or write action is present.',
  },
  deidentified: {
    label: 'PII-free planning',
    classes: 'border-amber-200 bg-amber-50 text-amber-950',
    icon: Database,
    detail: 'Allowed only when the payload uses derived planning variables and no identity-shaped fields.',
  },
  private: {
    label: 'Private regulated boundary',
    classes: 'border-red-200 bg-red-50 text-red-950',
    icon: Lock,
    detail: 'Do not send named-client context to a public tool. Route through authenticated private infrastructure.',
  },
}

function buildPrompt(objective) {
  const sequence = objective.tools.map((tool, index) => `${index + 1}. ${tool.name}: ${tool.reason}`).join('\n')
  return `Use the MCP tools in this sequence for: ${objective.label}

Trust boundary:
- Data posture: ${POSTURES[objective.posture].label}
- Do not send direct client identity to public tools.
- Treat outputs as educational analysis, not investment advice.

Tool sequence:
${sequence}

Finish with:
- Tool calls made
- Inputs that were intentionally withheld
- Remaining review risk`
}

export default function McpToolCallPlanner() {
  const [objectiveId, setObjectiveId] = useState('planning')
  const objective = OBJECTIVES[objectiveId]
  const posture = POSTURES[objective.posture]
  const Icon = posture.icon
  const prompt = useMemo(() => buildPrompt(objective), [objective])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-zinc-950">MCP Tool Planner</h2>
        <p className="mt-1 text-sm text-zinc-600">
          Plan a Nexus-style MCP sequence and decide whether it belongs on a public read-only surface.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <section className="rounded-lg border border-zinc-200 bg-white p-4">
          <div className="text-sm font-semibold text-zinc-900">Objective</div>
          <div className="mt-3 grid gap-2">
            {Object.entries(OBJECTIVES).map(([id, item]) => (
              <button
                key={id}
                type="button"
                onClick={() => setObjectiveId(id)}
                className={`rounded-md border px-3 py-2 text-left text-sm transition ${
                  objectiveId === id
                    ? 'border-zinc-950 bg-zinc-950 text-white'
                    : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </section>

        <section className={`rounded-lg border p-4 ${posture.classes}`}>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Icon className="h-4 w-4" aria-hidden="true" />
            {posture.label}
          </div>
          <p className="mt-2 text-sm opacity-80">{posture.detail}</p>
          {objective.posture === 'private' && (
            <div className="mt-3 flex gap-2 rounded-md bg-white/70 p-3 text-sm">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Public Nexus-style tools should not receive named-client payloads, suitability context, or advisor-client communications.
            </div>
          )}
        </section>
      </div>

      <section className="rounded-lg border border-zinc-200 bg-white p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
          <Network className="h-4 w-4 text-emerald-700" aria-hidden="true" />
          Tool sequence
        </div>
        <div className="mt-4 grid gap-3">
          {objective.tools.map((tool, index) => (
            <div key={tool.name} className="grid gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3 md:grid-cols-[48px_220px_1fr] md:items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-950 font-mono text-sm font-semibold text-white">
                {index + 1}
              </div>
              <div className="font-mono text-sm font-semibold text-zinc-950">{tool.name}</div>
              <div className="text-sm text-zinc-600">{tool.reason}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
          <Braces className="h-4 w-4 text-emerald-700" aria-hidden="true" />
          Agent prompt
        </div>
        <pre className="mt-3 whitespace-pre-wrap rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-800">
          {prompt}
        </pre>
      </section>
    </div>
  )
}
