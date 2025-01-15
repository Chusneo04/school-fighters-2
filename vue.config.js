const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'core-js',
    'vue',
    'vue-router',
    'tailwindcss'
  ]
});
