// var data = require('./pacman');
var chai = require('chai');
var should = require('chai').should();
var pacman = require('./pacman');
var input1 = './input.txt';
var input2 = './test2.txt';
var input3 = './test3.txt';

var firstTest = pacman.pacman(input1);
var secondTest = pacman.pacman(input2);
var thirdTest = pacman.pacman(input3);


describe('input.txt test', function () {
  it('should output correct data-structure', function () {
    return (Array.isArray(firstTest)).should.equal(true);
  });
  it('should correctly report output length', function () {
    return (firstTest.length).should.equal(3);
  });
  it('should have correct xPosition', function () {
    return (firstTest[0]).should.equal(1);
  });
  it('should have correct yPosition', function () {
    return (firstTest[1]).should.equal(4);
  });
  it('should have correct amount of coins', function () {
    return (firstTest[2]).should.equal(7);
  });
});

describe('test2.txt test', function () {
  it('should output correct data-structure', function () {
    return (Array.isArray(secondTest)).should.equal(true);
  });
  it('should correctly report output length', function () {
    return (secondTest.length).should.equal(3);
  });
  it('should have correct xPosition', function () {
    return (secondTest[0]).should.equal(0);
  });
  it('should have correct yPosition', function () {
    return (secondTest[1]).should.equal(2);
  });
  it('should have correct amount of coins', function () {
    return (secondTest[2]).should.equal(4);
  });
});

describe('test3.txt test', function () {
  it('should output correct data-structure', function () {
    return (Array.isArray(thirdTest)).should.equal(true);
  });
  it('should correctly report output length', function () {
    return (thirdTest.length).should.equal(3);
  });
  it('should have correct xPosition', function () {
    return (thirdTest[0]).should.equal(1);
  });
  it('should have correct yPosition', function () {
    return (thirdTest[1]).should.equal(4);
  });
  it('should have correct amount of coins', function () {
    return (thirdTest[2]).should.equal(7);
  });
});



