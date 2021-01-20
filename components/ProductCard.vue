<template>
  <div class="product">
    <div class="product__info"
         :style="{background:`url(${urlImg+img})`}">
      <div class="product__info__top">
        <div class="product__info__top__rank">
          <star :rang="rang"></star>
        </div>
        <div class="product__info__top__bag">
          <bag-in-el :key="'bag'+el"></bag-in-el>
        </div>
      </div>
      <div class="product__info__bottom">
        <div class="product__info__bottom__name">
          {{ name }}
        </div>
        <div class="product__info__bottom__price">
          {{ price }} ₽
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "@/components/Star";
import BagInEl from "@/components/baginEl";

export default {
  data() {
    return {
      urlImg: 'https://frontend-test.idaproject.com',
    }
  },
  components: {
    Star,
    BagInEl
  },
  name: 'ProductCard',
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
      required: true
    }
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>

</style>
