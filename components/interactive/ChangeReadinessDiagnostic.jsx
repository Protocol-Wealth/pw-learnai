import React, { useMemo, useState } from 'react'

// Client-only. Module 06 argues ambidexterity is a structural property, not a
// leadership virtue. This rates the structural factors and names the weakest —
// where the architecture sets leadership up to lose the explore/exploit
// trade-off. Answers are yours; nothing is sent anywhere.

const LEVELS = [
    { key: 'weak', label: 'Weak', score: 1 },
    { key: 'partial', label: 'Partial', score: 2 },
    { key: 'strong', label: 'Strong', score: 3 },
]
const SCORE = Object.fromEntries(LEVELS.map(l => [l.key, l.score]))

const FACTORS = [
    { id: 'structure', label: 'Separate structure', hint: 'Exploration runs on a protected structure/P&L, not inside the core\'s budget line.' },
    { id: 'bandwidth', label: 'Protected bandwidth', hint: 'Exploration has dedicated management attention, not leaders judged on core revenue.' },
    { id: 'latency', label: 'Decision latency', hint: 'Decisions on the exploration get made in days, not quarters.' },
    { id: 'feedback', label: 'Feedback loops', hint: 'The org learns from a change quickly and visibly.' },
    { id: 'ownership', label: 'Ownership clarity', hint: 'One accountable owner for exploration outcomes.' },
    { id: 'reversibility', label: 'Reversibility', hint: 'Changes can be tried and rolled back cheaply.' },
]

export default function ChangeReadinessDiagnostic() {
    const [ratings, setRatings] = useState({})
    const [copied, setCopied] = useState(false)

    const rate = (id, key) => setRatings(prev => ({ ...prev, [id]: key }))
    const answered = FACTORS.filter(f => ratings[f.id]).length
    const complete = answered === FACTORS.length

    const result = useMemo(() => {
        if (!complete) return null
        const total = FACTORS.reduce((sum, f) => sum + SCORE[ratings[f.id]], 0)
        const max = FACTORS.length * 3
        const pct = Math.round((total / max) * 100)
        const weakest = FACTORS.filter(f => ratings[f.id] === 'weak')
        let band
        if (pct >= 80) band = { key: 'ready', label: 'Structurally ready: the architecture can hold explore and exploit at once.' }
        else if (pct >= 55) band = { key: 'mixed', label: 'Mixed: some structure is in place, but the weak factors will quietly starve exploration.' }
        else band = { key: 'atrisk', label: 'At risk: the structure sets leadership up to lose the trade-off no matter how visionary they are.' }
        return { total, max, pct, weakest, band }
    }, [complete, ratings])

    const generateMarkdown = () => {
        if (!result) return '# Change-readiness diagnostic\n\n_Rate all factors to generate the readout._\n'
        return [
            '# Change-readiness diagnostic',
            '',
            `Score: ${result.total}/${result.max} (${result.pct}%)`,
            '',
            '| Factor | Rating |',
            '| --- | --- |',
            ...FACTORS.map(f => `| ${f.label} | ${LEVELS.find(l => l.key === ratings[f.id]).label} |`),
            '',
            `**Verdict:** ${result.band.label}`,
            result.weakest.length
                ? `**Weakest:** ${result.weakest.map(f => f.label).join(', ')} — fix the structure here first.`
                : '**No factor rated Weak.**',
            '',
        ].join('\n')
    }

    const handleCopy = () => {
        navigator.clipboard?.writeText(generateMarkdown())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const bandStyle = { ready: 'border-emerald-300 bg-emerald-50 text-emerald-900', mixed: 'border-amber-300 bg-amber-50 text-amber-900', atrisk: 'border-rose-300 bg-rose-50 text-rose-900' }

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
                <h2 className="text-lg font-semibold text-slate-950">Structural factors</h2>
                <p className="mt-1 text-xs text-slate-500">Rate each factor for your explore/exploit setup.</p>
                <ul className="mt-4 space-y-4">
                    {FACTORS.map(f => (
                        <li key={f.id}>
                            <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <div className="text-sm font-semibold text-slate-900">{f.label}</div>
                                    <p className="text-xs leading-5 text-slate-500">{f.hint}</p>
                                </div>
                                <div className="flex shrink-0 gap-1" role="group" aria-label={f.label}>
                                    {LEVELS.map(l => (
                                        <button
                                            key={l.key}
                                            type="button"
                                            onClick={() => rate(f.id, l.key)}
                                            aria-pressed={ratings[f.id] === l.key}
                                            className={`min-h-9 rounded-md px-3 text-xs font-medium ${ratings[f.id] === l.key ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                                        >
                                            {l.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {result && (
                <div className={`rounded-lg border p-4 text-sm font-medium ${bandStyle[result.band.key]}`}>
                    {result.band.label} ({result.pct}%)
                    {result.weakest.length > 0 && (
                        <p className="mt-2 font-normal">Weakest: {result.weakest.map(f => f.label).join(', ')} — fix the structure here first.</p>
                    )}
                </div>
            )}

            <button
                type="button"
                onClick={handleCopy}
                disabled={!complete}
                className={`inline-flex min-h-10 items-center rounded-md px-4 text-sm font-semibold transition disabled:opacity-40 ${copied ? 'bg-emerald-600 text-white' : 'bg-slate-950 text-white hover:bg-slate-800'}`}
            >
                {copied ? 'Copied!' : 'Copy diagnostic'}
            </button>
        </div>
    )
}
