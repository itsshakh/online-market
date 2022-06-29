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
      <div class="route-active">{{ $store.state.orderName }}</div>
    </h3>
    <div class="product">
      <h1>{{ $store.state.orderName }}</h1>
      <div class="filter">
        <div class="view">
          <div class="filter-name">Вид:</div>
          <div
            class="filter-item"
            v-for="view in views"
            :key="view.id"
            @click="(view.isActive = !view.isActive), removeDiameter(view)"
            :class="{ active: view.isActive }"
          >
            {{ view.name }}
          </div>
        </div>
        <div class="diameter">
          <div class="filter-name">Диаметр:</div>
          <div
            class="filter-item"
            v-for="diameter in diameters"
            :key="diameter.id"
            @click="
              (diameter.isActive = !diameter.isActive), removeDiameter(diameter)
            "
            :class="{ active: diameter.isActive }"
          >
            {{ diameter.value }}мм
          </div>
        </div>
      </div>
      <table class="product-menu">
        <tr class="product-item-name">
          <th>Продукция</th>
          <th>Размер</th>
          <th>Длина мм</th>
          <th>Цена</th>
          <th>Тонна</th>
          <th>Купить</th>
        </tr>
        <tr
          class="product-item"
          v-for="product in activeCards"
          :key="product.id"
        >
          <td>{{ product.name }}</td>
          <td>{{ product.size }}</td>
          <td>{{ product.leng }}</td>
          <td>{{ product.price }}</td>
          <td>
            <span
              class="quantity-minus"
              @click="
                product.quantity > 0
                  ? product.quantity--
                  : (product.quantity = 0)
              "
              >-</span
            >
            {{ product.quantity }}
            <span class="quantity-plus" @click="product.quantity++">+</span>
          </td>
          <td>
            <router-link to="/catalogue/product/order">
              <base-button @click="productInfos(product)">
                <img src="../../assets/buy-btn.svg" alt="" />
              </base-button>
            </router-link>
          </td>
        </tr>
      </table>
      <div class="product-menu-cards">
        <div
          class="product-menu-cards-item"
          v-for="product in activeCards"
          :key="product.id"
        >
          <div class="product-menu-card-name">
            {{ product.name }}
          </div>
          <div class="product-menu-card-features">
            Размер: {{ product.size }}
          </div>
          <div class="product-menu-card-features">
            Длина: {{ product.leng }}
          </div>
          <div class="product-menu-card-price">
            {{ product.price }}
          </div>
          <div class="product-menu-card-quantity">
            <span
              class="quantity-minus"
              @click="
                product.quantity > 0
                  ? product.quantity--
                  : (product.quantity = 0)
              "
              >-</span
            >
            {{ product.quantity }}
            <span class="quantity-plus" @click="product.quantity++">+</span>
          </div>
          <div class="product-menu-card-buy">
            <router-link to="/catalogue/product/order">
              <base-button class="product-menu-card-btn" @click="productInfos(product)">
                <img src="../../assets/buy-btn.svg" alt="" />
              </base-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-footer></app-footer>
</template>

