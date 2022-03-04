<template>
  <h1>Imprint</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "ImprintPage",
  components: {},
  props: {
    msg: {
      type: String,
      default: "Impressum"
    }
  },
  setup() {
    return {}
  }
})
</script>
<style lang="scss" scoped></style>
