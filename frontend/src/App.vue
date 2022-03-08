<template>
  <h1 class="animate-bounce animate-infinite">Forever Bouncing Heading</h1>
  <div class="w-screen h-screen max-h-screen overflow-hidden bg-fixed heropattern-eyes-red-100">
    <div class="w-screen h-screen bg-opacity-75 bg-cyberred">
      <div class="flex flex-col w-screen h-screen gap-2 mx-auto max-h-fit max-w-fit">
        <header class="order-first bg-blue-400 place-self-center">
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

        <div class="flex-initial w-5/6 max-h-screen min-w-full mx-2 max-w-screen place-self-center h-4/6">
          <div class="w-full h-full p-2 bg-white rounded-lg shadow-2xl shadow-black">
            <div class="container w-full h-full p-2 mx-auto bg-green-500 rounded-lg drop-shadow-2xl">
              <div
                class="w-full h-full overflow-x-auto overflow-y-scroll bg-blue-400 overscroll-scroll scrollbar scrollbar-thumb-red-900 scrollbar-track-red-100"
              >
                <router-view />
              </div>
            </div>
          </div>
        </div>

        <footer class="order-last bg-green-400 place-self-center">
          <h2 class="font-bold text-red-500">Footer</h2>
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
        </footer>
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
  background-color: $cyberred;
}
</style>
