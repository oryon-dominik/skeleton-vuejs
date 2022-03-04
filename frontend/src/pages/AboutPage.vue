<template>
  <h1>About</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "AboutPage",
  components: {},
  props: {
    msg: {
      type: String,
      default: "AboutPage"
    }
  },
  setup() {
    return {}
  }
})
</script>
<style lang="scss" scoped></style>
