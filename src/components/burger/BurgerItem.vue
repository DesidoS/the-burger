<template>
  <div class="burgers-item">
    <div class="burgers-item__inner">
      <img :src="imgUrl" alt="" class="burgers-item__photo" />
      <div class="burgers-item__content">
        <p class="burgers-item__title">{{ title }}</p>
        <p class="burgers-item__description">{{ descr }}</p>
        <div class="burgers-item__rating">
          <StarRating :rating="totalRating" />
        </div>
        <div class="burgers-item__price">UAH {{ price }}</div>
        <router-link :to="burgerLink" class="burgers-item__link"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "../StarRating.vue";

export default {
  name: "BurgersItem",
  components: {
    StarRating,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
    },
    imgUrl: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    comments: {
      type: Array,
    },
  },
  computed: {
    totalRating() {
      const total = this.comments.reduce(
        (acc, comment) => acc + comment.rating,
        0
      );
      return this.comments.length > 0 ? total / this.comments.length : 0;
    },
    burgerLink() {
      return { name: "burger", params: { id: this.id } };
    },
  },
};
</script>

<style lang="scss" scoped>
.burgers-item {
  position: relative;
  @media screen and (min-width: 600px) and (max-width: 899px) {
    max-width: 50%;
  }
  @media screen and (min-width: 900px) {
    width: 33.33%;
  }
  padding: 0 15px;
  margin: 0 auto;
  margin-bottom: 30px;

  &__inner {
    position: relative;
  }

  &__content {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(#0f1d2d, 0.7);
    min-height: 200px;
    min-width: 200px;
    color: #fff;
    text-align: left;
    line-height: 1.4;
    cursor: pointer;
    z-index: 1;

    &:hover {
      opacity: 1;
    }
  }

  &__title {
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 2);
    overflow: hidden;
    font-size: 20px;
    font-weight: 600;
  }

  &__description {
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 2);
    overflow: hidden;
  }

  &__rating {
    margin-bottom: 20px;
  }

  &__price {
    font-size: 20px;
    font-weight: 600;
  }

  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 599px) {
    .burgers-item {
      width: 100%;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 899px) {
    .burgers-item {
      width: 50%;
    }
  }

  @media screen and (min-width: 900px) and (max-width: 1200px) {
    .burgers-item {
      width: 33.33%;
    }
  }
}
</style>
