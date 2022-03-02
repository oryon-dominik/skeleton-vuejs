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
    'prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    quotes: ['error', 'double'],
    // add your custom rules here
    'vue/require-v-for-key': 'off',
    'comma-dangle': ['error', 'ignore'],
    'no-irregular-whitespace': 'off',
    "array-element-newline": ["error", "consistent"],
    "array-bracket-newline": ["error", "consistent"],
  },
  overrides: [
    {
      files: ['**/__tests__/*.spec.{js,ts}', 'cypress/integration/**.spec.{js,ts}'],
      extends: ['plugin:cypress/recommended']
    }
  ]
}
