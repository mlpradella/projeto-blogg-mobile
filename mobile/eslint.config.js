// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const { Assets } = require('@react-navigation/elements');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
]);

