import React, { useMemo, useState } from 'react'

// Client-only. Operationalizes Module 11's Layer-2 discipline: a test set with
// only happy-path cases tests only the work the system was designed for. Enter
// your cases, tag each, and this checks the mix against the module's target
// bands. Nothing is sent anywhere.

const CATEGORIES = [
    { id: 'happy', label: 'Happy path', min: 30, max: 50, hint: 'Typical, expected inputs.' },
    { id: 'edge', label: 'Edge case', min: 20, max: 30, hint: 'Unusual, ambiguous, or boundary inputs.' },
    { id: 'adversarial', label: 'Adversarial', min: 15, max: 25, hint: 'Injection, off-topic, sensitive-material refusals.' },
    { id: 'ood', label: 'Out-of-distribution', min: 10, max: 20, hint: 'Inputs it should refuse or escalate.' },
]

const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map(c => [c.id, c]))

const SEED_CASES = [
    { id: 's1', label: 'Well-formed request, in-scope', category: 'happy', verifies: 'Baseline correct output' },
    { id: 's2', label: 'Empty / whitespace-only input', category: 'edge', verifies: 'Graceful handling, no crash' },
    { id: 's3', label: 'Prompt-injection in user text', category: 'adversarial', verifies: 'Ignores embedded instructions' },
    { id: 's4', label: 'Request outside intended domain', category: 'ood', verifies: 'Refuses or escalates' },
]

let nextId = 100
const makeId = () => `c${nextId++}`

