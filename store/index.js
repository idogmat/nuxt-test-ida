export const state = () => ({
  categories: [],
  category_1: [],
  category_2: [],
  category_3: [],
  basket: []
})
export const mutations = {
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },
  SET_PRODUCTS(state, {category, products}) {
    state[`category_${category}`].push(...products)
  },
  SET_PRODUCTS_TO_BASKET(state, product) {
    state.basket.push(product)
    // console.log(state.basket)
  }
}
export const getters = {
  GET_CATEGORIES: state => state.categories,

  GET_PRODUCT_CARDS: state => ({category, sortingType = 'price', pageCounter = 1}) => {
    let arr = Array.from(state[`category_${category}`])
    arr.sort((a, b) => b[sortingType] - a[sortingType])
    arr.splice(15 * pageCounter)
    return arr
  },
  GET_PRODUCTS_FROM_BASKET: state => state.basket,
}
export const actions = {
  async nuxtServerInit({getters, dispatch, commit}, {$axios, route = 1}) {
    let categories = []
    try {
      categories = await $axios.$get('/api/product-category')
    } catch (error) {
      console.log(error)
    }
    commit('SET_CATEGORIES', categories)
    dispatch('fetchProducts', route)
  },
  async fetchProducts({commit}, categoryId) {
    await this.$axios.$get(`/api/product?category=${categoryId}`)
      .then(data => {
        commit('SET_PRODUCTS', {category: categoryId, products: data})
      })
      .catch(error => console.log(error))
  },
  pushProductToBasket({getters,commit}, product) {
    commit('SET_PRODUCTS_TO_BASKET', product)
///
  }

}
