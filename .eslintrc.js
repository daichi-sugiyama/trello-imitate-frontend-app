module.exports = {
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'prettier/vue',
    'prettier/@typescript-eslint'
  ],
  plugins: ['prettier', '@typescript-eslint'],
  // add your custom rules here
  rules: {
    'object-shorthand': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false
      }
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'vue/attribute-hyphenation': ['error', 'always'],
    camelcase: 0
  }
}
