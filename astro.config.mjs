// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Explicit even though it's the default — this site must stay fully static (no server).
  output: 'static',
});
