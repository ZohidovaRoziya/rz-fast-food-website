<!-- eslint-disable vue/no-unused-components -->
<template>
  <v-app>
    <site-header />
      <!-- <router-view /> -->
    <!-- <site-main /> -->
    <card-aboute />
  </v-app>
</template>

<script>
import SiteHeader from './views/SiteHeader/SiteHeader.vue';
// import SiteMain from './views/SiteMain/SiteMain.vue';
// eslint-disable-next-line import/no-unresolved
import CardAboute from './views/AboutPage/AboutPage.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    SiteHeader,
    // eslint-disable-next-line vue/no-unused-components
    CardAboute,
  },
};
</script>

<style>
*:focus {
  outline: 2px dotted orangered;
  outline-offset: 2px;
}
</style>
