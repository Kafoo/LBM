// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  ssr: false,
  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.css',
    'vuetify/lib/styles/main.sass',
    'vuetify/lib/styles/main.css',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxtjs/google-fonts'
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    }
  },
  googleFonts: {
    download: true,
    outputDir: 'assets/googlefonts',
    families: {
      Montserrat: true,
      'Yeseva One': true
    }
  }
})