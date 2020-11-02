module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    quotes: [2, 'single'],
    semi: [2, 'never'],
    '@typescript-eslint/explicit-module-boundary-types': 0
  },
}
