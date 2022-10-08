<template>
  <div class="w-screen h-screen max-h-screen overflow-hidden bg-fixed heropattern-eyes-red-100">
    
    <div class="w-screen h-screen bg-opacity-75 bg-cyberred">
      <!-- setting the horizontal viewport resolution here -->
      <div class="flex flex-col justify-between w-screen h-full max-h-screen gap-1 px-4 mx-auto lg:w-9/12">
        <header class="order-first w-full place-self-center">
          <HeaderComponent />
        </header>

        <div class="flex-1 h-full max-h-full min-w-full mx-2 place-self-center">
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

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

// generic-components
import HeaderComponent from "./components/generics/Header.vue"
import RouterViewContent from "./components/generics/Content.vue"
import FooterComponent from "./components/generics/Footer.vue"

// examples
// import HeroIcons from "./components/examples/HeroIcons.vue"
// import HeroPatterns from "./components/examples/HeroPatterns.vue"
import TypoGraphy from "./components/examples/TypoGraphy.vue"
// import TypeScriptTutorial from "./components/examples/TypeScriptTutorial.vue"
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
