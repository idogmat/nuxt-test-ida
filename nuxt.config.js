export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'ida-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/style/main.scss'
  ],
  router: {
    base: '/nuxt-test-ida/',
    middleware: [
      'redirect'
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  '@/plugins/vuelidate'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
    ]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  axios: {
    baseURL: 'https://frontend-test.idaproject.com'
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  // privateRuntimeConfig: {
  //   axios: {
  //     baseURL: process.env.BASE_URL
  //   }
  // },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
