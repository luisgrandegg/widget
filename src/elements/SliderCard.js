'use strict';

var $ = require('jquery');
var assign = require('lodash.assign');

var styleLoader = require('../styleLoader');

var stylesLoaded = false;

function getSliderCardStyles (options) {
  return {
    'padding': options.padding,
    'border-bottom': '1px solid black',
    'display': 'table'
  };
}

function getSliderUserAvatarStyles (options) {
  return {
    'display': 'table-cell',
    'vertical-align': 'top',
    'text-align': 'center',
    'overflow': 'hidden',
    'padding-right': options.padding,
    'box-sizing': 'border-box',
    'min-width': '75px'
  };
};

function getSliderUserAvatarImageStyles () {
  return {
    'width': '50px',
    'height': '50px',
    'border-radius': '100%'
  };
}

function getSliderCardContentStyles () {
  return {
    'display': 'table-cell',
    'vertical-align': 'top'
  };
}

function getSliderUserNameStyles (options) {
  return {
    'color': options.brandColor,
    'margin-right': '10px'
  };
}

function SliderCard ($element, options, data) {
  this.$element = $element;
  this.data = data;
  this.options = options;
  this.cssClass = {
    card: this.options.cssNamespace + '__card',
    userAvatar: this.options.cssNamespace + '__user-avatar',
    userAvatarImage: this.options.cssNamespace + '__user-avatar--image',
    userInfo: this.options.cssNamespace + '__user-info',
    userName: this.options.cssNamespace + '__user-name',
    userRank: this.options.cssNamespace + '__user-rank',
    cardContent: this.options.cssNamespace + '__card-content',
    cardTitle: this.options.cssNamespace + '__card-title',
    cardText: this.options.cssNamespace + '__card-text'
  };
  this.init();
}

function init () {
  var $card = $('<article>')
    .addClass(this.cssClass.card)
  var $userAvatarImage = $('<img>')
    .attr('src', this.data.user.avatar)
    .addClass(this.cssClass.userAvatarImage);
  var $userAvatar = $('<div>')
    .addClass(this.cssClass.userAvatar)
    .append($userAvatarImage)
  var $userInfo = $('<div>')
    .addClass(this.cssClass.userInfo);
  var $userName = $('<span>')
    .text(this.data.user.name)
    .addClass(this.cssClass.userName);
  var $userRank = $('<span>')
    .text(this.data.user.rank)
    .addClass(this.cssClass.userRank);
  $userInfo
    .append($userName)
    .append($userRank);

  var $cardContent = $('<div>')
    .addClass(this.cssClass.cardContent);
  var $cardTitle = $('<h4>')
    .text(this.data.title)
    .addClass(this.cssClass.cardTitle);
  var $cardText = $('<p>')
    .text(this.data.content)
    .addClass(this.cssClass.cardText);
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
    styleLoader.addStyle(this.cssClass.card, getSliderCardStyles(this.options));
    styleLoader.addStyle(this.cssClass.userAvatar, getSliderUserAvatarStyles(this.options));
    styleLoader.addStyle(this.cssClass.userAvatarImage, getSliderUserAvatarImageStyles());
    styleLoader.addStyle(this.cssClass.cardContent, getSliderCardContentStyles());
    styleLoader.addStyle(this.cssClass.userName, getSliderUserNameStyles(this.options));
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
