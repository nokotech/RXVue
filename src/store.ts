import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    source: {
      key1: 'value1',
      key2: 'value2',
      arr1: ['col1', 'col2', 'col3'],
      arr2: ['col1', 'col2', 'col3'],
      obj: {
        k1: 'v1',
        k2: 'v2',
      },
    },
  },
  mutations: {
    updateSourceToYaml(state, s) {
      state.source = s;
    },
    updateSourceToJson(state, s) {
      state.source = s;
    },
  },
  actions: {

  },
});
