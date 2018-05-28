const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',

  output: {
    path: path.resolve(__dirname),
    filename: 'index.js',
    chunkFilename: 'chunk-[name].server.bundle.js',
    libraryTarget: 'this',
  },

  externals: [
    nodeExternals({
      modulesFromFile: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['flow', 'env'],
            plugins: ['transform-runtime'],
          },
        },
      },
    ],
  },
}
