// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: "netlify",
  },

  devtools: { enabled: true },
  css: ["~~/assets/css/app.pcss"],

  // content: {
  //   documentDriven: true,
  // },

  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxtjs/prismic"],

  prismic: {
    endpoint: "petitepatisserie",
  },
});
