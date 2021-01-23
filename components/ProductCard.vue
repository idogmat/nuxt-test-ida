<template>
  <div @mouseleave="hover = false"
       @mouseover="hover = true"
       @click="putProductToBasket"
       :style="hover ? 'outline: 1px solid' : ''"
       class="product">
    <div class="product__info"
         :style="{background:`url(${urlImg+img})`}">
      <div class="product__info__top">
        <div class="product__info__top__rank">
          <star :rang="rang"></star>
        </div>
        <div class="product__info__top__bag">
          <store-bag :key="'bag'+el" :size="size"></store-bag>
        </div>
      </div>
      <div class="product__info__bottom">
        <div class="product__info__bottom__name">
          {{ capitalizeName }}
        </div>
        <div class="product__info__bottom__price">
          {{ changePrice }} ₽
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "@/components/svg/Star";
import storeBag from "@/components/svg/storeBag";
import {capitalizeName,changePrice} from '@/assets/convertrs/convertrs'

export default {
  data() {
    return {
      urlImg: 'https://frontend-test.idaproject.com',
      hover: false,
      size: {
        width: '14px',
        height: '14px',
      }
    }
  },
  components: {
    Star,
    storeBag
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
      required: true,

    }
  },
  computed: {
    changePrice,
    capitalizeName
  },
  methods: {
    putProductToBasket() {
      this.$emit('putProduct', {
        id: this.el,
        category: this.category
      })
    }
  }
}
</script>

<style scoped>

</style>