export default function TestSetCompositionAuditor() {
    const [cases, setCases] = useState(SEED_CASES)
    const [label, setLabel] = useState('')
    const [category, setCategory] = useState(CATEGORIES[0].id)
    const [verifies, setVerifies] = useState('')
    const [copied, setCopied] = useState(false)

    const addCase = () => {
        const trimmed = label.trim()
        if (!trimmed) return
        setCases(prev => [...prev, { id: makeId(), label: trimmed, category, verifies: verifies.trim() }])
        setLabel('')
        setVerifies('')
    }

    const removeCase = (id) => setCases(prev => prev.filter(c => c.id !== id))

    const stats = useMemo(() => {
        const total = cases.length
        return CATEGORIES.map(cat => {
            const count = cases.filter(c => c.category === cat.id).length
            const pct = total ? Math.round((count / total) * 100) : 0
            let status = 'empty'
            if (total > 0) {
                if (count === 0) status = 'missing'
                else if (pct < cat.min) status = 'under'
                else if (pct > cat.max) status = 'over'
                else status = 'within'
            }
            return { ...cat, count, pct, status }
        })
    }, [cases])

    const total = cases.length
    const problems = stats.filter(s => s.status === 'missing' || s.status === 'under' || s.status === 'over')
    const balanced = total > 0 && problems.length === 0

    const statusStyle = {
        within: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        under: 'bg-amber-50 text-amber-800 border-amber-200',
        over: 'bg-amber-50 text-amber-800 border-amber-200',
        missing: 'bg-rose-50 text-rose-800 border-rose-200',
        empty: 'bg-slate-50 text-slate-500 border-slate-200',
    }
    const statusLabel = {
        within: 'within band',
        under: 'under band',
        over: 'over band',
        missing: 'none',
        empty: '—',
    }

    const generateMarkdown = () => {
        const lines = [
            '# Test-set composition audit',
            '',
            `Total cases: ${total}`,
            '',
            '| Category | Count | Share | Target | Status |',
            '| --- | --- | --- | --- | --- |',
            ...stats.map(s => `| ${s.label} | ${s.count} | ${s.pct}% | ${s.min}–${s.max}% | ${statusLabel[s.status]} |`),
            '',
            balanced
                ? '**Verdict:** composition is within the recommended bands.'
                : `**Verdict:** rebalance — ${problems.map(p => `${p.label} ${statusLabel[p.status]}`).join(', ')}.`,
            '',
            '## Cases',
            ...cases.map(c => `- [${CATEGORY_BY_ID[c.category].label}] ${c.label}${c.verifies ? ` — _verifies:_ ${c.verifies}` : ''}`),
            '',
        ]
        return lines.join('\n')
    }

    const handleCopy = () => {
        navigator.clipboard?.writeText(generateMarkdown())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const inputClass = 'w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-emerald-600'

    return (
        <div className="space-y-6">
            {/* Composition bands */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map(s => (
                    <div key={s.id} className={`rounded-lg border p-3 ${statusStyle[s.status]}`}>
                        <div className="flex items-baseline justify-between">
                            <span className="text-sm font-semibold">{s.label}</span>
                            <span className="text-lg font-bold tabular-nums">{s.pct}%</span>
                        </div>
                        <div className="mt-1 text-xs">{s.count} case{s.count === 1 ? '' : 's'} · target {s.min}–{s.max}% · {statusLabel[s.status]}</div>
                        <div className="mt-1 text-[11px] leading-4 opacity-80">{s.hint}</div>
                    </div>
                ))}
            </div>

            <div
                role="status"
                className={`rounded-lg border p-3 text-sm font-medium ${total === 0
                    ? 'border-slate-200 bg-slate-50 text-slate-600'
                    : balanced
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                        : 'border-amber-200 bg-amber-50 text-amber-800'}`}
            >
                {total === 0
                    ? 'Add cases to audit your test-set composition.'
                    : balanced
                        ? `Balanced: all four categories are within their target bands (${total} cases).`
                        : `Rebalance: ${problems.map(p => `${p.label} is ${statusLabel[p.status]}`).join('; ')}.`}
            </div>

            {/* Add case */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">Add a test case</h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-[1.4fr_0.9fr_1.4fr_auto] sm:items-end">
                    <label className="block">
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Case</span>
                        <input
                            value={label}
                            onChange={e => setLabel(e.target.value)}
                            onKeyDown={e => { if (e.key === 'Enter') addCase() }}
                            placeholder="Short description"
                            className={inputClass}
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Category</span>
                        <select value={category} onChange={e => setCategory(e.target.value)} className={inputClass}>
                            {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                        </select>
                    </label>
                    <label className="block">
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Verifies (optional)</span>
                        <input
                            value={verifies}
                            onChange={e => setVerifies(e.target.value)}
                            onKeyDown={e => { if (e.key === 'Enter') addCase() }}
                            placeholder="What this test checks"
                            className={inputClass}
                        />
                    </label>
                    <button
                        type="button"
                        onClick={addCase}
                        disabled={!label.trim()}
                        className="inline-flex min-h-10 items-center justify-center rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-40"
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Cases list */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-900">Cases ({total})</h3>
                    <button
                        type="button"
                        onClick={handleCopy}
                        disabled={total === 0}
                        className={`inline-flex min-h-9 items-center rounded-md px-3 text-sm font-semibold transition disabled:opacity-40 ${copied ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
                    >
                        {copied ? 'Copied!' : 'Copy audit (MD)'}
                    </button>
                </div>
                {total === 0 ? (
                    <p className="mt-3 text-sm text-slate-500">No cases yet.</p>
                ) : (
                    <ul className="mt-3 divide-y divide-slate-100">
                        {cases.map(c => (
                            <li key={c.id} className="flex items-start justify-between gap-3 py-2">
                                <div className="min-w-0">
                                    <span className="inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                                        {CATEGORY_BY_ID[c.category].label}
                                    </span>
                                    <span className="ml-2 text-sm text-slate-900">{c.label}</span>
                                    {c.verifies && <span className="mt-0.5 block text-xs text-slate-500">verifies: {c.verifies}</span>}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeCase(c.id)}
                                    aria-label={`Remove case: ${c.label}`}
                                    className="shrink-0 rounded px-2 py-1 text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-rose-700"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
