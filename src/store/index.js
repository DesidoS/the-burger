import Vuex from "vuex";
import Vue from "vue";
import commentModule from "./modules/comment";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const dataState = createPersistedState({
  paths: ["comment.add"],
});

const store = new Vuex.Store({
  modules: {
    comment: commentModule,
  },
  plugins: [dataState],
});

export default store;
