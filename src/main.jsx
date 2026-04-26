import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import DisruptionDiagnostic from '../components/interactive/DisruptionDiagnostic.jsx'
import AdvantageMatrix from '../components/interactive/AdvantageMatrix.jsx'
import ValueDestructionPremortem from '../components/interactive/ValueDestructionPremortem.jsx'
import AssumptionRanker from '../components/interactive/AssumptionRanker.jsx'
import PromptEvaluator from '../components/interactive/PromptEvaluator.jsx'

const COMPONENTS = [
  { id: 'disruption', name: 'Disruption Diagnostic', module: '01', component: DisruptionDiagnostic },
  { id: 'matrix', name: 'AI Advantage Matrix', module: '02', component: AdvantageMatrix },
  { id: 'premortem', name: 'Value Destruction Pre-Mortem', module: '03', component: ValueDestructionPremortem },
  { id: 'assumptions', name: 'Assumption Ranker', module: '07', component: AssumptionRanker },
  { id: 'prompt', name: 'Prompt Evaluator', module: '10', component: PromptEvaluator },
]

function App() {
  const [selected, setSelected] = useState(COMPONENTS[0].id)
  const current = COMPONENTS.find(c => c.id === selected)
  const Component = current.component

  return (
    <div className="min-h-screen">
      <header className="bg-slate-900 text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">pw-learnai</h1>
            <p className="text-xs text-slate-400">Interactive components · MIT · Protocol Wealth</p>
          </div>
          <a href="https://github.com/Protocol-Wealth/pw-learnai" className="text-sm text-slate-300 hover:text-white">GitHub →</a>
        </div>
      </header>
      <nav className="bg-white border-b border-slate-200 px-6 py-3">
        <div className="max-w-6xl mx-auto flex gap-2 flex-wrap">
          {COMPONENTS.map(c => (
            <button
              key={c.id}
              onClick={() => setSelected(c.id)}
              className={`text-sm px-3 py-1.5 rounded border transition ${
                selected === c.id
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500'
              }`}
            >
              <span className="text-slate-400 mr-1.5">{c.module}</span>
              {c.name}
            </button>
          ))}
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Component />
      </main>
      <footer className="max-w-6xl mx-auto px-6 py-8 text-xs text-slate-500 border-t border-slate-200 mt-12">
        Each component is a single .jsx file. Copy into your own project or fork the repo. No telemetry. No external API calls.
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)
