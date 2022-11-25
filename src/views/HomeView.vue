<script lang="ts">
import { store } from '@/store/index'
import { mapState } from 'vuex'

export default {
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
      <div v-for="{ id, name } in tasks" :key="id">
        <span>{{ name }}</span>
      </div>
    </div>
  </main>
</template>
