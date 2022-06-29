<template>
  <app-header></app-header>
  <div class="container">
    <h3 class="route-link">
      <router-link to="/"> <span class="route-back">Главная</span></router-link>
      <div class="route-dash">-</div>
      <router-link to="/cart">
        <span class="route-back">Корзина</span></router-link
      >
      <div class="route-dash">-</div>
      <div class="route-active">Оформление заказа</div>
    </h3>
    <h1>Оформление заказа</h1>
    <div class="submitted" v-if="isSubmitted">
      <img src="../../assets/submitted.svg" alt="" />
      <p>Ваш заказ успешно зарегестрирован, спасибо за заказ!</p>
    </div>
    <div class="infos" v-if="!isSubmitted">
      <div class="base-container form">
        <div class="container-title">
          <div class="title">Покупатель</div>
        </div>
        <div class="container-para">
          <div class="name">
            <label for="name">Ф.И.О</label>
            <input type="text" name="name" />
          </div>
          <div class="number">
            <label for="number">Телефон</label>
            <input type="number" name="number" class="phone" />
          </div>
          <div class="input-email">
            <label for="email" class="email">E-mail</label>
            <input type="email" name="email" />
          </div>
          <div class="comment">
            <label for="comment">Комментарий к заказу</label>
            <textarea name="comment" cols="67" rows="10"></textarea>
          </div>
        </div>
      </div>
      <div class="base-container para">
        <div class="order-name">Ваш заказ</div>
        <div class="orders">
          <div class="order-item" v-for="order in root.type" :key="order.id">
            <div class="name">{{ root.name[root.type.indexOf(order)] }}</div>
            <div class="quantity">
              {{ root.quantityTonn[root.type.indexOf(order)] }}т,
              {{ root.quantityMeter[root.type.indexOf(order)] }}м
            </div>
            <div class="sum">{{ root.sum[root.type.indexOf(order)] }}$</div>
          </div>
        </div>
        <div class="orders-sum">
          <div class="orders-sum-name">Итого:</div>
          <div class="orders-sum-price">
            {{ root.sum.reduce((a, b) => a + b, 0) }}$
          </div>
        </div>
        <base-button class="btn" @click="submitOrder()">
          Оформить заказ
        </base-button>
      </div>
    </div>
  </div>
  <app-footer></app-footer>
</template>

<script>
export default {
  data() {
    return {
      root: this.$store.state.cart,
      isSubmitted: false,
    };
  },
  methods: {
    submitOrder() {
      if (this.root.sum.reduce((a, b) => a + b, 0) !== 0) {
        this.isSubmitted = true;
        this.root.name = [];
        this.root.diameter = [];
        this.root.type = [];
        this.root.priceTonn = [];
        this.root.quantityTonn = [];
        this.root.priceMeter = [];
        this.root.quantityMeter = [];
        this.root.sum = [];
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
  margin-bottom: 50px;
}

.infos {
  display: flex;
  justify-content: space-between;
}

.base-container {
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}

.form {
  max-width: 602px;
}

.container-title {
  background-color: #eef1f3;
  padding: 22px 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}

.container-para {
  padding: 30px 50px;
}

.name,
.number,
.comment {
  position: relative;
}

label {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  position: absolute;
  top: -17px;
}

.number {
  margin: 30px 0;
}

.phone {
  margin-right: 10px;
  width: 100px;
}

.input-email {
  margin-bottom: 20px;
  position: relative;
}

.email {
  left: 0;
  top: -17px;
}

.input-email input {
  width: 99%;
}

input {
  background-color: #ffffff;
  border: 1px solid #4971ff;
  height: 30px;
  border-radius: 5px;
  color: #000000;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:focus,
textarea:focus {
  outline: none !important;
  border-color: #719ece;
  box-shadow: 0 0 10px #719ece;
}

.name input {
  width: 99%;
}

.name {
  width: 100%;
}

.number input {
  width: 99%;
}

textarea {
  max-width: 99%;
  min-width: 99%;
  background-color: #ffffff;
  max-height: 120px;
  min-height: 40px;
  border: 1px solid #4971ff;
  color: #000000;
}

.para {
  width: 500px;
  padding: 30px 50px;
}

.order-name {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #4971ff;
  margin-bottom: 30px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.orders {
  height: 170px;
  overflow-y: auto;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 20px;
}

.quantity {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #cecece;
}

.orders-sum {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
  margin-bottom: 20px;
}

.btn {
  width: 100%;
}

.submitted {
  text-align: center;
}

.submitted p {
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}

@media only screen and (max-width: 1100px) {
  .infos {
    display: block;
  }

  h1 {
    text-align: center;
  }

  .base-container {
    margin: 20px auto;
  }

  .para {
    max-width: 500px;
  }
}

@media only screen and (max-width: 640px) {
}
</style>