# js_demo说明笔记

## webpack 执行命令行说明

``` JS
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack --config ./build/webpack.prod.js",
      "dev": "webpack-dev-server --config ./build/webpack.dev.js",
      "start": "live-server ./dist"
  },
  build 上线模式打包
  dev 开发编译模式
  start 运行打包好的文件
```

## 依赖包说明

``` JS
"devDependencies": {
    // 自动清理之前打包文件,并重新生成打包文件
    "clean-webpack-plugin": "^3.0.0",
    // 打包配置中的文件,比如assets
    "copy-webpack-plugin": "^5.1.1",
    // css加载处理
    "css-loader": "^3.4.2",
    // 文件加载
    "file-loader": "^5.1.0",
    // html文件插件
    "html-webpack-plugin": "^3.2.0",
    // less
    "less": "^3.11.1",
    // less加载
    "less-loader": "^5.0.0",
    // node-sass
    "node-sass": "^4.13.1",
    // 内容变更自动刷新
    "raw-loader": "^4.0.0",
    // sass加载
    "sass-loader": "^8.0.2",
    // 将生成的css文件自动加载到hmtl中
    "style-loader": "^1.1.3",
    // file-loader一起使用
    "url-loader": "^3.0.0",
    // webpack 核心包
    "webpack": "^4.42.0",
    // webpack 执行脚本
    "webpack-cli": "^3.3.11",
    // webpack编译好的开发服务器
    "webpack-dev-server": "^3.10.3"
  },
  "dependencies": {
    // 配置文件合并依赖
    "webpack-merge": "^4.2.2"
  }
```

## babel js编译处理工具

``` JS
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage" // 有警告
        // [https://github.com/babel/babel/issues/9751]
      }
    ]
  ],
    "plugins": [
    "@babel/plugin-proposal-class-properties", // 支持更高级的ES6语法
    "@babel/plugin-transform-runtime" // generator函数的支持 同时还需要安装运行时依赖 `npm i @babel/runtime -S`
  ]
  // ES6/7中对象原型提供的新方法，babel默认情况无法转换，即使用了`transform-runtime`的插件也不支持转换原型上的方法,需要时用该模块
  //  "@babel/polyfill": "^7.8.7"
}
```
