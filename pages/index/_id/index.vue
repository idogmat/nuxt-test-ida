<template>
  <div class="main__board__list__sort">
    <div class="main__board__list__sort__section">
      <select v-model="selectedSortType">
        <option v-for="sortType of sortTypes"
                :value="sortType"
                :key="sortType.type">{{ sortType.title }}
        </option>
      </select>
      {{ selectedSortType }}
      {{ $route.params.id }}
    </div>
      <div class="main__board__list__products">

        <product-card
          v-for="(item, index) of
        GET_PRODUCT_CARDS({category: $route.params.id,sortingType: selectedSortType.type})"
          :key="'product' + index"
          :el="item.id"
          :category="item.category"
          :name="item.name"
          :rang="item.rating"
          :img="item.photo"
          :price="item.price"
        >

        </product-card>
      </div>
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
    if(store.state[`category_${params.id}`].length === 0)
      await store.dispatch('FETCH_PRODUCTS', params.id)
  },
  data() {
    return {
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
    }
  },
  computed: {

    ...mapGetters([
      'GET_PRODUCT_CARDS'
    ]),
    ...mapActions([
      'nuxtServerInit'
    ]),

  },
  mounted() {

  },
  methods:{
  },
  watch:{

  },
  async created() {



  }
}
</script>

<style>

</style>
