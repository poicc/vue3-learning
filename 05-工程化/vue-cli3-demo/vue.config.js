const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// ,
//   devServer: {
//     before: require('./mock.js')// axios 请求拦截
// }