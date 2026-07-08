import React, { useState } from 'react'

const DATA_SOURCES = [
    { id: 'datagov', name: 'Data.gov' },
    { id: 'archives', name: 'National Archives Catalog API' },
    { id: 'oaipmh', name: 'OAI-PMH' }
]

export default function SourceNoteBuilder() {
    const [source, setSource] = useState('datagov')
    const [publisher, setPublisher] = useState('')
    const [url, setUrl] = useState('')
    const [accessMethod, setAccessMethod] = useState('API')
    const [license, setLicense] = useState('')
    const [rateLimit, setRateLimit] = useState('')
    const [reviewedDate, setReviewedDate] = useState(new Date().toISOString().split('T')[0])
    const [caveats, setCaveats] = useState('')
    const [copied, setCopied] = useState(false)

    // Pure Client-side Source Note Generation
    const generatedNote = `--- SOURCE NOTE (${source.toUpperCase()}) ---
Publisher: ${publisher || 'N/A'}
URL: ${url || 'N/A'}
Access Method: ${accessMethod}
License/Terms: ${license || 'N/A'}
Rate-Limit Notes: ${rateLimit || 'None'}
Reviewed Date: ${reviewedDate}
Caveats/Limitations: ${caveats || 'None'}
-----------------------------------------`

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedNote)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl border border-slate-700 max-w-3xl mx-auto my-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400 flex items-center gap-2">
                🌐 Browser-Only Public-Data Source-Note Builder
            </h2>
            <p className="text-sm text-slate-400 mb-6">
                Generate properly formatted, copyable source notes locally. No external runtime calls.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Source Selector */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-slate-300">Data Source</label>
                    <select
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 focus:outline-none focus:border-emerald-500 text-white"
                    >
                        {DATA_SOURCES.map(src => (
                            <option key={src.id} value={src.id}>{src.name}</option>
                        ))}
                    </select>
                </div>

                {/* Publisher */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-slate-300">Publisher</label>
                    <input
                        type="text"
                        value={publisher}
                        onChange={(e) => setPublisher(e.target.value)}
                        placeholder="e.g. US General Services Administration"
                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 focus:outline-none focus:border-emerald-500 text-white"
                    />
                </div>

                {/* URL */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-slate-300">Source URL</label>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://catalog.data.gov/api/..."
                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 focus:outline-none focus:border-emerald-500 text-white"
                    />
                </div>

                {/* Access Method */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-slate-300">Access Method</label>
                    <select
                        value={accessMethod}
                        onChange={(e) => setAccessMethod(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 focus:outline-none focus:border-emerald-500 text-white"
                    >
                        <option value="API">REST API</option>
                        <option value="OAI-PMH Harvest">OAI-PMH Harvesting</option>
                        <option value="Bulk Download">Bulk Download</option>
                    </select>
                </div>

                {/* License */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-slate-300">License / Terms</label>
                    <input
                        type="text"
                        value={license}
                        onChange={(e) => setLicense(e.target.value)}
                        placeholder="e.g. CC0, Public Domain"
                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 focus:outline-none focus:border-emerald-500 text-white"
                    />
                </div>

                {/* Rate Limits */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-slate-300">Rate Limits</label>
                    <input
                        type="text"
                        value={rateLimit}
                        onChange={(e) => setRateLimit(e.target.value)}
                        placeholder="e.g. 1,000 requests per hour"
                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 focus:outline-none focus:border-emerald-500 text-white"
                    />
                </div>

                {/* Reviewed Date */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-slate-300">Reviewed Date</label>
                    <input
                        type="date"
                        value={reviewedDate}
                        onChange={(e) => setReviewedDate(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 focus:outline-none focus:border-emerald-500 text-white"
                    />
                </div>

                {/* Caveats */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-slate-300">Caveats / Limitations</label>
                    <input
                        type="text"
                        value={caveats}
                        onChange={(e) => setCaveats(e.target.value)}
                        placeholder="e.g. Metadata latency of 24h"
                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 focus:outline-none focus:border-emerald-500 text-white"
                    />
                </div>
            </div>

            {/* Output Area */}
            <div className="mt-6 bg-slate-950 border border-slate-800 rounded-lg p-4 relative">
                <span className="absolute top-2 right-2 text-xs uppercase bg-slate-800 px-2 py-1 rounded text-slate-400 font-mono">Output</span>
                <pre className="text-sm font-mono text-emerald-300 whitespace-pre-wrap break-all mt-4">
                    {generatedNote}
                </pre>
                <button
                    onClick={handleCopy}
                    className={`mt-4 w-full py-2 px-4 rounded font-medium transition-colors duration-200 ${copied ? 'bg-emerald-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                        }`}
                >
                    {copied ? '✓ Copied to Clipboard!' : '📋 Copy Source Note'}
                </button>
            </div>
        </div>
    )
}
