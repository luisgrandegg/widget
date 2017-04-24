'use strict';

var $ = require('jquery');
var assign = require('lodash.assign');

var styleLoader = require('../styleLoader');

var sliderFooterStyles = {
  'padding': '25px'
}

var defaults = {
  styles: sliderFooterStyles
};

function SliderFooter ($element, options) {
  this.$element = $element;
  this.options = assign({}, defaults, options);
  this.init();
}

function init () {
  var $footer = $('<footer>')
    .text('This is the footer')
    .addClass('insided-community-slider__footer');
  this.html = $footer;
  styleLoader.addStyle('insided-community-slider__footer', this.options.styles);
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
