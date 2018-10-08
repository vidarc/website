const path = require('path')
const Stylish = require('webpack-stylish')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  stats: 'none',

  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs',
  },

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react'],
              ['@babel/preset-flow'],
            ],
            plugins: [
              '@babel/transform-runtime',
              '@babel/plugin-proposal-export-default-from',
              'emotion',
            ],
          },
        },
      },
    ],
  },

  plugins: [new Stylish()],
}
