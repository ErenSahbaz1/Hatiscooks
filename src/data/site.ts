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
