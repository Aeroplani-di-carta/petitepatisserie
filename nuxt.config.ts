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
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  colorMode: {
    preference: "light",
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/prismic",
    "nuxt-icon",
    "@vueuse/motion/nuxt",
    "@nuxt/devtools",
  ],

  prismic: {
    endpoint: "petitepatisserie",
    toolbar: false,
    preview: false,
    clientConfig: {
      routes: [{ type: "home", path: "/" }],
    },
  },
});
