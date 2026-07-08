import React, { useEffect, useRef, useState } from 'react'

export default function PromptAgentExercise() {
    const [prompt, setPrompt] = useState('')
    const [logs, setLogs] = useState([])
    const [isSimulating, setIsSimulating] = useState(false)
    const [score, setScore] = useState(null)

    // Track pending timeouts so we can clear them on unmount (or on a new run)
    // and avoid state updates on an unmounted component.
    const timeoutsRef = useRef([])

    const clearTimeouts = () => {
        timeoutsRef.current.forEach(clearTimeout)
        timeoutsRef.current = []
    }

    useEffect(() => clearTimeouts, [])

    const handleSimulate = (e) => {
        e.preventDefault()
        if (!prompt.trim()) return

        clearTimeouts()
        setIsSimulating(true)
        setLogs([])
        setScore(null)

        // Simulating agent thoughts and actions loop step-by-step
        const steps = [
            { text: '🤖 Agent initialized. Analyzing system instructions and prompt context...', delay: 600 },
            { text: '🔍 Planning: Breaking down requested task into atomic execution steps...', delay: 1400 },
            { text: `🛠️ Action: Injecting variable targets and formatting execution blocks...`, delay: 2200 },
            { text: '📊 Evaluation: Testing prompt clarity and evaluating potential edge-cases...', delay: 3000 }
        ]

        steps.forEach((step) => {
            timeoutsRef.current.push(setTimeout(() => {
                setLogs(prev => [...prev, step.text])
            }, step.delay))
        })

        // Final evaluation score based on basic keyword check
        timeoutsRef.current.push(setTimeout(() => {
            setIsSimulating(false)
            const hasKeywords = ['act', 'role', 'format', 'output', 'step'].some(kw => prompt.toLowerCase().includes(kw))
            setScore(hasKeywords ? 95 : 75)
        }, 3800))
    }

    return (
        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl border border-slate-800 max-w-2xl mx-auto my-8 shadow-2xl">
            <div className="border-b border-slate-800 pb-4 mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    🧠 Prompt-to-Agent Task Exercise
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                    Module 13 companion: Craft a robust prompt and evaluate how a local agent processes it.
                </p>
            </div>

            <form onSubmit={handleSimulate} className="space-y-4">
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Write your Agent Prompt here:
                    </label>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        disabled={isSimulating}
                        rows={4}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 font-mono resize-none disabled:opacity-60"
                        placeholder="e.g., Act as a data parser. Read the raw text and extract all metrics into a valid JSON array..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSimulating || !prompt.trim()}
                    className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 font-medium text-sm text-slate-950 rounded-lg transition disabled:opacity-40 font-semibold"
                >
                    {isSimulating ? '⚙️ Agent is executing...' : '🚀 Run Agent Simulation'}
                </button>
            </form>

            {/* Execution logs */}
            {logs.length > 0 && (
                <div className="mt-6 bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs space-y-2 text-cyan-400 max-h-48 overflow-y-auto">
                    <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest border-b border-slate-900 pb-1 mb-2">
                        Execution Logs / Trace
                    </div>
                    {logs.map((log, idx) => (
                        <div key={idx} className="animate-fadeIn">{log}</div>
                    ))}
                </div>
            )}

            {/* Score Result */}
            {score !== null && (
                <div className="mt-4 p-4 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center animate-scaleUp">
                    <div>
                        <div className="text-xs text-slate-400 font-medium">Prompt Efficiency Rating</div>
                        <div className="text-lg font-bold text-white mt-0.5">
                            {score >= 90 ? '🌟 Excellent Structural Clarity' : '👍 Good, Consider adding roles'}
                        </div>
                    </div>
                    <div className="text-3xl font-black text-cyan-400">{score}/100</div>
                </div>
            )}
        </div>
    )
}
