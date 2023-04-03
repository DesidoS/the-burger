<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <router-link to="/homepage">
          <Logo class="header__logo" />
        </router-link>
        <a href="https://blog-a.herokuapp.com/" class="header__link">
          <p class="header__p">Блог новинок!</p>
        </a>
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

  &__logo {
    transition: all 0.3s ease;
  }
  &__logo:hover {
    transform: scale(1.2);
  }
  &__link {
    text-decoration: none;
    color: #333;
    padding: 8px 16px;
    transition: all 0.3s ease;
  }
  &__link:hover {
    transform: scale(1.2);
  }
  &__p {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
