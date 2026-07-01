@AGENTS.md

## Claude Code

- Read `AGENTS.md`, `CURRENT-STATE.md`, `README.md`, and `ROADMAP.md` before audit, content, or frontend changes.
- State your plan at the top of the run before broad rewrites or frontend changes, then execute; in --dangerously-skip-permissions runs, only stop for destructive actions.
- Use pnpm scripts only. `pnpm build` is the gate; run `pnpm bundle` after module or lab markdown changes.
- Check GitHub issues before starting roadmap work; update or close the relevant issue when the work ships.
- Keep `CLAUDE.md` concise; put shared project guidance in `AGENTS.md`.
- When updating AI-tool guidance, prefer current OpenAI and Anthropic docs over memory.
