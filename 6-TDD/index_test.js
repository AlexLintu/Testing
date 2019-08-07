const assert = require('assert');
const Calculate = require('../index.js')

describe('Calculate', () => {
  describe('.sum', () => {
    it('returns the sum of an array of numbers', () => {
      // Setup
      const inputArr = [1, 2, 3];
      const expectedSum = 6;
      // Exercise
      const result = Calculate.sum(inputArr);
      // Verification
      assert.equal(result, expectedSum);
    });
  });
});