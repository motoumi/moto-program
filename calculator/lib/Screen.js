'use strict';

var $ = require('jquery');

var Screen = function(options) {
  options || (options = {});
  this.initialize(options);
}

Screen.prototype = {

  initialize(options) {
    this.$el = $('<div></div>', {
      'class': options.className + ' screen'
    });
  },

  value(data) {
    if(data !== undefined) {
      this.$el.text(data);
    }
    return parseInt(this.$el.text());
  },

  append(data) {
    this.$el.text(this.$el.text() + data);
    return this;
  },

  clear() {
    this.$el.text('');
  }
}
module.exports = Screen;
