<template>
  <div class="star">
    <div class="star__icon">
      <div class="star__icon__rang"
           :style="{borderBottom: `#F2C94C ${rang * 2}px solid`}">

      </div>
    </div>
    <span class="star__counter">{{rang}}</span>
  </div>
</template>

<script>
export default {
  name: "Star",
  props: {
    rang: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.star {
  display: flex;
  align-items: center;
  justify-content: center;
  &__icon {
    width: 14px;
    height: 14px;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    background: yellow;
    display: flex;
    align-items: center;
    justify-content: center;

    &__rang {
      box-sizing: border-box;
      width: 11px;
      height: 11px;
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      background: #F2C94C;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &__counter {
    font-family: PT Sans;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 13px;
    text-align: left;
    margin-left: 0.3rem;
    color: #F2C94C;
  }
}
</style>
