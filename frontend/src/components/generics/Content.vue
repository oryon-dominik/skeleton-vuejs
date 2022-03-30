<template>
  <div
    class="w-full h-full p-3 duration-300 bg-gray-100 rounded-lg shadow-2xl dark:bg-black shadow-black transition-color"
  >
    <div
      class="container w-full h-full min-w-full p-4 mx-auto duration-300 bg-white rounded-lg dark:bg-gray-900 transition-color"
    >
      <div
        class="w-full h-full overflow-x-auto overflow-y-scroll text-gray-600 duration-300 bg-white rounded-lg dark:text-white dark:bg-gray-900 overscroll-scroll scrollbar scrollbar-thumb-red-900 scrollbar-track-red-100 transition-color"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "RouterViewContent"
})
</script>
<style lang="scss" scoped></style>
