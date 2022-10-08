<template>
  <!-- outer content box -->
  <div
    class="w-full h-full max-h-full p-2 duration-300 bg-gray-100 rounded-lg shadow-2xl dark:bg-black shadow-black transition-color"
  >
    <!-- inner content box -->
    <div
      class="container w-full h-full max-h-full min-w-full min-h-full p-4 mx-auto duration-300 bg-white rounded-lg dark:bg-gray-900 transition-color"
    >
      <!-- scroll bar and behaviour -->
      <div
        class="h-full max-h-full min-h-full overflow-x-auto overflow-y-scroll overscroll-contain scrollbar scrollbar-thumb-red-900 scrollbar-track-red-100"
      >
        <!-- text-box -->
        <div
          class="h-full max-h-full min-h-full p-2 mr-6 text-gray-600 duration-300 dark:text-white dark:bg-gray-900 transition-color"
        >
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped></style>
