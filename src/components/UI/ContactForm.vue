<template>
  <dialog open>
    <form @submit.prevent="submitForm()" v-if="!isSubmitted">
      <h1>Оставьте заявку и мы с вами свяжемся в самые кротчайшие сроки</h1>
      <div class="inputs">
        <select
          class="product"
          v-model="productType"
          name="product"
          id="product"
        >
          <option value="armatura">Арматура</option>
          <option value="katanka">Катанка</option>
          <option value="ugolki">Уголки</option>
          <option value="shveller">Швеллер</option>
          <option value="truba VPG">Труба ВПГ</option>
          <option value="Truba">Труба</option>
        </select>
        <div :class="noValue ? 'required' : ''">
          <input
            :class="noValue ? 'red-border value' : 'value'"
            @click="this.noValue = false"
            v-model="howMuch"
            type="number"
            placeholder="Кол-во тонн"
          />
        </div>
        <div :class="noName ? 'required' : ''">
          <input
            :class="noName ? 'red-border name' : 'name'"
            @click="this.noName = false"
            v-model="userName"
            type="text"
            placeholder="Ваше имя"
          />
        </div>
        <div :class="noNumber ? 'required' : ''">
          <input
            :class="noNumber ? 'red-border phone' : 'phone'"
            @click="this.noNumber = false"
            v-model="phoneNumber"
            type="tel"
            placeholder="+998(9_)___-__-__"
          />
        </div>
        <base-button @click="submitForm() ? isSubmitted = true : isSubmitted = false">Отправить</base-button>
      </div>
      <img class="img" src="../../assets/contact-man.png" alt="" />
    </form>
    <div class="submitted" v-if="isSubmitted">
      <img class="submitted-img" src="../../assets/submitted.svg" alt="">
      <h2>Ваша заявка отправлен. Мы свяжемся с вами в ближайшее время.</h2>
    </div>
  </dialog>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      phoneNumber: "",
      productType: "armatura",
      howMuch: "",
      noName: false,
      noNumber: false,
      noValue: false,
      isSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      if (
        this.userName.trim() !== "" &&
        !isNaN(parseInt(this.phoneNumber)) &&
        !isNaN(parseInt(this.howMuch))
      ) {
        this.noName = false;
        this.noNumber = false;
        this.noValue = false;
        console.log(
          this.userName +
            " " +
            " заказал " +
            this.howMuch +
            " тонн " +
            this.productType +
            ", тел: " +
            this.phoneNumber
        );
        return true
      } else {
        if (this.userName.trim() === "") {
          this.noName = true;
        }
        if (isNaN(parseInt(this.phoneNumber))) {
          this.noNumber = true;
        }
        if (isNaN(parseInt(this.howMuch))) {
          this.noValue = true;
        }
        return false
      }
    },
  },
  emits: ["close"],
};
</script>

<style scoped>
.bg-close {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  background: #ffffff;
  width: 914px;
  height: 354px;
  padding: 63px 50px;
  z-index: 1000001;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  border-radius: 12px;
  border: none;
  overflow: hidden;
  animation: fadein .5s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

input,
select {
  border: 1px solid #4971ff;
  background-color: #fff;
  margin-bottom: 20px;
}

.required {
  position: relative;
}

.required:after {
  content: "Обязательное поле";
  color: #fd1818;
  font-weight: 700;
  font-size: 10px;
  position: absolute;
  left: 0;
  top: -13px;
}

.red-border {
  border: 1px solid #fd1818;
  position: relative;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

.inputs {
  display: flex;
  flex-wrap: wrap;
  max-width: 456px;
  justify-content: space-between;
}

.value::placeholder {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #cecece;
}

.product {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}

.name::placeholder,
.phone::placeholder {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #cecece;
}

input:focus,
textarea:focus,
select:focus {
  outline: none !important;
  border-color: #719ece;
  box-shadow: 0 0 10px #719ece;
}

h1 {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
  max-width: 522px;
  margin-bottom: 50px;
}

.name,
.phone {
  width: 450px;
  color: #000000;
  padding-left: 33px;
  height: 46px;
}

.product {
  width: 220px;
  color: #000000;
  padding-left: 33px;
  height: 50px;
}

.value {
  color: #000000;
  height: 46px;
  padding-left: 33px;
}

.img {
  position: absolute;
  bottom: 0;
  right: 50px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.submitted {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.submitted h2 {
  color: #4971ff;
  text-align: center;
}

.submitted-img {
  margin: 0 132px 20px;
}

@media only screen and (max-width: 1024px) {
  form h1 {
    text-align: center;
    margin: 0 auto 50px;
  }

  .inputs {
    margin: auto;
    z-index: 10;
    max-width: 487px;
  }

  .inputs button {
    margin: auto;
  }

  img {
    display: none;
  }
}

@media only screen and (max-width: 520px) {
  .inputs {
    display: block;
  }

  .product {
    width: 100%;
  }

  .value,
  .name,
  .phone {
    width: 92%;
  }

  dialog {
    padding: 20px 50px 100px;
    width: 100%;
  }

  form h1 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  .inputs button {
    display: table;
  }

  form {
    padding: 0 20px;
  }
}
</style>