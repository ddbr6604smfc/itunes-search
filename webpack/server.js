/* eslint-disable no-var, func-names, no-console */

var path = require('path');
var ip = require('ip');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.watch');

var app = express();
var compiler = webpack(config);

var ipAddress = ip.address();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(3000, ipAddress, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://${ipAddress}:3000`);
});
