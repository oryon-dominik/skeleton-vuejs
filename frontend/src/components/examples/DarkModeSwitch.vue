<template>

  <SwitchGroup>
    <div class="flex items-center">
      <SwitchLabel class="mr-4">Darkmode</SwitchLabel>
      <Switch
        v-model="darkMode"
        :class='darkMode ? "bg-green-600" : "bg-gray-200"'
        class="relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <span
          :class='darkMode ? "translate-x-6" : "translate-x-1"'
          class="inline-block w-4 h-4 transition-transform duration-200 ease-in-out transform bg-white rounded-full shadow-lg pointer-events-none ring-0"
        />
      </Switch>
    </div>
  </SwitchGroup>
</template>

<script lang="ts">
import { ref, defineComponent, watch } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

  export default defineComponent({
    name: 'DarkModeSwitch',
    components: { Switch, SwitchGroup, SwitchLabel },

    setup() {
      const darkMode = ref(false)

      watch(darkMode, () => {
        localStorage.theme = darkMode.value ? 'dark': 'light'
        darkMode.value ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
      });
      return { darkMode }
    },
  })

</script>
