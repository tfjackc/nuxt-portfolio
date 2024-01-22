// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/image'
  ],
  css: ['~/assets/css/main.css',],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    classSuffix: ''
  },
})
