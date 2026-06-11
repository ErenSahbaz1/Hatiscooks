// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: swap for the custom domain when one is bought
  site: 'https://hatiscooks.vercel.app',
  // Explicit even though it's the default — this site must stay fully static (no server).
  output: 'static',
});
