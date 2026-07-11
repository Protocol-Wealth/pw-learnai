import React, { useMemo, useState } from 'react'

// Client-only. Module 09: AI capability moves faster than most decision
// processes, so a judgment needs an explicit update trigger, not a one-time
// call. This flags the dangerous combination — high confidence + hard to
// reverse + no stated update trigger. Nothing is sent anywhere.

const CONFIDENCE = ['Low', 'Medium', 'High']
const DOORS = [
    { key: 'two', label: 'Two-way door (reversible)' },
    { key: 'one', label: 'One-way door (hard to reverse)' },
]

const EMPTY = {
    decision: '',
    prior: '',
    door: 'two',
    confidence: 'Medium',
    changeMind: '',
    reviewTrigger: '',
}

export default function JudgmentUnderUncertainty() {
    const [f, setF] = useState(EMPTY)
    const [copied, setCopied] = useState(false)
    const update = (key) => (e) => setF(prev => ({ ...prev, [key]: e.target.value }))
    const orDash = (v) => (v && v.trim() ? v.trim() : '_(not recorded)_')

    const risk = useMemo(() => {
        const overconfident = f.confidence === 'High' && f.door === 'one'
        const noTrigger = !f.changeMind.trim() && !f.reviewTrigger.trim()
        if (overconfident && noTrigger) return { key: 'high', label: 'High-confidence, hard-to-reverse call with no stated update trigger. This is exactly the judgment that goes stale as capability shifts and never gets revisited. Add what would change your mind and a review trigger before committing.' }
        if (noTrigger) return { key: 'med', label: 'No update trigger recorded. AI capability moves; without a stated "what would change my mind" and a review trigger, this decision will drift rather than update intentionally.' }
        if (overconfident) return { key: 'med', label: 'High confidence on a one-way door — make sure the disconfirming evidence you would accept is genuinely reachable.' }
        return { key: 'low', label: 'Reasonable shape: the decision has an update path. Re-check it when the review trigger fires.' }
    }, [f])

    const generateMarkdown = () => [
        `# Judgment under uncertainty: ${f.decision.trim() || 'Untitled decision'}`,
        '',
        `- **Prior / base rate:** ${orDash(f.prior)}`,
        `- **Reversibility:** ${DOORS.find(d => d.key === f.door).label}`,
        `- **Confidence:** ${f.confidence}`,
        `- **What would change my mind:** ${orDash(f.changeMind)}`,
        `- **Review trigger:** ${orDash(f.reviewTrigger)}`,
        '',
        `**Assessment:** ${risk.label}`,
        '',
    ].join('\n')

    const handleCopy = () => {
        navigator.clipboard?.writeText(generateMarkdown())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const inputClass = 'w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-emerald-600'
    const riskStyle = { high: 'border-rose-300 bg-rose-50 text-rose-900', med: 'border-amber-300 bg-amber-50 text-amber-900', low: 'border-emerald-300 bg-emerald-50 text-emerald-900' }

    return (
        <div className="grid gap-6 lg:grid-cols-2">
            <form className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm" onSubmit={e => e.preventDefault()}>
                <h2 className="text-lg font-semibold text-slate-950">AI decision under uncertainty</h2>
                <p className="mt-1 text-xs text-slate-500">Capability keeps moving — give the decision an update path, not just a call.</p>
                <div className="mt-4 space-y-4">
                    <label className="block"><span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Decision</span>
                        <input value={f.decision} onChange={update('decision')} placeholder="e.g., Renew the vendor at 2024 pricing" className={inputClass} /></label>
                    <label className="block"><span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Prior / base rate</span>
                        <textarea rows={2} value={f.prior} onChange={update('prior')} placeholder="What history or reference class informs this?" className={`${inputClass} resize-none`} /></label>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block"><span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Reversibility</span>
                            <select value={f.door} onChange={update('door')} className={inputClass}>{DOORS.map(d => <option key={d.key} value={d.key}>{d.label}</option>)}</select></label>
                        <label className="block"><span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Confidence</span>
                            <select value={f.confidence} onChange={update('confidence')} className={inputClass}>{CONFIDENCE.map(c => <option key={c} value={c}>{c}</option>)}</select></label>
                    </div>
                    <label className="block"><span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">What would change my mind</span>
                        <textarea rows={2} value={f.changeMind} onChange={update('changeMind')} placeholder="The disconfirming evidence you would accept" className={`${inputClass} resize-none`} /></label>
                    <label className="block"><span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Review trigger</span>
                        <input value={f.reviewTrigger} onChange={update('reviewTrigger')} placeholder="e.g., re-check at next model release, or in 90 days" className={inputClass} /></label>
                </div>
            </form>

            <div className="space-y-4">
                <div className={`rounded-lg border p-4 text-sm font-medium ${riskStyle[risk.key]}`}>{risk.label}</div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-slate-900">Preview (Markdown)</h3>
                        <button type="button" onClick={handleCopy} className={`inline-flex min-h-9 items-center rounded-md px-3 text-sm font-semibold transition ${copied ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>{copied ? 'Copied!' : 'Copy (MD)'}</button>
                    </div>
                    <pre className="mt-3 max-h-80 overflow-auto whitespace-pre-wrap break-words rounded-md border border-slate-200 bg-white p-4 font-mono text-xs leading-5 text-slate-800">{generateMarkdown()}</pre>
                </div>
            </div>
        </div>
    )
}
