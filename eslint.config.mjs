import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.browser,
      parser: parser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'eslint:recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      'no-console': 'warn',
      semi: ['error', 'always'],
      'no-unused-vars': 'error',
      eqeqeq: 'error',
      'prefer-const': 'error',
      'no-undef': 'error',
      'prettier/prettier': ['error'],
    },
    globals: {
      process: 'readonly',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
