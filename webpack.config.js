var webpack = require('webpack');

module.exports = {  
  entry: {
    "element-animate-polyfill": "./src/index.ts",
    "element-animate-polyfill.min": "./src/index.ts",
  },
  devtool: 'source-map',
  output: {
    path: './dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      {test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.[a-z]+$/,
      minimize: true
    })
  ]
}
