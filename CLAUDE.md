# Hati's Cooks — Website

Portfolio/business website for a small home-food business (Instagram: @hatiscooks).
Owner sells **gingershots** and **granola**, and shares cooking content.
This is a birthday gift — quality bar is high, but scope must stay small.

## Tech stack
- **Astro** (latest) + TypeScript
- Plain CSS with CSS variables with tailwind
- Static output (`output: 'static'`), no backend
- Contact: form posts via mailto / WhatsApp deep link for now (no server)
- Interactivity: prefer zero-JS Astro components; only add a small island
  (vanilla `<script>` or one Astro island) when truly needed (e.g. mobile menu)
- Deploy target: Vercel

> NOTE: The developer is new to Astro (knows React/React Native and NEXTJS well).
> When using Astro-specific concepts (islands, content collections, slots,
> `client:*` directives), add a one-line comment explaining the concept the
> first time it appears. Keep explanations short.

## Commands
- `npm create astro@latest` — scaffold (minimal/empty template, TypeScript strict)
- `npm run dev` — local dev server
- `npm run build && npm run preview` — production build + check

## Project rules (IMPORTANT — read before coding)
1. **Read `docs/DESIGN.md` before writing any UI.** All colors, fonts, spacing
   come from there. Never hardcode hex values in components — use the CSS
   variables defined in `src/styles/global.css`.
2. **Read `docs/CONTENT.md` for all text and product data.** Never invent
   prices, ingredients, or health claims. If content is missing, use
   `[PLACEHOLDER: description]` and list all placeholders at the end of your
   response so they can be filled in later.
3. **Read `docs/PAGES.md`** for page structure and what each section contains.
4. Mobile-first. Most visitors come from the Instagram bio link on phones.
   Design for 380px first, then scale up with min-width media queries.
5. Structure: pages in `src/pages/`, reusable components in `src/components/`,
   one shared layout in `src/layouts/BaseLayout.astro`, global styles in
   `src/styles/global.css`.
6. Product data lives in `src/data/products.ts` (typed) so product cards and
   detail pages render from one source, and a future webshop can reuse it.
7. Keep it simple: no state management, no animation libraries — CSS
   transitions only.
8. Accessibility basics: semantic HTML, alt text on every image, visible focus
   states, labels on form fields, sufficient color contrast.
9. SEO basics on every page via BaseLayout props: unique `<title>`, meta
   description, Open Graph tags (links get shared on Instagram, the preview
   must look good).
10. Do not add features beyond what is asked. Check `docs/TODO.md` for current
    priority and update it when tasks are completed.

## What NOT to do
- No generic "AI website" look (no purple gradients, no emoji headers)
- No e-commerce/payment integration yet (data model should allow it later)
- No CMS, no database, no React unless a component genuinely needs it
- Don't refactor working code unless asked
- Don't re-read all docs every message if nothing changed — they are stable