<script>
export default {
  data() {
    return {
      diameters: [
        {
          value: 6,
          isActive: false,
        },
        {
          value: 12,
          isActive: false,
        },
        {
          value: 3,
          isActive: false,
        },
        {
          value: 25,
          isActive: false,
        },
        {
          value: 14,
          isActive: false,
        },
        {
          value: 7,
          isActive: false,
        },
      ],
      views: [
        {
          name: "Рефленная А500с",
          value: "a500c",
          isActive: false,
        },
        {
          name: "Рефленная А30",
          value: "a30",
          isActive: false,
        },
        {
          name: "Гладкая А42",
          value: "a42",
          isActive: false,
        },
        {
          name: "Гладкая А1",
          value: "a1",
          isActive: false,
        },
        {
          name: "Катанка",
          value: "katanka",
          isActive: false,
        },
      ],
      products: [
        {
          name: "Арматура А500с",
          size: 6,
          leng: "6000",
          price: 120,
          quantity: 1,
          quantityMeter: 0,
          diameter: [12],
          type: "a500c",
          weight: "0,8 кг",
          gost: "34028-2016",
          priceMeter: 12,
        },
        {
          name: "Арматура 6мм",
          size: 12,
          leng: "Мотки",
          price: 250,
          quantity: 1,
          quantityMeter: 0,
          diameter: [6],
          type: "a1",
          weight: "0,5 кг",
          gost: "34529-2016",
          priceMeter: 20,
        },
        {
          name: "Арматура А30",
          size: 42,
          leng: "Мотки",
          price: 100,
          quantity: 1,
          quantityMeter: 0,
          diameter: [14],
          type: "a30",
          weight: "1,5 кг",
          gost: "34289-2016",
          priceMeter: 11,
        },
        {
          name: "Арматура 25мм",
          size: 25,
          leng: "Мотки",
          price: 500,
          quantity: 1,
          quantityMeter: 0,
          diameter: [25],
          type: "a1",
          weight: "1 кг",
          gost: "34167-2016",
          priceMeter: 16,
        },
        {
          name: "Арматура 14мм",
          size: 3,
          leng: "3552",
          price: 150,
          quantity: 1,
          quantityMeter: 0,
          diameter: [7],
          type: "a1",
          weight: "0,7 кг",
          gost: "34495-2016",
          priceMeter: 19,
        },
        {
          name: "Арматура А42",
          size: 7,
          leng: "Мотки",
          price: 250,
          quantity: 1,
          priceMeter: 11,
          quantityMeter: 0,
          diameter: [3],
          type: "a42",
          weight: "0,9 кг",
          gost: "34358-2016",
        },
      ],
      // ],
      selectedTags: [],
    };
  },
  methods: {
    productInfos(value) {
      const root = this.$store.state.productOrder;
      root.name = value.name;
      root.quantity = value.quantity;
      root.quantityMeter = value.quantityMeter;
      root.diameter = value.diameter[0];
      root.type = value.type.toUpperCase();
      root.weight = value.weight;
      root.gost = value.gost;
      root.priceMeter = value.priceMeter + "$";
      root.priceTonn = value.price + "$";
      root.sum =
        value.priceMeter * value.quantityMeter + value.price * value.quantity;
    },
    removeDiameter(filter) {
      if (!this.selectedTags.includes(filter.value)) {
        this.selectedTags.push(filter.value);
      } else {
        let index = this.selectedTags.indexOf(filter.value);
        if (index > -1) {
          this.selectedTags.splice(index, 1);
        }
      }
      console.log(this.selectedTags);
    },
  },
  computed: {
    activeCards: function () {
      if (this.selectedTags.length == 0) return this.products;

      var activeCards = [];
      var filters = this.selectedTags;

      for (let i = 0; i < this.products.length; i++) {
        if (
          filters.includes(this.products[i].diameter[0]) ||
          filters.includes(this.products[i].type)
        ) {
          activeCards.push(this.products[i]);
        }
        console.log(filters.includes(this.products[i].type));
      }
      return activeCards;
    },
  },
};
</script>

<style scoped>
.product {
  text-align: center;
  user-select: none;
}

.filter {
  display: inline-block;
  background: #eef1f3;
  border-radius: 5px;
  margin: 30px 0 50px;
  padding: 30px;
}

h1 {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
}

.filter-name {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #4971ff;
  margin: auto 0;
  margin-right: 20px;
}

.filter-item {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  background-color: #ffffff;
  padding: 4px 17px;
  border-radius: 10px;
  cursor: pointer;
}

.filter-item + .filter-item {
  margin-left: 20px;
}

.view {
  margin-bottom: 20px;
}

.view,
.diameter {
  display: flex;
  flex-wrap: wrap;
}

.active {
  color: #ffffff;
  background-color: #4971ff;
}

.product-item-name {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #4971ff;
  background: #eef1f3;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  padding: 9px 0;
  border: none;
}

td {
  padding: 14px 0;
}

tr:hover {
  border: 1px solid #eef1f3;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
}

.product-item-name:hover {
  box-shadow: none;
  border: none;
}

td button {
  padding: 8px 20px 2px;
}

.quantity-minus {
  margin-left: 10px;
  cursor: pointer;
}

.quantity-plus {
  margin-right: 10px;
  cursor: pointer;
}

.product-menu-cards {
  display: none;
  flex-wrap: wrap;
  margin: 20px;
}

.product-menu-cards-item {
  width: 49%;
  border: 1px solid #eef1f3;
  padding-bottom: 20px;
}

.product-menu-card-name {
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #4971ff;
  margin: 20px 0;
}

.product-menu-card-features {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #cecece;
  margin-bottom: 5px;
}

.product-menu-card-price {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #4971ff;
  margin: 15px 0 20px;
}

.product-menu-card-quantity {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}

.product-menu-card-btn {
  padding: 8px 50px 6px;
  margin-top: 20px;
}

@media only screen and (max-width: 950px) {
  .filter-item {
    margin: 10px 0;
    font-size: 14px;
  }

  .filter-name {
    font-size: 14px;
  }

  .view {
    margin-bottom: 0;
  }
}

@media only screen and (max-width: 500px) {
  .product-menu {
    display: none;
  }

  .product-menu-cards {
    display: flex;
  }
}

@media only screen and (max-width: 330px) {
  .product-menu-cards-item {
    width: 100%;
  }
}

@media only screen and (max-width: 280px) {
  .filter-item + .filter-item {
    margin-left: 0;
  }
}
</style>