module.exports = {  
  entry: './src/index.ts',
  output: {
    filename: 'dist/element-animate-polyfill.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
