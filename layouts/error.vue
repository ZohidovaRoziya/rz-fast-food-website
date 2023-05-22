<template>
  <v-app>
    <v-main>
      <v-container class="error-layout">
        <h1>
          {{ error.statusCode }} {{ error.message.message || error.message }}
        </h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
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
  }
}
</script>

<style lang="scss">
.error-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  min-height: 400px;
  h1 {
    width: 100%;
    font-size: 40px;
  }
}
</style>
