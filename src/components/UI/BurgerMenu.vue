<template>
  <div class="burger">
    <div class="title">
      <p>Стальные гарантии</p>
      <h1>Мос <span class="blue">Сталь</span>Сервис</h1>
      <p>Интернет магазин металлопроката</p>
      <div class="close"><img src="../../assets/close.svg" alt="" /></div>
    </div>
    <ul>
      <li><a href="#">Арматура</a></li>
      <li><a href="#">Катанка</a></li>
      <li><a href="#">Угалок стальной</a></li>
      <li><a href="#">Швеллер</a></li>
      <li><a href="#">Труба ВПГ</a></li>
      <li><a href="#">Труба профильная</a></li>
    </ul>
  </div>
</template>

<style scoped>
.burger {
  background-color: #ffffff;
  /* opacity: 0.9; */
  position: absolute;
  top: 0;
  z-index: 999;
  padding-top: 60px;
  height: 100%;
  width: 750px;
  position: fixed;
  margin-left: -355px;
}

.title {
  margin-bottom: 120px;
  position: relative;
  left: 355px;
}

.close {
  position: absolute;
  right: 415px;
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

a {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 40px;
  transition: all 0.3s ease;
}

a:hover {
  color: #4971ff;
}

ul {
  list-style: none;
  padding: 0;
  left: 355px;
  position: relative;
}

li {
  margin-bottom: 40px;
  position: relative;
}

li:after {
  content: "";
  background: url("../../assets/burger-add.svg");
  height: 23px;
  width: 23px;
  position: absolute;
  right: 455px;
}
</style>