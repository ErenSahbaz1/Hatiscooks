# TODO.md — Build plan (birthday in 2 days!)

Claude: work top-to-bottom, check off (`[x]`) what's done, don't jump ahead.

## Day 1 — foundation + home page (MUST be done)
- [ ] Scaffold Astro project (minimal template, TS strict), clean out demo code
- [ ] `src/styles/global.css`: CSS variables from DESIGN.md, reset, typography,
      utility classes (.container, .section, .btn, .btn-secondary)
- [ ] Fonts: Plus Jakarta Sans + Inter via @fontsource
- [ ] `BaseLayout.astro`: head/SEO props, Header (responsive nav), Footer
- [ ] `src/data/products.ts`: typed Product interface + gingershot & granola
      entries (placeholder values clearly marked)
- [ ] Home page: Hero, Products grid, Benefits strip (placeholder images OK —
      use solid soft-pink blocks with correct aspect ratio, NOT stock photos)
- [ ] Home page: About teaser, Testimonials, Instagram strip, CTA banner
- [ ] Mobile check at 380px + desktop at 1280px

## Day 2 — remaining pages + polish (birthday-ready)
- [ ] Product detail pages via getStaticPaths
- [ ] Contact page with order steps + WhatsApp/mailto form
- [ ] About page (placeholder story OK)
- [ ] FAQ section (details/summary accordion)
- [ ] Replace placeholders with real photos & texts (from CONTENT.md)
- [ ] OG image + favicon (pink "H" or chevron-style mark)
- [ ] Lighthouse pass: performance, a11y, SEO ≥ 90
- [ ] Deploy to Vercel/Netlify + share preview link 🎁

## Later (after her input)
- [ ] Real testimonials with permission
- [ ] NL/EN toggle (if needed)
- [ ] Recipes/blog section (Astro content collections — good learning project)
- [ ] Custom domain (hatiscooks.be / .com)
- [ ] Order form v2 or lightweight webshop (Snipcart/Stripe Payment Links)
- [ ] Re-check all ingredient/allergen info with her before "launch"
