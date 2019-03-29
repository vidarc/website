import Vue from 'vue'
import Vuex from 'vuex'

import deck from './data/deck'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deck: deck.sort(() => 0.5 - Math.random()),
  },
  mutations: {},
  actions: {},
})
