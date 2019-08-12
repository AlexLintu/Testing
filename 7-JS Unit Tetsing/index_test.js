var assert = require("assert");
var Calculate = require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    // Edge case 0! = 1
    it('tests if the output of !0 is equal to 1', () => {
      const expectedResult = 1;
      const inputNum = 0;

      const result = Calculate.factorial(inputNum);
      assert.equal(result, expectedResult);
    });

    it('tests if the output of !5 is equal to 120', () => {
      const expectedResult = 120;
      const inputNum = 5;

      const result = Calculate.factorial(inputNum);
      assert.equal(result, expectedResult);
    });

    it('tests if the output of !3 is equal to 6', () => {
      const expectedResult = 6;
      const inputNum = 3;

      const result = Calculate.factorial(inputNum);
      assert.equal(result, expectedResult);
    });
  });
});