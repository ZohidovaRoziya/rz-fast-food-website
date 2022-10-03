<template>
  <header class="site-header">
    <div class="container">
      <h1 class="site-heading">FastFood</h1>
      <nav class="site-nav">
        <ul class="site-nav__list">
          <li class="site-nav__item">
            <router-link to="/" href="#" class="site-nav__link">Home</router-link>
          </li>
          <li class="site-nav__item">
            <router-link to="/about" href="#" class="site-nav__link">About</router-link>
          </li>
          <li class="site-nav__item">
            <router-link to="/contact" href="#" class="site-nav__link">Contact</router-link>
          </li>
            <li class="site-nav__item">
              <router-link to="/karzina" href="#" class="site-nav__link">Korzina
               <sup>{{productCount}} </sup>
               </router-link>
            </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeaderComponent',
  data() {
    return {
      productCount: 0,
    };
  },
  methods: {
    refreshCount() {
      this.productCount = JSON.parse(localStorage.getItem('cardItems') || '[]').length;
    },
  },
  mounted() {
    this.refreshCount();
  },
};
</script>

<style src="./SiteHeader.scss" lang="scss"></style>
