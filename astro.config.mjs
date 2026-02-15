// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jedmitten.github.io/petermitten.com',
  // No base in config - passed via CLI in GitHub Actions
  output: 'static',
  build: {
    assets: 'assets'
  },
  integrations: [
    {
      name: 'theme-switcher-toolbar',
      hooks: {
        'astro:config:setup': ({ addDevToolbarApp }) => {
          addDevToolbarApp({
              entrypoint: './src/dev-toolbar/theme-switcher.ts',
              id: 'theme-switcher',
              name: 'Theme Switcher'
          });
        }
      }
    }
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  }
});
