<template>
    <div>
    <!-- eslint-disable-next-line vue/no-parsing-error -->
      <site-main @updateData="$emit('updateData')" />
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
