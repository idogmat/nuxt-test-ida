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
}
export const getters = {
  GET_CATEGORIES: state => state.categories,

  GET_PRODUCT_CARDS: state => ({category, sortingType = 'price'}) => {
    let arr = Array.from(state[`category_${category}`])
    return arr.sort((a, b) => b[sortingType] - a[sortingType])
  }
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
    dispatch('FETCH_PRODUCTS', route)
  },
  async FETCH_PRODUCTS({commit}, categoryId) {
    await this.$axios.$get(`/api/product?category=${categoryId}`)
      .then(data => {
        commit('SET_PRODUCTS', {category: categoryId, products: data})
      })
      .catch(error => console.log(error))
  },
}
