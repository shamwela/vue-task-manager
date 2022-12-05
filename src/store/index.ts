import { createStore } from 'vuex'
import type { Task } from '@/types/task'

const initialTasks: Task[] = [
  {
    id: 1,
    name: 'Learn Vue',
    completed: false,
  },
  {
    id: 2,
    name: 'Learn Vuex',
    completed: false,
  },
]

export const store = createStore({
  state() {
    return {
      tasks: initialTasks,
    }
  },
  actions: {
    addNewTask({ commit }, newTaskName) {
      commit('addNewTask', newTaskName)
    },
    completeTask({ commit }, id) {
      commit('completeTask', id)
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
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
    completeTask({ tasks }, id) {
      const task = tasks.find((task) => task.id === id)
      if (!task) {
        return
      }
      task.completed = true
    },
    deleteTask({ tasks }, id) {
      const index = tasks.findIndex((task) => task.id === id)
      tasks.splice(index, 1)
    },
  },
})

export const dispatch = store.dispatch
