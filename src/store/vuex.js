import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import { cbModule } from "@/store/modules/cbModule.js";
Vue.use(Vuex);

export const mutations = {};

export const actions = {};

export const getters = {};

export default new Vuex.Store({
  modules: {
    cbModule: cbModule,
  },
  state: {},
  mutations,
  actions,
  getters,
});
