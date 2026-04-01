// config eslint v9 flat config
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    // règles projet
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
