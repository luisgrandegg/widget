'use strict';

var $ = require('jquery');
var assign = require('lodash.assign');

var styleLoader = require('../styleLoader');
var DataLoader = require('../DataLoader');

var Card = require('./SliderCard');

var $window = $(window);

var defaults = {
  styles: {},
  states: {
    started: 'started',
    loading: 'loading',
    loaded: 'loaded'
  }
};

function SliderCards ($element, options) {
  this.$element = $element;
  this.options = assign({}, defaults, options);
  this.states = this.options.states;
  this.cards = [];
  this.dataLoader = new DataLoader(this.options.key);
  this.init();
  this.loadData();
}

function init () {
  var $cards = $('<div>')
    .addClass(this.states.started)
    .addClass('insided-community-slider__cards');
  this.html = $cards;
  this.setState(this.states.started);
  styleLoader.addStyle('insided-community-slider__cards', this.options.styles);
  return this;
}

function setState (state) {
  if (this.state) {
    this.getHtml().removeClass(this.state);
  }
  this.getHtml().addClass(state);
  this.state = state;
  $window.trigger('insided:community-slider:change', this.state);
}

function setLoadedState () {
  this.setState(this.states.loaded);
}

function loadData () {
  this.setState(this.states.loading);
  return this.dataLoader.fetch()
    .then(this.renderCards.bind(this))
    .then(this.setLoadedState.bind(this));
}

function renderCard (cardData) {
  var card = new Card(this.getHtml(), this.options, cardData);
  this.cards.push(card);
  card.render();
}

function renderCards (data) {
  data.forEach(this.renderCard.bind(this));
}

function render () {
  this.getHtml().detach();
  this.$element.append(this.getHtml());
  return this;
}

function getHtml () {
  return this.html;
}

SliderCards.prototype.init = init;
SliderCards.prototype.getHtml = getHtml;
SliderCards.prototype.render = render;
SliderCards.prototype.setState = setState;
SliderCards.prototype.setLoadedState = setLoadedState;
SliderCards.prototype.loadData = loadData;
SliderCards.prototype.renderCards = renderCards;
SliderCards.prototype.renderCard = renderCard;

module.exports = SliderCards;
