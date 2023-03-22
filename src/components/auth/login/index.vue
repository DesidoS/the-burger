<template>
  <AuthContainer class="login">
    <Form ref="form" class="login__form" @submit.prevent="handleSubmit">
      <MainTitle class="login__title"
        >What is your name/Давай знайомитись</MainTitle
      >
      <CustomInput
        v-model="formData.name"
        placeholder="Name/Ім'я"
        autocomplete="name"
        name="name"
        class="login__input"
        type="text"
        required
        pattern="[A-Za-z]+"
      />
      <MainTitle :level="2" class="login__title"
        >How old are you/Скільки вам років</MainTitle
      >
      <CustomInput
        v-model="formData.age"
        placeholder="Age/Вік"
        autocomplete="current-password"
        type="number"
        name="age"
        required
        pattern="[0-9]+"
        class="login__input"
      />
      <Button class="login__btn" type="submit" :loading="loading">Enter</Button>
    </Form>
  </AuthContainer>
</template>

<script>
import Form from "../../shared/form";
import CustomInput from "../../shared/CustomInput";
import Button from "../../shared/Button";
import AuthContainer from "../AuthContainer";
import MainTitle from "../../shared/MainTitle";

export default {
  name: "AppLogin",
  components: {
    Form,
    CustomInput,
    Button,
    AuthContainer,
    MainTitle,
  },
  data() {
    return {
      loading: false,
      formData: {
        name: "",
        age: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      if (this.formData.name && this.formData.age === "") {
        this.$notify({
          type: "error",
          title: "Empty fields",
        });
      }
      localStorage.setItem("Name", this.formData.name);
      localStorage.setItem("Age", this.formData.age);
      this.$router.push({ name: "homepage" });
      this.$notify({
        type: "success",
        title: `Welcome ${this.formData.name}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
