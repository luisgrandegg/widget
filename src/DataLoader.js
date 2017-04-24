'use strict';

var $ = require('jquery');

var mockData = require('../data/posts');

function DataLoader (key) {
  this.key = key;
}

function fetch () {
  var $deferred = $.Deferred();
  $deferred.resolve(mockData);
  return $deferred.promise();
}

DataLoader.prototype.fetch = fetch;

module.exports = DataLoader;
