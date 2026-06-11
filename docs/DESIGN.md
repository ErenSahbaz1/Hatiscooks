# DESIGN.md — Hati's Cooks design system

Single source of truth for the visual identity. Components must use the CSS
variables, never raw hex values.

## Brand personality
Warm, homemade, playful, feminine, trustworthy. Think "cute farmers market
stand", not "tech startup". Food photography is the hero — design should frame
it, not compete with it.

## Colors
```css
:root {
  /* Brand */
  --color-primary: #fc64bb;        /* bubblegum pink — buttons, links, accents */
  --color-primary-dark: #d84a9e;   /* hover/active state of primary */
  --color-soft: #ffd8f5;           /* soft pink — section backgrounds, cards, tags */
  --color-pop: #ff3131;            /* bright red — use SPARINGLY: badges, sale tags,
                                      one highlight per screen max. Never large areas. */
  /* Neutrals */
  --color-bg: #fffaf7;             /* warm off-white page background */
  --color-surface: #ffffff;        /* cards on top of bg */
  --color-text: #2d1b25;           /* dark plum-brown body text (not pure black) */
  --color-text-muted: #7a6470;     /* secondary text */
  --color-border: #f3e2ec;         /* subtle borders/dividers */
}
```

Rules:
- Red (`--color-pop`) and primary pink must not sit directly on top of each
  other — they clash. Separate them with neutrals or soft pink.
- Text on `--color-primary` is white. Text on `--color-soft` is `--color-text`.
- Check contrast: muted text only for non-essential info, min 16px.

## Typography
- Headings: **Plus Jakarta Sans**, weights 600/700 (Google Fonts, self-host
  via Fontsource or download — avoid render-blocking)
- Body: **Inter**, weight 400/500
- Scale (mobile / desktop):
  - h1: 2rem / 3rem, line-height 1.1
  - h2: 1.5rem / 2rem
  - h3: 1.15rem / 1.3rem
  - body: 1rem, line-height 1.6
- Optional accent: a single script/handwritten font for tiny touches
  (e.g. "homemade") — max one place per page, skip if it looks cheesy.

## Spacing & layout
- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px
- Max content width: 1100px, side padding 20px mobile / 40px desktop
- Section vertical padding: 64px mobile / 96px desktop
- Border radius: 12px cards, 999px buttons/pills, 16px images

## Components
- **Buttons**: pill shaped, primary = filled pink, secondary = outlined.
  Subtle lift on hover (translateY(-1px) + soft shadow). Min touch target 44px.
- **Product cards**: white surface, image top (4:5 ratio), name, one-line
  description, price, arrow/CTA. Soft shadow, slightly stronger on hover.
- **Section headers**: small uppercase pink kicker text + big heading.
- **Shadows**: soft and warm, e.g. `0 8px 24px rgba(252, 100, 187, 0.12)` —
  never harsh black shadows.

## Imagery
- Real food photos only (from her Instagram). No stock photos, no AI images.
- Consistent treatment: rounded corners, occasional soft-pink blob/shape
  behind images for playfulness.
- Always provide width/height (or aspect-ratio) to avoid layout shift.
- Use Astro's `<Image />` component for optimization where possible.

## Motion
- CSS transitions only: 150–250ms ease-out on hover/focus.
- Optional: gentle fade-up on scroll for sections (IntersectionObserver,
  one tiny script, respect `prefers-reduced-motion`).

## Don'ts
- No purple/blue gradients, no glassmorphism, no dark theme
- No more than 2 font families (+1 optional accent)
- No emoji as design elements (in content text is fine if it fits her voice)
