import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'

import App from './App.vue'

import BaseButton from './components/UI/BaseButton.vue'
import ContactForm from './components/UI/ContactForm.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HeroCard from "./components/appHero/HeroCard.vue"

import AppHome from './components/AppHome.vue'
import AppCatalog from './components/catalog/AppCatalog.vue'
import ProductInfo from './components/products/ProductInfo.vue'
import AppContacts from './components/contacts/AppContacts.vue'
import ProductOrder from './components/products/ProductOrder.vue'
import AppCart from './components/appCart/AppCart.vue'
import AppCheckout from './components/appCart/AppCheckout.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppHome },
        { path: '/cart', component: AppCart },
        { path: '/cart/checkout', component: AppCheckout },
        { path: '/contacts', component: AppContacts },
        { path: '/catalogue', component: AppCatalog },
        { path: '/catalogue/product', component: ProductInfo },
        { path: '/catalogue/product/order', component: ProductOrder },
    ],
    scrollBehavior: function (to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { el: to.hash, behavior: "smooth" };
        } else {
            window.scrollTo(0, 0);
        }
    }
});

const store = createStore({
    state() {
        return {
            orderName: 'Арматура',
            productOrder: {
                name: 'Арматура А500с',
                diameter: 12,
                type: 'a500c',
                priceTonn: 120,
                quantity: 0,
                priceMeter: 12,
                quantityMeter: 0,
                sum: 0,
                weight: '0,8 кг',
                gost: '34028-2016',
            },
            cart: {
                name: [],
                diameter: [],
                type: [],
                priceTonn: [],
                quantityTonn: [],
                priceMeter: [],
                quantityMeter: [],
                sum: [],
            },
        }
    },
})

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('ContactForm', ContactForm)
app.component('AppHeader', AppHeader)
app.component('AppFooter', AppFooter)
app.component('HeroCard', HeroCard)
app.component('AppCart', AppCart)

app.use(router)
app.use(store)

app.mount('#app')
