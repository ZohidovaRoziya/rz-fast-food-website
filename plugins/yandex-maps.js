import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: process.env.VUE_APP_YANDEX_API,
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
} // настройки плагина

Vue.use(YmapPlugin, settings)
