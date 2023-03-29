<template>
  <main>
    <SectionWithHeaderSpacer>
      <MainTitle v-if="name" :level="2" class="user__title">
        Welcome, {{ name }}! Choose you burger</MainTitle
      >
      <BurgersList :items="burgers" />
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import BurgersList from "../components/burger/BurgersList.vue";
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer";
import MainTitle from "../components/shared/MainTitle";
import { getBurgersList } from "../services/burgers.service";

export default {
  name: "App",
  components: {
    BurgersList,
    MainTitle,
    SectionWithHeaderSpacer,
  },
  data() {
    return {
      burgers: [],
      name: localStorage.getItem("Name"),
    };
  },
  async created() {
    try {
      const { data } = await getBurgersList();
      this.burgers = data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.user__title {
  text-align: center;
}
</style>
