var assert = require("assert");
var Calculate = require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('tests if the output of !5 is equal to 120', () => {
      const expectedResult = 120;
      const inputNum = 5;

      const result = Calculate.factorial(inputNum);
      assert.equal(result, expectedResult);
    });
  });
});