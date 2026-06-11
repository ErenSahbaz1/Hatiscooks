# Day 1 — Foundation + Home Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold the Astro site and ship the complete, build-passing home page per the approved spec (`docs/superpowers/specs/2026-06-12-day1-foundation-home-design.md`).

**Architecture:** Static Astro site, plain CSS with design tokens in `src/styles/global.css`, one Astro component per home section composed in `index.astro`, typed product data in `src/data/`. English copy. Only JS is the hamburger toggle.

**Tech Stack:** Astro (minimal template, TS strict), @fontsource (Plus Jakarta Sans, Inter), plain CSS. No integrations, no Tailwind, no frameworks.

**Verification model:** This is a static site with no logic to unit-test — verification is `npm run build` (type-checks via `astro check` is NOT installed; build catches template/TS errors) after each task, plus a visual check at the end. Spec rules that act as "tests": no raw hex in components (only `var(--…)`), no invented prices/ingredients, placeholder images are soft-pink blocks.

**Windows note:** Commands are PowerShell-compatible. Don't chain with `&&` (PowerShell 5.1).

---

### Task 1: Scaffold Astro project + clean demo code

**Files:**
- Create (via scaffold): `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/pages/index.astro`, `public/`
- Modify: `.gitignore` (scaffold provides one), `src/pages/index.astro` (gut demo)

- [ ] **Step 1: Scaffold in place**

The folder already contains `docs/`, `CLAUDE.md`, `START_PROMPT.md`, `.git/` — create-astro can scaffold into a non-empty dir with `--yes`.

Run:
```
npm create astro@latest . -- --template minimal --no-git --install --yes
```
Expected: dependencies installed, `package.json` + `src/pages/index.astro` exist. If the installer balks at the non-empty directory, scaffold into `./_scaffold` instead, move its contents up (excluding `.git`), and delete `_scaffold`.

- [ ] **Step 2: Verify TS strict**

Open `tsconfig.json` — it must contain `"extends": "astro/tsconfigs/strict"`. The minimal template defaults to strict; if not, set it.

- [ ] **Step 3: Replace demo index with a stub**

Overwrite `src/pages/index.astro` with a minimal stub (real page comes in Task 6):

```astro
---
// .astro files: the code fence above the template runs at BUILD time (like getStaticProps), the HTML below is rendered to static markup.
---

<html lang="en">
  <head><title>hatiscooks</title></head>
  <body><h1>hatiscooks — under construction</h1></body>
</html>
```

Delete any other demo files the template added (e.g. `src/assets/`, demo components, `public/favicon.svg` can stay).

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: `✓ Completed` / "1 page(s) built", exit code 0.

- [ ] **Step 5: Commit**

```
git add -A
git commit -m "chore: scaffold minimal Astro project (TS strict)"
```

---

### Task 2: Design foundation — fonts + global.css

**Files:**
- Modify: `package.json` (fontsource deps)
- Create: `src/styles/global.css`

- [ ] **Step 1: Install fonts**

Run:
```
npm install @fontsource/plus-jakarta-sans @fontsource/inter
```
Expected: both added to `dependencies`.

- [ ] **Step 2: Create `src/styles/global.css`**

Complete file (tokens copied verbatim from DESIGN.md — do not alter values):

