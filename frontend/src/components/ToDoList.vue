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

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useTodos } from "../stores/todos"
import type { Todo } from "../stores/todos"

export default defineComponent({
  name: "ToDoList",
  components: {},
  setup() {
    const todos = ref([] as Todo[])
    async function getTodos() {
      const todoStore = useTodos()
      await todoStore.getAllTodoItemsFromAPI()
      todos.value = todoStore.todos
    }
    return {
      getTodos,
      todos
    }
  }
})
</script>
