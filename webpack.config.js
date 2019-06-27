const webpack = require('webpack');

module.exports = {
  entry: ['@babel/polyfill', './public/js/index.js'],
  output: {
    path: __dirname + '/build/js',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  // When jquery needs
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     $: 'jquery',
  //     jQuery: 'jquery',
  //   }),
  // ],
}