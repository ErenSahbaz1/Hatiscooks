# START_PROMPT.md — paste this into Claude Code as your first message

---

Read CLAUDE.md, then docs/DESIGN.md, docs/PAGES.md, docs/CONTENT.md and
docs/TODO.md before doing anything.

Set up the Astro project in this folder and complete all of "Day 1" in
docs/TODO.md, in order. Concretely:

1. Scaffold a minimal Astro + TypeScript (strict) project and remove demo code.
2. Build the design foundation exactly per DESIGN.md (global.css with the CSS
   variables, fonts, base typography, .container/.section/.btn classes).
3. Build BaseLayout.astro with SEO props, a responsive header and footer.
4. Create src/data/products.ts with a typed Product interface and the two
   products from CONTENT.md, marking unknown values as placeholders.
5. Build the full home page per PAGES.md. For missing photos use soft-pink
   placeholder blocks with the correct aspect ratio — never stock images.

Working style:
- I'm new to Astro (strong React/React Native background) — add a one-line
  comment the first time you use an Astro-specific concept.
- After each major step, run `npm run build` to verify, fix errors, then
  continue. Show me the dev server URL at the end.
- Tick off completed items in docs/TODO.md as you go.
- End your response with: (a) list of all [PLACEHOLDER] content still needed,
  (b) anything you intentionally skipped.
- Don't add anything beyond Day 1 scope.

---

## Tips for the rest of the build (for you, not for Claude)

- Day 2: just say "Read docs/TODO.md and do Day 2" — the docs carry the context.
- Token savers: start fresh sessions per task instead of one giant chat
  (CLAUDE.md reloads automatically); use /compact when a session gets long;
  use /clear between unrelated tasks; let it edit files instead of printing
  whole files in chat.
- Drop her real photos into `public/images/` yourself and then ask Claude to
  wire them in — cheaper than describing them.
- When something looks off, screenshot it and paste the image into Claude Code
  with "make the hero look like this but fix X" — visual feedback works great.
