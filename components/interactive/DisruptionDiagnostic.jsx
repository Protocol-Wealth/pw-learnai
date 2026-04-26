import React, { useState } from 'react'

// DisruptionDiagnostic — companion to Module 01.
// Scores a candidate disruption against the four Christensen conditions.
// Single-file. No external deps beyond React.

const CONDITIONS = [
  {
    id: 'underperform',
    title: 'Underperforms on traditional dimensions',
    blurb: 'Does the entrant initially underperform incumbents on the dimensions the mainstream market cares about?',
    detail: 'If the entrant outperforms on every dimension from day one, this is direct competition, not disruption. Stop and reclassify.'
  },
  {
    id: 'underserved',
    title: 'Serves an underserved or ignored segment well',
    blurb: 'Is there a specific segment (geography, use case, transaction type) the incumbents have left underserved that the entrant serves well?',
    detail: 'Generic "lower price" segments do not count. Name the segment specifically.'
  },
  {
    id: 'trajectory',
    title: 'Improving along a trajectory toward incumbents',
    blurb: 'Is the entrant\'s capability improving in a direction that will eventually overtake incumbent offerings on traditional dimensions?',
    detail: 'Evidence: product releases, capability demos, customer reports of expanding scope of use.'
  },
  {
    id: 'asymmetric',
    title: 'Exploits asymmetric incentives',
    blurb: 'Do incumbents have a rational reason to ignore or under-respond — typically because responding would cannibalize more profitable existing business?',
    detail: 'If incumbents could rationally respond and absorb the innovation, it is sustaining, not disruption.'
  }
]

const SCORE_LABELS = ['Not at all', 'Weakly', 'Moderately', 'Strongly']

export default function DisruptionDiagnostic() {
  const [name, setName] = useState('')
  const [scores, setScores] = useState({ underperform: 0, underserved: 0, trajectory: 0, asymmetric: 0 })
  const [evidence, setEvidence] = useState({ underperform: '', underserved: '', trajectory: '', asymmetric: '' })

  const total = Object.values(scores).reduce((a, b) => a + b, 0)
  const verdict = total >= 9 ? 'Probable disruption' : total >= 6 ? 'Ambiguous — watch closely' : 'Sustaining innovation or direct competition'
  const verdictColor = total >= 9 ? 'bg-emerald-100 text-emerald-900 border-emerald-300' : total >= 6 ? 'bg-amber-100 text-amber-900 border-amber-300' : 'bg-slate-100 text-slate-800 border-slate-300'

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Disruption Diagnostic</h2>
        <p className="text-slate-600 mt-1">Module 01 · Score a candidate disruption against the four conditions.</p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-5">
        <label className="block text-sm font-medium text-slate-700 mb-2">Candidate disruption (one sentence)</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='e.g., "AI-driven workflow vendors automating residential title insurance"'
          className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
      </div>

      {CONDITIONS.map((c, i) => (
        <div key={c.id} className="bg-white rounded-lg border border-slate-200 p-5">
          <div className="flex items-start gap-3 mb-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-900 text-white text-sm font-semibold flex items-center justify-center">{i + 1}</span>
            <div>
              <h3 className="font-semibold text-slate-900">{c.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{c.blurb}</p>
              <p className="text-xs text-slate-500 mt-1 italic">{c.detail}</p>
            </div>
          </div>

          <div className="ml-10 space-y-3">
            <div>
              <div className="text-xs font-medium text-slate-700 mb-1">Score</div>
              <div className="flex gap-2">
                {[0, 1, 2, 3].map(n => (
                  <button
                    key={n}
                    onClick={() => setScores({ ...scores, [c.id]: n })}
                    className={`flex-1 text-xs px-2 py-2 rounded border transition ${
                      scores[c.id] === n
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <div className="font-semibold">{n}</div>
                    <div className="text-[10px] opacity-80">{SCORE_LABELS[n]}</div>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Evidence</label>
              <textarea
                value={evidence[c.id]}
                onChange={e => setEvidence({ ...evidence, [c.id]: e.target.value })}
                rows={2}
                placeholder="Specific evidence supporting your score..."
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>
          </div>
        </div>
      ))}

      <div className={`rounded-lg border-2 p-5 ${verdictColor}`}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium uppercase tracking-wide opacity-70">Verdict</div>
            <div className="text-xl font-bold mt-1">{verdict}</div>
          </div>
          <div className="text-right">
            <div className="text-xs font-medium uppercase tracking-wide opacity-70">Score</div>
            <div className="text-3xl font-bold">{total}<span className="text-base opacity-60">/12</span></div>
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 italic">
        9-12 indicates a probable disruption. 6-8 indicates ambiguous. 0-5 indicates sustaining innovation or direct competition. The score is a starting point, not a verdict — pair it with the falsifiable predictions exercise in module 01.
      </div>
    </div>
  )
}
