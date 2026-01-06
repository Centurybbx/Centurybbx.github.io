// Astro configuration for GitHub Pages deployment
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  // React integration for interactive game embeds
  integrations: [react()],

  // GitHub Pages uses a subpath, configure if needed
  // base: '/', // Uncomment if deploying to subdirectory

  // Output as static site
  output: 'static',

  // Build configuration
  build: {
    // Assets go to /_astro/ for caching
    assets: '_astro'
  }
});
