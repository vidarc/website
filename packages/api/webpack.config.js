const path = require('path')
const nodeExternals = require('webpack-node-externals')
const Stylish = require('webpack-stylish')

module.exports = {
  mode: 'development',
  stats: 'none',

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
            presets: [
              ['flow'],
              [
                'env',
                {
                  targets: {
                    node: '8',
                  },
                },
              ],
            ],
            plugins: ['transform-runtime'],
          },
        },
      },
    ],
  },

  plugins: [new Stylish()],
}
