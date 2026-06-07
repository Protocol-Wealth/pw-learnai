import React, { useMemo, useState } from 'react'
import { AlertTriangle, Braces, CheckCircle2, FileJson2, XCircle } from 'lucide-react'

const CONTRACT_VERSION = '0.1.0'

const FORBIDDEN_KEYS = new Set([
  'name',
  'firstname',
  'lastname',
  'fullname',
  'dob',
  'dateofbirth',
  'ssn',
  'socialsecuritynumber',
  'email',
  'phone',
  'phonenumber',
  'address',
  'streetaddress',
])

const REQUIRED = {
  monte_carlo_decumulation: ['contractVersion', 'currentAge', 'horizonAge', 'accounts', 'assetClasses', 'annualSpend', 'filingStatus', 'returnModel', 'paths'],
  glide_path: ['contractVersion', 'currentAge', 'retirementAge', 'horizonAge', 'startEquityWeight', 'endEquityWeight', 'shape'],
  roth_conversion: ['contractVersion', 'currentTaxableIncome', 'filingStatus', 'conversionAmount', 'growthRate', 'years', 'retirementMarginalRate'],
}

const SAMPLES = {
  monte_carlo_decumulation: {
    contractVersion: '0.1.0',
    currentAge: 45,
    retirementAge: 65,
    horizonAge: 95,
    accounts: [
      {
        type: 'traditional',
        balance: 600000,
        allocation: { us_equity: 0.65, bonds: 0.35 },
      },
    ],
    assetClasses: [
      { id: 'us_equity', label: 'US equity', expectedReturn: 0.07, volatility: 0.16, lambda: 0.8 },
      { id: 'bonds', label: 'Bonds', expectedReturn: 0.035, volatility: 0.05, lambda: 0.2 },
    ],
    annualSpend: 72000,
    spendColaRate: 0.025,
    guaranteedIncome: [],
    filingStatus: 'married_joint',
    returnModel: 'emf_regime',
    paths: 5000,
  },
  glide_path: {
    contractVersion: '0.1.0',
    currentAge: 40,
    retirementAge: 65,
    horizonAge: 95,
    startEquityWeight: 0.8,
    endEquityWeight: 0.4,
    shape: 'linear',
  },
  roth_conversion: {
    contractVersion: '0.1.0',
    currentTaxableIncome: 120000,
    filingStatus: 'married_joint',
    conversionAmount: 50000,
    growthRate: 0.06,
    years: 15,
    retirementMarginalRate: 0.22,
  },
}

function normalizeKey(key) {
  return key.toLowerCase().replace(/[\s_-]/g, '')
}

function findForbiddenKey(value, path = []) {
  if (Array.isArray(value)) {
    for (let index = 0; index < value.length; index += 1) {
      const hit = findForbiddenKey(value[index], [...path, String(index)])
      if (hit) return hit
    }
    return null
  }
  if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      if (FORBIDDEN_KEYS.has(normalizeKey(key))) return [...path, key].join('.')
      const hit = findForbiddenKey(child, [...path, key])
      if (hit) return hit
    }
  }
  return null
}

function parseJson(text) {
  try {
    return { value: JSON.parse(text), error: null }
  } catch (error) {
    return { value: null, error: error.message }
  }
}

function validate(tool, text) {
  const parsed = parseJson(text)
  if (parsed.error) return [{ type: 'error', label: 'Invalid JSON', detail: parsed.error }]

  const issues = []
  const payload = parsed.value
  const forbidden = findForbiddenKey(payload)
  if (forbidden) {
    issues.push({
      type: 'error',
      label: 'Identity-shaped key found',
      detail: `${forbidden} is not allowed in a PII-free planning payload.`,
    })
  }

  if (payload.contractVersion !== CONTRACT_VERSION) {
    issues.push({
      type: 'error',
      label: 'Contract version mismatch',
      detail: `Expected ${CONTRACT_VERSION}; received ${String(payload.contractVersion)}`,
    })
  }

  for (const field of REQUIRED[tool]) {
    if (!(field in payload)) {
      issues.push({
        type: 'warning',
        label: 'Required field missing',
        detail: field,
      })
    }
  }

  if ('dateOfBirth' in payload || 'dob' in payload) {
    issues.push({
      type: 'error',
      label: 'Use age, not date of birth',
      detail: 'Derived age is allowed; direct birth date is identity-bearing.',
    })
  }

  return issues
}

