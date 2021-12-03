const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  it('Should return an error if function has not got arg', () => {
    expect(formatFullname()).to.equal('Error');
  });

  it('Should return an error if arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(14)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () { })).to.equal('Error');
  });

  it('Should return an error if arg is not proper', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John DoE Doe')).to.equal('Error');
    expect(formatFullname('Doe')).to.equal('Error');
  });

  it('Should return proper full name if arg ok', () => {
    expect(formatFullname('John Doe')).to.equal('John Doe');
    expect(formatFullname('john DOE')).to.equal('John Doe');
    expect(formatFullname('JoHnnAn doe')).to.equal('Johnnan Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
  });
});