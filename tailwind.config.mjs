/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "media",
	theme: {
		fontFamily: {
			sans: ["Archivo", "sans"],
		},
		extend: {},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".kush-center": {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				},
			}
			addUtilities(newUtilities)
		},
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		require("tailwindcss-animated"),
	],
}
