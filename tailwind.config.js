/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1rem",
			},
			colors: {
				bg: "rgb(var(--bg) / <alpha-value>)",
				primary1: "rgb(var(--primary1) / <alpha-value>)",
				primary2: "rgb(var(--primary2) / <alpha-value>)",
				secondary: "rgb(var(--secondary) / <alpha-value>)",
				icon: "rgb(var(--icon) / <alpha-value>)",
				border: "rgb(var(--border) / <alpha-value>)",
				primaryFont: "rgb(var(--primaryFont) / <alpha-value>)",
				secondryFont: "rgb(var(--secondryFont) / <alpha-value>)",
				thirdFont: "rgb(var(--thirdFont) / <alpha-value>)",
				lightFont: "rgb(var(--lightFont) / <alpha-value>)",
				placeholder: "rgb(var(--placeholder) / <alpha-value>)",
				inputBg: "rgb(var(--inputBg) / <alpha-value>)",
				success: "rgb(var(--success) / <alpha-value>)",
				warning: "rgb(var(--warning) / <alpha-value>)",
				error: "rgb(var(--error) / <alpha-value>)",
			},
			backgroundImage: {
				gradient1: "linear-gradient(to bottom, #7fbc1a, #588b0c)",
				gradient2: "linear-gradient(to bottom, #45a05a, #667369)",
			},
			fontSize: {
				"clamp-sm": "clamp(1rem, 2vw, 1.25rem)", // Min: 16px, scales with viewport, Max: 20px
				"clamp-md": "clamp(1.125rem, 2.5vw, 1.5rem)", // Min: 18px, scales with viewport, Max: 24px
				"clamp-lg": "clamp(1.5rem, 3vw, 2rem)", // Min: 24px, scales with viewport, Max: 32px
				"clamp-xl": "clamp(2rem, 4vw, 3rem)", // Min: 32px, scales with viewport, Max: 48px
			},
		},
	},
	plugins: [],
};
