import React, { useMemo, useState } from 'react'
import {
  BookOpen,
  BrainCircuit,
  Check,
  Clipboard,
  Database,
  KeyRound,
  Layers,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Users,
} from 'lucide-react'

const GOALS = [
  {
    id: 'learn',
    label: 'Learn the loop',
    detail: 'One repository, one bounded task, one verification command.',
  },
  {
    id: 'repo',
    label: 'Automate repo work',
    detail: 'A governed runtime adapter for review, edits, and PR evidence.',
  },
  {
    id: 'domain',
    label: 'Build a domain agent',
    detail: 'Declared MCP capabilities, data boundaries, and human decisions.',
  },
]

const RUNTIMES = [
  {
    id: 'cli',
    label: 'Existing CLI agent',
    detail: 'Start here for interactive work. No custom wrapper required.',
  },
  {
    id: 'python',
    label: 'Agent SDK · Python',
    detail: 'Thin `query()` / SDK client adapter behind pwcli contracts.',
  },
  {
    id: 'typescript',
    label: 'Agent SDK · TypeScript',
    detail: 'Thin `query()` / streaming adapter behind the same contracts.',
  },
]

const DATA_BOUNDARIES = [
  {
    id: 'public',
    label: 'Public / synthetic',
    detail: 'Safe default for learning and open-source examples.',
  },
  {
    id: 'internal',
    label: 'Internal, no PII',
    detail: 'Needs source rights, retention, and egress review.',
  },
  {
    id: 'sensitive',
    label: 'Personal / client / regulated',
    detail: 'Requires a separate production threat model and human owners.',
  },
]

const AUTHORITIES = [
  {
    id: 'read',
    label: 'Read only',
    detail: 'Read, Glob, and Grep; mutation tools unavailable or denied.',
  },
  {
    id: 'edit',
    label: 'Edit with approval',
    detail: 'One writer, reviewed diff, exact-payload approval.',
  },
  {
    id: 'consequential',
    label: 'Consequential action',
    detail: 'Publish, deploy, transact, or client-facing output.',
  },
]

const STATE_SYSTEMS = [
  {
    id: 'session',
    label: 'Retained runtime session',
    detail: 'Transcript retention, provider boundary, deletion, and resume behavior.',
  },
  {
    id: 'repo',
    label: 'Reviewed repo knowledge',
    detail: 'AGENTS.md, CLAUDE.md, CURRENT-STATE.md, and source-cited docs.',
  },
  {
    id: 'semantic',
    label: 'Semantic memory',
    detail: 'External provider with promotion, provenance, retention, and deletion.',
  },
]

const REMOTE_OPTIONS = [
  {
    id: 'local',
    label: 'Local only',
    detail: 'Smallest attack surface while the task loop stabilizes.',
  },
  {
    id: 'official',
    label: 'Official Remote Control',
    detail: 'Claude Code subscription feature; local execution, server-held transcript.',
  },
  {
    id: 'tailscale',
    label: 'Tailscale SSH',
    detail: 'Tailnet policy + terminal multiplexer; no public web terminal.',
  },
  {
    id: 'custom',
    label: 'Custom remote service',
    detail: 'Long-lived SDK processes, client auth, isolation, retention, and ops.',
  },
]

const SURFACES = [
  {
    id: 'local',
    label: 'Local proof',
    detail: 'One operator, synthetic/public data, no public service contract.',
  },
  {
    id: 'oss',
    label: 'Public OSS artifact',
    detail: 'Public users and sources; no private implementation parity claim.',
  },
  {
    id: 'app',
    label: 'Authenticated live app',
    detail: 'Named product owner, user population, data controller, and support boundary.',
  },
  {
    id: 'service',
    label: 'Human-service workflow',
    detail: 'Technology assists; an accountable professional owns the conclusion.',
  },
]

