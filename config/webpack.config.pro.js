var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.config.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: './',
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[id].[chunkhash:8].chunk.js',
  },

  vue: {
    loaders: {
      sass: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!sass-loader'),
    },
  },

  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),

    new webpack.NoErrorsPlugin(),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin(),

    new ExtractTextPlugin('[name].[chunkhash:8].css',{
      allChunks: true,
    }),

  ]

});
