import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  sitemap: false,
  site: "https://davidjaimes.com",
  
  integrations: [
    react(),
    tailwind({
      config: {applyBaseStyles: true},
    }),
  ],
  
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      experimentalThemes: {},
      lands: [],
      wrap: false,
      transformers: [],
    },
  },
});