/* .eslintrc.js */
module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-prototype-builtins': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-declare': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './src'],
      },
    },
  },
  // parserOptions: {
  //   project: './tsconfig.json',
  // },
}
