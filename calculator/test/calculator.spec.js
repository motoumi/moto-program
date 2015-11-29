'use strict';

var Calculator = require('../lib/Calculator.js')
var calculator;
var $ = require('jquery');

function setup() {
  calculator = new Calculator({target: '#page'});
  console.log(calculator);
}

function teardown() {
  calculator.remove();
}
function click() {
  var args = Array.prototype.slice.call(arguments);
  args.forEach(function(button) {
    var selector='.calculator-button:contains(' + button + ')';
    var el = calculator.$el.find(selector);
    $(el).click();
  });
}

describe('Calculator', function() {
  describe('足し算', function() {
    before(function() {
      setup();
      click('1', '+', '3', '=');
    });
    after(teardown);

    it('1足す3は4', function() {
      expect(calculator.result).to.eql(4);
    });
  });

  describe('引き算', function() {
    before(function() {
      setup();
      click('1', '-', '3', '=');
    });
    after(teardown);

    it('1引く3は-2', function() {
      expect(calculator.result).to.eql(-2);
    });
  });

  describe('掛け算', function() {
    before(function() {
      setup();
      click('2', '*', '3', '=');
    });
    after(teardown);

    it('2掛け3は6', function() {
      expect(calculator.result).to.eql(6);
    });
  });

  describe('割り算', function() {
    before(function() {
      setup();
      click('6', '/', '2', '=');
    });
    after(teardown);

    it('6掛け2は3', function() {
      expect(calculator.result).to.eql(3);
    });
  });


  describe('components', function() {
    before(setup);
    after(teardown);

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








});

