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
              {{ (item.price * item.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} so'm
            </p>
            <button v-if="!item.editRow" class="card-btn"
             @click.stop="() => {
              item.editRow = !item.editRow
              updateCount(item, 'plus')
             }">Tanlash</button>
            <div class="btn-wrap" @click.stop v-else>
              <button
                @click.stop="updateCount(item, 'minus')"
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
                class="plus-count btn"
                @click.stop="updateCount(item, 'plus')"
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
/* eslint-disable no-param-reassign */

export default {
  name: 'SiteMain',
  data() {
    return {
      fastData,
      countRules: [(v) => v <= 10 || 'Bizda faqat 10 ta lavash qolgan', (v) => v > 0 || 'Iltmos hisobni togri kiriting'],
    };
  },
  mounted() {
    if (localStorage.getItem('cardItmes')) {
      const storeData = JSON.parse(localStorage.getItem('cardItmes') || '[]');

      this.fastData.forEach((items) => {
        const findProdcut = storeData.find((item) => item.id === items.id);
        if (findProdcut) {
          items.editRow = true;
          items.count = findProdcut.count;
        } else {
          ///
        }
      });
    }
  },
  methods: {
    updateCount(data, type) {
      const cardItems = JSON.parse(localStorage.getItem('cardItmes') || '[]');
      const findData = cardItems.find((items) => items.id === data.id);
      if (data.count - 1 === 0 && type === 'minus') {
        const findIndex = cardItems.findIndex((items) => items.id === data.id);
        cardItems.splice(findIndex, 1);
        data.editRow = false;
      } else if (findData) {
        findData.count = type === 'minus' ? data.count -= 1 : data.count += 1;
      } else {
        cardItems.push(data);
      }
      localStorage.setItem('cardItmes', JSON.stringify(cardItems));
      this.$emit('updateData', 'changed');
    },
  },
};
</script>

<style src="./SiteMain.scss" lang="scss"></style>
