<template>
  <main >
    <div class="container">
    <div class="img-wrapper">
      <img :src="require(`../../assets/images/${fastFood.img}`)" width="1000" alt="about img">
      <h2>{{fastFood.title}}</h2>
    </div>
    <div class="card-left-wrap">
        <h1 class="title">{{fastFood.title}}</h1>
        <p class="subtitle">{{fastFood.text}}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto sequi quas dolore quod blanditiis
            incidunt, consequuntur similique, quam molestias excepturi,
             aspernatur veniam. Dolorum veritatis culpa iusto, dolore ullam earum nisi?</p>
        <div class="countr-wrap">
          <p class="countr-text">Xarid qilish</p>
          <div class="btn-wrap">
            <button
              @click="fastFood.count -= 1"
              :disabled="fastFood.count == 1"
              class="minus-count btn">-</button>
              {{ fastFood.count }}
            <button @click="fastFood.count += 1" class="plus-count btn">+</button>
          </div>
        </div>
        <div class="price-wrap">
          <p class="price-text">Sotuv narxi</p>
          <h5 class="price">{{
            (fastFood.price * fastFood.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
          }} so'm</h5>
        </div>
        <button class="basket" @click="addedCard">Savatchaga joylash</button>
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
          price: 28000,
          count: 1,
        },
        {
          id: 2,
          img: 'pitsa.jpg',
          title: 'Pitsa',
          to: 'pitsa',
          text: 'Pomidor sousi “OQTEPA”, shirin piyoz halqalari “Brunsvik”, kazi, Mozzarella va Akbel pishloqlari',
          price: 80000,
          count: 1,
        },
        {
          id: 3,
          img: 'sendvich.jpg',
          title: 'Sendvich',
          to: 'sendvich',
          text: 'Qovurilgan non, maxsus sous, bodring, pomidor, tovuq filesi, marul, pishloq, fri kartoshkas',
          price: 26000,
          count: 1,
        },
        {
          id: 4,
          img: 'burger.jpg',
          title: 'Burger ',
          to: 'burger',
          text: "Sariyog'li bulochka, maxsus sous, aysberg, tuzlangan bodring, mol go'shti, pomidor, pishloq.",
          price: 22000,
          count: 1,
        },
        {
          id: 5,
          img: 'doner.jpg',
          title: 'Doner',
          to: 'doner',
          text: "Tandirli pita noni, mol go'shti, bodring, pomidor, qizil sous, Brunswick shirin piyoz halqalari",
          price: 20000,
          count: 1,
        },
        {
          id: 6,
          img: 'snek.png',
          title: 'Sneklar',
          to: 'snek',
          text: 'Yam-yashil bulochka, kolbasa, ketchup, mayonez, ikra, bodring, pomidor',
          price: 10000,
          count: 1,
        },
      ],
      fastFood: {
        img: 'snek.png',
      },
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
