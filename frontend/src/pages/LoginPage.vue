<template>
  <Authenticate />
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
