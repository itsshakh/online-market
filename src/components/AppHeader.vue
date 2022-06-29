<template>
  <div class="container">
    <div class="navbar">
      <nav>
        <div class="nav-item"><router-link to="">О компании</router-link></div>
        <div class="nav-item">
          <router-link to="">Как заказать</router-link>
        </div>
        <div class="nav-item"><router-link to="">Доставка</router-link></div>
        <div class="nav-item"><router-link to="">Оплата</router-link></div>
        <div class="nav-item"><router-link to="">Отзывы</router-link></div>
        <div class="nav-item">
          <router-link to="/contacts">Контакты</router-link>
        </div>
      </nav>
      <div class="social">
        <div class="soc-item">
          <a href="#"
            ><svg
              class="tg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="#5E5E5E"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 7C14 10.8657 10.8657 14 7 14C3.13425 14 0 10.8657 0 7C0 3.13425 3.13425 0 7 0C10.8657 0 14 3.13425 14 7ZM7.25083 5.16775C6.57008 5.45067 5.20917 6.03692 3.16867 6.92592C2.83733 7.05775 2.6635 7.18667 2.64775 7.31267C2.62092 7.52617 2.88808 7.61017 3.25092 7.72392C3.3005 7.73967 3.35183 7.75542 3.40433 7.77292C3.76192 7.889 4.24258 8.02492 4.49225 8.03017C4.71917 8.03483 4.97233 7.9415 5.25175 7.75017C7.15808 6.46275 8.14217 5.81233 8.204 5.79833C8.24775 5.78842 8.30842 5.77558 8.34925 5.81233C8.39008 5.8485 8.386 5.91733 8.38192 5.936C8.35508 6.04858 7.30858 7.02217 6.76608 7.52617C6.59692 7.68308 6.47733 7.7945 6.45283 7.82017C6.398 7.87675 6.342 7.931 6.28833 7.98292C5.95583 8.30258 5.70733 8.54292 6.30233 8.93492C6.58817 9.12333 6.81683 9.27908 7.04492 9.43425C7.294 9.604 7.5425 9.77317 7.8645 9.98433C7.94617 10.038 8.02433 10.0934 8.10075 10.1477C8.39067 10.3547 8.65142 10.5402 8.97342 10.5111C9.16008 10.4936 9.35375 10.318 9.45175 9.79358C9.68333 8.55342 10.1395 5.86775 10.2451 4.76058C10.2515 4.66866 10.2476 4.5763 10.2334 4.48525C10.2249 4.41171 10.1891 4.34404 10.1331 4.29567C10.0497 4.22742 9.92017 4.21283 9.86183 4.214C9.59875 4.21867 9.19508 4.35925 7.25083 5.16775Z"
              />
            </svg>
          </a>
        </div>
        <div class="soc-item">
          <a href="#"
            ><svg
              class="fb"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="#5E5E5E"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 7.03908C0 10.5192 2.52758 13.4132 5.83333 14V8.94425H4.08333V7H5.83333V5.44425C5.83333 3.69425 6.96092 2.72242 8.55575 2.72242C9.06092 2.72242 9.60575 2.8 10.1109 2.87758V4.66667H9.21667C8.36092 4.66667 8.16667 5.09425 8.16667 5.63908V7H10.0333L9.72242 8.94425H8.16667V14C11.4724 13.4132 14 10.5198 14 7.03908C14 3.1675 10.85 0 7 0C3.15 0 0 3.1675 0 7.03908Z"
              />
            </svg>
          </a>
        </div>
        <div class="soc-item">
          <a href="#"
            ><svg
              class="ig"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="#5E5E5E"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99999 4.68049C5.72279 4.68049 4.68049 5.72279 4.68049 6.99999C4.68049 8.27719 5.72279 9.31948 6.99999 9.31948C8.27719 9.31948 9.31948 8.27719 9.31948 6.99999C9.31948 5.72279 8.27719 4.68049 6.99999 4.68049ZM13.9567 6.99999C13.9567 6.03948 13.9654 5.08767 13.9115 4.12889C13.8576 3.01526 13.6035 2.02691 12.7892 1.21256C11.9731 0.396473 10.9865 0.144165 9.87282 0.0902231C8.91231 0.0362814 7.9605 0.0449817 7.00173 0.0449817C6.04122 0.0449817 5.08941 0.0362814 4.13064 0.0902231C3.017 0.144165 2.02865 0.398213 1.2143 1.21256C0.398213 2.02865 0.145904 3.01526 0.0919626 4.12889C0.0380209 5.08941 0.0467212 6.04122 0.0467212 6.99999C0.0467212 7.95876 0.0380209 8.91231 0.0919626 9.87108C0.145904 10.9847 0.399953 11.9731 1.2143 12.7874C2.03039 13.6035 3.017 13.8558 4.13064 13.9098C5.09115 13.9637 6.04296 13.955 7.00173 13.955C7.96224 13.955 8.91405 13.9637 9.87282 13.9098C10.9865 13.8558 11.9748 13.6018 12.7892 12.7874C13.6052 11.9713 13.8576 10.9847 13.9115 9.87108C13.9672 8.91231 13.9567 7.9605 13.9567 6.99999ZM6.99999 10.5688C5.02502 10.5688 3.43113 8.97495 3.43113 6.99999C3.43113 5.02502 5.02502 3.43113 6.99999 3.43113C8.97495 3.43113 10.5688 5.02502 10.5688 6.99999C10.5688 8.97495 8.97495 10.5688 6.99999 10.5688ZM10.715 4.11845C10.2539 4.11845 9.88152 3.74608 9.88152 3.28497C9.88152 2.82385 10.2539 2.45148 10.715 2.45148C11.1761 2.45148 11.5485 2.82385 11.5485 3.28497C11.5486 3.39446 11.5272 3.50291 11.4853 3.60409C11.4435 3.70528 11.3821 3.79721 11.3047 3.87464C11.2273 3.95206 11.1353 4.01345 11.0341 4.05529C10.933 4.09713 10.8245 4.11859 10.715 4.11845Z"
              /></svg
          ></a>
        </div>
      </div>
    </div>
    <hr />
    <div class="logo">
      <p>Стальные гарантии</p>
      <h2>Мос<span class="blue">Сталь</span>Сервис</h2>
      <p>Интернет магазин металлопроката</p>
    </div>
    <div class="searchbar">
      <div class="burger-btn" @click="isOpen = true">
        <img src="../assets/hamburger.svg" alt="" />
      </div>
      <div class="burger-btn-small" @click="isOpen = true">
        <img src="../assets/hamburger-small.svg" alt="" />
        <div>Меню</div>
      </div>
      <div
        :style="
          isOpen
            ? 'margin-left: -355px; opacity: 1; display: block'
            : 'margin-left: -760px; opacity: 0; display: none'
        "
        class="burger"
      >
        <div @click="isOpen = false" class="close">
          <img src="../assets/close.svg" alt="" />
        </div>
        <div class="title">
          <p>Стальные гарантии</p>
          <h1>Мос <span class="blue">Сталь</span>Сервис</h1>
          <p>Интернет магазин металлопроката</p>
        </div>
        <ul>
          <li><router-link to="/catalogue/product">Арматура</router-link></li>
          <li><router-link to="/catalogue/product">Катанка</router-link></li>
          <li>
            <router-link to="/catalogue/product">Угалок стальной</router-link>
          </li>
          <li><router-link to="/catalogue/product">Швеллер</router-link></li>
          <li><router-link to="/catalogue/product">Труба ВПГ</router-link></li>
          <li>
            <router-link to="/catalogue/product">Труба профильная</router-link>
          </li>
        </ul>
        <base-button
          class="relative"
          @click="(isFormOpen = true), (isOpen = false)"
          >Нужна консультация</base-button
        >
      </div>
      <div class="contact">
        <p class="grey">Пн-Пт: 9:00 до 19:00</p>
        <p class="bold">+998 (93) 777-77-77</p>
      </div>
      <div class="search">
        <input type="text" placeholder="Поиск по сайту" class="place" />
        <input type="text" class="empty" />
      </div>
      <router-link to="/cart">
        <div class="basket">
          <p class="black">Ваша корзина</p>
          <p class="blue">
            {{ $store.state.cart.sum.reduce((a, b) => a + b, 0) }}$
          </p>
        </div>
        <div class="basket-small">
          <img src="../assets/basket-small.svg" alt="" />
        </div>
      </router-link>
    </div>
    <div class="bg-close" v-if="isFormOpen" @click="isFormOpen = false"></div>
    <contact-form v-if="isFormOpen"></contact-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      form: false,
      isFormOpen: false,
    };
  },
};
</script>

