# TODO.md — Build plan (birthday in 2 days!)

Claude: work top-to-bottom, check off (`[x]`) what's done, don't jump ahead.

## Day 1 — foundation + home page (MUST be done)
- [x] Scaffold Astro project (minimal template, TS strict), clean out demo code
- [x] `src/styles/global.css`: CSS variables from DESIGN.md, reset, typography,
      utility classes (.container, .section, .btn, .btn-secondary)
- [x] Fonts: Plus Jakarta Sans + Inter via @fontsource
- [x] `BaseLayout.astro`: head/SEO props, Header (responsive nav), Footer
- [x] `src/data/products.ts`: typed Product interface + gingershot & granola
      entries (placeholder values clearly marked)
- [x] Home page: Hero, Products grid, Benefits strip (placeholder images OK —
      use solid soft-pink blocks with correct aspect ratio, NOT stock photos)
- [x] Home page: About teaser, Testimonials, Instagram strip, CTA banner
- [ ] Mobile check at 380px + desktop at 1280px — static checks done (no
      horizontal-overflow risks, single-column grids below 600px); needs one
      human eyeball pass in the browser

## Day 2 — remaining pages + polish (birthday-ready)
- [ ] Product detail pages via getStaticPaths
- [ ] Contact page with order steps + WhatsApp/mailto form
- [ ] About page (placeholder story OK)
- [ ] FAQ section (details/summary accordion)
- [ ] Replace placeholders with real photos & texts (from CONTENT.md)
- [ ] OG image + favicon (pink "H" or chevron-style mark) — favicon done, og.jpg still needs a real photo
- [ ] Lighthouse pass: performance, a11y, SEO ≥ 90
- [ ] Deploy to Vercel/Netlify + share preview link 🎁
      (must set `site:` in astro.config.mjs — og:image currently resolves to
      localhost until this is done)

## Later (after her input)
- [ ] Real testimonials with permission
- [ ] NL/EN toggle (if needed)
- [ ] Recipes/blog section (Astro content collections — good learning project)
- [ ] Custom domain (hatiscooks.be / .com)
- [ ] Order form v2 or lightweight webshop (Snipcart/Stripe Payment Links)
- [ ] Re-check all ingredient/allergen info with her before "launch"