```css
/* ============ Design tokens (source: docs/DESIGN.md) ============ */
:root {
  /* Brand */
  --color-primary: #fc64bb;
  --color-primary-dark: #d84a9e;
  --color-soft: #ffd8f5;
  --color-pop: #ff3131;
  /* Neutrals */
  --color-bg: #fffaf7;
  --color-surface: #ffffff;
  --color-text: #2d1b25;
  --color-text-muted: #7a6470;
  --color-border: #f3e2ec;

  /* Type */
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Spacing scale: 4/8/12/16/24/32/48/64/96 */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;

  /* Radius */
  --radius-card: 12px;
  --radius-pill: 999px;
  --radius-img: 16px;

  /* Shadow — warm, never harsh black */
  --shadow-soft: 0 8px 24px rgba(252, 100, 187, 0.12);
  --shadow-soft-lg: 0 12px 32px rgba(252, 100, 187, 0.18);
}

/* ============ Reset ============ */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

img,
svg {
  display: block;
  max-width: 100%;
}

button {
  font: inherit;
  cursor: pointer;
}

/* ============ Base typography (mobile-first) ============ */
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  background: var(--color-bg);
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.1;
  text-wrap: balance;
}

h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.15rem; font-weight: 600; }

@media (min-width: 768px) {
  h1 { font-size: 3rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.3rem; }
}

a {
  color: var(--color-primary-dark);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition: none !important;
    animation: none !important;
  }
  html { scroll-behavior: auto; }
}

/* ============ Utilities ============ */
.container {
  max-width: 1100px;
  margin-inline: auto;
  padding-inline: 20px;
}

.section {
  padding-block: var(--space-8);
}

@media (min-width: 768px) {
  .container { padding-inline: 40px; }
  .section { padding-block: var(--space-9); }
}

/* Section header pattern: pink uppercase kicker + big heading */
.kicker {
  display: block;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary-dark);
  margin-bottom: var(--space-2);
}

/* ============ Buttons ============ */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 44px;
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-pill);
  border: 2px solid var(--color-primary);
  background: var(--color-primary);
  color: #ffffff;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: transform 200ms ease-out, box-shadow 200ms ease-out,
    background-color 200ms ease-out;
}

.btn:hover {
  background: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-soft);
  text-decoration: none;
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary-dark);
}

.btn-secondary:hover {
  background: var(--color-soft);
  color: var(--color-text);
}

/* Soft-pink placeholder block standing in for a real photo */
.img-placeholder {
  background: var(--color-soft);
  border-radius: var(--radius-img);
}
```

- [ ] **Step 3: Verify build still passes**

Run: `npm run build`
Expected: success (CSS not imported anywhere yet — this just guards against accidental breakage).

- [ ] **Step 4: Commit**

```
git add -A
git commit -m "feat: design tokens, base typography, utility classes from DESIGN.md"
```

---

### Task 3: Data layer — `site.ts` + `products.ts`

**Files:**
- Create: `src/data/site.ts`
- Create: `src/data/products.ts`

- [ ] **Step 1: Create `src/data/site.ts`**

Single home for brand constants and contact placeholders:

```ts
export const site = {
  name: 'hatiscooks',
  tagline: 'Homemade gingershots & granola, made with love',
  instagram: 'https://www.instagram.com/hatiscooks/',
  /** [PLACEHOLDER: WhatsApp number] — international format, digits only, e.g. '32470123456' */
  whatsapp: '00000000000',
  /** [PLACEHOLDER: email address] */
  email: 'placeholder@example.com',
  region: 'Belgium',
} as const;

/** WhatsApp deep link with prefilled message (PAGES.md §Product detail). */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
```

- [ ] **Step 2: Create `src/data/products.ts`**

Prices/variants verbatim from CONTENT.md; everything unconfirmed is a marked placeholder:

