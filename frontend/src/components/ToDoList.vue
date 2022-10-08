<template>
  <div class="flex">
    <div>
      <div class="text-xl font-medium text-black">Todos</div>
      <button @click="getTodos()">callAPI</button>
      <ul v-for="todo in todos">
        <li>{{ todo.name }}: {{ todo.description }}</li>
      </ul>
      <ul v-for="todo in todos">
        <li>{{ todo.name }}: {{ todo.description }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useTodos } from "../stores/todos"
import type { Todo } from "../stores/todos"

const todos = ref([] as Todo[])

async function getTodos() {
  const todoStore = useTodos()
  await todoStore.getAllTodoItemsFromAPI()
  todos.value = todoStore.todos
}
</script>
