<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      title: this.$t('onlineStore') + ' | Bozor.com',
      meta: [
        { hide: 'utf-8-defualt', charset: 'UTF-8' },
        { hide: 'http-equiv-defualt', 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { hide: 'viewport-defualt', name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        ...i18nHead.meta
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
        ...i18nHead.link
      ]
    }
  },
}
</script>
