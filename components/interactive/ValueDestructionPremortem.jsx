import React, { useState } from 'react'

// ValueDestructionPremortem — companion to Module 03.
// Walks through the six value-destruction patterns before deployment.

const PATTERNS = [
  {
    id: 'leakage',
    title: 'Proprietary knowledge leakage',
    question: 'Could the deployment expose proprietary inputs (data, methodology, content) to vendor training or aggregation?',
    redFlags: ['Vendor terms permit aggregated training use', 'No ZDR (zero data retention) guarantee', 'Vendor cannot answer "does our data train your model" in one sentence'],
    mitigation: 'ZDR API where available · VPC or on-prem deployment · Contract: no training, no aggregation, no metadata extraction · Audit rights'
  },
  {
    id: 'moat',
    title: 'Moat destruction through cost cutting',
    question: 'Is this Quadrant C — low leverage, high durability — where the human judgment IS the differentiator?',
    redFlags: ['Customer-facing or customer-adjacent activity', 'Customers cite personal relationships or expertise as reason for choosing us', 'Premium pricing relative to commodity alternatives'],
    mitigation: 'Reclassify honestly. AI supports humans, never replaces them in Quadrant C. The cost savings rarely exceed the lost premium.'
  },
  {
    id: 'regulatory',
    title: 'Regulatory exposure multiplication',
    question: 'Does the deployment touch regulated data (PII, NPI, PHI) or produce content into regulated contexts?',
    redFlags: ['No documented AI use policy', 'Department-by-department vendor adoption without compliance review', 'AI-generated output ships without human review'],
    mitigation: 'AI use policy · Data classification before tool permission · Audit trail · Periodic compliance review'
  },
  {
    id: 'deskilling',
    title: 'Silent deskilling',
    question: 'Will this replace the thinking work junior staff currently do as learning exercises?',
    redFlags: ['Output quality up but junior cannot explain why', 'AI usage rising while measured-skill metrics flat', 'Mid-career staff cannot work without the tool'],
    mitigation: 'AI-free proficiency benchmarks in onboarding · Mentorship that explains AI choices · Periodic no-tool exercises'
  },
  {
    id: 'commodity',
    title: 'Commodity race to the floor',
    question: 'Is this in Quadrant B (high leverage, low durability) where competitors will match within 12-18 months?',
    redFlags: ['Cannot name a durable input in one sentence', 'Justification relies on "first-mover advantage" with no defensibility detail', 'Capability is the AI itself, not a feature on top of proprietary work'],
    mitigation: 'Match market spend, do not lead. Reserve lead investments for genuine Quadrant A activities.'
  },
  {
    id: 'trust',
    title: 'Trust collapse from bad outputs',
    question: 'Is the output customer-visible in a context where one egregious failure damages trust disproportionately?',
    redFlags: ['AI output ships to customers without human review', 'High-stakes domain (medical, legal, financial)', 'Customers do not know they are interacting with AI'],
    mitigation: 'Human-in-the-loop at output stage · AI disclosure · Graceful fallback to human · Evaluation harness catches worst 1% (see Module 11)'
  }
]

export default function ValueDestructionPremortem() {
  const [deployment, setDeployment] = useState('')
  const [responses, setResponses] = useState({})

  const setRisk = (id, level) => {
    setResponses({ ...responses, [id]: { ...(responses[id] || {}), risk: level } })
  }
  const setMitigation = (id, val) => {
    setResponses({ ...responses, [id]: { ...(responses[id] || {}), mitigation: val } })
  }

  const concerns = PATTERNS.filter(p => responses[p.id]?.risk === 'high' || responses[p.id]?.risk === 'medium')
  const unmitigated = concerns.filter(p => !responses[p.id]?.mitigation || responses[p.id].mitigation.length < 20)
  const ready = concerns.length === 0 || (concerns.length > 0 && unmitigated.length === 0)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Value Destruction Pre-Mortem</h2>
        <p className="text-slate-600 mt-1">Module 03 · Walk every AI deployment through these six patterns before commit.</p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-5">
        <label className="block text-sm font-medium text-slate-700 mb-2">Deployment under review</label>
        <input
          type="text"
          value={deployment}
          onChange={e => setDeployment(e.target.value)}
          placeholder='e.g., "Vendor X for tier-1 customer support automation"'
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
      </div>

      {PATTERNS.map((p, i) => {
        const risk = responses[p.id]?.risk
        const mitigation = responses[p.id]?.mitigation || ''
        return (
          <div key={p.id} className="bg-white rounded-lg border border-slate-200 p-5">
            <div className="flex items-start gap-3 mb-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-900 text-white text-sm font-semibold flex items-center justify-center">{i + 1}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{p.question}</p>
              </div>
            </div>

            <div className="ml-10 space-y-3">
              <div>
                <div className="text-xs font-medium text-slate-700 mb-1">Red flags to check</div>
                <ul className="text-xs text-slate-600 space-y-0.5">
                  {p.redFlags.map((f, idx) => <li key={idx}>· {f}</li>)}
                </ul>
              </div>

              <div>
                <div className="text-xs font-medium text-slate-700 mb-1">Risk level for this deployment</div>
                <div className="flex gap-2">
                  {['low', 'medium', 'high', 'na'].map(level => (
                    <button
                      key={level}
                      onClick={() => setRisk(p.id, level)}
                      className={`flex-1 text-xs px-2 py-2 rounded border capitalize transition ${
                        risk === level
                          ? level === 'high' ? 'bg-red-600 text-white border-red-600'
                            : level === 'medium' ? 'bg-amber-500 text-white border-amber-500'
                            : level === 'low' ? 'bg-emerald-600 text-white border-emerald-600'
                            : 'bg-slate-500 text-white border-slate-500'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500'
                      }`}
                    >
                      {level === 'na' ? 'N/A' : level}
                    </button>
                  ))}
                </div>
              </div>

              {(risk === 'medium' || risk === 'high') && (
                <div>
                  <div className="text-xs font-medium text-slate-700 mb-1">Specific mitigation in place</div>
                  <textarea
                    value={mitigation}
                    onChange={e => setMitigation(p.id, e.target.value)}
                    rows={2}
                    placeholder="Specific, not generic. Contractual language, technical architecture, audit rights..."
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                  />
                  <div className="text-xs text-slate-500 mt-1 italic">Reference: {p.mitigation}</div>
                </div>
              )}
            </div>
          </div>
        )
      })}

      <div className={`rounded-lg border-2 p-5 ${
        ready ? 'bg-emerald-50 border-emerald-300' : 'bg-red-50 border-red-300'
      }`}>
        <div className="text-xs font-medium uppercase tracking-wide opacity-70">Pre-mortem status</div>
        <div className={`text-lg font-bold mt-1 ${ready ? 'text-emerald-900' : 'text-red-900'}`}>
          {ready
            ? '✓ Ready to deploy. Document the pre-mortem and proceed with monitoring.'
            : `⚠ ${unmitigated.length} risk${unmitigated.length > 1 ? 's' : ''} without specific mitigation.`}
        </div>
        {!ready && (
          <ul className="mt-2 text-sm text-red-900 space-y-1">
            {unmitigated.map(p => <li key={p.id}>· {p.title}</li>)}
          </ul>
        )}
      </div>

      <div className="text-xs text-slate-500 italic">
        "We will be careful" is not a mitigation. Specific contractual language, technical architecture, and process change are mitigations.
      </div>
    </div>
  )
}
