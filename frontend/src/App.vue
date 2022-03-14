<template>
  <div class="w-screen h-screen max-h-screen overflow-hidden bg-fixed heropattern-eyes-red-100">
    <div class="w-screen h-screen bg-opacity-75 bg-cyberred">
      <div class="flex flex-col w-screen h-full gap-2 mx-auto max-h-fit max-w-fit">
        <!-- setting the horizontal viewport resolution here -->
        <header class="order-first w-full place-self-center sm:w-sm md:w-md lg:w-lg">
          <Navigation />
        </header>

        <div class="flex-initial w-5/6 max-h-screen min-w-full mx-2 h-5/6 max-w-screen place-self-center">
          <RouterViewContent />
        </div>

        <footer class="order-last place-self-center">
          <FooterComponent />
        </footer>

        <!-- Included extras:
          HeroIcons
          HeroPatterns
          TypoGraphy
          DarkModeSwitch
          Customized tailwindui components
          Animations from animate.css -> https://ikcb.org/animated-tailwindcss
        -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

// generic-components
import Navigation from "./components/generics/Navigation.vue"
import RouterViewContent from "./components/generics/RouterViewContent.vue"
import FooterComponent from "./components/generics/Footer.vue"

// examples
// import HeroIcons from "./components/examples/HeroIcons.vue"
// import HeroPatterns from "./components/examples/HeroPatterns.vue"
import TypoGraphy from "./components/examples/TypoGraphy.vue"
// import TypeScriptTutorial from "./components/examples/TypeScriptTutorial.vue"

export default defineComponent({
  name: "App",
  components: {
    Navigation,
    RouterViewContent,
    FooterComponent,
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
