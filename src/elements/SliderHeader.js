'use strict';

var $ = require('jquery');
var assign = require('lodash.assign');

var styleLoader = require('../styleLoader');

var $window = $(window);

var sliderHeaderStyles = {
  'position': 'relative',
  'background-color': '#1DADF5',
  'padding': '25px',
  'color': '#FFF'
};

var sliderTitleStyles = {
  'margin-top': 0
};

var sliderCloseButtonStyles = {
  'position': 'absolute',
  'text-decoration': 'none',
  'right': '25px',
  'top': '25px',
  'color': '#FFF'
};

var defaults = {
  styles: sliderHeaderStyles,
  title: 'Community',
  cssClass: 'insided-community-slider__header'
};

function triggerRestart (e) {
  e.preventDefault();
  $window.trigger('insided:community-slider:restart');
}

function SliderHeader ($element, options) {
  this.$element = $element;
  this.options = assign({}, defaults, options);
  this.init();
}

function init () {
  var $header = $('<header>')
    .addClass(this.options.cssClass);
  var $title = $('<h3>')
    .text(this.options.title)
    .addClass('insided-community-slider__title');
  var $closeButton = $('<a href="#">X</a>')
    .addClass('insided-community-slider__close')
    .on('click', triggerRestart);
  $header.append($title);
  $header.append($closeButton);
  this.html = $header;
  styleLoader.addStyle(this.options.cssClass, this.options.styles);
  styleLoader.addStyle('insided-community-slider__title', sliderTitleStyles);
  styleLoader.addStyle('insided-community-slider__close', sliderCloseButtonStyles);
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

SliderHeader.prototype.init = init;
SliderHeader.prototype.getHtml = getHtml;
SliderHeader.prototype.render = render;

module.exports = SliderHeader;
