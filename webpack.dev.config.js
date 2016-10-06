var path = require('path');
var webpack = require('webpack');
var webpackBase = require('./build/webpack.base');


var config = webpackBase.getBaseConfig('./dist');
config.entry['demo'] = './src/demo/demo';
console.log(config);
module.exports = config;
