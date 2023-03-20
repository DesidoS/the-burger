import { loginUser } from "../../services/auth.service";

const initialState = {
  user: null,
  token: "",
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
    setToken(state, token) {
      state.token = token;
    },
    clearUserData(state) {
      Object.assign(state, { ...initialState });
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await loginUser(payload);
      const { name, email, token } = data;

      commit("setUserData", { name, email });
      commit("setToken", token);
    },
  },
};
