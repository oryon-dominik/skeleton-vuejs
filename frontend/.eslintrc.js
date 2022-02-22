module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.eslint.json'],
    },
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      "plugin:vue/base",
      "plugin:vue/vue3-essential",
      "plugin:vue/vue3-strongly-recommended",
      'plugin:vue/vue3-recommended',
      // Make sure "prettier" is the last element in this list.
      "prettier"
    ],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    }
}
