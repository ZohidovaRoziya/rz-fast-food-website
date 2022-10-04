<template>
  <div class="menu-wrap">
    <div class="page-content">
      <div class="card">
        <h1 class="menu-title">Welcome</h1>
        <h2 class="menu-title">to our Food site</h2>
        <h3 class="menu-subtitle">Menu</h3>
        <div v-for="item in menuData"
        :key="item.id"
        class="content">
          <button @click="sortCategory"
           class="menu-text">{{item.text}}</button>
        </div>
      </div>
    </div>
    <div class="menu-left">
      <div class="menu-img"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SiteMenuPages',
  data() {
    return {
      menuData: [
        {
          id: 1,
          text: 'National foods',
        },
        {
          id: 2,
          text: 'Fast Food',
        },
        {
          id: 3,
          text: 'Salads',
        },
        {
          id: 4,
          text: 'Sweets',
        },
        {
          id: 5,
          text: 'Drinks',
        },
      ],
    };
  },
  methods: {
    sortCategory() {},
  },
};
</script>

<style src="./SiteMenu.scss" lang="scss"></style>
