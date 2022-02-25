/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    // Make sure "prettier" is the last element in this list.
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'prettier'
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    quotes: ['error', 'single'],
    'vue/require-v-for-key': 'off'
    // add your custom rules here
  },
  overrides: [
    {
      files: ['**/__tests__/*.spec.{js,ts}', 'cypress/integration/**.spec.{js,ts}'],
      extends: ['plugin:cypress/recommended']
    }
  ]
}
