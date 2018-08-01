var chai = require('chai');
var should = require('chai').should();
var pacman = require('../pacman');
var input1 = './tests/input.txt';
var input2 = './tests/test2.txt';
var input3 = './tests/test3.txt';
var input4 = './tests/test4.txt';
var input5 = './tests/test5.txt';

var firstTest = pacman.pacman(input1);
var secondTest = pacman.pacman(input2);
var thirdTest = pacman.pacman(input3);
var fourthTest = pacman.pacman(input4);
var fifthTest = pacman.pacman(input5);


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

describe('test4.txt test', function () {
  it('should output correct data-structure', function () {
    return (Array.isArray(fourthTest)).should.equal(true);
  });
  it('should correctly report output length', function () {
    return (fourthTest.length).should.equal(3);
  });
  it('should have correct xPosition', function () {
    return (fourthTest[0]).should.equal(2);
  });
  it('should have correct yPosition', function () {
    return (fourthTest[1]).should.equal(5);
  });
  it('should have correct amount of coins', function () {
    return (fourthTest[2]).should.equal(6);
  });
});

describe('test5.txt test', function () {
  it('should output correct data-structure', function () {
    return (Array.isArray(fifthTest)).should.equal(true);
  });
  it('should correctly report output length', function () {
    return (fifthTest.length).should.equal(3);
  });
  it('should have correct xPosition', function () {
    return (fifthTest[0]).should.equal(3301);
  });
  it('should have correct yPosition', function () {
    return (fifthTest[1]).should.equal(3453);
  });
  it('should have correct amount of coins', function () {
    return (fifthTest[2]).should.equal(3);
  });
});



