<template>
  <main class="burger-page">
    <SectionWithHeaderSpacer>
      <Container>
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
import { getComments } from "../services/reviews.service";

export default {
  name: "BurgerPage",
  components: {
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
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getBurgerById(id);
      this.burger = data;
    } catch (error) {
      console.error(error);
    }
  },
  async updated() {
    try {
      const { id } = this.$route.params;
      const { data } = await getComments(id);
      this.reviewsList = data.reverse();
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
    justify-content: center;
    @media screen and (max-width: 599px) {
      flex-direction: column;
    }
  }

  &__additional-info {
    @media screen and (min-width: 600px) {
      margin-left: 30px;
    }
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
