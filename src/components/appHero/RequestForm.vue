<template>
  <div class="container">
    <div class="info">
      <h2>
        Вам нужна дополнительная информация или вы не нашли того, что искали?
      </h2>
      <p>
        Позвоните по номеру <b>+998(93)777-77-77</b> или оставьте заявку, наш
        менеджер подберет лучшее решение
      </p>
      <div class="inputs">
        <input class="name" type="text" placeholder="как вас зовут?" />
        <input class="phone" type="number" placeholder="+998(9_)___-__-__" />
        <select name="product" id="product">
          <option value="id-1">Арматура</option>
          <option value="id-2">Катанка</option>
          <option value="id-3">Уголки</option>
          <option value="id-4">Швеллер</option>
          <option value="id-5">Труба ВПГ</option>
          <option value="id-6">Труба</option>
        </select>
        <input type="number" placeholder="Кол-во тонн" />
      </div>
      <base-button>Отправить</base-button>
    </div>
    <img src="../../assets/portrait.png" alt="" />
  </div>
</template>

<style scoped>
.container {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  display: flex;
  justify-content: space-between;
  position: relative;
}

h2 {
  font-weight: 700;
  font-size: 25px;
  line-height: 150.4%;
  color: #303030;
  max-width: 570px;
}

p {
  font-weight: 400;
  font-size: 16px;
  line-height: 150.4%;
  color: #303030;
  max-width: 460px;
  margin: 40px 0 50px;
}

.info {
  margin: 100px 0 87px 100px;
}

.phone::placeholder,
.phone {
  font-weight: 400;
  font-size: 16px;
  line-height: 150.4%;
  color: #303030;
  letter-spacing: 0.1em;
}

.inputs {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 475px;
}

input,
select {
  border: none;
  background: transparent;
  border-bottom: 1px solid #303030;
  color: #000000;
  height: 25px;
  margin-bottom: 30px;
  width: 203px;
}

input + input {
  margin-left: 50px;
}

input::placeholder {
  font-weight: 400;
  font-size: 16px;
  line-height: 150.4%;
  color: #ababab;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

img {
  position: absolute;
  bottom: 0;
  right: 0;
}

textarea:focus,
input:focus,
select:focus {
  border-bottom: 1px solid #719ece;
  outline: none !important;
  box-shadow: 0 4px 5px -2px #719ece;
  transition: all .5s ease;
}

@media only screen and (max-width: 1000px) {
  img {
    display: none;
  }
}

@media only screen and (max-width: 680px) {
  .info {
    margin: 40px 20px;
    text-align: center;
  }

  p {
    margin: 40px auto 50px;
  }

  .inputs {
    margin: 0 auto 30px;
  }
  
}

@media only screen and (max-width: 500px) {
  .inputs {
    width: fit-content;
  }

  input + input {
    margin: 0 auto 30px;
  }

  input,
  select {
    margin: 0 auto 30px;
  }
}
</style>