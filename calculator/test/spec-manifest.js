(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
      "class": 'calculator-button ' + options.className,
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

},{"jquery":"jquery"}],2:[function(require,module,exports){
'use strict';
var $ = require('jquery');
var _ = require('underscore');
var Button = require('./Button');
var Screen = require('./Screen');
//
// options:
// - target The DOM element we will fill in with our calculator
//
var BUTTONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '=', 'c', 'ca'];

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
        this.result = this.calculate(this.screen.value());
        this.screen.value(this.result);
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

},{"./Button":1,"./Screen":3,"jquery":"jquery","underscore":"underscore"}],3:[function(require,module,exports){
'use strict';

var $ = require('jquery');

var Screen = function(options) {
  options || (options = {});
  this.initialize(options);
}

Screen.prototype = {

  initialize(options) {
    this.$el = $('<div></div>', {
      'class': options.className
    });
  },

  value(data) {
    if(data) {
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

},{"jquery":"jquery"}],4:[function(require,module,exports){
'use strict'
var Calculator = require('../lib/Calculator.js')
var calculator;

function setup() {
  calculator = new Calculator({target: '#page'});
  console.log(calculator);
}

function teardown() {
  calculator.remove();
}


describe('Calculator', function() {
  before(setup);
  //after(teardown);

  it('ボタン１を表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(1)').length).to.eql(1);
  });

  it('ボタン2を表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(2)').length).to.eql(1);
  });

  it('ボタン3を表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(3)').length).to.eql(1);
  });

it('ボタン4を表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(4)').length).to.eql(1);
  });

it('ボタン5を表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(5)').length).to.eql(1);
  });

it('ボタン6を表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(6)').length).to.eql(1);
  });

it('ボタン7を表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(7)').length).to.eql(1);
  });

it('ボタン8を表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(8)').length).to.eql(1);
  });

it('ボタン9を表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(9)').length).to.eql(1);
  });

it('ボタン0を表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(0)').length).to.eql(1);
  });

it('ボタン+を表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(+)').length).to.eql(1);
  });

it('ボタン-を表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(-)').length).to.eql(1);
  });


it('ボタン*を表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(*)').length).to.eql(1);
  });

it('ボタン/を表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(/)').length).to.eql(1);
  });


it('ボタンcを表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(c)').length).to.eql(2);
  });

it('ボタンcaを表示する', function() {
    expect(calculator.$el.find('.calculator-button:contains(ca)').length).to.eql(1);
  });









});


},{"../lib/Calculator.js":2}]},{},[4]);
