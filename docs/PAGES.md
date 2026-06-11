# PAGES.md — Sitemap & section breakdown

## Routes
| Route | Page | Priority |
|---|---|---|
| `/` | Home | P0 |
| `/products/[slug]` | Product detail (gingershot, granola flavors) | P0 |
| `/about` | About / her story | P1 |
| `/contact` | Contact & order info | P0 |
| `/faq` | FAQ | P2 (can start as section on contact page) |

Shared: `BaseLayout.astro` (head/SEO, header nav, footer), sticky-ish simple
header with logo left, links right, hamburger on mobile.

## Home (`/`)
1. **Hero** — brand name, tagline, food photo, primary CTA "Bekijk producten /
   View products" + secondary "Order via WhatsApp"
2. **Products** — two featured cards: Gingershots & Granola → link to detail
   pages. (Grid scales if more products come later.)
3. **Why / benefits strip** — 3 short points with small icons (e.g. homemade
   in small batches, fresh ingredients, local pickup/delivery). No invented
   health claims.
4. **About teaser** — photo + 2 lines of her story + link to /about
5. **Testimonials** — 2–3 quotes (placeholder until collected)
6. **Instagram strip** — 4–6 recent photos linking to her profile (static
   images, no embed script — faster and no cookie banner needed)
7. **CTA banner** — soft pink section: "Zin in? / Craving some?" + WhatsApp +
   contact buttons

## Product detail (`/products/[slug]`)
Rendered from `src/data/products.ts` via `getStaticPaths`.
1. Gallery (1 main + thumbnails) + name, short description, price, sizes
2. Order CTA → WhatsApp deep link with prefilled message
   (`https://wa.me/<nr>?text=Hi! Ik wil graag <product> bestellen`)
3. Ingredients + allergens (clearly visible — required for food)
4. Storage / shelf life
5. "You might also like" → other product card

## About (`/about`)
1. Big portrait photo + story (from CONTENT.md)
2. Photo collage of her cooking
3. CTA to products

## Contact (`/contact`)
1. Intro line + order process (3 steps with icons)
2. Contact options as big tappable cards: WhatsApp, Instagram DM, Email
3. Simple form (name, contact, product dropdown, message) → on submit, opens
   a prefilled mailto: OR prefilled WhatsApp message (no backend). Label it
   honestly: "This opens your mail/WhatsApp app."
4. Pickup/delivery info

## FAQ (`/faq` or section)
Accordion (native `<details>/<summary>`, styled — zero JS).

## SEO per page
- Home: "Hatiscooks — Homemade gingershots & granola in [CITY]"
- Product: "[Product] — Hatiscooks"
-
 OG image: best food photo, 1200×630, in `public/og.jpg`
