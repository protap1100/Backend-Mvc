import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: { ...globals.browser, process: 'readonly' },
    },
    rules: {
      eqeqeq: 'off',
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
    ignores: ['**/node_modules/**', '**/dist/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    ignores: ['node_modules/*', 'dist/*'],
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { prettier },
  },
];
