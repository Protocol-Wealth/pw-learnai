import React, { useState } from 'react'

// AssumptionRanker — companion to Module 07.
// Discovery-driven planning: rank assumptions by stakes × inverse confidence.

const newAssumption = () => ({
  id: Math.random().toString(36).slice(2),
  text: '',
  stakes: 3,
  confidence: 3
})

export default function AssumptionRanker() {
  const [initiative, setInitiative] = useState('')
  const [assumptions, setAssumptions] = useState([
    { ...newAssumption(), text: 'Example: Customers will pay $X for this feature' },
    { ...newAssumption() },
    { ...newAssumption() }
  ])

  const update = (id, field, val) => {
    setAssumptions(assumptions.map(a => a.id === id ? { ...a, [field]: val } : a))
  }
  const remove = (id) => setAssumptions(assumptions.filter(a => a.id !== id))
  const add = () => setAssumptions([...assumptions, newAssumption()])

  // Priority = stakes × (6 - confidence). Higher = test sooner.
  const ranked = [...assumptions]
    .filter(a => a.text.trim())
    .map(a => ({ ...a, priority: a.stakes * (6 - a.confidence) }))
    .sort((a, b) => b.priority - a.priority)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Assumption Ranker</h2>
        <p className="text-slate-600 mt-1">Module 07 · Discovery-driven planning. Test the highest-priority assumption first.</p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-5">
        <label className="block text-sm font-medium text-slate-700 mb-2">Initiative under analysis</label>
        <input
          type="text"
          value={initiative}
          onChange={e => setInitiative(e.target.value)}
          placeholder='e.g., "Launch AI research feature for tier-2 clients"'
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
      </div>

      {/* Editable assumptions */}
      <div className="space-y-3">
        {assumptions.map(a => (
          <div key={a.id} className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="flex items-start gap-3">
              <input
                type="text"
                value={a.text}
                onChange={e => update(a.id, 'text', e.target.value)}
                placeholder="Specific assumption the plan rests on..."
                aria-label="Assumption text"
                className="flex-1 px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
              <button
                onClick={() => remove(a.id)}
                className="px-2 py-2 text-slate-400 hover:text-red-500"
                aria-label="Remove"
              >×</button>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <div className="flex justify-between text-xs text-slate-700 mb-1">
                  <span>Stakes (if broken, impact)</span>
                  <span className="font-mono">{a.stakes}/5</span>
                </div>
                <input type="range" min={1} max={5} value={a.stakes} onChange={e => update(a.id, 'stakes', Number(e.target.value))} aria-label={`Stakes if broken (1-5) for: ${a.text || 'this assumption'}`} className="w-full" />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>Plan still works</span>
                  <span>Plan collapses</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-700 mb-1">
                  <span>Confidence in assumption</span>
                  <span className="font-mono">{a.confidence}/5</span>
                </div>
                <input type="range" min={1} max={5} value={a.confidence} onChange={e => update(a.id, 'confidence', Number(e.target.value))} aria-label={`Confidence in assumption (1-5) for: ${a.text || 'this assumption'}`} className="w-full" />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>Pure guess</span>
                  <span>Strong evidence</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={add}
          className="w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-600 hover:border-slate-500 hover:text-slate-900 text-sm font-medium"
        >
          + Add assumption
        </button>
      </div>

      {/* Ranked output */}
      {ranked.length > 0 && (
        <div className="bg-slate-900 rounded-lg p-5 text-white">
          <h3 className="font-semibold mb-3">Test these in order</h3>
          <div className="space-y-2">
            {ranked.map((a, idx) => (
              <div key={a.id} className="flex items-start gap-3 py-2 border-b border-slate-700 last:border-0">
                <span className={`flex-shrink-0 w-7 h-7 rounded-full text-sm font-bold flex items-center justify-center ${
                  idx === 0 ? 'bg-red-500' : idx === 1 ? 'bg-amber-500' : idx === 2 ? 'bg-amber-400 text-slate-900' : 'bg-slate-600'
                }`}>{idx + 1}</span>
                <div className="flex-1">
                  <div className="text-sm">{a.text}</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Stakes: {a.stakes}/5 · Confidence: {a.confidence}/5 · Priority: {a.priority}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-xs text-slate-500 italic">
        Priority = stakes × (6 − confidence). Highest priority = highest stakes paired with lowest confidence. Test that first because that is where you learn the most per dollar spent.
      </div>
    </div>
  )
}
