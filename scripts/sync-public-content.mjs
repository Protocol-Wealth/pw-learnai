import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const PUBLIC_DIR = path.join(ROOT, 'public')

const CONTENT_DIRS = ['modules', 'labs', 'notebooklm', 'prompts']
const ROOT_MARKDOWN_FILES = [
  'README.md',
  'CHANGELOG.md',
  'AGENTS.md',
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

// Prune before copying, so public/ root markdown is exactly ROOT_MARKDOWN_FILES.
//
// copyDirectory() above is already self-pruning (fs.rmSync of the target before
// cpSync), but the root-markdown loop below is copy-if-present and never removed
// anything. That made removing a name from ROOT_MARKDOWN_FILES ineffective in
// any checkout that had already synced it: the loop stops VISITING the file at
// exactly the moment you want it deleted, so the stale copy survives in public/
// and Vite reships it into dist/. Deleting it by hand fixes one worktree and
// propagates nowhere.
//
// Driving the prune from what is on disk rather than from a retired-names list
// keeps the invariant true by construction — a future removal from the array
// prunes itself, with no second list to forget to update.
for (const entry of fs.readdirSync(PUBLIC_DIR)) {
  if (!entry.endsWith('.md')) continue
  if (ROOT_MARKDOWN_FILES.includes(entry)) continue
  const stale = path.join(PUBLIC_DIR, entry)
  if (fs.statSync(stale).isFile()) {
    fs.rmSync(stale, { force: true })
    console.log(`Pruned stale root markdown from public/: ${entry}`)
  }
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
