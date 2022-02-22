<template>

 <div class="w-full h-full bg-cyberred">
  <img class="object-contain w-full h-48" alt="Logo" src="./assets/cyberise_logo_centered_small_resized_for_web.png" />
 </div>

  <Navigation />
  <router-view />

    <!-- Also included:  -->
    <!-- <HeroIcons /> -->
    <!-- <HeroPatterns /> -->
    <!-- <Typography /> -->
    <!-- <TypeScriptTutorial /> -->
    <!-- <DarkModeSwitch /> -->
    <!-- <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1> -->

</template>

<script lang="ts">
import { defineComponent } from 'vue'

// generic-components
import Navigation from './components/generics/Navigation.vue'

// examples
import DarkModeSwitch from './components/examples/DarkModeSwitch.vue'
import HeroIcons from './components/examples/HeroIcons.vue'
import HeroPatterns from './components/examples/HeroPatterns.vue'
import Typography from './components/examples/Typography.vue'
// import TypeScriptTutorial from './components/examples/TypeScriptTutorial.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navigation,
    DarkModeSwitch,
    HeroIcons,
    HeroPatterns,
    Typography,
    // TypeScriptTutorial
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: lightblue;
}
</style>
