import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://weiven.ar',
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt(),
    icon({
      iconDir: 'src/assets/icons',
    }),
  ],
})
