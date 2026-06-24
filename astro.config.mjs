// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import speedInsights from '@vercel/speed-insights/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://xolventa.vercel.app',
  integrations: [react(), speedInsights()],

  vite: {
    plugins: [tailwindcss()]
  }
});