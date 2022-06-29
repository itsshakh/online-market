<template>
  <app-header></app-header>
  <div class="container">
    <h3 class="route-link">
      <router-link to="/"> <span class="route-back">Главная</span></router-link>
      <div class="route-dash">-</div>
      <router-link to="/catalogue">
        <span class="route-back">Каталог</span></router-link
      >
      <div class="route-dash">-</div>
      <a @click="$router.go(-1)">
        <span class="route-back">{{ $store.state.orderName }}</span></a
      >
      <div class="route-dash">-</div>
      <div class="route-active">{{ root.type }}</div>
    </h3>
    <h1>
      {{ $store.state.orderName }} {{ root.diameter }}мм, марка {{ root.type }}
    </h1>
    <div class="base-container">
      <div class="order-img">
        <img src="../../assets/order-img.png" alt="" />
      </div>
      <div class="features">
        <h4>Краткие характеристики</h4>
        <div class="item">
          <div class="item-name">
            <p class="name">Класс арматуры</p>
            <p class="name">ГОСТ</p>
            <p class="name">Диаметр</p>
            <p class="name">Вес погонного метра</p>
          </div>
          <div class="item-value">
            <p class="value">{{ root.type }}</p>
            <p class="value">{{ root.gost }}</p>
            <p class="value">{{ root.diameter }}мм</p>
            <p class="value">{{ root.weight }}</p>
          </div>
        </div>
        <a href="#features" class="all-features" @click="activeNav = 1"
          >Все характеристики</a
        >
        <div class="item">
          <a href="#features" class="item-name" @click="activeNav = 2"
            >Способы доставки</a
          >
          <a href="#features" class="item-value" @click="activeNav = 3"
            >Способы оплаты</a
          >
        </div>
      </div>
      <div class="price">
        <div class="price-item">
          <div class="price-value first">{{ root.priceTonn }}</div>
          <div class="quantity first">
            <span
              class="quantity-minus"
              @click="
                root.quantity > 0
                  ? (root.quantity--, (root.sum -= parseInt(root.priceTonn)))
                  : (root.quantity = 0)
              "
              >-</span
            >
            {{ root.quantity }}
            <span
              class="quantity-plus"
              @click="root.quantity++, (root.sum += parseInt(root.priceTonn))"
              >+</span
            >
          </div>
        </div>
        <div class="price-item">
          <div class="price-value second">{{ root.priceMeter }}</div>
          <div class="quantity second">
            <span
              class="quantity-minus"
              @click="
                root.quantityMeter > 0
                  ? (root.quantityMeter--,
                    (root.sum -= parseInt(root.priceMeter)))
                  : (root.quantityMeter = 0)
              "
              >-</span
            >
            {{ root.quantityMeter }}
            <span
              class="quantity-plus"
              @click="
                root.quantityMeter++, (root.sum += parseInt(root.priceMeter))
              "
              >+</span
            >
          </div>
        </div>
        <div class="sum">
          <div class="title">Стоимость заказа</div>
          <div class="price">{{ root.sum }}$</div>
        </div>
        <base-button
          class="buy-btn"
          @click="addCart()"
          :style="
            isSubmitted
              ? { background: '#28a745', 'pointer-events': 'none' }
              : ''
          "
        >
          <img src="../../assets/buy-btn.svg" alt="" /> В корзину
        </base-button>
        <div class="inputs">
          <input
            type="text"
            v-model="userName"
            placeholder="Ваше имя"
            :class="!anyName ? 'red name' : 'name'"
          />
          <input
            type="number"
            v-model="userPhone"
            placeholder="+998(9_)___-__-__"
            :class="!anyPhone ? 'red phone' : 'phone'"
          />
        </div>
        <base-button class="buy-btn" @click="checkInput()"
          >Купить в один клик</base-button
        >
      </div>
    </div>
    <div class="base-container second" id="features">
      <nav>
        <div class="nav-item" @click="activeNav = 1" :style="isActive(1)">
          Характеристики
        </div>
        <div class="nav-item" @click="activeNav = 2" :style="isActive(2)">
          Доставка
        </div>
        <div class="nav-item" @click="activeNav = 3" :style="isActive(3)">
          Оплата
        </div>
      </nav>
      <div class="nav-features" v-if="activeNav === 1">
        <div class="item">
          <div class="item-name">
            <p class="name">Класс арматуры</p>
            <p class="name">ГОСТ</p>
            <p class="name">Диаметр</p>
            <p class="name">Вес погонного метра</p>
          </div>
          <div class="item-value">
            <p class="value">{{ root.type }}</p>
            <p class="value">{{ root.gost }}</p>
            <p class="value">{{ root.diameter }}мм</p>
            <p class="value">{{ root.weight }}</p>
          </div>
        </div>
      </div>
      <div class="nav-features" v-if="activeNav === 2">
        <h3>Доставка</h3>
        <h4>Наличный расчёт</h4>
        <p>
          Оплату можно произвести наличными в кассе на складе МосСтальСервис по
          адресу Г Тула Торговый центр Алмазар, 4 проезд
        </p>
        <h4>Наличный расчёт</h4>
        <p>
          Оплату можно произвести наличными в кассе на складе МосСтальСервис по
          адресу 4 проезд
        </p>
        <h4>Наличный расчёт</h4>
        <p>Оплату можно произвести наличными в кассе на складе МосСталь</p>
      </div>
      <div class="nav-features" v-if="activeNav === 3">
        <h3>Мы принимаем следующие виды оплаты</h3>
        <h4>Наличный расчёт</h4>
        <p>
          Оплату можно произвести наличными в кассе на складе МосСтальСервис по
          адресу Г Тула Торговый центр Алмазар, 4 проезд
        </p>
        <h4>Наличный расчёт</h4>
        <p>
          Оплату можно произвести наличными в кассе на складе МосСтальСервис по
          адресу 4 проезд
        </p>
        <h4>Наличный расчёт</h4>
        <p>Оплату можно произвести наличными в кассе на складе МосСталь</p>
      </div>
    </div>
  </div>
  <app-footer></app-footer>
