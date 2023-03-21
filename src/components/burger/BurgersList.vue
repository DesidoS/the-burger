<template>
  <Container>
    <div class="burger-list">
      <BurgerItem
        v-for="{ _id, descr, price, rating, imgUrl, title } in items"
        :key="_id"
        :id="_id"
        :descr="descr"
        :price="Number(price)"
        :rating="Number(rating)"
        :imgUrl="imgUrl"
        :title="title"
      />
    </div>
  </Container>
</template>

<script>
import Container from "../shared/Container";
import BurgerItem from "./BurgerItem.vue";

export default {
  name: "BurgerList",
  components: {
    Container,
    BurgerItem,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.burger-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>
