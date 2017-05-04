import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  // Current States
  state: {
    tasks: [
      {
        description: 'Write an article',
        done: false
      },
      {
        description: 'Sing a song',
        done: false
      }
    ]
  },

  // Showing things, not mutating state
  getters: {
    tasks: state => {
      return state.tasks
    }
  },

  // Mutating the state ; mutations are always synchronous
  mutations: {
  },

  // Commits the mutation, it's asynchronous
  actions: {
  }

})
