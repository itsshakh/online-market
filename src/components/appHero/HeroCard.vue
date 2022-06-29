<template>
  <div class="container">
    <div class="cards">
      <div
        class="card"
        v-for="res in cardInfos.slice(0, sliceNumber)"
        :key="res.id"
        :name="res.name"
        :price="res.price"
      >
        <router-link to="/catalogue/product" @click="getName(res.name)">
          <div class="card-item">
            <div class="name">{{ res.name }}</div>
            <p>от {{ res.price }} руб/м</p>
            <button><img src="../../assets/plus.svg" alt="" /></button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sliceNumber"],
  data() {
    return {
      cardInfos: [
        { name: "Арматура", price: 14, link: "armatura" },
        { name: "Катанка", price: 120, link: "katanka" },
        { name: "Уголки", price: 40, link: "ugolki" },
        { name: "Швеллер", price: 80, link: "shveller" },
        { name: "Труба ВПГ", price: 53, link: "truba_vpg" },
        { name: "Труба", price: 99, link: "truba" },
        { name: "Арматура", price: 14, link: "armatura" },
        { name: "Катанка", price: 120, link: "katanka" },
        { name: "Уголки", price: 40, link: "ugolki" },
        { name: "Швеллер", price: 80, link: "shveller" },
        { name: "Труба ВПГ", price: 53, link: "truba_vpg" },
        { name: "Труба", price: 99, link: "truba" },
        { name: "Арматура", price: 14, link: "armatura" },
        { name: "Катанка", price: 120, link: "katanka" },
        { name: "Уголки", price: 40, link: "ugolki" },
        { name: "Швеллер", price: 80, link: "shveller" },
        { name: "Труба ВПГ", price: 53, link: "truba_vpg" },
        { name: "Труба", price: 99, link: "truba" },
      ],
    };
  },
  methods: {
    getName(name) {
      this.$store.state.orderName = name
    }
  }
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1214px;
}

.card {
  border-radius: 5px;
  position: relative;
  background: url("../../assets/card-img.png") no-repeat #eef1f3 top right;
  padding: 25px 298px 75px 15px;
  margin-bottom: 10px;
  transition: all 0.5s ease;
}

.card:hover {
  transform: scale(0.95);
  transition: all 0.5s ease;
}

.name {
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #1541dd;
}

P {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #1541dd;
}

button {
  background: #4971ff;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 35px;
  width: 45px;
  border-radius: 0px 0px 0px 5px;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
}

button:hover {
  background: #2251f8;
}

@media only screen and (max-width: 860px) {
  .card {
    padding-right: 200px;
  }
}

@media only screen and (max-width: 310px) {
  .card {
    padding-right: 130px;
  }
}
</style>