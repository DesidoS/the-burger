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
        pattern="^[а-яА-ЯёЁa-zA-Z0-9]+$"
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
        pattern="[1-9][0-9]*"
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
import { mapActions } from "vuex";

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
    ...mapActions("comment", ["login"]),
    async handleSubmit() {
      if (!this.formData.name) {
        this.$notify({
          type: "error",
          title: "Please enter your name",
        });
        return;
      }

      if (!this.formData.age) {
        this.$notify({
          type: "error",
          title: "Please enter your age",
        });
        return;
      }
      if (this.formData.age < 1) {
        this.$notify({
          type: "error",
          title: "Please enter a positive number",
        });
        return;
      }
      this.login(this.formData);
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
