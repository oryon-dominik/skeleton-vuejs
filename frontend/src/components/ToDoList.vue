<template>
  
<div class="flex items-center max-w-sm p-6 mx-auto space-x-4 bg-white shadow-lg rounded-xl">
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-red-500">You have a new messsage--!</p>
    <button @click="getTodos()">callAPI</button>
     <ul v-for="todo in todos">
        <li>
          {{ todo }}
        </li>
      </ul>
  </div>

</div>
</template>




<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTodos } from '../stores/todos';


export default defineComponent({
  name: "ToDoList",
  setup() {
    const todos = ref([])
    async function getTodos() {
      const todoStore = useTodos();
      console.log("before", todoStore.todos)
      await todoStore.getAllTodoListsFromAPI()
      console.log("after", todoStore.todos)
      this.todos = todoStore.todos
    }
    return {
      getTodos,
      todos
    }
  },
  
  components: {
  },
});
</script>
