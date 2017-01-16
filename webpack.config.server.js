var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

module.exports = {

  entry: path.resolve('src/server.js'),

  output: {
    filename: 'build/server.bundle.js'
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve('node_modules')).concat([
    'react-dom/server'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __dirname: false
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true
			}
		}),
  ]

}
