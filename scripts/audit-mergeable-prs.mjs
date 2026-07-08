#!/usr/bin/env node
// Audit open PRs across the Protocol Wealth OSS learning surface.
// Default is dry-run. Pass --merge to merge clean PRs.

import { execFileSync } from 'node:child_process'

const REPOS = [
  'Protocol-Wealth/pw-learnai',
  'Protocol-Wealth/nexus-core',
  'Protocol-Wealth/pwos-core',
  'Protocol-Wealth/pwplan-core',
]

const shouldMerge = process.argv.includes('--merge')

function gh(args) {
  return execFileSync('gh', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
}

function checksPass(pr) {
  const checks = pr.statusCheckRollup || []
  // An empty rollup must NOT vacuously pass. Previously `checks.length === 0`
  // returned true, but the only workflows (bundle.yml, deploy-pages.yml) run
  // on push to main and never on pull_request, so statusCheckRollup was ALWAYS
  // empty for open PRs. That made every PR vacuously "pass" and pnpm build
  // never ran pre-merge. Require at least one completed CI check to exist.
  if (checks.length === 0) return false
  return checks.every(check => {
    const conclusion = check.conclusion || check.state
    return ['SUCCESS', 'SKIPPED', 'NEUTRAL'].includes(String(conclusion).toUpperCase())
  })
}

function isMergeable(pr) {
  if (pr.isDraft) return false
  // Require an explicit approving review, not merely the absence of a
  // CHANGES_REQUESTED. reviewDecision is null/'' when no review has happened,
  // so "not CHANGES_REQUESTED" previously let unreviewed PRs through.
  if (pr.reviewDecision !== 'APPROVED') return false
  if (!['CLEAN', 'HAS_HOOKS'].includes(pr.mergeStateStatus)) return false
  return checksPass(pr)
}

function listPrs(repo) {
  const json = gh([
    'pr',
    'list',
    '--repo',
    repo,
    '--state',
    'open',
    '--json',
    'number,title,url,isDraft,mergeStateStatus,reviewDecision,statusCheckRollup,headRefOid',
    '--limit',
    '100',
  ])
  return JSON.parse(json)
}

let mergeCount = 0
let blockedCount = 0

console.log(`PR hygiene audit (${shouldMerge ? 'merge mode' : 'dry run'})`)
console.log('')

for (const repo of REPOS) {
  const prs = listPrs(repo)
  console.log(`${repo}: ${prs.length} open PR${prs.length === 1 ? '' : 's'}`)

  for (const pr of prs) {
    const mergeable = isMergeable(pr)
    const state = mergeable ? 'MERGEABLE' : 'BLOCKED'
    console.log(`  #${pr.number} ${state} ${pr.title}`)
    console.log(`    ${pr.url}`)
    console.log(`    mergeState=${pr.mergeStateStatus} draft=${pr.isDraft} review=${pr.reviewDecision || 'none'} checks=${checksPass(pr) ? 'pass' : 'not-pass'}`)

    if (!mergeable) {
      blockedCount += 1
      continue
    }

    if (shouldMerge) {
      gh([
        'pr',
        'merge',
        String(pr.number),
        '--repo',
        repo,
        '--squash',
        '--delete-branch',
        '--match-head-commit',
        pr.headRefOid,
      ])
      mergeCount += 1
      console.log('    merged')
    }
  }
}

console.log('')
console.log(`Summary: merged=${mergeCount} blocked=${blockedCount}`)
if (!shouldMerge) {
  console.log('Run with --merge to merge PRs classified as MERGEABLE.')
}
