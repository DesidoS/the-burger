<template>
  <section class="error">
    <h1 class="error__title">Page not found</h1>
    <router-link to="/">
      <Button class="error__btn">Go home</Button>
    </router-link>
  </section>
</template>

<script>
import Button from "@/components/shared/Button.vue";
export default {
  name: "ErrorPage",
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.error {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 60px;
    text-align: center;
  }
  &__btn {
    margin-top: 100px;
  }
}
</style>
