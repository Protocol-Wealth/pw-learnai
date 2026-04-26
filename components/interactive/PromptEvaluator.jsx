import React, { useState, useMemo } from 'react'

// PromptEvaluator — companion to Module 10.
// Scores a pasted prompt against the six durability properties.

const PROPERTIES = [
  {
    id: 'role',
    name: 'Explicit role and context',
    detect: (p) => {
      const lower = p.toLowerCase()
      return /you are (a |an )/i.test(p) || lower.includes('your role') || lower.includes('act as')
    },
    hint: 'Look for "You are a [specific role]" or "Your role is..." Generic "helpful assistant" does not count.'
  },
  {
    id: 'structuredInput',
    name: 'Structured input (delimited variables)',
    detect: (p) => /<\w+>[\s\S]*<\/\w+>/.test(p) || /```[\s\S]*```/.test(p) || /\{\{?\w+\}?\}/.test(p),
    hint: 'Look for XML tags, code fences, or {variable} placeholders that delimit input from instruction.'
  },
  {
    id: 'outputFormat',
    name: 'Specific output format',
    detect: (p) => {
      const lower = p.toLowerCase()
      return lower.includes('respond in') || lower.includes('output format') || lower.includes('return a json') || /respond.*format/i.test(p) || /^.*format:/im.test(p)
    },
    hint: 'A specific schema is described, not just "respond in JSON".'
  },
  {
    id: 'edgeCases',
    name: 'Edge case handling',
    detect: (p) => {
      const lower = p.toLowerCase()
      return lower.includes('if the') && (lower.includes('empty') || lower.includes('cannot') || lower.includes('unclear') || lower.includes('ambiguous') || lower.includes('insufficient'))
    },
    hint: 'Explicit instructions for empty, ambiguous, or off-topic inputs.'
  },
  {
    id: 'examples',
    name: 'Examples (when warranted)',
    detect: (p) => {
      const lower = p.toLowerCase()
      return lower.includes('example:') || lower.includes('for example') || /<example>/i.test(p) || /^example \d/im.test(p)
    },
    hint: 'Optional. Include 2-4 examples for tasks where the desired output is hard to describe abstractly.'
  },
  {
    id: 'negative',
    name: 'Constraints on what not to do',
    detect: (p) => {
      const lower = p.toLowerCase()
      return lower.includes('do not') || lower.includes("don't") || lower.includes('never ') || lower.includes('avoid ')
    },
    hint: 'Named failure modes — "do not provide tax advice", "never speculate about future markets".'
  }
]

const SAMPLE_PROMPT = `You are a financial analyst at a registered investment adviser.

You will be given a customer support ticket.

<ticket>
{ticket_text}
</ticket>

Your task: classify the ticket into one of the following categories.

Respond in this format:
<classification>
<category>billing | technical | account | other</category>
<confidence>high | medium | low</confidence>
<reasoning>one sentence</reasoning>
</classification>

If the ticket is empty, respond with category "other" and confidence "low".

Do not:
- Make recommendations about specific securities
- Provide tax advice`

export default function PromptEvaluator() {
  const [prompt, setPrompt] = useState('')

  const results = useMemo(() => {
    if (!prompt.trim()) return PROPERTIES.map(p => ({ ...p, present: false }))
    return PROPERTIES.map(p => ({ ...p, present: p.detect(prompt) }))
  }, [prompt])

  const score = results.filter(r => r.present).length
  const verdict = score >= 5 ? { label: 'Production-ready', color: 'bg-emerald-100 text-emerald-900 border-emerald-400' }
    : score >= 3 ? { label: 'Needs work', color: 'bg-amber-100 text-amber-900 border-amber-400' }
    : { label: 'Demo-grade only', color: 'bg-red-100 text-red-900 border-red-400' }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Prompt Evaluator</h2>
        <p className="text-slate-600 mt-1">Module 10 · Score a prompt against the six durability properties.</p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-5">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-slate-700">Paste prompt</label>
          <button
            onClick={() => setPrompt(SAMPLE_PROMPT)}
            className="text-xs text-slate-600 hover:text-slate-900 underline"
          >
            Load sample
          </button>
        </div>
        <textarea
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          rows={12}
          placeholder="Paste a prompt here to evaluate against the six properties..."
          className="w-full px-3 py-2 border border-slate-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
      </div>

      <div className="space-y-2">
        {results.map(r => (
          <div key={r.id} className={`rounded-lg border p-3 flex items-start gap-3 ${
            r.present ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              r.present ? 'bg-emerald-600 text-white' : 'bg-slate-300 text-slate-600'
            }`}>{r.present ? '✓' : '·'}</div>
            <div className="flex-1">
              <div className={`text-sm font-medium ${r.present ? 'text-emerald-900' : 'text-slate-700'}`}>{r.name}</div>
              {!r.present && <div className="text-xs text-slate-500 mt-0.5">{r.hint}</div>}
            </div>
          </div>
        ))}
      </div>

      <div className={`rounded-lg border-2 p-5 ${verdict.color}`}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium uppercase tracking-wide opacity-70">Verdict</div>
            <div className="text-xl font-bold mt-1">{verdict.label}</div>
          </div>
          <div className="text-right">
            <div className="text-xs font-medium uppercase tracking-wide opacity-70">Score</div>
            <div className="text-3xl font-bold">{score}<span className="text-base opacity-60">/6</span></div>
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 italic">
        Detection is heuristic — a manual review by someone other than the prompt author still beats this tool. Use as a first-pass check, not a substitute for the practices in Module 10.
      </div>
    </div>
  )
}
