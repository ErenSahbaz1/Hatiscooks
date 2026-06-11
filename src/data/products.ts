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
