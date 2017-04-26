'use strict';

var $ = require('jquery');
var assign = require('lodash.assign');

var styleLoader = require('./styleLoader');
var Slider = require('./elements/Slider');
var Button = require('./elements/Button');

var $window = $(window);

var defaults = {
  element: 'body',
  cssNamespace: 'insided-community',
  brandColor: '#1DADF5',
  padding: '25px',
  animationTime: '1000'
};

function noop () {}

function CommunitySlider (options) {
  this.options = assign({}, defaults, options);;
  this.element = this.options.element;
  this.$element = $(this.element);
  this.button = new Button(this.$element, this.options);
  this.slider = new Slider(this.$element, this.options);
  this.init();
}

function onCommunitySliderStart () {
  this.button.hide();
  this.slider.render();
  this.onStart();
}

function onCommunitySliderRestart () {
  this.button.show();
  this.slider.destroy();
  this.onRestart();
}

function destroy () {
  this.button.destroy();
  this.slider.destroy();
  $window.off('insided:community-slider:start');
  $window.off('insided:community-slider:restart');
}

function start () {
  $window.trigger('insided:community-slider:start');
}

function init () {
  this.button.render();
  $window.on('insided:community-slider:start', this.onCommunitySliderStart.bind(this));
  $window.on('insided:community-slider:restart', this.onCommunitySliderRestart.bind(this));
}

CommunitySlider.prototype.init = init;
CommunitySlider.prototype.start = start;
CommunitySlider.prototype.destroy = destroy;
CommunitySlider.prototype.onStart = noop;
CommunitySlider.prototype.onRestart = noop;
CommunitySlider.prototype.onCommunitySliderStart = onCommunitySliderStart;
CommunitySlider.prototype.onCommunitySliderRestart = onCommunitySliderRestart;

module.exports = CommunitySlider;
