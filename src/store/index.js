import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
const requireContext = require.context("./modules", false, /.*\.js$/);

// 只储存state中的assessmentData
const persistedState = createPersistedState({
  reducer(val) {
    return {
      auth: val.auth,
      cacheglobal: val.cacheglobal
    };
  }
});

const modules = requireContext
  .keys()
  .map(file => [file.replace(/(^.\/)|(\.js$)/g, ""), requireContext(file)])
  .reduce((modules, [name, module]) => {
    if (module.namespaced === undefined) {
      module.namespaced = true;
    }

    return { ...modules, [name]: module };
  }, {});

export default new Vuex.Store({
  modules,
  strict: process.env.APP_ENV !== "production",
  plugins: [persistedState]
});
