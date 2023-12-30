// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '',
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": "",
    pageTransition: { name: 'page', mode: 'out-in' }
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
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
    skipSettingLocaleOnNavigate: true,
    //strategy: "prefix",
    vueI18n: './i18n.config.ts'
  },
  
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
