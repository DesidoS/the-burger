<template>
  <main>
    <SectionWithHeaderSpacer>
      <MainTitle v-if="name" :level="2" class="user__title">
        Welcome, {{ name }}! Choose you burger</MainTitle
      >
      <Container>
        <ApartmentsList :items="apartments" />
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import apartments from "../components/apartment/apartments.js";
import Container from "../components/shared/Container.vue";
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer";
import MainTitle from "../components/shared/MainTitle";

export default {
  name: "App",
  components: {
    ApartmentsList,
    Container,
    MainTitle,
    SectionWithHeaderSpacer,
  },
  data() {
    return {
      apartments,
      name: localStorage.getItem("Name"),
    };
  },
};
</script>

<style lang="scss" scoped>
.user__title {
  text-align: center;
}
</style>
