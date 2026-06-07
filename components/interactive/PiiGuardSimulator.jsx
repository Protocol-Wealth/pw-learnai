import React, { useMemo, useState } from 'react'
import { AlertTriangle, CheckCircle2, EyeOff, ShieldAlert } from 'lucide-react'

const DETECTORS = [
  { id: 'ssn', label: 'SSN', severity: 'high', pattern: /\b\d{3}-\d{2}-\d{4}\b/g },
  { id: 'credit_card', label: 'Credit card', severity: 'high', pattern: /\b(?:\d[ -]*?){13,16}\b/g },
  { id: 'api_key', label: 'API key shaped token', severity: 'high', pattern: /\b(?:sk|pk|api|key)_[A-Za-z0-9_-]{16,}\b/g },
  { id: 'email', label: 'Email', severity: 'medium', pattern: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi },
  { id: 'phone', label: 'US phone', severity: 'medium', pattern: /\b(?:\+?1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}\b/g },
  { id: 'account', label: 'Account-like number', severity: 'medium', pattern: /\b(?:acct|account|policy)\s*[:#]?\s*[A-Z0-9-]{6,}\b/gi },
  { id: 'dob', label: 'Date of birth phrase', severity: 'medium', pattern: /\b(?:dob|date of birth)\s*[:#]?\s*\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b/gi },
  { id: 'client_name', label: 'Named client phrase', severity: 'low', pattern: /\bclient\s+(?:name|is)\s*[:#]?\s*[A-Z][a-z]+(?:\s+[A-Z][a-z]+)?\b/g },
]

const SAMPLE = `Draft a planning summary for client name: Jane Rygiel.
Email jane@example.com and phone 410-555-1212 are in the CRM.
DOB: 04/12/1975. Account # PW-1234567.
Need: discuss Roth conversion tradeoffs using age 51, household AGI, and account mix.`

const SEVERITY = {
  high: {
    label: 'Block',
    classes: 'border-red-200 bg-red-50 text-red-900',
    icon: ShieldAlert,
  },
  medium: {
    label: 'Redact or exclude',
    classes: 'border-amber-200 bg-amber-50 text-amber-900',
    icon: AlertTriangle,
  },
  low: {
    label: 'Review',
    classes: 'border-zinc-200 bg-zinc-50 text-zinc-800',
    icon: EyeOff,
  },
}

function scan(text) {
  const hits = []
  for (const detector of DETECTORS) {
    const matches = [...text.matchAll(detector.pattern)]
    for (const match of matches) {
      hits.push({
        id: `${detector.id}-${match.index}`,
        type: detector.id,
        label: detector.label,
        severity: detector.severity,
        value: match[0],
        index: match.index ?? 0,
      })
    }
  }
  return hits.sort((a, b) => a.index - b.index)
}

function redact(text, hits) {
  return hits.reduce((output, hit, index) => {
    return output.replace(hit.value, `<${hit.type.toUpperCase()}_${index + 1}>`)
  }, text)
}

export default function PiiGuardSimulator() {
  const [text, setText] = useState(SAMPLE)
  const hits = useMemo(() => scan(text), [text])
  const redacted = useMemo(() => redact(text, hits), [text, hits])
  const highCount = hits.filter(hit => hit.severity === 'high').length
  const mediumCount = hits.filter(hit => hit.severity === 'medium').length
  const verdict = highCount > 0
    ? { label: 'Fail closed before LLM egress', classes: 'border-red-300 bg-red-50 text-red-950' }
    : mediumCount > 0
      ? { label: 'Exclude or redact before use', classes: 'border-amber-300 bg-amber-50 text-amber-950' }
      : { label: 'No obvious PII shapes detected', classes: 'border-emerald-300 bg-emerald-50 text-emerald-950' }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-zinc-950">PII Guard Simulator</h2>
        <p className="mt-1 text-sm text-zinc-600">
          Training model of a fail-closed prompt boundary inspired by PWOS Core. It is heuristic, local, and non-production.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-lg border border-zinc-200 bg-white p-4">
          <label className="text-sm font-semibold text-zinc-900">Prompt or payload</label>
          <textarea
            value={text}
            onChange={event => setText(event.target.value)}
            rows={12}
            className="mt-2 w-full resize-y rounded-md border border-zinc-300 px-3 py-2 font-mono text-sm outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white p-4">
          <div className="text-sm font-semibold text-zinc-900">LLM-safe draft</div>
          <pre className="mt-2 min-h-72 whitespace-pre-wrap rounded-md border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-800">
            {redacted || 'Nothing to preview.'}
          </pre>
        </section>
      </div>

      <section className={`rounded-lg border p-4 ${verdict.classes}`}>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          {verdict.label}
        </div>
        <p className="mt-1 text-sm opacity-80">
          Structural control beats discipline: the prompt builder should exclude disallowed fields before any model call.
        </p>
      </section>

      <div className="grid gap-3 md:grid-cols-3">
        {['high', 'medium', 'low'].map(level => {
          const info = SEVERITY[level]
          const Icon = info.icon
          const levelHits = hits.filter(hit => hit.severity === level)
          return (
            <section key={level} className={`rounded-lg border p-4 ${info.classes}`}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {info.label}
                </div>
                <span className="font-mono text-sm">{levelHits.length}</span>
              </div>
              <div className="mt-3 space-y-2">
                {levelHits.length === 0 && <div className="text-xs opacity-70">No matches.</div>}
                {levelHits.map(hit => (
                  <div key={hit.id} className="rounded-md bg-white/65 px-2 py-2 text-xs">
                    <div className="font-semibold">{hit.label}</div>
                    <div className="mt-1 break-all font-mono opacity-75">{hit.value}</div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
