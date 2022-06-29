<template>
  <app-header></app-header>
  <app-hero></app-hero>
  <div class="cards">
    <hero-card sliceNumber="6"></hero-card>
  </div>
  <why-us></why-us>
  <client-comments></client-comments>
  <request-form></request-form>
  <app-footer></app-footer>
</template>

<script>
import AppHero from "./appHero/AppHero.vue";
import WhyUs from "./appHero/WhyUs.vue";
import ClientComments from "./appHero/ClientComments.vue";
import RequestForm from "./appHero/RequestForm.vue";
export default {
  components: {
    AppHero,
    WhyUs,
    ClientComments,
    RequestForm,
  },
};
</script>

<style scoped>

</style>