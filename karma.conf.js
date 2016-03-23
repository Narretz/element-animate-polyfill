module.exports = function(config) {
  config.set({
    browsers : ['Chrome'],

    frameworks: ['jasmine'],

    files: [
      'test/*spec.ts'
    ],

    plugins: [
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-jasmine')
    ],

    preprocessors: {
      'test/*_spec.ts': ['webpack']
    },

    webpack: require('./webpack.config.js'),

    webpackMiddleware: {
      noInfo: true
    }
  });
};
