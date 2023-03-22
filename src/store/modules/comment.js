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
      state = data;
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
