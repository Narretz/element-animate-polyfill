var webpack = require ('webpack');
var fs = require('fs-extra');
var http = require('http-server');
var webpackConfig = require('./webpack.config.js');
var livereload = require('livereload');

var compiler = webpack(webpackConfig);

var watcher = compiler.watch({}, function() {
  // copy();
});

function copy() {
  fs.emptyDir('./dist', function() {
    fs.mkdir('./dist', function() {
      fs.copy('./src/demos', './dist/demos');
    });
  });
}


var server = http.createServer({
  root: './dist'
});

server.listen(8888);

lr = livereload.createServer();
lr.watch(__dirname + "/dist");

