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
  SET_PRODUCTS_TO_BASKET(state, product) {//blocked for more then 1 el
    // if(!state.basket.find(e => e.id === product.id)) {
      state.basket.push(state[`category_${product.category}`].find(e => e.id === product.id))
    // }
// else{
    //   state.basket.push(state[`category_${product.category}`].find(e => e.id === product.id)
    //   console.log(state.basket[`category_${product.category}`].find(e => e.id === product.id)
    // }
  },
  DEL_PRODUCT_ON_BASKET(state, newBasket) {
  state.basket = newBasket
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
  },
  delProductFromBasket({state,commit},id){
    let uniqElement = false
    let newBasket = state.basket.filter(item => {
      if(!uniqElement) {
        if(item.id === id)
          uniqElement = true
        return item.id !== id
      } else {
        return true
      }
    })
    commit('DEL_PRODUCT_ON_BASKET', newBasket)
  },
  clearBasket({commit}) {
    commit('DEL_PRODUCT_ON_BASKET', [])
    localStorage.removeItem('basket')
  }
}
