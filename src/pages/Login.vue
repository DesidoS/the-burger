<template>
  <main class="login">
    <AuthSection>
      <LoginForm />
    </AuthSection>
  </main>
</template>

<script>
import LoginForm from "../components/auth/login";
import AuthSection from "../components/auth/AuthSection";

export default {
  name: "LoginPage",
  components: {
    LoginForm,
    AuthSection,
  },
  created() {
    localStorage.setItem("Name", "");
    localStorage.setItem("Age", "");
  },
};
</script>
