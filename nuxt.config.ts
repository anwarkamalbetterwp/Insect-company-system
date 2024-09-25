// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	app: {
		head: {
			charset: "utf-8",
			title: "new",
			viewport: "width=device-width, initial-scale=1",
			link: [{ rel: "icon", type: "image/x-icon", href: "/tawzef-fav.png" }],
			script: [],
		},
	},
	css: ["~/assets/css/main.css"],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	imports: {
		dirs: ["composables", "composables/api", "stores"],
	},
	i18n: {
		vueI18n: "./locale/i18n.config.ts",
		defaultLocale: "en",
		strategy: "prefix",
		detectBrowserLanguage: {
			useCookie: true,
		},
		locales: [
			{
				code: "en",
				iso: "en",
				name: "English",
				file: "./locale/en.json",
				direction: "ltr",
			},
			{
				code: "ar",
				iso: "ar",
				name: "Arabic",
				file: "./locale/ar.json",
				direction: "rtl",
			},
		],
	},
	image: {
		provider: "ipx",
		quality: 80,
	},
	pinia: {
		storesDirs: ["./stores/**"],
	},
	primevue: {
		options: {
			unstyled: true,
		},
	},
	modules: ["@pinia/nuxt", "@nuxtjs/i18n", "@nuxt/image", "@primevue/nuxt-module", "@nuxt/icon"],
});
