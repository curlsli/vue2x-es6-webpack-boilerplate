#vue2x-es6-webpack-bolierplate

一套自用的 vue2.x + es6 + webpack 的模版

#package.json 说明
  
  -- 下面仅是一些随意的纪录，后续会整理
  index.html 生成
  html-webpack-plugin

  webpack 相关
  webpack
  webpack-dev-server
  webpack-merge

  https://github.com/babel/babel-loader
  babel-loader 
  babel-core 
  babel-preset-es2015 
  
  new webpack.DefinePlugin
  DefinePlugin
  通过DefinePlugin可以定义一些全局的变量，我们可以在模块当中直接使用这些变量，无需作任何声明
  http://yuyang041060120.github.io/2016/05/05/webpack-defineplugin-and-provideplugin/

  // CommonsChunkPlugin
  // 我们希望 app.js 包中只包含应用代码，而 vendor.js 包中只包含提供商代码。
  // 应用代码中 import 了提供商代码。 Webpack 还没有智能到自动把提供商代码排除在 app.js 包之外。 
  // CommonsChunkPlugin 插件能完成此工作。
  // 这里标记出了三个 块 之间的等级体系： app -> vendor -> polyfills 。 
  // 当 Webpack 发现 app 与 vendor 有共享依赖时，就把它们从 app 中移除。 
  // 在 vendor 和 polyfills 之间有共享依赖时也同样如此 ( 虽然它们没啥可共享的 ) 。
  new webpack.optimize.CommonsChunkPlugin({
    name: ['app', 'vendor']
  }),
  https://segmentfault.com/a/1190000004172052

  /允许错误不打断程序
  new webpack.NoErrorsPlugin(),

  npm install sass-loader node-sass webpack --save-dev
  https://github.com/jtangelder/sass-loader


node -v
v6.3.0
npm -v
3.10.3


