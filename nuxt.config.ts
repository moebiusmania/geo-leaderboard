// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  experimental: {
    // componentIslands: true,
  },

  css: ["normalize.css/normalize.css"],

  modules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Bangers: true,
    },
  },
});