const CAPABILITIES = [
  {
    id: 'mcp',
    label: 'MCP tools',
    detail: 'Add one declared server with tool, data, side-effect, and failure policy.',
  },
  {
    id: 'planning',
    label: 'Synthetic planning contracts',
    detail: 'Study direct-identifier key tripwires with synthetic inputs only.',
  },
  {
    id: 'recovery',
    label: 'Protected recovery',
    detail: 'Study shard-core ceremony with synthetic material only.',
  },
  {
    id: 'reviewers',
    label: 'Adversarial reviewers',
    detail: 'Read-only contract, security, and human-workflow reviewers.',
  },
]

const ROLE_FIELDS = [
  {
    id: 'operator',
    label: 'Operator',
    placeholder: 'e.g. repository maintainer',
    detail: 'Chooses scope, runtime, tools, and working directory.',
  },
  {
    id: 'approver',
    label: 'Effect approver',
    placeholder: 'e.g. code owner',
    detail: 'Approves the exact write, remote call, publish, or other effect.',
  },
  {
    id: 'verifier',
    label: 'Independent verifier',
    placeholder: 'e.g. read-only reviewer',
    detail: 'Checks evidence and does not share the writer role for consequential work.',
  },
  {
    id: 'stopOwner',
    label: 'Stop + revoke owner',
    placeholder: 'e.g. security on-call',
    detail: 'Stops processes and revokes access or credentials.',
  },
  {
    id: 'securityOwner',
    label: 'Security + privacy owner',
    placeholder: 'e.g. security lead',
    detail: 'Owns data classes, host controls, credential boundaries, and exceptions.',
  },
  {
    id: 'productOwner',
    label: 'Product owner',
    placeholder: 'e.g. application owner',
    detail: 'Owns the authenticated surface, users, support boundary, and release decision.',
  },
  {
    id: 'dataController',
    label: 'Data controller',
    placeholder: 'e.g. privacy owner',
    detail: 'Owns data purpose, rights, provider terms, retention, and deletion.',
  },
  {
    id: 'domainOwner',
    label: 'Domain professional',
    placeholder: 'e.g. accountable adviser',
    detail: 'Owns regulated interpretation and the final human-service conclusion.',
  },
  {
    id: 'recoveryAuthorizer',
    label: 'Recovery authorizer',
    placeholder: 'e.g. designated executive',
    detail: 'Authorizes the exact recovery purpose, asset, threshold, and destination.',
  },
  {
    id: 'recoveryHolders',
    label: 'Recovery holder set',
    placeholder: 'e.g. three independent custodians',
    detail: 'Names the independent custodian group; do not enter secret material.',
  },
  {
    id: 'recoveryOperator',
    label: 'Recovery operator',
    placeholder: 'e.g. offline ceremony operator',
    detail: 'Runs the approved ceremony on the trusted recovery host.',
  },
  {
    id: 'cleanupOwner',
    label: 'Plaintext cleanup owner',
    placeholder: 'e.g. recovery verifier',
    detail: 'Verifies output handling and removal of temporary plaintext.',
  },
  {
    id: 'incidentOwner',
    label: 'Incident commander',
    placeholder: 'e.g. incident commander',
    detail: 'Coordinates stop, notification, evidence, and follow-up after failure or exposure.',
  },
]

function selectedItem(items, id) {
  return items.find(item => item.id === id) || items[0]
}

