<template>
  <div class="container">
    <h2>Отзывы наших клиентов</h2>
    <div class="cards">
      <div class="card-item">
        <h3>ООО “Строй сити”</h3>
        <p>
          Каждая партия металлопроката проходит жесткий контроль качества и
          обязательную сертификацию Каждая партия металлопроката проходит
          жесткий контроль качества и обязательную сертификацию
        </p>
      </div>
      <div class="card-item">
        <h3>ООО “Строй сити”</h3>
        <p>
          Каждая партия металлопроката проходит жесткий контроль качества и
          обязательную сертификацию Каждая партия металлопроката проходит
          жесткий контроль качества и обязательную сертификацию
        </p>
      </div>
    </div>
    <base-button class="button">Все отзывы</base-button>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
  margin-bottom: 50px;
}

h3 {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #4971ff;
  margin-bottom: 30px;
}

p {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card-item {
  padding: 44px 78px 74px 99px;
  background: #eef1f3;
  border-radius: 5px;
  position: relative;
  width: 425px;
  margin-bottom: 10px;
}

.card-item:before {
  content: "";
  background: url("../../assets/person.svg");
  height: 49px;
  width: 49px;
  position: absolute;
  top: 35px;
  left: 35px;
}

.button {
  margin: 25px auto 50px;
  position: relative;
  left: 41%;
}

.button:after {
  content: "";
  background-color: #698aff !important;
  position: absolute;
  background: url("../../assets/plus.svg") no-repeat;
  padding: 16.5px 22px;
  height: 13px;
  width: 13px;
  top: 0;
  right: -50px;
  border-radius: 5px;
  background-position: center;
}

@media only screen and (max-width: 1214px) {
  h2 {
    text-align: center;
  }
}

@media only screen and (max-width: 500px) {
  .card-item {
    padding: 44px 20px 74px 38px;
  }

  .button {
    left: 30%;
  }
}
</style>