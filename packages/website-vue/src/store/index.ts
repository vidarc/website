import Vue from 'vue'
import Vuex from 'vuex'

import deck from '../data/deck'

Vue.use(Vuex)

const redSuits = ['hearts', 'diamonds']
const blackSuits = ['spades', 'clubs']

export default new Vuex.Store({
  state: {
    deck: deck.sort(() => 0.5 - Math.random()).map(entry => ({ ...entry, face: false })),
    selected: [],
  },
  mutations: {
    flipCard(state, index) {
      state.deck[index].face = !state.deck[index].face
      state.selected.push(state.deck[index])
    },
    removeCards(state, { first, second }) {
      state.deck.splice(state.deck.findIndex(entry => entry.id === first.id), 1)
      state.deck.splice(state.deck.findIndex(entry => entry.id === second.id), 1)
    },
    resetCards(state) {
      state.deck.map(entry => (entry.face = false))
    },
    resetSelected(state) {
      state.selected = []
    },
  },
  actions: {
    flipCard({ commit, state }, index) {
      commit('flipCard', index)

      if (state.selected.length >= 2) {
        const [first, second] = state.selected

        if (
          (redSuits.includes(first.suit) && redSuits.includes(second.suit)) ||
          (blackSuits.includes(first.suit) && blackSuits.includes(second.suit))
        ) {
          if (first.value === second.value) {
            commit('removeCards', { first, second })
          }
        }
        setTimeout(() => {
          commit('resetCards')
          commit('resetSelected')
        }, 500)
      }
    },
  },
})
