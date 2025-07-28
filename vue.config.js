const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {  // This will be the prefix for your API requests
        target: 'http://localhost:3000',  // Your backend server address
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''  // Remove the /api prefix when forwarding
        },
        secure: false  // Only for development if using HTTPS
      }
    }
  }
})