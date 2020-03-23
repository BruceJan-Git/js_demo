/**
 * 开发阶段打包配置文件
 */
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig,
  {
    // 开发模式为编译(开发)模式,即所谓的运行时编译
    mode: 'development',
    // 是否开启监视模式
    watch: false,
    // 配置webpack-dev-server 开启webpack服务器,专供开发时使用
    devServer: {
      port: 8081,
      open: true,
      hot: true
    },
  })