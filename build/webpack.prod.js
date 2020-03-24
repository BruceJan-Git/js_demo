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
    filename: '[name].js',
  },
  mode: 'production',
  // devtool: 'none',  不推荐生产模式使用source map
})