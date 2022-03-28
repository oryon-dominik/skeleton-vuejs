<template>
  <div
    class="w-full h-full p-2 duration-300 bg-white rounded-lg shadow-2xl dark:bg-gray-800 shadow-black transition-color"
  >
    <div class="container w-full h-full p-3 mx-auto duration-300 bg-white rounded-lg dark:bg-gray-800 shadow-black drop-shadow-2xl transition-color">
      <div
        class="w-full h-full overflow-x-auto overflow-y-scroll text-gray-400 duration-300 bg-white rounded-lg dark:text-white dark:bg-gray-800 overscroll-scroll scrollbar scrollbar-thumb-red-900 scrollbar-track-red-100 transition-color"
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
