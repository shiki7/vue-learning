// import createPersistedState from "vuex-persistedstate";

// export const plugins = [createPersistedState];

// export const state = () => ({
//   message: "count number",
//   counter: 0
// });

// export const mutations = {
//   count(state, n) {
//     state.counter += n;
//   },
//   reset: function(state) {
//     state.counter = 0;
//   }
// };

import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      message: "count number",
      counter: 0
    }),
    mutations: {
      count(state, n) {
        state.counter += n;
      }
    },
    plugins: [createPersistedState]
  });
};

export default createStore;
