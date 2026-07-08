import React, { useState } from 'react'

// Client-only source-note builder. Every value is user-entered — this tool
// never calls Data.gov, the National Archives API, or any OAI-PMH endpoint at
// runtime. It just formats what you type into a reusable, attributable note.

const ACCESS_METHODS = [
    'Data.gov catalog / dataset download',
    'National Archives Catalog API',
    'OAI-PMH metadata harvest',
    'Direct file download',
    'Other (describe in caveats)',
]

const FIELDS = [
    { key: 'title', label: 'Dataset / collection name', placeholder: 'e.g., County Business Patterns 2022', type: 'text' },
    { key: 'publisher', label: 'Publisher / source agency', placeholder: 'e.g., U.S. Census Bureau', type: 'text' },
    { key: 'url', label: 'Canonical URL', placeholder: 'https://…', type: 'url' },
    { key: 'license', label: 'License / terms notes', placeholder: 'e.g., U.S. Government Work, public domain; check attribution terms', type: 'textarea' },
    { key: 'rateLimits', label: 'Rate-limit / access notes', placeholder: 'e.g., API key required; 1,000 requests/hour; paginate with resumption tokens', type: 'textarea' },
    { key: 'caveats', label: 'Caveats / data-quality notes', placeholder: 'e.g., suppressed cells for small counts; metadata only, not the records themselves', type: 'textarea' },
]

const EMPTY = {
    title: '',
    publisher: '',
    url: '',
    accessMethod: ACCESS_METHODS[0],
    license: '',
    rateLimits: '',
    reviewedDate: '',
    caveats: '',
}

export default function SourceNoteBuilder() {
    const [fields, setFields] = useState(EMPTY)
    const [copied, setCopied] = useState(false)

    const update = (key) => (event) => {
        setFields(prev => ({ ...prev, [key]: event.target.value }))
    }

    const orDash = (value) => (value && value.trim() ? value.trim() : '_(not recorded)_')

    const generateMarkdown = () => {
        const title = fields.title.trim() || 'Untitled source'
        return [
            `## Source note: ${title}`,
            '',
            `- **Publisher / source:** ${orDash(fields.publisher)}`,
            `- **URL:** ${orDash(fields.url)}`,
            `- **Access method:** ${fields.accessMethod}`,
            `- **License / terms:** ${orDash(fields.license)}`,
            `- **Rate limits / access:** ${orDash(fields.rateLimits)}`,
            `- **Reviewed date:** ${orDash(fields.reviewedDate)}`,
            `- **Caveats:** ${orDash(fields.caveats)}`,
            '',
            '_User-entered notes only. Verify against the source before relying on it._',
            '',
        ].join('\n')
    }

    const handleCopy = () => {
        navigator.clipboard?.writeText(generateMarkdown())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleReset = () => setFields(EMPTY)

    const inputClass = 'w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-emerald-600'

    return (
        <div className="grid gap-6 lg:grid-cols-2">
            <form
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                onSubmit={(event) => event.preventDefault()}
            >
                <h2 className="text-lg font-semibold text-slate-950">Public-data source note</h2>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                    Fill in what you know. Nothing is sent anywhere — the note is built in your browser from your input.
                </p>

                <div className="mt-4 space-y-4">
                    {FIELDS.slice(0, 3).map(field => (
                        <label key={field.key} className="block">
                            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">{field.label}</span>
                            <input
                                type={field.type}
                                value={fields[field.key]}
                                onChange={update(field.key)}
                                placeholder={field.placeholder}
                                className={inputClass}
                            />
                        </label>
                    ))}

                    <label className="block">
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Access method</span>
                        <select value={fields.accessMethod} onChange={update('accessMethod')} className={inputClass}>
                            {ACCESS_METHODS.map(method => (
                                <option key={method} value={method}>{method}</option>
                            ))}
                        </select>
                    </label>

                    <label className="block">
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">Reviewed date</span>
                        <input type="date" value={fields.reviewedDate} onChange={update('reviewedDate')} className={inputClass} />
                    </label>

                    {FIELDS.slice(3).map(field => (
                        <label key={field.key} className="block">
                            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">{field.label}</span>
                            <textarea
                                rows={2}
                                value={fields[field.key]}
                                onChange={update(field.key)}
                                placeholder={field.placeholder}
                                className={`${inputClass} resize-none`}
                            />
                        </label>
                    ))}
                </div>

                <div className="mt-5 flex gap-2">
                    <button
                        type="button"
                        onClick={handleCopy}
                        className={`inline-flex min-h-10 items-center rounded-md px-4 text-sm font-semibold transition ${copied ? 'bg-emerald-600 text-white' : 'bg-slate-950 text-white hover:bg-slate-800'}`}
                    >
                        {copied ? 'Copied!' : 'Copy source note'}
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex min-h-10 items-center rounded-md border border-slate-300 px-4 text-sm font-medium text-slate-700 hover:border-slate-500"
                    >
                        Reset
                    </button>
                </div>
            </form>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-900">Preview (Markdown)</h3>
                    <span className="text-[11px] text-slate-400">copy-ready</span>
                </div>
                <pre className="mt-3 max-h-[28rem] overflow-auto whitespace-pre-wrap break-words rounded-md border border-slate-200 bg-white p-4 font-mono text-xs leading-5 text-slate-800">
                    {generateMarkdown()}
                </pre>
            </div>
        </div>
    )
}
