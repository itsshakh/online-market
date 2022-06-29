<template>
  <app-header></app-header>
  <div class="container">
    <h3 class="route-link">
      <router-link to="/"> <span class="route-back">Главная</span></router-link>
      <div class="route-dash">-</div>
      <div class="route-active">Корзина</div>
    </h3>
    <h1>Корзина</h1>
    <table>
      <tr>
        <th>Наименование</th>
        <th>Цена</th>
        <th>Кол-во</th>
        <th>Стоимость</th>
      </tr>
      <tr v-for="cart in root.diameter" :key="cart.id">
        <td class="first-col">
          <div class="title">{{ root.name[root.diameter.indexOf(cart)] }}</div>
          <p class="diameter">
            Диаметр: {{ root.diameter[root.diameter.indexOf(cart)] }}
          </p>
          <p class="marka">
            Марка: {{ root.type[root.diameter.indexOf(cart)].toUpperCase() }}
          </p>
        </td>
        <td>
          <div class="price tonn">
            {{ root.priceTonn[root.diameter.indexOf(cart)] }}$/т
          </div>
          <div class="price meter">
            {{ root.priceMeter[root.diameter.indexOf(cart)] }}$/м
          </div>
        </td>
        <td>
          <div class="quantity">
            <span
              class="quantity-minus"
              @click="
                root.quantityTonn[root.diameter.indexOf(cart)] > 0
                  ? (root.quantityTonn[root.diameter.indexOf(cart)]--,
                    (root.sum[root.diameter.indexOf(cart)] -=
                      parseInt(root.priceTonn[root.diameter.indexOf(cart)])))
                  : (root.quantityTonn[root.diameter.indexOf(cart)] = 0)
              "
              >-</span
            >
            {{ root.quantityTonn[root.diameter.indexOf(cart)] }}
            <span
              class="quantity-plus"
              @click="
                root.quantityTonn[root.diameter.indexOf(cart)]++,
                  (root.sum[root.diameter.indexOf(cart)] +=
                    parseInt(root.priceTonn[root.diameter.indexOf(cart)]))
              "
              >+</span
            >
          </div>
          <div class="quantity">
            <span
              class="quantity-minus"
              @click="
                root.quantityMeter[root.diameter.indexOf(cart)] > 0
                  ? (root.quantityMeter[root.diameter.indexOf(cart)]--,
                    (root.sum[root.diameter.indexOf(cart)] -= parseInt(
                      root.priceMeter[root.diameter.indexOf(cart)]
                    )))
                  : (root.quantityMeter[root.diameter.indexOf(cart)] = 0)
              "
              >-</span
            >
            {{ root.quantityMeter[root.diameter.indexOf(cart)] }}
            <span
              class="quantity-plus"
              @click="
                root.quantityMeter[root.diameter.indexOf(cart)]++,
                  (root.sum[root.diameter.indexOf(cart)] += parseInt(
                    root.priceMeter[root.diameter.indexOf(cart)]
                  ))
              "
              >+</span
            >
          </div>
        </td>
        <td>
          <div>{{ root.sum[root.diameter.indexOf(cart)] }}$</div>
        </td>
      </tr>
    </table>
    <div class="cards">
      <div class="card-item" v-for="cart in root.diameter" :key="cart.id">
        <div class="card-item-name">
          {{ root.name[root.diameter.indexOf(cart)] }}
        </div>
        <div class="card-item-feature">
          Диаметер: {{ root.diameter[root.diameter.indexOf(cart)] }}
        </div>
        <div class="card-item-feature">
          Марка: {{ root.type[root.diameter.indexOf(cart)] }}
        </div>
        <div class="card-item-price">
          {{ root.priceTonn[root.diameter.indexOf(cart)] }}$/т
        </div>
        <div class="card-item-quantity">
          <span
            class="quantity-minus"
            @click="
              root.quantityTonn[root.diameter.indexOf(cart)] > 0
                ? (root.quantityTonn[root.diameter.indexOf(cart)]--,
                  (root.sum[root.diameter.indexOf(cart)] -=
                    root.priceTonn[root.diameter.indexOf(cart)]))
                : (root.quantityTonn[root.diameter.indexOf(cart)] = 0)
            "
            >-</span
          >
          {{ root.quantityTonn[root.diameter.indexOf(cart)] }}
          <span
            class="quantity-plus"
            @click="
              root.quantityTonn[root.diameter.indexOf(cart)]++,
                (root.sum[root.diameter.indexOf(cart)] +=
                  root.priceTonn[root.diameter.indexOf(cart)])
            "
            >+</span
          >
        </div>
        <base-button
          class="card-item-btn"
        >
          <img src="../../assets/buy-btn.svg" alt="" />
        </base-button>
      </div>
    </div>

    <div class="base-container">
      <div class="promo">
        <input type="text" placeholder="У меня есть промокод" />
      </div>
      <div class="sum">
        <p class="sum-name">Итого:</p>
        <p class="sum-amount">{{ root.sum.reduce((a, b) => a + b, 0) }}$</p>
      </div>
      <router-link to="/cart/checkout">
        <base-button class="btn">Оформить заказ</base-button>
      </router-link>
    </div>
  </div>
  <app-footer></app-footer>
</template>

<script>
export default {
  data() {
    return {
      root: this.$store.state.cart,
    };
  },
};
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
  text-align: center;
  margin-bottom: 50px;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.cards {
  display: none;
  flex-wrap: wrap;
  margin: 20px;
}

.card-item {
  width: 49%;
  border: 1px solid #eef1f3;
  padding-bottom: 20px;
  text-align: center;
}

.card-item-name {
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #4971ff;
  margin: 20px 0;
}

.card-item-feature {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #cecece;
  margin-bottom: 5px;
}

.card-item-price {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #4971ff;
  margin: 15px 0 20px;
}

.card-item-btn {
  margin-top: 20px;
  padding: 8px 49px 4px;
}

td {
  border: 1px solid #eef1f3;
  padding: 15px 0 8px;
}

th {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  padding: 22px 0;
  background-color: #eef1f3;
}

td div {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #4971ff;
  margin-bottom: 8px;
}

td p {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #cecece;
}

.first-col {
  text-align: left;
  padding-left: 100px;
}

.quantity-minus {
  margin-left: 10px;
  cursor: pointer;
}

.quantity-plus {
  margin-right: 10px;
  cursor: pointer;
}

.quantity {
  user-select: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
}

.base-container {
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.05);
  border-radius: 5px 5px 0px 0px;
  display: flex;
  margin-top: 70px;
  padding: 35px 100px;
  margin-bottom: -100px;
}

.promo {
  width: 50%;
}

.sum {
  display: flex;
  align-items: center;
}

.sum-name {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}

.sum-amount {
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
  margin: 0 50px;
}

.promo input {
  width: 260px;
  height: 27px;
  padding: 5px 10px;
  border: 1px solid #cecece;
  background: #ffffff;
}

.promo input:focus,
.promo textarea:focus {
  outline: none !important;
  border-color: #719ece;
  box-shadow: 0 0 10px #719ece;
}

@media only screen and (max-width: 890px) {
  .base-container {
    display: block;
  }

  .sum {
    justify-content: center;
    margin: 10px 0;
  }

  .promo {
    margin: 0 auto;
    display: table;
  }

  .btn {
    margin: 0 auto;
    display: table;
  }
}

@media only screen and (max-width: 500px) {
  table {
    display: none;
  }

  .cards {
    display: flex;
  }
}
</style>