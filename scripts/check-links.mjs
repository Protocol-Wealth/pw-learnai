#!/usr/bin/env node
// Comprehensive internal dead-link guard. Two passes, no dependencies:
//
//   1. src/main.jsx — every relative repo path referenced anywhere in the file
//      (TOOLS hrefs, level paths, topic tracks, module map, ecosystem cards),
//      identified by the content-dir prefixes modules/ labs/ notebooklm/
//      prompts/. This is the class of bug that shipped in PR #32
//      (modules/18-..., a path that never existed).
//   2. Markdown internal links — every [text](target) / image target in the
//      module, lab, and root docs that points at a repo-relative file, resolved
//      against the file's own directory.
//
// External (http/https/mailto), in-page anchors (#...), and protocol-relative
// links are skipped by design. Exits non-zero if any internal link is broken.

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve, relative } from 'node:path'

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const CONTENT_PREFIXES = ['modules/', 'labs/', 'notebooklm/', 'prompts/']
const broken = []
let checked = 0

function isExternal(target) {
  return /^(https?:)?\/\//i.test(target) || target.startsWith('#') || target.startsWith('mailto:') || target.startsWith('data:')
}

// --- Pass 1: src/main.jsx relative paths -----------------------------------
function checkMainJsx() {
  const file = join(repoRoot, 'src', 'main.jsx')
  const source = readFileSync(file, 'utf8')
  const strRe = /['"`]([^'"`\n]+)['"`]/g
  const seen = new Set()
  let m
  while ((m = strRe.exec(source)) !== null) {
    const value = m[1]
    if (!CONTENT_PREFIXES.some(p => value.startsWith(p))) continue
    if (seen.has(value)) continue
    seen.add(value)
    checked += 1
    if (!existsSync(join(repoRoot, value))) {
      broken.push({ where: 'src/main.jsx', target: value })
    }
  }
}

// --- Pass 2: markdown internal links ---------------------------------------
function walkMarkdown(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walkMarkdown(full))
    else if (entry.name.endsWith('.md')) out.push(full)
  }
  return out
}

function checkMarkdown() {
  const roots = ['modules', 'labs'].map(d => join(repoRoot, d)).filter(existsSync)
  const files = roots.flatMap(walkMarkdown)
  // Root-level docs (README, ROADMAP, etc.) but not generated notebooklm bundles.
  for (const entry of readdirSync(repoRoot, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith('.md')) files.push(join(repoRoot, entry.name))
  }

  const linkRe = /!?\[[^\]]*\]\(([^)]+)\)/g
  for (const file of files) {
    const text = readFileSync(file, 'utf8')
    let m
    while ((m = linkRe.exec(text)) !== null) {
      let target = m[1].trim()
      // Drop any title: [x](path "title")
      target = target.split(/\s+/)[0]
      // Strip in-file anchor
      const hashIdx = target.indexOf('#')
      if (hashIdx === 0) continue
      if (hashIdx > 0) target = target.slice(0, hashIdx)
      if (!target || isExternal(target)) continue
      checked += 1
      const resolved = resolve(dirname(file), target)
      if (!existsSync(resolved)) {
        broken.push({ where: relative(repoRoot, file), target: m[1].trim() })
      }
    }
  }
}

checkMainJsx()
checkMarkdown()

console.log(`check-links: ${checked} internal link(s) checked, ${broken.length} broken.`)
if (broken.length > 0) {
  console.error('\ncheck-links: broken internal link(s):')
  for (const b of broken) console.error(`  - ${b.where} -> ${b.target}`)
  process.exit(1)
}
console.log('check-links: all internal links resolve.')
