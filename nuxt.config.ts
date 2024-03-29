// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  nitro: {
    preset: "netlify-static",
  },
  routeRules: {
    "/**": { isr: 86400 },
  },

  devtools: { enabled: true },
  css: ["~~/assets/css/app.css", "~~/assets/css/tailwind.pcss"],
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
      routes: [
        { type: "home", path: "/" },
        { type: "category", path: "/categorie/:uid" },
        { type: "product", path: "/prodotto/:uid" },
        { type: "static_page", path: "/:uid" },
      ],
    },
  },
});
