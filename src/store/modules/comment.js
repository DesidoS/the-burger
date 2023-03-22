import { addComment } from "../../services/reviews.service";

const initialState = {
  author: null,
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
    setUserData(state, userData) {
      state.user = userData;
    },
    clearUserData(state) {
      Object.assign(state, { ...initialState });
    },
  },
  actions: {
    async comment({ commit }, payload) {
      const { data } = await addComment(payload);
      const { author, rating, content } = data;

      commit("setUserData", { author, rating, content });
    },
  },
};