<style scoped>
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.container {
  margin-bottom: 80px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}

nav,
.social {
  display: flex;
  justify-content: space-between;
}

.searchbar {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  vertical-align: middle;
}

.nav-item a {
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #5468cb;
  display: inline-block;
  margin: 0;
}

.nav-item a:after {
  content: "";
  display: block;
  width: 0;
  height: 3px;
  background: #5468cb;
  transition: width 0.3s;
}

.nav-item a:hover:after {
  width: 100%;
}

.nav-item + .nav-item {
  margin-left: 50px;
}

.soc-item:hover {
  transform: scale(1.2);
}

.soc-item {
  transition: all 0.3s ease;
}

.soc-item + .soc-item {
  margin-left: 20px;
}

li a {
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #5468cb;
}

hr {
  color: #eef1f3;
  height: 0;
  margin-top: -20px;
}

.hamburger {
  background: #eef1f3;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 12px 30px;
}

.hamburger,
.contact,
.search,
.basket {
  margin: auto 0;
}

p.grey {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #cecece;
}

p.bold {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
}

p.black {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #5e5e5e;
}

p.blue {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #4971ff;
}

.logo {
  display: none;
  margin: 20px;
}

.logo p {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}

.logo h2 {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
}

.logo h2 .blue {
  color: #4971ff;
}

