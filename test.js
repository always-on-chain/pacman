var data = require('./pacman');
var chai = require('chai');
var should = require('chai').should();

describe('input.txt test', function () {
  it('should output correct data-structure', function () {
    return (Array.isArray(data.firstTest)).should.equal(true);
  });
  it('should correctly report output length', function () {
    return (data.firstTest.length).should.equal(3);
  });
  it('should have correct xPosition', function () {
    return (data.firstTest[0]).should.equal(1);
  });
  it('should have correct yPosition', function () {
    return (data.firstTest[1]).should.equal(4);
  });
  it('should have correct amount of coins', function () {
    return (data.firstTest[2]).should.equal(7);
  });
});

