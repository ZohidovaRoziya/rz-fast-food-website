<template>
  <v-app>
    <div class="site-wrapper">
      <site-header ref="productCount" />
      <router-view @updateData="showData" />
    </div>
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

.site-wrapper {
  overflow: scroll;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  background-image: url("./assets/images/fon-bg.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-attachment: fixed;
  background-size: cover;
}
</style>
