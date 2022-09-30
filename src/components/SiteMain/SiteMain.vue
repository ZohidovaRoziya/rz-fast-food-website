<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <main class="site-main">
    <div class="container">
      <ul class="card-list">
        <li
          v-for="item in fastData"
          :key="item.id"
          @click="$router.push({ name: 'fastfood', params: { id: item.id } })"
          class="card-item"
        >
          <div class="card-img-warap">
            <img
              class="card-img"
              :src="require(`../../assets/images/${item.img}`)"
              alt="card-img"
            />
          </div>
          <div class="card-head">
            <h2 class="card-title">
              <router-link :to="{ name: 'fastfood', params: { id: item.id } }">{{
                item.title
              }}</router-link>
            </h2>
            <p class="card-text">{{ item.text }}</p>
          </div>
          <hr />
          <div class="card-bottom">
            <p class="card-price">
              {{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} so'm
            </p>
            <button v-if="isHidden" class="card-btn"
             @click.stop="isHidden = !isHidden">Tanlash</button>
            <div class="btn-wrap" @click.stop v-else>
              <button
                @click="item.count -= 1"
                :disabled="item.count <= 1"
                class="minus-count btn"
                type="button"
              >
                -
              </button>
              <v-text-field
                :rules="countRules"
                outlined
                type="number"
                v-model="item.count"
                class="counter"
                hide-details
              ></v-text-field>
              <button
                type="button"
                @click="item.count = item.count - 0 + 1"
                class="plus-count btn"
              >
                +
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import fastData from '../../mock';

export default {
  name: 'SiteMain',
  data() {
    return {
      isHidden: true,
      fastData,
      countRules: [(v) => v <= 10 || 'Bizda faqat 10 ta lavash qolgan', (v) => v > 0 || 'Iltmos hisobni togri kiriting'],
    };
  },
};
</script>

<style src="./SiteMain.scss" lang="scss"></style>
