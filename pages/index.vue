<template>
  <div class="main">
    <div class="main__board">
      <div class="main__board__menu">
        <h1 class="main__board__menu__title">Каталог</h1>
        <div class="main__board__menu__category">
          <nuxt-link class="main__board__menu__category__link"
                     v-for="(category, el) of GET_CATEGORIES"
                     :key="el"
                     :to="`/${category.id}`"
                     @click="getCategory(category.id)"
                     no-prefetch
                     exact

          >
            {{ category.name }}
          </nuxt-link>
        </div>
      </div>
      <nuxt-child class="main__board__list"/>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      imgUrl: 'https://frontend-test.idaproject.com/upload/product/backpack2-4755.e0agsd.jpg'

    }
  },
  methods:{
   async getCategory(evt){
    await this.$store.getters.GET_PRODUCT_CARDS({category:evt})
    }
  },
  computed: {

    ...mapActions([
      'nuxtServerInit'
    ]),
    ...mapGetters([
      'GET_CATEGORIES']),
  },
  created() {
  }
}
</script>

