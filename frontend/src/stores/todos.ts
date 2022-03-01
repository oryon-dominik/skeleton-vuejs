import { defineStore } from 'pinia'
import { getMany } from '../api/crud'
import { Endpoint } from '../api/endpoints'

export type Tag = {
  name: string
}

export type Todo = {
  name: string
  url: string
  owner_url: string
  todolist: string
  description: string
  tags: Tag[]
  is_done: boolean
}

export type TodoState = {
  todos: Todo[]
  activeTodo: Record<string, unknown>
  filter_for_tags: Tag[]
  error: null | string
  loaded: boolean
}

export const useTodos = defineStore({
  id: 'todos',
  state: () => ({
    todos: [] as Todo[],
    activeTodo: {},
    filter_for_tags: [],
    error: null,
    loaded: false
  }),
  getters: {
    // getUnfinishedTodos(state: TodoState): Todo[] {
    //   return state.todos.filter((todo) => !todo.is_done)
    // },
  },
  actions: {
    async getAllTodoItemsFromAPI() {
      const route = Endpoint.todoitems
      const { restResponse, error } = await getMany(route)
      if (error) {
        console.error(error)
        return
      }
      const todos = restResponse as unknown as Todo[]
      this.todos = todos

      this.loaded = true
    }
  }
})
