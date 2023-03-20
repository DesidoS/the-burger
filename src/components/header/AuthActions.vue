<template>
  <div class="auth-actions">
    <router-link class="auth-actions__link" :to="{ name: 'login-page' }">
      Sign in
    </router-link>
    /
    <router-link class="auth-actions__link" :to="{ name: 'registration-page' }">
      Sign up
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.auth-actions {
  color: #fff;

  &__link {
    color: inherit;
    text-decoration: none;
    transition: color 0.4s;

    &:hover {
      color: $main-color;
    }
  }
}
</style>
