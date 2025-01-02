// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/ui',
  ],

  ssr: false,
  devtools: { enabled: true },

  app: {
    baseURL: '/obs-overlay-utils/',
    head: {
      title: 'OBS Overlay ユーティリティ',
    },
  },

  compatibilityDate: '2024-12-25',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
