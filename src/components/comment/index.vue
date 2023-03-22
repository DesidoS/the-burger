<template>
  <section class="comment">
    <div class="comment__heading">
      <h2 class="comment__title">{{ name }}, please add your comment</h2>
    </div>
    <Form ref="form" class="comment__form" @submit.prevent="handleSubmit">
      <textarea
        class="comment__input"
        v-model="formData.comment"
        placeholder="Comment"
        name="comment"
        required
        pattern="[A-Za-z]+"
      ></textarea>
      <CustomSelect
        :items="ratings"
        v-model="rating"
        aria-placeholder="asdasd"
        class="comment__select"
        required
      />
      <Button class="comment__btn" type="submit" :loading="loading">
        Send
      </Button>
    </Form>
  </section>
</template>

<script>
import Form from "../shared/form";
import CustomSelect from "../shared/CustomSelect";
import { mapActions } from "vuex";

import Button from "../shared/Button";
export default {
  name: "App-Сomment",
  components: {
    CustomSelect,
    Form,
    Button,
  },
  data() {
    return {
      loading: false,
      name: localStorage.getItem("Name"),
      rating: "",
      formData: {
        comment: "",
      },
    };
  },
  computed: {
    ratings() {
      return [
        { value: "", label: "Please choose your rate", selected: true },
        "★",
        "★★",
        "★★★",
        "★★★★",
        "★★★★★",
      ];
    },
  },
  methods: {
    ...mapActions("comment", ["comment"]),
    async handleSubmit() {
      const { form } = this.$refs;
      const data = {
        id: this.$route.params.id,
        data: {
          content: this.formData.comment,
          author: this.name,
          rating: this.rating,
        },
      };
      try {
        this.loading = true;
        await this.comment(data);
        form.reset();
        this.formData.comment = "";
        this.rating = "";
        this.$notify({
          type: "success",
          title: "Thank you! please reload page)",
        });
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Error",
          text: error.message,
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.comment {
  margin-top: 20px;
  background: $card-bg;
  padding: 0 2px;

  &__heading {
    padding: 20px 20px 10px;
  }

  &__title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__show-more {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 12px;
    font-family: inherit;
    font-size: 16px;
  }
  &__input {
    border: 3px solid $secondary-color;
    padding: 10px;
    width: 100%;
    height: 100px;
  }
  &__form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 10px 0 10px;
  }
  &__select {
    margin: 20px 0 0 0;
  }
  &__btn {
    margin: 20px 0;
    width: 100%;
  }
}
</style>