.search input {
  background: #f5f5f5;
  border-radius: 5px;
  border: none;
  width: 610px;
  padding: 10px 20px;
}

.search input.empty {
  display: none;
}

.search {
  position: relative;
}

.search input {
  color: #4971ff;
  font-weight: 700;
}

.search input::placeholder {
  font-weight: 400;
}

.search input:focus {
  outline: none !important;
  border-color: #719ece;
  box-shadow: 0 0 10px #719ece;
}
.search textarea:focus {
  outline: none !important;
  border-color: #719ece;
  box-shadow: 0 0 10px #719ece;
}

.search:after {
  content: "";
  background: url("../assets/search.svg") no-repeat;
  position: absolute;
  width: 15px;
  height: 14px;
  top: 13px;
  right: 20px;
}

.basket {
  position: relative;
  margin-left: 45px;
}

.basket .blue {
  text-align: right;
}

.basket:before {
  content: "";
  background: url("../assets/basket.svg");
  position: absolute;
  width: 34px;
  height: 31px;
  left: -40px;
  top: 3px;
}

.basket-small {
  display: none;
  background-color: #223470;
  height: 41px;
}

.basket-small img {
  margin: 11px 40px 13px;
}

svg {
  transition: all 0.5s ease;
}

svg:hover {
  fill: #4971ff;
  transition: all 0.5s ease;
}

.burger {
  background-color: #ffffff;
  /* opacity: 0.9; */
  position: absolute;
  top: 0;
  z-index: 999;
  padding-top: 60px;
  padding-left: 30px;
  height: 560px;
  width: 750px;
  transition: all 0.5s ease;
  animation: fadein 0.5s;
}

.title {
  margin-bottom: 60px;
  position: relative;
  left: 355px;
}

.close {
  position: absolute;
  right: 30px;
  top: 25px;
  transition: all 0.3s ease;
}

.close:hover {
  transform: scale(1.2);
}

p {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}

h1 {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
}

.blue {
  color: #4971ff;
}

.burger a {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 40px;
  transition: all 0.3s ease;
}

.burger a:hover {
  color: #4971ff;
}

ul {
  list-style: none;
  padding: 0;
  left: 355px;
  position: relative;
  margin-bottom: 50px;
}

li {
  margin-bottom: 40px;
  position: relative;
}

li:after {
  content: "";
  background: url("../assets/burger-add.svg");
  height: 23px;
  width: 23px;
  position: absolute;
  right: 455px;
}

.burger-btn {
  margin: auto 0;
}

.burger-btn img:hover {
  transform: scale(1.1);
}

.burger-btn-small {
  margin: auto 0;
  background-color: #4971ff;
  width: 50%;
  height: 41px;
  color: #ffffff;
  display: none;
}

.burger-btn-small div {
  margin: auto;
}

.burger-btn-small img {
  padding: 14px;
}

.bg-close {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.relative {
  position: absolute;
  right: 135px;
}

@media only screen and (max-width: 1100px) {
  .search input {
    max-width: 400px;
  }

  p.bold {
    font-size: 15px;
  }

  p.grey {
    font-size: 13px;
  }
}

@media only screen and (max-width: 1024px) {
  .search input {
    max-width: 400px;
  }
}

@media only screen and (max-width: 860px) {
  .container {
    margin-bottom: 0;
  }

  .navbar,
  hr {
    display: none;
  }

  .search input {
    max-width: 300px;
  }
}

@media only screen and (max-width: 740px) {
  .contact {
    display: none;
  }
}

@media only screen and (max-width: 590px) {
  .container {
    margin: 0;
  }

  .search input {
    width: 95px;
  }
  .search input.place {
    display: none;
  }

  .search input.empty {
    display: inline-block;
    width: 27vw;
    border-radius: 0;
    height: 20px;
  }

  .search::after {
    right: 5px;
  }

  .logo {
    display: inline-block;
  }

  .searchbar {
    margin: 0;
  }

  .basket {
    display: none;
  }

  .basket-small {
    display: inline-block;
  }

  .burger-btn {
    display: none;
  }

  .burger-btn-small {
    display: flex;
  }

  .burger .title {
    display: none;
  }

  .burger {
    width: 700px;
  }

  .close {
    right: 10px;
  }

  .relative {
    right: 70px;
  }

  li:after {
    right: 400px;
  }
}
</style>

<style>
@media only screen and (max-width: 1250px) {
  .container {
    margin: 0 20px;
  }
}

@media only screen and (max-width: 1214px) {
  body {
    overflow-x: hidden;
  }
}

@media only screen and (max-width: 1100px) {
  .container {
    margin: 0 20px;
  }
}

@media only screen and (max-width: 590px) {
  .container {
    margin: 0;
  }
}
</style>