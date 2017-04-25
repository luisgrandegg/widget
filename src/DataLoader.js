'use strict';

var $ = require('jquery');

function DataLoader (options) {
  this.options = options;
}

function fetch () {
  return $.get(this.options.searchUrl);
}

DataLoader.prototype.fetch = fetch;

module.exports = DataLoader;
