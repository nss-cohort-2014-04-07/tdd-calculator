/* global describe, it */

'use strict';

var expect = require('chai').expect;
var traceur = require('traceur');
var Calculator = traceur.require(__dirname + '/../../app/models/calculator.js');

describe('Calculator', function(){

  describe('.addTwoFractions', function(){
    it('should add two fractions', function(){
      var fraction = Calculator.addTwoFractions('1/3', '2/4');
      expect(fraction).to.equal('10/12');
    });
  });

  describe('.addFractions', function(){
    it('should add a list of fractions', function(){
      var fraction = Calculator.addFractions('1/3', '2/4', '3/5');
      expect(fraction).to.equal('86/60');
    });
  });

  describe('.add', function(){
    it('should add two numbers', function(){
      var sum = Calculator.add(2,3);
      expect(sum).to.equal(5);
    });
  });

  describe('.subtract', function(){
    it('should find difference between two numbers', function(){
      var diff1 = Calculator.subtract(3,2);
      expect(diff1).to.equal(1);

      var diff2 = Calculator.subtract(-4,-2);
      expect(diff2).to.equal(-2);
    });
  });

  describe('.pow', function(){
    it('should raise a base to an exponent', function(){
      var exp1 = Calculator.pow(2,0);
      expect(exp1).to.equal(1);

      var exp2 = Calculator.pow(2,2);
      expect(exp2).to.equal(4);
    });
  });

  describe('.sum', function(){
    it('should add up a list of numbers', function(){
      var sum = Calculator.sum([3,4,5]);
      expect(sum).to.equal(12);
    });
  });

});
