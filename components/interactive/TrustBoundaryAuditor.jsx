import React, { useMemo, useState } from 'react'

// Client-only. Enumerate the surfaces of an AI feature, tag each against the
// three legs of the lethal trifecta, and see when all three co-occur. Nothing
// is sent anywhere — this only reasons over what you type.

const LEGS = {
    input: { key: 'input', label: 'Untrusted input', short: 'untrusted input', hint: 'Content an attacker could influence (messages, emails, files, web pages, tool results).' },
    data: { key: 'data', label: 'Private data in reach', short: 'private data', hint: 'Sensitive data in the model context or reachable via a tool (records, secrets, internal docs).' },
    exfil: { key: 'exfil', label: 'Exfiltration / action', short: 'exfiltration or action', hint: 'A way data leaves or the system acts (outbound HTTP, send, write, model-controlled URL).' },
    benign: { key: 'benign', label: 'Benign / neutral', short: 'benign', hint: 'A surface that is none of the above.' },
}

const RISK_LEGS = ['input', 'data', 'exfil']

const SEED = [
    { id: 's1', label: 'Incoming support email body', leg: 'input' },
    { id: 's2', label: 'CRM customer records in context', leg: 'data' },
    { id: 's3', label: 'Auto-send drafted reply', leg: 'exfil' },
]

let nextId = 1
const makeId = () => `srf${nextId++}`

export default function TrustBoundaryAuditor() {
    const [surfaces, setSurfaces] = useState(SEED)
    const [label, setLabel] = useState('')
    const [leg, setLeg] = useState('input')
    const [copied, setCopied] = useState(false)

    const add = () => {
        const trimmed = label.trim()
        if (!trimmed) return
        setSurfaces(prev => [...prev, { id: makeId(), label: trimmed, leg }])
        setLabel('')
    }
    const remove = (id) => setSurfaces(prev => prev.filter(s => s.id !== id))

    const present = useMemo(() => {
        const set = {}
        for (const key of RISK_LEGS) set[key] = surfaces.some(s => s.leg === key)
        return set
    }, [surfaces])

    const presentCount = RISK_LEGS.filter(k => present[k]).length
    const trifecta = presentCount === 3
    const missing = RISK_LEGS.filter(k => !present[k])

    const generateMarkdown = () => {
        const lines = [
            '# Trust-boundary audit',
            '',
            '## Surfaces',
            ...surfaces.map(s => `- [${LEGS[s.leg].label}] ${s.label}`),
            '',
            '## Lethal trifecta',
            ...RISK_LEGS.map(k => `- ${present[k] ? 'PRESENT' : 'absent'} — ${LEGS[k].label}`),
            '',
            trifecta
                ? '**Verdict:** all three legs present. Prompt injection can exfiltrate or act. Remove a leg; a system prompt is not a control.'
                : presentCount === 2
                    ? `**Verdict:** two legs present (${missing.map(k => `missing ${LEGS[k].short}`).join(', ')}). Keep the missing leg out to prevent the trifecta.`
                    : '**Verdict:** low exposure to the trifecta. Re-audit whenever a new input, data source, or outbound capability is added.',
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

    const legStyle = {
        input: 'bg-amber-100 text-amber-800',
        data: 'bg-sky-100 text-sky-800',
        exfil: 'bg-rose-100 text-rose-800',
        benign: 'bg-slate-100 text-slate-600',
    }

    return (
        <div className="space-y-6">
            {/* Trifecta legs */}
            <div className="grid gap-3 sm:grid-cols-3">
                {RISK_LEGS.map(k => (
                    <div
                        key={k}
                        className={`rounded-lg border p-3 ${present[k] ? 'border-rose-200 bg-rose-50' : 'border-emerald-200 bg-emerald-50'}`}
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-slate-900">{LEGS[k].label}</span>
                            <span className={`text-xs font-bold ${present[k] ? 'text-rose-700' : 'text-emerald-700'}`}>
                                {present[k] ? 'PRESENT' : 'absent'}
                            </span>
                        </div>
                        <p className="mt-1 text-[11px] leading-4 text-slate-600">{LEGS[k].hint}</p>
                    </div>
                ))}
            </div>

            <div
                role="status"
                className={`rounded-lg border p-4 text-sm font-medium ${trifecta
                    ? 'border-rose-300 bg-rose-50 text-rose-900'
                    : presentCount === 2
                        ? 'border-amber-300 bg-amber-50 text-amber-900'
                        : 'border-emerald-300 bg-emerald-50 text-emerald-900'}`}
            >
                {trifecta
                    ? 'Lethal trifecta present: untrusted input, private data, and an exfiltration/action path co-occur. Injection can turn into exfiltration or unintended action. Remove one leg — a system prompt is not a control.'
                    : presentCount === 2
                        ? `Two legs present. You are one surface away from the trifecta — keep ${missing.map(k => LEGS[k].short).join(' and ')} out of this context.`
                        : 'Low trifecta exposure. Re-audit whenever a new input source, data source, or outbound capability is added.'}
            </div>

            {/* Add surface */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">Add a surface</h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-[1.6fr_1fr_auto] sm:items-end">
                    <label className="block">
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Surface</span>
                        <input
                            value={label}
                            onChange={e => setLabel(e.target.value)}
                            onKeyDown={e => { if (e.key === 'Enter') add() }}
                            placeholder="e.g., Uploaded PDF the agent reads"
                            className={inputClass}
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Classify as</span>
                        <select value={leg} onChange={e => setLeg(e.target.value)} className={inputClass}>
                            {Object.values(LEGS).map(l => <option key={l.key} value={l.key}>{l.label}</option>)}
                        </select>
                    </label>
                    <button
                        type="button"
                        onClick={add}
                        disabled={!label.trim()}
                        className="inline-flex min-h-10 items-center justify-center rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-40"
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Surfaces list */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-900">Surfaces ({surfaces.length})</h3>
                    <button
                        type="button"
                        onClick={handleCopy}
                        disabled={surfaces.length === 0}
                        className={`inline-flex min-h-9 items-center rounded-md px-3 text-sm font-semibold transition disabled:opacity-40 ${copied ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
                    >
                        {copied ? 'Copied!' : 'Copy audit (MD)'}
                    </button>
                </div>
                {surfaces.length === 0 ? (
                    <p className="mt-3 text-sm text-slate-500">No surfaces yet. Add the inputs, data, tools, and outputs of one AI feature.</p>
                ) : (
                    <ul className="mt-3 divide-y divide-slate-100">
                        {surfaces.map(s => (
                            <li key={s.id} className="flex items-center justify-between gap-3 py-2">
                                <div className="min-w-0">
                                    <span className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${legStyle[s.leg]}`}>
                                        {LEGS[s.leg].label}
                                    </span>
                                    <span className="ml-2 text-sm text-slate-900">{s.label}</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => remove(s.id)}
                                    aria-label={`Remove surface: ${s.label}`}
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
