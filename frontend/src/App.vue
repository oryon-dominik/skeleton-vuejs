<template>
  <div class="wrapper heropattern-eyes-red-100">
    <div class="container w-full h-full">
      <div class="heropattern-eyes-red-100">
        <div class="bg-cyberred opacity-90">
          <header>
            <div class="grid grid-cols-3 gap-2">
              <div>
                <MoonIcon class="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <img
                  class="object-contain w-full h-48"
                  alt="Logo"
                  src="./assets/cyberise_logo_centered_small_resized_for_web.png"
                />
              </div>
              <div>
                <!-- empty col -->
              </div>
              <div class="col-span-3">
                <Navigation />
              </div>
            </div>
          </header>

          <!-- Flex version classes: "flex items-center justify-center h-screen" -->
          <div class="grid h-screen place-items-center">
            <div class="relative h-32 w-32...">
              <div class="absolute inset-0 ...">
                <router-view />
              </div>
            </div>
          </div>

          <footer>Footer</footer>

          <!-- prettier-ignore -->
          <div>
            <!-- Also included:  -->
            <!-- <HeroIcons /> //NOSONAR -->
            <!-- <HeroPatterns /> //NOSONAR -->
            <!-- <TypoGraphy /> //NOSONAR -->
            <!-- <TypeScriptTutorial /> //NOSONAR -->
            <!-- <DarkModeSwitch /> //NOSONAR -->
            <!-- <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1> //NOSONAR -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

// generic-components
import Navigation from "./components/generics/Navigation.vue"

import { MoonIcon } from "@heroicons/vue/outline"

// examples
import DarkModeSwitch from "./components/examples/DarkModeSwitch.vue"
// import HeroIcons from "./components/examples/HeroIcons.vue"
// import HeroPatterns from "./components/examples/HeroPatterns.vue"
import TypoGraphy from "./components/examples/TypoGraphy.vue"
// import TypeScriptTutorial from "./components/examples/TypeScriptTutorial.vue"

export default defineComponent({
  name: "App",
  components: {
    Navigation,
    DarkModeSwitch,
    MoonIcon,
    // HeroIcons,
    // HeroPatterns,
    TypoGraphy,
    // TypeScriptTutorial
  }
})
</script>

<style lang="scss">
@import "./styles/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $cyberred;
}
</style>
