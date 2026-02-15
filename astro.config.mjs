// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PUBLIC_SITE_URL || 'https://jedmitten.github.io/petermitten.com',
  // base is set via CLI in GitHub Actions, omit for local dev
  output: 'static',
  build: {
    assets: 'assets'
  },
  integrations: [
    {
      name: 'theme-switcher-toolbar',
      hooks: {
        'astro:config:setup': ({ addDevToolbarApp }) => {
          addDevToolbarApp('./src/dev-toolbar/theme-switcher.ts');
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
