<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="menu-wrap">
    <div class="page-content">
      <div class="card">
        <h1 class="menu-title">Welcome</h1>
        <h2 class="menu-title">to our Food site</h2>
        <h3 class="menu-subtitle">Menu</h3>
        <div v-for="item in menuData" :key="item.id" class="content">
          <button @click="toggleCategory(item.name)" class="menu-text">{{ item.text }}</button>
        </div>
      </div>
    </div>
    <div class="menu-left">
      <div v-if="showData" class="menu-img"></div>
      <ul v-else class="card-list">
        <li v-for="item in visibleProducts"
        :key="item.id"
        @click="$router.push({ name: 'fastfood', params: { id: item.id } })"
        class="card-item">
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
            <button
              v-if="!item.editRow"
              class="card-btn"
              @click.stop="
                () => {
                  item.editRow = !item.editRow;
                  updateCount(item, 'plus');
                }
              "
            >
              Tanlash
            </button>
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
              <button type="button" class="plus-count btn" @click.stop="updateCount(item, 'plus')">
                +
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import cardData from '../../mock/index';

export default {
  name: 'SiteMenuPages',
  data() {
    return {
      menuData: [
        {
          id: 1,
          text: 'National foods',
          name: 'national',
        },
        {
          id: 2,
          text: 'Fast Food',
          name: 'fast-food',
        },
        {
          id: 3,
          text: 'Salads',
          name: 'salads',
        },
        {
          id: 4,
          text: 'Sweets',
          name: 'sweets',
        },
        {
          id: 5,
          text: 'Drinks',
          name: 'drinks',
        },
      ],
      showData: true,
      cardData,
      currentCategory: '',
      countRules: [(v) => v <= 10 || 'Bizda faqat 10 ta lavash qolgan', (v) => v > 0 || 'Iltmos hisobni togri kiriting'],
    };
  },
  mounted() {
    if (localStorage.getItem('cardItmes')) {
      const storeData = JSON.parse(localStorage.getItem('cardItmes') || '[]');

      this.cardData.forEach((items) => {
        console.log(items);
        const findProdcut = storeData.find((item) => item.id === items.id);
        if (findProdcut) {
          // eslint-disable-next-line no-param-reassign
          items.editRow = true;
          // eslint-disable-next-line no-param-reassign
          items.count = findProdcut.count;
        } else {
          ///
        }
      });
    }
  },
  computed: {
    visibleProducts() {
      return this.cardData.filter((item) => this.currentCategory === item.category);
    },
  },
  methods: {
    toggleCategory(categoryName) {
      this.currentCategory = categoryName;
      this.showData = false;
    },
    updateCount(data, type) {
      const cardItems = JSON.parse(localStorage.getItem('cardItmes') || '[]');
      const findData = cardItems.find((items) => items.id === data.id);
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
      this.$emit('updateData', 'changed');
    },
  },
};
</script>

<style src="./SiteMenu.scss" lang="scss"></style>
