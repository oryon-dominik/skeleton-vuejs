import { defineStore } from "pinia"

// 'application' is the name of the store. It is unique across your application and will appear in devtools.
export const useApplication = defineStore({
  id: "application",
  // state is a function that returns a fresh state
  state: () => {
    return {
      lastRoute: null as string | null,
      loading: 0 as number // every loading coroutine will increment this value
    }
  },
  actions: {
    setLastRoute(route: string) {
      this.lastRoute = route
    },
    startLoading() {
      this.loading++
    },
    finishLoading() {
      this.loading--
    }
  },
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["lastRoute"] }]
  }
})
