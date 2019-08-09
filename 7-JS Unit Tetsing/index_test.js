var assert = require("assert");
var Calculate = require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('tests if the output of !5 is equal to 120', () => {
      assert.equal(Calculate.factorial(5), 120);
    });
  });
});