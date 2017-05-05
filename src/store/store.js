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
        done: true
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
    new: (state) => {
      state.tasks.push({
        description: 'new task',
        done: false
      })
    },
    switchCheck: (state, index) => {
      state.tasks[index].done = !state.tasks[index].done
    }
  },

  // Commits the mutation, it's asynchronous
  actions: {
  }

})
