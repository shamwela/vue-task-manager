<script lang="ts">
import { store } from '@/store/index'
import { mapState } from 'vuex'
import TaskItem from '@/components/TaskItem.vue'

export default {
  components: {
    TaskItem,
  },
  data() {
    return {
      newTaskName: '',
    }
  },
  computed: mapState(['tasks']),
  methods: {
    handleSubmit() {
      store.dispatch('addNewTask', this.newTaskName)
      this.newTaskName = ''
    },
  },
}
</script>

<template>
  <main>
    <form @submit.prevent="handleSubmit" class="flex gap-x-4">
      <input
        v-model="newTaskName"
        type="text"
        placeholder="New task"
        aria-label="New Task"
        required
      />
      <button type="submit">Add</button>
    </form>
    <div class="flex flex-col gap-y-4">
      <div v-for="task in tasks" :key="task.id">
        <TaskItem :task="task" />
      </div>
    </div>
  </main>
</template>
