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
  padding: '25px'
};

function CommunitySlider (options) {
  debugger;
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
}

function onCommunitySliderRestart () {
  this.button.show();
  this.slider.destroy();
}

function init () {
  this.button.render();
  $window.on('insided:community-slider:start', this.onCommunitySliderStart.bind(this));
  $window.on('insided:community-slider:restart', this.onCommunitySliderRestart.bind(this));
}

CommunitySlider.prototype.init = init;
CommunitySlider.prototype.onCommunitySliderStart = onCommunitySliderStart;
CommunitySlider.prototype.onCommunitySliderRestart = onCommunitySliderRestart;

module.exports = CommunitySlider;
