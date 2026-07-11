import React, { useState } from 'react'

// Client-only. Turns a recurring decision into a defensible, copyable record
// (an ADR-style artifact). Nothing is sent anywhere — the record is built in
// your browser from what you type.

const STATUSES = ['Proposed', 'Accepted', 'Superseded']

const DOORS = {
    two: {
        key: 'two',
        label: 'Two-way door (reversible)',
        advice: 'Reversible — decide fast and cheaply. Delegating this is usually correct; the cost of a wrong call is the cost of reversing it.',
    },
    one: {
        key: 'one',
        label: 'One-way door (hard to reverse)',
        advice: 'Hard to reverse — slow down. Document the reasoning and the disconfirming evidence you would accept, and get a second reader before committing.',
    },
}

const EMPTY = {
    title: '',
    status: STATUSES[0],
    context: '',
    options: '',
    decision: '',
    door: 'two',
    owner: '',
    reviewDate: '',
}

export default function DecisionRecordBuilder() {
    const [fields, setFields] = useState(EMPTY)
    const [copied, setCopied] = useState(false)

    const update = (key) => (e) => setFields(prev => ({ ...prev, [key]: e.target.value }))
    const orDash = (v) => (v && v.trim() ? v.trim() : '_(not recorded)_')

    const generateMarkdown = () => {
        return [
            `# Decision record: ${fields.title.trim() || 'Untitled decision'}`,
            '',
            `- **Status:** ${fields.status}`,
            `- **Owner / decider:** ${orDash(fields.owner)}`,
            `- **Reversibility:** ${DOORS[fields.door].label}`,
            `- **Review date:** ${orDash(fields.reviewDate)}`,
            '',
            '## Context',
            orDash(fields.context),
            '',
            '## Options considered',
            orDash(fields.options),
            '',
            '## Decision',
            orDash(fields.decision),
            '',
            '## Reversibility note',
            DOORS[fields.door].advice,
            '',
        ].join('\n')
    }

    const handleCopy = () => {
        navigator.clipboard?.writeText(generateMarkdown())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const inputClass = 'w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-emerald-600'

    return (
        <div className="grid gap-6 lg:grid-cols-2">
            <form className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm" onSubmit={e => e.preventDefault()}>
                <h2 className="text-lg font-semibold text-slate-950">Decision record</h2>
                <p className="mt-1 text-xs leading-5 text-slate-500">A defensible artifact for a recurring decision. Built in your browser; nothing is sent anywhere.</p>

                <div className="mt-4 space-y-4">
                    <label className="block">
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Decision</span>
                        <input value={fields.title} onChange={update('title')} placeholder="e.g., Adopt Neon Postgres for the pilot" className={inputClass} />
                    </label>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Status</span>
                            <select value={fields.status} onChange={update('status')} className={inputClass}>
                                {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </label>
                        <label className="block">
                            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Review date</span>
                            <input type="date" value={fields.reviewDate} onChange={update('reviewDate')} className={inputClass} />
                        </label>
                    </div>

                    <label className="block">
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Owner / decider</span>
                        <input value={fields.owner} onChange={update('owner')} placeholder="Who owns this decision" className={inputClass} />
                    </label>

                    <label className="block">
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Context</span>
                        <textarea rows={2} value={fields.context} onChange={update('context')} placeholder="What forces this decision now?" className={`${inputClass} resize-none`} />
                    </label>

                    <label className="block">
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Options considered</span>
                        <textarea rows={2} value={fields.options} onChange={update('options')} placeholder="The alternatives, one per line, with the tradeoff of each" className={`${inputClass} resize-none`} />
                    </label>

                    <label className="block">
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Decision & rationale</span>
                        <textarea rows={2} value={fields.decision} onChange={update('decision')} placeholder="What was chosen, and the reasoning a skeptic could check" className={`${inputClass} resize-none`} />
                    </label>

                    <fieldset>
                        <legend className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Reversibility</legend>
                        <div className="flex flex-col gap-2 sm:flex-row">
                            {Object.values(DOORS).map(d => (
                                <label key={d.key} className={`flex-1 cursor-pointer rounded-md border px-3 py-2 text-sm ${fields.door === d.key ? 'border-emerald-600 bg-emerald-50 text-slate-900' : 'border-slate-300 text-slate-700'}`}>
                                    <input type="radio" name="door" value={d.key} checked={fields.door === d.key} onChange={update('door')} className="mr-2" />
                                    {d.label}
                                </label>
                            ))}
                        </div>
                        <p className="mt-2 text-xs leading-5 text-slate-600">{DOORS[fields.door].advice}</p>
                    </fieldset>
                </div>

                <div className="mt-5">
                    <button
                        type="button"
                        onClick={handleCopy}
                        className={`inline-flex min-h-10 items-center rounded-md px-4 text-sm font-semibold transition ${copied ? 'bg-emerald-600 text-white' : 'bg-slate-950 text-white hover:bg-slate-800'}`}
                    >
                        {copied ? 'Copied!' : 'Copy decision record'}
                    </button>
                </div>
            </form>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-900">Preview (Markdown)</h3>
                    <span className="text-[11px] text-slate-400">copy-ready</span>
                </div>
                <pre className="mt-3 max-h-[32rem] overflow-auto whitespace-pre-wrap break-words rounded-md border border-slate-200 bg-white p-4 font-mono text-xs leading-5 text-slate-800">
                    {generateMarkdown()}
                </pre>
            </div>
        </div>
    )
}
