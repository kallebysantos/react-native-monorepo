/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
  },
};
