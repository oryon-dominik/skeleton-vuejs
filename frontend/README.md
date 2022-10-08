# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


---

### vite & vue-ts
yarn create vite <frontend_name> --template vue-ts
cd frontend

### pinia
yarn add pinia pinia-plugin-persist

### vue router
yarn add vue-router@4

### tailwind
yarn add --dev tailwindcss postcss autoprefixer
yarn add tailwindcss-hero-patterns @tailwindcss/forms @tailwindcss/typography
yarn add --dev tailwind-scrollbar
yarn add --dev animated-tailwindcss
echo "config files are already deliverd in this repo.. so skipping: 'npx tailwindcss init -p'"

### vitest
yarn add --dev vitest

### vue developer experience
yarn add @vuedx/typescript-plugin-vue

### extras
yarn add axios uuid sass js-cookie @types/js-cookie
yarn add @headlessui/vue @heroicons/vue @iconify/json
yarn add --dev @types/node

### eslint & prettier
yarn add --dev eslint eslint-config-prettier eslint-plugin-html eslint-plugin-prettier eslint-plugin-vue prettier
yarn add --dev @vue/eslint-config-prettier @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
yarn add --dev @rushstack/eslint-patch

### cypress
yarn add --dev cypress eslint-plugin-cypress
yarn add --dev start-server-and-test @cypress/vue @cypress/vite-dev-server

# TOOD: fixme 
I removed
class "h-full" in body and html what are the effects?!?



## Supports

- tailwind-utility-styled forms
    <input type="checkbox" class="text-green-500 rounded" />
- HeroIcons
- HeroPatterns
- DarkMode
- TypoGraphy
- HeadlessUI (https://headlessui.dev/vue)

## Usage

Set the latest stable release as mandatory

    yarn policies set-version

Project Setup

    yarn install

Compile and Hot-Reload for Development

    yarn dev

Type-Check, Compile and Minify for Production

    yarn build
<!-- 
Run Unit Tests with [Cypress Component Testing](https://docs.cypress.io/guides/component-testing/introduction)

    yarn test:unit # or `yarn test:unit:ci` for headless testing

Run End-to-End Tests with [Cypress](https://www.cypress.io/)

    yarn build
    yarn test:e2e # or `yarn test:e2e:ci` for headless testing

Lint with [ESLint](https://eslint.org/)

    yarn lint -->
