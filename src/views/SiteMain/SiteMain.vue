<template>
    <div>
      <site-main @updateData="$emit('updateData', $event)" />
    </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import SiteMain from '@/components/SiteMain';

export default {
  name: 'SiteMainData',
  components: {
    SiteMain,
  },
};
</script>

<style>

</style>
