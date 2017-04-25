'use strict';

var $ = require('jquery');
var assign = require('lodash.assign');

var styleLoader = require('../styleLoader');

var $window = $(window);

function getHeaderStyles (options) {
  return {
    'position': 'relative',
    'background-color': options.brandColor,
    'padding': options.padding,
    'color': '#FFF'
  };
}

function getSliderTitleStyles () {
  return {
    'margin-top': 0
  };
}

function getSliderCloseButtonStyles (options) {
  return {
    'position': 'absolute',
    'text-decoration': 'none',
    'right': options.padding,
    'top': options.padding,
    'color': '#FFF'
  };
}

var defaults = {
  headerTitle: 'Community'
};

function triggerRestart (e) {
  e.preventDefault();
  $window.trigger('insided:community-slider:restart');
}

function SliderHeader ($element, options) {
  this.$element = $element;
  this.options = assign({}, defaults, options);
  this.cssClass = {
    header: this.options.cssNamespace + '__header',
    title: this.options.cssNamespace + '__title',
    closeButton: this.options.cssNamespace + '__close'
  };
  this.init();
}

function init () {
  var $header = $('<header>')
    .addClass(this.cssClass.header);
  var $title = $('<h3>')
    .text(this.options.headerTitle)
    .addClass(this.cssClass.title);
  var $closeButton = $('<a href="#">X</a>')
    .addClass(this.cssClass.closeButton)
    .on('click', triggerRestart);
  $header.append($title);
  $header.append($closeButton);
  this.html = $header;
  styleLoader.addStyle(this.cssClass.header, getHeaderStyles(this.options));
  styleLoader.addStyle(this.cssClass.title, getSliderTitleStyles());
  styleLoader.addStyle(this.cssClass.closeButton, getSliderCloseButtonStyles(this.options));
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
