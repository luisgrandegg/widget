'use strict';

function toSeconds (miliseconds) {
  return (miliseconds / 1000) + 's';
}

module.exports = {
  toSeconds: toSeconds
};
