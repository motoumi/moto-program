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

