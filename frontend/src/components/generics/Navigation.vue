<template>

  <router-link class="" to="/">
    Home
  </router-link>
  <router-link class="" to="/about">
    About
  </router-link>
  <router-link class="" to="/todos">
    Todos
  </router-link>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'NavBar',
  })
</script>
<style lang="scss" scoped></style>
