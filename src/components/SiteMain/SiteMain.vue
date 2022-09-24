<template>
  <main class="site-main">
      <div class="container">
         <ul class="card-list">
          <li v-for="item in fastData" :key="item.id" class="card-item">
           <div class="card-img-warap">
             <img class="card-img" :src="require(`../../assets/images/${item.img}`)" alt="card-img">
           </div>
           <div class="card-head">
             <h2 class="card-title">
              <a href="#">{{item.title}}</a>
             </h2>
            <p class="card-text">{{item.text}}</p>
           </div>
            <hr />
            <div class="card-bottom">
              <p class="card-price">{{item.price}} so'm</p>
              <button class="card-btn">Tanlash</button>
            </div>
          </li>
         </ul>
      </div>
  </main>
</template>

<script>
export default {
  name: 'SiteMain',
  data() {
    return {
      fastData: [
        {
          id: 1,
          img: 'lavash.png',
          title: 'Lavash',
          text: "Yupqa lavash non, bodring, pomidor, chips, mol go'shti, qizil sous, mayonez.",
          price: 28_000,
        },
        {
          id: 2,
          img: 'pitsa.jpg',
          title: 'Pitsa',
          text: 'Pomidor sousi “OQTEPA”, shirin piyoz halqalari “Brunsvik”, kazi, Mozzarella va Akbel pishloqlari',
          price: 80_000,
        },
        {
          id: 3,
          img: 'sendvich.jpg',
          title: 'Sendvich',
          text: 'Qovurilgan non, maxsus sous, bodring, pomidor, tovuq filesi, marul, pishloq, fri kartoshkas',
          price: 26_000,
        },
        {
          id: 4,
          img: 'burger.jpg',
          title: 'Burger ',
          text: "Sariyog'li bulochka, maxsus sous, aysberg, tuzlangan bodring, mol go'shti, pomidor, pishloq.",
          price: 22_000,
        },
        {
          id: 5,
          img: 'doner.jpg',
          title: 'Doner',
          text: "Tandirli pita noni, mol go'shti, bodring, pomidor, qizil sous, Brunswick shirin piyoz halqalari",
          price: 20_000,
        },
        {
          id: 6,
          img: 'snek.png',
          title: 'Sneklar',
          text: 'Yam-yashil bulochka, kolbasa, ketchup, mayonez, ikra, bodring, pomidor',
          price: 10_000,
        },
      ],
    };
  },
};
</script>

<style src="./SiteMain.scss" lang="scss"></style>
