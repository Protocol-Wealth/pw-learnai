#!/usr/bin/env node
// Generate concatenated markdown bundles for NotebookLM, Claude Projects, custom GPTs.
// Usage: node scripts/bundle-notebooklm.js
// Output: notebooklm/*.md

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const MODULES_DIR = path.join(ROOT, 'modules')
const LABS_DIR = path.join(ROOT, 'labs')
const OUT_DIR = path.join(ROOT, 'notebooklm')

const BUNDLES = {
  'starter-bundle.md': {
    title: 'pw-learnai — Starter Path',
    description: 'A beginner path from prompt literacy to GitHub, coding agents, repo state files, public data sources, and safe first deployments.',
    modules: ['00-getting-started', '10-prompt-engineering', '12-ai-coding-practice', '13-agent-instructions', '11-evaluation-design', '14-working-with-public-data']
  },
  'all-modules.md': {
    title: 'pw-learnai — Core Curriculum',
    description: 'All numbered modules. Use as a single source for an AI notebook covering the core curriculum.',
    modules: '*'
  },
  'strategy-bundle.md': {
    title: 'pw-learnai — Strategy & Judgment',
    description: 'Disruption diagnosis, the AI advantage matrix, value destruction patterns, platform economics, AI judgment under uncertainty.',
    modules: ['01-reading-disruption', '02-ai-advantage-matrix', '03-ai-value-destruction', '05-platform-economics', '09-ai-judgment']
  },
  'organization-bundle.md': {
    title: 'pw-learnai — Organization & Delivery',
    description: 'Organizational design for continuous change, disciplined experimentation, stakeholder buy-in through evidence.',
    modules: ['06-organizational-design', '07-experimentation', '08-stakeholder-evidence']
  },
  'practice-bundle.md': {
    title: 'pw-learnai — Practice (AI tools, prompts, evals, coding)',
    description: 'Getting started, decision artifacts, prompt engineering, evaluation design, AI-assisted coding, agent-instructions design, and public-data source discipline.',
    modules: ['00-getting-started', '04-decision-artifacts', '10-prompt-engineering', '11-evaluation-design', '12-ai-coding-practice', '13-agent-instructions', '14-working-with-public-data']
  },
  'ai-deep-dive.md': {
    title: 'pw-learnai — AI Focus',
    description: 'For someone who only wants the AI-specific modules.',
    modules: ['00-getting-started', '02-ai-advantage-matrix', '03-ai-value-destruction', '09-ai-judgment', '10-prompt-engineering', '11-evaluation-design', '12-ai-coding-practice', '13-agent-instructions']
  },
  'data-bundle.md': {
    title: 'pw-learnai — Working with Public Data',
    description: 'Public dataset discovery, National Archives Catalog API constraints, OAI-PMH metadata harvesting, and source-note discipline before implementation.',
    modules: ['14-working-with-public-data', '00-getting-started', '11-evaluation-design', '12-ai-coding-practice']
  },
  'protocol-wealth-oss-labs.md': {
    title: 'pw-learnai — Protocol Wealth OSS Labs',
    description: 'Applied labs connecting pw-learnai to nexus-core, pwos-core, and pwplan-core.',
    labs: ['protocol-wealth-oss/README.md', 'protocol-wealth-oss/nexus-core-lab.md', 'protocol-wealth-oss/pwos-core-lab.md', 'protocol-wealth-oss/pwplan-core-lab.md']
  }
}

const STARTER_TOC = {
  '00-getting-started': {
    title: 'Getting Started',
    description: 'Set up the operating loop: repository, durable state files, GitHub, tools, and safe handoff discipline.'
  },
  '10-prompt-engineering': {
    title: 'Prompt Engineering',
    description: 'Turn prompts into repeatable work artifacts with clear inputs, outputs, versioning, and evaluation hooks.'
  },
  '12-ai-coding-practice': {
    title: 'AI Coding Practice',
    description: 'Use coding agents deliberately: narrow tasks, explicit permissions, tests, review, and clean closeout.'
  },
  '13-agent-instructions': {
    title: 'Agent Instructions',
    description: 'Write repo instructions an agent can actually follow instead of decorative guidance.'
  },
  '11-evaluation-design': {
    title: 'Evaluation Design',
    description: 'Measure whether AI output is improving instead of just changing.'
  },
  '14-working-with-public-data': {
    title: 'Working with Public Data',
    description: 'Use public sources with provenance, source notes, and production-readiness discipline.'
  }
}

