import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    lang: "tr",
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLang(state, lang) {
      localStorage.setItem("lang", lang);
      state.lang = lang;
    },
  },
  actions: {
    login({ commit }, formData) {
      commit("setUser", {
        email: formData.email,
        name: formData.name,
        surname: formData.surname,
        title: formData.title,
      });
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getLang(state) {
      return state.lang;
    },
  },
  modules: {},
});
