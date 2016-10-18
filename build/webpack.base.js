var path = require('path');
var webpack = require('webpack');

function getBaseConfig(dist) {
  return {
    cache: true,
    devtool: 'source-map',
    entry: {
      polyfills: './src/polyfills',
      vendor: './src/vendor'
    },
    output: {
      filename: dist + '/[name].bundle.js',
      sourceMapFilename: dist + '/[name].map',
      chunkFilename: dist + '/[id].chunk.js'
    },
    module: {
      loaders: [
        {test: /\.ts$/, loader: 'awesome-typescript-loader'},
        {test: /\.html/, loader: 'raw-loader'}
      ]
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({name: ['polyfills', 'vendor', 'main'].reverse(), minChunks: Infinity})
    ],

    resolve: {
      extensions: ['', '.ts', '.js', '.json'],
      modulesDirectories: ['node_modules']
    },

    devServer: {
      historyApiFallback: true,
      watchOptions: {aggregateTimeout: 300, poll: 1000}
    },

    node: {
      global: true,
      process: true,
      Buffer: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false,
      clearTimeout: true,
      setTimeout: true
    }
  }
};
module.exports = {
  getBaseConfig: getBaseConfig
};
