<template>
  <div class="reviews-heading">
    <Avatar class="reviews-heading__avatar" />
    <div class="reviews-heading__content">
      <div>
        <span class="reviews-heading__author">{{ author }}</span>
        <span class="reviews-heading__age">{{ age }}</span>
      </div>
      <Rating :rating="Number(rating.length)" />
    </div>
  </div>
</template>

<script>
import Rating from "../../StarRating";
import Avatar from "./RevieasAvatar";

export default {
  name: "ReviewsHeading",
  components: {
    Rating,
    Avatar,
  },
  props: {
    author: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      default: "0",
    },
    age: {
      type: String,
      default: "0",
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-heading {
  display: flex;
  align-items: center;

  &__avatar {
    margin-right: 18px;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }
  &__age {
    margin-left: 40px;
  }
}
</style>
