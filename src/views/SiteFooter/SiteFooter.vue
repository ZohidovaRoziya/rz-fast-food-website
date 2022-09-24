<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
    <header>
      <div class="container">
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
            </ul>
          </nav>
      </div>
    </header>
</template>

<script>
export default {

};
</script>

<style>

</style>
