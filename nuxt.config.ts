// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ["@/assets/css/main.css", "@/assets/css/global.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Outfit: [300, 400, 500, 600, 700],
          download: true,
          inject: true,
        },
      },
    ],
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
      global: true,
    },
  ],
});
