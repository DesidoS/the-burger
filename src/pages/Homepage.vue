<template>
  <main>
    <SectionWithHeaderSpacer>
      <BurgersList :items="burgers" />
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer";
import BurgersList from "../components/burger/BurgersList.vue";
import { getBurgersList } from "../services/burgers.service";

export default {
  name: "App",
  components: {
    BurgersList,
    SectionWithHeaderSpacer,
  },
  data() {
    return {
      burgers: [],
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