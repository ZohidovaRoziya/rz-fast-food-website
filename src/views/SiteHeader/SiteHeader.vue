<template>
    <div>
      <site-header ref="siteHeader" />
    </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import SiteHeader from '@/components/SiteHeader';

export default {
  name: 'SiteHeaderData',
  components: {
    SiteHeader,
  },
  methods: {
    refreshCount() {
      this.$refs.siteHeader.refreshCount();
    },
  },
};
</script>

<style>

</style>
