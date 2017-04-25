'use strict';

var $ = require('jquery');
var assign = require('lodash.assign');

var styleLoader = require('../styleLoader');

var $window = $(window);

var defaults = {
  buttonText: 'Community Help'
};

function getButtonStyles (options) {
  return {
    'position': 'fixed',
    'border': 0,
    'border-radius': '2px',
    'background-color': options.brandColor,
    'z-index': 999999,
    'right': 0,
    'top': '50%',
    'margin-top': '-20px',
    'color': '#FFF',
    'font-size': '16px',
    'padding': '15px',
    'cursor': 'pointer'
  };
}

function triggerStart () {
  $window.trigger('insided:community-slider:start');
}

function Button ($element, options) {
  this.$element = $element;
  this.options = assign({}, defaults, options);
  this.cssClass = this.options.cssNamespace;
  this.init();
}

function init () {
  var $button = $('<button>')
    .text(this.options.buttonText)
    .addClass(this.cssClass)
    .on('click', triggerStart);
  this.html = $button;
  styleLoader.addStyle(this.cssClass, getButtonStyles(this.options));
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

function show () {
  this.getHtml().show();
  return this;
}

function hide () {
  this.getHtml().hide();
  return this;
}

Button.prototype.init = init;
Button.prototype.getHtml = getHtml;
Button.prototype.render = render;
Button.prototype.show = show;
Button.prototype.hide = hide;

module.exports = Button;
