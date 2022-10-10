<template>
  <main class="card-about-main">
    <div class="container">
      <div class="img-wrapper">
        <img class="card-about-img"
          :src="require(`../../assets/images/${fastFood.img}`)"
          alt="about img"
        />
        <h2>{{ fastFood.title }}</h2>
      </div>
      <v-form @submit.prevent="addedCard" ref="form" class="card-left-wrap">
        <h1 class="title">{{ fastFood.title }}</h1>
        <p class="subtitle">
          {{ fastFood.text }} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Iusto sequi quas dolore quod blanditiis incidunt, consequuntur
          similique, quam molestias excepturi, aspernatur veniam. Dolorum
          veritatis culpa iusto, dolore ullam earum nisi?
        </p>
        <div class="countr-wrap">
          <p class="countr-text">Xarid qilish</p>
          <div class="btn-wrap">
            <button
              @click="fastFood.count -= 1"
              :disabled="fastFood.count <= 1"
              class="minus-count btn"
              type="button"
            >
              -
            </button>
            <v-text-field
              :rules="countRules"
              outlined
              type="number"
              v-model="fastFood.count"
              class="counter"
              hide-details
            ></v-text-field>
            <button
              type="button"
              @click="fastFood.count = fastFood.count - 0 + 1"
              class="plus-count btn">
              +
            </button>
          </div>
        </div>
        <div class="price-wrap">
          <p class="price-text">Sotuv narxi</p>
          <h5 class="price">
            {{
              (fastFood.price * fastFood.count)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }}
            so'm
          </h5>
        </div>
        <button class="basket" type="sumbit">Savatchaga joylash</button>
      </v-form>
    </div>
  </main>
</template>

<script>
import fastData from '../../mock';

export default {
  name: 'CardAbout',
  data() {
    return {
      fastData,
      countRules: [(v) => v <= 10 || 'Bizda faqat 10 ta lavash qolgan', (v) => v > 0 || 'Iltmos hisobni togri kiriting'],
    };
  },
  created() {
    if (localStorage.getItem('cardItmes')) {
      const itemsData = JSON.parse(localStorage.getItem('cardItmes'));
      const findItems = itemsData.find((items) => items.id === Number(this.$route.params.id));
      if (findItems) {
        this.fastFood = findItems;
      } else {
        this.fastFood = this.fastData.find((item) => item.id === Number(this.$route.params.id));
      }
    } else {
      this.fastFood = this.fastData.find((item) => item.id === Number(this.$route.params.id));
    }
  },
  methods: {
    addedCard() {
      if (!this.$refs.form.validate()) {
        return;
      }
      const cardItems = JSON.parse(localStorage.getItem('cardItmes') || '[]');
      const findData = cardItems.find((items) => items.id === Number(this.$route.params.id));
      if (findData) {
        findData.count = this.fastFood.count;
      } else {
        cardItems.push(this.fastFood);
      }
      localStorage.setItem('cardItmes', JSON.stringify(cardItems));
    },
  },
};
</script>

<style src="./CardAbout.scss" lang="scss" scoped></style>
