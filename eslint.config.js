import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

export default [
  js.configs.recommended,
  ...compat.config({
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    env: {
      browser: true,
      es2021: true,
    },
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  }),
];
