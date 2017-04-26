'use strict';

var $ = require('jquery');
var assign = require('lodash.assign');

var time = require('../util/time');
var styleLoader = require('../styleLoader');

var SliderHeader = require('./SliderHeader');
var SliderFilters = require('./SliderFilters');
var SliderCards = require('./SliderCards');
var SliderFooter = require('./SliderFooter');

var $window = $(window);

function getSliderStyles (options) {
  return {
    'position': 'fixed',
    'box-shadow': '10px 0px 40px -1px black',
    'top': 0,
    'bottom': 0,
    'right': 0,
    'width': options.width,
    'right': '-' + options.width,
    'background': "#FFF",
    'overflow': 'auto',
    'z-index': 999999,
    'transition': 'right ' + time.toSeconds(options.animationTime)
  };
}

function getSliderVisibleStyles (options) {
  return {
    'right': 0
  }
}

var defaults = {
  width: '500px'
};

function Slider ($element, options) {
  this.$element = $element;
  this.options = assign({}, defaults, options);
  this.cssClass = this.options.cssNamespace + '-slider';
  this.visibleCssClass = 'visible';
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
  styleLoader.addStyle(this.cssClass, getSliderStyles(this.options));
  styleLoader.addStyle(this.cssClass + '.' + this.visibleCssClass, getSliderVisibleStyles(this.options));
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
  this.show();
  return this;
}

function destroy () {
  var self = this;
  self.hide();
  setTimeout(function () {
    self.getHtml().detach();
  }, self.options.animationTime);
  return self;
}

function show () {
  var self = this;
  setTimeout(function () {
    self.getHtml().addClass(self.visibleCssClass);
  });
  return self;
}

function hide () {
  this.getHtml().removeClass(this.visibleCssClass);
  return this;
}

Slider.prototype.init = init;
Slider.prototype.getHtml = getHtml;
Slider.prototype.getStyles = getStyles;
Slider.prototype.render = render;
Slider.prototype.show = show;
Slider.prototype.hide = hide;
Slider.prototype.destroy = destroy;

module.exports = Slider;
