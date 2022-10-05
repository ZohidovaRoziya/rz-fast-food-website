<template>
  <div>
    <site-menu @updateData="$emit('updateData', $event)" />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import SiteMenu from '@/components/SiteMenu';

export default {
  name: 'SiteMenuData',
  components: {
    SiteMenu,
  },
};
</script>

<style>

</style>
