// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true,
  // nitro: {
  //   preset: "netlify",
  // },
  devtools: { enabled: true },
  css: ["~~/assets/css/app.css"],
  content: {
    documentDriven: true,
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
});
