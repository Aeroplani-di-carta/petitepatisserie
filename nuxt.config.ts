// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: "netlify",
  },

  devtools: { enabled: true },
  css: ["~~/assets/css/app.css"],
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/prismic"],

  prismic: {
    endpoint: "petitepatisserie",
    toolbar: false,
    preview: false,
    clientConfig: {
      routes: [{ type: "home", path: "/" }],
    },
  },
});
