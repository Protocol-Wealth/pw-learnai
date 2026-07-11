import React, { useMemo, useState } from 'react'

// Client-only. Module 05's binary test: is this a platform (value from
// facilitating interactions between participant groups, with network effects)
// or a product with an API? Answers are yours; nothing is sent anywhere.

const GATES = [
    { id: 'g1', q: 'Value comes primarily from facilitating direct interactions between two or more distinct participant groups.' },
    { id: 'g2', q: 'More participants on one side increase the value to the other side (cross-side network effects).' },
    { id: 'g3', q: 'Remove one participant group and the core value collapses — not just a lost feature.' },
]

const MOATS = [
    { id: 'm1', q: 'Participants can easily use competing platforms at the same time (multi-homing is cheap).', weakens: true },
    { id: 'm2', q: 'Switching to a competitor is cheap and fast for participants.', weakens: true },
]

export default function PlatformEconomicsDiagnostic() {
    const [gates, setGates] = useState({})
    const [moats, setMoats] = useState({})
    const [copied, setCopied] = useState(false)

    const set = (setter) => (id, val) => setter(prev => ({ ...prev, [id]: val }))

    const gateYes = GATES.filter(g => gates[g.id] === true).length
    const answeredAll = GATES.every(g => typeof gates[g.id] === 'boolean')

    const verdict = useMemo(() => {
        if (!answeredAll) return { key: 'incomplete', label: 'Answer the three platform-test questions.' }
        if (gateYes === 3) return { key: 'platform', label: 'This looks like a platform. The category is real — but expect an 18–36 month chicken-and-egg launch and price the investment accordingly.' }
        if (gateYes === 2) return { key: 'borderline', label: 'Borderline. One platform condition is missing — be honest about whether the network effect is real or aspirational before funding a platform strategy.' }
        return { key: 'product', label: 'This is a product with an API, not a platform. Treating it like a platform wastes money on a network effect that will not compound.' }
    }, [answeredAll, gateYes])

    const weakeners = MOATS.filter(m => moats[m.id] === true)
    const moatNote = verdict.key === 'platform'
        ? (weakeners.length === 0
            ? 'Defensibility: no multi-homing or low-switching-cost flags — the network effect can compound.'
            : `Defensibility risk: ${weakeners.map(m => m.id === 'm1' ? 'cheap multi-homing' : 'low switching costs').join(' and ')} — even a real platform erodes if participants can leave or split their usage freely.`)
        : ''

    const generateMarkdown = () => [
        '# Platform vs. product diagnostic',
        '',
        '## Platform test',
        ...GATES.map(g => `- [${gates[g.id] === true ? 'yes' : gates[g.id] === false ? 'no' : '—'}] ${g.q}`),
        '',
        `**Verdict:** ${verdict.label}`,
        ...(moatNote ? ['', `**${moatNote}**`] : []),
        '',
    ].join('\n')

    const handleCopy = () => {
        navigator.clipboard?.writeText(generateMarkdown())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const YesNo = ({ value, onYes, onNo }) => (
        <div className="flex shrink-0 gap-1">
            <button type="button" onClick={onYes} className={`min-h-9 rounded-md px-3 text-sm font-medium ${value === true ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>Yes</button>
            <button type="button" onClick={onNo} className={`min-h-9 rounded-md px-3 text-sm font-medium ${value === false ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>No</button>
        </div>
    )

    const verdictStyle = {
        platform: 'border-emerald-300 bg-emerald-50 text-emerald-900',
        borderline: 'border-amber-300 bg-amber-50 text-amber-900',
        product: 'border-rose-300 bg-rose-50 text-rose-900',
        incomplete: 'border-slate-200 bg-slate-50 text-slate-600',
    }

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
                <h2 className="text-lg font-semibold text-slate-950">Platform test</h2>
                <p className="mt-1 text-xs text-slate-500">All three must be true for the platform category to apply.</p>
                <ul className="mt-4 space-y-3">
                    {GATES.map(g => (
                        <li key={g.id} className="flex items-start justify-between gap-3">
                            <span className="text-sm leading-6 text-slate-800">{g.q}</span>
                            <YesNo value={gates[g.id]} onYes={() => set(setGates)(g.id, true)} onNo={() => set(setGates)(g.id, false)} />
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`rounded-lg border p-4 text-sm font-medium ${verdictStyle[verdict.key]}`}>
                {verdict.label}
                {moatNote && <p className="mt-2 font-normal">{moatNote}</p>}
            </div>

            {verdict.key === 'platform' && (
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="text-sm font-semibold text-slate-900">Defensibility checks</h3>
                    <ul className="mt-3 space-y-3">
                        {MOATS.map(m => (
                            <li key={m.id} className="flex items-start justify-between gap-3">
                                <span className="text-sm leading-6 text-slate-800">{m.q}</span>
                                <YesNo value={moats[m.id]} onYes={() => set(setMoats)(m.id, true)} onNo={() => set(setMoats)(m.id, false)} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <button
                type="button"
                onClick={handleCopy}
                disabled={!answeredAll}
                className={`inline-flex min-h-10 items-center rounded-md px-4 text-sm font-semibold transition disabled:opacity-40 ${copied ? 'bg-emerald-600 text-white' : 'bg-slate-950 text-white hover:bg-slate-800'}`}
            >
                {copied ? 'Copied!' : 'Copy diagnostic'}
            </button>
        </div>
    )
}
