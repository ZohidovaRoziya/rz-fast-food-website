<template>
  <v-app>
    <site-header ref="productCount"/>
      <router-view @updateData="showData"/>

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
  methods: {
    showData() {
      this.$refs.productCount.refreshCount();
    },
  },
};
</script>

<style>
*:focus {
  outline: 2px dotted orangered;
  outline-offset: 2px;
}
</style>
