// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  app: {
    baseURL: "/please-subscribe/",
  },

  modules: ["@vueuse/nuxt", '@nuxt/eslint'],

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
