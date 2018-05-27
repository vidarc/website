const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', path.resolve('src/server/index.js')],

  output: {
    path: path.resolve(__dirname, 'functions'),
    filename: 'index.js',
    chunkFilename: 'chunk-[name].server.bundle.js',
    libraryTarget: 'this',
  },

  target: 'node',

  externals: [nodeExternals()],

  node: {
    __dirname: false,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          plugins: ['transform-class-properties'],
          presets: ['env'],
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.css$/],
        loader: 'file-loader',
        options: {
          emitFile: false,
        },
      },
    ],
  },

  plugins: [new NodemonPlugin()],
}
