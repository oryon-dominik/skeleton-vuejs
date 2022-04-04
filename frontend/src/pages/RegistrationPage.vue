<template>
  <RegisterUser />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import RegisterUser from "../components/authentication/RegisterUser.vue"

export default defineComponent({
  name: "RegistrationPage",
  components: {
    RegisterUser
  }
})
</script>

<style></style>
