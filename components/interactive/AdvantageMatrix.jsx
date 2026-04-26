import React, { useState } from 'react'

// AdvantageMatrix — companion to Module 02.
// Plot activities on the leverage × durability matrix, get quadrant + recommendation.

const QUADRANT_INFO = {
  A: { label: 'A · Invest heavily', detail: 'High leverage, high durability. Compounding activities. Your AI investment dollars belong here.', color: 'bg-emerald-100 text-emerald-900 border-emerald-400' },
  B: { label: 'B · Match competitors', detail: 'High leverage, low durability. Race to the floor. Match market parity, do not lead.', color: 'bg-amber-100 text-amber-900 border-amber-400' },
  C: { label: 'C · Protect with care', detail: 'Low leverage, high durability. Differentiator is human judgment. AI supports, never substitutes.', color: 'bg-blue-100 text-blue-900 border-blue-400' },
  D: { label: 'D · Ignore or outsource', detail: 'Low leverage, low durability. Question whether the activity should exist at all.', color: 'bg-slate-200 text-slate-800 border-slate-400' }
}

const newActivity = () => ({
  id: Math.random().toString(36).slice(2),
  name: '',
  leverage: 50,
  durability: 50,
  durableInput: ''
})

function quadrantOf(leverage, durability) {
  const highL = leverage >= 50
  const highD = durability >= 50
  if (highL && highD) return 'A'
  if (highL && !highD) return 'B'
  if (!highL && highD) return 'C'
  return 'D'
}

export default function AdvantageMatrix() {
  const [activities, setActivities] = useState([
    { ...newActivity(), name: 'Example: client portfolio rebalancing', leverage: 80, durability: 25 }
  ])

  const update = (id, field, val) => {
    setActivities(activities.map(a => a.id === id ? { ...a, [field]: val } : a))
  }

  const remove = (id) => setActivities(activities.filter(a => a.id !== id))
  const add = () => setActivities([...activities, newActivity()])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">AI Advantage Matrix</h2>
        <p className="text-slate-600 mt-1">Module 02 · Classify activities by leverage and durability.</p>
      </div>

      {/* Matrix visualization */}
      <div className="bg-white rounded-lg border border-slate-200 p-5">
        <div className="text-xs font-medium text-slate-600 mb-2">Quadrant map (drag activities by adjusting sliders below)</div>
        <div className="relative aspect-square max-w-md mx-auto">
          {/* Quadrant labels */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            <div className="border-r border-b border-slate-300 bg-blue-50 p-2 text-[10px] font-semibold text-blue-900 flex items-start justify-start">C · Protect</div>
            <div className="border-b border-slate-300 bg-emerald-50 p-2 text-[10px] font-semibold text-emerald-900 flex items-start justify-end text-right">A · Invest</div>
            <div className="border-r border-slate-300 bg-slate-100 p-2 text-[10px] font-semibold text-slate-700 flex items-end justify-start">D · Ignore</div>
            <div className="bg-amber-50 p-2 text-[10px] font-semibold text-amber-900 flex items-end justify-end text-right">B · Match</div>
          </div>
          {/* Plotted activities */}
          {activities.filter(a => a.name).map(a => {
            const x = a.leverage // 0-100
            const y = 100 - a.durability // invert for visual
            return (
              <div
                key={a.id}
                className="absolute w-3 h-3 rounded-full bg-slate-900 border-2 border-white shadow"
                style={{ left: `calc(${x}% - 6px)`, top: `calc(${y}% - 6px)` }}
                title={a.name}
              />
            )
          })}
          {/* Axis labels */}
          <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-slate-500">→ Task leverage</div>
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full text-xs text-slate-500" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg) translateY(50%)' }}>→ Moat durability</div>
        </div>
      </div>

      {/* Activity rows */}
      <div className="space-y-4">
        {activities.map(a => {
          const q = quadrantOf(a.leverage, a.durability)
          const info = QUADRANT_INFO[q]
          return (
            <div key={a.id} className="bg-white rounded-lg border border-slate-200 p-5">
              <div className="flex items-start gap-3">
                <input
                  type="text"
                  value={a.name}
                  onChange={e => update(a.id, 'name', e.target.value)}
                  placeholder="Activity name (be specific)"
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
                <button
                  onClick={() => remove(a.id)}
                  className="px-2 py-2 text-slate-400 hover:text-red-500 text-sm"
                  aria-label="Remove activity"
                >×</button>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <div className="flex justify-between text-xs text-slate-700 mb-1">
                    <span>Task leverage</span>
                    <span className="font-mono">{a.leverage}</span>
                  </div>
                  <input type="range" min={0} max={100} value={a.leverage} onChange={e => update(a.id, 'leverage', Number(e.target.value))} className="w-full" />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>Low (under 1.5x)</span>
                    <span>High (3x+)</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-700 mb-1">
                    <span>Moat durability</span>
                    <span className="font-mono">{a.durability}</span>
                  </div>
                  <input type="range" min={0} max={100} value={a.durability} onChange={e => update(a.id, 'durability', Number(e.target.value))} className="w-full" />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>Low (commodity)</span>
                    <span>High (compounding)</span>
                  </div>
                </div>
              </div>

              {q === 'A' && (
                <div className="mt-3">
                  <label className="block text-xs font-medium text-slate-700 mb-1">If Quadrant A: name the durable input in one sentence</label>
                  <input
                    type="text"
                    value={a.durableInput}
                    onChange={e => update(a.id, 'durableInput', e.target.value)}
                    placeholder="Proprietary X that competitors cannot easily acquire..."
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                  />
                  {!a.durableInput && (
                    <div className="text-xs text-amber-700 mt-1 italic">
                      ⚠ If you cannot name it in one sentence, the activity is probably not Quadrant A.
                    </div>
                  )}
                </div>
              )}

              <div className={`mt-3 rounded-md border px-3 py-2 ${info.color}`}>
                <div className="text-sm font-semibold">{info.label}</div>
                <div className="text-xs mt-0.5">{info.detail}</div>
              </div>
            </div>
          )
        })}
      </div>

      <button
        onClick={add}
        className="w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-600 hover:border-slate-500 hover:text-slate-900 text-sm font-medium"
      >
        + Add activity
      </button>

      <div className="text-xs text-slate-500 italic">
        Honest classification produces a portfolio with only 2-4 activities clearly in Quadrant A. If everything is Quadrant A, rerun the exercise — most "strategic" activities are actually Quadrant B race-to-the-floor.
      </div>
    </div>
  )
}
