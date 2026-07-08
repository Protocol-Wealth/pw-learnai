#!/usr/bin/env node
// Dead-link guard for the interactive TOOLS registry in src/main.jsx.
//
// Every tool card renders a "Read module" link from its `href`. A relative
// href that points at a file which does not exist ships a live 404 to the
// reader (this is exactly how PR #32 registered `modules/18-...`, a path that
// never existed). This check parses the TOOLS array and fails if any relative
// href has no corresponding file on disk. External (http/https) hrefs are
// skipped by design. No dependencies — plain Node.

import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const mainPath = join(repoRoot, 'src', 'main.jsx')
const source = await readFile(mainPath, 'utf8')

// Slice out the TOOLS array by tracking bracket depth from `const TOOLS = [`.
const startToken = 'const TOOLS = ['
const startIdx = source.indexOf(startToken)
if (startIdx === -1) {
  console.error('check-tool-links: could not find `const TOOLS = [` in src/main.jsx')
  process.exit(2)
}

let depth = 0
let endIdx = -1
for (let i = startIdx + startToken.length - 1; i < source.length; i += 1) {
  const ch = source[i]
  if (ch === '[') depth += 1
  else if (ch === ']') {
    depth -= 1
    if (depth === 0) {
      endIdx = i
      break
    }
  }
}
if (endIdx === -1) {
  console.error('check-tool-links: could not find the end of the TOOLS array')
  process.exit(2)
}

const toolsBlock = source.slice(startIdx, endIdx + 1)
const hrefRe = /href:\s*['"]([^'"]+)['"]/g

const results = []
let match
while ((match = hrefRe.exec(toolsBlock)) !== null) {
  const href = match[1]
  if (/^(https?:)?\/\//i.test(href) || href.startsWith('#') || href.startsWith('mailto:')) {
    results.push({ href, kind: 'external', ok: true })
    continue
  }
  const ok = existsSync(join(repoRoot, href))
  results.push({ href, kind: 'relative', ok })
}

const broken = results.filter(r => r.kind === 'relative' && !r.ok)
const relCount = results.filter(r => r.kind === 'relative').length

console.log(`check-tool-links: ${relCount} relative TOOLS href(s) checked, ${broken.length} broken.`)
for (const r of results.filter(r => r.kind === 'relative')) {
  console.log(`  ${r.ok ? 'ok  ' : 'MISS'} ${r.href}`)
}

if (broken.length > 0) {
  console.error('\ncheck-tool-links: broken TOOLS href(s) found:')
  for (const r of broken) console.error(`  - ${r.href}`)
  process.exit(1)
}

console.log('check-tool-links: all TOOLS hrefs resolve.')
