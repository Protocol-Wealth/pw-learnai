import React, { useState } from 'react'

const CHECKLIST_ITEMS = [
    { id: 'github', category: 'GitHub & Security', task: 'Create GitHub account and explicitly enable Two-Factor Authentication (2FA).' },
    { id: 'clone', category: 'GitHub & Security', task: 'Clone the practice/starter repository to your local machine.' },
    { id: 'desktop_agent', category: 'Agents Setup', task: 'Install and configure one Desktop or IDE-based AI agent (e.g., Copilot, Claude Sidebar).' },
    { id: 'cli_agent', category: 'Agents Setup', task: 'Set up one CLI-based coding agent (e.g., Codex CLI, Claude Code).' },
    { id: 'state_files', category: 'Project Memory', task: 'Initialize core state files: README.md, SETUP-NOTES.md, and CURRENT-STATE.md.' },
    { id: 'build_check', category: 'Verification', task: 'Run a verified local repo check and ensure that the "pnpm build" command passes successfully without errors.' }
]

export default function SetupNotesChecklist() {
    const [checkedItems, setCheckedItems] = useState({})
    const [copied, setCopied] = useState(false)

    const toggleItem = (id) => {
        setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }))
    }

    // Generate printable/copyable Markdown content
    const generateMarkdown = () => {
        let md = `# 📋 Beginner Onboarding Checklist\n\n`
        CHECKLIST_ITEMS.forEach(item => {
            const isDone = checkedItems[item.id] ? '[x]' : '[ ]'
            md += `${isDone} **[${item.category}]** ${item.task}\n`
        })
        return md
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(generateMarkdown())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="bg-white text-slate-900 p-6 rounded-xl border border-slate-200 max-w-2xl mx-auto my-8 shadow-lg print:border-none print:shadow-none print:p-0">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-6 print:mb-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-2">
                        🚀 SETUP-NOTES.md Beginner Checklist
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 print:hidden">
                        Track your onboarding progress. Fits perfectly on one screen or one printed page.
                    </p>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-2 print:hidden">
                    <button
                        onClick={handlePrint}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-medium rounded transition"
                    >
                        🖨️ Print
                    </button>
                    <button
                        onClick={handleCopy}
                        className={`px-3 py-1.5 text-sm font-medium rounded transition ${copied ? 'bg-emerald-600 text-white' : 'bg-slate-950 hover:bg-slate-800 text-white'
                            }`}
                    >
                        {copied ? '✓ Copied!' : '📋 Copy MD'}
                    </button>
                </div>
            </div>

            {/* Checklist Tasks */}
            <div className="space-y-4">
                {CHECKLIST_ITEMS.map((item) => {
                    const isChecked = !!checkedItems[item.id]
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => toggleItem(item.id)}
                            aria-pressed={isChecked}
                            className={`flex w-full items-start gap-3 p-3 rounded-lg border text-left transition cursor-pointer select-none ${isChecked
                                ? 'bg-emerald-50 border-emerald-200 text-slate-700'
                                : 'bg-slate-50 border-slate-100 text-slate-900 hover:border-slate-300'
                                }`}
                        >
                            {/* Decorative check indicator; the button's aria-pressed conveys state to assistive tech. */}
                            <span
                                aria-hidden="true"
                                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] font-bold leading-none ${isChecked
                                    ? 'bg-emerald-600 border-emerald-600 text-white'
                                    : 'bg-white border-slate-300 text-transparent'
                                    }`}
                            >
                                ✓
                            </span>
                            <span className="min-w-0">
                                <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded mb-1">
                                    {item.category}
                                </span>
                                <span className={`block text-sm leading-relaxed ${isChecked ? 'line-through text-slate-400' : ''}`}>
                                    {item.task}
                                </span>
                            </span>
                        </button>
                    )
                })}
            </div>

            {/* Footer message indicating static/client-only nature */}
            <div className="mt-6 pt-4 border-t border-slate-100 text-center text-[11px] text-slate-400 print:hidden">
                Stays completely static/client-only. No backend, telemetry, or secrets.
            </div>
        </div>
    )
}
