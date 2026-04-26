#!/bin/bash
# Quick start helper. Run after unzipping.
# Initializes git, optionally creates the GitHub repo, and pushes.

set -e

echo "pw-learnai quick start"
echo "======================"
echo ""

# Initialize git if needed
if [ ! -d .git ]; then
  echo "→ Initializing git repo..."
  git init -b main
  git add .
  git commit -m "Initial commit: pw-learnai library"
else
  echo "→ Git repo already initialized."
fi

echo ""
echo "Next steps:"
echo ""
echo "1. Create the GitHub repo (one of these):"
echo ""
echo "   # If you have GitHub CLI installed:"
echo "   gh repo create Protocol-Wealth/pw-learnai --public --source=. --push --description 'Open-source library on applied AI strategy and AI-assisted coding'"
echo ""
echo "   # Or manually:"
echo "   #   1. Create empty repo at https://github.com/organizations/Protocol-Wealth/repositories/new"
echo "   #   2. git remote add origin https://github.com/Protocol-Wealth/pw-learnai.git"
echo "   #   3. git push -u origin main"
echo ""
echo "2. (Optional) Install local dev environment to run interactive components:"
echo "   pnpm install   # or: npm install"
echo "   pnpm dev       # or: npm run dev"
echo ""
echo "3. Regenerate NotebookLM bundles (already generated, but if you edit modules):"
echo "   node scripts/bundle-notebooklm.js"
echo ""
