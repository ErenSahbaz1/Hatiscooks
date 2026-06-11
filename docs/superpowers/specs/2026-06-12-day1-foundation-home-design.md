# Day 1 — Foundation + Home Page (Design Spec)

Date: 2026-06-12
Status: approved direction (Approach 1: one component per home section)

## Decisions made during brainstorming

1. **Plain CSS only** — no Tailwind. The "with tailwind" line in CLAUDE.md is
   superseded by this decision; DESIGN.md/TODO.md plain-CSS setup is the source
   of truth.
2. **English copy** for now. Dutch comes later via i18n. Keep copy inside
   components for Day 1; extraction to a strings file happens when i18n lands.
3. **Approach 1** — one Astro component per home section, composed in
   `index.astro`.

## Stack & config

- Astro latest, minimal template, TypeScript strict, `output: 'static'`
  (default), no integrations.
- Scaffolded into the existing folder, preserving `docs/`, `CLAUDE.md`,
  `START_PROMPT.md`.
- Fonts via `@fontsource` packages (Plus Jakarta Sans 600/700, Inter 400/500),
  imported in BaseLayout — self-hosted, not render-blocking.
- Deploy target: Vercel (Day 2).

## File structure

```
src/
  styles/global.css        ← CSS variables (DESIGN.md), reset, base typography,
                             .container / .section / .btn / .btn-secondary
  layouts/BaseLayout.astro ← SEO props (title, description, og), Header, Footer
  components/
    Header.astro           ← logo left, nav right, hamburger via tiny vanilla <script>
    Footer.astro           ← © 2026, Instagram + contact links, "Made with ♥" line
    Hero.astro             ← brand name, tagline, primary CTA "View products",
                             secondary "Order via WhatsApp", placeholder photo block
    ProductCard.astro      ← Product prop; 4:5 image area, name, one-liner,
                             price, arrow CTA; white surface, soft shadow
    Benefits.astro         ← 3 points: homemade in small batches, fresh
                             ingredients, local pickup/delivery (no health claims)
    AboutTeaser.astro      ← placeholder portrait + 2-line teaser + link /about
    Testimonials.astro     ← 2–3 placeholder quotes, clearly marked
    InstagramStrip.astro   ← 4 placeholder squares, each linking to the profile
    CtaBanner.astro        ← soft-pink band, "Craving some?" + WhatsApp/contact buttons
  data/
    site.ts                ← brand name, tagline, Instagram URL, WhatsApp number
                             (placeholder), email (placeholder) — single home
                             for contact placeholders
    products.ts            ← Product interface + gingershots & granola entries
  pages/index.astro        ← composes the sections in PAGES.md order
```

## Product data model

```ts
interface ProductSize { label: string; price: number }  // EUR
interface Product {
  id: string
  slug: string                // /products/[slug] (Day 2)
  name: string
  shortDescription: string    // card one-liner
  description: string
  sizes: ProductSize[]
  ingredients: string         // [PLACEHOLDER] until confirmed
  allergens: string           // [PLACEHOLDER] — CRITICAL, never invent
  storage: string             // [PLACEHOLDER]
  vegan: boolean | null       // null = unconfirmed
  images: string[]            // empty for now → pink placeholder blocks
}
```

Known values (CONTENT.md): gingershots — single €3, work week pack (5) €15,
full week pack (7) €21; granola — chocolate, BIG PACK €9, vegan: true.
Everything else `[PLACEHOLDER: …]`.

## Design system (from DESIGN.md — binding)

- Colors as CSS variables, never raw hex in components.
- Type scale h1 2rem/3rem, h2 1.5rem/2rem, h3 1.15rem/1.3rem, body 1rem/1.6.
- 1100px max width; 20px/40px side padding; 64px/96px section padding.
- Radius: 12px cards, 999px buttons, 16px images. Warm pink-tinted shadows.
- Pill buttons, 44px min touch target, hover lift translateY(-1px).
- Red `--color-pop` at most once per screen, never adjacent to primary pink.

## Behavior & constraints

- Mobile-first at 380px, scale up with min-width queries; check 1280px.
- Only JS: the hamburger toggle `<script>` in Header (vanilla, no island).
- Placeholder images: solid `--color-soft` blocks with correct aspect-ratio —
  never stock photos.
- Links to Day 2 routes (`/products/[slug]`, `/about`, `/contact`) are real
  hrefs that 404 until those pages exist. Accepted.
- Accessibility: semantic landmarks, alt text, visible focus, contrast per
  DESIGN.md rules.
- SEO via BaseLayout props: unique title, meta description, OG tags.

## Out of scope (Day 1)

Product detail/contact/about/FAQ pages, fade-up scroll animation (optional in
DESIGN.md), favicon/OG image files, i18n, deployment.

## Verification

`npm run build` passes after each major step; visual check at 380px and 1280px
via `npm run dev`.
