var path = require('path');
var webpack = require('webpack');
var webpackBase = require('./build/webpack.base');


var config = webpackBase.getBaseConfig('./docs/dist');
config.entry['index'] = './docs/index';
console.log(config);
module.exports = config;
