<template>
  <div>
    <basket-form v-if="isBasket" @emitCloseBasket="emitCloseBasket()"></basket-form>
    <header class="header">
      <div class="header__logo">
        TestList
      </div>
      <div class="header__basket" @click="isBasket=!isBasket">
        <span class="header__basket__counter">{{GET_PRODUCTS_FROM_BASKET.length}}</span>
        <store-bag :size="size"></store-bag>
      </div>
    </header>
    <div class="container">
      <Nuxt/>
    </div>

  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import storeBag from "@/components/svg/storeBag";
import BasketForm from "@/components/BasketForm";

export default {
  components: {
    storeBag,
    BasketForm
  },
  data: () => ({
    isBasket: false,
    size: {
      width: '24px',
      height: '26px',
    }
  }),
  computed: {
    ...mapActions([
      'nuxtServerInit'
    ]),
    ...mapGetters([
      'GET_CATEGORIES',
      'GET_PRODUCTS_FROM_BASKET'
    ]),

  },

  methods: {
    emitCloseBasket() {
      this.isBasket = !this.isBasket

    }
  },
  async created() {

  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
