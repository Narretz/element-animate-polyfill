module.exports = function(config) {
  config.set({
    browsers : ['Chrome'],
    frameworks: ['jasmine'],
    singleRun: true,
    autoWatch: false,


    files: [
      'test/*spec.ts'
    ],

    plugins: [
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-jasmine')
    ],

    preprocessors: {
      'test/*_spec.ts': ['webpack', 'sourcemap']
    },

    webpack: require('./webpack.config.js'),

    webpackMiddleware: {
      noInfo: true
    }
  });
};
