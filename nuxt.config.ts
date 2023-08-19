/* eslint-disable @typescript-eslint/naming-convention */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	app: {
		layoutTransition: false,
		pageTransition: false,
	},
	routeRules: { '/': { redirect: '/fair/enuf' }},
})
