<template>
  <Container>
    <div class="apartments-list">

      <ApartmentsItem
        v-for="{ id, descr, price, rating, imgUrl } in items"
        :key="id"
        :id="id"
        :descr="descr"
        :price="price"
        :rating="rating"
        :imgUrl="imgUrl"
      />
    </div>
  </Container>
</template>

<script>
import Container from "../shared/Container";
import ApartmentsItem from "./ApartmentsItem.vue";

export default {
  name: "ApartmentsList",
  components: {
    Container,
    ApartmentsItem,
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
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  // flex-direction: column;
  margin-left: -15px;
  margin-right: -15px;
}
</style>
