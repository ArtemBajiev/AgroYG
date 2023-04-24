import { createStore } from 'vuex';

export default createStore({
  state: {
    loading: false,
  },
  getters: {
  },
  mutations: {
    loadingMut(state) {
      state.loading = !state.loading;
    },
  },
  actions: {
  },
  modules: {
  },
});