```ts
export interface ProductSize {
  label: string;
  /** EUR */
  price: number;
}

export interface Product {
  id: string;
  /** URL segment for /products/[slug] (built Day 2) */
  slug: string;
  name: string;
  /** One-liner for product cards */
  shortDescription: string;
  description: string;
  sizes: ProductSize[];
  ingredients: string;
  /** CRITICAL: never invent — placeholder until the owner confirms */
  allergens: string;
  storage: string;
  /** null = not yet confirmed with owner */
  vegan: boolean | null;
  /** Paths under /public — empty array → render soft-pink placeholder block */
  images: string[];
}

export const products: Product[] = [
  {
    id: 'gingershots',
    slug: 'gingershots',
    name: 'Gingershots',
    shortDescription: 'Fresh, fiery shots of ginger to kickstart your day.',
    description:
      'Fresh, fiery shots of ginger to kickstart your day. Cold-pressed in small batches.',
    sizes: [
      { label: 'Single bottle', price: 3 },
      { label: 'Work week pack (5)', price: 15 },
      { label: 'Full week pack (7)', price: 21 },
    ],
    ingredients: '[PLACEHOLDER: gingershot ingredients]',
    allergens: '[PLACEHOLDER: gingershot allergens]',
    storage: '[PLACEHOLDER: shelf life & storage]',
    vegan: null,
    images: [],
  },
  {
    id: 'granola',
    slug: 'granola',
    name: 'Chocolate Granola',
    shortDescription: 'Crunchy oven-baked chocolate granola in small batches.',
    description:
      'Crunchy oven-baked granola in small batches. 100% vegan.',
    sizes: [{ label: 'BIG PACK', price: 9 }],
    ingredients: '[PLACEHOLDER: granola ingredients]',
    allergens: '[PLACEHOLDER: granola allergens — nuts? gluten? must be accurate]',
    storage: '[PLACEHOLDER: granola storage]',
    vegan: true,
    images: [],
  },
];

/** Format a price for display: 3 → "€3", 7.5 → "€7,50" (BE convention). */
export function formatPrice(price: number): string {
  return Number.isInteger(price)
    ? `€${price}`
    : `€${price.toFixed(2).replace('.', ',')}`;
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: success.

- [ ] **Step 4: Commit**

```
git add -A
git commit -m "feat: typed site constants and product data with marked placeholders"
```

---

### Task 4: BaseLayout + Header + Footer

**Files:**
- Create: `src/components/Header.astro`
- Create: `src/components/Footer.astro`
- Create: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Create `src/components/Header.astro`**

```astro
---
// Astro component scripts (this fence) run only at build time — zero JS ships unless you add a <script> tag.
import { site } from '../data/site';

const navLinks = [
  { href: '/#products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
---

<header class="site-header">
  <div class="container header-inner">
    <a class="logo" href="/">{site.name}</a>

    <button
      class="menu-toggle"
      type="button"
      aria-expanded="false"
      aria-controls="site-nav"
      aria-label="Open menu"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <nav id="site-nav" class="site-nav">
      <ul>
        {navLinks.map((link) => (
          <li><a href={link.href}>{link.label}</a></li>
        ))}
        <li>
          <a class="btn nav-cta" href="/contact">Order</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<!-- A plain <script> in Astro is bundled and shipped as a tiny module — the only JS on the site (no framework island needed). -->
<script>
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const nav = document.querySelector<HTMLElement>('.site-nav');

  toggle?.addEventListener('click', () => {
    const open = nav?.classList.toggle('is-open') ?? false;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
</script>

<!-- <style> in .astro files is scoped to this component automatically (like CSS Modules). -->
<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 64px;
  }

  .logo {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.3rem;
    color: var(--color-text);
  }

  .logo:hover {
    text-decoration: none;
    color: var(--color-primary-dark);
  }

  .menu-toggle {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: var(--space-3);
    background: none;
    border: none;
  }

  .bar {
    width: 22px;
    height: 2px;
    background: var(--color-text);
    border-radius: 2px;
  }

  .site-nav {
    display: none;
  }

  .site-nav.is-open {
    display: block;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-4) 20px var(--space-5);
  }

  .site-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .site-nav a:not(.btn) {
    font-family: var(--font-heading);
    font-weight: 600;
    color: var(--color-text);
  }

  .site-nav a:not(.btn):hover {
    color: var(--color-primary-dark);
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .menu-toggle {
      display: none;
    }

    .site-nav,
    .site-nav.is-open {
      display: block;
      position: static;
      border: none;
      padding: 0;
      background: none;
    }

    .site-nav ul {
      flex-direction: row;
      align-items: center;
      gap: var(--space-6);
    }
  }
</style>
```

- [ ] **Step 2: Create `src/components/Footer.astro`**

```astro
---
import { site } from '../data/site';

const year = new Date().getFullYear();
---

<footer class="site-footer">
  <div class="container footer-inner">
    <p class="footer-brand">{site.name}</p>
    <ul class="footer-links">
      <li><a href={site.instagram} rel="noopener">Instagram</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <p class="footer-meta">© {year} Hati's Cooks</p>
    <p class="footer-meta">Made with <span aria-hidden="true">♥</span><span class="sr-only">love</span> by Eren Doesn'tcooks</p>
  </div>
</footer>

<style>
  .site-footer {
    background: var(--color-soft);
    margin-top: var(--space-8);
  }

  .footer-inner {
    padding-block: var(--space-7);
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    text-align: center;
  }

  .footer-brand {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.15rem;
  }

  .footer-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: var(--space-5);
  }

  .footer-links a {
    color: var(--color-text);
    font-weight: 500;
  }

  .footer-meta {
    font-size: 0.9rem;
    color: var(--color-text-muted);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
  }
</style>
```

- [ ] **Step 3: Create `src/layouts/BaseLayout.astro`**

```astro
---
// Layouts are just components used as page shells; pages pass content via <slot /> (Astro's `children`).
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '../styles/global.css';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { site } from '../data/site';

interface Props {
  title: string;
  description: string;
  /** Path under /public, used for social previews. File added Day 2. */
  ogImage?: string;
}

const { title, description, ogImage = '/og.jpg' } = Astro.props;
// Astro.url + Astro.site give canonical URLs once `site` is set in astro.config (Day 2 deploy).
const ogImageUrl = new URL(ogImage, Astro.url.origin).href;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImageUrl} />
    <meta property="og:site_name" content={site.name} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="generator" content={Astro.generator} />
  </head>
  <body>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

