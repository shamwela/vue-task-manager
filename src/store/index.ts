import { createStore } from 'vuex'

type Task = {
  id: number
  name: string
  completed: boolean
}

export const store = createStore({
  state() {
    return {
      tasks: [] as Task[],
    }
  },
  actions: {
    addNewTask({ commit }, newTaskName) {
      commit('addNewTask', newTaskName)
    },
  },
  mutations: {
    addNewTask({ tasks }, newTaskName) {
      const id = Math.random()
      const name = newTaskName
      const completed = false
      const newTask = { id, name, completed }
      tasks.push(newTask)
    },
  },
})
