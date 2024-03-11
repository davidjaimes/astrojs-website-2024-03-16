import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  sitemap: false,
  site: "https://davidjaimes.com",
  integrations: [
    expressiveCode({
      themes: ['github-dark-dimmed'],
      styleOverrides: {
        borderColor: '#0d1117',
        borderWidth: '3px',
        frames: {
          shadowColor: 'transparent',

          terminalTitlebarBackground: '#161b22',
          terminalTitlebarBorderBottomColor: '#0d1117',

          //editorActiveTabBackground: '#161b22',
          editorTabBarBackground: '#161b22',
          editorTabBarBorderBottomColor: '#0d1117',
          editorActiveTabIndicatorTopColor: 'transparent',
          editorActiveTabIndicatorBottomColor: '#0d1117',
          terminalTitlebarDotsForeground: '#0d1117',
          terminalTitlebarDotsOpacity: '1.0',

          inlineButtonBorder: 'transparent',

        }
      }
    }),
    react(),
    tailwind({
      config: {
        applyBaseStyles: true
      }
    }),
  ],
});