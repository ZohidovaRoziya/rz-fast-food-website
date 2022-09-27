<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable max-len -->
<template>
  <main >
    <div class="container">
    <div class="img-wrapper">
      <img :src="require(`../../assets/images/${fastFood.img}`)" width="1000" alt="about img">
      <h2>{{fastFood.title}}</h2>
    </div>
    <div class="card-left-wrap">
        <h1 class="title">{{fastFood.title}}</h1>
        <p class="subtitle">{{fastFood.text}} Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi quas dolore quod blanditiis incidunt, consequuntur similique, quam molestias excepturi, aspernatur veniam. Dolorum veritatis culpa iusto, dolore ullam earum nisi?</p>
        <div class="countr-wrap">
          <p class="countr-text">Xarid qilish</p>
          <div class="btn-wrap">
            <button class="plus-count btn">+</button>
              1
            <button class="minus-count btn">-</button>
          </div>
        </div>
        <div class="price-wrap">
          <p class="price-text">Sotuv narxi</p>
          <h5 class="price">{{fastFood.price}} so'm</h5>
        </div>
        <button class="basket">Savatchaga joylash</button>
    </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'CardAbout',
  data() {
    return {
      fastData: [
        {
          id: 1,
          img: 'lavash.png',
          title: 'Lavash',
          to: 'lavash',
          text: "Yupqa lavash non, bodring, pomidor, chips, mol go'shti, qizil sous, mayonez.",
          price: 28_000,
        },
        {
          id: 2,
          img: 'pitsa.jpg',
          title: 'Pitsa',
          to: 'pitsa',
          text: 'Pomidor sousi “OQTEPA”, shirin piyoz halqalari “Brunsvik”, kazi, Mozzarella va Akbel pishloqlari',
          price: 80_000,
        },
        {
          id: 3,
          img: 'sendvich.jpg',
          title: 'Sendvich',
          to: 'sendvich',
          text: 'Qovurilgan non, maxsus sous, bodring, pomidor, tovuq filesi, marul, pishloq, fri kartoshkas',
          price: 26_000,
        },
        {
          id: 4,
          img: 'burger.jpg',
          title: 'Burger ',
          to: 'burger',
          text: "Sariyog'li bulochka, maxsus sous, aysberg, tuzlangan bodring, mol go'shti, pomidor, pishloq.",
          price: 22_000,
        },
        {
          id: 5,
          img: 'doner.jpg',
          title: 'Doner',
          to: 'doner',
          text: "Tandirli pita noni, mol go'shti, bodring, pomidor, qizil sous, Brunswick shirin piyoz halqalari",
          price: 20_000,
        },
        {
          id: 6,
          img: 'snek.png',
          title: 'Sneklar',
          to: 'snek',
          text: 'Yam-yashil bulochka, kolbasa, ketchup, mayonez, ikra, bodring, pomidor',
          price: 10_000,
        },
      ],
    };
  },
  computed: {
    fastFood() {
      return this.fastData.find((item) => item.id === this.$route.params.id);
    },
  },
};
</script>

<style src="./CardAbout.scss" lang="scss" scoped></style>
