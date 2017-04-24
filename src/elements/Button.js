'use strict';

var $ = require('jquery');
var assign = require('lodash.assign');

var styleLoader = require('../styleLoader');

var $window = $(window);

var buttonStyles = {
  'position': 'fixed',
  'border': 0,
  'border-radius': '2px',
  'background-color': '#1DADF5',
  'z-index': 999999,
  'right': 0,
  'top': '50%',
  'margin-top': '-20px',
  'color': '#FFF',
  'font-size': '16px',
  'padding': '15px',
  'cursor': 'pointer'
};

var defaults = {
  styles: buttonStyles,
  text: 'Community Help'
};

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
  var $button = $('<button>' + this.options.text +'</button>')
    .addClass(this.cssClass)
    .on('click', triggerStart);
  this.html = $button;
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
Button.prototype.getStyles = getStyles;
Button.prototype.render = render;
Button.prototype.show = show;
Button.prototype.hide = hide;

module.exports = Button;
