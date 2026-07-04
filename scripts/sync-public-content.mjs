import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const PUBLIC_DIR = path.join(ROOT, 'public')

const CONTENT_DIRS = ['modules', 'labs', 'notebooklm', 'prompts']
const ROOT_MARKDOWN_FILES = [
  'README.md',
  'CHANGELOG.md',
  'CURRENT-STATE.md',
  'NEXT-PROMPT.md',
  'ROADMAP.md',
  'AGENTS.md',
  'CLAUDE.md',
  'CONTRIBUTING.md',
]
const ROOT_STATIC_FILES = ['first-page.html']

function copyDirectory(name) {
  const source = path.join(ROOT, name)
  const target = path.join(PUBLIC_DIR, name)

  if (!fs.existsSync(source)) {
    throw new Error(`Missing source directory: ${name}`)
  }

  fs.rmSync(target, { recursive: true, force: true })
  fs.cpSync(source, target, {
    recursive: true,
    filter: item => item.endsWith('.md') || fs.statSync(item).isDirectory(),
  })
}

fs.mkdirSync(PUBLIC_DIR, { recursive: true })

for (const directory of CONTENT_DIRS) {
  copyDirectory(directory)
}

for (const filename of ROOT_MARKDOWN_FILES) {
  const source = path.join(ROOT, filename)
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, path.join(PUBLIC_DIR, filename))
  }
}

for (const filename of ROOT_STATIC_FILES) {
  const source = path.join(ROOT, filename)
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, path.join(PUBLIC_DIR, filename))
  }
}

console.log(`Synced ${CONTENT_DIRS.join(', ')}, root markdown docs, and root static files into public/.`)
