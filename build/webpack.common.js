/**
 * 此配置文件为开发和上线公共模块
 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebapckPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    // test: './src/test.js',
  },
  output: {
    // 输出路径为绝对路径
    path: path.join(__dirname, '..', './dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  // 插件配置规则
  plugins: [
    new webpack.BannerPlugin('This is Jan'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CopyWebapckPlugin([
      {
        from: path.join(__dirname, '..', 'assets'),
        to: 'assets'
      }
    ]),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // 各个文件的配置处理
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['raw-loader']
      },
      {
        test: /\.css$/,
        // webpack调用包的顺序是从右到左
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|bmp|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // limit表示如果图片大于5KB，就以路径形式展示，小于的话就用base64格式展示
            limit: 5 * 1024,
            // 打包输出目录
            outputPath: 'images',
            // 打包输出图片名称
            name: '[name]-[hash:4].[ext]'
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|svg|ttf)$/,
        use: 'url-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/env'],
          //   plugins: [],
          // }
        },
        exclude: /node_modules/,
      }
    ]
  },
  // 模式
  // mode: 'none'
}