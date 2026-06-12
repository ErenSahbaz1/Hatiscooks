# Summer Bar Announcement Section (Design Spec)

Date: 2026-06-12
Status: approved (Approach 1 — home page section, awareness-level content)

## What

One new component `src/components/SummerBar.astro`, rendered on the home page
between `<Benefits />` and `<AboutTeaser />` in `src/pages/index.astro`.

## Content (awareness only — option A)

- Kicker: "This summer"
- Heading: "Find me at [PLACEHOLDER: bar name] this August"
- Date pill: "August 2026" — uses `--color-pop`, the page's single allowed red
  accent (must not sit adjacent to primary pink; place on neutral/white)
- 1–2 sentences: she'll be cooking at a summer bar; details follow on
  Instagram. Warm first-person voice. No invented facts: location, dates,
  menu all `[PLACEHOLDER: …]` or omitted.
- Photo: 1:1 `.img-placeholder` in a `.blob-wrap` until a real photo exists
- CTA: `.btn` → her Instagram (`site.instagram`), label "Follow for updates"

## Layout

Mirrors the AboutTeaser idiom but flipped (text left, media right on desktop;
stacked on mobile, 380px-first). Soft-pink card treatment like the CTA banner
(`--color-soft` background, `--radius-banner`) so it reads as a special
announcement, not another plain section. Scoped styles, CSS variables only,
fade-up comes free from the global `main > section` rule.

## Out of scope

Separate /summer page, menu, hours, maps link, countdown, auto-hiding after
August (remove the import manually in September — note added to TODO.md
"Later" list).

## Verification

`npm run build` passes (7 pages, no new routes); section visible on home
between Benefits and About teaser.
