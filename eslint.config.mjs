import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: ['node_modules', 'dist'], // Directly replace the .eslintignore content here
    languageOptions: {
      globals: globals.browser,
      parser: parser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      'no-console': 'warn',
      semi: ['error', 'always'],
      'no-unused-vars': 'error',
      eqeqeq: 'error',
      'prefer-const': 'error',
      'no-undef': 'error',
      'prettier/prettier': ['error'],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly', // Define additional global variables
      },
    },
  },
];
