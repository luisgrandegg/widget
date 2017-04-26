'use strict';

var $ = require('jquery');

var defaults = [
  {
    field: 'meta_keywords',
    tag: 'meta',
    name: 'keywords',
    attr: 'content'
  },
  {
    field: 'meta_description',
    tag: 'meta',
    name: 'description',
    attr: 'content'
  }
];

function noop () {}

function DataParser (options) {
  this.options = options || defaults;
  this.data = {};
  this.$deferred = $.Deferred();
  this.init();
}

function getSelector (dataToParse) {
  var selector = '';
  if (dataToParse.tag) {
    selector += dataToParse.tag;
  }
  if (dataToParse.name) {
    selector += '[name=' + dataToParse.name + ']';
  }
  return selector;
}

function getValue (dataToParse, $elementToParse) {
  if (dataToParse.attr) {
    return $elementToParse.attr(dataToParse.attr);
  }
}

function parseData (dataToParse) {
  var selector = getSelector(dataToParse);
  var $elementToParse = $(selector);
  var parsedData = getValue(dataToParse, $elementToParse);
  this.data[dataToParse.field] = parsedData;
}

function getData () {
  return this.$deferred.promise();
}

function init () {
  this.options.forEach(this.parseData.bind(this));
  this.$deferred.resolve(this.data);
}

DataParser.prototype.init = init;
DataParser.prototype.parseData = parseData;
DataParser.prototype.getData = getData;

module.exports = DataParser;