function readModule(slug) {
  const dir = path.join(MODULES_DIR, slug)
  if (!fs.existsSync(dir)) return null
  const files = ['module.md', 'exercises.md', 'references.md']
  const actualFiles = fs.readdirSync(dir)
    .filter(entry => !entry.startsWith('.'))
    .sort()
  const expectedFiles = [...files].sort()

  if (actualFiles.join('\n') !== expectedFiles.join('\n')) {
    throw new Error(
      `Module ${slug} must contain exactly ${expectedFiles.join(', ')}; found ${actualFiles.join(', ') || 'nothing'}.`
    )
  }

  const sections = files.map(f => fs.readFileSync(path.join(dir, f), 'utf8'))
  return sections.join('\n\n---\n\n')
}

function listAllModules() {
  return fs.readdirSync(MODULES_DIR)
    .filter(d => fs.statSync(path.join(MODULES_DIR, d)).isDirectory())
    .sort()
}

function readLab(relPath) {
  const fp = path.join(LABS_DIR, relPath)
  if (!fs.existsSync(fp)) return null
  return fs.readFileSync(fp, 'utf8')
}

function buildBundle(name, spec) {
  const moduleSlugs = spec.modules === '*' ? listAllModules() : spec.modules
  const labFiles = spec.labs || []

  const headerLines = [
    `# ${spec.title}`,
    '',
    `> ${spec.description}`,
    '',
    `Source: https://github.com/Protocol-Wealth/pw-learnai`,
    `License: MIT`,
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    '',
    moduleSlugs ? `## Modules included` : `## Labs included`,
    '',
    ...(moduleSlugs ? moduleSlugs.map(s => `- ${s}`) : labFiles.map(s => `- ${s}`)),
    ''
  ]

  if (name === 'starter-bundle.md' && moduleSlugs) {
    headerLines.push('## Operator table of contents')
    headerLines.push('')
    headerLines.push('Use this map when assigning the starter path, reviewing operator progress, or jumping directly to a module in an AI notebook.')
    headerLines.push('')
    for (const slug of moduleSlugs) {
      const item = STARTER_TOC[slug] ?? { title: slug, description: 'Review this starter-path module.' }
      headerLines.push(`- [${item.title}](#${slug}) - ${item.description}`)
    }
    headerLines.push('')
  }

  headerLines.push('---')
  headerLines.push('')

  const header = headerLines.join('\n')

  const body = moduleSlugs
    ? moduleSlugs
      .map(slug => {
        const content = readModule(slug)
        if (!content) {
          console.warn(`  [skip] ${slug} (not found)`)
          return null
        }
        return `\n\n# ============================================\n# ${slug}\n# ============================================\n\n${content}`
      })
      .filter(Boolean)
      .join('\n')
    : labFiles
      .map(relPath => {
        const content = readLab(relPath)
        if (!content) {
          console.warn(`  [skip] ${relPath} (not found)`)
          return null
        }
        return `\n\n# ============================================\n# ${relPath}\n# ============================================\n\n${content}`
      })
      .filter(Boolean)
      .join('\n')

  return header + body
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

console.log('Building NotebookLM bundles...\n')
for (const [filename, spec] of Object.entries(BUNDLES)) {
  console.log(`  ${filename}`)
  const content = buildBundle(filename, spec)
  fs.writeFileSync(path.join(OUT_DIR, filename), content)
  const sizeKb = (content.length / 1024).toFixed(1)
  console.log(`    → ${sizeKb} KB`)
}

// Build the index README for the notebooklm dir
const indexLines = [
  '# NotebookLM bundles',
  '',
  'Pre-assembled markdown files. Upload any of these as a source in NotebookLM, Claude Projects, or a custom GPT.',
  '',
  '## Available bundles',
  '',
  ...Object.entries(BUNDLES).map(([fn, spec]) =>
    `### \`${fn}\`\n\n${spec.description}\n`
  ),
  '',
  '## Regenerating',
  '',
  '```bash',
  'node scripts/bundle-notebooklm.js',
  '```',
  '',
  'Edit `scripts/bundle-notebooklm.js` to add or modify bundles.'
]
fs.writeFileSync(path.join(OUT_DIR, 'README.md'), indexLines.join('\n'))

console.log('\nDone. Bundles in notebooklm/.')
