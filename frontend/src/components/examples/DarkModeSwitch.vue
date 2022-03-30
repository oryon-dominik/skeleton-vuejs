<template>
  <SwitchGroup>
    <div class="flex items-center">
      <Switch
        v-model="darkMode"
        :class="darkMode ? 'bg-cyberred' : 'bg-gray-200'"
        class="relative inline-flex items-center h-6 mt-2 ml-2 transition-colors rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyberred focus:opacity-80"
      >
        <span
          :class="darkMode ? 'translate-x-6' : 'translate-x-1'"
          class="inline-block w-4 h-4 transition-transform duration-200 ease-in-out transform bg-white rounded-full shadow-lg pointer-events-none ring-0"
        />
      </Switch>

      <div class="relative mx-5 mb-6">
        <Transition
          enter-from-class="transition duration-300 opacity-0"
          enter-active-class=""
          enter-to-class="transition duration-300 opacity-100 animate-pulse"
          leave-from-class="transition duration-300 opacity-100 animate-pulse"
          leave-active-class=""
          leave-to-class="transition duration-300 opacity-0"
        >
          <div v-if="darkMode" class="absolute">
            <MoonIcon class="w-8 h-8 text-indigo-500" />
          </div>
          <div v-else class="absolute">
            <SunIcon class="w-8 h-8 text-orange-500" />
          </div>
        </Transition>
      </div>
    </div>
  </SwitchGroup>
</template>

<script lang="ts">
import { ref, defineComponent, watch } from "vue"
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue"
import { MoonIcon, SunIcon } from "@heroicons/vue/outline"

export default defineComponent({
  name: "DarkModeSwitch",
  components: { Switch, SwitchGroup, SwitchLabel, MoonIcon, SunIcon },

  setup() {
    const darkMode = ref(true)

    watch(darkMode, () => {
      localStorage.theme = darkMode.value ? "light" : "dark"
      darkMode.value
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark")
    })
    return { darkMode }
  }
})
</script>
