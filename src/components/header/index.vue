<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <router-link to="/homepage">
          <Logo />
        </router-link>
        <p v-if="name">Welcome, {{ name }}! Choose you burger.</p>
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "../shared/Container";
import Logo from "../Logo";

export default {
  name: "AppHeader",
  components: {
    Container,
    Logo,
  },
  data() {
    return {
      name: localStorage.getItem("Name"),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: $secondary-color;
  padding: 16px 0;
  z-index: 100;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
