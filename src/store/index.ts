import Vue from 'vue'
import Vuex from 'vuex'
import { Mutations } from './mutations'
import runtime from './runtime.store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    [Mutations.setSelectedNodeId](state: any, nodeId: string) {
      state.runtime.selectedNodeId = nodeId
    }
  },
  actions: {

  },
  getters: {
  },
  modules: {
    runtime
  }
})
