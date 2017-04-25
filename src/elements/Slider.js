'use strict';

var $ = require('jquery');

var styleLoader = require('../styleLoader');

var SliderHeader = require('./SliderHeader');
var SliderFilters = require('./SliderFilters');
var SliderCards = require('./SliderCards');
var SliderFooter = require('./SliderFooter');

var $window = $(window);

function getSliderStyles () {
  return {
    'position': 'fixed',
    'box-shadow': '10px 0px 40px -1px black',
    'top': 0,
    'bottom': 0,
    'right': 0,
    'width': '500px',
    'background': "#FFF",
    'overflow': 'auto',
    'z-index': 999999
  };
}

function Slider ($element, options) {
  this.$element = $element;
  this.options = options;
  this.cssClass = this.options.cssNamespace + '-slider';
  this.init();
}

function init () {
  var $slider = $('<div>')
    .addClass(this.cssClass);
  this.header = new SliderHeader($slider, this.options);
  this.filters = new SliderFilters($slider, this.options);
  this.cards = new SliderCards($slider, this.options);
  this.footer = new SliderFooter($slider, this.options);
  this.html = $slider;
  styleLoader.addStyle(this.cssClass, getSliderStyles());
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
