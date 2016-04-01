module.exports = {  
  devtool: 'source-map',
  output: {
    filename: 'dist/element-animate-polyfill.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      {test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/}
    ]
  }
}
