'use strict';

var $ = require('jquery');
var assign = require('lodash.assign');

var styleLoader = require('../styleLoader');

var stylesLoaded = false;

var sliderCardStyles = {
  'padding': '25px',
  'border-bottom': '1px solid black',
  'display': 'table'
};

var sliderUserAvatarStyles = {
  'display': 'table-cell',
  'vertical-align': 'top',
  'text-align': 'center',
  'overflow': 'hidden',
  'padding-right': '25px'
};

var sliderUserAvatarImageStyles = {
  'width': '50px',
  'height': '50px',
  'border-radius': '100%'
};

var sliderCardContentStyles = {
  'display': 'table-cell',
  'vertical-align': 'top'
};

var sliderUserNameStyles = {
  'color': '#1DADF5',
  'margin-right': '10px'
};

var sliderUserRankStyles = {

};

var sliderCardTitleStyles = {

};

var sliderCardTextStyles = {

};

function SliderCard ($element, options, data) {
  this.$element = $element;
  // this.options = assing({}, defaults, options);
  this.data = data;
  this.init();
}

function init () {
  var $card = $('<div>')
    .addClass('insided-community-slider__card')
  var $userAvatarImage = $('<img>')
    .attr('src', this.data.user.avatar)
    .addClass('insided-community-slider__user-avatar--image');
  var $userAvatar = $('<div>')
    .addClass('insided-community-slider__user-avatar')
    .append($userAvatarImage)
  var $userInfo = $('<div>')
    .addClass('insided-community-slider__user-info');
  var $userName = $('<span>')
    .text(this.data.user.name)
    .addClass('insided-community-slider__user-name');
  var $userRank = $('<span>')
    .text(this.data.user.rank)
    .addClass('insided-community-slider__user-rank');
  $userInfo
    .append($userName)
    .append($userRank);

  var $cardContent = $('<article>')
    .addClass('insided-community-slider__card-content');
  var $cardTitle = $('<h4>')
    .text(this.data.title)
    .addClass('insided-community-slider__card-title');
  var $cardText = $('<p>')
    .text(this.data.content)
    .addClass('insided-community-slider__card-text');
  $cardContent
    .append($userInfo)
    .append($cardTitle)
    .append($cardText);
  $card
    .append($userAvatar)
    .append($cardContent);
  this.html = $card;
  this.loadStyles();
  return this;
}

function loadStyles () {
  if (!stylesLoaded) {
    styleLoader.addStyle('insided-community-slider__card', sliderCardStyles);
    styleLoader.addStyle('insided-community-slider__user-avatar', sliderUserAvatarStyles);
    styleLoader.addStyle('insided-community-slider__user-avatar--image', sliderUserAvatarImageStyles);
    styleLoader.addStyle('insided-community-slider__card-content', sliderCardContentStyles);
    styleLoader.addStyle('insided-community-slider__user-name', sliderUserNameStyles);
    styleLoader.addStyle('insided-community-slider__user-rank', sliderUserRankStyles);
    styleLoader.addStyle('insided-community-slider__card-title', sliderCardTitleStyles);
    styleLoader.addStyle('insided-community-slider__card-text', sliderCardTextStyles);
  }
  stylesLoaded = true;
}

function render () {
  this.getHtml().detach();
  this.$element.append(this.getHtml());
  return this;
}

function getHtml () {
  return this.html;
}

SliderCard.prototype.init = init;
SliderCard.prototype.loadStyles = loadStyles;
SliderCard.prototype.render = render;
SliderCard.prototype.getHtml = getHtml;

module.exports = SliderCard;
