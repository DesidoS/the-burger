import { addComment } from "../../services/reviews.service";

const initialState = {
  author: "",
  rating: "",
  content: "",
};

export default {
  namespaced: true,
  state: { ...initialState },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.token);
    },
  },
  mutations: {
    setUserData(state, data) {
      console.log("setUserData  data:", data);
      console.log("setUserData  state:", state);
      state = data;
      console.log("setUserData  state:", state);
    },
  },
  actions: {
    async comment({ commit }, payload) {
      const { data } = payload;
      await addComment(payload);
      const { author, rating, content } = data;

      commit("setUserData", { author, rating, content });
    },
  },
};