</template>

<script>
export default {
  data() {
    return {
      root: this.$store.state.productOrder,
      cart: this.$store.state.cart,
      activeNav: 1,
      userName: "",
      userPhone: "",
      anyName: true,
      anyPhone: true,
      isSubmitted: false,
    };
  },
  methods: {
    isActive(id) {
      if (this.activeNav === id) {
        return "background-color: #ffffff";
      }
    },
    checkInput() {
      if (this.userName.trim() !== "" && this.userPhone !== "") {
        this.anyName = true;
        this.anyPhone = true;
        console.log(
          this.userName +
            " заказал " +
            this.root.quantity +
            "т, " +
            this.root.quantityMeter +
            "м " +
            this.$store.state.orderName +
            this.root.type +
            ". Платит " +
            this.root.sum +
            ". Телефон: " +
            this.userPhone
        );
      } else {
        if (this.userName.trim() === "") {
          this.anyName = false;
        }
        if (this.userPhone === "") {
          this.anyPhone = false;
        }
      }
    },
    addCart() {
      this.cart.name.push(this.root.name);
      this.cart.diameter.push(this.root.diameter);
      this.cart.type.push(this.root.type);
      this.cart.priceTonn.push(this.root.priceTonn);
      this.cart.quantityTonn.push(this.root.quantity);
      this.cart.priceTonn.push(this.root.priceTonn);
      this.cart.quantityMeter.push(this.root.quantityMeter);
      this.cart.priceMeter.push(this.root.priceMeter);
      this.cart.sum.push(this.root.sum);
      this.isSubmitted = true;
      document.querySelector(".buy-btn").textContent = "Добавлено в корзину";
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}

h1 {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
  margin-bottom: 30px;
}

.base-container {
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 50px;
  margin-bottom: 50px;
}

h4 {
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 20px;
}

.item {
  display: flex;
  justify-content: space-between;
  width: 290px;
}

.name,
.value {
  margin-bottom: 20px;
}

.item p {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}

.item a {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4971ff;
  margin-top: 20px;
}

.all-features {
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #223470;
  margin: 13px 0 30px;
}

.price {
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #1434a7;
}

.price-item {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.quantity {
  margin-right: 65px;
  position: relative;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  user-select: none;
  position: relative;
}

.buy-btn {
  width: 300px;
}

.price-value {
  position: relative;
}

.price-value.first:before {
  content: "Цена за тонну";
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #dedede;
  position: absolute;
  top: -15px;
  left: 0;
  width: max-content;
}

.price-value.second:before {
  content: "Цена за метр";
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #dedede;
  position: absolute;
  top: -15px;
  left: 0;
  width: max-content;
}

.quantity.first:after {
  content: "Тонна";
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #dedede;
  position: absolute;
  top: 2px;
  right: -62px;
}

.quantity.second:after {
  content: "Метр";
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #dedede;
  position: absolute;
  top: 2px;
  right: -62px;
}

.quantity-minus {
  margin-left: 10px;
  cursor: pointer;
}

.quantity-plus {
  margin-right: 10px;
  cursor: pointer;
}

.sum {
  display: flex;
  justify-content: space-between;
  margin: 22px 0;
}

.sum .title {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}

.buy-btn img {
  margin-right: 10px;
  margin-bottom: -3px;
}

.inputs input {
  border: 1px solid #4971ff;
  border-radius: 5px;
  background-color: #ffffff;
  width: 122px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 7px 10px;
  outline: none;
  color: #000000;
}

.inputs input:focus,
.inputs textarea:focus {
  border-color: #719ece;
  box-shadow: 0 0 10px #719ece;
}

.input input::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #dedede;
}

input.name {
  margin-right: 10px;
}

nav {
  display: flex;
  background: #f5f5f5;
  width: 100%;
}

.base-container.second {
  padding: 0;
}

.nav-item {
  padding: 22px 50px;
  cursor: pointer;
}

.nav-features {
  padding: 50px;
}

.nav-features h3 {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
}

.nav-features h4 {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #4971ff;
  margin: 30px 0 10px;
}
.nav-features p {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}

.nav-features .item .item-name p {
  font-weight: 700;
}

input.red {
  border: 1px solid #ff0000;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.order-img,
.features,
.price {
  margin: auto;
}

@media only screen and (max-width: 600px) {
  .nav-item {
    padding: 23px;
  }
}

@media only screen and (max-width: 400px) {
  .order-img img {
    height: 200px;
  }

  .base-container {
    padding: 20px;
  }

  .nav-item {
    padding: 23px 10px;
    font-size: 14px;
  }
}
</style>