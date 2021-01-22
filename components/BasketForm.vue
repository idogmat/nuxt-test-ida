<template>
  <div class="basket"
  >
    <div class="basket__hidden" @mousedown="closeBasket()"></div>
    <div class="basket__form">
      <div class="basket__form__header">
        <h1>Корзина</h1>
        <span @mousedown="closeBasket()">X</span>
      </div >
            <div class="basket__form__zero">
              <p>Пока что вы ничего не добавили в корзину</p>
              <button>Перейти к выбору</button>
            </div>
      <div class="basket__form__full" >
        <p>Товары в корзине</p>
        <div class="basket__form__full__list">
          <basket-item></basket-item>
          <form action="" class="basket__form__full__list__submit">
            <input type="text">
            <input type="text">
            <input type="text">
            <button>Отправить</button>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import BasketItem from '@/components/BasketItem'

export default {
  name: 'BasketForm',
  components: {
    BasketItem
  },
  data: () => ({
    orderIsDone: true,
    isUntouchedFields: false,
    client: {
      name: {
        value: '',
        placeholder: 'Ваше имя'
      },
      phone: {
        value: '',
        placeholder: 'Телефон',
        mask: '(999) 999-99-99'
      },
      home: {
        value: '',
        placeholder: 'Адрес'
      },
    }
  }),
  computed: {

  },
  methods: {
    closeBasket(){
      console.log('ok')
      this.$emit('emitCloseBasket')
    }
  },

}
</script>

<style scoped lang="scss">
.cursorPointer {
  cursor: pointer;
}

.wrapper {
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  min-height: 600px;
  padding: 52px 48px;
  background: white;
  border-radius: 8px 0 0 8px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 42px;

    &__control {
      width: 14px;
      height: 14px;
      cursor: pointer;

      & ::before {
        display: block;
        width: 20px;
        height: 2px;
        background-color: black;
        content: '';
        transform: rotate(90deg);
      }

      * {
        width: 20px;
        height: 2px;
        background-color: black;
        transform: rotate(45deg);
      }
    }
  }

  .empty-basket {
    margin-top: 24px;
    color: black;
  }

  .list {
    margin-top: 24px;

    &__title {
      color: grey;
    }

    &__products {
      margin-top: 16px;

      > :not(:first-child) {
        margin-top: 12px;
      }
    }
  }

  .order {
    margin-top: 32px;

    &__title {
      color: grey;
    }

    input {
      width: 100%;
      height: 50px;
      margin-top: 16px;

      background: grey;
      border-radius: 8px;
      border: transparent 1px solid;
      padding-left: 14px;
      color: black;

      & ::placeholder {
        color: grey;
      }

      &:focus {
        outline: 0;
      }
    }

    .input-error {

    }

    .input-valid {

    }
  }

  .order-done {
    margin-top: 60px;

    &__img {
      width: 100%;
      height: 80px;
    }

    & :nth-child(2) {
      width: 100%;
      margin-top: 24px;
      color: black;
      text-align: center;
    }

    & :nth-child(3) {
      width: 100%;
      margin-top: 2px;

      color: grey;
      text-align: center;
    }
  }

  .control {
    width: 100%;
    height: 50px;
    margin-top: 24px;
    border-radius: 8px;
    background: black;
    cursor: pointer;
    color: white;

    &:hover {
      background: grey;
    }
  }
}
</style>