- [ ] **Step 4: Point the stub index at the layout**

Overwrite `src/pages/index.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="hatiscooks — Homemade gingershots & granola"
  description="Homemade gingershots & granola, made with love. Small-batch, ordered via WhatsApp or Instagram, in Belgium."
>
  <h1 class="container section">hatiscooks — home page coming in Task 6</h1>
</BaseLayout>
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: success, 1 page.

- [ ] **Step 6: Commit**

```
git add -A
git commit -m "feat: BaseLayout with SEO props, responsive Header, Footer"
```

---

### Task 5: Home section components (7 files)

**Files:**
- Create: `src/components/Hero.astro`
- Create: `src/components/ProductCard.astro`
- Create: `src/components/Benefits.astro`
- Create: `src/components/AboutTeaser.astro`
- Create: `src/components/Testimonials.astro`
- Create: `src/components/InstagramStrip.astro`
- Create: `src/components/CtaBanner.astro`

- [ ] **Step 1: Create `src/components/Hero.astro`**

```astro
---
import { site, whatsappLink } from '../data/site';

const orderLink = whatsappLink("Hi! I'd like to place an order.");
---

<section class="hero">
  <div class="container hero-inner">
    <div class="hero-copy">
      <h1>{site.tagline.replace(', made with love', '')}<span class="hero-heart">, made with love</span></h1>
      <p class="hero-sub">
        Small-batch gingershots and crunchy granola, homemade in {site.region}.
        Order via WhatsApp, pick up or get it delivered.
      </p>
      <div class="hero-actions">
        <a class="btn" href="/#products">View products</a>
        <a class="btn btn-secondary" href={orderLink}>Order via WhatsApp</a>
      </div>
    </div>
    <!-- [PLACEHOLDER: hero food photo, 4:5] — soft-pink block until a real photo arrives -->
    <div class="hero-media img-placeholder" role="img" aria-label="Photo of homemade gingershots and granola coming soon"></div>
  </div>
</section>

<style>
  .hero {
    padding-block: var(--space-7) var(--space-8);
  }

  .hero-inner {
    display: grid;
    gap: var(--space-6);
  }

  .hero-heart {
    color: var(--color-primary);
  }

  .hero-sub {
    margin-top: var(--space-4);
    font-size: 1.05rem;
    color: var(--color-text-muted);
    max-width: 32rem;
  }

  .hero-actions {
    margin-top: var(--space-5);
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
  }

  .hero-media {
    aspect-ratio: 4 / 5;
    width: 100%;
    max-width: 420px;
  }

  @media (min-width: 768px) {
    .hero {
      padding-block: var(--space-8) var(--space-9);
    }

    .hero-inner {
      grid-template-columns: 1.2fr 1fr;
      align-items: center;
      gap: var(--space-8);
    }

    .hero-media {
      justify-self: end;
    }
  }
