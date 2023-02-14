const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        '/api': {
            target: 'https://todo.talllkai.com',
            changeOrigin: true
        }
    }
  }
})
