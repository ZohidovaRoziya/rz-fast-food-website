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
              :src="require(`@/assets/images/${item.img}`)"
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
              {{ (item.price * item.count ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} so'm
            </p>
            {{ item.count }} berildi
          </div>
        </li>
      </ul>
      <button>
        zakaz berish narhi {{ allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} so'm
        </button>
    </div>
  </main>
</template>

<script>
/* eslint-disable no-param-reassign */

export default {
  name: 'KorzinaView',
  data() {
    return {
      fastData: JSON.parse(localStorage.getItem('cardItmes') || '[]'),
      countRules: [(v) => v <= 10 || 'Bizda faqat 10 ta lavash qolgan', (v) => v > 0 || 'Iltmos hisobni togri kiriting'],
      allPrice: 0,
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

    this.fastData.forEach((data) => {
      this.allPrice += data.price * data.count;
    });
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

<style src="./KorzinaView.scss" lang="scss"></style>
