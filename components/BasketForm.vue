<template>
  <div class="basket"
  >
    <div class="basket__hidden" @click="closeBasket()"></div>
    <div class="basket__form">
      <div class="basket__form__header">
        <h1>Корзина</h1>
        <span @click="closeBasket()">X</span>
      </div>
      <div v-if="GET_PRODUCTS_FROM_BASKET.length === 0 && !sandedOrder" class="basket__form__zero">
        <p class="basket__form__zero__text">Пока что вы ничего не добавили в корзину</p>
        <button @click="closeBasket()">Перейти к выбору</button>
      </div>
      <div v-else-if="GET_PRODUCTS_FROM_BASKET.length >= 0 && !sandedOrder"
           class="basket__form__full">
        <p class="basket__form__full__text">Товары в корзине</p>
        <div class="basket__form__full__list">
          <basket-item v-for="(item, index) of
        GET_PRODUCTS_FROM_BASKET"
                       :key="item.name + index"
                       :el="item.id"
                       :category="item.category"
                       :name="item.name"
                       :rang="item.rating"
                       :img="item.photo"
                       :price="item.price"></basket-item>

          <form
            @submit.prevent="onSubmit" class="basket__form__full__list__submit">
            <h4 class="basket__form__full__list__submit__title">Оформить заказ</h4>
            <div type="text" v-for="(field,key,index) of client">
              <input class="basket__form__full__list__submit__input"
                     :style="{borderColor: $v.client[key].value.required && $v.client[key].value.minLength !== false ? '' : 'red'}"
                     :key="'input'+index"
                     v-model="field.value"
                     :type="field.type"
                     v-mask="field.mask ? '+7-###-###-##-##' : ''"
                     :placeholder="field.mask ? field.mask: field.placeholder"
                     @blur="$v.client[key].value.$touch()"
              >
              <div class="invalid-feedback" v-if="checkForm"> ERROR</div>
            </div>
            <button :disabled="checkForm" type="submit"
                    :style="{background:checkForm ? '#737373' : ''}"
                    class="basket__form__full__list__submit__btn">Отправить
            </button>
            <div class="basket__form__full__list__submit__valid" v-if="checkForm">
              <span class="basket__form__full__list__submit__valid__span">!!</span>
              <h4 class="basket__form__full__list__submit__valid__alarm">
                Все поля обязательные.<br>
                После удачной отправки формы содержимое корзины очищается</h4>
            </div>
          </form>
        </div>
      </div>
      <div v-if="sandedOrder" class="basket__form__complete">
        <img :src="sandedOrderIcon" alt="sandedOrderIcon" class="basket__form__complete__img">
        <h1 class="basket__form__complete__title">
          Заявка успешно отправлена</h1>
        <p class="basket__form__complete__info">
          Вскоре наш менеджер свяжестя с вами</p>
      </div>
    </div>
  </div>
</template>

<script>
import sandedOrderIcon from '@/assets/svg_png/ok.png'
import {mapGetters, mapActions} from 'vuex'
import BasketItem from '@/components/BasketItem'
import {minLength, required} from 'vuelidate/lib/validators'

export default {
  name: 'BasketForm',
  components: {
    BasketItem
  },
  data: () => ({
    sandedOrderIcon: sandedOrderIcon,
    sandedOrder: false,
    client: {
      name: {
        value: '',
        type: 'text',
        placeholder: 'Ваше имя'
      },
      phone: {
        value: '+7',
        type: 'tel',
        placeholder: 'Телефон',
        mask: '+7-(999) 999-99-99'
      },
      address: {
        value: '',
        type: 'text',
        placeholder: 'Адрес'
      },
    }
  }),
  validations: {
    client: {
      name: {
        value: {required}
      },
      phone: {
        value: {required, minLength: minLength(15)}
      },
      address: {
        value: {required}
      }
    }
  },
  computed: {
    ...mapGetters([
      'GET_PRODUCTS_FROM_BASKET'
    ]),
    checkForm() {
      return this.$v.$invalid
    },

  },
  methods: {
    ...mapActions(['clearBasket']),
    onSubmit() {
      console.log(this.GET_PRODUCTS_FROM_BASKET)
      console.log('name', this.client.name.value)
      console.log('phone', this.client.phone.value)
      console.log('address', this.client.address.value)
      this.clearBasket()
      this.sandedOrder = true

    },
    closeBasket() {
      this.$emit('emitCloseBasket')
    }
  },

}
</script>

<style scoped lang="scss">

</style>
