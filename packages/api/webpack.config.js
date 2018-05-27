const nodeExternals = require('webpack-node-externals')

module.exports = {
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
          },
        },
      },
    ],
  },
}
