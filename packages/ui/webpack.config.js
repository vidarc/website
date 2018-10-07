module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/flow'],
              [
                '@babel/env',
                {
                  targets: {
                    node: '8'
                  }
                }
              ]
            ],
            plugins: ['@babel/transform-runtime']
          }
        }
      }
    ]
  }
}
