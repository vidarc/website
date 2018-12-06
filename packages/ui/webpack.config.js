const path = require('path')
const Stylish = require('webpack-stylish')

module.exports = {
  stats: 'none',

  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react'],
              ['@babel/preset-flow']
            ],
            plugins: [
              '@babel/plugin-transform-typescript',
              '@babel/transform-runtime',
              '@babel/plugin-proposal-export-default-from',
              'emotion'
            ]
          }
        }
      }
    ]
  },

  plugins: [new Stylish()]
}
