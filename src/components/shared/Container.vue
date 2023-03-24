<template>
  <div class="container">
    <slot>
      <CircleLoader width="100" height="100" color="#fabf00" />
    </slot>
  </div>
</template>

<script>
import CircleLoader from "../loader/CircleLoader.vue";
export default {
  name: "shared-container",
  components: {
    CircleLoader,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 300px;
  @media screen and (min-width: 600px) and (max-width: 899px) {
    max-width: 600px;
  }
  @media screen and (min-width: 900px) and (max-width: 1199px) {
    max-width: 900px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 1200px;
  }
  margin: 0 auto;
}
</style>
