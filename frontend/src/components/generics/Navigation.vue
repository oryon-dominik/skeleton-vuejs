<template>
  <div class="flex flex-col mt-2 lg:mt-0 lg:flex-row gap-y-5 lg:gap-x-5">
    <router-link v-for="item in navigation" v-slot="{ isActive, href, navigate }" :key="item.name" :to="item.to">
      <a
        :aria-current="isActive ? 'page' : undefined"
        :href="href"
        class="px-48 py-3 text-sm font-medium transition-all duration-500 border-2 border-gray-200 rounded-md lg:px-3 lg:py-2 dark:border-gray-700"
        :class="[
          isActive
            ? 'bg-gray-300 dark:bg-black text-gray-900 dark:text-gray-100 transition-colors border-cyberred dark:border-cyberred'
            : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 dark:bg-gray-800 dark:hover:text-gray-300 hover:text-gray-900 hover:border-cyberred dark:hover:border-cyberred'
        ]"
        @click="navigate"
      >
        {{ item.name }}
      </a>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

const navigation = [
  { to: "/", name: "Home" },
  { to: "/about", name: "About" },
  { to: "/todos", name: "Todos" },
  { to: "/login", name: "Login" }
]

export default defineComponent({
  name: "NavigationComponent",
  components: {},
  setup() {
    return {
      navigation
    }
  }
})
</script>
<style lang="scss" scoped></style>
