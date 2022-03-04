# vuejs-skeleton -> Vue 3 + Typescript + Vite

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

Run Unit Tests with [Cypress Component Testing](https://docs.cypress.io/guides/component-testing/introduction)

    yarn test:unit # or `yarn test:unit:ci` for headless testing

Run End-to-End Tests with [Cypress](https://www.cypress.io/)

    yarn build
    yarn test:e2e # or `yarn test:e2e:ci` for headless testing

Lint with [ESLint](https://eslint.org/)

    yarn lint
