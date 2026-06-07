import React, { useMemo, useState } from 'react'
import { CheckCircle2, FileCheck2, LockKeyhole, RotateCcw, ShieldCheck, XCircle } from 'lucide-react'

const SAMPLE_PAYLOADS = {
  'send_client_email': {
    tool: 'send_client_email',
    tier: 'write-client-facing',
    subjectRef: 'subj_demo_8f1c',
    templateId: 'roth_conversion_summary_v1',
    deliveryMode: 'advisor_review_required',
    fields: {
      planningRunId: 'run_demo_2026_06_07',
      recommendation: 'Discuss Roth conversion range with advisor before sending.',
    },
  },
  'create_review_item': {
    tool: 'create_review_item',
    tier: 'internal-write',
    subjectRef: 'subj_demo_8f1c',
    title: 'Review planning assumptions',
    dueInDays: 3,
    source: 'planning_lab',
  },
}

function stableStringify(value) {
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(',')}}`
  }
  return JSON.stringify(value)
}

function hashText(text) {
  let hash = 2166136261
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return (hash >>> 0).toString(16).padStart(8, '0')
}

function parseJson(text) {
  try {
    return { value: JSON.parse(text), error: null }
  } catch (error) {
    return { value: null, error: error.message }
  }
}

export default function ConfirmationGateSimulator() {
  const [selected, setSelected] = useState('send_client_email')
  const [payloadText, setPayloadText] = useState(JSON.stringify(SAMPLE_PAYLOADS.send_client_email, null, 2))
  const [approvedHash, setApprovedHash] = useState(null)
  const [executed, setExecuted] = useState(false)

  const parsed = useMemo(() => parseJson(payloadText), [payloadText])
  const currentHash = useMemo(() => {
    if (!parsed.value) return null
    return hashText(stableStringify(parsed.value))
  }, [parsed.value])
  const approved = approvedHash && currentHash === approvedHash
  const drifted = approvedHash && currentHash && currentHash !== approvedHash

  function loadSample(id) {
    setSelected(id)
    setPayloadText(JSON.stringify(SAMPLE_PAYLOADS[id], null, 2))
    setApprovedHash(null)
    setExecuted(false)
  }

  function approve() {
    if (!currentHash) return
    setApprovedHash(currentHash)
    setExecuted(false)
  }

  function execute() {
    if (!approved) return
    setExecuted(true)
  }

  function reset() {
    setApprovedHash(null)
    setExecuted(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-zinc-950">Confirmation Gate Simulator</h2>
        <p className="mt-1 text-sm text-zinc-600">
          Demonstrates a payload-bound preview, approval, and execute flow for write-like agent tools.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1.3fr]">
        <section className="space-y-4">
          <div className="rounded-lg border border-zinc-200 bg-white p-4">
            <div className="text-sm font-semibold text-zinc-900">Action</div>
            <div className="mt-3 grid gap-2">
              {Object.entries(SAMPLE_PAYLOADS).map(([id, payload]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => loadSample(id)}
                  className={`rounded-md border px-3 py-2 text-left text-sm transition ${
                    selected === id
                      ? 'border-emerald-700 bg-emerald-50 text-emerald-950'
                      : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400'
                  }`}
                >
                  <div className="font-semibold">{payload.tool}</div>
                  <div className="text-xs opacity-70">{payload.tier}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-4">
            <div className="text-sm font-semibold text-zinc-900">Gate state</div>
            <div className="mt-3 space-y-3">
              <StateRow icon={FileCheck2} label="Payload valid JSON" ok={!parsed.error} detail={parsed.error || 'Ready for preview'} />
              <StateRow icon={LockKeyhole} label="Payload approved" ok={Boolean(approvedHash)} detail={approvedHash || 'No approval hash yet'} />
              <StateRow icon={ShieldCheck} label="No drift after approval" ok={!drifted} detail={drifted ? `Current ${currentHash}, approved ${approvedHash}` : currentHash || 'No hash'} />
              <StateRow icon={CheckCircle2} label="Executed" ok={executed} detail={executed ? 'Execution allowed' : 'Waiting'} />
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white p-4">
          <label className="text-sm font-semibold text-zinc-900">Preview payload</label>
          <textarea
            value={payloadText}
            onChange={event => {
              setPayloadText(event.target.value)
              setExecuted(false)
            }}
            rows={18}
            className="mt-2 w-full resize-y rounded-md border border-zinc-300 px-3 py-2 font-mono text-sm outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={approve}
              disabled={!currentHash}
              className="inline-flex min-h-10 items-center gap-2 rounded-md bg-zinc-950 px-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-zinc-300"
            >
              <LockKeyhole className="h-4 w-4" aria-hidden="true" />
              Approve exact payload
            </button>
            <button
              type="button"
              onClick={execute}
              disabled={!approved}
              className="inline-flex min-h-10 items-center gap-2 rounded-md bg-emerald-700 px-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-zinc-300"
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Execute
            </button>
            <button
              type="button"
              onClick={reset}
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 text-sm font-medium text-zinc-800"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Reset gate
            </button>
          </div>
        </section>
      </div>

      <section className={`rounded-lg border p-4 ${
        approved && executed
          ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
          : drifted
            ? 'border-red-300 bg-red-50 text-red-950'
            : 'border-zinc-200 bg-zinc-50 text-zinc-800'
      }`}>
        <div className="text-sm font-semibold">
          {drifted ? 'Blocked: approved payload changed' : approved && executed ? 'Executed: exact approved payload' : 'Preview first, then approve'}
        </div>
        <p className="mt-1 text-sm opacity-80">
          The gate binds approval to the payload hash. If an agent changes fields after preview, approval must be repeated.
        </p>
      </section>
    </div>
  )
}

function StateRow({ icon: Icon, label, ok, detail }) {
  return (
    <div className="flex gap-3 rounded-md border border-zinc-200 bg-zinc-50 p-3">
      {ok ? (
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
      ) : (
        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" aria-hidden="true" />
      )}
      <div className="min-w-0">
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
          <Icon className="h-4 w-4" aria-hidden="true" />
          {label}
        </div>
        <div className="mt-1 break-all text-xs text-zinc-600">{detail}</div>
      </div>
    </div>
  )
}
