/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      resolve(__dirname, "./tsconfig.eslint.json"),
      resolve(__dirname, './tsconfig.json'),
      resolve(__dirname, "./tailwind.config.js"),
      resolve(__dirname, "./postcss.config.js")
    ],
    "ecmaVersion": "latest",
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue", ".html"]
  },
  plugins: [
    // "vue",
    "@typescript-eslint"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/base",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
    // Make sure "prettier" is the last element in this list.
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "prettier"
  ],
  env: {
    "vue/setup-compiler-macros": true,
    node: true,
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  rules: {
    quotes: "off",
    // add your custom rules here
    "vue/require-v-for-key": "off",
    "comma-dangle": "off",
    "no-irregular-whitespace": "off",
    "no-multiple-empty-lines": "off",
    "prettier/prettier": [
      "error",
      {
        // this is duplicattion from .prettierrc.json
        singleQuote: false,
        semi: false,
        tabWidth: 2,
        trailingComma: "none",
        printWidth: 119,
        proseWrap: "preserve",
        endOfLine: "lf",
        htmlWhitespaceSensitivity: "ignore"
      },
      {
        usePrettierrc: false
      }
    ],
    "array-element-newline": ["error", "consistent"],
    "array-bracket-newline": ["error", "consistent"]
  },
  overrides: [
    {
      files: ["**/__tests__/*.spec.{js,ts}", "cypress/integration/**.spec.{js,ts}"],
      extends: ["plugin:cypress/recommended"]
    }
  ]
}
