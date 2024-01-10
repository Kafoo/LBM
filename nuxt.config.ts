// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  site: {
    url: 'https://www.lesbonnesmanieres.paris/'
  },

  app: {
    head: {
      title: 'Les Bonnes Manières',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Découvrez l’art de la célébration avec Les Bonnes Manières !'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
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
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  i18n: {
    baseUrl: 'https://lesbonnesmanières.paris',
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR'
      },
      {
        code: 'en',
        iso: 'en-US'
      }
    ],
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
    skipSettingLocaleOnNavigate: true,
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
