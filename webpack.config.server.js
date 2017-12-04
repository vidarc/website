const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve('src/server/server.js'),

  output: {
    filename: 'build/server.bundle.js',
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs
    .readdirSync(path.resolve('node_modules'))
    .concat(['react-dom/server'])
    .reduce((ext, mod) => {
      ext[mod] = `commonjs ${mod}`
      return ext
    }, {}),

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
          presets: ['env', 'react', 'stage-0'],
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

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
      },
    }),
  ],
}
