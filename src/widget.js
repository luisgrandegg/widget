'use strict';

var $ = require('jquery');

var $window = $(window);
var $body = $('body');
var $head = $('head');

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

var communitySliderStyles = {
  'position': 'fixed',
  'box-shadow': '10px 0px 40px -1px black',
  'top': 0,
  'bottom': 0,
  'right': 0,
  'width': '500px',
  'background': "#FFF",
  'z-index': 999999
};

var communitySliderHeaderStyles = {
  'position': 'relative',
  'background-color': '#1DADF5',
  'padding': '25px',
  'color': '#FFF'
};

var communitySliderTitleStyles = {
  'margin-top': 0
};

var communitySliderCloseButtonStyles = {
  'position': 'absolute',
  'text-decoration': 'none',
  'right': '25px',
  'top': '25px',
  'color': '#FFF'
};

var communitySliderCardsStyles = {
};

var communitySliderCardStyles = {
  'padding': '25px',
  'border-bottom': '1px solid black',
  'display': 'table'
};

var communitySliderUserAvatarStyles = {
  'display': 'table-cell',
  'vertical-align': 'top',
  'text-align': 'center',
  'overflow': 'hidden',
  'padding-right': '25px'
};

var communitySliderUserAvatarImageStyles = {
  'width': '50px',
  'height': '50px',
  'border-radius': '100%'
};

var communitySliderCardContentStyles = {
  'display': 'table-cell',
  'vertical-align': 'top'
};

var communitySliderUserNameStyles = {
  'color': '#1DADF5',
  'margin-right': '10px'
};

var communitySliderUserRankStyles = {

};

var communitySliderCardTitleStyles = {

};

var communitySliderCardTextStyles = {

}

var communitySliderFooterStyles = {
  'padding': '25px'
}

function CommunitySlider () {
  this.init();
}

function parseStylesHash (selector, stylesHash) {
  var styles = selector + '{';
  for (var rule in stylesHash) {
    styles += rule + ':' + stylesHash[rule] + ';';
  }
  styles += '}';
  return styles;
}

function getStyles () {
  var $styles = $('<style>');
  var styles = '';
  styles += parseStylesHash('.insided-community', buttonStyles);
  styles += parseStylesHash('.insided-community-slider', communitySliderStyles);
  styles += parseStylesHash('.insided-community-slider__header', communitySliderHeaderStyles);
  styles += parseStylesHash('.insided-community-slider__title', communitySliderTitleStyles);
  styles += parseStylesHash('.insided-community-slider__close', communitySliderCloseButtonStyles);
  styles += parseStylesHash('.insided-community-slider__cards', communitySliderCardsStyles);
  styles += parseStylesHash('.insided-community-slider__card', communitySliderCardStyles);
  styles += parseStylesHash('.insided-community-slider__user-avatar', communitySliderUserAvatarStyles);
  styles += parseStylesHash('.insided-community-slider__user-avatar--image', communitySliderUserAvatarImageStyles);
  styles += parseStylesHash('.insided-community-slider__card-content', communitySliderCardContentStyles);
  styles += parseStylesHash('.insided-community-slider__user-name', communitySliderUserNameStyles);
  styles += parseStylesHash('.insided-community-slider__user-rank', communitySliderUserRankStyles);
  styles += parseStylesHash('.insided-community-slider__card-title', communitySliderCardTitleStyles);
  styles += parseStylesHash('.insided-community-slider__card-text', communitySliderCardTextStyles);
  styles += parseStylesHash('.insided-community-slider__footer', communitySliderFooterStyles);
  $styles.text(styles);
  return $styles;
}

function getButton () {
  return $('<button>Community slider</button>')
    .addClass('insided-community')
    .on('click', function () {
      $window.trigger('insided:community-slider:start');
    });
}

function getSliderHeader () {
  var $header = $('<header>')
    .addClass('insided-community-slider__header');
  var $title = $('<h3>Demo Community</h3>')
    .addClass('insided-community-slider__title');
  var $closeButton = $('<a href="#">X</a>')
    .addClass('insided-community-slider__close')
    .on('click', function (e) {
      e.preventDefault();
      $window.trigger('insided:community-slider:restart');
    });
  $header.append($title);
  $header.append($closeButton);
  return $header;
}

function getSliderFilters () {
  var $filters = $('<div>')
    .addClass('insided-community-slider__filters');
  return $filters;
}

