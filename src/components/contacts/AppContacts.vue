<template>
  <app-header></app-header>
  <div class="container">
    <h3 class="route-link">
      <router-link to="/"> <span class="route-back">Главная</span></router-link>
      <div class="route-dash">-</div>
      <div class="route-active">Контакты</div>
    </h3>
    <div class="contacts">
      <div class="address">
        <h2>Контакты</h2>
        <div class="contacts-item">
          <h3>Адрес</h3>
          <p class="grey">Пн-Пт: 9:00 до 19:00</p>
          <p class="bold">300013, г Ташкент, Торховский проезд, д/б 1</p>
        </div>
        <div class="contacts-item">
          <h3>Телефон</h3>
          <p class="grey">Пн-Пт: 9:00 до 19:00</p>
          <p class="bold">+998(93)777-77-77</p>
        </div>
        <div class="contacts-item">
          <h3>Почта</h3>
          <p class="grey">e-mail</p>
          <p class="bold">info@mossteelsevice.ru</p>
        </div>
      </div>
      <div class="bank">
        <h2>ООО “МосСтальСервис” - Реквизиты</h2>
        <div class="contacts-item">
          <h3>ИНН/КПП</h3>
          <p class="bold">99256778523 / 36437489997</p>
        </div>
        <div class="contacts-item">
          <h3>ОГРН</h3>
          <p class="bold">252536464747474</p>
        </div>
        <div class="contacts-item">
          <h3>Ген деректор</h3>
          <p class="bold">Иванович Иван Иванов</p>
        </div>
        <div class="contacts-item">
          <h3>Банк</h3>
          <p class="bold">Хамкор банк</p>
        </div>
        <div class="contacts-item">
          <h3>Расчетный счет/БИК</h3>
          <p class="bold">0000 1111 2222 3333 4444 5555 / 124235426347</p>
        </div>
      </div>
    </div>
  </div>
  <app-footer></app-footer>
</template>

<style scoped>
h2 {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
}

h3 {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #4971ff;
  margin: 50px 0 10px;
}

.grey {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #cecece;
  margin-bottom: 10px;
}
.black {
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
}

.contacts {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

@media only screen and (max-width: 920px) {
  .contacts-item {
    width: 70%;
  }
}

@media only screen and (max-width: 590px) {
  .contacts {
    margin: 0 20px;
    display: block;
  }

  .contacts-item {
    width: 100%;
  }

  .address {
    margin-bottom: 50px;
  }

  .address h2 {
    text-align: center;
  }
}
</style>