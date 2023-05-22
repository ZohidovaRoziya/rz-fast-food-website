
import { baseUrl } from './config'

export default {
  head: {
    title: 'Bozor.com',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
      { rel: 'alternate', media: 'only screen and (max-width: 810px)', href: 'https://m.test.bozor.com/' }
    ]
  },

  loading: {
    color: '#014472',
    height: '1px'
  },

  css: ['~/assets/styles/styles.scss'],

  target: 'server',

  plugins: [
    '~/plugins/axios',
    '~/plugins/vue-mask',
    '~/plugins/axios-requests',
    { src: '~/plugins/yandex-maps', mode: 'client' },
    { src: '~/plugins/vue-carusel', mode: 'client' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module'
  ],

  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        defaultLocale: 'uz',
        baseUrl: 'https://test.bozor.com',
        seo: true,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root'
        },
        locales: [
          {
            code: 'uz',
            file: 'uz.js',
            iso: 'uz-UZ',
            name: 'Uzbek'
          },
          {
            code: 'ru',
            file: 'ru.js',
            iso: 'ru-RU',
            name: 'Russian'
          }
        ],
        lazy: true,
        langDir: 'locales/'
      }
    ],
    'cookie-universal-nuxt',
    '@nuxtjs/moment',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://test.bozor.com/',
    gzip: true,
    path: '/sitemap.xml',
    routes: [],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  ssr: true,

  vuetify: {
    customVariables: ['~/assets/styles/variables.scss']
  },

  axios: {
    baseURL: baseUrl,
    retry: { retries: 2 }
  }
}