</style>
```

- [ ] **Step 2: Create `src/components/ProductCard.astro`**

```astro
---
import type { Product } from '../data/products';
import { formatPrice } from '../data/products';

interface Props {
  product: Product;
}

const { product } = Astro.props;
const fromPrice = Math.min(...product.sizes.map((s) => s.price));
---

<a class="card" href={`/products/${product.slug}`}>
  {
    product.images.length > 0 ? (
      <img
        class="card-img"
        src={product.images[0]}
        alt={product.name}
        width="400"
        height="500"
        loading="lazy"
      />
    ) : (
      <div class="card-img img-placeholder" aria-hidden="true"></div>
    )
  }
  <div class="card-body">
    <h3>{product.name}</h3>
    <p class="card-desc">{product.shortDescription}</p>
    <p class="card-price">
      from <strong>{formatPrice(fromPrice)}</strong>
      <span class="card-arrow" aria-hidden="true">→</span>
    </p>
  </div>
</a>

<style>
  .card {
    display: block;
    background: var(--color-surface);
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-soft);
    overflow: hidden;
    color: var(--color-text);
    transition: transform 200ms ease-out, box-shadow 200ms ease-out;
  }

  .card:hover {
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: var(--shadow-soft-lg);
  }

  .card-img {
    aspect-ratio: 4 / 5;
    width: 100%;
    object-fit: cover;
    border-radius: 0;
  }

  .card-body {
    padding: var(--space-5);
  }

  .card-desc {
    margin-top: var(--space-2);
    color: var(--color-text-muted);
    font-size: 0.95rem;
  }

  .card-price {
    margin-top: var(--space-4);
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  .card-price strong {
    font-family: var(--font-heading);
    font-size: 1.15rem;
  }

  .card-arrow {
    margin-left: auto;
    color: var(--color-primary-dark);
    transition: transform 200ms ease-out;
  }

  .card:hover .card-arrow {
    transform: translateX(4px);
  }
</style>
```

- [ ] **Step 3: Create `src/components/Benefits.astro`**

Inline SVG icons (stroke uses `currentColor` — no icon library). No health claims.

```astro
---
const benefits = [
  {
    title: 'Small batches',
    text: 'Everything is homemade in small batches, never mass-produced.',
    icon: 'M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-6.5L15 7m-6 6-1.5 1.5M16.5 16.5 15 15M9 9 7.5 7.5',
  },
  {
    title: 'Fresh ingredients',
    text: 'Made fresh to order with ingredients I pick myself.',
    icon: 'M5 21c0-7 4-12 14-16-1 10-6 14-14 16Zm0 0c2-4 5-7 9-9',
  },
  {
    title: 'Local pickup & delivery',
    text: 'Pick up your order or get it delivered nearby in Belgium.',
    icon: 'M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  },
];
---

<section class="section benefits">
  <div class="container">
    <ul class="benefit-list">
      {benefits.map((b) => (
        <li class="benefit">
          <span class="benefit-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d={b.icon}></path>
            </svg>
          </span>
          <h3>{b.title}</h3>
          <p>{b.text}</p>
        </li>
      ))}
    </ul>
  </div>
</section>

<style>
  .benefits {
    background: var(--color-surface);
    border-block: 1px solid var(--color-border);
  }

  .benefit-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: var(--space-6);
  }

  .benefit-icon {
    display: inline-flex;
    padding: var(--space-3);
    border-radius: var(--radius-pill);
    background: var(--color-soft);
    color: var(--color-primary-dark);
    margin-bottom: var(--space-3);
  }

  .benefit p {
    margin-top: var(--space-2);
    color: var(--color-text-muted);
    font-size: 0.95rem;
  }

  @media (min-width: 768px) {
    .benefit-list {
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-7);
    }
  }
</style>
```

- [ ] **Step 4: Create `src/components/AboutTeaser.astro`**

```astro
---
---

