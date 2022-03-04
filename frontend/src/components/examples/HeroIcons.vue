<template>
  <div class="content-center">
    <CheckCircleIcon class="w-8 h-8 text-red-500" />
  </div>
</template>

<script lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/solid"
import { defineComponent } from "vue"
export default defineComponent({
  name: "HeroIcons",
  components: {
    CheckCircleIcon
  }
})
</script>
