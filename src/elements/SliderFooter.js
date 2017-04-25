'use strict';

var $ = require('jquery');
var assign = require('lodash.assign');

var styleLoader = require('../styleLoader');

function getSliderFooterStyles (options) {
  return {
    'padding': options.padding
  };
}

var defaults = {
  footerText: 'I am a footer'
};

function SliderFooter ($element, options) {
  this.$element = $element;
  this.options = assign({}, defaults, options);
  this.cssClass = this.options.cssNamespace + '__footer';
  this.init();
}

function init () {
  var $footer = $('<footer>')
    .text(this.options.footerText)
    .addClass(this.cssClass);
  this.html = $footer;
  styleLoader.addStyle(this.cssClass, getSliderFooterStyles(this.options));
  return this;
}

function getHtml () {
  return this.html;
}

function render () {
  this.getHtml().detach();
  this.$element.append(this.getHtml());
  return this;
}

SliderFooter.prototype.init = init;
SliderFooter.prototype.getHtml = getHtml;
SliderFooter.prototype.render = render;

module.exports = SliderFooter;
