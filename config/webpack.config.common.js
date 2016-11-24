const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const path = require('path');
const InlineChunkWebpackPlugin = require('html-webpack-inline-chunk-plugin');

module.exports = {
  
  entry: {
    app: './src/main.js',            // 我们的应用代码。
    vendor: './src/vendor.js',       // 我们需要的提供商文件： Angular 、 Lodash 、 boojstrap.css ……
  },

  resolve: {
    extensions: ['', '.vue', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','stage-3'],
          plugins: [
            'transform-runtime'
          ]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'components'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
    ]
  },

  vue: {
    postcss: [
      require('autoprefixer')({
        browsers: ['> 1%']
      })
    ],
    loaders: {
      js: 'babel-loader'
    }
  },

  plugins: [

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'manifest'],
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new InlineChunkWebpackPlugin({
      inlineChunks: ['manifest']
    })

  ]
};