<section class="section">
  <div class="container teaser-inner">
    <!-- [PLACEHOLDER: portrait photo of Hati in the kitchen, 3:4] -->
    <div class="teaser-media img-placeholder" role="img" aria-label="Portrait of Hati coming soon"></div>
    <div class="teaser-copy">
      <span class="kicker">About</span>
      <h2>Hi, I'm Hati <span aria-hidden="true">👋</span></h2>
      <p>
        [PLACEHOLDER: 2-line story teaser — how she started cooking and sharing
        on Instagram, written in her voice]
      </p>
      <a class="teaser-link" href="/about">Read my story →</a>
    </div>
  </div>
</section>

<style>
  .teaser-inner {
    display: grid;
    gap: var(--space-6);
  }

  .teaser-media {
    aspect-ratio: 3 / 4;
    width: 100%;
    max-width: 360px;
  }

  .teaser-copy p {
    margin-top: var(--space-4);
    color: var(--color-text-muted);
  }

  .teaser-link {
    display: inline-block;
    margin-top: var(--space-4);
    font-family: var(--font-heading);
    font-weight: 600;
  }

  @media (min-width: 768px) {
    .teaser-inner {
      grid-template-columns: 1fr 1.4fr;
      align-items: center;
      gap: var(--space-8);
    }
  }
</style>
```

- [ ] **Step 5: Create `src/components/Testimonials.astro`**

```astro
---
// [PLACEHOLDER: 3 real customer quotes — collect from DMs with permission]
const testimonials = [
  { quote: '[PLACEHOLDER: customer quote 1]', name: '[PLACEHOLDER: name]' },
  { quote: '[PLACEHOLDER: customer quote 2]', name: '[PLACEHOLDER: name]' },
  { quote: '[PLACEHOLDER: customer quote 3]', name: '[PLACEHOLDER: name]' },
];
---

<section class="section testimonials">
  <div class="container">
    <span class="kicker">Kind words</span>
    <h2>What customers say</h2>
    <ul class="quote-list">
      {testimonials.map((t) => (
        <li class="quote-card">
          <blockquote>
            <p>“{t.quote}”</p>
          </blockquote>
          <p class="quote-name">— {t.name}</p>
        </li>
      ))}
    </ul>
  </div>
</section>

<style>
  .quote-list {
    list-style: none;
    margin: var(--space-6) 0 0;
    padding: 0;
    display: grid;
    gap: var(--space-4);
  }

  .quote-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-5);
  }

  .quote-card blockquote {
    margin: 0;
  }

  .quote-name {
    margin-top: var(--space-3);
    color: var(--color-text-muted);
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    .quote-list {
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-5);
    }
  }
</style>
```

- [ ] **Step 6: Create `src/components/InstagramStrip.astro`**

```astro
---
import { site } from '../data/site';

// [PLACEHOLDER: 4 recent food photos exported from her Instagram, 1:1]
const photoCount = 4;
---

<section class="section">
  <div class="container">
    <span class="kicker">Instagram</span>
    <h2>Fresh from <a class="ig-handle" href={site.instagram} rel="noopener">@{site.name}</a></h2>
    <ul class="ig-grid">
      {Array.from({ length: photoCount }).map(() => (
        <li>
          <a href={site.instagram} rel="noopener" aria-label={`See more on Instagram, @${site.name}`}>
            <div class="ig-photo img-placeholder" aria-hidden="true"></div>
          </a>
        </li>
      ))}
    </ul>
  </div>
</section>

<style>
  .ig-handle {
    color: var(--color-primary-dark);
  }

  .ig-grid {
    list-style: none;
    margin: var(--space-6) 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-3);
  }

  .ig-photo {
    aspect-ratio: 1 / 1;
    transition: transform 200ms ease-out;
  }

  .ig-grid a:hover .ig-photo {
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    .ig-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-4);
    }
  }
</style>
```

- [ ] **Step 7: Create `src/components/CtaBanner.astro`**

```astro
---
import { whatsappLink } from '../data/site';

const orderLink = whatsappLink("Hi! I'd like to place an order.");
---

<section class="section cta-banner">
  <div class="container cta-inner">
    <h2>Craving some?</h2>
    <p>Send me a message and I'll get your order ready.</p>
    <div class="cta-actions">
      <a class="btn" href={orderLink}>Order via WhatsApp</a>
      <a class="btn btn-secondary cta-contact" href="/contact">Contact me</a>
    </div>
  </div>
