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
    /**
     * 使用 cheap 模式可以大幅提高 soure map 生成的效率
     * 使用 module 可支持 babel 这种预编译工具，映射转换前的代码
     * 使用 eval 方式可大幅提高持续构建效率。
     * 使用 eval-source-map 模式可以减少网络请求。
     */
    // devtool: 'cheap-module-source-map',
    devtool: 'cheap-module-eval-source-map',
  })