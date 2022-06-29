<template>
  <app-header></app-header>
  <div class="container">
    <h3 class="route-link">
      <router-link to="/"> <span class="route-back">Главная</span></router-link>
      <div class="route-dash">-</div>
      <div class="route-active">Каталог</div>
    </h3>
  </div>
  <app-hero></app-hero>
  <div class="container">
    <h3 class="route-link down">
      <router-link to="/"> <span class="route-back">Главная</span></router-link>
      <div class="route-dash">-</div>
      <div class="route-active">Каталог</div>
    </h3>
  </div>
  <hero-card :sliceNumber="cards"></hero-card>
  <div class="container">
    <base-button class="btn" @click="cards = 100" v-if="cards === 12"
      >Посмотреть все</base-button
    >
  </div>
  <app-footer></app-footer>
</template>

<script>
import AppHero from "../appHero/AppHero.vue";

export default {
  components: {
    AppHero,
  },
  data() {
    return {
      cards: 12,
    };
  },
};
</script>

<style>
.route-link {
  display: flex;
  margin-bottom: 50px;
}

.route-link.down {
  display: none;
  margin-left: 20px;
}

.route-dash {
  margin: 0 5px;
}

.route-back {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  display: inline-block;
}

.route-back:after {
  content: "";
  display: block;
  width: 0;
  height: 3px;
  background: #000000;
  transition: width 0.3s;
}

.route-back:hover:after {
  width: 100%;
}

.route-active {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #dedede;
  margin: auto 0;
}

@media only screen and (max-width: 860px) {
  .route-link {
    margin-top: 20px;
  }
}

@media only screen and (max-width: 590px) {
  .route-link {
    margin-left: 20px!important;
  }
}
</style>

<style scoped>
.btn {
  display: block;
  margin: 30px auto 0;
}

@media only screen and (max-width: 590px) {
  .route-link {
    display: none;
  }

  .route-link.down {
    display: flex;
  }
}
</style>