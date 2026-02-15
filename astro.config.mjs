// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PUBLIC_SITE_URL || 'https://jedmitten.github.io/petermitten.com',
  base: import.meta.env.BASE_URL || (import.meta.env.PROD ? '/petermitten.com' : undefined),
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
