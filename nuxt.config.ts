import vueCssModule from "vite-plugin-vue-css-module"

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2025-07-11",
  devtools: { enabled: true },

  // @sort
  modules: [
    "nuxt-svgo",
  ],

  ssr: false,

  vite: {
    plugins: [
      vueCssModule({ attrName: "mclass", pugClassLiterals: true }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/styles/mixins' as *;",
          api: "modern",
        },
      },
    },
  },

  css: [
    "~/styles/index.scss",
  ],

  svgo: {
    explicitImportsOnly: true,
  },
})