function buildArchitecture(state) {
  const goal = selectedItem(GOALS, state.goal)
  const runtime = selectedItem(RUNTIMES, state.runtime)
  const data = selectedItem(DATA_BOUNDARIES, state.data)
  const authority = selectedItem(AUTHORITIES, state.authority)
  const remote = selectedItem(REMOTE_OPTIONS, state.remote)
  const surface = selectedItem(SURFACES, state.surface)
  const enabledStateSystems = STATE_SYSTEMS.filter(item => state.stateSystems.includes(item.id))
  const enabledCapabilities = CAPABILITIES.filter(item => state.capabilities.includes(item.id))
  const requiredRoleIds = new Set(['operator', 'verifier'])

  if (state.authority !== 'read') requiredRoleIds.add('approver')
  if (state.authority === 'consequential') requiredRoleIds.add('stopOwner')
  if (state.goal === 'domain') requiredRoleIds.add('domainOwner')
  if (state.remote !== 'local') {
    requiredRoleIds.add('stopOwner')
    requiredRoleIds.add('securityOwner')
  }
  if (state.data === 'internal') requiredRoleIds.add('dataController')
  if (state.data === 'sensitive') {
    requiredRoleIds.add('securityOwner')
    requiredRoleIds.add('dataController')
  }
  if (state.stateSystems.includes('semantic')) requiredRoleIds.add('dataController')
  if (state.surface === 'app') {
    for (const roleId of ['productOwner', 'dataController', 'securityOwner', 'stopOwner']) requiredRoleIds.add(roleId)
  }
  if (state.surface === 'service') {
    for (const roleId of ['productOwner', 'dataController', 'domainOwner', 'securityOwner', 'stopOwner']) requiredRoleIds.add(roleId)
  }
  if (state.capabilities.includes('recovery')) {
    for (const roleId of ['securityOwner', 'stopOwner', 'recoveryAuthorizer', 'recoveryHolders', 'recoveryOperator', 'cleanupOwner', 'incidentOwner']) {
      requiredRoleIds.add(roleId)
    }
  }

  const requiredRoles = ROLE_FIELDS.filter(role => requiredRoleIds.has(role.id))
  const missingRoles = requiredRoles.filter(role => !state.roles[role.id].trim())
  const roleName = id => state.roles[id].trim() || `UNASSIGNED ${ROLE_FIELDS.find(role => role.id === id).label}`

  const layers = [
    {
      title: 'Learning entryway',
      owner: 'pw-learnai',
      detail: 'Module 16, public-safe labs, and this client-only design artifact.',
      icon: BookOpen,
    },
    {
      title: 'Intent + policy',
      owner: 'pwcli-core',
      detail: 'Intent, data class, side effect, runtime profile, approval, redaction, and receipt.',
      icon: Layers,
    },
    {
      title: 'Data + surface boundary',
      owner: state.surface === 'app'
        ? roleName('productOwner')
        : state.surface === 'service'
          ? roleName('domainOwner')
          : roleName('operator'),
      detail: `${data.label}. ${surface.detail} Data controller: ${roleName('dataController')}.`,
      icon: Database,
    },
    {
      title: 'Governance primitives',
      owner: 'pwos-core reference packages',
      detail: 'Reusable PII-screening, tool-tier, confirmation, audit, and workflow building blocks; these do not configure or enforce themselves.',
      icon: Layers,
    },
    {
      title: 'Host + policy enforcement',
      owner: requiredRoleIds.has('securityOwner') ? roleName('securityOwner') : roleName('operator'),
      detail: 'Configure ingress classification, pre/post-tool gates, filesystem/network/process/credential isolation, egress redaction, and minimized receipts.',
      icon: ShieldCheck,
    },
    {
      title: 'Runtime',
      owner: runtime.label,
      detail: runtime.detail,
      icon: runtime.id === 'cli' ? Terminal : BrainCircuit,
    },
  ]

  if (state.capabilities.includes('mcp')) {
    layers.push({
      title: 'Capability boundary',
      owner: 'Declared MCP server',
      detail: 'Start with one server. Name every tool, data class, side effect, timeout, and source field.',
      icon: Network,
    })
  }

  if (state.capabilities.includes('planning')) {
    layers.push({
      title: 'Planning capability',
      owner: 'nexus-core contract',
      detail: 'Declared planning-tool dispatch. Public learning uses synthetic inputs; the schema tripwire is not de-identification.',
      icon: Network,
    })
    layers.push({
      title: 'Planning reference UI',
      owner: 'pwplan-core',
      detail: 'Renders a 34-tool engine contract and rejects named direct-identifier keys; it is not an agent tool unless an adapter explicitly declares it.',
      icon: Database,
    })
  }

  layers.push({
    title: 'Working-tree state',
    owner: roleName('operator'),
    detail: 'One isolated working directory per writer; session resume never restores or rolls back filesystem state.',
    icon: Terminal,
  })

  for (const stateSystem of enabledStateSystems) {
    const detail = {
      session: 'Declare provider/server boundary, transcript retention, deletion, resume, and export. Do not copy transcripts into receipts.',
      repo: state.authority === 'read'
        ? 'Review existing source-cited guidance only. Repo-knowledge promotion remains deferred until write authority and exact approval are declared.'
        : 'Promote only reviewed, source-cited facts; define the owner who updates or removes stale guidance.',
      semantic: state.authority === 'read'
        ? 'Retrieval only. Defer memory writes until source, approval, contradiction, tenant, retention, export, and deletion controls are declared.'
        : 'Treat writes as effects with source, promotion review, contradiction handling, tenant isolation, retention, export, and deletion.',
    }[stateSystem.id]
    layers.push({
      title: stateSystem.label,
      owner: stateSystem.id === 'repo' ? roleName('operator') : 'Declared state provider',
      detail,
      icon: Database,
    })
  }

  if (state.capabilities.includes('recovery')) {
    layers.push({
      title: 'Recovery material + ceremony',
      owner: roleName('recoveryAuthorizer'),
      detail: `Holders: ${roleName('recoveryHolders')}; operator: ${roleName('recoveryOperator')}; independent verifier: ${roleName('verifier')}; cleanup: ${roleName('cleanupOwner')}; incident command: ${roleName('incidentOwner')}. Synthetic rehearsal only; no autonomous agent access.`,
      icon: LockKeyhole,
    })
  }

  layers.push({
    title: 'Receipt + independent verification',
    owner: roleName('verifier'),
    detail: 'Verify the diff or other exact effect, preserve source/provenance evidence, and minimize sensitive content.',
    icon: Check,
  })

  layers.push({
    title: 'Human decision rights',
    owner: missingRoles.length ? `${missingRoles.length} required role${missingRoles.length === 1 ? '' : 's'} unassigned` : 'Required roles assigned',
    detail: `Operator: ${roleName('operator')}; effect approver: ${roleName('approver')}; verifier: ${roleName('verifier')}; stop/revoke: ${roleName('stopOwner')}; security/privacy: ${roleName('securityOwner')}; product: ${roleName('productOwner')}; data: ${roleName('dataController')}; domain: ${roleName('domainOwner')}; incident: ${roleName('incidentOwner')}.`,
    icon: Users,
  })

  const warnings = []

  if (state.runtime !== 'cli') {
    warnings.push('Use API-key or documented cloud-provider authentication for the third-party SDK app. Do not extract or proxy Claude subscription credentials.')
  }
  if (state.data === 'sensitive') {
    warnings.push('Do not prototype with real sensitive data. Add independent privacy/security ownership, isolation, retention, incident response, and provider review first.')
  } else if (state.data === 'internal') {
    warnings.push('Internal data can still be confidential or indirectly identifying. Review source rights, re-identification risk, retention, and provider terms before egress.')
  }
  if (state.authority === 'consequential') {
    warnings.push('A model may propose a consequential action; a named human or deterministic policy boundary must approve and verify the exact effect.')
  }
  if (state.stateSystems.includes('semantic')) {
    warnings.push(state.authority === 'read'
      ? 'Read-only authority permits semantic retrieval only. Memory promotion and writes remain explicitly deferred.'
      : 'Treat every semantic-memory write as a side effect. Require source, promotion review, contradiction handling, retention, and deletion.')
  }
  if (state.remote === 'official') {
    warnings.push('Official Remote Control is a Claude Code product path, not SDK hosting. Execution stays local, but Anthropic stores the session transcript; Zero Data Retention organizations cannot enable it.')
    if (state.runtime !== 'cli') {
      warnings.push('Select an existing Claude Code CLI workflow for official Remote Control; it is not remote hosting for a third-party Agent SDK wrapper.')
    }
  }
  if (state.remote === 'tailscale') {
    warnings.push('Tailscale SSH only governs port 22 traffic arriving over the tailnet. Verify host firewall or cloud rules close public SSH, then test revocation and recording policy.')
  }
  if (state.remote === 'custom') {
    warnings.push('A websocket is only transport. Use per-tenant workdirs, config directories, egress, transcript controls, disabled filesystem settings/auto-memory, and process isolation; a shared container or process is not a tenant boundary.')
  }
  if (state.capabilities.includes('recovery')) {
    warnings.push('shard-core is prerelease and not independently audited. Keep real protected material out of this learning workflow.')
  }
  if (state.capabilities.includes('planning')) {
    warnings.push('Rejecting direct-identifier key names is a tripwire, not proof of anonymity. Use synthetic inputs on public learning paths.')
  }
  if (['app', 'service'].includes(state.surface)) {
    warnings.push('Record product owner, user population, data controller, decision owner, support/incident path, and evidence that public references are not the private implementation.')
  }
  if (!state.capabilities.includes('reviewers') && state.authority !== 'read') {
    warnings.push('Mutation without an independent review pass raises merge risk. Add read-only contract and security reviewers before publishing.')
  }
  if (missingRoles.length) {
    warnings.push(`Plan incomplete: assign ${missingRoles.map(role => role.label).join(', ')} before execution.`)
  }

  const phases = [
    {
      learn: 'Complete one read-only repository task with one verification command before adding an SDK wrapper.',
      repo: 'Define one bounded repository task, exact mutation boundary, and independent verification evidence.',
      domain: 'Define one synthetic domain workflow, capability contract, excluded decisions, and accountable domain owner.',
    }[state.goal],
    `Record the ${data.label.toLowerCase()} data boundary and ${surface.label.toLowerCase()} consumer boundary before content enters a prompt.`,
    state.runtime === 'cli'
      ? 'Run it through an existing CLI agent before building a wrapper.'
      : 'Validate the pwcli intent, adapter, redaction, approval, and receipt fixtures before calling the SDK.',
    state.authority === 'read'
      ? 'Make Edit, Write, and Bash unavailable or explicitly denied; verify the report against repository evidence.'
      : 'Use one isolated writer, pre-tool hooks, exact-payload approval, and a reviewed diff.',
  ]

  if (state.capabilities.includes('mcp')) {
    phases.push('Connect one MCP server and test allow, deny, timeout, malformed output, and unavailable-server behavior.')
  }
  if (state.capabilities.includes('reviewers')) {
    phases.push('Run read-only contract, security, and human-workflow reviewers; adjudicate every finding.')
  }
  if (state.stateSystems.includes('repo')) {
    phases.push(state.authority === 'read'
      ? 'Review existing repo guidance; defer every commit or durable-fact promotion.'
      : 'Commit only reviewed, source-cited durable facts to repo state files.')
  }
  if (state.stateSystems.includes('semantic')) {
    phases.push(state.authority === 'read'
      ? 'Test retrieval boundaries only; defer semantic-memory promotion and writes.'
      : 'Test memory promotion, provenance, contradiction, tenant isolation, export, retention, and deletion before enabling writes.')
  }
  if (state.remote !== 'local') {
    phases.push(state.remote === 'custom'
      ? 'Threat-model and isolate the hosted session, settings, config, transcript, credentials, and egress before accepting any remote client.'
      : 'Test identity policy, public-port posture, transcript boundary, revocation, reconnect, and session-stop behavior as applicable.')
  }
  if (state.capabilities.includes('recovery')) {
    phases.push('Rehearse recovery with synthetic bytes on a trusted host and document every untested assumption.')
  }
  phases.push('Assign every required human role, walk through stop/revoke and recovery, then verify the exact resulting effect.')

  const deferred = []
  if (!state.capabilities.includes('mcp')) deferred.push('External MCP capability servers')
  if (!state.stateSystems.includes('semantic')) deferred.push('Semantic memory')
  if (state.authority === 'read' && state.stateSystems.includes('repo')) deferred.push('Repo-knowledge commits and promotion')
  if (state.authority === 'read' && state.stateSystems.includes('semantic')) deferred.push('Semantic-memory promotion and writes')
  if (state.remote === 'local') deferred.push('Remote access')
  if (state.remote !== 'custom') deferred.push('Custom daemon or multi-tenant hosting')
  if (state.data !== 'sensitive') deferred.push('Sensitive or regulated data')
  if (state.authority !== 'consequential') deferred.push('Production publish, deploy, transact, or client-facing actions')

  const text = [
    '# Agent system architecture',
    '',
    `Goal: ${goal.label}`,
    `Runtime: ${runtime.label}`,
    `Data boundary: ${data.label}`,
    `Authority: ${authority.label}`,
    `Consumer surface: ${surface.label}`,
    `State systems: ${enabledStateSystems.length ? enabledStateSystems.map(item => item.label).join(', ') : 'No retained runtime or durable knowledge state'}`,
    `Remote path: ${remote.label}`,
    `Capabilities: ${enabledCapabilities.length ? enabledCapabilities.map(item => item.label).join(', ') : 'None beyond the base runtime'}`,
    `Plan status: ${missingRoles.length ? `INCOMPLETE — ${missingRoles.length} required human role(s) unassigned` : 'READY FOR REVIEW — required human roles assigned'}`,
    '',
    '## Responsibility layers',
    ...layers.map((layer, index) => `${index + 1}. ${layer.title} — ${layer.owner}\n   ${layer.detail}`),
    '',
    '## Required controls',
    '- Explicit available and denied tools',
    '- Pre-tool policy hooks',
    '- Human callback for unresolved or sensitive effects',
    '- Filesystem and network isolation outside the model',
    '- Content-minimized execution and provenance receipt',
    '- Separate named approval, verification, stop/revoke, and recovery/incident owners as required',
    '',
    '## Human decision rights',
    ...ROLE_FIELDS.map(role => `- ${role.label}: ${roleName(role.id)}${requiredRoleIds.has(role.id) ? ' (required)' : ''}`),
    '',
    '## Build sequence',
    ...phases.map((phase, index) => `${index + 1}. ${phase}`),
    '',
    '## Warnings',
    ...(warnings.length ? warnings.map(item => `- ${item}`) : ['- No elevated warning beyond the base least-privilege controls.']),
    '',
    '## Explicitly deferred',
    ...(deferred.length ? deferred.map(item => `- ${item}`) : ['- Nothing; justify why every advanced capability is required now.']),
    '',
    'Source path: Module 16 + Protocol Wealth system-of-systems lab.',
  ].join('\n')

  return {
    goal,
    runtime,
    data,
    authority,
    remote,
    surface,
    enabledStateSystems,
    enabledCapabilities,
    requiredRoles,
    missingRoles,
    layers,
    warnings,
    phases,
    deferred,
    text,
  }
}

