import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Pedromdsn Template",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Pedromdsn" },
        { hid: "description", name: "description", content: "Nuxt Props Test" },
      ],
      link: [{ rel: "icon", type: "image/icon", sizes: "16x16", href: "/favicon.ico" }],
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss"],
  googleFonts: {
    families: {
      Roboto: true,
      Lato: [100, 300],
    },
  },
})
