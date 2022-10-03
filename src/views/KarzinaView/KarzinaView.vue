<!-- eslint-disable no-param-reassign -->
<!-- eslint-disable eqeqeq -->
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
              {{ (item.price * item.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} so'm
            </p>
              {{item.count}} berildi
          </div>
        </li>
      </ul>

      <button> Umumiy summa {{ allPrice}} </button>
    </div>
  </main>
</template>

<script>

export default {
  name: 'SiteMain',
  data() {
    return {
      isHidden: true,
      fastData: JSON.parse(localStorage.getItem('cardItems') || '[]'),
      countRules: [(v) => v <= 10 || 'Bizda faqat 10 ta lavash qolgan', (v) => v > 0 || 'Iltmos hisobni togri kiriting'],
      allPrice: 0,
    };
  },
  methods: {
    updateCount(data, type) {
      // eslint-disable-next-line no-param-reassign
      const cardItems = JSON.parse(localStorage.getItem('cardItmes') || '[]');
      const findData = cardItems.find((items) => items.id === Number(data.id));
      if (data.count - 1 === 0 && type === 'minus') {
        const findIndex = cardItems.findIndex((items) => items.id === data.id);
        cardItems.splice(findIndex, 1);
        // eslint-disable-next-line no-param-reassign
        data.editRow = false;
      } else if (findData) {
        // eslint-disable-next-line no-param-reassign
        findData.count = type === 'minus' ? data.count -= 1 : data.count += 1;
      } else {
        cardItems.push(data);
      }
      localStorage.setItem('cardItmes', JSON.stringify(cardItems));
      this.$emit('updateCount', 'changed');
    },
  },
  mounted() {
    if (localStorage.getItem('cardItmes')) {
      const storeData = JSON.parse(localStorage.getItem('cardItmes') || '[]');
      this.fastData.forEach((items) => {
        const findItems = storeData.find((item) => items.id === item.id);
        if (findItems) {
          // eslint-disable-next-line no-param-reassign
          items.count = findItems.count;
          // eslint-disable-next-line no-param-reassign
          items.editRow = true;
        } else {
          ///
        }
      });
    }
    this.fastData.forEach((data) => {
      this.allPrice += data.price * data.count;
    });
  },
};
</script>

<style src="./SiteMain.scss" lang="scss"></style>
