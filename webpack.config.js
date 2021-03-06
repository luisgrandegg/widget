'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'community-slider': path.join(__dirname, 'src', 'widget.js')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    })
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  }
};
