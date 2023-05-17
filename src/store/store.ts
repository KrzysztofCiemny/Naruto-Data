import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      pageNumber: 1,
    };
  },
  mutations: {
    setPageNumber(state, pageNumber) {
      state.pageNumber = pageNumber;
    },
  },
});

export default store;
