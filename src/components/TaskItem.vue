<script lang="ts">
import type { PropType } from 'vue'
import type { Task } from '@/types/task'
import { dispatch } from '@/store'

export default {
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
  },
  methods: {
    completeTask() {
      dispatch('completeTask', this.task.id)
    },
    deleteTask() {
      dispatch('deleteTask', this.task.id)
    },
  },
}
</script>

<template>
  <div class="flex gap-x-4 items-center">
    <span :class="{ 'line-through': task.completed }">{{ task.name }}</span>
    <button @click="completeTask">Complete</button>
    <button @click="deleteTask" class="bg-red-500 hover:bg-red-400">
      Delete
    </button>
  </div>
</template>
