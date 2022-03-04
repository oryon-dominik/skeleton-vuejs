<template>
  <div class="p-6 bg-red-400">
    <Authenticate />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Authenticate from "../components/authentication/Authenticate.vue"

export default defineComponent({
  name: "LoginPage",
  components: {
    Authenticate
  }
})
</script>

<style></style>
