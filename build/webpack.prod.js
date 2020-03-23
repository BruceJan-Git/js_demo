/**
 * 上线阶段打包配置文件
 */
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const path = require('path')

module.exports = merge(commonConfig, {
  output: {
    // path: path.join(__dirname, './dist'),
    path: path.resolve('./dist'),
    filename: 'custom.js'
  },
  mode: 'production',
  devtool: 'cheap-module-source-map',
})