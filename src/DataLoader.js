'use strict';

var $ = require('jquery');

var DataParser = require('./DataParser');

function DataLoader (options) {
  this.options = options;
  this.dataParser = new DataParser(this.options.parse);
}

function fetch () {
  var self = this;
  return self.dataParser.getData()
    .then(function (parsedData) {
      return $.get(self.options.searchUrl, parsedData);
    });
}

DataLoader.prototype.fetch = fetch;

module.exports = DataLoader;