function getSliderCard () {
  var $card = $('<div>')
    .addClass('insided-community-slider__card')
  var $userAvatarImage = $('<img>')
    .attr('src', 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAhMAAAAJGY3ZDE2M2IyLTk0OWUtNGU5MC05NTQwLWI0ZGUyNTkyODk5NQ.jpg')
    .addClass('insided-community-slider__user-avatar--image');
  var $userAvatar = $('<div>')
    .addClass('insided-community-slider__user-avatar')
    .append($userAvatarImage)
  var $userInfo = $('<div>')
    .addClass('insided-community-slider__user-info');
  var $userName = $('<span>John</span>')
    .addClass('insided-community-slider__user-name');
  var $userRank = $('<span>Johns rank</span>')
    .addClass('insided-community-slider__user-rank');
  $userInfo
    .append($userName)
    .append($userRank);

  var $cardContent = $('<article>')
    .addClass('insided-community-slider__card-content');
  var $cardTitle = $('<h4>This post is awesome dudeeee</h4>')
    .addClass('insided-community-slider__card-title');
  var $cardText = $('<p>This is the content of the post ohh yeaaaah, ohh yeaahhh, the content of the post</p>')
    .addClass('insided-community-slider__card-text');
  $cardContent
    .append($userInfo)
    .append($cardTitle)
    .append($cardText);
  $card
    .append($userAvatar)
    .append($cardContent);
  return $card;
}

function getSliderCards () {
  var $cards = $('<div>')
    .addClass('insided-community-slider__cards');
  $cards.append(getSliderCard());
  $cards.append(getSliderCard());
  return $cards;
}

function getSliderFooter () {
  var $footer = $('<footer>')
    .text('This is the footer')
    .addClass('insided-community-slider__footer');
  return $footer;
}

function getSlider () {
  var $slider = $('<div>')
    .addClass('insided-community-slider');
  $slider.append(getSliderHeader());
  $slider.append(getSliderFilters());
  $slider.append(getSliderCards());
  $slider.append(getSliderFooter());
  return $slider;
}

function initSlider () {
  this.$slider = this.getSlider();
  $body.append(this.$slider);
}

function destroySlider () {
  this.$slider.remove();
  this.$slider = null;
}

function init () {
  this.$button = this.getButton();
  this.$styles = this.getStyles();
  $body.append(this.$button);
  $head.append(this.$styles);
  $window.on('insided:community-slider:start', function () {
    this.$button.hide();
    this.initSlider();
  }.bind(this));
  $window.on('insided:community-slider:restart', function () {
    this.$button.show();
    this.destroySlider();
  }.bind(this));
}

CommunitySlider.prototype.init = init;
CommunitySlider.prototype.getButton = getButton;
CommunitySlider.prototype.getStyles = getStyles;
CommunitySlider.prototype.getSlider = getSlider;
CommunitySlider.prototype.initSlider = initSlider;
CommunitySlider.prototype.destroySlider = destroySlider;

'use strict';

var $ = require('jquery');

var $window = $(window);
var $body = $('body');
var $head = $('head');

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

var communitySliderStyles = {
  'position': 'fixed',
  'box-shadow': '10px 0px 40px -1px black',
  'z-index': 999999,
  'top': 0,
  'bottom': 0,
  'right': 0,
  'width': '500px',
  'background': '#FFF'
};

var communitySliderHeaderStyles = {
  'position': 'relative',
  'background-color': '#1DADF5',
  'padding': '25px',
  'color': '#FFF'
};

var communitySliderTitleStyles = {
  'margin-top': 0
};

var communitySliderCloseButtonStyles = {
  'position': 'absolute',
  'text-decoration': 'none',
  'right': '25px',
  'top': '25px',
  'color': '#FFF'
};

var communitySliderCardsStyles = {
};

var communitySliderCardStyles = {
  'padding': '25px',
  'border-bottom': '1px solid black',
  'display': 'table'
};

var communitySliderUserAvatarStyles = {
  'box-sizing': 'border-box',
  'display': 'table-cell',
  'vertical-align': 'top',
  'text-align': 'center',
  'overflow': 'hidden',
  'width': '75px',
  'padding-right': '25px'
};

var communitySliderUserAvatarImageStyles = {
  'width': '50px',
  'height': '50px',
  'border-radius': '100%'
};

var communitySliderCardContentStyles = {
  'display': 'table-cell',
  'vertical-align': 'top'
};

var communitySliderUserNameStyles = {
  'color': '#1DADF5',
  'margin-right': '10px'
};

var communitySliderUserRankStyles = {

};

var communitySliderCardTitleStyles = {

};

var communitySliderCardTextStyles = {

}

var communitySliderFooterStyles = {
  'padding': '25px'
}

function CommunitySlider () {
  this.init();
}

function parseStylesHash (selector, stylesHash) {
  var styles = selector + '{';
  for (var rule in stylesHash) {
    styles += rule + ':' + stylesHash[rule] + ';';
  }
  styles += '}';
  return styles;
}

function getStyles () {
  var $styles = $('<style>');
  var styles = '';
  styles += parseStylesHash('.insided-community', buttonStyles);
  styles += parseStylesHash('.insided-community-slider', communitySliderStyles);
  styles += parseStylesHash('.insided-community-slider__header', communitySliderHeaderStyles);
  styles += parseStylesHash('.insided-community-slider__title', communitySliderTitleStyles);
  styles += parseStylesHash('.insided-community-slider__close', communitySliderCloseButtonStyles);
  styles += parseStylesHash('.insided-community-slider__cards', communitySliderCardsStyles);
  styles += parseStylesHash('.insided-community-slider__card', communitySliderCardStyles);
  styles += parseStylesHash('.insided-community-slider__user-avatar', communitySliderUserAvatarStyles);
  styles += parseStylesHash('.insided-community-slider__user-avatar--image', communitySliderUserAvatarImageStyles);
  styles += parseStylesHash('.insided-community-slider__card-content', communitySliderCardContentStyles);
  styles += parseStylesHash('.insided-community-slider__user-name', communitySliderUserNameStyles);
  styles += parseStylesHash('.insided-community-slider__user-rank', communitySliderUserRankStyles);
  styles += parseStylesHash('.insided-community-slider__card-title', communitySliderCardTitleStyles);
  styles += parseStylesHash('.insided-community-slider__card-text', communitySliderCardTextStyles);
  styles += parseStylesHash('.insided-community-slider__footer', communitySliderFooterStyles);
  $styles.text(styles);
  return $styles;
}

function getButton () {
  return $('<button>Community slider</button>')
    .addClass('insided-community')
    .on('click', function () {
      $window.trigger('insided:community-slider:start');
    });
}

function getSliderHeader () {
  var $header = $('<header>')
    .addClass('insided-community-slider__header');
  var $title = $('<h3>Demo Community</h3>')
    .addClass('insided-community-slider__title');
  var $closeButton = $('<a href="#">X</a>')
    .addClass('insided-community-slider__close')
    .on('click', function (e) {
      e.preventDefault();
      $window.trigger('insided:community-slider:restart');
    });
  $header.append($title);
  $header.append($closeButton);
  return $header;
}

function getSliderFilters () {
  var $filters = $('<div>')
    .addClass('insided-community-slider__filters');
  return $filters;
}

function getSliderCard () {
  var $card = $('<div>')
    .addClass('insided-community-slider__card')
  var $userAvatarImage = $('<img>')
    .attr('src', 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAhMAAAAJGY3ZDE2M2IyLTk0OWUtNGU5MC05NTQwLWI0ZGUyNTkyODk5NQ.jpg')
    .addClass('insided-community-slider__user-avatar--image');
  var $userAvatar = $('<div>')
    .addClass('insided-community-slider__user-avatar')
    .append($userAvatarImage)
  var $userInfo = $('<div>')
    .addClass('insided-community-slider__user-info');
  var $userName = $('<span>John</span>')
    .addClass('insided-community-slider__user-name');
  var $userRank = $('<span>Johns rank</span>')
    .addClass('insided-community-slider__user-rank');
  $userInfo
    .append($userName)
    .append($userRank);

  var $cardContent = $('<article>')
    .addClass('insided-community-slider__card-content');
  var $cardTitle = $('<h4>This post is awesome dudeeee</h4>')
    .addClass('insided-community-slider__card-title');
  var $cardText = $('<p>This is the content of the post ohh yeaaaah, ohh yeaahhh, the content of the post</p>')
    .addClass('insided-community-slider__card-text');
  $cardContent
    .append($userInfo)
    .append($cardTitle)
    .append($cardText);
  $card
    .append($userAvatar)
    .append($cardContent);
  return $card;
}

function getSliderCards () {
  var $cards = $('<div>')
    .addClass('insided-community-slider__cards');
  $cards.append(getSliderCard());
  $cards.append(getSliderCard());
  return $cards;
}

function getSliderFooter () {
  var $footer = $('<footer>')
    .text('This is the footer')
    .addClass('insided-community-slider__footer');
  return $footer;
}

function getSlider () {
  var $slider = $('<div>')
    .addClass('insided-community-slider');
  $slider.append(getSliderHeader());
  $slider.append(getSliderFilters());
  $slider.append(getSliderCards());
  $slider.append(getSliderFooter());
  return $slider;
}

function initSlider () {
  this.$slider = this.getSlider();
  $body.append(this.$slider);
}

function destroySlider () {
  this.$slider.remove();
  this.$slider = null;
}

function init () {
  this.$button = this.getButton();
  this.$styles = this.getStyles();
  $body.append(this.$button);
  $head.append(this.$styles);
  $window.on('insided:community-slider:start', function () {
    this.$button.hide();
    this.initSlider();
  }.bind(this));
  $window.on('insided:community-slider:restart', function () {
    this.$button.show();
    this.destroySlider();
  }.bind(this));
}

CommunitySlider.prototype.init = init;
CommunitySlider.prototype.getButton = getButton;
CommunitySlider.prototype.getStyles = getStyles;
CommunitySlider.prototype.getSlider = getSlider;
CommunitySlider.prototype.initSlider = initSlider;
CommunitySlider.prototype.destroySlider = destroySlider;

new CommunitySlider({});