function ChoiceGroup({ legend, items, value, onChange, columns = 'sm:grid-cols-3' }) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-slate-950">{legend}</legend>
      <div className={`mt-3 grid gap-2 ${columns}`}>
        {items.map(item => (
          <label
            key={item.id}
            className={`cursor-pointer rounded-lg border p-3 transition focus-within:outline-none focus-within:ring-2 focus-within:ring-emerald-600 focus-within:ring-offset-2 ${
              value === item.id
                ? 'border-emerald-700 bg-emerald-50'
                : 'border-slate-200 bg-white hover:border-slate-400'
            }`}
          >
            <input
              type="radio"
              name={legend}
              value={item.id}
              checked={value === item.id}
              onChange={() => onChange(item.id)}
              className="sr-only"
            />
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-950">
              {value === item.id && <Check className="h-4 w-4 text-emerald-700" aria-hidden="true" />}
              {item.label}
            </span>
            <span className="mt-1 block text-xs leading-5 text-slate-600">{item.detail}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function AgentSystemsArchitect() {
  const [state, setState] = useState({
    goal: 'learn',
    runtime: 'cli',
    data: 'public',
    authority: 'read',
    stateSystems: ['session'],
    remote: 'local',
    surface: 'local',
    capabilities: [],
    roles: Object.fromEntries(ROLE_FIELDS.map(role => [role.id, ''])),
  })
  const [copyStatus, setCopyStatus] = useState('')

  const architecture = useMemo(() => buildArchitecture(state), [state])

  function update(field, value) {
    setState(previous => ({ ...previous, [field]: value }))
  }

  function toggleCapability(id) {
    setState(previous => ({
      ...previous,
      capabilities: previous.capabilities.includes(id)
        ? previous.capabilities.filter(item => item !== id)
        : [...previous.capabilities, id],
    }))
  }

  function toggleStateSystem(id) {
    setState(previous => ({
      ...previous,
      stateSystems: previous.stateSystems.includes(id)
        ? previous.stateSystems.filter(item => item !== id)
        : [...previous.stateSystems, id],
    }))
  }

  function updateRole(id, value) {
    setState(previous => ({
      ...previous,
      roles: { ...previous.roles, [id]: value },
    }))
  }

  async function copyArchitecture() {
    try {
      await navigator.clipboard.writeText(architecture.text)
      setCopyStatus('Architecture copied to the clipboard.')
      window.setTimeout(() => setCopyStatus(''), 2400)
    } catch {
      setCopyStatus('Copy failed. Your browser may block clipboard access; select and copy the visible plan instead.')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
            <Layers className="h-4 w-4" aria-hidden="true" />
            Module 16
          </div>
          <h2 className="mt-1 text-2xl font-semibold text-slate-950">Agent Systems Architect</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
            Map the runtime, control plane, capabilities, data, memory, remote path, and accountable humans before adding code.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
          <ShieldCheck className="h-4 w-4 text-emerald-700" aria-hidden="true" />
          Browser-only · nothing is sent
        </div>
      </div>

      <section className="space-y-6 rounded-lg border border-slate-200 bg-white p-4 sm:p-5">
        <ChoiceGroup legend="1. Goal" items={GOALS} value={state.goal} onChange={value => update('goal', value)} />
        <ChoiceGroup legend="2. Runtime" items={RUNTIMES} value={state.runtime} onChange={value => update('runtime', value)} />
        <ChoiceGroup legend="3. Data boundary" items={DATA_BOUNDARIES} value={state.data} onChange={value => update('data', value)} />
        <ChoiceGroup legend="4. Action authority" items={AUTHORITIES} value={state.authority} onChange={value => update('authority', value)} />
        <ChoiceGroup legend="5. Consumer surface" items={SURFACES} value={state.surface} onChange={value => update('surface', value)} columns="sm:grid-cols-2 lg:grid-cols-4" />
        <ChoiceGroup legend="6. Remote path" items={REMOTE_OPTIONS} value={state.remote} onChange={value => update('remote', value)} columns="sm:grid-cols-2 lg:grid-cols-4" />

        <fieldset>
          <legend className="text-sm font-semibold text-slate-950">7. State systems that will persist</legend>
          <p className="mt-1 text-xs leading-5 text-slate-600">
            Working-tree state is always mapped separately. Select every additional state system; these are not substitutes for one another.
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {STATE_SYSTEMS.map(item => {
              const checked = state.stateSystems.includes(item.id)
              return (
                <label
                  key={item.id}
                  className={`cursor-pointer rounded-lg border p-3 transition focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-600 focus-within:ring-offset-2 ${
                    checked
                      ? 'border-sky-700 bg-sky-50'
                      : 'border-slate-200 bg-white hover:border-slate-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleStateSystem(item.id)}
                    className="sr-only"
                  />
                  <span className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    {checked && <Check className="h-4 w-4 text-sky-700" aria-hidden="true" />}
                    {item.label}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-slate-600">{item.detail}</span>
                </label>
              )
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold text-slate-950">8. Optional capabilities</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {CAPABILITIES.map(item => {
              const checked = state.capabilities.includes(item.id)
              return (
                <label
                  key={item.id}
                  className={`cursor-pointer rounded-lg border p-3 transition focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-600 focus-within:ring-offset-2 ${
                    checked
                      ? 'border-sky-700 bg-sky-50'
                      : 'border-slate-200 bg-white hover:border-slate-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleCapability(item.id)}
                    className="sr-only"
                  />
                  <span className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    {checked && <Check className="h-4 w-4 text-sky-700" aria-hidden="true" />}
                    {item.label}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-slate-600">{item.detail}</span>
                </label>
              )
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold text-slate-950">9. Human decision rights</legend>
          <p className="mt-1 text-xs leading-5 text-slate-600">
            Enter a role or accountable team, not client information. Required roles change with the selected authority, surface, remote path, and recovery capability.
          </p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {ROLE_FIELDS.map(role => {
              const required = architecture.requiredRoles.some(item => item.id === role.id)
              return (
                <label key={role.id} className="rounded-lg border border-slate-200 bg-slate-50 p-3 focus-within:ring-2 focus-within:ring-emerald-600 focus-within:ring-offset-2">
                  <span className="text-sm font-semibold text-slate-950">
                    {role.label}{required ? ' · required' : ' · optional'}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-slate-600">{role.detail}</span>
                  <input
                    type="text"
                    value={state.roles[role.id]}
                    onChange={event => updateRole(role.id, event.target.value)}
                    placeholder={role.placeholder}
                    className="mt-2 min-h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none focus:border-emerald-700"
                  />
                </label>
              )
            })}
          </div>
        </fieldset>
      </section>

      <section className={`rounded-lg border p-4 ${architecture.missingRoles.length ? 'border-amber-300 bg-amber-50' : 'border-emerald-300 bg-emerald-50'}`} aria-live="polite">
        <div className="text-sm font-semibold text-slate-950">
          {architecture.missingRoles.length
            ? `Plan incomplete · ${architecture.missingRoles.length} required human role${architecture.missingRoles.length === 1 ? '' : 's'} unassigned`
            : 'Plan ready for review · required human roles assigned'}
        </div>
        <p className="mt-1 text-sm leading-6 text-slate-700">
          {architecture.goal.label} · {architecture.data.label} · {architecture.surface.label} · {architecture.authority.label}
        </p>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <Server className="h-5 w-5 text-sky-700" aria-hidden="true" />
              <h3 className="text-base font-semibold text-slate-950">Responsibility layers</h3>
            </div>
            <ol className="mt-4 space-y-3">
              {architecture.layers.map((layer, index) => {
                const Icon = layer.icon
                return (
                  <li key={`${layer.title}-${layer.owner}`} className="grid grid-cols-[32px_1fr] gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                      {index + 1}
                    </div>
                    <div className="border-l-2 border-slate-200 pl-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <Icon className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                        <span className="text-sm font-semibold text-slate-950">{layer.title}</span>
                        <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-700">{layer.owner}</span>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-slate-600">{layer.detail}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <div className="flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-amber-800" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-amber-950">Boundary warnings</h3>
            </div>
            {architecture.warnings.length ? (
              <ul className="mt-3 space-y-2 text-sm leading-6 text-amber-950">
                {architecture.warnings.map(item => <li key={item}>• {item}</li>)}
              </ul>
            ) : (
              <p className="mt-3 text-sm leading-6 text-amber-950">No elevated warning beyond the base least-privilege controls.</p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-emerald-700" aria-hidden="true" />
              <h3 className="text-base font-semibold text-slate-950">Build sequence</h3>
            </div>
            <ol className="mt-4 space-y-3">
              {architecture.phases.map((phase, index) => (
                <li key={phase} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-800">{index + 1}</span>
                  <span>{phase}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-sm font-semibold text-slate-950">Explicitly deferred</div>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              {architecture.deferred.length
                ? architecture.deferred.map(item => <li key={item}>• {item}</li>)
                : <li>• Nothing. Explain why every advanced capability is required now.</li>}
            </ul>
          </div>

          <button
            type="button"
            onClick={copyArchitecture}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
          >
            <Clipboard className="h-4 w-4" aria-hidden="true" />
            Copy architecture plan
          </button>
          <p className="min-h-6 text-sm leading-6 text-slate-700" aria-live="polite">{copyStatus}</p>
          <details className="rounded-lg border border-slate-200 bg-white p-3">
            <summary className="cursor-pointer text-sm font-semibold text-slate-950">View selectable architecture text</summary>
            <pre className="mt-3 max-h-96 overflow-auto whitespace-pre-wrap text-xs leading-5 text-slate-700">{architecture.text}</pre>
          </details>
        </div>
      </section>
    </div>
  )
}
