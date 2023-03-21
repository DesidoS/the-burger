<template>
  <article class="burgers-main-info">
    <div class="burgers-main-info__heading">
      <h1 class="burgers-main-info__title">{{ burger.title }}</h1>
    </div>
    <img :src="burger.imgUrl" alt="" class="burgers-main-info__photo" />
    <p class="burgers-main-info__description">{{ burger.descr }}</p>
    <div class="burgers-main-info__btn"></div>
  </article>
</template>

<script>
export default {
  name: "BurgerMainInfo",
  props: {
    burger: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.burgers-main-info {
  &__heading {
    display: flex;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
  }

  &__photo {
    max-width: 100%;
  }

  &__description {
    line-height: 1.3;
    margin-top: 30px;
  }

  &__btn {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
