<template>
  <div class="basket-product">
    <div class="basket-product__img"
         :style="{backgroundImage: `url(${img})`}"
    ></div>
    <div class="basket-product__description">
      <p>{{ productName }}</p>
      <p>{{ productPrice }} ₽</p>
    </div>
    <star class="basket-product__star" :starsCount="starsCount"/>
    <div
         class="basket-product__del"
    ></div>


  </div>
</template>

<script>
import Star from '@/components/Star'
export default {
name: "BasketItem",
  components:{
    Star
  }
}
</script>

<style scoped>

</style>
