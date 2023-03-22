<template>
  <main class="burger-page">
    <SectionWithHeaderSpacer>
      <Container>
        <Button class="burger-page__btn" type="button" @click="onBack"
          >⬅️</Button
        >
        <div v-if="burger" class="burger-page__content">
          <BurgerMainInfo :burger="burger" />
          <div class="burger-page__additional-info">
            <AppСomment :reviews="reviewsList" />
            <Reviews :reviews="reviewsList" />
          </div>
        </div>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import Container from "../components/shared/Container";
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer";
import BurgerMainInfo from "../components/burger/BurgerMainInfo";
import Reviews from "../components/reviews";
import AppСomment from "../components/comment";
import { getBurgerById } from "../services/burgers.service";
import Button from "../components/shared/Button.vue";

export default {
  name: "BurgerPage",
  components: {
    Button,
    Container,
    BurgerMainInfo,
    SectionWithHeaderSpacer,
    Reviews,
    AppСomment,
  },
  data() {
    return {
      burger: null,
      reviewsList: [],
    };
  },
  methods: {
    onBack() {
      this.$router.push({ name: "homepage" });
    },
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getBurgerById(id);

      this.burger = data;
      this.reviewsList = data.comment;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.burger-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
  &__btn {
    margin-top: -50px;
    margin-bottom: 30px;
  }
}
</style>
