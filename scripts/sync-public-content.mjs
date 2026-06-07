import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const PUBLIC_DIR = path.join(ROOT, 'public')

const CONTENT_DIRS = ['modules', 'labs', 'notebooklm']

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

console.log(`Synced ${CONTENT_DIRS.join(', ')} into public/.`)
