<template>
  <div class="container">
    <h2>Почему выберают нас</h2>
    <div class="cards">
      <div class="card-item">
        <div class="card-item-img">
          <img src="../../assets/security.svg" alt="" />
        </div>
        <div class="card-item-info">
          <h3>Собсвенное производство</h3>
          <p>
            Мы работаем без посредников, что значительно сокращает сроки и
            стоимость поставок
          </p>
        </div>
      </div>
      <div class="card-item">
        <div class="card-item-img">
          <img src="../../assets/card.svg" alt="" />
        </div>
        <div class="card-item-info">
          <h3>Гарантия качества продукции</h3>
          <p>
            Каждая партия металлопроката проходит жесткий контроль качества и
            обязательную сертификацию
          </p>
        </div>
      </div>
      <div class="card-item">
        <div class="card-item-img">
          <img src="../../assets/date.svg" alt="" />
        </div>
        <div class="card-item-info">
          <h3>Удобные сособы оплаты</h3>
          <p>Более 10 способов оплаты, также возможны кредит и рассрочка</p>
        </div>
      </div>
      <div class="card-item">
        <div class="card-item-img">
          <img src="../../assets/money.svg" alt="" />
        </div>
        <div class="card-item-info">
          <h3>Гиюкое ценообразование</h3>
          <p>
            Полный ассортимент металлопроката по выгодным ценам от производителя
          </p>
        </div>
      </div>
      <div class="card-item">
        <div class="card-item-img">
          <img src="../../assets/delivery.svg" alt="" />
        </div>
        <div class="card-item-info">
          <h3>Доставка в срок, по всей России</h3>
          <p>
            Собственный автопарк позволяет осуществлять доставку в короткие
            сроки
          </p>
        </div>
      </div>
      <div class="card-item">
        <div class="card-item-img">
          <img src="../../assets/security.svg" alt="" />
        </div>
        <div class="card-item-info">
          <h3>Гарантия качества продукции</h3>
          <p>
            Каждая партия металлопроката проходит жесткий контроль качества и
            обязательную сертификацию
          </p>
        </div>
      </div>
    </div>
    <div class="banner">
      <h1>Металлопрокат с доставкой по всей России</h1>
      <p>Доставляем металлопрокат по всей России. Быстро. Выгодно. Надёжно.</p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
  margin-top: 100px;
}

h3 {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #4971ff;
  margin-bottom: 10px;
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
}

.card-item {
  display: flex;
  width: 484px;
  height: 70px;
  margin-top: 50px;
}

.card-item:nth-child(even) {
  margin-left: 150px;
}

.card-item-img {
  margin: auto 20px auto 0;
}

.banner {
  margin: 50px 0 100px;
  background: linear-gradient(270deg, #2F489E 0%, #203067 100%);
  padding: 42px 30px;
  position: relative;
}

.banner::after {
  content: '';
  background: url("../../assets/why-us.png") no-repeat center;
  width: 379px;
  height: 149px;
  position: absolute;
  right: 50px;
  bottom: 0;
}

h1 {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 15px;
}

.banner p {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}

@media only screen and (max-width: 1160px) {
  .card-item {
    width: 400px;
    height: 90px;
  }
}

@media only screen and (max-width: 1100px) {
  .banner {
    padding-right: 44vw;
  }

  .banner::after {
    height: 199px;
  }
}

@media only screen and (max-width: 990px) {
  .card-item {
    width: 320px;
    height: 150px;
  }
}

@media only screen and (max-width: 940px) {
  .banner {
    padding-right: 65vw;
  }
}

@media only screen and (max-width: 860px) {
  .card-item,
  .card-item:nth-child(even) {
    margin: 10px auto;
  }

  .card-item:nth-child(2),
  .card-item:nth-child(6) {
    height: 170px;
  }

  .cards {
    display: block;
  }
  
  h2 {
    text-align: center;
  }
}

@media only screen and (max-width: 690px) {
  .banner {
    padding-right: 30px;
    height: 270px;
  }

  .banner::after {
    left: 90px;
  }
}

@media only screen and (max-width: 500px) {
  .banner::after {
    left: 50px;
  }

  .banner {
    height: 320px;
  }
}

@media only screen and (max-width: 430px) {
  .banner::after {
    left: 10px;
  }
}

@media only screen and (max-width: 300px) {
  .banner {
    height: 370px;
  }

  .banner::after {
    left: 2px;
  }

  .card-item-img {
    display: none;
  }

  .card-item {
    padding: 0 10px;
    width: 85%;
  }
}
</style>