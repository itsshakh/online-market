<template>
  <div class="container">
    <div class="hero-banner carousel-container">
      <h2>Специальные цены на катанку</h2>
      <p>Только до конца снижение цен на весь ассортимент катанки</p>
      <router-link to="/catalogue">
        <base-button class="button">В каталог</base-button>
      </router-link>
      <button class="btn btn-prev"></button>
      <button class="btn btn-next"></button>
    </div>
  </div>
</template>

<style scoped>
.hero-banner {
  background-image: url("../../assets/hero-banner.png");
  background-repeat: no-repeat;
  padding: 50px;
  color: #ffffff;
  position: relative;
}
h2 {
  font-weight: 700;
  font-size: 35px;
  line-height: 43px;
  width: 376px;
}
p {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  width: 376px;
  margin: 20px 0 27px;
}

.button {
  position: relative;
}

.button:after {
  content: "";
  background-color: #698aff !important;
  position: absolute;
  background: url("../../assets/plus.svg") no-repeat;
  padding: 16px 22px;
  height: 13px;
  width: 13px;
  top: 0;
  right: -50px;
  border-radius: 5px;
  background-position: center;
}

.btn {
  border: none;
  cursor: pointer;
  width: 45px;
  height: 35px;
}

.btn:hover {
  background-color: #4971ff !important;
}

.btn-prev {
  background: url("../../assets/left-arrow.svg") #4971ff no-repeat center;
  position: absolute;
  right: 50px;
  bottom: 19px;
}

.btn-next {
  background: url("../../assets/left-arrow.svg") #4971ff no-repeat center;
  transform: rotate(180deg);
  position: absolute;
  right: 0px;
  bottom: 19px;
  border-radius: 5px 0 0 0;
}

@media only screen and (max-width: 470px) {
  h2 {
    width: 315px;
  }

  p {
    width: 285px;
    margin: 10px 0;
  }

  .hero-banner {
    padding: 27px 15px 40px;
  }

  .btn {
    top: 87%;
  }
}
</style>