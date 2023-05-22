import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin((app) => {
  const { $axios, $cookies, error } = app
  $axios.onRequest((config) => {
    const token = $cookies.get('access')
    const currentLang = $cookies.get('i18n_redirected') || 'uz'
    config.headers.common['Accept-Language'] = currentLang || 'uz'

    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`
    }
  })

  $axios.onError((err) => {
    if (String(err).split(' ').includes('401')) {
      return { error: 401 }
    } else {
      error({ message: err })
    }
  })
})
