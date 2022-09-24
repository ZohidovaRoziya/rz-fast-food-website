<!-- eslint-disable import/no-unresolved -->
<template>
  <v-app>
    <site-header />
      <!-- <router-view /> -->
    <site-main />
  </v-app>
</template>

<script>
import SiteHeader from './views/SiteHeader/SiteHeader.vue';
import SiteMain from './views/SiteMain/SiteMain.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    SiteHeader,
    SiteMain,
  },
};
</script>

<style>
*:focus {
  outline: 2px dotted orangered;
  outline-offset: 2px;
}
</style>
