const assertArraysEqual = require('../assertArraysEquals')
const assert = require('chai').assert;


describe('Test if assertArraysEqual function works', () => {
  
  it(`["1", "2", "3"] should = ["1", "2", "3"]`, () => {
    
    assert.doesNotThrow(() => {
      assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
    });
  
  });

});
