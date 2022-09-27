<template>
  <v-app>
    <site-header />
      <router-view />

  </v-app>
</template>

<script>
import SiteHeader from './views/SiteHeader/SiteHeader.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    SiteHeader,
  },
};
</script>

<style>
*:focus {
  outline: 2px dotted orangered;
  outline-offset: 2px;
}
</style>
