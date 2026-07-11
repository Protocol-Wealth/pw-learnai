import React, { useState } from 'react'

// Client-only. Module 08: convert skeptics by sequence, not persuasion — a path
// of small, undeniable evidence in a specific order. Map each stakeholder to
// the evidence that would move them and the order to run it. Nothing is sent
// anywhere.

let nextId = 1
const makeId = () => `sh${nextId++}`

const SEED = [
    { id: 'sh0', name: 'Finance lead', objection: 'The ROI is unproven', evidence: 'One-week pilot cost/benefit on a single team', artifact: 'One-page cost model with actuals' },
]

export default function StakeholderEvidenceMapper() {
    const [rows, setRows] = useState(SEED)
    const [draft, setDraft] = useState({ name: '', objection: '', evidence: '', artifact: '' })
    const [copied, setCopied] = useState(false)

    const update = (key) => (e) => setDraft(prev => ({ ...prev, [key]: e.target.value }))

    const add = () => {
        if (!draft.name.trim()) return
        setRows(prev => [...prev, { id: makeId(), ...Object.fromEntries(Object.entries(draft).map(([k, v]) => [k, v.trim()])) }])
        setDraft({ name: '', objection: '', evidence: '', artifact: '' })
    }
    const remove = (id) => setRows(prev => prev.filter(r => r.id !== id))
    const move = (id, dir) => setRows(prev => {
        const i = prev.findIndex(r => r.id === id)
        const j = i + dir
        if (i < 0 || j < 0 || j >= prev.length) return prev
        const copy = [...prev]
        ;[copy[i], copy[j]] = [copy[j], copy[i]]
        return copy
    })

    const unmapped = rows.filter(r => !r.evidence)

    const generateMarkdown = () => [
        '# Stakeholder evidence sequence',
        '',
        ...rows.flatMap((r, i) => [
            `## ${i + 1}. ${r.name || '(unnamed)'}`,
            `- **Objection:** ${r.objection || '_(none recorded)_'}`,
            `- **Evidence that converts:** ${r.evidence || '_(none — this conversion has no plan)_'}`,
            `- **Artifact that carries it:** ${r.artifact || '_(none recorded)_'}`,
            '',
        ]),
        unmapped.length ? `**Warning:** ${unmapped.length} stakeholder(s) have no evidence mapped — those conversions rely on persuasion, not evidence.` : '**Every stakeholder has evidence mapped.**',
        '',
    ].join('\n')

    const handleCopy = () => {
        navigator.clipboard?.writeText(generateMarkdown())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const inputClass = 'w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-emerald-600'

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">Add a stakeholder</h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <label className="block"><span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Stakeholder</span>
                        <input value={draft.name} onChange={update('name')} placeholder="Role or name" className={inputClass} /></label>
                    <label className="block"><span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Key objection</span>
                        <input value={draft.objection} onChange={update('objection')} placeholder="What they doubt" className={inputClass} /></label>
                    <label className="block"><span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Evidence that converts</span>
                        <input value={draft.evidence} onChange={update('evidence')} placeholder="Smallest undeniable proof" className={inputClass} /></label>
                    <label className="block"><span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Artifact that carries it</span>
                        <input value={draft.artifact} onChange={update('artifact')} placeholder="Doc / demo / dashboard" className={inputClass} /></label>
                </div>
                <button type="button" onClick={add} disabled={!draft.name.trim()} className="mt-3 inline-flex min-h-10 items-center rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-40">Add stakeholder</button>
            </div>

            {unmapped.length > 0 && (
                <div role="status" className="rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm font-medium text-amber-900">
                    {unmapped.length} stakeholder(s) have no evidence mapped — those conversions rely on persuasion, which evaporates when the persuader leaves the room.
                </div>
            )}

            <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-900">Conversion sequence ({rows.length})</h3>
                    <button type="button" onClick={handleCopy} disabled={rows.length === 0}
                        className={`inline-flex min-h-9 items-center rounded-md px-3 text-sm font-semibold transition disabled:opacity-40 ${copied ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                        {copied ? 'Copied!' : 'Copy sequence (MD)'}
                    </button>
                </div>
                {rows.length === 0 ? (
                    <p className="mt-3 text-sm text-slate-500">No stakeholders yet.</p>
                ) : (
                    <ol className="mt-3 space-y-2">
                        {rows.map((r, i) => (
                            <li key={r.id} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="min-w-0">
                                        <div className="text-sm font-semibold text-slate-900">{i + 1}. {r.name}</div>
                                        {r.objection && <div className="text-xs text-slate-600">Objection: {r.objection}</div>}
                                        <div className={`text-xs ${r.evidence ? 'text-slate-600' : 'text-rose-700'}`}>Evidence: {r.evidence || 'none mapped'}</div>
                                        {r.artifact && <div className="text-xs text-slate-600">Artifact: {r.artifact}</div>}
                                    </div>
                                    <div className="flex shrink-0 items-center gap-1">
                                        <button type="button" onClick={() => move(r.id, -1)} disabled={i === 0} aria-label={`Move ${r.name} earlier`} className="rounded px-2 py-1 text-xs text-slate-500 hover:bg-slate-200 disabled:opacity-30">↑</button>
                                        <button type="button" onClick={() => move(r.id, 1)} disabled={i === rows.length - 1} aria-label={`Move ${r.name} later`} className="rounded px-2 py-1 text-xs text-slate-500 hover:bg-slate-200 disabled:opacity-30">↓</button>
                                        <button type="button" onClick={() => remove(r.id)} aria-label={`Remove ${r.name}`} className="rounded px-2 py-1 text-xs text-slate-500 hover:bg-slate-200 hover:text-rose-700">Remove</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </div>
    )
}
