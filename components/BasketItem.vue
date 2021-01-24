<template>
  <div class="basket-product">
    <div class="basket-product__img">
      <img :src="urlImg+img" :alt="name">
    </div>
    <div class="basket-product__description">
      <p class="basket-product__description__text">{{ capitalizeName }}</p>
      <p class="basket-product__description__text">{{ changePrice }} ₽</p>
      <star class="basket-product__star" :rang="rang"/>
    </div>
    <div class="basket-product__del"
         @click="delProduct(el)"
    >
      <del-product ></del-product>
    </div>


  </div>
</template>

<script>
import Star from '@/components/svg/Star'
import delProduct from '@/components/svg/DelEl'
import {mapActions, mapGetters} from "vuex";
import {capitalizeName, changePrice} from "assets/convertrs/convertrs";

export default {
  name: "BasketItem",
  data:()=>({
    urlImg: 'https://frontend-test.idaproject.com'
  }),
  props: {
    el: {
      type: Number,
      required: true
    },
    category: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    rang: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,

    }
  },
  components: {
    Star,
    delProduct
  },
  computed: {
    ...mapGetters(['GET_PRODUCTS_FROM_BASKET']),
    changePrice,
    capitalizeName
  },
  methods:{
    ...mapActions([
      'delProductFromBasket'
    ]),

    delProduct(id){
      this.delProductFromBasket(id)
    }
  }
}
</script>

<style scoped>

</style>