export default function PlanningContractValidator() {
  const [tool, setTool] = useState('monte_carlo_decumulation')
  const [payload, setPayload] = useState(JSON.stringify(SAMPLES.monte_carlo_decumulation, null, 2))
  const issues = useMemo(() => validate(tool, payload), [tool, payload])
  const errors = issues.filter(issue => issue.type === 'error')
  const warnings = issues.filter(issue => issue.type === 'warning')
  const clean = errors.length === 0 && warnings.length === 0

  function loadTool(nextTool) {
    setTool(nextTool)
    setPayload(JSON.stringify(SAMPLES[nextTool], null, 2))
  }

  function addIdentityField() {
    const parsed = parseJson(payload)
    if (!parsed.value || typeof parsed.value !== 'object') return
    setPayload(JSON.stringify({ ...parsed.value, email: 'client@example.com' }, null, 2))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-zinc-950">Planning Contract Validator</h2>
        <p className="mt-1 text-sm text-zinc-600">
          Test the PWPlan Core invariant: planning payloads carry derived variables, not identity.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
        <section className="rounded-lg border border-zinc-200 bg-white p-4">
          <div className="text-sm font-semibold text-zinc-900">Planning tool</div>
          <div className="mt-3 grid gap-2">
            {Object.keys(SAMPLES).map(id => (
              <button
                key={id}
                type="button"
                onClick={() => loadTool(id)}
                className={`rounded-md border px-3 py-2 text-left font-mono text-sm transition ${
                  tool === id
                    ? 'border-emerald-700 bg-emerald-50 text-emerald-950'
                    : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400'
                }`}
              >
                {id}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={addIdentityField}
            className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-md border border-red-300 bg-red-50 px-3 text-sm font-medium text-red-900"
          >
            <AlertTriangle className="h-4 w-4" aria-hidden="true" />
            Add identity field
          </button>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white p-4">
          <label className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
            <FileJson2 className="h-4 w-4 text-emerald-700" aria-hidden="true" />
            Payload JSON
          </label>
          <textarea
            value={payload}
            onChange={event => setPayload(event.target.value)}
            rows={20}
            className="mt-2 w-full resize-y rounded-md border border-zinc-300 px-3 py-2 font-mono text-sm outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </section>
      </div>

      <section className={`rounded-lg border p-4 ${
        errors.length > 0
          ? 'border-red-300 bg-red-50 text-red-950'
          : warnings.length > 0
            ? 'border-amber-300 bg-amber-50 text-amber-950'
            : 'border-emerald-300 bg-emerald-50 text-emerald-950'
      }`}>
        <div className="flex items-center gap-2 text-sm font-semibold">
          {clean ? <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> : <XCircle className="h-4 w-4" aria-hidden="true" />}
          {clean ? 'Payload passes the PII-free contract checks' : 'Payload needs attention'}
        </div>
        <div className="mt-3 grid gap-2">
          {issues.length === 0 && (
            <div className="rounded-md bg-white/70 p-3 text-sm">
              Age, balances, allocations, and filing status are derived planning variables. Direct identity stays out of the compute plane.
            </div>
          )}
          {issues.map((issue, index) => (
            <div key={`${issue.label}-${index}`} className="rounded-md bg-white/70 p-3 text-sm">
              <div className="font-semibold">{issue.label}</div>
              <div className="mt-1 break-all opacity-80">{issue.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
          <Braces className="h-4 w-4 text-emerald-700" aria-hidden="true" />
          Contract lesson
        </div>
        <p className="mt-2 text-sm text-zinc-600">
          This validator rejects identity-shaped keys anywhere in the object tree. It models a tripwire, not a redactor:
          de-identification has to happen upstream before planning payloads are dispatched.
        </p>
      </section>
    </div>
  )
}
