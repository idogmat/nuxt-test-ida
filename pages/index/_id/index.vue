<template>
  <div class="main__board__list__sort">
    <div class="main__board__list__sort__section">
      <span>Сортировка по</span>
      <select class="main__board__list__sort__section__input" v-model="selectedSortType">
        <option class="main__board__list__sort__section__options" v-for="sortType of sortTypes"
                :value="sortType"
                :key="sortType.type">{{ sortType.title }}
        </option>
      </select>
    </div>
    <div ref="productsList" class="main__board__list__products">
      <product-card
        v-for="(item, index) of
        GET_PRODUCT_CARDS({category: $route.params.id,sortingType: selectedSortType.type,pageCounter})"
        :key="item.name + index"
        :el="item.id"
        :category="item.category"
        :name="item.name"
        :rang="item.rating"
        :img="item.photo"
        :price="item.price"
        @putProduct="addProduct"
      >
      </product-card>
    </div>
    <button class="main__board__list__nextbtn" @click="pageCounter++">NextPage</button>
  </div>
</template>
<script>

import {mapActions, mapGetters} from "vuex";
import ProductCard from "@/components/ProductCard";
export default {
  name: 'index',
  components: {
    ProductCard
  },
  async fetch({store, params}) {
    if (store.state[`category_${params.id}`].length === 0)
      await store.dispatch('fetchProducts', params.id)
  },
  data:()=> ({
      pageCounter: 1,
      selectedSortType: {
        title: 'По цене',
        type: 'price'
      },
      sortTypes: [
        {
          title: 'По цене',
          type: 'price'
        },
        {
          title: 'По популярности',
          type: 'rating'
        }
      ]
    }),
  computed: {

    ...mapGetters([
      'GET_PRODUCT_CARDS'
    ]),
    ...mapActions([
      'fetchCategories'
    ]),
  },
  mounted() {

  },
  methods: {
    ...mapActions(['pushProductToBasket']),
    addProduct({category, id}) {
      let item = new Object({category, id})
      this.pushProductToBasket(item)
    }
  },
  watch: {},
  created() {
  }
}
</script>

<style>

</style>
