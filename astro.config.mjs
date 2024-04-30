import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import robotsTxt from "astro-robots-txt"

import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		sitemap(),
		robotsTxt(),
		icon({
			iconDir: "src/icons",
		}),
	],
})
