'use strict';
var $ = require('jquery');
var _ = require('underscore');
var Button = require('./Button');
var Screen = require('./Screen');
//
// options:
// - target The DOM element we will fill in with our calculator
//
var BUTTONS = ['c', 'ca', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '='];

var Calculator = function(options) {
  options || (options = {});
  this.target = options.target;
  this.initialize(options);
}

Calculator.prototype = {

  initialize(options) {
    this.$el = $(options.target);
    this.screen = new Screen();
    this.$el.append(this.screen.$el);
    this.$el.append(this.buttons().map(b => b.$el));
    this.result = 0;

  },

  remove() {
    this.buttons().forEach(b => b.remove());

    this.$el && this.$el.html('');
  },

  buttons() {
    this._buttons || (
    this._buttons = BUTTONS.map(b => (new Button({
      text: b,
      onClick: _.bind(this.onClick, this),
      value: b
    }))));
    return this._buttons;
  },

  onClick(e) {
    var value = $(e.target).text();
    switch(value) {
      case 'c':
        this.clear();
      break;
      case 'ca':
        this.clearAll();
      break;
      case '=':
        if(this.operation) {
          this.result = this.calculate(this.screen.value());
          this.screen.value(this.result);
          this.operation = undefined;
        }
      break;
      default:
        if(value >=0 || value <=9) {
          this.screen.append(value);
        } else {
          this.operation = value;
          this.result = this.screen.value();
          this.screen.clear();
        }
    }
  },

  clear() {
    this.screen.clear();
  },

  clearAll() {
    this.screen.clear();
    this.result = 0;
  },

  calculate(value) {
    switch(this.operation) {
      case '+':
        return this.result + value;
      case '-':
        return this.result - value;
      case '*':
        return this.result * value;
      case '/':
        return this.result / value;
      default:
        return '';
    }
  }
}

module.exports = Calculator;
