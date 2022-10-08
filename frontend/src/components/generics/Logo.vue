<template>
  <!-- logos mobile -->
  <div class="block lg:hidden">
    <img
      class="object-contain w-auto h-16 transition ease-in-out delay-100 animate-pulse animate slow dark:hidden"
      src="../../assets/cyberise_logo_centered_small_resized_for_web.png"
      alt="logo"
    />
    <!-- dark mode logo mobile-->
    <img
      class="hidden object-contain w-auto h-16 transition ease-in-out delay-100 dark:block animate-pulse animate slow"
      src="../../assets/cyberise_logo_centered_small_resized_for_web_white.png"
      alt="logo"
    />
  </div>
  <!-- logos desktop -->
  <div class="hidden lg:block">
    <img
      class="object-contain w-auto h-16 transition ease-in-out delay-100 animate-pulse animate slow dark:lg:hidden"
      src="../../assets/cyberise_logo_centered_small_resized_for_web.png"
      alt="logo"
    />
    <!-- dark mode logo desktop -->
    <img
      class="object-contain w-auto h-16 transition ease-in-out delay-100 animate-pulse animate slow lg:hidden dark:lg:block"
      src="../../assets/cyberise_logo_centered_small_resized_for_web_white.png"
      alt="logo"
    />
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped></style>
