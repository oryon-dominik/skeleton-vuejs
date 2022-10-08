<template>
  <div class="content-center">
    <MoonIcon class="w-8 h-8 text-yellow-500" />
  </div>
</template>

<script lang="ts">
import { MoonIcon } from "@heroicons/vue/24/outline"
import { defineComponent } from "vue"
export default defineComponent({
  name: "HeroIcons",
  components: {
    MoonIcon
  }
})
</script>
