'use strict';

var $ = require('jquery');

//
// options:
// className: the css class name we will apply to our button;
// text: The text to display on the button
// onClick: This function will be called when the button is clicked;
// value: A data value to associate with the button;
//

var Button = function(options) {
  options || (options = {});
  this.initialize(options);
}

Button.prototype = {

  initialize: function(options) {
    this.onClick = options.onClick || function() {};
    this.$el = $('<button></button>', {
      "class": 'calculator-button ' + options.text + ' ' + options.className,
      text: options.text,
      on: {
        click: this.onClick
      }
    });
  },

  remove: function() {
    this.$el.off('click', this.onClick);
    this.$el.remove();
  }
}

module.exports = Button;
