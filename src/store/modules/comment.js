import { addComment } from "../../services/reviews.service";

const initialState = {
  author: "",
  age: "",
  data: {
    rating: "",
    content: "",
  },
};

export default {
  namespaced: true,
  state: { ...initialState },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.author);
    },
  },
  mutations: {
    setUserData(state, data) {
      state.author = data.name;
      state.age = data.age;
    },
    setComment(state, data) {
      state.data = data;
    },
  },
  actions: {
    async comment({ commit }, payload) {
      await addComment(payload);
      commit("setComment", { ...payload.data });
    },

    async login({ commit }, payload) {
      const { age, name } = payload;
      commit("setUserData", { age, name });
    },
  },
};