</section>

<style>
  .cta-banner {
    background: var(--color-soft);
  }

  .cta-inner {
    text-align: center;
  }

  .cta-inner p {
    margin-top: var(--space-3);
    color: var(--color-text);
  }

  .cta-actions {
    margin-top: var(--space-5);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-3);
  }

  /* secondary button sits on soft pink here — use surface for contrast */
  .cta-contact {
    background: var(--color-surface);
  }
</style>
```

- [ ] **Step 8: Verify build**

Run: `npm run build`
Expected: success (components compile even though not yet imported by a page — Astro type-checks on build only for used files, so a clean build here mostly guards syntax; full check happens in Task 6).

- [ ] **Step 9: Commit**

```
git add -A
git commit -m "feat: home page section components"
```

---

### Task 6: Compose home page

**Files:**
- Modify: `src/pages/index.astro` (full rewrite)

- [ ] **Step 1: Rewrite `src/pages/index.astro`**

Section order per PAGES.md §Home:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/Hero.astro';
import ProductCard from '../components/ProductCard.astro';
import Benefits from '../components/Benefits.astro';
import AboutTeaser from '../components/AboutTeaser.astro';
import Testimonials from '../components/Testimonials.astro';
import InstagramStrip from '../components/InstagramStrip.astro';
import CtaBanner from '../components/CtaBanner.astro';
import { products } from '../data/products';
---

<BaseLayout
  title="hatiscooks — Homemade gingershots & granola"
  description="Homemade gingershots & granola, made with love in Belgium. Small batches, ordered via WhatsApp or Instagram DM."
>
  <Hero />

  <section class="section" id="products">
    <div class="container">
      <span class="kicker">Products</span>
      <h2>Made fresh, in small batches</h2>
      <div class="product-grid">
        {products.map((product) => <ProductCard product={product} />)}
      </div>
    </div>
  </section>

  <Benefits />
  <AboutTeaser />
  <Testimonials />
  <InstagramStrip />
  <CtaBanner />
</BaseLayout>

<style>
  .product-grid {
    margin-top: var(--space-6);
    display: grid;
    gap: var(--space-5);
  }

  @media (min-width: 600px) {
    .product-grid {
      /* two cards today; auto-fit lets the grid absorb future products */
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: var(--space-6);
    }
  }
</style>
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: success, 1 page built, no TS errors.

- [ ] **Step 3: Visual check**

Run: `npm run preview` (serves the production build, default `http://localhost:4321`).
Check at 380px and 1280px viewport widths:
- Header collapses to hamburger below 768px; toggle opens/closes nav
- No horizontal scroll at 380px
- Buttons ≥44px tall; focus outlines visible when tabbing
- Red `--color-pop` appears nowhere (we never used it — fine, "max once" not "must once")

- [ ] **Step 4: Commit**

```
git add -A
git commit -m "feat: full home page per PAGES.md section order"
```

---

### Task 7: Tick TODO.md + wrap up

**Files:**
- Modify: `docs/TODO.md` (Day 1 checkboxes)

- [ ] **Step 1: Mark completed Day 1 items**

In `docs/TODO.md`, change to `[x]` the seven Day 1 lines (scaffold, global.css, fonts, BaseLayout, products.ts, home page hero/products/benefits, home page about-teaser/testimonials/instagram/CTA, mobile check) — all of them once Task 6's visual check passed.

- [ ] **Step 2: Final build sanity**

Run: `npm run build`
Expected: success.

- [ ] **Step 3: Commit**

```
git add -A
git commit -m "chore: tick Day 1 items in TODO.md"
```

- [ ] **Step 4: Report**

Tell the user: dev server command (`npm run dev`, URL `http://localhost:4321`), all `[PLACEHOLDER]` content still needed (WhatsApp number, email, hero/product/portrait/Instagram photos, about teaser text, 3 testimonials, ingredients/allergens/storage for both products, gingershots vegan status), and what was intentionally skipped (Day 2 pages, scroll animation, favicon/OG image, i18n).
