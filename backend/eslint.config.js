// config eslint v9 flat config
const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    // globals node CommonJS : require, module, process, console...
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.commonjs,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
  {
    // globals jest pour les fichiers de test
    files: ['test/**/*.js'],
    languageOptions: {
      globals: globals.jest,
    },
  },
];
