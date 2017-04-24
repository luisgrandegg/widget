'use strict';

var $ = require('jquery');

var $head = $('head');

var $styles = $('<style>');

var styles = [];

function parseStylesHash (selector, stylesHash) {
  var styles = selector + '{';
  for (var rule in stylesHash) {
    styles += rule + ':' + stylesHash[rule] + ';';
  }
  styles += '}';
  return styles;
}

function addStyle (selector, stylesHash) {
  styles.push({
    selector: '.' + selector,
    stylesHash: stylesHash
  });
  cacheStyles();
  writeStyles();
}

function cacheStyles () {
  var stylesString = '';
  styles.forEach(function (style) {
    stylesString += parseStylesHash(style.selector, style.stylesHash);
  });
  $styles.text(stylesString);
  return $styles;
}

function writeStyles () {
  $styles.detach();
  $head.append($styles);
}

module.exports = {
  addStyle: addStyle
};
