import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: "PT",
  },
  mutations: {
    changeLang(state) {
      if (state.lang === "EN") {
        state.lang = "PT";
      } else {
        state.lang = "EN";
      }
      console.log(state.lang);
    },
  },
  getters: {
    isPT: (state) => {
      return state.lang === "PT";
    },
  },
  actions: {},
  modules: {},
});
