import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  ssr: false,

  nitro: {
    preset: 'static'
  },

  app: {
    baseURL: '/basic-activering-test/'
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui'],

  css: ['~/assets/css/main.css']
});
