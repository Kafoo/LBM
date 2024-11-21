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

  runtimeConfig: {
    public: {
      mode: process.env.MODE ?? 'production',
    }
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
    '@nuxtjs/sitemap',
    'nuxt-mdi'
  ],

  i18n: {
    baseUrl: 'https://lesbonnesmanières.paris',
    locales: [
      {
        code: 'fr',
        language: 'fr-FR',
        file: 'assets/locales/fr.json'
      },
      {
        code: 'en',
        language: 'en-US',
        file: 'assets/locales/en.json'
      }
    ],
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
    skipSettingLocaleOnNavigate: true,
    vueI18n: './i18n.config.ts'
  },

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern',
        },
      },
    },
    define: {
      'process.env.DEBUG': false,
    }
  },

  googleFonts: {
    preload: true,
    download: true,
    outputDir: 'assets/googlefonts',
    families: {
      Montserrat: true,
      'Yeseva One': true
    }
  },

  compatibilityDate: '2024-11-14'
})