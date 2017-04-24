'use strict';

var $ = require('jquery');
var assign = require('lodash.assign');

var styleLoader = require('../styleLoader');

var SliderHeader = require('./SliderHeader');
var SliderFilters = require('./SliderFilters');
var SliderCards = require('./SliderCards');
var SliderFooter = require('./SliderFooter');

var $window = $(window);

var sliderStyles = {
  'position': 'fixed',
  'box-shadow': '10px 0px 40px -1px black',
  'top': 0,
  'bottom': 0,
  'right': 0,
  'width': '500px',
  'background': "#FFF",
  'z-index': 999999
};

var defaults = {
  styles: sliderStyles,
  cssClass: '-slider'
};

function Slider ($element, options) {
  this.$element = $element;
  this.options = assign({}, defaults, options);
  this.cssClass = this.options.cssNamespace + this.options.cssClass;
  this.init();
}

function init () {
  var $slider = $('<div>')
    .addClass(this.cssClass);
  this.header = new SliderHeader($slider);
  this.filters = new SliderFilters($slider);
  this.cards = new SliderCards($slider);
  this.footer = new SliderFooter($slider);
  this.html = $slider;
  styleLoader.addStyle(this.cssClass, this.options.styles);
  return this;
}

function getHtml () {
  return this.html;
}

function getStyles () {
  return this.options.styles;
}

function render () {
  this.getHtml().detach();
  this.header.render();
  this.filters.render();
  this.cards.render();
  this.footer.render();
  this.$element.append(this.getHtml());
  return this;
}

function destroy () {
  this.getHtml().detach();
  return this;
}

function setData (data) {
  this.data = data;
}

function getData () {
  return this.data;
}

Slider.prototype.init = init;
Slider.prototype.getHtml = getHtml;
Slider.prototype.getStyles = getStyles;
Slider.prototype.render = render;
Slider.prototype.destroy = destroy;
Slider.prototype.setData = setData;
Slider.prototype.getData = getData;

module.exports = Slider;
